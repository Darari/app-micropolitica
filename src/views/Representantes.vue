<template>
  <div class="representante">
    <h1>Aquí se ven los representantes</h1>
  </div>
</template>

<script>

  /*import firestore from '@/firebase.js'*/

  export default {
    data() {
      return {
        query: '',
      };
    },
    methods: {
      createItem(context, item) {
        /*firestore.collection('items').add(item);*/
        console.log("holi");
      }
    },

  }

</script>

