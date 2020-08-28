const getters = {
  getAdmin(state) {
    return state.admin;
  },
  getVizType(state) {
    return state.chart;
  },
  getTheme(state) {
    return state.theme;
  },
  getUserList(state) {
    return state.users;
  },
  getSelectedUser(state) {
    return state.user;
  },
  getSessionList(state) {
    return state.sessions;
  },
  getSession(state) {
    return state.session;
  }
};

export default getters;
