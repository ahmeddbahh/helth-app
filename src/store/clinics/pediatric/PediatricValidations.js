const state = {
    notValidPediatricRx: false,
    notValidFeedingManageBreastFeeding: false,
    notValidFeedingManageSolid: false,
    notValidFeedingManageFormula: false,
    notValidPediatricVaccination: false,
    notValidPediatricPhysicalExam: false,
    notValidMedicalHistory: false,
    notValidFamilyHistory: false,
    notValidBilirubinchart: false,
    notValidGrowthchart: false,


};
const mutations = {
    'SET_PediatricRx_VAILD' (state, isValid) {
        state.notValidPediatricRx = isValid
    },
    'SET_FeedingManageBreastFeeding_VAILD' (state, isValid) {
        state.notValidFeedingManageBreastFeeding = isValid
    },
    'SET_FeedingManageSolid_VAILD' (state, isValid) {
        state.notValidFeedingManageSolid = isValid
    },
    'SET_FeedingManageFormula_VAILD' (state, isValid) {
        state.notValidFeedingManageFormula = isValid
    },
    'SET_PediatricVaccination_VAILD' (state, isValid) {
        state.notValidPediatricVaccination = isValid
    },
    'SET_PediatricPhysicalExam_VAILD' (state, isValid) {
        state.notValidPediatricPhysicalExam = isValid
    },
    'SET_PediatricMedicalHistory_VAILD' (state, isValid) {
        state.notValidMedicalHistory = isValid
    },
    'SET_PediatricFamilyHistory_VAILD' (state, isValid) {
        state.notValidFamilyHistory = isValid
    },
    'SET_PediatricBilirubinchart_VAILD' (state, isValid) {
        state.notValidBilirubinchart = isValid
    },
    'SET_PediatricGrowthchart_VAILD' (state, isValid) {
        state.notValidGrowthchart = isValid
    },


};
const actions = {
    setPediatricPxIsValid({ commit }, isValid) {
        commit('SET_PediatricRx_VAILD', isValid)
    },
    setPediatricFeedingManageBreastFeedingIsValid({ commit }, isValid) {
        commit('SET_FeedingManageBreastFeeding_VAILD', isValid)
    },
    setPediatricFeedingManageSolidIsValid({ commit }, isValid) {
        commit('SET_FeedingManageSolid_VAILD', isValid)
    },
    setPediatricFeedingManageFormulaIsValid({ commit }, isValid) {
        commit('SET_FeedingManageFormula_VAILD', isValid)
    },
    setPediatricVaccinationIsValid({ commit }, isValid) {
        commit('SET_PediatricVaccination_VAILD', isValid)
    },
    setPediatricPhysicalExamIsValid({ commit }, isValid) {
        commit('SET_PediatricPhysicalExam_VAILD', isValid)
    },
    setPediatricMedicalHistoryIsValid({ commit }, isValid) {
        commit('SET_PediatricMedicalHistory_VAILD', isValid)
    },
    setPediatricFamilyHistoryIsValid({ commit }, isValid) {
        commit('SET_PediatricFamilyHistory_VAILD', isValid)
    },
    setPediatricBilirubinchartIsValid({ commit }, isValid) {
        commit('SET_PediatricBilirubinchart_VAILD', isValid)
    },
    setPediatricGrowthchartIsValid({ commit }, isValid) {
        commit('SET_PediatricGrowthchart_VAILD', isValid)
    },



};
const getters = {
    getPediatricRxIsValid(state) {
        return state.notValidPediatricRx;
    },
    getPediatricFeedingManageBreastFeedingIsValid(state) {
        return state.notValidFeedingManageBreastFeeding;
    },
    getPediatricFeedingManageSolidIsValid(state) {
        return state.notValidFeedingManageSolid;
    },
    getPediatricFeedingManageFormulaIsValid(state) {
        return state.notValidFeedingManageFormula;
    },
    getPediatricVaccinationIsValid(state) {
        return state.notValidPediatricVaccination;
    },
    getPediatricPhysicalExamIsValid(state) {
        return state.notValidPediatricPhysicalExam;
    },
    getPediatricMedicalHistoryIsValid(state) {
        return state.notValidMedicalHistory;
    },
    getPediatricFamilyHistoryIsValid(state) {
        return state.notValidFamilyHistory;
    },
    getPediatricBilirubinchartIsValid(state) {
        return state.notValidBilirubinchart;
    },
    getPediatricGrowthchartIsValid(state) {
        return state.notValidGrowthchart;
    },

};
export default {
    state,
    mutations,
    actions,
    getters,
};