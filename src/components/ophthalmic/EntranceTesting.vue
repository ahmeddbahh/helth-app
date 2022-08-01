<template>
    <div class="entrance-testing my-3">
        <div class="row categories-btns my-4">
            <div class="entrance-testing-selection col-12">
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
                <Pupils :data="data" />
            </div>
            <div v-show="selectedCategoryId==2" class="col-12">
                <Dominance :data="data" />
            </div>
            <div v-show="selectedCategoryId==3" class="col-12">
                <EOM :data="data" />
            </div>
            <div v-show="selectedCategoryId==4" class="col-12">
                <CoverTest :data="data" />
            </div>
            <div v-show="selectedCategoryId==5" class="col-12">
                <VisualField :data="data" />
            </div>
            <div v-show="selectedCategoryId==6" class="col-12">
                <ColorVision :data="data" />
            </div>
            <div v-show="selectedCategoryId==7" class="col-12">
                <Stereopsis :data="data" />
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
import Pupils from './entrance/Pupils.vue';
import Dominance from './entrance/Dominance.vue';
import EOM from './entrance/EOM.vue';
import CoverTest from './entrance/CoverTest.vue';
import VisualField from './entrance/VisualField.vue';
import ColorVision from './entrance/ColorVision.vue';
import Stereopsis from './entrance/Stereopsis.vue';
export default {
    components:{
        Button,
        Pupils,
        Dominance,
        EOM,
        CoverTest,
        VisualField,
        ColorVision,
        Stereopsis,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            selectedCategoryId:1,
            categories:[
                {english:'Pupils',arabic:'Pupils',id:1},
                {english:'Dominance',arabic:'Dominance',id:2},
                {english:'EOM',arabic:'EOM',id:3},
                {english:'Cover Test',arabic:'Cover Test',id:4},
                {english:'Visual Field',arabic:'Visual Field',id:5},
                {english:'Color Vision',arabic:'Color Vision',id:6},
                {english:'Stereopsis',arabic:'Stereopsis',id:7},
            ],
            // ******* main body object ******//
            clinicId:localStorage.getItem("clinicId"),
            data: {
                patientId:"50ce8fc6-fe3e-11ec-9cd9-0242ac120003",
                pupils: {
                    od: {
                        sizeInLight:"",
                        sizeInDark:"",
                        shape: "",
                        reaction: "",
                        mGunn: "",
                        accom: "",
                        diagnose: "",
                    },
                    os: {
                        sizeInLight:"",
                        sizeInDark:"",
                        shape: "",
                        reaction: "",
                        mGunn: "",
                        accom: "",
                        diagnose: "",
                    },
                    note: "",
                },
                dominance: {
                    method: {
                        methodSelection: {
                        english: "",
                        arabic: "",
                        },
                        other: "",
                    },
                    dominantEye: {
                        english: "",
                        arabic: "",
                    },
                    note: "",
                },
                eom: {
                    extraOcularMotilities: {
                        od: "",
                        os: "",
                    },
                    npc: {
                        npcBreak: "",
                        npcRecovery: "",
                        npcWithEffect: false,
                    },
                    broadHTest: {
                        od: {
                            sr: "",
                            lr: "",
                            ir: "",
                            io: "",
                            mr: "",
                            so: "",
                        },
                        os: {
                            sr: "",
                            lr: "",
                            ir: "",
                            io: "",
                            mr: "",
                            so: "",
                        },
                    },
                    note: "",
                },
                coverTest: {
                    hirschbergTest: {
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
                    brucknerTest: {
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
                    unilateralCoverTest: {
                        distantVision: {
                        uLateral: "",
                        uVertical: "",
                        uNoncomitant: false,
                        },
                        nearVision: {
                        uLateral: "",
                        uVertical: "",
                        uNoncomitant: false,
                        },
                    },
                    alternatingCoverTest: {
                        distantVision: {
                        lateral: "",
                        vertical: "",
                        aNoncomitant: false,
                        },
                        nearVision: {
                        lateral: "",
                        vertical: "",
                        aNoncomitant: false,
                        },
                    },
                    note: "",
                },
                visualField: {
                    confrontation: {
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
                    autoPerimetry: {
                        instrument: {
                        instrumentSelection: {
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
                        os: {
                        osSelection: {
                            arabic: "",
                            english: "",
                        },
                        other: "",
                        },
                    },
                    tangentSreen: {
                        scaleSelection: {
                        arabic: "",
                        english: "",
                        },
                        other: "",
                    },
                    note: "",
                },
                colourVision: {
                    test: {
                        testSelection: {
                        arabic: "",
                        english: "",
                        },
                        other: "",
                    },
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
                    ou: {
                        ouSelection: {
                        arabic: "",
                        english: "",
                        },
                        other: "",
                    },
                    aquired: false,
                    d15: "",
                    note: "",
                },
                stereopsis: {
                    brewster: "",
                    stereoFly: {
                        stereoFlySelection: {
                        arabic: "",
                        english: "",
                        },
                        other: "",
                    },
                    circles: "",
                    forms: "",
                    animals: "",
                    note: "",
                },
            },
        }
    },

}
</script>
<style lang="scss" scoped>
.entrance-testing{
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
    .entrance-testing-selection{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 20px;
    }
    .main-functions{
        
    }
}
</style>