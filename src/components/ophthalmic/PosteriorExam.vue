<template>
    <div class="posterior-exam my-3">
        <div class="row categories-btns my-4">
            <div class="posterior-exam-selection col-12">
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
                <FundusExam :data="data" />
            </div>
            <div v-show="selectedCategoryId==2" class="col-12">
                <Dilation :data="data" />
            </div>
        </div>
        <div class="form-actions row">
            <div class="col-12">
                <div class="btns-wrapper">
                    <div class="save-btn">
                        <Button label="Save" />
                    </div>
                    <div class="cancel-btn">
                        <Button label="Cancel" class="p-button-danger" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Button from 'primevue/button';
import FundusExam from './posterior/FundusExam.vue'
import Dilation from './posterior/Dilation.vue'
export default {
    components:{
        Button,
        FundusExam,
        Dilation,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            selectedCategoryId:1,
            categories:[
                {english:'Fundus Exam',arabic:'Fundus Exam',id:1},
                {english:'Dilation',arabic:'Dilation',id:2},
            ],
            // ******* main body object ******//
            clinicId:localStorage.getItem("clinicId"),
                  data: {
                    patientId:"50ce8fc6-fe3e-11ec-9cd9-0242ac120003",
                    fundusExam: {
                        lens: [],
                        opthalmoscopy: {
                            opthalmoscopySelection: {
                            english: "",
                            arabic: "",
                            },
                            other: "",
                        },
                        dilated: false,
                        od: {
                            pupillaryRelex: {
                            pupillaryRelexSelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                            vitreous: {
                            vitreousSelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                            opticDisc: [],
                            cdRatio: [],
                            vessels: {
                            vesselSelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                            macula: {
                            maculaSelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                            fovealReflex: false,
                            retina: {
                            retinaSelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                            posteriorPole: {
                            posteriorPoleSelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                            periphery: {
                            peripherySelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                        },
                        os: {
                            pupillaryRelex: {
                            pupillaryRelexSelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                            vitreous: {
                            vitreousSelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                            opticDisc: [],
                            cdRatio: [],
                            vessels: {
                            vesselSelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                            macula: {
                            maculaSelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                            fovealReflex: false,
                            retina: {
                            retinaSelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                            posteriorPole: {
                            posteriorPoleSelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                            periphery: {
                            peripherySelection: {
                                english: "",
                                arabic: "",
                            },
                            other: "",
                            },
                        },
                        note: "",
                    },
                    dilation: {
                    drug: {
                        drugSelection: {
                        english: "",
                        arabic: "",
                        },
                        other: "",
                    },
                    eye: {
                        arabic: "",
                        english: "",
                    },
                    quantity: "",
                    time: null,
                    informedPt: false,
                    note: "",
                    },
                },
        }
    },

}
</script>
<style lang="scss" scoped>
.posterior-exam{
    .posterior-exam-selection{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 20px;
    }
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
}
</style>