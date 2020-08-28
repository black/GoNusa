import firebase from "firebase/app";
import router from "@/router";

const actions = {
  checkAdmin(context) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        keepState(context, user, true, '/home');
      } else {
        keepState(context, "", false, '/');
      }
    });
  },
  login(context) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((res) => {
        keepState(context, res.user, true, '/home');
      }).catch((err) => {
        console.log('err:', err);
      });
  },
  signout(context) {
    firebase.auth().signOut().then(() => {
      keepState(context, null, true, '/');
    }, function (error) {
      console.error('Sign Out Error', error);
    });
  },
  setAdmin(context, payload) {
    context.commit('setAdmin', payload);
  },
  setAuthState(context, payload) {
    context.commit('setAuthState', payload);
  },
  setTheme(context, payload) {
    context.commit('setTheme', payload);
  },
  setVizType(context, payload) {
    context.commit('setVizType', payload);
  },
  fetchUsersList(context, payload) {
    context.commit('setUserList', payload.length > 0 ? payload : ['user 1', 'user 2', 'user 3', 'user 4', 'user 5']);
  },
  setSelectedUser(context, payload) {
    context.commit('setSelectedUser', payload);
    context.commit('setSessionList', [payload + ' session 1', payload + ' session 2', payload + ' session 3', payload + ' session 4']);
  },
  fetchSessionList(context, payload) {
    context.commit('setSessionList', payload);
  },
  setSelectedSession(context, payload) {
    context.commit('setSession', payload);
  }
};

function keepState(context, user, state, uri) {
  context.dispatch('setAdmin', user);
  context.dispatch('setAuthState', state);
  router.push(uri);
  console.log(user);
}

export default actions;