<template>
  <div class="items">
    <h2 style="text-shadow: 3px 4px 5px rgb(3 28 54 / 29%);
    font-size: 39px;
    text-align:center;
    letter-spacing: 2px;
    padding: 2px 0 5px 10px;">Candidatos</h2>


    <div class="row">
      <input type="text"
            @keyup="searchForName()"
            v-model.trim="searchName"
            placeholder="Buscar por nombre o apellido">
            
      <select v-model="searchParty"
              @change="searchForParty()">
        <option value="Redes Sociales Progresistas">Redes Sociales Progresistas</option>
        <option value="Partido Encuentro Solidario">Partido Encuentro Solidario</option>
        <option value="Fuerza Social por México">Fuerza Social por México</option>
        <option value="Partido Acción Nacional">Partido Acción Nacional</option>
        <option value="Partido Revolucionario Institucional">Partido Revolucionario Institucional</option>
        <option value="Partido de la Revolución Democrática">Partido de la Revolución Democrática</option>
        <option value="Partido del Trabajo">Partido del Trabajo</option>
        <option value="Partido Verde Ecologista de México">Partido Verde Ecologista de México</option>
        <option value="Movimiento Ciudadano">Movimiento Ciudadano</option>
        <option value="Movimiento Regeneración Nacional">Movimiento Regeneración Nacional</option>
        <option value="Independiente">Independiente</option>
        <option value="Todos los Partido Políticos">Todos los Todos los Partido Políticos</option>
      </select>
      
      <select v-model="searchPoliticCharge"
              @change="searchForPoliticCharge()">
        <option value="Diputación local representación proporcional">Diputación local representación proporcional</option>
        <option value="Diputación federal de mayoría relativa">Diputación federal de mayoría relativa</option>
        <option value="Diputación federal representación proporcional">Diputación federal representación proporcional</option>
        <option value="Presidencia municipal o alcaldía">Presidencia municipal o alcaldía</option>
        <option value="Regiduría">Regiduría</option>
        <option value="Sindicatura">Sindicatura</option>
        <option value="Gubernatura">Gubernatura</option>
        <option value="Todos los cargos">Todos los cargos</option>
      </select>

      <select v-model="searchPoliticState"
              @change="searchForPoliticState()">
        <option value="Baja California Sur">Baja California Sur</option>
        <option value="Campeche">Campeche</option>
        <option value="Chiapas">Chiapas</option>
        <option value="Chihuahua">Chihuahua</option>
        <option value="Ciudad de México">Ciudad de México</option>
        <option value="Coahuila">Coahuila</option>
        <option value="Colima">Colima</option>
        <option value="Durango">Durango</option>
        <option value="Estado de México">Estado de México</option>
        <option value="Guanajuato">Guanajuato</option>
        <option value="Guerrero">Guerrero</option>
        <option value="Hidalgo">Hidalgo</option>
        <option value="Jalisco">Jalisco</option>
        <option value="Michoacán">Michoacán</option>
        <option value="Morelos">Morelos</option>
        <option value="HombNayaritre">Nayarit</option>
        <option value="Nuevo León">Nuevo León</option>
        <option value="Oaxaca">Oaxaca</option>
        <option value="Puebla">Puebla</option>
        <option value="Querétaro">Querétaro</option>
        <option value="Quintana Roo">Quintana Roo</option>
        <option value="San Luis Potosí">San Luis Potosí</option>
        <option value="Sinaloa">Sinaloa</option>
        <option value="Sonora">Sonora</option>
        <option value="Tabasco">Tabasco</option>
        <option value="Tamaulipas">Hombre</option>
        <option value="Tlaxcala">Tlaxcala</option>
        <option value="Veracruz">Veracruz</option>
        <option value="Yucatán">Yucatán</option>
        <option value="Zacatecas">Zacatecas</option>
        <option value="Todos los estados">Todos los estados</option>
      </select>

      <select v-model="searchProposalSpecter"
              @change="searchForProposalSpecter()">
        <option value="Izquierda">Izquierda</option>
        <option value="Centro">Centro</option>
        <option value="Derecha">Derecha</option>
        <option value="Todos los espectros">Todos los espectros</option>
      </select>
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
    background-color: #3b9bb3;
    padding: 10px 10px 40px;
    border-radius: 15px;
    margin: 5px 8px 20px;
    box-shadow: 5px 5px 6px 0 rgb(0 0 0 / 21%), 1px 4px 4px -1px rgb(0 0 0 / 14%), 0px 0px 5px 0px rgb(0 0 0 / 21%);
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
  
  input,
  select {
    margin-bottom: 14px;
    padding: .5rem;
    font-size: 1.2rem;
    border: 3px solid #e3dfd7;
    border-radius: 8px;
    width: 100%;
  }
  select {
    width: 100%;
    max-width: 300px;
  }
  input:focus,
  select:focus {
    outline: none;
  }

  @media (min-width:721px) {
    .row {
      display: flex;
    }
  }

  @media (max-width:720px) {
    input {
      width: 100%;
      max-width: 280px;
    }
    select {
      min-width: 200px;
    }
  }
