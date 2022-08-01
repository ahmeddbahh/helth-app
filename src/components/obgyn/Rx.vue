<template>
    <div class="rx my-4">
        <div class="prescription-form ">
            <div class="row flex-wrap">
                <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                    <div class="form-group mx-2">
                        <label>{{lang[local].drugName}}</label>
                        <span :class="local=='en'?'p-input-icon-left':'p-input-icon-right'" >
                                <i class="pi pi-search" style="z-index: 2;" />                        
                                <AutoComplete 
                                    v-model="prescriptionObject.drugName.manualInsertion" 
                                    :suggestions.sync="filteredDrugs"
                                    @change="$v.prescriptionObject.drugName.$touch()"
                                    @complete="searchDrugs($event)" :field="local=='ar'?'arabic':'english'" 
                                    :placeholder="lang[local].drugName"
                                    :class="{'p-invalid':$v.prescriptionObject.drugName.$invalid}"
                                />
                        </span>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.prescriptionObject.drugName.manualInsertion.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].drugName) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.prescriptionObject.drugName.manualInsertion.minLen">
                                {{errors.minLengthError(lang[local].drugName,$v.prescriptionObject.drugName.manualInsertion.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.prescriptionObject.drugName.manualInsertion.maxLen">
                                {{errors.maxLengthError(lang[local].drugName, $v.prescriptionObject.drugName.manualInsertion.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                        <label >{{lang[local].dosage}}</label>
                        <DosageCascade  ref="DosageCascade" :initData="prescriptionObject.dosage" @getDosage="getDosage" :placeholder="lang[local].dosage"></DosageCascade>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                        <label >{{lang[local].form}}</label>
                        <Dropdown 
                            v-model="prescriptionObject.form" 
                            :options="rxData.form" 
                            :filter="true" :optionLabel="local=='ar'?'arabic':'english'" 
                            :filterPlaceholder="lang[local].search" 
                            :placeholder="lang[local].form"
                            ></Dropdown>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                        <label >{{lang[local].dose}}</label>
                        <div class="d-flex"> 
                            <InputText 
                                type="number" 
                                :class="{'border-error':$v.prescriptionObject.dose.$invalid  && $v.prescriptionObject.dose.value.$dirty}" 
                                v-model="prescriptionObject.dose.value" 
                                @change="$v.prescriptionObject.dose.$touch()" 
                                :placeholder="lang[local].value"
                                step="0.01" 
                            ></InputText>
                            <Dropdown 
                            v-model="prescriptionObject.dose.type" 
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            :placeholder="lang[local].unit"
                            :options="rxData.dose" 
                            ></Dropdown>
                        </div>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.prescriptionObject.dose.value.decimal && $v.prescriptionObject.dose.value.$dirty">
                                {{ errors.inputError(lang[local].dose) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                        <label >{{lang[local].strength}}</label>
                        <div class="d-flex">
                            <InputText type="number" 
                                :class="{'border-error':$v.prescriptionObject.strength.$invalid  && $v.prescriptionObject.strength.value.$dirty}" 
                                @change="$v.prescriptionObject.strength.$touch()" 
                                v-model="prescriptionObject.strength.value" 
                                :placeholder="lang[local].value"
                                step="0.01" 
                            > </InputText>
                            <Dropdown 
                            v-model="prescriptionObject.strength.unit" 
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            :placeholder="lang[local].unit"
                            :options="rxData.strength" 
                            :filter="true"
                            ></Dropdown>
                        </div>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.prescriptionObject.strength.value.decimal && $v.prescriptionObject.strength.value.$dirty">
                                {{ errors.inputError(lang[local].strength) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                        <label >{{lang[local].period}}</label>
                        <div class="d-flex">
                            <InputText 
                                type="number" 
                                v-model="prescriptionObject.period.time"
                                @change="$v.prescriptionObject.period.$touch()" 
                                :placeholder="lang[local].time" 
                                :class="{'border-error':$v.prescriptionObject.period.$invalid  && $v.prescriptionObject.period.time.$dirty}"
                                > </InputText>
                            <Dropdown 
                                v-model="prescriptionObject.period.period" 
                                :optionLabel="local=='ar'?'arabic':'english'" 
                                :placeholder="lang[local].unit"
                                :options="rxData.period" 
                            ></Dropdown>
                        </div>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.prescriptionObject.period.time.numeric && $v.prescriptionObject.period.time.$dirty">
                                {{ errors.inputError(lang[local].period) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="form-group mx-2">
                            <label>{{lang[local].routeOfAdminstration}}</label>
                            <span :class="local=='en'?'p-input-icon-left':'p-input-icon-right'" >
                                    <i class="pi pi-search" style="z-index: 2;" />                        
                                    <AutoComplete 
                                        v-model="prescriptionObject.routeOfAdminstration.manualInsertion" 
                                        @change="$v.prescriptionObject.routeOfAdminstration.$touch()"
                                        :class="{'p-invalid':$v.prescriptionObject.routeOfAdminstration.$invalid}"
                                        :suggestions.sync="filteredDrugs"
                                        :placeholder="lang[local].routeOfAdminstration"
                                        @complete="searchDrugs($event)" :field="local=='ar'?'arabic':'english'" 
                                    />
                            </span>
                            <div class="errors">
                                <small class="text-error my-2" v-if="!$v.prescriptionObject.routeOfAdminstration.manualInsertion.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].routeOfAdminstration) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.prescriptionObject.routeOfAdminstration.manualInsertion.minLen">
                                    {{errors.minLengthError(lang[local].routeOfAdminstration,$v.prescriptionObject.routeOfAdminstration.manualInsertion.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.prescriptionObject.routeOfAdminstration.manualInsertion.maxLen">
                                    {{errors.maxLengthError(lang[local].routeOfAdminstration, $v.prescriptionObject.routeOfAdminstration.manualInsertion.$params.maxLen.max) }}
                                </small>
                            </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                    <div class="d-flex  align-items-end">
                        <div class="form-group flex-grow-1 mx-2">
                            <label>{{lang[local].drugComment}}</label>
                            <InputText 
                                type="text"
                                v-model="prescriptionObject.drugComment"
                                :class="{'border-error':$v.prescriptionObject.drugComment.$invalid  && $v.prescriptionObject.drugComment.$dirty}" 
                                @change="$v.prescriptionObject.drugComment.$touch()" 
                                :placeholder="lang[local].drugComment"
                                > </InputText>
                            
                        </div>
                        <div >
                            <Button
                                icon="pi pi-plus"
                                :class="{ 'arabic-icon': local == 'ar' }"
                                class="p-button-rounded"
                                @click="addToPrescription"
                                :disabled="$v.prescriptionObject.$invalid"
                            />
                        </div>
                    </div>
                    <div class="errors">
                                <small class="text-error my-2" v-if="!$v.prescriptionObject.drugComment.notContainsHtmlTags">
                                    {{ errors.inputError(lang[local].routeOfAdminstration) }}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.prescriptionObject.drugComment.minLen">
                                    {{errors.minLengthError(lang[local].routeOfAdminstration,$v.prescriptionObject.drugComment.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.prescriptionObject.drugComment.maxLen">
                                    {{errors.maxLengthError(lang[local].drugComment, $v.prescriptionObject.drugComment.$params.maxLen.max) }}
                                </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-wrapper table-responsive" v-if="data.length">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{{lang[local].drugName}}</th>                                
                        <th scope="col">{{lang[local].dosage}}</th>                                
                        <th scope="col">{{lang[local].form}}</th>                                
                        <th scope="col">{{lang[local].dose}}</th>                                
                        <th scope="col">{{lang[local].strength}} </th>
                        <th scope="col">{{lang[local].period}}</th>
                        <th scope="col">{{lang[local].routeOfAdminstration}}</th>
                        <th scope="col">{{lang[local].drugComment}}</th>
                        <th scope="col">{{lang[local].settings}}</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- {{$v.data.$each[index]}} -->
                    <tr v-for="(drug,index) in data" :key="index" >
                        <td >{{index+1}}</td>
                        <td>
                            <div v-if="index == editingId">
                                <span  :class="local=='en'?'p-input-icon-left':'p-input-icon-right'" >
                                    <i class="pi pi-search" style="z-index: 2;" />                        
                                    <AutoComplete 
                                        v-model="drug.drugName.manualInsertion" 
                                        :suggestions.sync="filteredDrugs"
                                        :placeholder="lang[local].drugName"
                                        @change="$v.data.$each[index].drugName.$touch()"
                                        @complete="searchDrugs($event)" :field="local=='ar'?'arabic':'english'" 
                                        :class="{'p-invalid':$v.data.$each[index].drugName.$invalid}"
                                    />
                                </span>
                                <!-- {{$v.data.$each[index].drugName.manualInsertion}} -->
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].drugName.manualInsertion.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].drugName) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].drugName.manualInsertion.minLen">
                                        {{errors.minLengthError(lang[local].drugName,$v.data.$each[index].drugName.manualInsertion.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].drugName.manualInsertion.maxLen">
                                        {{errors.maxLengthError(lang[local].drugName, $v.data.$each[index].drugName.manualInsertion.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{drug.drugName.manualInsertion}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <DosageCascade :initData="drug.dosage" @getDosage="getDosageFromTable($event,index)" :placeholder="lang[local].dosage"></DosageCascade>
                            </div>
                            <span v-else >{{drug.dosage.join(" / ")}}</span>
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <Dropdown 
                                    v-model="drug.form" 
                                    :options="rxData.form" 
                                    :filter="true"
                                    :optionLabel="local=='ar'?'arabic':'english'" 
                                    :placeholder="lang[local].form"
                                    :filterPlaceholder="lang[local].search" 
                                ></Dropdown>
                            </div>
                            <span v-else >{{local =='ar'?drug.form.arabic:drug.form.english}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <div class="d-flex"> 
                                    <InputText 
                                        type="number" 
                                        :class="{'border-error':$v.data.$each[index].dose.$invalid  && $v.data.$each[index].dose.value.$dirty}" 
                                        v-model="drug.dose.value" 
                                        @change="$v.data.$each[index].dose.$touch()" 
                                        :placeholder="lang[local].value"
                                        step="0.01" 
                                    ></InputText>
                                    <Dropdown 
                                        v-model="drug.dose.type" 
                                        :optionLabel="local=='ar'?'arabic':'english'" 
                                        :options="rxData.dose" 
                                        :placeholder="lang[local].unit"
                                    ></Dropdown>
                                </div>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].dose.value.decimal && $v.data.$each[index].dose.value.$dirty">
                                        {{ errors.inputError(lang[local].dose) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else @click="editRow(index)">{{drug.dose.value}} {{local =='ar'?drug.dose.type.arabic:drug.dose.type.english}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <div class="d-flex"> 
                                    <InputText 
                                        type="number" 
                                        :class="{'border-error':$v.data.$each[index].strength.$invalid  && $v.data.$each[index].strength.value.$dirty}" 
                                        v-model="drug.strength.value" 
                                        @change="$v.data.$each[index].strength.$touch()" 
                                        :placeholder="lang[local].value"
                                        step="0.01" 
                                    ></InputText>
                                    <Dropdown 
                                        v-model="drug.strength.unit" 
                                        :optionLabel="local=='ar'?'arabic':'english'" 
                                        :options="rxData.strength"
                                        :placeholder="lang[local].unit" 
                                    ></Dropdown>
                                </div>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].strength.value.decimal && $v.data.$each[index].strength.value.$dirty">
                                        {{ errors.inputError(lang[local].strength) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{drug.strength.value}} {{local =='ar'?drug.strength.unit.arabic:drug.strength.unit.english}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <div class="d-flex"> 
                                    <InputText 
                                        type="number" 
                                        :class="{'border-error':$v.data.$each[index].period.$invalid  && $v.data.$each[index].period.time.$dirty}" 
                                        v-model="drug.period.time" 
                                        :placeholder="lang[local].time"
                                        @change="$v.data.$each[index].period.$touch()" 
                                        step="0.01" 
                                    ></InputText>
                                    <Dropdown 
                                        v-model="drug.period.period" 
                                        :optionLabel="local=='ar'?'arabic':'english'" 
                                        :placeholder="lang[local].unit"
                                        :options="rxData.period" 
                                    ></Dropdown>
                                </div>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].period.time.numeric && $v.data.$each[index].period.time.$dirty">
                                        {{ errors.inputError(lang[local].period) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{drug.period.time}} {{local =='ar'?drug.period.period.arabic:drug.period.period.english}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <span  :class="local=='en'?'p-input-icon-left':'p-input-icon-right'" >
                                    <i class="pi pi-search" style="z-index: 2;" />                        
                                    <AutoComplete 
                                        v-model="drug.routeOfAdminstration.manualInsertion" 
                                        :suggestions.sync="filteredDrugs"
                                        @change="$v.data.$each[index].routeOfAdminstration.$touch()"
                                        @complete="searchDrugs($event)" :field="local=='ar'?'arabic':'english'" 
                                        :class="{'p-invalid':$v.data.$each[index].routeOfAdminstration.$invalid}"
                                        :placeholder="lang[local].routeOfAdminstration"
                                    />
                                </span>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].routeOfAdminstration.manualInsertion.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].routeOfAdminstration) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].routeOfAdminstration.manualInsertion.minLen">
                                        {{errors.minLengthError(lang[local].routeOfAdminstration,$v.data.$each[index].routeOfAdminstration.manualInsertion.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].routeOfAdminstration.manualInsertion.maxLen">
                                        {{errors.maxLengthError(lang[local].routeOfAdminstration, $v.data.$each[index].routeOfAdminstration.manualInsertion.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{drug.routeOfAdminstration.manualInsertion}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text"
                                    v-model="drug.drugComment"
                                    :placeholder="lang[local].drugComment"
                                    :class="{'border-error':$v.data.$each[index].drugComment.$invalid  && $v.prescriptionObject.drugComment.$dirty}" 
                                    @change="$v.data.$each[index].drugComment.$touch()" 
                                ></InputText>
                                    

                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].drugComment.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].routeOfAdminstration) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].drugComment.minLen">
                                        {{errors.minLengthError(lang[local].routeOfAdminstration,$v.prescriptionObject.drugComment.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].drugComment.maxLen">
                                        {{errors.maxLengthError(lang[local].drugComment, $v.data.$each[index].drugComment.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{drug.drugComment}}</span>
                            
                        </td>
                        <td>
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="mx-2">
                                    <img src="../../UI/icons/clinic/check.svg" v-if="index == editingId" style="cursor: pointer;" @click="closeRow()" alt="">
                                    <img src="../../UI/icons/clinic/edit.svg"  v-else style="cursor: pointer;" @click="editRow(index)" alt="">
                                </div>
                                <div class="mx-2">

                                    <img src="../../UI/icons/clinic/trash.svg" @click="deleteFromTable(index)" style="cursor: pointer;" alt="">
                                </div>
                            </div>
                        </td>
                        
                    </tr>
                    

                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
// required
import {minLength,maxLength,decimal,numeric} from "vuelidate/lib/validators";
import {minLengthError,maxLengthError,inputError,} from "../helpers/errors";
import { notContainsHtmlTags } from "../helpers/customValidators";
import InputText from "primevue/inputtext";
import AutoComplete from 'primevue/autocomplete';
import DosageCascade from "../shared/DosageCascade.vue";
import Dropdown from 'primevue/dropdown';
import Button from "primevue/button";
import {rxData} from "../helpers/RxData" ;

export default {
    props:['data','prescriptionObject'],
    components:{
        AutoComplete,
        DosageCascade,
        Dropdown,
        InputText,
        Button,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang: {
                en: {
                    drugName:"Drug name",
                    dosage:"Dosage",
                    form:"Form",
                    dose:"Dose",
                    period:"Period",
                    routeOfAdminstration:"Route of adminstration",
                    strength:"Strength",
                    drugComment:"Drug comment",
                    search:"Search",
                    settings:"Settings",
                    value:"value",
                    unit:"unit",
                    time:"time",
                    
                
                },
                ar: {
                    drugName:"Drug name",
                    dosage:"Dosage",
                    form:"Form",
                    dose:"Dose",
                    period:"Period",
                    routeOfAdminstration:"Route of adminstration",
                    strength:"Strength",
                    drugComment:"Drug comment",
                    search:"Search",
                    settings:"Settings",
                    value:"value",
                    unit:"unit",
                    time:"time",
                
                },
            },
            rxData:rxData,
            filteredDrugs: [],
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
            },
            editingId:-1,
            DosageCascade:null
            
        }
    },
    mounted(){
        this.DosageCascade = this.$refs.DosageCascade ;
    },
    methods:{
        searchDrugs(val){
                if(val)
                this.filteredDrugs = []
        },
        getDosage(val){
            this.prescriptionObject.dosage=val ;
        },
        getDosageFromTable(val,index){
            this.data[index].dosage = val 
        },
        addToPrescription(){
            if(!this.$v.prescriptionObject.$invalid){
                this.data.push({...this.prescriptionObject});
                this.$emit("restData")
                this.DosageCascade.makeValueEmpty();
                this.$v.prescriptionObject.$reset()
            }
        },
        editRow(index){
        if(!this.$v.data.$invalid)
            this.editingId=index;
        },
        deleteFromTable(index){
            this.data.splice(index,1) ;
            
        },
        closeRow(){
            if(!this.$v.data.$invalid)
                this.editingId=-1 ;
        }
        
        
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch(
                "setOBJRxValid",
                this.$v.data.$invalid || this.$v.prescriptionObject.$invalid
                );
            },
            deep: true,
        },
        prescriptionObject: {
            handler() {
                this.$store.dispatch(
                "setOBJRxValid",
                this.$v.data.$invalid || this.$v.prescriptionObject.$invalid
                );
            },
            deep: true,
        },
    },
    validations:{
        prescriptionObject:{
            drugName:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                        return notContainsHtmlTags(val);
                    },
                }, 
            },
            dose:{
                value:{
                    decimal
                }
            },
            strength:{
                value:{
                    decimal
                }
            },
            period:{
                time:{
                    numeric,
                },

            },

            routeOfAdminstration:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                }, 
            },
            drugComment:{
                minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
            }

        },
        data:{
            $each:{
            drugName:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                }, 
            },
            dose:{
                value:{
                    decimal
                }
            },
            strength:{
                value:{
                    decimal
                }
            },
            period:{
                time:{
                    numeric,
                },
            },
            routeOfAdminstration:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                }, 
            },
            drugComment:{
                minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
            }

            }
        },
    },
   

}
</script>
<style lang="scss" scoped>
.table{
        border-radius: 34px;
        width:150%;
        th {
            color:$name-color ;

        }
        tr{
            text-align: center;
            font-size: 12px;
            
        }
        td {
                color:$name-color ;
                font-size: 14px;
        }
        .table-header{
            border-bottom: 2px solid   #DEE2E6  ;
        }
}

</style>