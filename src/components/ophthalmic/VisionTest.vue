<template>
    <div class="vision-test my-3">
        <div class="row categories-btns my-4">
            <div class="vision-test-selection col-12">
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
                <OverRefraction :data="data" />
            </div>
            <div v-show="selectedCategoryId==2" class="col-12">
                <Refraction :data="data" />
            </div>
            <div v-show="selectedCategoryId==3" class="col-12">
                <Binocular :data="data" />
            </div>
            <div v-show="selectedCategoryId==4" class="col-12">
                <VAcc :data="data" />
            </div>
            <div v-show="selectedCategoryId==5" class="col-12">
                <VAsc :data="data" />
            </div>
            <div v-show="selectedCategoryId==6" class="col-12">
                <Lensometry :data="data" />
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
import OverRefraction from './vision/OverRefraction.vue'
import Refraction from './vision/Refraction.vue'
import Binocular from './vision/Binocular.vue'
import VAcc from './vision/VAcc.vue'
import VAsc from './vision/VAsc.vue'
import Lensometry from './vision/Lensometry.vue'
export default {
    components:{
        Button,
        OverRefraction,
        Refraction,
        Binocular,
        VAcc,
        VAsc,
        Lensometry,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            selectedCategoryId:4,
            categories:[
                {english:'Over Refraction',arabic:'Over Refraction',id:1},
                {english:'Refraction',arabic:'Refraction',id:2},
                {english:'Binocular',arabic:'Binocular',id:3},
                {english:'VA cc',arabic:'VA cc',id:4},
                {english:'VA sc',arabic:'VA sc',id:5},
                {english:'Lensometry',arabic:'Lensometry',id:6},
            ],
            // ******* main body object ******//
            clinicId:localStorage.getItem("clinicId"),
            data: {
                patientId:"50ce8fc6-fe3e-11ec-9cd9-0242ac120003",
                overRefraction: {
                    os:{
                        spherical:[],
                        cylindrical:[],
                        axis:[],
                        prism:[],
                        add:[],
                        dva:[],
                        nva:[],
                    },
                    od:{                        
                        spherical:[],
                        cylindrical:[],
                        axis:[],
                        prism:[],
                        add:[],
                        dva:[],
                        nva:[],
                    },
                    ou:{
                        dva:[],
                        nva:[],
                    },
                    note: "",
                },
                refraction: {
                    type:{
                        typeSelection: {
                            arabic: "",
                            english: "",
                        },
                        other: "",
                    },
                    os:{
                        spherical:[],
                        cylindrical:[],
                        axis:[],
                        prism:[],
                        add:[],
                        dva:[],
                        nva:[],
                    },
                    od:{                        
                        spherical:[],
                        cylindrical:[],
                        axis:[],
                        prism:[],
                        add:[],
                        dva:[],
                        nva:[],
                    },
                    ou:{
                        dva:[],
                        nva:[],
                    },
                    note: "",
                },
                binoculor: {
                    phorias: {
                        distantVision: {
                            h: [],
                            v: [],
                        },
                        nearVision: {
                            h: [],
                            v: [],
                        },
                    },
                    pursuits: {
                        os: {
                            osSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                        },
                        od: {
                            odSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                        },
                    },
                    saccades: {
                        os: {
                            osSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                        },
                        od: {
                            odSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                        },
                    },
                    accomodation: {
                        ampOd: [],
                        ampOs: [],
                        acaRatio: [],
                        nra: [],
                        pra: [],
                    },
                    vergenceBi: {
                        distantVision: {
                            visionBlur: [],
                            visionBreak: [],
                            visionRecov: [],
                        },
                        nearVision: {
                            visionBlur: [],
                            visionBreak: [],
                            visionRecov: [],
                        },
                    },
                    vergenceBo: {
                        distantVision: {
                            visionBlur: [],
                            visionBreak: [],
                            visionRecov: [],
                        },
                        nearVision: {
                            visionBlur: [],
                            visionBreak: [],
                            visionRecov: [],
                        },
                    },
                    vergenceBu: {
                        distantVision: {
                            visionBlur: [],
                            visionBreak: [],
                            visionRecov: [],
                        },
                        nearVision: {
                            visionBlur: [],
                            visionBreak: [],
                            visionRecov: [],
                        },
                    },
                    vergenceBd: {
                        distantVision: {
                            visionBlur: [],
                            visionBreak: [],
                            visionRecov: [],
                        },
                        nearVision: {
                            visionBlur: [],
                            visionBreak: [],
                            visionRecov: [],
                        },
                    },
                    note:""
                },
                vaCc: {
                    aide:[],
                    scale: [],
                    od:{
                        dva:[],
                        ph:[],
                        nva:[],
                    },
                    os:{
                        dva:[],
                        ph:[],
                        nva:[],
                    },
                    ou:{
                        dva:[],
                        nva:[],
                    },
                    note: "",
                },
                vaSc: {
                    aide:[],
                    scale: [],
                    od:{
                        dva:[],
                        ph:[],
                        nva:[],
                    },
                    os:{
                        dva:[],
                        ph:[],
                        nva:[],
                    },
                    ou:{
                        dva:[],
                        nva:[],
                    },
                    note: "",
                },
                lensomety: {
                    lensType: {
                        lensTypeSelection: {
                            arabic: "",
                            english: "",
                        },
                        other: "",
                    },
                    os: {
                        spherical: [],
                        cylindrical: [],
                        axis: [],
                        add: [],
                    },
                    od: {
                        spherical: [],
                        cylindrical: [],
                        axis: [],
                        add: [],
                    },
                    note: "",
                },
            },
        }
    },

}
</script>
<style lang="scss" scoped>
.vision-test{
    .vision-test-selection{
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