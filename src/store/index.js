import Vue from "vue";
import Vuex from "vuex";
import clinicRegistration from "./clinics/clinicRegistration.js";
import toothsValidations from "./clinics/tooths/toothsValidations";
import objynValidations from "./clinics/objyn/objynValidations";
import PediatricValidations from "./clinics/pediatric/PediatricValidations"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // backendMediaDomain: "http://127.0.0.1:8000/media/",
        // backendDomain: "http://127.0.0.1:8000",
        backendBaseUrl:'http://127.0.0.1:2271/api',
        backendMediaUrl:'http://127.0.0.1:2271/media/',
    },
    mutations: {},
    actions: {},
    getters: {
        getBackendDomain(state) {
            return state.backendDomain;
        },
        getBackendMediaDomain(state) {
            return state.backendMediaDomain;
        },
    },
    modules: {
        clinicRegistration,
        toothsValidations,
        objynValidations,
        PediatricValidations
    },
});