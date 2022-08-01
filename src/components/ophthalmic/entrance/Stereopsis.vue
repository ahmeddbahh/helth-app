<template>
    <div class="stereopsis">
        <div class="row my-5">
            <div class="form-wrapper col-lg-4 col-md-6">
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].stereopsis.brewster.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <InputText type="text" v-model="data.stereopsis.brewster" :placeholder="lang[local].stereopsis.brewster.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.stereopsis.brewster.$model !='' && !$v.data.stereopsis.brewster.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].stereopsis.brewster.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.stereopsis.brewster.minLen">
                                {{errors.minLengthError(lang[local].stereopsis.brewster.label,$v.data.stereopsis.brewster.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.stereopsis.brewster.maxLen">
                                {{errors.maxLengthError(lang[local].stereopsis.brewster.label, $v.data.stereopsis.brewster.$params.maxLen.max) }}
                            </small>
                        </div> 
                    </div>
                </div>
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].stereopsis.stereoFly.label" 
                    :placeholder="lang[local].stereopsis.stereoFly.placeholder" 
                    :data="data.stereopsis.stereoFly"
                    :options="stereoFlyOptions" 
                    :selectionKey="'stereoFlySelection'"
                    :v="$v.data.stereopsis.stereoFly.other"
                />
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].stereopsis.circles.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <InputText type="text" v-model="data.stereopsis.circles" :placeholder="lang[local].stereopsis.circles.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.stereopsis.circles.$model !='' && !$v.data.stereopsis.circles.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].stereopsis.circles.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.stereopsis.circles.minLen">
                                {{errors.minLengthError(lang[local].stereopsis.circles.label,$v.data.stereopsis.circles.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.stereopsis.circles.maxLen">
                                {{errors.maxLengthError(lang[local].stereopsis.circles.label, $v.data.stereopsis.circles.$params.maxLen.max) }}
                            </small>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="form-wrapper offset-lg-2 col-lg-4 col-md-6">
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].stereopsis.forms.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <InputText type="text" v-model="data.stereopsis.forms" :placeholder="lang[local].stereopsis.forms.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.stereopsis.forms.$model !='' && !$v.data.stereopsis.forms.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].stereopsis.forms.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.stereopsis.forms.minLen">
                                {{errors.minLengthError(lang[local].stereopsis.forms.label,$v.data.stereopsis.forms.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.stereopsis.forms.maxLen">
                                {{errors.maxLengthError(lang[local].stereopsis.forms.label, $v.data.stereopsis.forms.$params.maxLen.max) }}
                            </small>
                        </div> 
                    </div>
                </div>
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].stereopsis.animals.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <InputText type="text" v-model="data.stereopsis.animals" :placeholder="lang[local].stereopsis.animals.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.stereopsis.animals.$model !='' && !$v.data.stereopsis.animals.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].stereopsis.animals.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.stereopsis.animals.minLen">
                                {{errors.minLengthError(lang[local].stereopsis.animals.label,$v.data.stereopsis.animals.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.stereopsis.animals.maxLen">
                                {{errors.maxLengthError(lang[local].stereopsis.animals.label, $v.data.stereopsis.animals.$params.maxLen.max) }}
                            </small>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-5">
            <div class="form-wrapper col-lg-4 col-md-6">
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].stereopsis.note.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <Textarea v-model="data.stereopsis.note" :placeholder="lang[local].stereopsis.note.placeholder" rows="3" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.stereopsis.note.$model !='' && !$v.data.stereopsis.note.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].stereopsis.note.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.stereopsis.note.minLen">
                                {{errors.minLengthError(lang[local].stereopsis.note.label,$v.data.stereopsis.note.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.stereopsis.note.maxLen">
                                {{errors.maxLengthError(lang[local].stereopsis.note.label, $v.data.stereopsis.note.$params.maxLen.max) }}
                            </small>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
////////////////////////////////////////////////////////
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "../../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError} from '../../helpers/errors'
//////////////////////////////////////////////////////////
import entranceOptions from '../../../mixins/clinics/ophthalmic/entrance/entranceOptions'
import lang from '../../../mixins/clinics/ophthalmic/entrance/lang'
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import CustomDropDown from '../shared components/CustomDropDown.vue'
export default {
    mixins:[entranceOptions,lang],
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    components:{
        InputText,
        CustomDropDown,
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
            stereopsis: {
                    brewster:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    stereoFly: {
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    circles:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    forms:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    animals:{
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

