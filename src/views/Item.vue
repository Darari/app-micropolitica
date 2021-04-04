<template>
  <div class="back" style="text-align: left; cursor: pointer;" @click="$router.go(-1)">
    <img src="https://www.pngrepo.com/png/286678/512/arrow-back.png" style="box-shadow:none;" width="30" alt="back">
  </div>
  <div class="all">
    <div class="items">
      <div style="text-align:center;">
        <h2>Registro de Representante Popular</h2>
        <img :src="item.photo" alt="photo">
      </div>
      <p> <strong>Nombre</strong>: {{ item.name }} {{ item.lastname }} </p>
      <p> <strong>Sexo</strong>: {{ item.gender }} </p>
      <p> <strong>Edad</strong>: {{ item.age }} </p>
      <p> <strong>Estado</strong>: {{ item.politic_state }} </p>
      <p> <strong style="position: relative; bottom: 30px;">Partido: </strong> <img :src="img" alt="logo" width="70"> </p>
      <p> <strong>Cargo</strong>: {{ item.politic_charge }} </p>
    </div>

    <div class="items02">
      <h2>Formación</h2>
      <p> <strong>Último grado obtenido</strong>: {{ item.last_degree }} </p>
      <p> <strong>Institución educativa</strong>: {{ item.school }} </p>
      <p> <strong>Área de estudio</strong>: {{ item.school_degree }} </p>
    </div>

    <div class="items02">
      <h2>Experiencia Laboral</h2>
      <p> <strong>Experiencia como respresentante popular previa</strong>: {{ item.on_charge_experience }} </p>
      <p> <strong>Experiencia laboral</strong>: {{ item.job_last_experience }} </p>
    </div>

    <div class="items02">
      <h2>Perfíl político</h2>
      <p> <strong>Principal problema de México</strong>: {{ item.mexico_problem }} </p>
      <p> <strong>Propuesta para solucionar</strong>: {{ item.mexico_programs }} </p>
      <p> <strong>Principal problema de la localidad donde aspira a la representación popular</strong>: {{ item.local_problem }} </p>
      <p> <strong>Propuesta para solucionar</strong>: {{ item.local_programs }} </p>


      <p> <strong>Razones por las que quiere ser representante popular</strong>: {{ item.representant_popular }} </p>
      <p> <strong>Principales Fortalezas para ser representante popular</strong>: {{ item.representant_strengths }} </p>
    </div>
  </div>
</template>

<style scoped>
  .all {
    box-shadow: 5px 5px 6px 0 rgb(0 0 0 / 21%), 1px 4px 4px -1px rgb(0 0 0 / 14%), 0px 0px 5px 0px rgb(0 0 0 / 21%);
    background-color: #3b9bb3;
    padding: 10px 10px 40px;
    border-radius: 15px;
    margin: 5px 8px 20px;
  }
  .items {
    text-align: left;
    padding: 35px 5%;
    columns: 350px 2;
  }
  .items02 {
    padding: 15px 5%;
    text-align: left;
    column-gap: 40px;
  }
  p {
    padding: 0 15px;
    color: #fff;
    font-size: 1.2em;
  }
  a {
    text-decoration: none;
  }
  h2 {
    margin: 0;
    font-size: 2.5em;
    padding-bottom: 18px;
  }
  .back {
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 14%);
    background: #f2f4fb;
    border-radius: 20px;
    padding: 7px 4px 1px 11px;
    margin: 0 10px 15px;
    width: 40px;
  }
</style>

<script>

  import { firestore } from '@/firebase.js';

  export default {
    
    props: ["id"],
    data() {
      return {
        item: {},
        img: 'https://micropolitica.com.mx/assets/img/parties/',
      }
    },
    mounted() {
      const theID = this.id;
      
      firestore.collection("items").doc(theID).get().then((doc) => {
          this.item = doc.data();
          switch(this.item.party) {
            case'Redes Sociales Progresistas':
              this.img = this.img + 'rsp.png';
              break;
            case'Partido Encuentro Solidario':
              this.img = this.img + 'pes.png';
              break;
            case'Fuerza Social por México':
              this.img = this.img + 'fuerza.png';
              break;
            case'Partido Acción Nacional':
              this.img = this.img + 'pan.png';
              break;
            case'Partido Revolucionario Institucional':
              this.img = this.img + 'pri.png';
              break;
            case'Partido de la Revolución Democrática':
              this.img = this.img + 'prd.png';
              break;
            case'Partido del Trabajo':
              this.img = this.img + 'pt.png';
              break;
            case'Partido Verde Ecologista de México':
              this.img = this.img + 'verde.png';
              break;
            case'Movimiento Ciudadano':
              this.img = this.img + 'mov.png';
              break;
            case'Movimiento Regeneración Nacional':
              this.img = this.img + 'morena.png';
              break;
            default:
              break;
          }
          
          console.log(this.img);

        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
  }

</script>

