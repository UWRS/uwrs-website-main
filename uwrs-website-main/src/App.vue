<template>
  <div id="app">
    <div id="logosection">
      <img id="logo" src="./assets/logo/logo - colour.svg">
      <p>Hub for University of Warwick hardware hobbyists from across all disciplines.</p>
      <p>Making robotics accessible to everyone.</p>
    </div>
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
