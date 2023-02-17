<template>
  <div class="events">
    <img id="sitelogo" alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Info-Card v-for="(event, index) in events" :key="index" :event="event" />
    <h1>heeeeello</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// jbed lfils
// import HelloWorld from "@/components/HelloWorld.vue";
import InfoCard from "@/components/Info-Card.vue";
// import axios from "axios";
export default {
  name: "HomeView",
  components: {
    // HelloWorld,
    InfoCard,
  },
  data() {
    return {
      events: null,
    };
  },
};
</script>
<style scoped>
#sitelogo {
  width: 60px;
}
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
