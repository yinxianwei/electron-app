import Vue from "vue";
import App from "./App";
import Element from "element-ui";
Vue.use(Element);

new Vue({
  render: h => h(App)
}).$mount("#app");
