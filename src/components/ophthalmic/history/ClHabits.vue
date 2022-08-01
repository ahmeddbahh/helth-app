<template>
    <div class="cl-habits">
        <div class="row">
            <div class="form-wrapper col-lg-4 col-md-6">
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].clHobits.typeReplacement.label"
                    :placeholder="lang[local].clHobits.typeReplacement.placeholder"
                    :data="data.clHobits.typeReplacement"
                    :options="typeReplacementOptions" 
                    :selectionKey="'typeReplacementSelection'"
                    :v="$v.data.clHobits.typeReplacement.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].clHobits.comfort.label"
                    :placeholder="lang[local].clHobits.comfort.placeholder"
                    :data="data.clHobits.comfort"
                    :options="comfortOptions" 
                    :selectionKey="'comfortSelection'"
                    :v="$v.data.clHobits.comfort.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].clHobits.wearingHabits.label"
                    :placeholder="lang[local].clHobits.wearingHabits.placeholder"
                    :data="data.clHobits.wearingHabits"
                    :options="wearingHabitsOptions" 
                    :selectionKey="'wearingHabitSelection'"
                    :v="$v.data.clHobits.wearingHabits.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].clHobits.cleaningHabits.label"
                    :placeholder="lang[local].clHobits.cleaningHabits.placeholder" 
                    :data="data.clHobits.cleaningHabits"
                    :options="wearingHabitsOptions" 
                    :selectionKey="'cleaningHabitSelection'"
                    :v="$v.data.clHobits.cleaningHabits.other"
                />
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].clHobits.note.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <Textarea v-model="data.clHobits.note" rows="3" :placeholder="lang[local].clHobits.note.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.clHobits.note.$model !='' && !$v.data.clHobits.note.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].clHobits.note.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.clHobits.note.minLen">
                                {{errors.minLengthError(lang[local].clHobits.note.label,$v.data.clHobits.note.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.clHobits.note.maxLen">
                                {{errors.maxLengthError(lang[local].clHobits.note.label, $v.data.clHobits.note.$params.maxLen.max) }}
                            </small>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import historyOptions from '../../../mixins/clinics/ophthalmic/history/historyOptions'
import lang from '../../../mixins/clinics/ophthalmic/history/lang'

import {htmlTagsError,minLengthError,maxLengthError,} from '../../helpers/errors'
import {notContainsHtmlTags} from "../../helpers/customValidators";
import {minLength,maxLength} from "vuelidate/lib/validators";

import CustomDropDown from '../shared components/CustomDropDown.vue'
import Textarea from 'primevue/textarea';

export default {
    mixins:[historyOptions,lang],
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    components:{
        CustomDropDown,
        Textarea,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
            },
        }
    },
    validations:{
        data:{
            clHobits:{
                typeReplacement:{
                    other:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    }
                },
                comfort:{
                    other:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    }
                },
                wearingHabits:{
                    other:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    }
                },
                cleaningHabits:{
                    other:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    }
                },
                note:{
                    minLen: minLength(1),
                    maxLen: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                }
            },
        }
    },
    
}
</script>