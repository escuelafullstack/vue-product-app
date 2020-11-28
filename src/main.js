import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDyWg8vMFq-eSDWfbHvGByaE5OYlFt0VLs",
  authDomain: "product-app-vue.firebaseapp.com",
  databaseURL: "https://product-app-vue.firebaseio.com",
  projectId: "product-app-vue",
  storageBucket: "product-app-vue.appspot.com",
  messagingSenderId: "210303795388",
  appId: "1:210303795388:web:a09445159e1a16f0abd0b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
