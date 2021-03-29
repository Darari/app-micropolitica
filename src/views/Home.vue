<template>
  <div class="home">
    <h2 style="font-size: 39px; text-align:center; letter-spacing: 4px; padding: 2px 0 0 10px; margin-bottom: 10px;">Perfil del Representante </h2>

    <div class="row">
      <label for="name">Nombres </label>
      <input type="text" @keyup="isValid($event)" v-show="hide" v-model.trim="item.name" placeholder="Nombres">
    </div>

    <div class="row">
      <label for="lastname">Apellidos </label>
      <input type="text" @keyup="isValid($event)" v-model.trim="item.lastname" placeholder="Apellidos">
    </div>

    <div class="row">
      <label for="email">Correo electrónico </label>
      <input type="text" @keyup="isValid($event)" v-model.trim="item.email" placeholder="Correo Electrónico">
    </div>

    <div class="row">
      <label for="gender">Sexo </label>
      <select v-model="item.gender">
        <option value="Mujer">Mujer</option>
        <option value="Hombre">Hombre</option>
      </select>
    </div>

    <div class="row">
      <label for="age">Edad </label>
      <input type="Number" @keyup="isValid($event)" v-model.trim="item.age" placeholder="Edad">
    </div>

    <div class="row">
      <label for="website">Página Web </label>
      <input type="text" @keyup="isValid($event)" v-model.trim="item.website" placeholder="Página Web">
    </div>

    <div class="row">
      <label for="phone">Teléfono </label>
      <input type="text" @keyup="isValid($event)" v-model.trim="item.phone" placeholder="Teléfono">
    </div>

    <div class="row">
      <label for="photo">Foto URL </label>
      <input type="text" @keyup="isValid($event)" v-model.trim="item.photo" placeholder="Foto URL">
    </div>

    <div class="row">
      <label for="public_email">Correo público </label>
      <input type="text" @keyup="isValid($event)" v-model.trim="item.public_email" placeholder="Correo público">
    </div>

    <div class="row">
      <label for="facebook">Facebook </label>
      <input type="text" @keyup="isValid($event)" v-model.trim="item.facebook" placeholder="Facebook">
    </div>

    <div class="row">
      <label for="twitter">Twitter </label>
      <input type="text" @keyup="isValid($event)" v-model.trim="item.twitter" placeholder="Twitter">
    </div>

    <div class="row">
      <label for="instagram">Instagram </label>
      <input type="text" @keyup="isValid($event)" v-model.trim="item.instagram" placeholder="Instagram">
    </div>

    <div class="row">
      <label for="party">Partido al que pertenece </label>
      <select v-model="item.party">
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
      </select>
    </div>

    <div class="row">
      <input type="text" @keyup="isValid($event)" v-model.trim="item.politic_state" placeholder="Estado">
    </div>

    <div class="row">
      <label for="politic_state">¿En cuál estado de la república compite para ocupar un cargo de representación popular? </label>
      <select v-model="item.politic_state">
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
      </select>
    </div>

    <div class="row">
      <label for="politic_charge">¿Cuál es el cargo de representación por el que compite? </label>
      <input type="text" @keyup="isValid($event)" v-model.trim="item.politic_charge" placeholder="Cargo">
    </div>

    <div class="row">
      <label for="section_local">¿Cuál es la sección electoral local donde participará? </label>
      <input type="text" @keyup="isValid($event)" v-model.trim="item.section_local" placeholder="">
    </div>

    <div class="row">
      <label for="section_federal">¿Cuál es la sección electoral federal donde participará? </label>
      <input type="text" @keyup="isValid($event)" v-model.trim="item.section_federal" placeholder="">
    </div>

    <!-- 
    <input type="text" v-model="item.names" placeholder="¿En cuál estado de la república compite para ocupar un cargo de representación popular?"> <br><br>
    <input type="text" v-model="item.names" placeholder="¿Cuál es el cargo de representación por el que compite?"> <br><br>
    <input type="text" v-model="item.names" placeholder="¿Cuál es la sección electoral local donde participará?"> <br><br>
    <input type="text" v-model="item.names" placeholder="¿Cuál es la localidad en la que va a participar?"> <br><br>
    <input type="text" v-model="item.names" placeholder="Indique cuál es su último grado de estudios obtenido"> <br><br>
    <input type="text" v-model="item.names" placeholder="¿En cuál universidad, escuela o institución obtuvo su último grado?"> <br><br>
    <input type="text" v-model="item.names" placeholder="Formación ¿En qué área obtuvo su último grado?"> <br><br>
    <input type="text" v-model="item.names" placeholder="¿Ha desempeñado algún cargo de representación popular anteriormente?"> <br><br>
    <input type="text" v-model="item.names" placeholder="En caso de haber respondido positivamente, describa su trayectoria política"> <br><br>
    <input type="text" v-model="item.names" placeholder="¿Cuál fue su última experiencia de trabajo?"> <br><br>
    <input type="text" v-model="item.names" placeholder="¿Cuál fue su penúltima experiencia de trabajo?"> <br><br>
    <input type="text" v-model="item.names" placeholder="¿Domina algún idioma o lengua de pueblos originarios o indígena?"> <br><br>
    -->
    
    <br>
    <br>
    <br>
    <button @click="saveItem" class="botonsin">Finalizar registro</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: true,
      item: {
        temporal: "2018-12-01",
        name: 'Octavio Antonio',
        lastname: 'Mandujano Hernández',
        email: 'octavio.a.mandujano@gmail.com',    
        gender: 'Mujer',
        age: 31,
        website: 'https://micropolitica.com.mx/',
        phone: '5512345678',
        photo: 'data:image/png;base64,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',
        public_email: 'octavio.a.mandujano@gmail.com',
        twitter: '',
        facebook: 'https://www.facebook.com/OctavioMandujanoH/',
        instagram: 'https://www.instagram.com/mapuzteca/',
        party: 'Movimiento Regeneración Nacional',
        politic_state: 'Ciudad de México',
        politic_charge: 'Diputación federal representación proporcional',
        section_federal: '2306',
        section_local: '',
        locality: '0001',
        last_degree: 'Maestría',
        school: 'Universidad Autónoma Metropolitana',
        school_degree: 'Ciencias sociales',
        on_charge: true,
        on_charge_experience: 'Ahí',
        job_last_expierience: 'Líder Coordinador de Proyectos de Atención a Personas con Discapacidad/ Diversidad Sexual y de Género en la Alcaldía Álvaro Obregón',
        job_last_last_expierience: 'Asesor político en Agenda LGBT AC',
        language_indi: false,
        language_indi_ones: '[]',
        languates_general: true,
        languates_general_ones: 'Inglés, Portugués, Francés',
        proposal_principal: 'Homologar derechos LGBTTTI en todo el país para garantizar una sociedad más igualitaria',
        proposal_second: 'Garantizar el acceso a la vivienda social con el fin de que todas las personas puedan tener ese derecho, además de promover la creación de cooperativas de vivienda y reconocer la legalidad de la propiedad colectiva',
        proposal_third: 'Legalización y regulación del uso recreativo de las drogas',
        proposal_specter: 'Izquierda',
        state_health_security: 'A favor',
        state_resonsible: 'A favor',
        state_taxes: 'A favor',
        state_education: 'A favor',
        state_legalization_weed: 'A favor',
        state_legalization_bi: 'A favor',
        state_legalization_abort: 'A favor',
        mexico_problem: 'La pobreza',
        mexico_programs: 'Promover y apoyar emprendimientos bajo el modelo de economía social y solidaria',
        local_problem: 'Inseguridad o Delincuencia',
        local_programs: 'Garantizar el acceso a los programas sociales que ayuden a disminuir y erradicar la pobreza y la delincuencia',
        representant_popular: 'Para abonar al cambio social iniciado por la 4T',
        representant_strengths: 'Determinación, honestidad, consciencia',
      },
    };
  },
  methods: {
    async saveItem() {
      await this.$store.dispatch('saveItem', this.item);
      return this.$router.push('/representantes');
    },
    isValid(e){
      let input = e.target
      console.log(input.value);
      if (input.value.trim() != "" && input.value.trim() != 0) {
        input.classList.remove("wrong");
      } else {
        input.classList.add("wrong") ;
      }
    }
  }
}
</script>



<style scoped>
  .wrong {
    border-color: #f72a2a;
  }
  input,
  select {
    width: 100%;
    padding: .5rem;
    font-size: 1.2rem;
    border: 3px solid #e3dfd7;
    border-radius: 8px;
  }
  input:focus {
    outline: none;
  }
  .home {
    padding: 10px 10px 40px;
    background-color: #3b9bb3;

  }
  label {
    font-size: 18px;
    width: 100%;
    position: relative;
    bottom: 9px;
    text-align: left;
    padding-left: 2px;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    padding: 30px 10px 10px;
  }
  .botonsin {
    background-color: transparent;
    border: 1px solid #f8f9fa;
    text-transform: uppercase;
    border-radius: .25rem;
    padding: 13px 16px;
    line-height: 1.5;
    font-size: 1rem;
    
    display: inline-block;
    text-align: center;
    color: #f8f9fa;
    font-weight: 400;
  }
</style>
