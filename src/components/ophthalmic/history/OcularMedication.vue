<template>
    <div class="ocular-medication">
        <div class="form-wrapper">
            <div class="input-wrapper drug-name">
                <label>{{lang[local].prescription.drugName.label}}</label>
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <img src="../../../UI/icons/clinic/ophthalmic/history/ocular medication/capsule.svg" alt="">
                    </span>
                    <AutoComplete
                    v-if="prescription.drugName.selection.english && prescription.drugName.selection.arabic"   
                    v-model="prescription.drugName.selection"
                    :suggestions="drugNameSuggestions"
                    :field="local=='ar'?'arabic':'english'"  
                    :placeholder="lang[local].prescription.drugName.placeholder" 
                    @complete="searchDrugName($event)"
                    />
                    <AutoComplete
                    v-else   
                    v-model="prescription.drugName.manualInsertion"
                    :suggestions="drugNameSuggestions"
                    :field="local=='ar'?'arabic':'english'"  
                    :placeholder="lang[local].prescription.drugName.placeholder" 
                    @complete="searchDrugName($event)"
                    />
                </div>
                <div class="error">
                    <small class="d-block text-danger" v-if="$v.prescription.drugName.manualInsertion.$model !='' && !$v.prescription.drugName.manualInsertion.notContainsHtmlTags">
                        {{errors.htmlTagsError(lang[local].prescription.drugName.label)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.prescription.drugName.manualInsertion.minLen">
                        {{errors.minLengthError(lang[local].prescription.drugName.label,$v.prescription.drugName.manualInsertion.$params.minLen.min)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.prescription.drugName.manualInsertion.maxLen">
                        {{errors.maxLengthError(lang[local].prescription.drugName.label, $v.prescription.drugName.manualInsertion.$params.maxLen.max) }}
                    </small>
                </div>
            </div>
            <div class="input-wrapper drug-form">
                <label>{{lang[local].prescription.form.label}}</label>
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <img src="../../../UI/icons/clinic/ophthalmic/history/ocular medication/Icon – Heart.svg" alt="">
                    </span>
                    <Dropdown
                    v-model="prescription.form"
                    @change="$v.prescription.form.$touch"
                    :class="{'border-danger':$v.prescription.form.$invalid && $v.prescription.form.$dirty}"
                    :options="drugFormOptions"
                    :optionLabel="local=='ar'?'arabic':'english'" 
                    :placeholder="lang[local].prescription.form.placeholder" 
                    :filter="true"
                    />
                </div>
                <div class="error">
                    <small class="d-block text-danger" v-if="$v.prescription.form.$model !='' && !$v.prescription.form.notContainsHtmlTags">
                    {{errors.htmlTagsError(lang[local].prescription.drugForm.label)}}
                    </small>
                </div>
            </div>
            <div class="input-wrapper strength">
                <CustomInputGroup 
                    :label="lang[local].prescription.strength.label"
                    :valueType="'decimal'" 
                    :valuePlaceholder="lang[local].prescription.strength.valuePlaceholder" 
                    :dropdownPlaceholder="lang[local].prescription.strength.dropdownPlaceholder"
                    :options="strengthUnitOptions" 
                    :data="prescription" 
                    :objectKey="'strength'" 
                    :selectionKey="'unit'" 
                    :valueKey="'value'"  
                />
                <div class="error">
                    <small 
                        class="d-block text-danger" 
                        v-if="$v.prescription.strength.value.$model !='' && !$v.prescription.strength.value.validStrength">
                        {{errors.inputError(lang[local].prescription.strength.label)}}
                    </small>
                </div>
            </div>
            <div class="input-wrapper period">
                <CustomInputGroup 
                    :label="lang[local].prescription.period.label" 
                    :valueType="'decimal'" 
                    :valuePlaceholder="lang[local].prescription.period.valuePlaceholder" 
                    :dropdownPlaceholder="lang[local].prescription.period.dropdownPlaceholder"
                    :options="periodUnitOptions" 
                    :data="prescription" 
                    :objectKey="'period'" 
                    :selectionKey="'period'" 
                    :valueKey="'time'"  
                />
                <div class="error">
                    <small 
                        class="d-block text-danger" 
                        v-if="$v.prescription.period.time.$model !='' && !$v.prescription.period.time.decimal">
                        {{errors.numericError(lang[local].prescription.period.label)}}
                    </small>
                </div>
            </div>
            <div class="input-wrapper add-button">
                <Button @click="addRow"
                :disabled="
                        (
                            $v.$invalid ||
                            !prescription.drugName.manualInsertion && 
                            !prescription.form.english && 
                            !prescription.strength.unit.english &&
                            !prescription.strength.value &&
                            !prescription.period.period.english &&
                            !prescription.period.time
                        )
                    
                "
                 icon="pi pi-plus" class="p-button-rounded" />
            </div>
        </div>
        <div class="table-wrapper p-4 my-4" v-if="drugsList.length">
            <table class="table table-striped table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{{lang[local].prescription.drugName.label}}</th>                                
                        <th scope="col">{{lang[local].prescription.form.label}}</th>                                
                        <th scope="col">{{lang[local].prescription.strength.label}} </th>
                        <th scope="col">{{lang[local].prescription.period.label}}</th>
                        <th scope="col">Settings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(v, index) in $v.drugsList.$each.$iter" :key="index">


                        <td >{{parseInt(index)+1}}</td>

                        <td>
                            <div v-if="editingId==index" class="p-inputgroup">
                                <span class="p-inputgroup-addon">
                                    <img src="../../../UI/icons/clinic/ophthalmic/history/ocular medication/capsule.svg" alt="">
                                </span>
                                <AutoComplete   
                                    v-if="v.$model.drugName.selection.english && v.$model.drugName.selection.arabic"
                                    v-model="v.$model.drugName.selection"
                                    :suggestions="drugNameSuggestions" 
                                    :field="local=='ar'?'arabic':'english'" 
                                    :placeholder="lang[local].prescription.drugName.placeholder"
                                    @complete="searchDrugName($event)"
                                    @input="handleObjectDrugName(v)"
                                />
                                <AutoComplete 
                                    v-else 
                                    v-model="v.$model.drugName.manualInsertion"
                                    :suggestions="drugNameSuggestions" 
                                    :field="local=='ar'?'arabic':'english'" 
                                    :placeholder="lang[local].prescription.drugName.placeholder" 
                                    @complete="searchDrugName($event)"
                                    @input="handleStringDrugName(v)"
                                />
                            </div>
                            <div v-else>
                                <span v-if="v.$model.drugName.selection.english && v.$model.drugName.selection.arabic" @click="editRow(index)">
                                    {{local=='ar'?v.$model.drugName.selection.arabic:v.$model.drugName.selection.english}}
                                </span>
                                <span v-else @click="editRow(index)">{{v.$model.drugName.manualInsertion}}</span>
                            </div>
                            <div class="error">
                                <small class="d-block text-danger" v-if="v.$model.drugName.manualInsertion !='' && !v.drugName.manualInsertion.notContainsHtmlTags">
                                    {{errors.htmlTagsError(lang[local].prescription.drugName.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!v.drugName.manualInsertion.minLen">
                                    {{errors.minLengthError(lang[local].prescription.drugName.label,v.drugName.manualInsertion.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!v.drugName.manualInsertion.maxLen">
                                    {{errors.maxLengthError(lang[local].prescription.drugName.label, v.drugName.manualInsertion.$params.maxLen.max) }}
                                </small>
                            </div>
                        </td>


                        <td>
                            <div v-if="editingId==index" class="p-inputgroup">
                                <span class="p-inputgroup-addon">
                                    <img src="../../../UI/icons/clinic/ophthalmic/history/ocular medication/Icon – Heart.svg" alt="">
                                </span>
                                <Dropdown
                                    v-model="v.$model.form"
                                    :options="drugFormOptions"
                                    :optionLabel="local=='ar'?'arabic':'english'" 
                                    :placeholder="lang[local].prescription.form.placeholder" 
                                    :filter="true"
                                />
                            </div>
                            <span v-else @click="editRow(index)">{{local=='ar'?v.$model.form.arabic:v.$model.form.english}}</span>
                        </td>
                        

                        <td >
                            <div class="input-wrapper strength">
                                <CustomInputGroup 
                                    v-if="editingId==index"
                                    :valueType="'decimal'" 
                                    :valuePlaceholder="lang[local].prescription.strength.valuePlaceholder" 
                                    :dropdownPlaceholder="lang[local].prescription.strength.dropdownPlaceholder"
                                    :options="strengthUnitOptions" 
                                    :data="v.$model" 
                                    :objectKey="'strength'" 
                                    :selectionKey="'unit'" 
                                    :valueKey="'value'"  
                                />
                                <span v-else @click="editRow(index)">
                                    {{v.$model.strength.value}} {{v.$model.strength.unit.english?'/':''}} {{local=='ar'?v.$model.strength.unit.arabic:v.$model.strength.unit.english}}
                                </span>
                                <div class="error">
                                    <small 
                                        class="d-block text-danger" 
                                        v-if="v.$model.strength.value !='' && !v.strength.value.validStrength">
                                        {{errors.inputError(lang[local].prescription.strength.label)}}
                                    </small>
                                </div>
                            </div>
                        </td>


                        <td>
                            <div v-if="editingId==index" class="input-wrapper period">
                                <CustomInputGroup 
                                    :valueType="'decimal'" 
                                    :valuePlaceholder="lang[local].prescription.period.valuePlaceholder" 
                                    :dropdownPlaceholder="lang[local].prescription.period.dropdownPlaceholder"
                                    :options="periodUnitOptions" 
                                    :data="v.$model" 
                                    :objectKey="'period'" 
                                    :selectionKey="'period'" 
                                    :valueKey="'time'"  
                                />
                            </div>
                            <span v-else @click="editRow(index)" >{{v.$model.period.time}} {{v.$model.period.period.english?'/':''}} {{v.$model.period.period.english}}</span>
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="v.$model.period.time !='' && !v.period.time.decimal">
                                    {{errors.numericError(lang[local].prescription.period.label)}}
                                </small>
                            </div>
                        </td>


                        <td>
                            <div class="tabel-settings">
                                <div v-if="editingId==index">
                                    <Button :disabled="$v.drugsList.$invalid" @click="updateRow(v,index)" icon="pi pi-check" class="p-button-rounded" />
                                </div>
                                <div>
                                    <Button @click="editRow(index)" icon="pi pi-pencil" class="p-button-rounded p-button-info" />
                                </div>
                                <div>
                                    <Button @click="deleteRow(index)" icon="pi pi-trash" class="p-button-rounded p-button-danger" />
                                </div>
                            </div>
                        </td> 

                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row my-5">
            <div class="col-lg-4">
                <label>{{lang[local].ocularMedication.note.label}}</label>
                <Textarea v-model="data.ocularMedication.note" :placeholder="lang[local].ocularMedication.note.placeholder" rows="3" />
                <div class="error">
                    <small 
                        class="d-block text-danger" 
                        v-if="$v.data.ocularMedication.note.$model !='' && !$v.data.ocularMedication.note.notContainsHtmlTags"
                    >
                        {{errors.htmlTagsError(lang[local].ocularMedication.note.label)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.ocularMedication.note.minLen">
                        {{errors.minLengthError(lang[local].ocularMedication.note.label,$v.data.ocularMedication.note.$params.minLen.min)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.ocularMedication.note.maxLen">
                        {{errors.maxLengthError(lang[local].ocularMedication.note.label, $v.data.ocularMedication.note.$params.maxLen.max) }}
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import lang1 from '../../../mixins/clinics/ophthalmic/medicalRx/rxLang'
import lang2 from '../../../mixins/clinics/ophthalmic/history/lang'
import rx from '../../../mixins/clinics/ophthalmic/medicalRx/rx'

// ,numeric
import {minLength,maxLength,decimal} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "../../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError,inputError,numericError} from '../../helpers/errors'


import AutoComplete from 'primevue/autocomplete';
import Dropdown from "primevue/dropdown";
import CustomInputGroup from './CustomInputGroup.vue'
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';


export default {
    mixins:[lang1,lang2,rx],
    props:{
        data:{
            type:Object,
            required:true
        },
    },
    components:{
        AutoComplete,
        Dropdown,
        CustomInputGroup,
        Button,
        Textarea
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            drugNameSuggestions: [],
            drugsList:[],
            editingId:-1,
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
                inputError,
                numericError
            },
            prescription:{
                    drugName:{
                        selection:{
                            english:"",
                            arabic:"",
                        },
                        manualInsertion:""
                    },
                    form:{
                        arabic:"",
                        english:""
                    },
                    strength:{
                        unit:{
                            arabic:"",
                            english:""
                        },
                        value:''
                    },
                    period:{
                        period:{
                            arabic:"",
                            english:""
                        },
                        time:''
                    },
            },            
        }
    },
    validations:{
        prescription:{
            drugName:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(255),
                    notContainsHtmlTags(value) {
                        if (value == '' || typeof(value)=="object")
                            return true ; 
                        return notContainsHtmlTags(value);
                        
                    },
                },
            },
            form:{
                notContainsHtmlTags(value) {
                    if (value == '' ||typeof(value)=="object")
                        return true ; 
                    return notContainsHtmlTags(value);
                    
                },
            },
            strength:{
                value:{
                    validStrength(value){
                        if (value == '')
                            return true ; 
                        const dataRegux = /^(\d{1,4}(\/|:|-)\d{1,5})$|^(\d{1,4})$/g ;
                        if (value.search(dataRegux) !=-1)
                            return true;
                        return false;
                        }
                }
            },
            period:{
                time:{
                    decimal
                }
            },
        },
        drugsList:{
            drugName:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(255),
                    notContainsHtmlTags(value) {
                        if (value == '' || typeof(value)=="object")
                            return true ; 
                        return notContainsHtmlTags(value);
                        
                    },
                },
            },
            $each:{
                form:{
                    notContainsHtmlTags(value) {
                        if (value == '' ||typeof(value)=="object")
                            return true ; 
                        return notContainsHtmlTags(value);
                        
                    },
                },
                strength:{
                    value:{
                        validStrength(value){
                            if (value == '')
                                return true ; 
                            const dataRegux = /^(\d{1,4}(\/|:|-)\d{1,5})$|^(\d{1,4})$/g ;
                            if (value.search(dataRegux) !=-1)
                                return true;
                            return false;
                            }
                    }
                },
                period:{
                    time:{
                        decimal
                    }
                },
            }
        },
        data:{
            ocularMedication:{
                note:{
                    minLen: minLength(1),
                    maxLen: maxLength(255),
                    notContainsHtmlTags(value) {
                        if (value == '' || typeof(value)=="object")
                            return true ; 
                        return notContainsHtmlTags(value);
                        
                    },
                }
            },
        },
    },
    watch:{
        drugsList:{
            handler(){
                if(!this.$v.drugsList.$invalid){
                    this.data.prescription=[...this.drugsList]
                }
            },
            deep:true,
        },
        'prescription.drugName.manualInsertion'(){
            if(typeof(this.prescription.drugName.manualInsertion)=='object'){
                this.prescription.drugName.selection=JSON.parse(JSON.stringify(this.prescription.drugName.manualInsertion));
                this.prescription.drugName.manualInsertion=''
            }
        },
        'prescription.drugName.selection'(){
            if(typeof(this.prescription.drugName.selection)=='string'){
                this.prescription.drugName.manualInsertion=this.prescription.drugName.selection
                this.prescription.drugName.selection={english:'',arabic:''};
            }
        },
        'prescription.period.period.english'(){
            this.handlePeriodInput();
        },
        'prescription.period.time'(){
            this.handlePeriodInput();
        },
    },
    methods:{
        handleStringDrugName(v){
            if(typeof(v.$model.drugName.manualInsertion)=='object'){
                v.$model.drugName.selection= JSON.parse(JSON.stringify(v.$model.drugName.manualInsertion));
                v.$model.drugName.manualInsertion=''
            }
        },
        handleObjectDrugName(v){
            if(typeof(v.$model.drugName.selection)=='string'){
                v.$model.drugName.manualInsertion=v.$model.drugName.selection
                v.$model.drugName.selection={english:'',arabic:''};
            }
        },
        searchDrugName(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.drugNameSuggestions = [...this.drugNameOptions];
                }
                else {
                    this.drugNameSuggestions = this.drugNameOptions.filter((drugNameOption) => {
                        return drugNameOption.english.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        },
        /////////////////////////////////////////
        handlePeriodInput(){
            if(this.prescription.period.period.english=='life time'){
                this.prescription.period.time=''
            }
            // else if(!this.periodValue&&!this.periodUnit)
            //         this.isValidPeriod = true ; 
            // else if ((this.periodUnit&&!this.periodValue)||(!this.periodUnit&&this.periodValue))
            // this.isValidPeriod = false ;
        },
        addRow(){
        // check if the user change disabled property on the add btn "from the inspect mode" to prevent adding in the table with invalid data
            if(
                !(
                            this.$v.$invalid ||
                            !this.prescription.drugName.manualInsertion && 
                            !this.prescription.form.english && 
                            !this.prescription.strength.unit.english &&
                            !this.prescription.strength.value &&
                            !this.prescription.period.period.english &&
                            !this.prescription.period.time
                )
            ){
            this.drugsList.push(this.prescription);
            this.prescription={
                    drugName:{
                        selection:{
                            english:"",
                            arabic:"",
                        },
                        manualInsertion:""
                    },
                    form:{
                        arabic:"",
                        english:""
                    },
                    strength:{
                        unit:{
                            arabic:"",
                            english:""
                        },
                        value:''
                    },
                    period:{
                        period:{
                            arabic:"",
                            english:""
                        },
                        time:''
                    },
                };
            this.drugName=''
            this.$v.prescription.$reset();
            }
            else
            console.log("Try later")
        },
        deleteRow(index){
            this.drugsList.splice(index,1);
        },
        editRow(index){
            this.editingId=index;
        },
        updateRow(v,index){
            if(!(this.$v.drugsList.$invalid)){
                this.drugsList[index]=v.$model;
                this.editingId=-1;
            }
        },
    },

}
</script>
<style lang="scss" scoped>
.ocular-medication{
    /deep/.p-button{
        .p-button-icon{
            color: #fff !important;
        }
    }
    .form-wrapper{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        .input-wrapper{
            width: 250px;
        }
        .add-button{
            display: flex;
            align-items: flex-end;
        }
    }
    .table-wrapper{
        background-color: #ffffff;
        border-radius: 34px;
        overflow-x: auto;
        min-height: 50vh;
        width: auto;
        table{
            // min-height: 50vh;
            color: $tradmark-color !important;
            tr{
                td,th{
                    color:$secondary-color-2;
                    text-align: center;
                    vertical-align: middle;
                    font-size: 14px;
                    max-width: 200px;
                }
            }
        }
    }
    .tabel-settings{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
    }

}
</style>