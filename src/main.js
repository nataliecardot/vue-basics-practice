import Vue from "vue";
// App is like the root Vue instance that gets rendered in this file. It's like a component that isn't placed with a selector, but instead, simply like a replacement for the instance objects
import App from "./App.vue";
import Home from "./Home.vue";

// Register component globally (can be used in whole application, including root Vue instance file App.vue)
Vue.component("app-servers", Home);

new Vue({
  el: "#app",
  // render is a Vue.js method that overrides template selected with el selector, replacing it with compiled template (#app element is in index.html). We render compiled JS code, so don't face limitations of alternative, using template method in the Vue.instance, such as it having to be a string
  render: h => h(App)
});
