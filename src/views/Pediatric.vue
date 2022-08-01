<template>
    <div class="pediatric mx-3">
        
        <div v-if="!isloading">
            <h2>{{lang[local].title}}</h2>
            <SelectButton
                v-model="mainOption"
                :options="mainOptions"
                :optionLabel="local=='ar'?'arabic':'english'"
                class="mx-3"
            ></SelectButton>
            <Rx :diagnosisToPush="diagnosisToPush" :prescriptionObject="initData.rx" @resetData="initData.rx = {...backUpData.rx}" :data="data.medicalRx" v-if="mainOption.id == 1" />
            <GrowthCharts  :data="data.growthCharts" v-if="mainOption.id == 2" />
            <Bilirubinchart  :data="data.bilirubinChart" v-if="mainOption.id == 3" />
            <FeedingManaging :mainOption="FeedingManagingMainOptions" :initData="initData.feedingManaging" :backUpData="backUpData.feedingManaging"  :data="data.feedingManaging" v-if="mainOption.id == 4" />
            <Vaccination  :dataObject="initData.vaccination" @resetData="initData.vaccination = {...backUpData.vaccination}" :data="data.vaccination" v-if="mainOption.id == 5" />
            <PhysicalExam  :data="data.physicalExam" v-if="mainOption.id == 6" />
            <History :mainOption="historyMainOptions" :initData="initData.history" :backUpData="backUpData.history"  :data="data.history" v-if="mainOption.id == 7" />

            <div class="obgyn-actions-btns">
                <Button
                    class="action-btn follow-case"
                    icon="pi pi-eye"
                    :label="lang[local].btnsActions.followCase"
                ></Button>
                <Button
                    class="action-btn print"
                    icon="pi pi-print"
                    :label="lang[local].btnsActions.print"
                ></Button>
                <Button
                    class="action-btn done"
                    icon="pi pi-check"
                    :label="lang[local].btnsActions.done"
                    :disabled="notValid"
                    @click="sendData"
                ></Button>
                <Button
                    class="action-btn cancel"
                    icon="pi pi-times"
                    :label="lang[local].btnsActions.cancel"
                ></Button>
            </div> 
        </div>
        <div class="loading" v-else >
            <ProgressSpinner />
        </div>
    </div>
</template>
<script>
import dataObject from "../mixins/clinics/pediatric/dataObject";
import SelectButton from "primevue/selectbutton";
import Button from "primevue/button";
// import Rx from "../components/pediatric/Rx.vue";
// import FeedingManaging from "../components/pediatric/FeedingManaging.vue";
// import Vaccination from "../components/pediatric/Vaccination.vue";
// import PhysicalExam from "../components/pediatric/PhysicalExam.vue";
// import History from "../components/pediatric/History.vue";
// import GrowthCharts from "../components/pediatric/GrowthCharts.vue";
// import Bilirubinchart from "../components/pediatric/Bilirubinchart.vue";
import axios from "axios";
import ProgressSpinner from "primevue/progressspinner";
import {CheckIfObjectChange} from "../components/helpers/checkIfDataObjectChanges";
import {convertFileToBase64} from "../components/helpers/convertFileToBase64";

