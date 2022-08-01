<template>
    <div class="history my-3">
        <SelectButton
            v-model="mainOption.value"
            :options="mainOptions"
            :optionLabel="local=='ar'?'arabic':'english'"
            class="mx-3"
        ></SelectButton>
        <MedicalHistory :dataObject="initData.medicalHistory.surgical" @resetData="initData.medicalHistory.surgical={...backUpData.medicalHistory.surgical}" :data="data.medicalHistory" v-if="mainOption.value.id == 1"  />
        <FamilyHistory :dataObject="initData.familyHistory" @resetData="initData.familyHistory={...backUpData.familyHistory}"  :data="data.familyHistory" v-if="mainOption.value.id == 2"  />
        
    </div>
</template>
<script>
// import MedicalHistory from "./history/MedicalHistory.vue";
// import FamilyHistory from "./history/FamilyHistory.vue";
import SelectButton from "primevue/selectbutton";
export default {
    props:['data','initData','backUpData','mainOption'],
    components:{
        MedicalHistory:()=>import("./history/MedicalHistory.vue"),
        FamilyHistory:()=>import("./history/FamilyHistory.vue"),
        SelectButton

    },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            mainOptions:[
                {english:"Medical history",arabic:"Medical history",id:1},
                {english:"Family history",arabic:"Family history",id:2},
            ],
            
            
        }
    },
}
</script>