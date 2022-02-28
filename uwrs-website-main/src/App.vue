<template>
<v-app><v-main>
  <div id="app">
    <div id="logosection" onclick="window.location='/';" class="pb-3 pt-5">
        <img id="logo" src="./assets/logo/logo - white.svg">
        <span><br>Hub for University of Warwick hardware hobbyists from across all disciplines.<br>
        Making robotics accessible to everyone.</span>
    </div>
    <div id="navbar" class="pb-2 pt-2">
      <v-btn href="/">About Us</v-btn>
      <v-btn href="/">Projects/Events</v-btn>
      <v-btn href="/">For Sponsors</v-btn>
      <v-btn href="/#/JoinUs">Sign Up</v-btn>
    </div>
    <router-view/>
  </div>
  </v-main></v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
}

#logo{
  width: 350px;
}

#logosection{
  cursor: pointer;
  background: grey;
  color: white;
}

#logosection span{
  font-size: 15px;
}
</style>
