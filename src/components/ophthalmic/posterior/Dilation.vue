<template>
    <div class="dilation">
        <div class="row my-2">
            <div class="col-lg-9">
                <div class="row">
                    <div class="col-md-6 col-lg-5 col-xl-4">
                        <div class="input-wrapper row">
                            <div class="col-3 d-flex align-items-center">
                                <label>{{lang[local].dilation.drug.label}}</label>
                            </div>
                            <div class="col-9">
                                <CustomDropDown
                                    class="my-2"
                                    :placeholder="lang[local].dilation.drug.placeholder"
                                    :v="$v.data.dilation.drug.other" 
                                    :data="data.dilation.drug"
                                    :options="drugOptions" 
                                    :selectionKey="'drugSelection'"
                                />
                            </div>
                        </div>
                        <div class="input-wrapper row">
                            <div class="col-3 d-flex align-items-center">
                                <label>{{lang[local].dilation.eye.label}}</label>
                            </div>
                            <div class="col-9">
                                <Dropdown 
                                    class="my-2"
                                    v-model="data.dilation.eye" 
                                    :options="eyeOptions" 
                                    :optionLabel="local=='ar'?'arabic':'english'" 
                                    :placeholder="lang[local].dilation.eye.placeholder" 
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-5 offset-lg-2 col-xl-4">
                        <div class="input-wrapper row">
                            <div class="col-3 d-flex align-items-center">
                                <label>{{lang[local].dilation.quantity.label}}</label>
                            </div>
                            <div class="col-9">
                                <InputText 
                                    type="text" v-model="data.dilation.quantity" 
                                    :placeholder="lang[local].dilation.quantity.placeholder"
                                    class="my-2" :class="{'p-invalid':$v.data.dilation.quantity.$invalid}" 
                                />
                                <div class="error">
                                    <small 
                                        class="d-block text-danger" 
                                        v-if="$v.data.dilation.quantity.$model !='' && !$v.data.dilation.quantity.notContainsHtmlTags"
                                    >
                                        {{errors.htmlTagsError(lang[local].dilation.quantity.label)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.dilation.quantity.minLen">
                                        {{errors.minLengthError(lang[local].dilation.quantity.label,$v.data.dilation.quantity.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.dilation.quantity.maxLen">
                                        {{errors.maxLengthError(lang[local].dilation.quantity.label, $v.data.dilation.quantity.$params.maxLen.max) }}
                                    </small>
                                </div>  
                            </div>
                        </div>
                        <div class="input-wrapper row">
                            <div class="col-3 d-flex align-items-center">
                                <label>{{lang[local].dilation.time.label}}</label>
                            </div>
                            <div class="col-9">
                                <Calendar v-model="data.dilation.time" :timeOnly="true" hourFormat="12" 
                                    :placeholder="lang[local].dilation.time.placeholder" :showIcon="true" :icon="'pi pi-clock'" class="my-2" />
                            </div>
                        </div>
                        <div class="input-wrapper row">
                            <div class="col-9 d-flex align-items-center">
                                <label for="informedPt">{{lang[local].dilation.informedPt}}</label>
                            </div>
                            <div class="col-3">
                                <div class="field-checkbox my-2">
                                    <Checkbox id="informedPt" v-model="data.dilation.informedPt" :binary="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-5 col-xl-4">
                        <label>{{lang[local].dilation.note.label}}</label>
                        <Textarea v-model="data.dilation.note" :placeholder="lang[local].dilation.note.placeholder" rows="3"
                            :class="{'p-invalid':$v.data.dilation.note.$invalid}" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.dilation.note.$model !='' && !$v.data.dilation.note.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].dilation.note.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.dilation.note.minLen">
                                {{errors.minLengthError(lang[local].dilation.note.label,$v.data.dilation.note.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.dilation.note.maxLen">
                                {{errors.maxLengthError(lang[local].dilation.note.label, $v.data.dilation.note.$params.maxLen.max) }}
                            </small>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
///////////////////////////////////////////////////////////////////
import posteriorOptions from '../../../mixins/clinics/ophthalmic/posterior/posteriorOptions'
import lang from '../../../mixins/clinics/ophthalmic/posterior/lang'
///////////////////////////////////////////////////////////////////
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "../../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError,inputError} from '../../helpers/errors'
///////////////////////////////////////////////////////////////////
import CustomDropDown from '../shared components/CustomDropDown.vue'
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';
export default {
    mixins:[posteriorOptions,lang],
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    components:{
        CustomDropDown,
        Dropdown,
        InputText,
        Calendar,
        Checkbox,
        Textarea
    },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
                inputError,
            },
        }
    },
    validations:{
        data:{
            dilation: {
                    drug: {
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    // time: "",
                    quantity:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
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