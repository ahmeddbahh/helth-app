const state = {
    OBJnotValidMainDiagnosis: false,
    OBJnotValidRx: false,
    OBJnotValidObstetric: false,
    OBJnotValidGYNInfertilit: false,
    OBJnotValidGYNFolliculometry: false,
    OBJnotValidGYNPID: false,
    OBJnotValidGYNContraception: false,
    OBJnotValidGYNperimenopausalBleeding: false,
    OBJnotValidGYNPostMenopausalBleeding: false,
    OBJnotValidBorns: false,
    OBJnotValidPregUs: false,
    OBJnotValidPelvicUs: false,
    OBJnotValidHistory: false,
    OBJnotValidUltrasoundsAndMedia: false,


};
const mutations = {
    'SET_OBJ_MAIN_VALID_DIAGNOSIS' (state, isValid) {
        state.OBJnotValidMainDiagnosis = isValid
    },
    'SET_OBJ_RX_VAILD' (state, isValid) {
        state.OBJnotValidRx = isValid
    },
    'SET_OBJ_Obstetric_VAILD' (state, isValid) {
        state.OBJnotValidObstetric = isValid
    },
    'SET_OBJ_GYNInfertilit_VAILD' (state, isValid) {
        state.OBJnotValidGYNInfertilit = isValid
    },
    'SET_OBJ_GYNFolliculometry_VAILD' (state, isValid) {
        state.OBJnotValidGYNFolliculometry = isValid
    },
    'SET_OBJ_GYNPID_VAILD' (state, isValid) {
        state.OBJnotValidGYNPID = isValid
    },
    'SET_OBJ_GYNContraception_VAILD' (state, isValid) {
        state.OBJnotValidGYNContraception = isValid
    },
    'SET_OBJ_perimenopausalBleeding_VAILD' (state, isValid) {
        state.OBJnotValidGYNperimenopausalBleeding = isValid
    },
    'SET_OBJ_PostMenopausalBleeding_VAILD' (state, isValid) {
        state.OBJnotValidGYNPostMenopausalBleeding = isValid
    },
    'SET_OBJ_Borns_VAILD' (state, isValid) {
        state.OBJnotValidBorns = isValid
    },
    'SET_OBJ_PregUs_VAILD' (state, isValid) {
        state.OBJnotValidPregUs = isValid
    },
    'SET_OBJ_PelvicUs_VAILD' (state, isValid) {
        state.OBJnotValidPelvicUs = isValid
    },
    'SET_OBJ_HISTORY_VAILD' (state, isValid) {
        state.OBJnotValidHistory = isValid
    },
    'SET_OBJ_UltrasoundsAndMedia_VAILD' (state, isValid) {
        state.OBJnotValidUltrasoundsAndMedia = isValid
    },

};
const actions = {
    setOBJMainDignosisIsValid({ commit }, isValid) {
        commit('SET_OBJ_MAIN_VALID_DIAGNOSIS', isValid)
    },
    setOBJRxValid({ commit }, isValid) {
        commit('SET_OBJ_RX_VAILD', isValid)
    },
    setOBJObstetricIsValid({ commit }, isValid) {
        commit('SET_OBJ_Obstetric_VAILD', isValid)
    },
    setOBJGYNInfertilitIsValid({ commit }, isValid) {
        commit('SET_OBJ_GYNInfertilit_VAILD', isValid)
    },
    setOBJGYNFolliculometryIsValid({ commit }, isValid) {
        commit('SET_OBJ_GYNFolliculometry_VAILD', isValid)
    },
    setOBJGYNPIDIsValid({ commit }, isValid) {
        commit('SET_OBJ_GYNPID_VAILD', isValid)
    },
    setOBJGYNContraceptionIsValid({ commit }, isValid) {
        commit('SET_OBJ_GYNContraception_VAILD', isValid)
    },
    setOBJGYNperimenopausalBleedingIsValid({ commit }, isValid) {
        commit('SET_OBJ_perimenopausalBleeding_VAILD', isValid)
    },
    setOBJGYNPostMenopausalBleedingIsValid({ commit }, isValid) {
        commit('SET_OBJ_PostMenopausalBleeding_VAILD', isValid)
    },
    setOBJGYNBornsIsValid({ commit }, isValid) {
        commit('SET_OBJ_Borns_VAILD', isValid)
    },
    setOBJGYNPregUsIsValid({ commit }, isValid) {
        commit('SET_OBJ_PregUs_VAILD', isValid)
    },
    setOBJGYNPelvicUsIsValid({ commit }, isValid) {
        commit('SET_OBJ_PelvicUs_VAILD', isValid)
    },
    setOBJGYNHistoryIsValid({ commit }, isValid) {
        commit('SET_OBJ_HISTORY_VAILD', isValid)
    },
    setOBJGYNUltrasoundsAndMediaIsValid({ commit }, isValid) {
        commit('SET_OBJ_UltrasoundsAndMedia_VAILD', isValid)
    },



};
const getters = {
    getOBJMainDignosisIsValid(state) {
        return state.OBJnotValidMainDiagnosis;
    },
    getOBJRxIsValid(state) {
        return state.OBJnotValidRx;
    },
    getOBJRxObstetricValid(state) {
        return state.OBJnotValidObstetric;
    },
    getOBJGYNInfertilitValid(state) {
        return state.OBJnotValidGYNInfertilit;
    },
    getOBJGYNFolliculometryValid(state) {
        return state.OBJnotValidGYNFolliculometry;
    },
    getOBJGYNPIDValid(state) {
        return state.OBJnotValidGYNPID;
    },
    getOBJGYNContraceptionValid(state) {
        return state.OBJnotValidGYNContraception;
    },
    getOBJGYNperimenopausalBleedingValid(state) {
        return state.OBJnotValidGYNperimenopausalBleeding;
    },
    getOBJGYNPostMenopausalBleedingValid(state) {
        return state.OBJnotValidGYNPostMenopausalBleeding;
    },
    getOBJBornsValid(state) {
        return state.OBJnotValidBorns;
    },
    getOBJPregUsValid(state) {
        return state.OBJnotValidPregUs;
    },
    getOBJPelvicUsValid(state) {
        return state.OBJnotValidPelvicUs;
    },
    getOBJHistoryValid(state) {
        return state.OBJnotValidHistory;
    },
    getOBJUltrasoundsAndMediaValid(state) {
        return state.OBJnotValidUltrasoundsAndMedia;
    },

};
export default {
    state,
    mutations,
    actions,
    getters,
};