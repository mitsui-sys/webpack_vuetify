import Vue from "vue";
import App from "./components/App.vue";
import vuetify from "./plugins/vuetify";

const app = new Vue({
  el: "#app",
  render: (h) => h(App),
  components: { App, vuetify },
});
