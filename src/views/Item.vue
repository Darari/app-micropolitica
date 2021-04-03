<template>
  <div class="items">

    <p>Nombre: {{ item.name }} {{ item.lastname }} </p>
    <p>Edad: {{ item.age }} </p>
    <p>Sexo: {{ item.gender }} </p>
    
    <p>Email: {{ item.public_email }} </p>
    <p>Partido Político: {{ item.party }} </p>
    <p>Estado: {{ item.politic_state }} </p>
    <p>Localidad: {{ item.locality }} </p>


  </div>
</template>

<style scoped>
  .items {
    padding: 10px;
    background-color: #3b9bb3;
  }
  p {
    border-radius: 5px;
    padding: 10px 15px;
    color: #fff;
  }
  a {
    text-decoration: none;
  }
</style>

<script>

  import { firestore } from '@/firebase.js';

  export default {
    
    props: ["id"],
    data() {
      return {
        item: {}
      }
    },
    mounted() {
      const theID = this.id;
      
      firestore.collection("items").doc(theID).get().then((doc) => {
          this.item = doc.data();
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
  }

</script>

