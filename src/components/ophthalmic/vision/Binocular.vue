<template>
    <div class="binocular">
        <div class="row my-5">
            <div class="col-md-6 col-lg-4 col-xl-3">
                <h4>{{lang[local].binoculor.phorias.heading}}</h4>
                <div class="labels-wrapper row">
                    <label class="col-2"></label>
                    <label class="col-5 text-center">{{lang[local].binoculor.phorias.distantVision}}</label>
                    <label class="col-5 text-center">{{lang[local].binoculor.phorias.nearVision}}</label>
                </div>
                <div class="input-wrapper row">
                    <div class="col-2 d-flex align-items-center"><label>{{lang[local].measurementsLabels.h}}</label></div>
                    <CustomDropMenu 
                    class="col-5"
                    :options="hOptions" :data="data.binoculor.phorias.distantVision" :selectionKey="'h'" />                                                     
                    <CustomDropMenu 
                    class="col-5"
                    :options="hOptions" :data="data.binoculor.phorias.nearVision" :selectionKey="'h'" />                                                     
                </div>
                <div class="input-wrapper row">
                    <div class="col-2 d-flex align-items-center"><label>{{lang[local].measurementsLabels.v}}</label></div>
                    <CustomDropMenu 
                    class="col-5"
                    :options="hOptions" :data="data.binoculor.phorias.distantVision" :selectionKey="'v'" />                                                     
                    <CustomDropMenu 
                    class="col-5"
                    :options="hOptions" :data="data.binoculor.phorias.nearVision" :selectionKey="'v'" />                                                     
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 offset-xl-1">
                <h4>{{lang[local].binoculor.pursuits.heading}}</h4>
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].binoculor.pursuits.od.label" 
                    :placeholder="lang[local].binoculor.pursuits.od.placeholder" 
                    :data="data.binoculor.pursuits.od"
                    :options="pursuitsOptions" 
                    :selectionKey="'osSelection'"
                    :v="$v.data.binoculor.pursuits.od.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].binoculor.pursuits.os.label" 
                    :placeholder="lang[local].binoculor.pursuits.os.placeholder" 
                    :data="data.binoculor.pursuits.os"
                    :options="pursuitsOptions" 
                    :selectionKey="'osSelection'"
                    :v="$v.data.binoculor.pursuits.os.other"
                />
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 offset-xl-1">
                <h4>{{lang[local].binoculor.saccades.heading}}</h4>
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].binoculor.saccades.od.label" 
                    :placeholder="lang[local].binoculor.saccades.od.placeholder" 
                    :data="data.binoculor.saccades.od"
                    :options="saccadesOptions" 
                    :selectionKey="'odSelection'"
                    :v="$v.data.binoculor.saccades.od.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].binoculor.saccades.os.label" 
                    :placeholder="lang[local].binoculor.saccades.os.placeholder" 
                    :data="data.binoculor.saccades.os"
                    :options="saccadesOptions" 
                    :selectionKey="'osSelection'"
                    :v="$v.data.binoculor.saccades.os.other"
                />
            </div>
        </div>
        <div class="row my-5">
            <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="d-flex gap-5">
                    <h4>{{lang[local].binoculor.vergence.heading}}</h4>
                    <Dropdown 
                        v-model="vergenceType" 
                        :options="vergenceTypeOptions" 
                        :optionLabel="local=='ar'?'arabic':'english'" 
                        placeholder="Select" 
                    />
                </div>
                <div class="labels-wrapper row">
                    <label class="col-2"></label>
                    <label class="col-5 text-center">{{lang[local].binoculor.vergence.distantVision}}</label>
                    <label class="col-5 text-center">{{lang[local].binoculor.vergence.nearVision}}</label>
                </div>
                <transition name="slide" mode="out-in">
                    <div v-if="!typeToggled">
                        <div class="input-wrapper row">
                            <div class="col-2 d-flex align-items-center"><label>{{lang[local].measurementsLabels.blur}}</label></div>
                            <CustomDropMenu 
                            class="col-5"
                            :options="vergenceOptions" :data="data.binoculor[vergenceType.key].distantVision" :selectionKey="'visionBlur'" />                                                     
                            <CustomDropMenu 
                            class="col-5"
                            :options="vergenceOptions" :data="data.binoculor[vergenceType.key].nearVision" :selectionKey="'visionBlur'" />                                                     
                        </div>
                        <div class="input-wrapper row">
                            <div class="col-2 d-flex align-items-center"><label>{{lang[local].measurementsLabels.break}}</label></div>
                            <CustomDropMenu 
                            class="col-5"
                            :options="vergenceOptions" :data="data.binoculor[vergenceType.key].distantVision" :selectionKey="'visionBreak'" />                                                     
                            <CustomDropMenu 
                            class="col-5"
                            :options="vergenceOptions" :data="data.binoculor[vergenceType.key].nearVision" :selectionKey="'visionBreak'" />                                                     
                        </div>
                        <div class="input-wrapper row">
                            <div class="col-2 d-flex align-items-center"><label>{{lang[local].measurementsLabels.recov}}.</label></div>
                            <CustomDropMenu 
                            class="col-5"
                            :options="vergenceOptions" :data="data.binoculor[vergenceType.key].distantVision" :selectionKey="'visionRecov'" />                                                     
                            <CustomDropMenu 
                            class="col-5"
                            :options="vergenceOptions" :data="data.binoculor[vergenceType.key].nearVision" :selectionKey="'visionRecov'" />                                                     
                        </div>

                    </div>
                </transition>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 offset-xl-1">
                <h4>{{lang[local].binoculor.accomodation.heading}}</h4>
                <div class="labels-wrapper row">
                    <label class="col-4"></label>
                    <label class="col-4 text-center">{{lang[local].measurementsLabels.od}}</label>
                    <label class="col-4 text-center">{{lang[local].measurementsLabels.os}}</label>
                </div>
                <div class="input-wrapper row">
                    <div class="col-4 d-flex align-items-center"><label>{{lang[local].measurementsLabels.amp}}</label></div>
                    <CustomDropMenu 
                    class="col-4"
                    :options="ampOptions" :data="data.binoculor.accomodation" :selectionKey="'ampOd'" />                                                     
                    <CustomDropMenu 
                    class="col-4"
                    :options="ampOptions" :data="data.binoculor.accomodation" :selectionKey="'ampOs'" />                                                     
                </div>
                <div class="input-wrapper row">
                    <div class="col-4 d-flex align-items-center"><label>{{lang[local].measurementsLabels.acaRatio}}</label></div>
                    <CustomDropMenu 
                    class="col-8"
                    :options="ratioOptions" :data="data.binoculor.accomodation" :selectionKey="'acaRatio'" />                            
                </div>
                <div class="input-wrapper row">
                    <div class="col-4 d-flex align-items-center"><label>{{lang[local].measurementsLabels.nra}}</label></div>
                    <CustomDropMenu 
                    class="col-8"
                    :options="nraOptions" :data="data.binoculor.accomodation" :selectionKey="'nra'" />                            
                </div>
                <div class="input-wrapper row">
                    <div class="col-4 d-flex align-items-center"><label>{{lang[local].measurementsLabels.pra}}</label></div>
                    <CustomDropMenu 
                    class="col-8"
                    :options="praOptions" :data="data.binoculor.accomodation" :selectionKey="'pra'" />                            
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 offset-xl-1">
                <h4>{{lang[local].binoculor.note.label}}</h4>
                <Textarea v-model="data.binoculor.note" :placeholder="lang[local].binoculor.note.placeholder" rows="3" />
                <div class="error">
                    <small 
                        class="d-block text-danger" 
                        v-if="$v.data.binoculor.note.$model !='' && !$v.data.binoculor.note.notContainsHtmlTags"
                    >
                        {{errors.htmlTagsError(lang[local].binoculor.note.label)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.binoculor.note.minLen">
                        {{errors.minLengthError(lang[local].binoculor.note.label,$v.data.binoculor.note.$params.minLen.min)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.binoculor.note.maxLen">
                        {{errors.maxLengthError(lang[local].binoculor.note.label, $v.data.binoculor.note.$params.maxLen.max) }}
                    </small>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
//////////////////////////////////////////////////////////
import lang from '../../../mixins/clinics/ophthalmic/vision/lang'
import visionOptions from '../../../mixins/clinics/ophthalmic/vision/visionOptions'
import measurementsOptions from '../../../mixins/clinics/ophthalmic/shared/measurements/measurementsOptions'
////////////////////////////////////////////////////////
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "../../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError} from '../../helpers/errors'
//////////////////////////////////////////////////////////
import CustomDropMenu from '../shared components/CustomDropMenu.vue'
import CustomDropDown from '../shared components/CustomDropDown.vue'
import Dropdown from 'primevue/dropdown';
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
        CustomDropMenu,
        CustomDropDown,
        Dropdown,
        Textarea,
    },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            vergenceTypeOptions:[
                {english:"Bi",arabic:"Bi",key:"vergenceBi"},
                {english:"Bo",arabic:"Bo",key:"vergenceBo"},
                {english:"Bu",arabic:"Bu",key:"vergenceBu"},
                {english:"Bd",arabic:"Bd",key:"vergenceBd"},
            ],
            vergenceType:{english:"Bi",arabic:"Bi",key:"vergenceBi"},
            typeToggled:false,
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
            },
        }
    },
    validations:{
        data:{
            binoculor: {
                pursuits:{
                    od:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    os:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                },
                saccades:{
                    od:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    os:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
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
    watch:{
        vergenceType:{
            handler(){
                this.typeToggled=true;
                setTimeout(()=>this.typeToggled=false,100)
            },
            deep:true,
        },
    },
}
</script>
<style lang="scss" scoped>
// animation 

.slide-enter-active {
   transition-duration:2s;
   transition-timing-function: ease-in-out;
}

.slide-leave-active {
   transition-duration: 2s;
   transition-timing-function: cubic-bezier(0, 1, 2, 1);
}

.slide-enter-to, .slide-leave {
   max-height:500px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height:0px;
}
</style>