import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: "AIzaSyAzASnRLHAd7d78QB1jyr6Q_-eLqVVTipU",
  authDomain: "vue-project-a665b.firebaseapp.com",
  projectId: "vue-project-a665b",
  storageBucket: "vue-project-a665b.appspot.com",
  messagingSenderId: "187092687293",
  appId: "1:187092687293:web:e572d29fa7d780131d9ad4",
  measurementId: "G-57KE7K7236"
};
firebase.initializeApp(firebaseConfig)







new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
