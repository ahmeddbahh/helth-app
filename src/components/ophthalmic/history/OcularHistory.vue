<template>
    <div class="ocular-history">
        <div class="row">
            <div class="form-wrapper col-lg-4 col-md-6">
                <CustomMultiSelect
                    class="my-2"
                    :placeholder="lang[local].ocularHistory.condition.placeholder"
                    :label="lang[local].ocularHistory.condition.label"
                    :data="data.ocularHistory.condition"
                    :options="chiefComplaintOptions" 
                    :selectionKey="'conditionSelection'"
                    :v="$v.data.ocularHistory.condition.other"
                />
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].ocularHistory.eye.label}}</label>
                    </div>
                    <div class="col-md-8">
                            <Dropdown 
                                :placeholder="lang[local].ocularHistory.eye.placeholder"
                                v-model="data.ocularHistory.eye" 
                                :options="eyeOptions" 
                                :optionLabel="local=='ar'?'arabic':'english'" 
                            />
                    </div>
                </div>
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].ocularHistory.date.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <Calendar 
                            v-model="data.ocularHistory.date" 
                            :placeholder="lang[local].ocularHistory.date.placeholder" :showIcon="true" 
                            @date-select="formateDate"
                         />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.ocularHistory.date.$model !='' && $v.data.ocularHistory.date.notValidDate"
                            >
                                {{errors.inputError(lang[local].ocularHistory.date.label)}}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].ocularHistory.note.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <Textarea v-model="data.ocularHistory.note" :placeholder="lang[local].ocularHistory.note.placeholder"  rows="3" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.ocularHistory.note.$model !='' && !$v.data.ocularHistory.note.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].ocularHistory.note.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.ocularHistory.note.minLen">
                                {{errors.minLengthError(lang[local].ocularHistory.note.label,$v.data.ocularHistory.note.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.ocularHistory.note.maxLen">
                                {{errors.maxLengthError(lang[local].ocularHistory.note.label, $v.data.ocularHistory.note.$params.maxLen.max) }}
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

import {htmlTagsError,minLengthError,maxLengthError,inputError} from '../../helpers/errors'
import {notValidDate,notContainsHtmlTags} from "../../helpers/customValidators";
import {minLength,maxLength} from "vuelidate/lib/validators";

import CustomMultiSelect from '../shared components/CustomMultiSelect.vue'
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
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
        CustomMultiSelect,
        Dropdown,
        Calendar,
        Textarea,
    },
    data() {
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
                inputError
            },
        }
    },
    validations:{
        data:{
            ocularHistory:{
                condition:{
                    other:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    }
                },
                date:{
                    notValidDate(value){
                        return notValidDate(value)
                    },
                },
                note:{
                    minLen: minLength(1),
                    maxLen: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                }
            }
        }
    },
    methods:{
        formateDate(v){
            let date = new Date(v).toISOString().slice(0, 10);
            this.data.ocularHistory.date=date;
        },
    },
    
}
</script>