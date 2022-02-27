<template>
  <div class="mainbody">
      <v-btn href="https://www.instagram.com/uwrs_robotics/">Instagram</v-btn>
      <v-btn href="https://discord.gg/hq2HWpZAQD">Discord</v-btn>
      <v-btn href="https://www.youtube.com/channel/UCCscF0MFm4ezqTd8IM-m0iQ">YouTube</v-btn>
  </div>
</template>

<script>
export default {
  name: 'JoinUs',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.mainbody{
  width:50%;
  margin: auto;
}
</style>
