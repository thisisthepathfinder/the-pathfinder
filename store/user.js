export const state = () => ({
  user: {
    name: null,
    age: null,
    lang: 'en'
  }
})

export const mutations = {
  UPDATE_USER (state, name) {
    state.user.name = name
  }
}

export const actions = {
  SET_USER_NAME ({ commit }, name) {
    // Do an API call here.
    commit('UPDATE_USER_NAME', name)
  }
}
