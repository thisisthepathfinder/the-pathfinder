/**
 *
 * Behaviour:
 *  - All notifications should be dismissable.
 *
 * Should accept:
 *  - id: Just a unique identifier. Could set this to have a default? Can I make it `Date.now()`, would that be an issue if I want to mix in notifications from the server?
 *  - msg: Main message to display.
 *  - type: Success, error, warning, info.
 *  - timed: How long it stays on the screen.
 *  - redirect: { If any redirection is available. This means the structure needs to be route-based.
 *      label: CTA for notification.
 *      route: Where are we redirecting to.
 *      element: The element to scroll to and focus.
 *    }
 *
 */

export const state = () => ({
  list: [], // The full list.
  queue: [] // To be displayed.
})

export const getters = {
  getQueue: state => state.queue
}

export const mutations = {
  addNotification (state, notifyObj) {
    state.queue.push(notifyObj)
  },
  removeNotification (state, notifyID) {
    const _findIndex = require('lodash/findIndex')
    const notifyIndex = _findIndex(state.queue, { id: notifyID })
    state.queue.splice(notifyIndex, 1)
  }
}

export const actions = {
  notify ({ commit }, notifyObj) {
    // Add unique identifier, not sure if has
    // issues when mixing with server notifications.
    notifyObj.id = Date.now()
    commit('addNotification', notifyObj)
  },
  dismiss ({ commit }, notifyID) {
    commit('removeNotification', notifyID)
  },
  dismissAll () {

  },
  testNotification ({ commit }) {
    commit('addNotification', { id: 0, msg: 'Testing notification', type: 'error', redirect: { label: 'Please fill this in.', route: 'current', element: '' } })
  }
}
