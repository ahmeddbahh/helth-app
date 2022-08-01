<template>
    <div class="feeding-managing my-3">
        <div class="row">
            
            <div class="col-md-6 col-lg-4 ">
                <div >
                    <label >{{lang[local].feedingType}}</label>
                    <MultiSelect
                    v-model="mainOption.values"
                    :options="mainOptions"
                    :optionLabel="local=='ar'?'arabic':'english'"
                    :placeholder="lang[local].feedingType"
                    />
                </div>
            </div>
        </div>
        <div class="options" v-if="mainOption.values.length">
            <div class="option-wrapper" v-for="(option,index) in mainOption.values" :key="index">
                <Formula v-if="option.id==1" :dataObject="initData.formula" @resetData="initData.formula={...backUpData.formula}"  :data="data.formula"  />
                <Solid v-if="option.id==2" :dataObject="initData.solid" @resetData="initData.solid={...backUpData.solid}"  :data="data.solid" />
                <div v-if="option.id==3"  class="my-3" >
                    <div class="row">
                        <div class="col-md-6 ">
                            <label class="mx-2"> {{lang[local].breastFeeding}}</label>
                            <Textarea :placeholder="lang[local].breastFeeding" v-model="data.breastFeeding" @change="$v.data.breastFeeding.$touch()" />
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.data.breastFeeding.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].breastFeeding) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.breastFeeding.minLen">
                                    {{errors.minLengthError(lang[local].breastFeeding,$v.data.breastFeeding.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.breastFeeding.maxLen">
                                    {{errors.maxLengthError(lang[local].breastFeeding, $v.data.breastFeeding.$params.maxLen.max) }}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import MultiSelect from 'primevue/multiselect';
// import Solid from "./feedingManaging/Solid.vue";
// import Formula from "./feedingManaging/Formula.vue";
import Textarea from 'primevue/textarea';
import {minLength,maxLength} from "vuelidate/lib/validators";
import { notContainsHtmlTags} from "../helpers/customValidators";
import {minLengthError,maxLengthError,inputError} from "../helpers/errors";
export default {
    components:{
        MultiSelect,
        Solid:()=>import("./feedingManaging/Solid.vue"),
        Formula:()=>import("./feedingManaging/Formula.vue"),
        Textarea
    },
    props:['data','initData','backUpData','mainOption'],
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang: {
                en: {
                    feedingType :"Choose Feeding Type",
                    breastFeeding:"breast Feeding"
                },
                ar: {
                    feedingType :"Choose Feeding Type",
                    breastFeeding:"breast Feeding"
                },
            },
            mainOptions:[
                {english:"Formula",arabic:"Formula",id:1},
                {english:"solid",arabic:"solid",id:2},
                {english:"breast Feeding",arabic:"breast Feeding",id:3},
            ],
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
            },
        }
    },
    validations:{
        data:{
            breastFeeding:{
                minLen: minLength(1),
                maxLen: maxLength(500),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            }
        }
    },
    watch:{
        "data.breastFeeding"(){
            this.$store.dispatch("setPediatricFeedingManageBreastFeedingIsValid",this.$v.data.$invalid );
        },
    },
}
</script>
