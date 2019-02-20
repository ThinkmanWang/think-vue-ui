import Vue from 'vue'
import App from './App.vue'

import MintUI from 'mint-ui'
import "mint-ui/lib/style.css"
import vDialogs from 'v-dialogs';
import {EventBus} from "@/event-bus";

Vue.use(vDialogs);
Vue.use(MintUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

