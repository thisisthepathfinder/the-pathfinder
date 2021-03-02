export const state = () => ({
  loadedLang: null,
  notifications: {
    queue: []
  }
})

export const getters = {
  notificationQueue: state => state.notifications.queue
}

export const mutations = {
  addNotification (state, notifyObj) {
    state.notifications.queue.push(notifyObj)
  },
  dismissNotification (state, notifyID) {
    const _findIndex = require('lodash/findIndex')
    const notifyIndex = _findIndex(state.notifications.queue, { id: notifyID })
    state.notifications.queue.splice(notifyIndex, 1)
  }
}

export const actions = {
  doNotification ({ commit }, notifyObj) {
    commit('addNotification', notifyObj)
    // Should implement timer, do I do it with promises?
    // It might be a bad idea to handle the toast timer
    // here because the UI might not have loaded?
    // The pro is that it's universal across different layout
    // but does that even matter? It will 100% not matter if I run
    // ONLY ONE layout instead of multiple.
  },
  testPopulateNotifications ({ commit }) {
    commit('addNotification', { id: 0, msg: 'Please make sure it has an appropriate `as` value and it is preloaded intentionally.', type: 'success', dismissable: true, delay: 1500 })
    commit('addNotification', { id: 1, msg: 'Please make sure it has an appropriate `as` value and it is preloaded intentionally.', type: 'error', dismissable: true, delay: 1500 })
    commit('addNotification', { id: 2, msg: 'Please make sure it has an appropriate `as` value and it is preloaded intentionally.', type: 'info', dismissable: true, delay: 1500 })
    commit('addNotification', { id: 3, msg: 'Please make sure it has an appropriate `as` value and it is preloaded intentionally.', type: 'warning', dismissable: true, delay: 1500 })
  }
}
