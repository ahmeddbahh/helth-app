<template>
    <div class="dominance">
        <div class="row">
            <div class="form-wrapper col-xl-4 col-md-6">
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].dominance.method.label"
                    :placeholder="lang[local].dominance.method.placeholder" 
                    :data="data.dominance.method"
                    :options="methodOptions" 
                    :selectionKey="'methodSelection'"
                    :v="$v.data.dominance.method.other"
                />
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].dominance.dominantEye.label}}</label>
                    </div>
                    <div class="col-md-8">
                            <Dropdown 
                                v-model="data.dominance.dominantEye" 
                                :options="dominantEyeOptions" 
                                :optionLabel="local=='ar'?'arabic':'english'" 
                                :placeholder="lang[local].dominance.dominantEye.placeholder" 
                            />
                    </div>
                </div>
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].dominance.note.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <Textarea v-model="data.dominance.note" :placeholder="lang[local].dominance.note.placeholder" rows="3" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.dominance.note.$model !='' && !$v.data.dominance.note.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].dominance.note.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.dominance.note.minLen">
                                {{errors.minLengthError(lang[local].dominance.note.label,$v.data.dominance.note.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.dominance.note.maxLen">
                                {{errors.maxLengthError(lang[local].dominance.note.label, $v.data.dominance.note.$params.maxLen.max) }}
                            </small>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import entranceOptions from '../../../mixins/clinics/ophthalmic/entrance/entranceOptions'
import lang from '../../../mixins/clinics/ophthalmic/entrance/lang'
////////////////////////////////////////////////////////
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "../../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError} from '../../helpers/errors'
//////////////////////////////////////////////////////////
import CustomDropDown from '../shared components/CustomDropDown.vue'
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
export default {
    mixins:[entranceOptions,lang],
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    components:{
        CustomDropDown,
        Dropdown,
        Textarea,
    },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
            },
        }
    },
   validations:{
        data:{
            dominance: {
                method: {
                    other:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                },
                note:{
                    minLen: minLength(1),
                    maxLen: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                },
            },
        },
    },
}
</script>