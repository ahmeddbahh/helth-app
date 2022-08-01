<template>
    <div class="final-rx my-3">
        <div class="row categories-btns my-4">
            <div class="final-rx-selection col-12">
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
                <FinalRxChild :data="data" />
            </div>
            <div v-show="selectedCategoryId==2" class="col-12">
                <PD :data="data" />
            </div>
            <div v-show="selectedCategoryId==3" class="col-12">
                <DrRecommend :data="data" />
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
import FinalRxChild from './finalRx/FinalRxChild.vue'
import PD from './finalRx/PD.vue'
import DrRecommend from './finalRx/DrRecommend.vue'
export default {
    components:{
        Button,
        FinalRxChild,
        PD,
        DrRecommend,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            selectedCategoryId:1,
            categories:[
                {english:'Final Rx',arabic:'Final Rx',id:1},
                {english:'PD',arabic:'PD',id:2},
                {english:"Dr's Recommend",arabic:"Dr's Recommend",id:3},
            ],
            // ******* main body object ******//
            clinicId:localStorage.getItem("clinicId"),
            data: {
                patientId:"50ce8fc6-fe3e-11ec-9cd9-0242ac120003",
                finalRx: {
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
                pd: {
                    os:{
                        spherical:[],
                        cylindrical:[],
                    },
                    od:{                        
                        spherical:[],
                        cylindrical:[],
                    },
                },
                recommendation: {
                    os:{
                        spherical:[],
                        cylindrical:[],
                        axis:[],
                        add:[],
                    },
                    od:{                        
                        spherical:[],
                        cylindrical:[],
                        axis:[],
                        add:[],
                    },
                    lensType: {
                        lensTypeSelection: {
                        arabic: "",
                        english: "",
                        },
                        other: "",
                    },
                    note: "",
                },
                note: "",
            },
        }
    },

}
</script>
<style lang="scss" scoped>
.final-rx{
    .final-rx-selection{
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