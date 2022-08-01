<template>
    <div class="feeding-management-Vaccination">
        <div class="row">
            <div class="col-md-6 col-lg-3  my-3">
                <div class="form-group">
                    <label>{{lang[local].vaccineName}}</label>
                    <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                        <i class="pi pi-search" />                        
                        <AutoComplete
                            :placeholder="lang[local].vaccineName"
                            v-model="dataObject.vaccineName.manualInsertion" 
                            :suggestions="filteredvaccineName"
                            @item-select="vaccineNameSelection"
                            @complete="searchvaccineName($event)" 
                            :field="local=='ar'?'arabic':'english'" 
                        />
                    </span>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.vaccineName.manualInsertion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].vaccineName) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.vaccineName.manualInsertion.minLen">
                            {{errors.minLengthError(lang[local].vaccineName,$v.dataObject.vaccineName.manualInsertion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.vaccineName.manualInsertion.maxLen">
                            {{errors.maxLengthError(lang[local].vaccineName, $v.dataObject.vaccineName.manualInsertion.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3  my-3">
                <div class="form-group">
                    <label>{{lang[local].tradeName}}</label>
                    <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                        <i class="pi pi-search" />                        
                        <AutoComplete
                            :placeholder="lang[local].tradeName"
                            v-model="dataObject.tradeName.manualInsertion" 
                            :suggestions="filteredtradeName"
                            @item-select="tradeNameSelection"
                            @complete="searchtradeName($event)" 
                            :field="local=='ar'?'arabic':'english'" 
                        />
                    </span>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.tradeName.manualInsertion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].tradeName) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.tradeName.manualInsertion.minLen">
                            {{errors.minLengthError(lang[local].tradeName,$v.dataObject.tradeName.manualInsertion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.tradeName.manualInsertion.maxLen">
                            {{errors.maxLengthError(lang[local].tradeName, $v.dataObject.tradeName.manualInsertion.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3  my-3">
                <div class="form-group mx-2">
                    <label >{{lang[local].comment}}</label>
                    <InputText 
                        type="text" 
                        v-model="dataObject.comment"
                        @change="$v.dataObject.comment.$touch()" 
                        :placeholder="lang[local].comment" 
                        :class="{'border-error':$v.dataObject.comment.$invalid  && $v.dataObject.comment.$dirty}"
                    > </InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.comment.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].comment) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.comment.minLen">
                            {{errors.minLengthError(lang[local].comment,$v.dataObject.comment.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.comment.maxLen">
                            {{errors.maxLengthError(lang[local].comment, $v.dataObject.comment.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3  my-3">
                <div class="form-group mx-2 my-4">
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
        <div class="otherData-table table-responsive my-4" v-if="data.length">
            <table class="table table-bordered ">
                <thead>
                    <tr  scope="row" class="table-header">
                        <th >#</th>
                        <th>{{lang[local].vaccineName}}</th>
                        <th>{{lang[local].tradeName}}</th>
                        <th>{{lang[local].comment}}</th>
                        <th>{{lang[local].settings}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="(row,index) in data" :key="index" >
                        <td scope="row" >{{index+1}}</td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                                    <i class="pi pi-search" />                        
                                    <AutoComplete
                                        :placeholder="lang[local].vaccineName"
                                        v-model="row.vaccineName.manualInsertion" 
                                        :suggestions="filteredvaccineName"
                                        @item-select="vaccineNameSelection(index)"
                                        @complete="searchvaccineName($event)" 
                                        :field="local=='ar'?'arabic':'english'" 
                                    />
                                </span>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].vaccineName.manualInsertion.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].vaccineName) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].vaccineName.manualInsertion.minLen">
                                        {{errors.minLengthError(lang[local].vaccineName,$v.data.$each[index].vaccineName.manualInsertion.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].vaccineName.manualInsertion.maxLen">
                                        {{errors.maxLengthError(lang[local].vaccineName, $v.data.$each[index].vaccineName.manualInsertion.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.vaccineName.manualInsertion}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                                    <i class="pi pi-search" />                        
                                    <AutoComplete
                                        :placeholder="lang[local].tradeName"
                                        v-model="row.tradeName.manualInsertion" 
                                        :suggestions="filteredtradeName"
                                        @item-select="tradeNameSelection(index)"
                                        @complete="searchtradeName($event)" 
                                        :field="local=='ar'?'arabic':'english'" 
                                    />
                                </span>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].tradeName.manualInsertion.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].tradeName) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].tradeName.manualInsertion.minLen">
                                        {{errors.minLengthError(lang[local].tradeName,$v.data.$each[index].tradeName.manualInsertion.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].tradeName.manualInsertion.maxLen">
                                        {{errors.maxLengthError(lang[local].tradeName, $v.data.$each[index].tradeName.manualInsertion.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.tradeName.manualInsertion}}</span>
                        </td>
                    
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    v-model="row.comment"
                                    @change="$v.data.$each[index].comment.$touch()" 
                                    :placeholder="lang[local].comment" 
                                    :class="{'border-error':$v.data.$each[index].comment.$invalid  && $v.data.$each[index].comment.$dirty}"
                                > </InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].comment.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].comment) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].comment.minLen">
                                        {{errors.minLengthError(lang[local].comment,$v.data.$each[index].comment.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].comment.maxLen">
                                        {{errors.maxLengthError(lang[local].comment, $v.data.$each[index].comment.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.comment}}</span>
                        </td>
                        <td scope="row">
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

import AutoComplete from 'primevue/autocomplete';
import InputText from 'primevue/inputtext';
import {minLength,maxLength} from "vuelidate/lib/validators";
import { notContainsHtmlTags} from "../helpers/customValidators";
import {minLengthError,maxLengthError,inputError} from "../helpers/errors";
import Button from "primevue/button";
export default {
    components:{
        AutoComplete,
        InputText,
        Button
    },
    props:['data','dataObject'],
    data(){
        return {
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            lang:{
                en:{
                    vaccineName:"Vaccine Name",
                    tradeName:"Trade Name",
                    comment:"Comment",
                    settings:"settings"
                },
                ar:{
                    vaccineName:"Vaccine Name",
                    tradeName:"Trade Name",
                    comment:"Comment",
                    settings:"settings"
                }
            },
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
            },
            vaccineNameOptions:[],
            filteredvaccineName:[],
            tradeNameOptions:[],
            filteredtradeName:[],
            editingId:-1
        }
    },
    validations:{
        dataObject:{
            vaccineName:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                }
            },
            tradeName:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                }
            },
            comment:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },

        },
        data:{
            $each:{
                vaccineName:{
                    manualInsertion:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                },
                tradeName:{
                    manualInsertion:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                },
                comment:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
            }
        },
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch("setPediatricVaccinationIsValid",this.$v.data.$invalid || this.$v.dataObject.$invalid);
            },
            deep: true,
        },
        dataObject: {
            handler() {
                this.$store.dispatch("setPediatricVaccinationIsValid",this.$v.data.$invalid || this.$v.dataObject.$invalid);
            },
            deep: true,
        },
    },
    methods:{
        searchvaccineName(event){
                this.filteredvaccineName =this.vaccineNameOptions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        vaccineNameSelection(index=null){
            if(!index)
            this.data.dataObject.vaccineName={
                english:this.data.dataObject.vaccineName.manualInsertion.english,
                arabic:this.data.dataObject.vaccineName.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.dataObject.vaccineName.manualInsertion.arabic:this.data.dataObject.vaccineName.manualInsertion.english
            }
            else
            this.data[index].vaccineName={
                english:this.data.data[index].vaccineName.manualInsertion.english,
                arabic:this.data.data[index].vaccineName.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.data[index].vaccineName.manualInsertion.arabic:this.data.data[index].vaccineName.manualInsertion.english
            }
            
        },
        searchtradeName(event){
                this.filteredtradeName =this.tradeNameOptions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        tradeNameSelection(index=null){
            if(!index)
            this.data.dataObject.tradeName={
                english:this.data.dataObject.tradeName.manualInsertion.english,
                arabic:this.data.dataObject.tradeName.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.dataObject.tradeName.manualInsertion.arabic:this.data.dataObject.tradeName.manualInsertion.english
            }
            else
            this.data[index].tradeName={
                english:this.data.data[index].tradeName.manualInsertion.english,
                arabic:this.data.data[index].tradeName.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.data[index].tradeName.manualInsertion.arabic:this.data.data[index].tradeName.manualInsertion.english
            }
            
        },
        addToTable(){
            if(!this.$v.dataObject.$invalid){
                this.data.push({...this.dataObject});
                this.$emit("resetData");
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
        },
    },

}
</script>
<style lang="scss" scoped>

.feeding-management-Vaccination{
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