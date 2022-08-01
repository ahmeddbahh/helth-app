<template>
    <div class="history my-3">
        <div class="row categories-btns my-4">
            <div class="history-selection col-12">
                <div v-for="(category,i) in categories" :key="i">
                    <Button 
                        :label="local=='ar'?category.arabic:category.english" 
                        @click="selectedCategoryId=category.id" 
                        :class="{'p-button-outlined':selectedCategoryId!=category.id}" 
                    />
                </div>
            </div>
        </div>
        <div class="row categories-content my-4">
            <div v-show="selectedCategoryId==1" class="col-12">
                <MedicalCondition :data="data" />
            </div>
            <div v-show="selectedCategoryId==2" class="col-12">
                <OcularMedication :data="data" />
            </div>
            <div v-show="selectedCategoryId==3" class="col-12">
                <OcularHistory :data="data" />
            </div>
            <div v-show="selectedCategoryId==4" class="col-12">
                <ClHabits :data="data" />
            </div>
        </div>
        <div class="form-actions row">
            <div class="col-12">
                <div class="btns-wrapper">
                    <div class="save-btn">
                        <Button label="Save" @click="save" />
                    </div>
                    <div class="cancel-btn">
                        <Button label="Cancel" class="p-button-danger" />
                    </div>
                </div>
            </div>
        </div>
        <div class="loading" v-if="isloading" >
            <ProgressSpinner />
        </div>
    </div>
</template>
<script>
import axios from "axios";
////////////////////////////////////////////////////////
import Button from 'primevue/button';
import MedicalCondition from './history/MedicalCondition.vue'
import OcularMedication from './history/OcularMedication.vue'
import OcularHistory from './history/OcularHistory.vue'
import ClHabits from './history/ClHabits.vue'
////////////////////////////////////////////////////////
import ProgressSpinner from "primevue/progressspinner";

export default {
    components:{
        Button,
        MedicalCondition,
        OcularMedication,
        OcularHistory,
        ClHabits,
        ProgressSpinner
    },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            selectedCategoryId:1,
            categories:[
                {english:'Medical Condition',arabic:'Medical Condition',id:1},
                {english:'Ocular Medication',arabic:'Ocular Medication',id:2},
                {english:'Ocular History',arabic:'Ocular History',id:3},
                {english:'CL Habits',arabic:'CL Habits',id:4},
            ],
            isloading:false,
            // ******* main body object ******//
            clinicId:localStorage.getItem("clinicId"),
            data:{
                patientId:"50ce8fc6-fe3e-11ec-9cd9-0242ac120003",
                medicalCondition:{
                    diabetes:false,
                    highBloodPressure: false,
                    heartDisease:false,
                    thyroidProblems: false,
                    arthritis:false,
                    cancer: false,
                    headachesMigraines: false,
                    noMedicalCondition: false,
                    other: "",
                    note: ""
                },
                ocularMedication: {
                    prescription:[],
                    note: ""
                },
                ocularHistory:{
                    condition: {
                        conditionSelection:[],
                        other:""

                    },
                    eye: {
                        arabic:"",
                        english:""
                    },
                    date: "",
                    note: ""
                },
                clHobits: {
                    typeReplacement: {
                        typeReplacementSelection:{
                            arabic:"",
                            english:""
                        },
                        other:""
                    },
                    comfort: {
                        comfortSelection:{
                            arabic:"",
                            english:""
                            
                        },
                        other:""
                    },
                    wearingHabits: {
                        wearingHabitSelection:[
                            {
                                arabic:"",
                                english:""
                            }
                        ],
                        other:""
                    },
                    cleaningHabits: {
                        cleaningHabitSelection:[
                            {
                                arabic:"",
                                english:""
                            }
                        ],
                        other:""
                    },
                    note: ""
                }
            },
        }
    },
    methods:{
        save(){
                this.isloading = true ;
                console.log(JSON.stringify(this.data))
                axios.post("/clinic/ophthalmic/createHistory",this.data,{
                    headers:{
                        "clinic-id":this.clinicId
                    }
                })
                .then(res=>{
                    console.log(res);
                    this.isloading = false ;
                })
                .catch(error=>{
                    this.isloading = false ;
                    console.log(error); 
                })
        },
    },

}
</script>
<style lang="scss" scoped>
.history{
    .form-actions{
        .btns-wrapper{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            .save-btn,.cancel-btn{
                .p-button{
                    width:150px;
                }
            }
        }
    }
    .form-wrapper{
        .input-wrapper{
        
        }
    }
    .history-selection{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 20px;
    }
    .main-functions{
        
    }
}
</style>