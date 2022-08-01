<template>
    <div class="anterior-exam my-3">
        <div class="row categories-btns my-4">
            <div class="anterior-exam-selection col-12">
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
                <Tonometry :data="data" />
            </div>
            <div v-show="selectedCategoryId==2" class="col-12">
                <Biomicroscopy :data="data" />
            </div>
            <div v-show="selectedCategoryId==3" class="col-12">
                <Gonioscopy :data="data" />
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
import Tonometry from './anterior/Tonometry.vue'
import Biomicroscopy from './anterior/Biomicroscopy.vue'
import Gonioscopy from './anterior/Gonioscopy.vue'

export default {
    components:{
        Button,
        Tonometry,
        Biomicroscopy,
        Gonioscopy,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            selectedCategoryId:3,
            categories:[
                {english:'Tonometry',arabic:'Tonometry',id:1},
                {english:'Biomicroscopy',arabic:'Biomicroscopy',id:2},
                {english:'Gonioscopy',arabic:'Gonioscopy',id:3},
            ],
            // ******* main body object ******//
            clinicId:localStorage.getItem("clinicId"),
            data: {
                patientId:"50ce8fc6-fe3e-11ec-9cd9-0242ac120003",
                tonometry: {
                    test: {
                        testSelection: {
                            arabic: "",
                            english: "",
                        },
                        other: "",
                    },
                    drug: {
                        drugSelection: {
                            arabic: "",
                            english: "",
                        },
                        other: "",
                    },
                    time: null,
                    os: {
                        tension: [],
                        pachymetry: null,
                        pachCor: [],
                        adjTn: [],
                    },
                    od: {
                        tension: [],
                        pachymetry: null,
                        pachCor: [],
                        adjTn: [],
                    },
                    note: "",
                },
                biomicroscopy: {
                    os: {
                        lid: "",
                        conjunctiva: "",
                        cornea: "",
                        ac: "",
                        viterous: "",
                        iris: "",
                        eyeColour: "",
                        lens: "",
                        angle: "",
                        tbut: "",
                        tvol: "",
                    },
                    od: {
                        lid: "",
                        conjunctiva: "",
                        cornea: "",
                        ac: "",
                        viterous: "",
                        iris: "",
                        eyeColour: "",
                        lens: "",
                        angle: "",
                        tbut: "",
                        tvol: "",
                    },
                    note: "",
                },
                gonioscopy: {
                os: {
                    box: {
                    north: {
                        direction: {
                        arabic: "",
                        english: "",
                        },
                        number: null,
                    }, 
                    south: {
                        direction: {
                        arabic: "",
                        english: "",
                        },
                        number: null,
                    },
                    east: {
                        direction: {
                        arabic: "",
                        english: "",
                        },
                        number: null,
                    },
                    west: {
                        direction: {
                        arabic: "",
                        english: "",
                        },
                        number: null,
                    },
                    },
                    lens: {
                    lenSelection: {
                        arabic: "",
                        english: "",
                    },
                    other: "",
                    },
                    iris: "",
                },
                od: {
                    box: {
                    north: {
                        direction: {
                        arabic: "",
                        english: "",
                        },
                        number: null,
                    },
                    south: {
                        direction: {
                        arabic: "",
                        english: "",
                        },
                        number: null,
                    },
                    east: {
                        direction: {
                        arabic: "",
                        english: "",
                        },
                        number: null,
                    },
                    west: {
                        direction: {
                        arabic: "",
                        english: "",
                        },
                        number: null,
                    },
                    },
                    lens: {
                    lenSelection: {
                        arabic: "",
                        english: "",
                    },
                    other: "",
                    },
                    iris: "",
                },
                note: "",
                },
            },
        }
    },

}
</script>
<style lang="scss" scoped>
.anterior-exam{
    .anterior-exam-selection{
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