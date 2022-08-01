<template>
    <div class="lensomety">
        <div class="row my-2">
            <div class="col-md-4 col-xl-4">
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].lensometry.lensType.label" 
                    :placeholder="lang[local].lensometry.lensType.placeholder" 
                    :data="data.lensomety.lensType"
                    :options="typeOptions" 
                    :selectionKey="'lensTypeSelection'"
                    :v="$v.data.lensomety.lensType.other"
                />
            </div>
        </div>
        <div class="row my-3">
            <div class="col-12 col-xl-9">
                <div class="svg-wrapper">
                    <img src="../../../UI/icons/clinic/ophthalmic/vision/lensometry/layer1.svg" alt="" class="w-100">
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-12 col-xl-9">
                <div class="eyes-labels">
                    <div class="label-wrapper"><h3>{{lang[local].measurementsLabels.od}}</h3></div>
                    <div class="label-wrapper"><h3>{{lang[local].measurementsLabels.os}}</h3></div>
                </div>
            </div>
        </div>
        <div class="row my-2">
                <div class="col-5 col-xl-4">
                    <div class="row">
                        <div class="col-6 input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.spherical}}</label>
                            <CustomDropMenu :options="sphericalOptions" :data="data.lensomety.od" :selectionKey="'spherical'" :excludeColumn="0" />
                        </div>
                        <div class="col-6 input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.cylindrical}}</label>
                            <CustomDropMenu :options="cylindricalOptions" :data="data.lensomety.od" :selectionKey="'cylindrical'" :excludeColumn="0" />
                        </div>
                        <div class="col-6 input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.axis}}</label>
                            <CustomDropMenu :options="axisOptions" :data="data.lensomety.od" :selectionKey="'axis'" />
                        </div>
                        <div class="col-6 input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.add}}</label>
                            <CustomDropMenu :options="addOptions" :data="data.lensomety.od" :selectionKey="'add'" />
                        </div>
                    </div>
                </div>
                <div class="col-2 col-xl-1">
                    <div class="copy-controllers">
                        <Button 
                            icon="pi pi-angle-left"
                            class="p-button-rounded p-button-sm"
                            @click="copyToOd"
                        />
                        <Button 
                            icon="pi pi-angle-right" 
                            class="p-button-rounded p-button-sm"
                            @click="copyToOs" 
                        />
                    </div>
                </div>
                <div class="col-5 col-xl-4">
                    <div class="row">
                        <div class="col-6 input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.spherical}}</label>
                            <CustomDropMenu :options="sphericalOptions" :data="data.lensomety.os" :selectionKey="'spherical'" :excludeColumn="0" />
                        </div>
                        <div class="col-6 input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.cylindrical}}</label>
                            <CustomDropMenu :options="cylindricalOptions" :data="data.lensomety.os" :selectionKey="'cylindrical'" :excludeColumn="0" />
                        </div>
                        <div class="col-6 input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.axis}}</label>
                            <CustomDropMenu :options="axisOptions" :data="data.lensomety.os" :selectionKey="'axis'" />
                        </div>
                        <div class="col-6 input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.add}}</label>
                            <CustomDropMenu :options="addOptions" :data="data.lensomety.os" :selectionKey="'add'" />
                        </div>
                    </div>
                </div>
        </div>
        <div class="row my-2">
            <div class="col-6 col-xl-4">
                <label>{{lang[local].lensometry.note.label}}</label>
                <Textarea v-model="data.lensomety.note" :placeholder="lang[local].lensometry.note.placeholder" rows="3" />
                <div class="error">
                    <small 
                        class="d-block text-danger" 
                        v-if="$v.data.lensomety.note.$model !='' && !$v.data.lensomety.note.notContainsHtmlTags"
                    >
                        {{errors.htmlTagsError(lang[local].lensometry.note.label)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.lensomety.note.minLen">
                        {{errors.minLengthError(lang[local].lensometry.note.label,$v.data.lensomety.note.$params.minLen.min)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.lensomety.note.maxLen">
                        {{errors.maxLengthError(lang[local].lensometry.note.label, $v.data.lensomety.note.$params.maxLen.max) }}
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
import {htmlTagsError,minLengthError,maxLengthError} from '../../helpers/errors'
//////////////////////////////////////////////////////////
import visionOptions from '../../../mixins/clinics/ophthalmic/vision/visionOptions'
import lang from '../../../mixins/clinics/ophthalmic/vision/lang'
import measurementsOptions from '../../../mixins/clinics/ophthalmic/shared/measurements/measurementsOptions'
//////////////////////////////////////////////////////////
import CustomDropDown from '../shared components/CustomDropDown.vue'
import CustomDropMenu from '../shared components/CustomDropMenu.vue'
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
export default {
    mixins:[visionOptions,lang,measurementsOptions],
    props:{
        data:{
            type:Object,
            required:true
        },
    },
    components:{
        CustomDropDown,
        CustomDropMenu,
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
            },
        }
    },
    validations:{
        data:{
            lensomety: {
                    lensType:{
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
    methods:{
        copyToOd(){
            this.data.lensomety.od=JSON.parse(JSON.stringify(this.data.lensomety.os));
        },
        copyToOs(){
            this.data.lensomety.os=JSON.parse(JSON.stringify(this.data.lensomety.od));
        },
    },
}
</script>
<style lang="scss" scoped>
.lensomety{
    .eyes-labels{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: -7vw;
        .label-wrapper{
            flex-grow: 1;
            display: flex;
            justify-content: center;
        }
    }
    .copy-controllers{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        /deep/.pi{
            color: white;
            font-size: 1.25rem;
            line-height: 0;
        }
    }
}
@media(max-width:1200px) {
    .lensomety{
        .eyes-labels{
            margin-top: -12vw;
        }
    }
}
@media(max-width:500px) {
    .lensomety{
        .eyes-labels{
            margin-top: -15vw;
        }
    }
}
</style>