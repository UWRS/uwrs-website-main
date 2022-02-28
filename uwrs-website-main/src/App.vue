<template>
<v-app><v-main>
  <div id="app">
    <div id="logosection" class="pb-5 pt-5">
      <img id="logo" src="./assets/logo/logo - colour.svg">
      <p>Hub for University of Warwick hardware hobbyists from across all disciplines.</p>
      <p>Making robotics accessible to everyone.</p>
    </div>
    <div id="navbar" class="pb-5">
      <v-btn href="/">About Us</v-btn>
      <v-btn href="/">Projects/Events</v-btn>
      <v-btn href="/">For Sponsors</v-btn>
      <v-btn href="/JoinUs">Sign Up</v-btn>
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
  width: 500px;
}

#logosection{

}
</style>
