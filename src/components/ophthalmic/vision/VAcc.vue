<template>
    <div class="vacc">
        <div class="row my-5">
            <div class="col-lg-9 col-xl-7">
                <h4>{{lang[local].vaCc.heading}}</h4>
                <div class="input-wrapper row">
                    <div class="col-1 d-flex align-items-center"><label>{{lang[local].measurementsLabels.aide}}</label></div>
                    <CustomDropMenu 
                    class="col-3"
                    :options="dvaOptions" :data="data.vaCc" :selectionKey="'aide'" :preLabel="'20/'"/>                                                                                                                               
                </div>
                <div class="input-wrapper row">
                    <div class="col-1 d-flex align-items-center"><label>{{lang[local].measurementsLabels.scale}}</label></div>
                    <CustomDropMenu 
                    class="col-3"
                    :options="dvaOptions" :data="data.vaCc" :selectionKey="'scale'" :preLabel="'20/'"/>                                                                                   
                </div>
            </div>
        </div>
        <div class="row my-5">
            <div class="col-lg-9 col-xl-7">
                <div class="labels-wrapper row">
                    <label class="col-1"></label>
                    <label class="col-3 text-center">{{lang[local].measurementsLabels.dva}}</label>
                    <label class="col-3 text-center">{{lang[local].measurementsLabels.ph}}</label>
                    <label class="col-3 text-center">{{lang[local].measurementsLabels.nva}}</label>
                </div>
                <div class="input-wrapper row">
                    <div class="col-1 d-flex align-items-center"><label>{{lang[local].measurementsLabels.od}}</label></div>
                    <CustomDropMenu 
                    class="col-3"
                    :options="dvaOptions" :data="data.vaCc.od" :selectionKey="'dva'" :preLabel="'20/'"/>                                                     
                    <CustomDropMenu 
                    class="col-3"
                    :options="dvaOptions" :data="data.vaCc.od" :selectionKey="'ph'" :preLabel="'20/'" />                                                     
                    <CustomDropMenu 
                    class="col-3"
                    :options="nvaOptions" :data="data.vaCc.od" :selectionKey="'nva'" :preLabel="'20/'" />                                                     
                </div>
                <div class="input-wrapper row">
                    <div class="col-1 d-flex align-items-center"><label>{{lang[local].measurementsLabels.os}}</label></div>
                    <CustomDropMenu 
                    class="col-3"
                    :options="dvaOptions" :data="data.vaCc.os" :selectionKey="'dva'" :preLabel="'20/'"/>                                                     
                    <CustomDropMenu 
                    class="col-3"
                    :options="dvaOptions" :data="data.vaCc.os" :selectionKey="'ph'" :preLabel="'20/'" />                                                     
                    <CustomDropMenu 
                    class="col-3"
                    :options="nvaOptions" :data="data.vaCc.os" :selectionKey="'nva'" :preLabel="'20/'" />                                                     
                </div>
                <div class="input-wrapper row">
                    <div class="col-1 d-flex align-items-center"><label>{{lang[local].measurementsLabels.ou}}</label></div>
                    <CustomDropMenu 
                    class="col-3 "
                    :options="dvaOptions" :data="data.vaCc.ou" :selectionKey="'dva'" :preLabel="'20/'"/>                                                                                                       
                    <CustomDropMenu 
                    class="col-3 offset-3"
                    :options="nvaOptions" :data="data.vaCc.ou" :selectionKey="'nva'" :preLabel="'20/'" />                                                     
                </div>
            </div>
        </div>
        <div class="row my-5">
            <div class="col-md-7 col-lg-5 col-xl-4">
                <h4>{{lang[local].vaCc.note.label}}</h4>
                <Textarea v-model="data.vaCc.note" :placeholder="lang[local].vaCc.note.placeholder" rows="3" />
                <div class="error">
                    <small 
                        class="d-block text-danger" 
                        v-if="$v.data.vaCc.note.$model !='' && !$v.data.vaCc.note.notContainsHtmlTags"
                    >
                        {{errors.htmlTagsError(lang[local].vaCc.note.label)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.vaCc.note.minLen">
                        {{errors.minLengthError(lang[local].vaCc.note.label,$v.data.vaCc.note.$params.minLen.min)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.vaCc.note.maxLen">
                        {{errors.maxLengthError(lang[local].vaCc.note.label, $v.data.vaCc.note.$params.maxLen.max) }}
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
import measurementsOptions from '../../../mixins/clinics/ophthalmic/shared/measurements/measurementsOptions'
import lang from '../../../mixins/clinics/ophthalmic/vision/lang'
//////////////////////////////////////////////////////////
import CustomDropMenu from '../shared components/CustomDropMenu.vue'
import Textarea from 'primevue/textarea';
export default {
    mixins:[measurementsOptions,lang],
    props:{
        data:{
            type:Object,
            required:true
        },
    },
    components:{
        CustomDropMenu,
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
            vaCc: {
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
