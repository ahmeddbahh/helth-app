<template>
    <div class="physicalExam my-3">
        <div class="row">
            <h3>{{lang[local].titles.physicalExam}}</h3>
            <div class="col-md-6"  v-for="(value,key) in lang[local].physicalExam" :key="key">
                <div class="row">
                    <div class="col-10 col-lg-4 my-3 d-flex  align-items-center">
                        <div >
                            <label > {{lang[local].physicalExam[key]}}</label>
                        </div>
                    </div>
                    <div class="col-2 col-lg-2  my-3 d-flex  align-items-center">
                        <div >
                            <Checkbox :binary="true" @change="resetComment('physicalExam',key)" v-model="data.physicalExam[key].checked"  />
                        </div>
                    </div>
                    <div class="col-md-10 col-lg-6  my-3 d-flex  align-items-center" v-if="data.physicalExam[key].checked">
                        <div class="flex-grow-1" >
                            <InputText 
                            type="text"
                            v-model="data.physicalExam[key].comment"
                            :class="{'border-error':$v.data.physicalExam[key].comment.$invalid  && $v.data.physicalExam[key].comment.$dirty}" 
                            @change="$v.data.physicalExam[key].comment.$touch()" 
                            :placeholder="lang[local].physicalExam[key]"
                            /> 
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.data.physicalExam[key].comment.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].physicalExam[key]) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.physicalExam[key].comment.minLen">
                                    {{errors.minLengthError(lang[local].physicalExam[key],$v.data.physicalExam[key].comment.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.physicalExam[key].comment.maxLen">
                                    {{errors.maxLengthError(lang[local].physicalExam[key], $v.data.physicalExam[key].comment.$params.maxLen.max) }}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-4">
            <h3>{{lang[local].titles.developmentalBehavioral}}</h3>
            <div class="col-md-6"  v-for="(value,key) in lang[local].developmentalBehavioral" :key="key">
                <div class="row">
                    <div class="col-10 col-lg-4 my-3 d-flex  align-items-center">
                        <div >
                            <label > {{lang[local].developmentalBehavioral[key]}}</label>
                        </div>
                    </div>
                    <div class="col-2 col-lg-2  my-3 d-flex  align-items-center">
                        <div >
                            <Checkbox :binary="true" @change="resetComment('developmentalBehavioral',key)" v-model="data.developmentalBehavioral[key].checked"  />
                        </div>
                    </div>
                    <div  class="col-md-10 col-lg-6  my-3 d-flex  align-items-center" v-if="data.developmentalBehavioral[key].checked">
                        <div class="flex-grow-1" >
                            <InputText 
                            type="text"
                            v-model="data.developmentalBehavioral[key].comment"
                            :class="{'border-error':$v.data.developmentalBehavioral[key].comment.$invalid  && $v.data.developmentalBehavioral[key].comment.$dirty}" 
                            @change="$v.data.developmentalBehavioral[key].comment.$touch()" 
                            :placeholder="lang[local].developmentalBehavioral[key]"
                            /> 
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.data.developmentalBehavioral[key].comment.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].developmentalBehavioral[key]) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.developmentalBehavioral[key].comment.minLen">
                                    {{errors.minLengthError(lang[local].developmentalBehavioral[key],$v.data.developmentalBehavioral[key].comment.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.developmentalBehavioral[key].comment.maxLen">
                                    {{errors.maxLengthError(lang[local].developmentalBehavioral[key], $v.data.developmentalBehavioral[key].comment.$params.maxLen.max) }}
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
import { maxLength, minLength } from "vuelidate/lib/validators";
import { minLengthError, maxLengthError, inputError } from "../helpers/errors";
import { notContainsHtmlTags } from "../helpers/customValidators";
import Checkbox from 'primevue/checkbox';
import InputText from "primevue/inputtext";
export default {
    props:['data'],
    components:{
        Checkbox,
        InputText
    },
    data() {
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang: {
                en: {
                    titles: {
                        physicalExam: "Physical Exam",
                        developmentalBehavioral: "Developmental / Behavioral",
                    },
                    physicalExam: {
                        temp: "Temp",
                        skin: "Skin",
                        nodes: "Nodes",
                        head: "Head",
                        eyesLeftRight: "Eyes left/right",
                        earsLeftRight: "Ears left/right",
                        nose: "Nose",
                        oropharynx: "Oropharynx",
                        neck: "Neck",
                        chestBreast: "Chest / Breast",
                        lung: "Lung",
                        cardiovascular: "Cardiovascular (murmurs)",
                        abdomen: "Abdomen",
                        genitalia: "Genitalia",
                        hips: "Hips (clicks)",
                        neuro: "Neuro (tone/strength)",
                        evidence: "Evidence",
                        footLeft: "Foot left",
                        footRight: "Foot right",
                        handLeft: "Hand left",
                        handRight: "Hand right",
                        handFingersLeft: "Hand fingers left",
                        handFingersRight: "Hand fingers right",
                        footFingersLeft: "Foot fingers left",
                        footFingerRight: "Foot fingers right",
                    },
                    developmentalBehavioral: {
                        vocalizesBabbles: "Vocalizes / Babbles",
                        recognizesParentsVoice: "Recognizes parents' voice",
                        graspingObjects: "Grasping objects",
                        rollsOver: "Rolls over",
                        hearingFromBirth: "Hearing from birth",
                        vision: "Vision (exam only)",
                        headNeckControl: "Head/Neck control",
                        liftsChest: "Lifts chest (prone position)",
                    },
                },
                ar: {
                    titles: {
                        physicalExam: "Physical Exam",
                        developmentalBehavioral: "Developmental / Behavioral",
                    },
                    physicalExam: {
                        temp: "Temp",
                        skin: "Skin",
                        nodes: "Nodes",
                        head: "Head",
                        eyesLeftRight: "Eyes left/right",
                        earsLeftRight: "Ears left/right",
                        nose: "Nose",
                        oropharynx: "Oropharynx",
                        neck: "Neck",
                        chestBreast: "Chest / Breast",
                        lung: "Lung",
                        cardiovascular: "Cardiovascular (murmurs)",
                        abdomen: "Abdomen",
                        genitalia: "Genitalia",
                        hips: "Hips (clicks)",
                        neuro: "Neuro (tone/strength)",
                        evidence: "Evidence",
                        footLeft: "Foot left",
                        footRight: "Foot right",
                        handLeft: "Hand left",
                        handRight: "Hand right",
                        handFingersLeft: "Hand fingers left",
                        handFingersRight: "Hand fingers right",
                        footFingersLeft: "Foot fingers left",
                        footFingerRight: "Foot fingers right",
                    },
                    developmentalBehavioral: {
                        vocalizesBabbles: "Vocalizes / Babbles",
                        recognizesParentsVoice: "Recognizes parents' voice",
                        graspingObjects: "Grasping objects",
                        rollsOver: "Rolls over",
                        hearingFromBirth: "Hearing from birth",
                        vision: "Vision (exam only)",
                        headNeckControl: "Head/Neck control",
                        liftsChest: "Lifts chest (prone position)",
                    },
                },
        },
        errors: {
            minLengthError,
            maxLengthError,
            inputError,
        },
        };
    },
    validations: {
        data: {
        physicalExam: {
            temp: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            skin: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            nodes: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            head: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            eyesLeftRight: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            earsLeftRight: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            nose: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            oropharynx: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            neck: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            chestBreast: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            lung: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            cardiovascular: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            abdomen: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            genitalia: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            hips: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            neuro: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            evidence: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            footLeft: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            footRight: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            handLeft: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            handRight: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            handFingersLeft: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            handFingersRight: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            footFingersLeft: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            footFingerRight: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
        },
        developmentalBehavioral: {
            vocalizesBabbles: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            recognizesParentsVoice: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            graspingObjects: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            rollsOver: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            hearingFromBirth: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            vision: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            headNeckControl: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
            liftsChest: {
            comment: {
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            },
        },
        },
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch("setPediatricPhysicalExamIsValid",this.$v.data.$invalid);
            },
            deep: true,
        },
    },
    methods:{
        resetComment(type_,key){
            this.data[type_][key].comment = null ;
            this.$v.data[type_][key].$reset() ;
        },
    },

};
</script>