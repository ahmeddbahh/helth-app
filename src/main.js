import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//axios //
import "./axios.js";

// global mixin variables which is created in each single component or .vue file 
Vue.mixin({
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
        }
    },
  })



// Prime vue ui components //
import { lang } from "./mixins/primeVue/locale/localLang.js";
import PrimeVue from 'primevue/config';

// Vue.use(PrimeVue);
if (localStorage.getItem('lang')) {
    if (localStorage.getItem('lang') == 'ar')
        Vue.use(PrimeVue, {
            locale: lang.ar
        });
    else
        Vue.use(PrimeVue, {
            locale: lang.en
        });
} else
    Vue.use(PrimeVue);


// import "primevue/resources/themes/saga-blue/theme.css"  ;     //theme
import "primevue/resources/primevue.min.css"; //core css
import './style/overridePrimeVuetheme.css'; // my-theme
import "primeicons/primeicons.css"; //icons
//*************************/
import './UI/scss/_mixins.scss'
// Vuelidate package inputs validators //
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
    //*************************/

// bootstrap vue //
import {
    BootstrapVue,
    IconsPlugin
} from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//*************************/
//google map //
import * as VueGoogleMaps from "vue2-google-maps" // Import package
Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
        language: localStorage.getItem("lang") ? localStorage.getItem("lang") : 'en',
        // libraries: "places",
        // region: 'EG',
    },
});
//*************************/

//set defualt language
if (!localStorage.getItem("lang"))
    localStorage.setItem("lang", "en")


import "tui-image-editor/dist/tui-image-editor.css";



Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");