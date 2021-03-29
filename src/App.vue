<template>
  <div>
    <img src="https://micropolitica.com.mx/assets/1.png" style="width:180px; text-align: center; padding: 20px 10px 0;" alt="logo img">
  </div>
  <div id="nav">
    <router-link to="/">Registrar</router-link> |
    <router-link to="/representantes">Representantes</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f6f6f6;
}

#nav {
  padding: 20px 0 25px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
