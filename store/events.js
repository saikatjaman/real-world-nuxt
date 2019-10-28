import EventService from '@/services/EventService.js'
// state call mutations pass the data to page
export const state = () => ({
  events: [],
  event:{}
})
// mustion call action
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}
// action call API 
export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then(response => {
      commit('SET_EVENTS', response.data)
    })
  },
  // data with ID
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then(response => {
      commit('SET_EVENT', response.data)
    })
  }
}