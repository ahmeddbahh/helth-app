const state = {
  notValidMainDiagnosis: false,
  notValidToothLab: false,
  notValidToothLabCrownDesign: false,
  notValidToothLabCaseDesign:false,
  notValidToothLabImplantCaseDesign:false,
  notValidToothLabSpecificInstructions: false,
  notValidToothLabNightguardsSplints: false,
  notValidOtherSplints:false ,
  notValidScrewSplints:false,
  notValidToothLabRatainers:false,
  
};
const mutations = {
  'SET_MAIN_VALID_DIAGNOSIS'(state, isValid) {
    state.notValidMainDiagnosis = isValid
  },
  'SET_TOOTH_LAB'(state, isValid) {

    state.notValidToothLab = isValid
    
  },
  'SET_TOOTH_LAB_CROWN_DESIGN'(state, isValid) {

    state.notValidToothLabCrownDesign = isValid
    
  },
  'SET_TOOTH_LAB_CASE_DESIGN'(state, isValid) {

    state.notValidToothLabCaseDesign = isValid
    
  },
  'SET_TOOTH_LAB_SPECIFIC_INSTRUCTIONS'(state, isValid) {

    state.notValidToothLabSpecificInstructions = isValid
    
  },
  'SET_TOOTH_NightguardsSplints_INSTRUCTIONS'(state, isValid) {

    state.notValidToothLabNightguardsSplints = isValid
    
  },
  'SET_TOOTH_OTHER_INSTRUCTIONS'(state, isValid) {

    state.notValidOtherSplints = isValid
    
  },
  'SET_TOOTH_SCREW'(state, isValid) {

    state.notValidScrewSplints = isValid
    
  },
  'SET_TOOTH__INPLANT_RX_CROWN_DESIGN'(state, isValid) {

    state.notValidToothLabImplantCaseDesign = isValid
    
  },
  'SET_TOOTH__RATAINER'(state, isValid) {

    state.notValidToothLabRatainers = isValid
    
  },
};
const actions = {
  setMainDignosisIsValid({
    commit
  }, isValid) {
    commit('SET_MAIN_VALID_DIAGNOSIS', isValid)
  },
  setToothLabIsValid({
    commit
  }, isValid) {
    commit('SET_TOOTH_LAB', isValid)
  },
  setToothLabCrownDesignIsValid({
    commit
  }, isValid) {
    commit('SET_TOOTH_LAB_CROWN_DESIGN', isValid)
  },
  setToothLabCaseDesignIsValid({
    commit
  }, isValid) {
    commit('SET_TOOTH_LAB_CASE_DESIGN', isValid)
  },
  setToothLabSpecificInstructionsIsValid({
    commit
  }, isValid) {
    commit('SET_TOOTH_LAB_SPECIFIC_INSTRUCTIONS', isValid)
  },
  setToothLabNightguardsSplintsIsValid({
    commit
  }, isValid) {
    commit('SET_TOOTH_NightguardsSplints_INSTRUCTIONS', isValid)
  },
  setToothLabOtherIsValid({
    commit
  }, isValid) {
    commit('SET_TOOTH_OTHER_INSTRUCTIONS', isValid)
  },
  setToothLabScrewIsValid({
    commit
  }, isValid) {
    commit('SET_TOOTH_SCREW', isValid)
  },
  setToothLabImplantRxCrownDesignIsValid({
    commit
  }, isValid) {
    commit('SET_TOOTH__INPLANT_RX_CROWN_DESIGN', isValid)
  },
  setToothLabRatainersIsValid({
    commit
  }, isValid) {
    commit('SET_TOOTH__RATAINER', isValid)
  },
  

};
const getters = {
  getMainDignosisIsValid(state) {
    return state.notValidMainDiagnosis;
  },
  getToothLabIsValid(state) {
    return state.notValidToothLab;
  },
  getToothLabCrownDesignIsValid(state) {
    return state.notValidToothLabCrownDesign;
  },
  getToothLabCaseDesignIsValid(state) {
    return state.notValidToothLabCaseDesign;
  },
  getToothLabSpecificInstructionsIsValid(state) {
    return state.notValidToothLabSpecificInstructions;
  },
  getToothLabNightguardsSplintsIsValid(state) {
    return state.notValidToothLabNightguardsSplints;
  },
  getToothLabOtherIsValid(state) {
    return state.notValidOtherSplints;
  },
  getToothLabScrewIsValid(state) {
    return state.notValidScrewSplints;
  },
  getToothLabImplantRxCrownDesignIsValid(state) {
    return state.notValidToothLabImplantCaseDesign;
  },
  getToothLabRatainersIsValid(state) {
    return state.notValidToothLabRatainers;
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};