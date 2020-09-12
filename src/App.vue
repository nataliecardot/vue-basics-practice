<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <servers></servers>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header.vue";
import Footer from "./components/shared/Footer.vue";
import Servers from "./components/server/Servers.vue";
import ServerDetails from "./components/server/ServerDetails.vue";

export default {
  components: {
    // Since using single-file component, don't have DOM restriction of case insensitivity (which would be the case when using the template property or inferring template with el). Single-file template is compiled to JS before it runs in browser; can use case-sensitive selectors because JS is case insensitive. Vue.js automatically gives us access to hyphenated version of selector in template; can be formmatted with a hyphen despite being camel cased in script
    appHeader: Header,
    // ES6 destructuring
    Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer,
  },
};
</script>

<style>
</style>
