<template>
    <div class="feeding-management-Formula">
        <div class="row">
            <div class="col-md-6 col-lg-3 col-xl-2 my-3">
                <div class="form-group">
                    <label>{{lang[local].formula}}</label>
                    <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                        <i class="pi pi-search" />                        
                        <AutoComplete
                            :placeholder="lang[local].formula"
                            v-model="dataObject.formula.manualInsertion" 
                            :suggestions="filteredFormula"
                            @item-select="FormulaSelection"
                            @complete="searchFormula($event)" 
                            :field="local=='ar'?'arabic':'english'" 
                        />
                    </span>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.formula.manualInsertion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].formula) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.formula.manualInsertion.minLen">
                            {{errors.minLengthError(lang[local].formula,$v.dataObject.formula.manualInsertion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.formula.manualInsertion.maxLen">
                            {{errors.maxLengthError(lang[local].formula, $v.dataObject.formula.manualInsertion.$params.maxLen.max) }}
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
                    <label >{{lang[local].dose}}</label>
                    <div class="d-flex">
                        <InputText 
                            type="number" 
                            v-model="dataObject.dose.value"
                            @change="$v.dataObject.dose.$touch()" 
                            :placeholder="lang[local].value" 
                            :class="{'border-error':$v.dataObject.dose.$invalid  && $v.dataObject.dose.value.$dirty}"
                            > </InputText>
                        <Dropdown 
                            v-model="dataObject.dose.unit" 
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            :placeholder="lang[local].unit"
                            :options="doseOptions" 
                        ></Dropdown>
                        <InputText 
                            type="number" 
                            v-model="dataObject.dose.valueOfMl"
                            @change="$v.dataObject.dose.$touch()" 
                            :placeholder="lang[local].volume" 
                            :class="{'border-error':$v.dataObject.dose.$invalid  && $v.dataObject.dose.value.$dirty}"
                            > </InputText>
                    </div>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.dataObject.dose.value.numeric && $v.dataObject.dose.value.$dirty">
                            {{ errors.inputError(lang[local].dose) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.dataObject.dose.valueOfMl.numeric && $v.dataObject.dose.valueOfMl.$dirty">
                            {{ errors.inputError(lang[local].volume) }}
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
                        <th>{{lang[local].formula}}</th>
                        <th>{{lang[local].meal}}</th>
                        <th>{{lang[local].period}}</th>
                        <th>{{lang[local].dose}}</th>
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
                                        :placeholder="lang[local].formula"
                                        v-model="row.formula.manualInsertion" 
                                        :suggestions="filteredFormula"
                                        @item-select="FormulaSelection(index)"
                                        @complete="searchFormula($event)" 
                                        :field="local=='ar'?'arabic':'english'" 
                                    />
                                </span>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].formula.manualInsertion.notContainsHtmlTags">
                                        {{ errors.inputError(lang[local].formula) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].formula.manualInsertion.minLen">
                                        {{errors.minLengthError(lang[local].formula,$v.data.$each[index].formula.manualInsertion.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].formula.manualInsertion.maxLen">
                                        {{errors.maxLengthError(lang[local].formula, $v.data.$each[index].formula.manualInsertion.$params.maxLen.max) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.formula.manualInsertion}}</span>
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
                                <div class="d-flex">
                                    <InputText 
                                        type="number" 
                                        v-model="row.dose.value"
                                        @change="$v.data.$each[index].dose.$touch()" 
                                        :placeholder="lang[local].value" 
                                        :class="{'border-error':$v.data.$each[index].dose.$invalid  && $v.data.$each[index].dose.value.$dirty}"
                                        > </InputText>
                                    <Dropdown 
                                        v-model="row.dose.unit" 
                                        :optionLabel="local=='ar'?'arabic':'english'" 
                                        :placeholder="lang[local].unit"
                                        :options="doseOptions" 
                                    ></Dropdown>
                                    <InputText 
                                        type="number" 
                                        v-model="row.dose.valueOfMl"
                                        @change="$v.data.$each[index].dose.$touch()" 
                                        :placeholder="lang[local].volume" 
                                        :class="{'border-error':$v.data.$each[index].dose.$invalid  && $v.data.$each[index].dose.valueOfMl.$dirty}"
                                        > </InputText>
                                </div>
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.$each[index].dose.value.numeric &&$v.data.$each[index].dose.value.$dirty">
                                        {{ errors.inputError(lang[local].dose) }}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.$each[index].dose.valueOfMl.numeric &&$v.data.$each[index].dose.valueOfMl.$dirty">
                                        {{ errors.inputError(lang[local].volume) }}
                                    </small>
                                </div>
                                
                            </div>
                            <span v-else>{{row.dose.value}} {{local=='ar'?row.dose.unit.arabic:row.dose.unit.english}}</span>
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
                    formula:"Formula",
                    meal:"Meal",
                    period:"Period",
                    dose:"Dose",
                    dietComment:"Diet comment",
                    time:"time",
                    unit:"unit",
                    value:"value",
                    settings:"settings",
                    volume:"volume"
                },
                ar:{
                    formula:"Formula",
                    meal:"Meal",
                    period:"Period",
                    dose:"Dose",
                    dietComment:"Diet comment",
                    time:"time",
                    unit:"unit",
                    value:"value",
                    settings:"settings",
                    volume:"volume"
                }
            },
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
            },
            FormulaOptions:[],
            filteredFormula:[],
            mealOptions:[
                {english:"breakfast",arabic:"breakfast"},
                {english:"lunch",arabic:"lunch"},
                {english:"dinner",arabic:"dinner"},
                {english:"brunch",arabic:"brunch"},
                {english:"elevenses",arabic:"elevenses"},
                {english:"supper",arabic:"supper"},
            ],
            doseOptions:[
                {english:"teaspoonful",arabic:"teaspoonful"},
                {english:"tablespoonful",arabic:"tablespoonful"},
                {english:"cupspoonful",arabic:"cupspoonful"},
            ],
            rxData,
            
            editingId:-1
        }
    },
    validations:{
        dataObject:{
            formula:{
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
                },
                
            },
            dose:{
                value:{
                    numeric
                },
                valueOfMl:{
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
                formula:{
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
                dose:{
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
                this.$store.dispatch("setPediatricFeedingManageFormulaIsValid",this.$v.data.$invalid || this.$v.dataObject.$invalid);
            },
            deep: true,
        },
        dataObject: {
            handler() {
                this.$store.dispatch("setPediatricFeedingManageFormulaIsValid",this.$v.data.$invalid || this.$v.dataObject.$invalid);
            },
            deep: true,
        },
    },
    methods:{
        searchFormula(event){
                this.filteredFormula =this.FormulaOptions.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
        },
        FormulaSelection(index=null){
            if(!index)
            this.data.dataObject.formula={
                english:this.data.dataObject.formula.manualInsertion.english,
                arabic:this.data.dataObject.formula.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.dataObject.formula.manualInsertion.arabic:this.data.dataObject.formula.manualInsertion.english
            }
            else
            this.data[index].formula={
                english:this.data.data[index].formula.manualInsertion.english,
                arabic:this.data.data[index].formula.manualInsertion.arabic,
                manualInsertion:this.local=='ar'?this.data.data[index].formula.manualInsertion.arabic:this.data.data[index].formula.manualInsertion.english
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

.feeding-management-Formula{
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