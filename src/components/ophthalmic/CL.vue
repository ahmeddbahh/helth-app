<template>
    <div class="cl my-3">
        <div class="row categories-btns my-4">
            <div class="cl-selection col-12">
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
                <Fitting :data="data" />
            </div>
            <div v-show="selectedCategoryId==2" class="col-12">
                <Keratometry :data="data" />
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
import Fitting from './cl/Fitting.vue'
import Keratometry from './cl/Keratometry.vue'
export default {
    components:{
        Button,
        Fitting,
        Keratometry,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            selectedCategoryId:1,
            categories:[
                {english:'Fitting',arabic:'Fitting',id:1},
                {english:'Keratometry',arabic:'Keratometry',id:2},
            ],
            // ******* main body object ******//
            clinicId:localStorage.getItem("clinicId"),
            data:{
                patientId:"50ce8fc6-fe3e-11ec-9cd9-0242ac120003",
                fitting: {
                    type:{
                        os: {
                            manufacturer: {
                            manufacturerSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            brand: {
                            brandSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            design: {
                            designSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            qtyBox: {
                            qtySelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            type: "",
                            material: "",
                            wearingPeriod: "",
                            replacement: "",
                            comfort: {
                            comfortSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            vision: {
                            visionSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            rotation: {
                            rotationSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            movement: {
                            movementSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            centration: {
                            centrationSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            tear: {
                            selection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            sclera: {
                            selection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            limbal: {
                            selection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            cornea: {
                            selection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            lid: {
                            selection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                        },
                        od: {
                            manufacturer: {
                            manufacturerSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            brand: {
                            brandSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            design: {
                            designSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            qtyBox: {
                            qtySelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            type: "",
                            material: "",
                            wearingPeriod: "",
                            replacement: "",
                            comfort: {
                            comfortSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            vision: {
                            visionSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            rotation: {
                            rotationSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            movement: {
                            movementSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            centration: {
                            centrationSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            tear: {
                            selection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            sclera: {
                            selection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            limbal: {
                            selection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            cornea: {
                            selection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                            lid: {
                            selection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                            },
                        },
                    },
                    measurements:{
                        os: {
                            spherical: [],
                            cylindrical: [],
                            axis: [],
                            bc: null,
                            dia:null,
                            add: [],
                            dn:{
                                arabic: "",
                                english: "",
                            },
                            dva: [],
                            nva: [],
                        },
                        od: {
                            spherical: [],
                            cylindrical: [],
                            axis: [],
                            bc: null,
                            dia:null,
                            add: [],
                            dn:{
                                arabic: "",
                                english: "",
                            },
                            dva: [],
                            nva: [],
                        },
                        ou: {
                            dva: [],
                            nva: [],
                        },
                        solution:{
                            solutionSelection: {
                                arabic: "",
                                english: "",
                            },
                            other: "",
                        },
                    },
                    exopirationDate:'',
                    visitType: {
                        visionSelection: {
                        arabic: "",
                        english: "",
                        },
                        other: "",
                    },
                    note: "",
                },
                keratometry: {
                    os: {
                        powerH: [],
                        powerV: [],
                        meridian: [],
                    },
                    od: {
                        powerH: [],
                        powerV: [],
                        meridian: [],
                    },
                    note: "",
                },
            },
        }
    },

}
</script>
<style lang="scss" scoped>
.cl{
    .cl-selection{
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