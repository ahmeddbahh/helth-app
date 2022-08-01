<template>
    <div class="feeding-management-solid">
        <div class="row">
            <div class="col-md-6 col-lg-3 col-xl-2 my-3">
                <div class="form-group">
                    <label>{{lang[local].dietContent}}</label>
                    <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                        <i class="pi pi-search" />                        
                        <AutoComplete
                            :placeholder="lang[local].dietContent"
                            v-model="dataObject.dietContent.manualInsertion" 
                            :suggestions="filteredSolid"
                            @item-select="solidSelection"
                            @complete="searchSolid($event)" 
                            :field="local=='ar'?'arabic':'english'" 
                        />
                    </span>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.dietContent.manualInsertion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].dietContent) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.dietContent.manualInsertion.minLen">
                            {{errors.minLengthError(lang[local].dietContent,$v.dataObject.dietContent.manualInsertion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.dietContent.manualInsertion.maxLen">
                            {{errors.maxLengthError(lang[local].dietContent, $v.dataObject.dietContent.manualInsertion.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 col-xl-2 my-3">
                <div class="form-group">
                    <div class="form-group">
                        <label class="mx-2">{{lang[local].meal}}</label>
                        <Dropdown 
                            :placeholder="lang[local].meal" 
                            :options="mealOptions"
                            v-model="dataObject.meal"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                        ></Dropdown>
                    </div>
                    
                </div>
            </div>
            <div class="col-md-6 col-lg-3 col-xl-2 my-3">
                <div class="form-group mx-2">
                    <label >{{lang[local].period}}</label>
                    <div class="d-flex">
                        <InputText 
                            type="number" 
                            v-model="dataObject.period.value"
                            @change="$v.dataObject.period.$touch()" 
                            :placeholder="lang[local].time" 
                            :class="{'border-error':$v.dataObject.period.$invalid  && $v.dataObject.period.value.$dirty}"
                            > </InputText>
                        <Dropdown 
                            v-model="dataObject.period.unit" 
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            :placeholder="lang[local].unit"
                            :options="rxData.period" 
                        ></Dropdown>
                    </div>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.period.value.numeric && $v.dataObject.period.value.$dirty">
                            {{ errors.inputError(lang[local].period) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 col-xl-2 my-3">
                <div class="form-group mx-2">
                    <label >{{lang[local].dietComment}}</label>
                    <InputText 
                        type="text" 
                        v-model="dataObject.dietComment"
                        @change="$v.dataObject.dietComment.$touch()" 
                        :placeholder="lang[local].dietComment" 
                        :class="{'border-error':$v.dataObject.dietComment.$invalid  && $v.dataObject.dietComment.$dirty}"
                    > </InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.dietComment.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].dietComment) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.dietComment.minLen">
                            {{errors.minLengthError(lang[local].dietComment,$v.dataObject.dietComment.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.dietComment.maxLen">
                            {{errors.maxLengthError(lang[local].dietComment, $v.dataObject.dietComment.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 col-xl-2 my-3">
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
                        <th>{{lang[local].dietContent}}</th>
                        <th>{{lang[local].meal}}</th>
                        <th>{{lang[local].period}}</th>
                        <th>{{lang[local].dietComment}}</th>
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
                                        :placeholder="lang[local].dietContent"
                                        v-model="row.dietContent.manualInsertion" 
                                        :suggestions="filteredSolid"
                                        @item-select="solidSelection(index)"
                                        @complete="searchSolid($event)" 
                                        :field="local=='ar'?'arabic':'english'" 
                                    />
                                </span>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].dietContent.manualInsertion.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].dietContent) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].dietContent.manualInsertion.minLen">
                                        {{errors.minLengthError(lang[local].dietContent,$v.data.$each[index].dietContent.manualInsertion.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].dietContent.manualInsertion.maxLen">
                                        {{errors.maxLengthError(lang[local].dietContent, $v.data.$each[index].dietContent.manualInsertion.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.dietContent.manualInsertion}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <Dropdown 
                                    :placeholder="lang[local].meal" 
                                    :options="mealOptions"
                                    v-model="row.meal"
                                    :optionLabel="local=='ar'?'arabic':'english'" 
                                />
                            </div>
                            <span v-else>{{local=='ar'?row.meal.arabic:row.meal.english}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <div class="d-flex">
                                    <InputText 
                                        type="number" 
                                        v-model="row.period.value"
                                        @change="$v.data.$each[index].period.$touch()" 
                                        :placeholder="lang[local].time" 
                                        :class="{'border-error':$v.data.$each[index].period.$invalid  && $v.data.$each[index].period.value.$dirty}"
                                        > </InputText>
                                    <Dropdown 
                                        v-model="row.period.unit" 
                                        :optionLabel="local=='ar'?'arabic':'english'" 
                                        :placeholder="lang[local].unit"
                                        :options="rxData.period" 
                                    ></Dropdown>
                                </div>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].period.value.numeric &&$v.data.$each[index].period.value.$dirty">
                                        {{ errors.inputError(lang[local].period) }}
                                    </small>
                                </div>
                                
                            </div>
                            <span v-else>{{row.period.value}} {{local=='ar'?row.period.unit.arabic:row.period.unit.english}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <InputText 
                                    type="text" 
                                    v-model="row.dietComment"
                                    @change="$v.data.$each[index].dietComment.$touch()" 
                                    :placeholder="lang[local].dietComment" 
                                    :class="{'border-error':$v.data.$each[index].dietComment.$invalid  && $v.data.$each[index].dietComment.$dirty}"
                                > </InputText>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].dietComment.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].dietComment) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].dietComment.minLen">
                                        {{errors.minLengthError(lang[local].dietComment,$v.data.$each[index].dietComment.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].dietComment.maxLen">
                                        {{errors.maxLengthError(lang[local].dietComment, $v.data.$each[index].dietComment.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.dietComment}}</span>
                        </td>
                        <td scope="row">
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

import AutoComplete from 'primevue/autocomplete';
import InputText from 'primevue/inputtext';
import {minLength,maxLength,numeric} from "vuelidate/lib/validators";
import { notContainsHtmlTags} from "../../helpers/customValidators";
import {minLengthError,maxLengthError,inputError} from "../../helpers/errors";
import {rxData} from "../../helpers/RxData";
import Dropdown from 'primevue/dropdown';
import Button from "primevue/button";
export default {
    components:{
        AutoComplete,
        InputText,
        Dropdown,
        Button
    },
    props:['data','dataObject'],
    data(){
        return {
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            lang:{
                en:{
                    dietContent:"Diet content",
                    meal:"Meal",
                    period:"Period",
                    dietComment:"Diet comment",
                    time:"time",
                    unit:"unit",
                    settings:"settings"
                },
                ar:{
                    dietContent:"Diet content",
                    meal:"Meal",
                    period:"Period",
                    dietComment:"Diet comment",
                    time:"time",
                    unit:"unit",
                    settings:"settings"
                }
            },
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
            },
            solidOptions:[],
            filteredSolid:[],
            mealOptions:[
                {english:"breakfast",arabic:"breakfast"},
                {english:"lunch",arabic:"lunch"},
                {english:"dinner",arabic:"dinner"},
                {english:"brunch",arabic:"brunch"},
                {english:"elevenses",arabic:"elevenses"},
                {english:"supper",arabic:"supper"},
            ],
            rxData,
            editingId:-1
        }
    },
    validations:{
        dataObject:{
            dietContent:{
                manualInsertion:{
                    minLen: minLength(1),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                }
            },
            period:{
                value:{
                    numeric
                }
            },
            dietComment:{
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
                dietContent:{
                    manualInsertion:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    }
                },
                period:{
                    value:{
                        numeric
                    }
                },
                dietComment:{
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
                this.$store.dispatch("setPediatricFeedingManageSolidIsValid",this.$v.data.$invalid || this.$v.dataObject.$invalid);
            },
            deep: true,
        },
        dataObject: {
            handler() {
                this.$store.dispatch("setPediatricFeedingManageSolidIsValid",this.$v.data.$invalid || this.$v.dataObject.$invalid);
            },
            deep: true,
        },
    },
    methods:{
        searchSolid(event){
                this.filteredSolid =this.solidOptions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        solidSelection(index=null){
            if(!index)
            this.data.dataObject.dietContent={
                english:this.data.dataObject.dietContent.manualInsertion.english,
                arabic:this.data.dataObject.dietContent.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.dataObject.dietContent.manualInsertion.arabic:this.data.dataObject.dietContent.manualInsertion.english
            }
            else
            this.data[index].dietContent={
                english:this.data.data[index].dietContent.manualInsertion.english,
                arabic:this.data.data[index].dietContent.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.data[index].dietContent.manualInsertion.arabic:this.data.data[index].dietContent.manualInsertion.english
            }
            
        },
        addToTable(){
            if(!this.$v.dataObject.$invalid){
                this.data.push({...this.dataObject});
                this.$emit("resetData")
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

.feeding-management-solid{
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