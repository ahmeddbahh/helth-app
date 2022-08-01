<template>
    <div class="ophthalmic">
        <div class="clinic-label my-2">
            <h3>Ophthalmic Clinic</h3>
        </div>
        <div class="step2-content">
            <div class="operations">
                <div class="main-selection">
                    <SelectButton 
                        v-model="selectedLabel" 
                        :options="labels" 
                        :optionLabel="local=='ar'?'arabic':'english'" 
                        
                    />
                </div>
                <div class="tabs-content">
                    <hr v-show="selectedLabel.id==1" class="my-4">
                    <ChiefComplaint  v-show="selectedLabel.id==1" />
                    <hr v-show="selectedLabel.id==2" class="my-4">
                    <History  v-show="selectedLabel.id==2" />
                    <hr v-show="selectedLabel.id==3" class="my-4">
                    <EntranceTesting  v-show="selectedLabel.id==3" />
                    <hr v-show="selectedLabel.id==4" class="my-4">
                    <VisionTest  v-show="selectedLabel.id==4" />
                    <hr v-show="selectedLabel.id==5" class="my-4">
                    <AnteriorExam  v-show="selectedLabel.id==5" />
                    <hr v-show="selectedLabel.id==6" class="my-4">
                    <PosteriorExam  v-show="selectedLabel.id==6" />
                    <hr v-show="selectedLabel.id==7" class="my-4">
                    <CL  v-show="selectedLabel.id==7" />
                    <hr v-show="selectedLabel.id==8" class="my-4">
                    <Form  v-show="selectedLabel.id==8" />
                    <hr v-show="selectedLabel.id==9" class="my-4">
                    <FinalRx  v-show="selectedLabel.id==9" />
                    <hr v-show="selectedLabel.id==10" class="my-4">
                    <MedicalRx  v-show="selectedLabel.id==10" />


                    
                    <hr class="my-4">
                </div>
            </div>
        </div>
        <div class="main-functions">
            <SelectButton 
                v-model="selectedFunction" 
                :options="functionOptions" 
                :optionLabel="local=='ar'?'arabic':'english'" 
                class="custom-horizontal-selectbutton"
            />
        </div>
    </div>
</template>
<script>
// class="custom-horizontal-selectbutton"
import SelectButton from 'primevue/selectbutton';
import ChiefComplaint from '../components/ophthalmic/ChiefComplaint.vue'
import History from '../components/ophthalmic/History.vue'
import EntranceTesting from '../components/ophthalmic/EntranceTesting.vue'
import VisionTest from '../components/ophthalmic/VisionTest.vue'
import AnteriorExam from '../components/ophthalmic/AnteriorExam.vue'
import PosteriorExam from '../components/ophthalmic/PosteriorExam.vue'
import CL from '../components/ophthalmic/CL.vue'
import Form from '../components/ophthalmic/Form.vue'
import FinalRx from '../components/ophthalmic/FinalRx.vue'
import MedicalRx from '../components/ophthalmic/MedicalRx.vue'

export default {
    components:{
        SelectButton,
        ChiefComplaint,
        History,
        EntranceTesting,
        VisionTest,
        AnteriorExam,
        PosteriorExam,
        CL,
        Form,
        FinalRx,
        MedicalRx
    },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
			selectedLabel:{english: 'CL',arabic:'CL',id:7},
			labels: [
				{english: 'Chief Complaint',arabic:'Chief Complaint',id:1},
				{english: 'History',arabic:'History',id:2},
				{english: 'Entrance Testing',arabic:'Entrance Testing',id:3},
				{english: 'Vision Test',arabic:'Vision Test',id:4},
				{english: 'Anterior Exam',arabic:'Anterior Exam',id:5},
				{english: 'Posterior Exam',arabic:'Posterior Exam',id:6},
				{english: 'CL',arabic:'CL',id:7},
				{english: 'Form',arabic:'Form',id:8},
				{english: 'Final Rx',arabic:'Final Rx',id:9},
				{english: 'Medical Rx',arabic:'Medical Rx',id:10},
				{english: 'Billing',arabic:'Billing',id:11},
				{english: 'Recall',arabic:'Recall',id:12},
				{english: 'Summery',arabic:'Summery',id:13},
			],
            //****** main functions variables *********//
            selectedFunction:{english:'Done',arabic:'Done',id:1},
			functionOptions: [
				{english: 'Done',arabic:'Done',id:1},
				{english: 'Print',arabic:'english',id:2},
				{english: 'Follow Case',arabic:'Follow Case',id:3},
				{english: 'Cancel',arabic:'Cancel',id:4},
			],
        }
    },
}
</script>
<style lang="scss" scoped>
.ophthalmic{
    width: 100%;
    height: 100%;
    padding: 25px;
    .step2-content{
        .operations{
            .main-selection{
                padding: 10px;
                .p-selectbutton{
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }
            }
        }

    }
}
</style>