</style>


<script>


  import { firestore } from '@/firebase.js'

  export default {
    data() {
      return {
        query: '',
        items: [],
        temporal: [],
        searchName: '',
        searchParty: '',
        searchPoliticCharge: '',
        searchPoliticState: '',
        searchProposalSpecter: '',
      };
    },
    props: ["id"],
    methods: {
      goToItem(id) {
        return '/representante/' + id;
      },
      searchForName() {
        this.items = this.temporal;
        let news = [];

        for (const key in this.temporal) {
          let name = this.temporal[key].name.toLowerCase();
          let lastname = this.temporal[key].lastname.toLowerCase();
          if(name.search(this.searchName.toLowerCase()) > -1 || lastname.search(this.searchName.toLowerCase()) > -1){
            //console.log({name});
            news.push(this.temporal[key])
          }
        }

        this.items = news;
      },
      searchForParty() {
        this.items = this.temporal;

        if(this.searchParty != 'Todos los Partido Políticos') {
          let news = [];

          for (const key in this.temporal) {
            let party = this.temporal[key].party;
            if(party == this.searchParty){
              news.push(this.temporal[key])
            }
          }
          
          this.items = news;
        }

      },
      searchForPoliticCharge() {
        this.items = this.temporal;

        if(this.searchPoliticCharge != 'Todos los cargos') {
          let news = [];

          for (const key in this.temporal) {
            let politic_charge = this.temporal[key].politic_charge;
            if(politic_charge == this.searchPoliticCharge){
              news.push(this.temporal[key])
            }
          }
          
          this.items = news;
        }

      },
      searchForPoliticState() {
        this.items = this.temporal;

        if(this.searchPoliticState != 'Todos los estados') {
          let news = [];

          for (const key in this.temporal) {
            let politic_state = this.temporal[key].politic_state;
            if(politic_state == this.searchPoliticState){
              news.push(this.temporal[key])
            }
          }
          
          this.items = news;
        }

      },
      searchForProposalSpecter() {
        this.items = this.temporal;

        if(this.searchProposalSpecter != 'Todos los espectros') {
          let news = [];

          for (const key in this.temporal) {
            let proposal_specter = this.temporal[key].proposal_specter;
            if(proposal_specter == this.searchProposalSpecter){
              news.push(this.temporal[key])
            }
          }
          
          this.items = news;
        }

      },

    },
    mounted() {
      var items = firestore.collection("items");

      this.searchParty = 'Todos los Partido Políticos';
      this.searchPoliticCharge = 'Todos los cargos';
      this.searchPoliticState = 'Todos los estados';
      this.searchProposalSpecter = 'Todos los espectros';

      items.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          var item = doc.data();
          item.id = doc.id;
          this.items.push(item);
          this.temporal.push(item);
        });
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
    },
  }

</script>

