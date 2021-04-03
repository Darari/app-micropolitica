<template>
  <div class="items">
    <h2 style="font-size: 25px; text-align:center; letter-spacing: 4px; padding: 2px 0 15px 10px; margin-bottom: 10px;">Representantes </h2>

    <div class="row">
      <input type="text" @keyup="isValid($event)" v-model.trim="query" placeholder="Buscar">
      <br>
      <br>
    </div>

    <div v-for="item in items" :key="item.id">
      <router-link :to="goToItem(item.id)">
        <p>
          {{ item.name }} {{ item.lastname }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .items {
    padding: 10px;
    background-color: #3b9bb3;
  }
  p {
    font-weight: bold;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 10px 15px;
    color: #fff;
  }
  a {
    text-decoration: none;
  }
  
  input {
    padding: .5rem;
    font-size: 1.2rem;
    border: 3px solid #e3dfd7;
    border-radius: 8px;
  }
  input:focus {
    outline: none;
  }
</style>


<script>


  import { firestore } from '@/firebase.js'

  export default {
    data() {
      return {
        query: '',
        items: [],
      };
    },
    props: ["id"],
    methods: {
      goToItem(id) {
        return '/representante/' + id;
      }
    },
    mounted() {
      var items = firestore.collection("items");

      items.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          var item = doc.data();
          item.id = doc.id;
          this.items.push(item);
        });
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    },
  }

</script>

