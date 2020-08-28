const mutations = {
  setAdmin(state, data) {
    state.admin = data;
  },
  setAuthState(state, data) {
    state.authenticated = data;
  },
  setVizType(state, data) {
    state.chart = data;
  },
  setTheme(state, data) {
    state.theme = data;
  },
  setUserList(state, data) {
    state.users = data;
  },
  setSelectedUser(state, data) {
    state.user = data;
  },
  setSessionList(state, data) {
    state.sessions = data;
  },
  setSession(state, data) {
    state.session = data;
  }
};

export default mutations;