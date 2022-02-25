<template>
  <div id="app">
    <img id="logo" src="./assets/logo - colour.svg">
    <div id="navbar">
      <v-btn>About Us</v-btn>
      <v-btn>Projects/Events</v-btn>
      <v-btn>For Sponsors</v-btn>
      <v-btn>Sign Up</v-btn>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#logo{
  width: 500px;
}
</style>