export default {
    mixins:[dataObject],
    components:{
        SelectButton,
        Button,
        Rx:()=>import('../components/pediatric/Rx.vue'),
        FeedingManaging:()=>import("../components/pediatric/FeedingManaging.vue"),
        Vaccination:()=>import("../components/pediatric/Vaccination.vue"),
        PhysicalExam:()=>import("../components/pediatric/PhysicalExam.vue"),
        History:()=>import("../components/pediatric/History.vue"),
        GrowthCharts:()=>import("../components/pediatric/GrowthCharts.vue"),
        Bilirubinchart:()=>import("../components/pediatric/Bilirubinchart.vue"),
        ProgressSpinner
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    title:"Pediatric Clinic",
                    btnsActions: {
                        followCase: "follow case",
                        print: "print",
                        done: "done",
                        cancel: "cancel",
                        
                    }
                },
                ar:{
                    title:"Pediatric Clinic",
                    btnsActions: {
                        followCase: "follow case",
                        print: "print",
                        done: "done",
                        cancel: "cancel",
                    }
                }
            },
            mainOptions:[
                {english:"Rx",arabic:"Rx",id:1},
                {english:"Growth Charts",arabic:"Growth Charts",id:2},
                {english:"Bilirubin chart",arabic:"Bilirubin chart",id:3},
                {english:"Feeding Managing",arabic:"Feeding Managing",id:4},
                {english:"Vaccination",arabic:"Vaccination",id:5},
                {english:"Physical Exam",arabic:"Physical Exam",id:6},
                {english:"History",arabic:"History",id:7},
                {english:"Form",arabic:"Form",id:8},
                {english:"Recall",arabic:"Recall",id:9},
                {english:"Billing",arabic:"Billing",id:10},
            ],
            mainOption: {english:"Growth Charts",arabic:"Growth Charts",id:2},
            isloading:false,
            FeedingManagingMainOptions:{
                values:[]
            },
            historyMainOptions:{
                value:{english:"Medical history",arabic:"Medical history",id:1}
            },
            diagnosisToPush:{
                value:{
                    english: null,
                    arabic: null,
                    manualInsertion: null
                }
            }
        }
    },
    computed:{
        isNotPediatricRxValid() {
            return this.$store.getters.getPediatricRxIsValid;
        },
        isNotPediatricFeedingManageBreastFeedingValid() {
            return this.$store.getters.getPediatricFeedingManageBreastFeedingIsValid;
        },
        isNotPediatricFeedingManageSolidValid() {
            return this.$store.getters.getPediatricFeedingManageSolidIsValid;
        },
        isNotPediatricFeedingManageFormulaValid() {
            return this.$store.getters.getPediatricFeedingManageFormulaIsValid;
        },
        isNotPediatricVaccinationValid() {
            return this.$store.getters.getPediatricVaccinationIsValid;
        },
        isNotPediatricPhysicalExamValid() {
            return this.$store.getters.getPediatricPhysicalExamIsValid;
        },
        isNotPediatricMedicalHistoryValid() {
            return this.$store.getters.getPediatricMedicalHistoryIsValid;
        },
        isNotPediatricFamilyHistoryValid() {
            return this.$store.getters.getPediatricFamilyHistoryIsValid;
        },
        isNotPediatricBilirubinchartValid() {
            return this.$store.getters.getPediatricBilirubinchartIsValid;
        },
        isNotPediatricGrowthchartValid() {
            return this.$store.getters.getPediatricGrowthchartIsValid;
        },
        notValid() {
            return this.isNotPediatricRxValid||
                    this.isNotPediatricFeedingManageBreastFeedingValid||
                    this.isNotPediatricFeedingManageSolidValid||
                    this.isNotPediatricFeedingManageFormulaValid||
                    this.isNotPediatricVaccinationValid||
                    this.isNotPediatricPhysicalExamValid||
                    this.isNotPediatricMedicalHistoryValid||
                    this.isNotPediatricBilirubinchartValid||
                    this.isNotPediatricGrowthchartValid||
                    this.isNotPediatricFamilyHistoryValid
            ;
        },
        clinic(){
            return this.$store.getters.getClinicRegistrationData
        }
    },
    methods:{
        async sendData(){
            if(!this.notValid){
                if(CheckIfObjectChange(this.diagnosisToPush.value,{english: null,arabic: null,manualInsertion: null})){
                    this.data.medicalRx.mainDiagnosis.mainDiagnosis.push({...this.diagnosisToPush.value})
                }
                if(CheckIfObjectChange(this.initData.rx,this.backUpData.rx)){
                        this.data.medicalRx.rx.push({...this.initData.rx})
                }
                if(CheckIfObjectChange(this.initData.feedingManaging.formula,this.backUpData.feedingManaging.formula)){
                        this.data.feedingManaging.formula.push({...this.initData.feedingManaging.formula})
                }
                if(CheckIfObjectChange(this.initData.feedingManaging.solid,this.backUpData.feedingManaging.solid)){
                        this.data.feedingManaging.solid.push({...this.initData.feedingManaging.solid})
                }
                if(CheckIfObjectChange(this.initData.vaccination,this.backUpData.vaccination)){
                        this.data.vaccination.push({...this.initData.vaccination})
                }
                if(CheckIfObjectChange(this.initData.history.medicalHistory.surgical,this.backUpData.history.medicalHistory.surgical)){
                        if(this.initData.history.medicalHistory.surgical.files.length){
                            let files = []
                            for(let i =0 ; i< this.initData.history.medicalHistory.surgical.files.length ; i++){
                                files.push(await convertFileToBase64(this.initData.history.medicalHistory.surgical.files[i]))
                            }
                                
                            this.data.history.medicalHistory.surgical.push({...this.initData.history.medicalHistory.surgical,files:files})
                        }
                }
                if(CheckIfObjectChange(this.initData.history.familyHistory,this.backUpData.history.familyHistory)){
                    this.data.history.familyHistory.push(this.initData.history.familyHistory)
                }
                this.isloading = true ;
                this.data.patientId="0f377543-ef07-11ec-b843-c4346b4f8749"
                console.log(this.data)
                axios.post("/clinic/pediatric/createPediatric",this.data,{
                    headers:{
                        "clinic-id":this.clinic.id
                    }
                }).then(res=>{
                    console.log(res);
                    this.data =  {...this.restData};
                    this.initData = {...this.backUpData} ;
                    this.diagnosisToPush={
                        value:{
                            english: null,
                            arabic: null,
                            manualInsertion: null
                        }
                    }
                    this.isloading = false ;
                },error=>{
                    this.isloading = false ;
                    console.log(error); 
                })
            }
        },
    },
}
</script>
<style lang="scss" scoped>

.obgyn-actions-btns {
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    right: 20px;
    bottom: 20px;
    margin: 20px 0px;
    z-index: 10;
    .action-btn {
        min-width: 150px;
        margin-top: 10px;
    }
    .follow-case {
        background-image: linear-gradient(
        160deg,
        $gradient-color-3,
        $gradient-color-5
        ) !important;
    }
    .print {
        background-image: linear-gradient(
        160deg,
        $secondary-color-2,
        $gradient-color-5
        ) !important;
    }
    .cancel {
        background-image: linear-gradient(
        160deg,
        $gradient-color-6,
        $gradient-color-5
        );
        &:hover{
        background-image: linear-gradient(
        160deg,
        $gradient-color-6,
        $gradient-color-5
        );

        }
    }
}

</style>