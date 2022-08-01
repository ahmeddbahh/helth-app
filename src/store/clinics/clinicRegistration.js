const state = {
    clinicRegistrationData: null,
};
const mutations = {
    'SET_CLINIC_REGISTRATION_DATA' (state, clinicData) {
        state.clinicRegistrationData = clinicData
    },
    'SET_NEW_CLINIC_REGISTRATION_DATA' (state, newClinic) {
        state.clinicRegistrationData.unshift(newClinic)
    },
    'UPDATE_CLINIC_REGISTRATION_DATA' (state, newClinic) {
        if(state.clinicRegistrationData){
            for (let i = 0; i < state.clinicRegistrationData.length; i++) {
                if (newClinic.id == state.clinicRegistrationData[i].id) {
                    state.clinicRegistrationData[i] = newClinic;
                    break;
                }
            }
        }
    },
};
const actions = {
    setClinicRegistrationData({
        commit
    }, clinicData) {
        commit('SET_CLINIC_REGISTRATION_DATA', clinicData)
    },
    setNewClinicRegistrationData({
        commit
    }, newClinic) {
        commit('SET_NEW_CLINIC_REGISTRATION_DATA', newClinic)
    },
    updateClinicRegistrationData({
        commit
    }, newClinic) {
        commit('UPDATE_CLINIC_REGISTRATION_DATA', newClinic)
    },
};
const getters = {
    getClinicRegistrationData(state) {
        return state.clinicRegistrationData;
    }
};
export default {
    state,
    mutations,
    actions,
    getters,
};