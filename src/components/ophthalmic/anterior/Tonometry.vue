<template>
    <div class="tonometry">
        <div class="row my-2">
            <div class="col-md-4 col-xl-3">
                <h4>{{lang[local].tonometry.heading}}</h4>
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].tonometry.test.label" 
                    :placeholder="lang[local].tonometry.test.placeholder" 
                    :data="data.tonometry.test"
                    :options="testOptions" 
                    :selectionKey="'testSelection'"
                    :v="$v.data.tonometry.test.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].tonometry.drug.label" 
                    :placeholder="lang[local].tonometry.drug.placeholder" 
                    :data="data.tonometry.drug"
                    :options="drugOptions" 
                    :selectionKey="'drugSelection'"
                    :v="$v.data.tonometry.drug.other"
                />
            </div>
        </div>
        <div class="row my-2">
            <div class="col-md-4 col-xl-3">
                <div class="row">
                    <div class="col-md-4">
                        <label>{{lang[local].tonometry.time.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <Calendar v-model="data.tonometry.time" :timeOnly="true" hourFormat="12" :showIcon="true" :icon="'pi pi-clock'"  
                            :placeholder="lang[local].tonometry.time.placeholder" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-sm-10 col-lg-6 offset-lg-1 offset-sm-2">
                <div class="svg-wrapper">
                    <img src="../../../UI/icons/clinic/ophthalmic/entrance/pupils/eyes.svg" alt="" class="w-100">
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-sm-9 col-lg-6 offset-lg-1 offset-sm-3">
                <div class="eyes-labels">
                    <div class="label-wrapper"><h3>{{lang[local].measurementsLabels.od}}</h3></div>
                    <div class="label-wrapper"><h3>{{lang[local].measurementsLabels.os}}</h3></div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-6">
                <div class="row">
                    <div class="col-3 input-wrapper">
                        <label >{{lang[local].measurementsLabels.tension}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropMenu :options="tensionOptions" :data="data.tonometry.od" :selectionKey="'tension'" />
                    </div>
                    <div class="col-3 input-wrapper">
                        <div class="copy-controllers">
                            <Button 
                                icon="pi pi-angle-left"
                                class="p-button-rounded p-button-sm"
                                @click="copyToOd"
                            />
                        </div>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropMenu :options="tensionOptions" :data="data.tonometry.os" :selectionKey="'tension'" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper">
                        <label>{{lang[local].tonometry.pachymetry.label}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <InputText type="text" v-model="data.tonometry.od.pachymetry" 
                            :placeholder="lang[local].tonometry.pachymetry.placeholder" 
                            class="my-2" :class="{'p-invalid':$v.data.tonometry.od.pachymetry.$invalid}" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.tonometry.od.pachymetry.$model !='' && !$v.data.tonometry.od.pachymetry.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].tonometry.pachymetry.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.tonometry.od.pachymetry.minLen">
                                {{errors.minLengthError(lang[local].tonometry.pachymetry.label,$v.data.tonometry.od.pachymetry.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.tonometry.od.pachymetry.maxLen">
                                {{errors.maxLengthError(lang[local].tonometry.pachymetry.label, $v.data.tonometry.od.pachymetry.$params.maxLen.max) }}
                            </small>
                        </div>  
                    </div>
                    <div class="col-3 input-wrapper">
                        <div class="copy-controllers">
                            <Button 
                                icon="pi pi-angle-right" 
                                class="p-button-rounded p-button-sm"
                                @click="copyToOs" 
                            />
                        </div>
                    </div>
                    <div class="col-3 input-wrapper">
                        <InputText type="text" v-model="data.tonometry.os.pachymetry" 
                            :placeholder="lang[local].tonometry.pachymetry.placeholder"
                            class="my-2" :class="{'p-invalid':$v.data.tonometry.os.pachymetry.$invalid}"
                            />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.tonometry.os.pachymetry.$model !='' && !$v.data.tonometry.os.pachymetry.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].tonometry.pachymetry.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.tonometry.os.pachymetry.minLen">
                                {{errors.minLengthError(lang[local].tonometry.pachymetry.label,$v.data.tonometry.os.pachymetry.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.tonometry.os.pachymetry.maxLen">
                                {{errors.maxLengthError(lang[local].tonometry.pachymetry.label, $v.data.tonometry.os.pachymetry.$params.maxLen.max) }}
                            </small>
                        </div>  
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper">
                        <label>{{lang[local].measurementsLabels.pachCor}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropMenu :options="pachOptions" :data="data.tonometry.od" :selectionKey="'pachCor'" />
                    </div>
                    <div class="col-3 offset-3 input-wrapper">
                        <CustomDropMenu :options="pachOptions" :data="data.tonometry.os" :selectionKey="'pachCor'" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper">
                        <label>{{lang[local].measurementsLabels.adjTn}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropMenu :options="adjOptions" :data="data.tonometry.od" :selectionKey="'adjTn'" />
                    </div>
                    <div class="col-3 offset-3 input-wrapper">
                        <CustomDropMenu :options="adjOptions" :data="data.tonometry.os" :selectionKey="'adjTn'" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-6 col-xl-3">
                <label>{{lang[local].tonometry.note.label}}</label>
                <Textarea 
                    v-model="data.tonometry.note" 
                    :placeholder="lang[local].tonometry.note.placeholder" rows="3"
                    :class="{'p-invalid':$v.data.tonometry.note.$invalid}"
                 />
                <div class="error">
                    <small 
                        class="d-block text-danger" 
                        v-if="$v.data.tonometry.note.$model !='' && !$v.data.tonometry.note.notContainsHtmlTags"
                    >
                        {{errors.htmlTagsError(lang[local].tonometry.note.label)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.tonometry.note.minLen">
                        {{errors.minLengthError(lang[local].tonometry.note.label,$v.data.tonometry.note.$params.minLen.min)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.tonometry.note.maxLen">
                        {{errors.maxLengthError(lang[local].tonometry.note.label, $v.data.tonometry.note.$params.maxLen.max) }}
                    </small>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
////////////////////////////////////////////////////////
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "../../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError,inputError} from '../../helpers/errors'
/////////////////////////////////////////
import anteriorOptions from '../../../mixins/clinics/ophthalmic/anterior/anteriorOptions'
import lang from '../../../mixins/clinics/ophthalmic/anterior/lang'
import measurementsOptions from '../../../mixins/clinics/ophthalmic/shared/measurements/measurementsOptions'
/////////////////////////////////////////

import CustomDropDown from '../shared components/CustomDropDown.vue'
import Calendar from 'primevue/calendar';
import CustomDropMenu from '../shared components/CustomDropMenu.vue'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
export default {
    mixins:[anteriorOptions,lang,measurementsOptions],
    props:{
        data:{
            type:Object,
            required:true
        },
    },
    components:{
        CustomDropDown,
        Calendar,
        CustomDropMenu,
        InputText,
        Button,
        Textarea,

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
            tonometry: {
                    test:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    drug:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    // time:{
                    //     time(value){
                    //         return time(value)
                    //     },
                    // },
                    os: {
                        pachymetry:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    od: {
                        pachymetry:{
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
    methods:{
        copyToOd(){
            this.data.tonometry.od=JSON.parse(JSON.stringify(this.tonometry.fundusExam.os));
            
        },
        copyToOs(){
            this.data.tonometry.os=JSON.parse(JSON.stringify(this.tonometry.fundusExam.od));
        },
    },
}
</script>
<style lang="scss" scoped>
.tonometry{
    .eyes-labels{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .label-wrapper{
            flex-grow: 1;
            display: flex;
            justify-content: center;
        }
    }
    .copy-controllers{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /deep/.pi{
            color: white;
            font-size: 1.25rem;
            line-height: 0;
        }
    }
}
</style>