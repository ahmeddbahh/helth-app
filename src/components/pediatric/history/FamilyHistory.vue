<template>
    <div class="family-history">
        <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label>{{lang[local].patientName}}</label>
                    <span :class="local=='en'?'p-input-icon-left':'p-input-icon-right'" >
                            <i class="pi pi-search" style="z-index: 2;" />                        
                            <AutoComplete 
                                v-model="dataObject.patientName.manualPatient" 
                                :suggestions.sync="filteredPatientName"
                                @change="$v.dataObject.patientName.manualPatient.$touch()"
                                @item-select="patientSelection"
                                @complete="searchPatiantName($event)" :field="local=='ar'?'arabic':'english'" 
                                :placeholder="lang[local].patientName"
                                :class="{'p-invalid':$v.dataObject.patientName.manualPatient.$invalid}"
                            />
                    </span>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.patientName.manualPatient.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].patientName) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.patientName.manualPatient.minLen">
                            {{errors.minLengthError(lang[local].patientName,$v.dataObject.patientName.manualPatient.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.patientName.manualPatient.maxLen">
                            {{errors.maxLengthError(lang[local].patientName, $v.dataObject.patientName.manualPatient.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label class="mx-2">{{lang[local].relation}}</label>
                    <Dropdown 
                        :placeholder="lang[local].relation" 
                        :options="relationOptions"
                        v-model="dataObject.relation"
                        :optionLabel="local=='ar'?'arabic':'english'" 
                    ></Dropdown>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label class="mx-2">{{lang[local].status}}</label>
                    <Dropdown 
                        :placeholder="lang[local].status" 
                        :options="statusOptions"
                        v-model="dataObject.status"
                        :optionLabel="local=='ar'?'arabic':'english'" 
                    ></Dropdown>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label >{{lang[local].birthDate}}</label>
                    <Calendar 
                    :showIcon="true"  
                    :placeholder="lang[local].birthDate" 
                    :manualInput="false" 
                    :monthNavigator="true" 
                    :yearNavigator="true" 
                    yearRange="1950:2030" 
                    :touchUI.sync="displayUI" 
                    dateFormat="mm-dd-yy"
                    v-model="dataObject.birthDate" 
                    :class="{'border-error':$v.dataObject.birthDate.$invalid && $v.dataObject.birthDate.$error}"
                    
                    />
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.birthDate.notValidDate && $v.dataObject.birthDate.$dirty">
                            {{ errors.inputError(lang[local].birthDate) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label >{{lang[local].note}}</label>
                    <InputText 
                        type="text" 
                        v-model="dataObject.note"
                        @change="$v.dataObject.note.$touch()" 
                        :placeholder="lang[local].note" 
                        :class="{'border-error':$v.dataObject.note.$invalid  && $v.dataObject.note.$dirty}"
                    > </InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.note.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].note) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.note.minLen">
                            {{errors.minLengthError(lang[local].note,$v.dataObject.note.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.note.maxLen">
                            {{errors.maxLengthError(lang[local].note, $v.dataObject.note.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group">
                    <label>{{lang[local].diseaseName}}</label>
                    <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                        <i class="pi pi-search" />                        
                        <AutoComplete
                            :placeholder="lang[local].diseaseName"
                            v-model="dataObject.diseaseName.manualInsertion" 
                            :suggestions="filteredDiseaseName"
                            @item-select="diseaseNameSelection"
                            @complete="searchDiseaseName($event)" 
                            :field="local=='ar'?'arabic':'english'" 
                        />
                    </span>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.diseaseName.manualInsertion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].diseaseName) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.diseaseName.manualInsertion.minLen">
                            {{errors.minLengthError(lang[local].diseaseName,$v.dataObject.diseaseName.manualInsertion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.diseaseName.manualInsertion.maxLen">
                            {{errors.maxLengthError(lang[local].diseaseName, $v.dataObject.diseaseName.manualInsertion.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 my-3">
                <div class="form-group btn-form my-lg-4 ">
                    <Button
                        icon="pi pi-plus"
                        :class="{ 'arabic-icon': local == 'ar' }"
                        class="p-button-rounded"
                        @click="addToTable"
                        :disabled="$v.dataObject.$invalid"
                    />
                </div>
            </div>
        </div>
        <div class="table-responsive" v-if="data.length">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{{lang[local].patientName}}</th>                                
                        <th scope="col">{{lang[local].relation}}</th>                                
                        <th scope="col">{{lang[local].status}}</th>                                
                        <th scope="col">{{lang[local].birthDate}}</th>                                
                        <th scope="col">{{lang[local].diseaseName}} </th>
                        <th scope="col">{{lang[local].note}}</th>
                        <th scope="col">{{lang[local].settings}}</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- {{$v.data$each[index]}} -->
                    <tr v-for="(row,index) in data" :key="index" >
                        <td >{{index+1}}</td>
                        <td>
                            <div v-if="index == editingId">
                                <span :class="local=='en'?'p-input-icon-left':'p-input-icon-right'" >
                                    <i class="pi pi-search" style="z-index: 2;" />                        
                                    <AutoComplete 
                                        v-model="row.patientName.manualPatient" 
                                        :suggestions.sync="filteredPatientName"
                                        @change="$v.data.$each[index].patientName.manualPatient.$touch()"
                                        @item-select="patientSelection(index)"
                                        @complete="searchPatiantName($event)" :field="local=='ar'?'arabic':'english'" 
                                        :placeholder="lang[local].patientName"
                                        :class="{'p-invalid':$v.data.$each[index].patientName.manualPatient.$invalid}"
                                    />
                                </span>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].patientName.manualPatient.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].patientName) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].patientName.manualPatient.minLen">
                                        {{errors.minLengthError(lang[local].patientName,$v.data$each[index].patientName.manualPatient.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].patientName.manualPatient.maxLen">
                                        {{errors.maxLengthError(lang[local].patientName, $v.data.$each[index].patientName.manualPatient.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{row.patientName.manualPatient}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <Dropdown 
                                    :placeholder="lang[local].relation" 
                                    :options="relationOptions"
                                    v-model="row.relation"
                                    :optionLabel="local=='ar'?'arabic':'english'" 
                                ></Dropdown>
                            </div>
                            <span v-else >{{local=='ar'?row.relation.arabic:row.relation.english}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <Dropdown 
                                    :placeholder="lang[local].status" 
                                    :options="statusOptions"
                                    v-model="row.status"
                                    :optionLabel="local=='ar'?'arabic':'english'" 
                                ></Dropdown>
                            </div>
                            <span v-else >{{local=='ar'?row.status.arabic:row.status.english}}</span>
                            
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <Calendar 
                                    :showIcon="true"  
                                    :placeholder="lang[local].birthDate" 
                                    :manualInput="false" 
                                    :monthNavigator="true" 
                                    :yearNavigator="true" 
                                    yearRange="1950:2030" 
                                    :touchUI.sync="displayUI" 
                                    dateFormat="mm-dd-yy"
                                    v-model="row.birthDate" 
                                    :class="{'border-error':$v.data.$each[index].birthDate.$invalid && $v.data.$each[index].birthDate.$error}"
                                    
                                    />
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].birthDate.notValidDate && $v.data.$each[index].birthDate.$dirty">
                                        {{ errors.inputError(lang[local].birthDate) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{row.birthDate?row.birthDate.toISOString().split('T')[0]:''}}</span>
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                                    <i class="pi pi-search" />                        
                                    <AutoComplete
                                        :placeholder="lang[local].diseaseName"
                                        v-model="row.diseaseName.manualInsertion" 
                                        :suggestions="filteredDiseaseName"
                                        @item-select="diseaseNameSelection(index)"
                                        @complete="searchDiseaseName($event)" 
                                        :field="local=='ar'?'arabic':'english'" 
                                    />
                                </span>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].diseaseName.manualInsertion.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].diseaseName) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].diseaseName.manualInsertion.minLen">
                                        {{errors.minLengthError(lang[local].diseaseName,$v.data.$each[index].diseaseName.manualInsertion.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].diseaseName.manualInsertion.maxLen">
                                        {{errors.maxLengthError(lang[local].diseaseName, $v.data.$each[index].diseaseName.manualInsertion.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{row.diseaseName.manualInsertion}}</span>
                        </td>
                        <td>
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    v-model="row.note"
                                    @change="$v.data.$each[index].note.$touch()" 
                                    :placeholder="lang[local].note" 
                                    :class="{'border-error':$v.data.$each[index].note.$invalid  && $v.data.$each[index].note.$dirty}"
                                > </InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].note.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].note) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].note.minLen">
                                        {{errors.minLengthError(lang[local].note,$v.data.$each[index].note.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].note.maxLen">
                                        {{errors.maxLengthError(lang[local].note, $v.data.$each[index].note.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else >{{row.note}}</span>
                        </td>
                        <td>
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="mx-2">
                                    <img src="../../../UI/icons/clinic/check.svg" v-if="index == editingId" style="cursor: pointer;" @click="closeRow()" alt="">
                                    <img src="../../../UI/icons/clinic/edit.svg"  v-else style="cursor: pointer;" @click="editRow(index)" alt="">
                                </div>
                                <div class="mx-2">

                                    <img src="../../../UI/icons/clinic/trash.svg" @click="deleteFromTable(index)" style="cursor: pointer;" alt="">
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
import InputText from "primevue/inputtext";
import { minLengthError, maxLengthError, inputError } from "../../helpers/errors";
import { maxLength, minLength } from "vuelidate/lib/validators";
import { notContainsHtmlTags,notValidDate} from "../../helpers/customValidators";
import Calendar from 'primevue/calendar';
import AutoComplete from 'primevue/autocomplete';
import Button from "primevue/button";
import Dropdown from 'primevue/dropdown';
export default {
    props:['data','dataObject'],
    components:{
        InputText,
        AutoComplete,
        Button,
        Dropdown,
        Calendar
    },

    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    patientName:"Patient name",
                    relation:"Relation",
                    status:"Status",
                    birthDate:"Birth date",
                    diseaseName:"Disease name",
                    note:"Note"
                },
                ar:{
                    patientName:"Patient name",
                    relation:"Relation",
                    status:"Status",
                    birthDate:"Birth date",
                    diseaseName:"Disease name",
                    note:"Note"

                }
            },
            errors: {
            minLengthError,
            maxLengthError,
            inputError,
            },
            patientNameOptions:[],
            filteredPatientName:[],
            relationOptions:[
                {english:"father",arabic:"father"},
                {english:"mother",arabic:"mother"},
                {english:"parent",arabic:"parent"},
                {english:"son",arabic:"son"},
                {english:"daughter",arabic:"daughter"},
                {english:"child",arabic:"child"},
                {english:"husband",arabic:"husband"},
                {english:"wife",arabic:"wife"},
                {english:"spouse",arabic:"spouse"},
                {english:"grandparents",arabic:"grandparents"},
                {english:"grandson",arabic:"grandson"},
                {english:"granddaughter",arabic:"granddaughter"},
                {english:"grandchild",arabic:"grandchild"},
                {english:"nephew",arabic:"nephew"},
                {english:"niece",arabic:"niece"},
                {english:"sibling",arabic:"sibling"},
                {english:"cousin",arabic:"cousin"},
                {english:"aunt",arabic:"aunt"},
                {english:"uncle",arabic:"uncle"},
                {english:"grandfather",arabic:"grandfather"},
                {english:"grandmother",arabic:"grandmother"},
            ],
            statusOptions:[
                {english:"living",arabic:"living"},
                {english:"dead",arabic:"dead"},
            ],
            displayUI:false,
            filteredDiseaseName:[],
            diseaseNameOptions:[],
            editingId:-1,
        }
    },

    validations:{
        dataObject:{
            patientName:{
                manualPatient:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                }
            },
            birthDate:{
                notValidDate(val) {
                    if (!val) return true;
                    return !notValidDate(val);
                }
            },
            diseaseName:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                }
            },
            note:{
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
                patientName:{
                    manualPatient:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                },
                birthDate:{
                    notValidDate(val) {
                        if (!val) return true;
                        return !notValidDate(val);
                    }
                },
                diseaseName:{
                    manualInsertion:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                },
                note:{
                    minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                    },
                }
            },
        },
    },
    created(){
        this.displayUI = window.innerWidth <=425 ;
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch("setPediatricFamilyHistoryIsValid",this.$v.data.$invalid || this.$v.dataObject.$invalid);
            },
            deep: true,
        },
        dataObject: {
            handler() {
                this.$store.dispatch("setPediatricFamilyHistoryIsValid",this.$v.data.$invalid || this.$v.dataObject.$invalid);
            },
            deep: true,
        },
    },
    methods:{
        searchPatiantName(event){
                this.filteredPatientName =this.patientNameOptions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        patientSelection(index=null){
            if(!index)
            this.dataObject.patientName={
                patient:{
                    id:this.dataObject.patientName.manualPatient.id,
                    firstName:this.dataObject.patientName.manualPatient.firstName,
                    secondName:this.dataObject.patientName.manualPatient.secondName,
                    thirdName:this.dataObject.patientName.manualPatient.thirdName,
                    familyName:this.dataObject.patientName.manualPatient.familyName,
                    age:this.dataObject.patientName.manualPatient.age,
                },
                manualPatient:`${this.dataObject.patientName.manualPatient.firstName} ${this.dataObject.patientName.manualPatient.secondName} ${this.dataObject.patientName.manualPatient.thirdName} (${this.dataObject.patientName.manualPatient.age} years)`
            }
            else
            this.data.$each[index].patientName={
                patient:{
                    id:this.data.$each[index].patientName.manualPatient.id,
                    firstName:this.data.$each[index].patientName.manualPatient.firstName,
                    secondName:this.data.$each[index].patientName.manualPatient.secondName,
                    thirdName:this.data.$each[index].patientName.manualPatient.thirdName,
                    familyName:this.data.$each[index].patientName.manualPatient.familyName,
                    age:this.data.$each[index].patientName.manualPatient.age,
                },
                manualPatient:`${this.data.$each[index].patientName.manualPatient.firstName} ${this.data.$each[index].patientName.manualPatient.secondName} ${this.data.$each[index].patientName.manualPatient.thirdName} (${this.data.$each[index].patientName.manualPatient.age} years)`
            }
        },
        searchDiseaseName(event){
                this.filteredDiseaseName =this.diseaseNameOptions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        diseaseNameSelection(index=null){
            if(!index)
            this.data.dataObject.diseaseName={
                english:this.dataObject.diseaseName.manualInsertion.english,
                arabic:this.dataObject.diseaseName.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.dataObject.diseaseName.manualInsertion.arabic:this.dataObject.diseaseName.manualInsertion.english
            }
            else
            this.data.$each[index].diseaseName={
                english:this.data.$each[index].diseaseName.manualInsertion.english,
                arabic:this.data.$each[index].diseaseName.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.$each[index].diseaseName.manualInsertion.arabic:this.data.$each[index].diseaseName.manualInsertion.english
            }
            
        },
        addToTable(){
            if(!this.$v.dataObject.$invalid){
                this.data.push({...this.dataObject});
                this.$emit("resetData") ;
                this.$v.dataObject.$reset()
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
                this.editingId= -1 ;
        }
    }
}
</script>
<style lang="scss" scoped>

.family-history{
    .table{
            border-radius: 34px;
            th {
                color:$name-color ;
            }
            td {
                color:$name-color ;
                font-size: 14px;
            }
            tr{
                text-align: center;
                font-size: 12px;
            }
            .table-header{
                border-bottom: 2px solid  $tradmark-color  ;
            }
    }
}
</style>