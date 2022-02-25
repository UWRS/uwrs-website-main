<template>
  <div id="app">
    <img id="logo" src="./assets/logo - colour.svg">
    <ul id="navbar">
      <li>About Us</li>
      <li>Projects/Events</li>
      <li>For Sponsors</li>
      <li>Sign Up</li>
    </ul>
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
