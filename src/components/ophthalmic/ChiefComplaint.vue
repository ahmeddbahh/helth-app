<template>
    <div class="chief-complaint my-2">
        <div class="row categories-btns">
            <div class="chiefcomplaint-selection col-12">
                <div v-for="(category,i) in categories" :key="i">
                    <Button 
                        :label="local=='ar'?category.arabic:category.english" 
                        @click="selectedCategoryId=category.id" 
                        :class="{'p-button-outlined':selectedCategoryId!=category.id}" 
                    />
                </div>
            </div>
        </div>
        <div class="categories-content row  my-5">
            <div v-show="selectedCategoryId==1" class="form-wrapper reason-visit col-xl-3 col-lg-4 col-md-6">
                    <CustomMultiSelect
                        :label="lang[local].reasonForVisit.label"
                        :placeholder="lang[local].reasonForVisit.placeholder" 
                        :data="data.reasonForVisit.reasnOfVisit"
                        :options="reasons" 
                        :selectionKey="'reasonSelection'"
                        :v="$v.data.reasonForVisit.reasnOfVisit.other"
                    />
                <div class="input-wrapper my-2 lastEyeExam row">
                    <div class="col-md-4">
                        <label>{{lang[local].lastEyeExam.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <Calendar 
                            v-model="data.reasonForVisit.lastEyeExam" 
                            @date-select="formateDate"
                            :placeholder="lang[local].lastEyeExam.placeholder" 
                            :showIcon="true" 
                        />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.reasonForVisit.lastEyeExam.$model !='' && $v.data.reasonForVisit.lastEyeExam.notValidDate"
                            >
                                {{errors.inputError(lang[local].lastEyeExam.label)}}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="selectedCategoryId==2" class="form-wrapper sub-chief-complaint col-12 col-xl-9">
                <div class="row">
                    <div class="col-md-4">
                        <div class="chief my-2">
                            <CustomMultiSelect 
                                :label="lang[local].chiefComplaint.chiefComplaint.label"
                                :placeholder="lang[local].chiefComplaint.chiefComplaint.placeholder"
                                :otherPlaceholder="lang[local].chiefComplaint.chiefComplaint.otherPlaceholder"
                                :data="data.chiefComplaint.chiefComplaint"
                                :options="chiefComplaintOptions" 
                                :selectionKey="'chiefComplaintSelection'"
                                :v="$v.data.chiefComplaint.chiefComplaint.other"
                            />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="location my-2">
                            <CustomDropDown
                                :label="lang[local].chiefComplaint.location.label"
                                :placeholder="lang[local].chiefComplaint.location.placeholder"
                                :otherPlaceholder="lang[local].chiefComplaint.location.otherPlaceholder"
                                :data="data.chiefComplaint.location"
                                :options="locationOptions" 
                                :selectionKey="'locationSelection'"
                                :v="$v.data.chiefComplaint.location.other"
                            />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="quality my-2">
                            <CustomMultiSelect
                                :label="lang[local].chiefComplaint.quality.label"
                                :placeholder="lang[local].chiefComplaint.quality.placeholder"
                                :otherPlaceholder="lang[local].chiefComplaint.quality.otherPlaceholder" 
                                :data="data.chiefComplaint.quality"
                                :options="qualityOptions" 
                                :selectionKey="'qualitySelection'"
                                :v="$v.data.chiefComplaint.quality.other"
                                
                            />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="severity my-2">
                            <CustomMultiSelect
                                :label="lang[local].chiefComplaint.severity.label"
                                :placeholder="lang[local].chiefComplaint.severity.placeholder"
                                :otherPlaceholder="lang[local].chiefComplaint.severity.otherPlaceholder"  
                                :data="data.chiefComplaint.severity"
                                :options="severityOptions" 
                                :selectionKey="'severitySelection'"
                                :v="$v.data.chiefComplaint.severity.other"
                            />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="timing my-2">
                            <CustomMultiSelect
                                :label="lang[local].chiefComplaint.timing.label"
                                :placeholder="lang[local].chiefComplaint.timing.placeholder"
                                :otherPlaceholder="lang[local].chiefComplaint.timing.otherPlaceholder" 
                                :data="data.chiefComplaint.timing"
                                :options="timingOptions" 
                                :selectionKey="'timingSelection'"
                                :v="$v.data.chiefComplaint.timing.other"
                            />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="duration my-2">
                            <CustomInputGroup
                                :label="lang[local].chiefComplaint.duration.label"
                                :placeholder="lang[local].chiefComplaint.duration.placeholder"
                                :inputPlaceholder="lang[local].chiefComplaint.duration.inputPlaceholder" 
                                :data="data.chiefComplaint.duration"
                                :options="durationOptions" 
                                :selectionKey="'durationUnit'"
                                :v="$v.data.chiefComplaint.duration.other"
                            />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="context my-2">
                            <CustomMultiSelect
                                :label="lang[local].chiefComplaint.context.label"
                                :placeholder="lang[local].chiefComplaint.context.placeholder"
                                :otherPlaceholder="lang[local].chiefComplaint.context.otherPlaceholder" 
                                :data="data.chiefComplaint.context"
                                :options="contextOptions" 
                                :selectionKey="'contextSelection'"
                                :v="$v.data.chiefComplaint.context.other"
                            />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="modifying-factor my-2">
                            <CustomMultiSelect
                                :label="lang[local].chiefComplaint.modifyingFactor.label"
                                :placeholder="lang[local].chiefComplaint.modifyingFactor.placeholder"
                                :otherPlaceholder="lang[local].chiefComplaint.modifyingFactor.otherPlaceholder" 
                                :data="data.chiefComplaint.modifyingFactor"
                                :options="modifyingFactorOptions" 
                                :selectionKey="'modifyingFactorSelection'"
                                :v="$v.data.chiefComplaint.modifyingFactor.other"
                            />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="association-sign my-2">
                            <CustomMultiSelect
                                :label="lang[local].chiefComplaint.associationSign.label"
                                :placeholder="lang[local].chiefComplaint.associationSign.placeholder"
                                :otherPlaceholder="lang[local].chiefComplaint.associationSign.otherPlaceholder"  
                                :data="data.chiefComplaint.associationSign"
                                :options="associationSignOptions" 
                                :selectionKey="'associationSignSelection'"
                                :v="$v.data.chiefComplaint.associationSign.other"
                            />
                        </div>
                    </div>
                </div>
                <div class="input-wrapper my-2 reason row">
                    <div class="col-md-4">
                        <label>{{lang[local].chiefComplaint.note.label}}</label>
                        <Textarea 
                            rows="3" 
                            v-model="data.chiefComplaint.note"
                            :placeholder="lang[local].chiefComplaint.note.placeholder"
                        />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.chiefComplaint.note.$model !='' && !$v.data.chiefComplaint.note.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].reasonForVisit.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.chiefComplaint.note.minLen">
                                {{errors.minLengthError(lang[local].reasonForVisit.label,$v.data.chiefComplaint.note.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.chiefComplaint.note.maxLen">
                                {{errors.maxLengthError(lang[local].reasonForVisit.label, $v.data.chiefComplaint.note.$params.maxLen.max) }}
                            </small>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
        <div class="form-actions row">
            <div class="col-12">
                <div class="btns-wrapper">
                    <div class="save-btn">
                        <Button label="Save" @click="save" />
                    </div>
                    <div class="cancel-btn">
                        <Button label="Cancel" class="p-button-danger" />
                    </div>
                </div>
            </div>
        </div>
        <div class="loading" v-if="isloading" >
            <ProgressSpinner />
        </div>
    </div>
</template>
<script>
import axios from "axios";
////////////////////////////////////////////////////////
import {minLength,maxLength,decimal} from "vuelidate/lib/validators";
import {notValidDate,notContainsHtmlTags} from "../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError,inputError,numericError} from '../helpers/errors'
//////////////////////////////////////////////////////////
import chiefComplaintOptions from '../../mixins/clinics/ophthalmic/chief/chiefComplaintOptions'
import lang from '../../mixins/clinics/ophthalmic/chief/lang'
//////////////////////////////////////////////////////////
import Calendar from 'primevue/calendar';
import CustomMultiSelect from './shared components/CustomMultiSelect.vue'
import CustomDropDown from './shared components/CustomDropDown.vue'
import CustomInputGroup from './shared components/CustomInputGroup.vue'
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import ProgressSpinner from "primevue/progressspinner";

export default {
    mixins:[lang,chiefComplaintOptions],
    components:{
        Calendar,
        CustomMultiSelect,
        CustomDropDown,
        CustomInputGroup,
        Textarea,
        Button,
        ProgressSpinner
    },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            selectedCategoryId:1,
            categories:[
                {english:'Reason For Visit',arabic:'Reason For Visit',id:1},
                {english:'Chief Complaint',arabic:'Chief Complaint',id:2},
            ],
            isloading:false,
            // ******* main body object ******//
            clinicId:localStorage.getItem("clinicId"),
            data:{
                patientId:"50ce8fc6-fe3e-11ec-9cd9-0242ac120003",
                reasonForVisit:{
                    reasnOfVisit:{
                        reasonSelection:[],
                        other:""
                    },
                    lastEyeExam:""
                },
                chiefComplaint:{
                    chiefComplaint:{
                        chiefComplaintSelection:[],
                        other:""
                    },
                    location:{
                        locationSelection:{
                            english:"",
                            arabic:""
                        },
                        other:""
                    },
                    quality:{
                        qualitySelection:[],
                        other:""
                    },
                    severity:{
                        severitySelection:[],
                        other:""
                    },
                    timing:{
                        timingSelection:[],
                        other:""
                    },
                    duration:{
                        durationUnit:{
                            english:"",
                            arabic:""
                        },
                        value:""
                    },
                    context:{
                        contextSelection:[],
                        other:""
                    },
                    modifyingFactor:{
                        modifyingFactorSelection:[],
                        other:""
                    },
                    associationSign:{
                        associationSignSelection:[],
                        other:""
                    },
                    note:""
                },
            },
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
                inputError,
                numericError
            },
        }
    },
    validations:{
        data:{
            reasonForVisit:{
                reasnOfVisit:{
                    other:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    }
                },
                lastEyeExam:{
                    notValidDate(value){
                        return notValidDate(value)
                    },
                }
            },
            chiefComplaint:{
                    chiefComplaint:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        }
                    },
                    location:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        }
                    },
                    quality:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        }
                    },
                    severity:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        }
                    },
                    timing:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        }
                    },
                    duration:{
                        value:{
                            decimal
                        }
                    },
                    context:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        }
                    },
                    modifyingFactor:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        }
                    },
                    associationSign:{
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
            }
        },
    },
    methods:{
        formateDate(v){
            let date = new Date(v).toISOString().slice(0, 10);
            this.data.reasonForVisit.lastEyeExam=date;
        },
        save(){
                this.isloading = true ;
                console.log(JSON.stringify(this.data))
                axios.post("/clinic/ophthalmic/createChiefComplaint",this.data,{
                    headers:{
                        "clinic-id":this.clinicId
                    }
                })
                .then(res=>{
                    console.log(res);
                    this.isloading = false ;
                })
                .catch(error=>{
                    this.isloading = false ;
                    console.log(error); 
                })
        },
    },
}
</script>
<style lang="scss" scoped>
.chief-complaint{
    .form-actions{
        .btns-wrapper{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            .save-btn,.cancel-btn{
                .p-button{
                    width:150px;
                }
            }
        }
    }
    .form-wrapper{
        .input-wrapper{
        
        }
    }
    .chiefcomplaint-selection{
        display: flex;
        justify-content: flex-start;
        gap: 20px;
    }
    .main-functions{
        
    }
}
</style>