<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

import { firestore } from '@/firebase.js'

export default {
  name: 'Home',
  mounted() {

    var items = firestore.collection("items");

    items.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }
}
</script>
