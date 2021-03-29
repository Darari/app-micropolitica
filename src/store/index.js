import { createStore } from 'vuex'
import { firestore } from '@/firebase.js';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    saveItem(context, item) {
      firestore.collection('items').add(item);
    }
  },
  modules: {
  }
})
