<template>
    <div class="DYY-Contraception">
        <div class="row">
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].date}}</label>
                    <Calendar 
                    :showIcon="true"  
                    :placeholder="lang[local].date"  
                    :manualInput="false" 
                    :monthNavigator="true" 
                    :yearNavigator="true" 
                    yearRange="1950:2030" 
                    :touchUI.sync="displayUI" 
                    dateFormat="mm-dd-yy"
                    v-model="tableData.date"
                    :class="{'border-error':!$v.tableData.date.notValidDate  && $v.tableData.date.$dirty}"
                    
                    />
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.date.notValidDate && $v.tableData.date.$dirty">
                            {{ errors.inputError(lang[local].date) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].pills}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].pills" 
                        v-model="tableData.pills"
                        @change="$v.tableData.pills.$touch()" 
                        :class="{'border-error':$v.tableData.pills.$invalid  && $v.tableData.pills.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.pills.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].pills) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.pills.minLen">
                            {{errors.minLengthError(lang[local].pills,$v.tableData.pills.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.pills.maxLen">
                            {{errors.maxLengthError(lang[local].pills, $v.tableData.pills.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].loop}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].loop" 
                        v-model="tableData.loop"
                        @change="$v.tableData.loop.$touch()" 
                        :class="{'border-error':$v.tableData.loop.$invalid  && $v.tableData.loop.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.loop.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].loop) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.loop.minLen">
                            {{errors.minLengthError(lang[local].loop,$v.tableData.loop.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.loop.maxLen">
                            {{errors.maxLengthError(lang[local].loop, $v.tableData.loop.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].injection}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].injection" 
                        v-model="tableData.injection"
                        @change="$v.tableData.injection.$touch()" 
                        :class="{'border-error':$v.tableData.injection.$invalid  && $v.tableData.injection.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.injection.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].injection) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.injection.minLen">
                            {{errors.minLengthError(lang[local].injection,$v.tableData.injection.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.injection.maxLen">
                            {{errors.maxLengthError(lang[local].injection, $v.tableData.injection.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].implanon}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].implanon" 
                        v-model="tableData.implanon"
                        @change="$v.tableData.implanon.$touch()" 
                        :class="{'border-error':$v.tableData.implanon.$invalid  && $v.tableData.implanon.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.implanon.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].implanon) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.implanon.minLen">
                            {{errors.minLengthError(lang[local].implanon,$v.tableData.implanon.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.implanon.maxLen">
                            {{errors.maxLengthError(lang[local].implanon, $v.tableData.implanon.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].local}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].local" 
                        v-model="tableData.local"
                        @change="$v.tableData.local.$touch()" 
                        :class="{'border-error':$v.tableData.local.$invalid  && $v.tableData.local.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.local.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].local) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.local.minLen">
                            {{errors.minLengthError(lang[local].local,$v.tableData.local.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.local.maxLen">
                            {{errors.maxLengthError(lang[local].local, $v.tableData.local.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].nextVisit}}</label>
                    <Calendar 
                    :showIcon="true"  
                    :placeholder="lang[local].nextVisit"  
                    :manualInput="false" 
                    :monthNavigator="true" 
                    :yearNavigator="true" 
                    yearRange="1950:2030" 
                    :touchUI.sync="displayUI" 
                    dateFormat="mm-dd-yy"
                    v-model="tableData.nextVisit"
                    :class="{'border-error':!$v.tableData.nextVisit.notValidDate  && $v.tableData.nextVisit.$dirty}"
                    
                    />
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.nextVisit.notValidDate && $v.tableData.nextVisit.$dirty">
                            {{ errors.inputError(lang[local].nextVisit) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group mt-4 " style="margin-top:3px ;">
                        <Button
                            icon="pi pi-plus"
                            :class="{ 'arabic-icon': local == 'ar' }"
                            class="p-button-rounded"
                            :disabled="$v.tableData.$invalid"
                            @click="addToTable"
                            
                        />
                </div>
            </div>
        </div>
        <div class="otherData-table table-responsive my-4" v-if="data.otherData.length">
            <table class="table table-bordered ">
                <thead>
                    <tr  scope="row" class="table-header">
                        <th >#</th>
                        <th>{{lang[local].date}}</th>
                        <th>{{lang[local].pills}}</th>
                        <th>{{lang[local].loop}}</th>
                        <th>{{lang[local].injection}}</th>
                        <th>{{lang[local].implanon}}</th>
                        <th>{{lang[local].local}}</th>
                        <th>{{lang[local].nextVisit}}</th>
                        <th>{{lang[local].settings}}</th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="(row,index) in data.otherData" :key="index" >
                        <td scope="row" >{{index+1}}</td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <Calendar 
                                    :showIcon="true"  
                                    :placeholder="lang[local].date"  
                                    :manualInput="false" 
                                    :monthNavigator="true" 
                                    :yearNavigator="true" 
                                    yearRange="1950:2030" 
                                    :touchUI.sync="displayUI" 
                                    dateFormat="mm-dd-yy"
                                    v-model="row.date"
                                    :class="{'border-error':!$v.data.otherData.$each[index].date.notValidDate  && $v.data.otherData.$each[index].date.$dirty}"
                                    
                                />
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].date.notValidDate && $v.data.otherData.$each[index].date.$dirty">
                                        {{ errors.inputError(lang[local].date) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.date?row.date.toISOString().split('T')[0]:row.date}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].pills" 
                                        v-model="row.pills"
                                        @change="$v.data.otherData.$each[index].pills.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].pills.$invalid  && $v.data.otherData.$each[index].pills.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].pills.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].pills) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].pills.minLen">
                                            {{errors.minLengthError(lang[local].pills,$v.data.otherData.$each[index].pills.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].pills.maxLen">
                                            {{errors.maxLengthError(lang[local].pills, $v.data.otherData.$each[index].pills.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.pills}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].loop" 
                                        v-model="row.loop"
                                        @change="$v.data.otherData.$each[index].loop.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].loop.$invalid  && $v.data.otherData.$each[index].loop.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].loop.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].loop) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].loop.minLen">
                                            {{errors.minLengthError(lang[local].loop,$v.data.otherData.$each[index].loop.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].loop.maxLen">
                                            {{errors.maxLengthError(lang[local].loop, $v.data.otherData.$each[index].loop.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.loop}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].injection" 
                                        v-model="row.injection"
                                        @change="$v.data.otherData.$each[index].injection.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].injection.$invalid  && $v.data.otherData.$each[index].injection.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].injection.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].injection) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].injection.minLen">
                                            {{errors.minLengthError(lang[local].injection,$v.data.otherData.$each[index].injection.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].injection.maxLen">
                                            {{errors.maxLengthError(lang[local].injection, $v.data.otherData.$each[index].injection.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.injection}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].implanon" 
                                        v-model="row.implanon"
                                        @change="$v.data.otherData.$each[index].implanon.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].implanon.$invalid  && $v.data.otherData.$each[index].implanon.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].implanon.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].implanon) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].implanon.minLen">
                                            {{errors.minLengthError(lang[local].implanon,$v.data.otherData.$each[index].implanon.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].implanon.maxLen">
                                            {{errors.maxLengthError(lang[local].implanon, $v.data.otherData.$each[index].implanon.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.implanon}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].local" 
                                        v-model="row.local"
                                        @change="$v.data.otherData.$each[index].local.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].local.$invalid  && $v.data.otherData.$each[index].local.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].local.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].local) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].local.minLen">
                                            {{errors.minLengthError(lang[local].local,$v.data.otherData.$each[index].local.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].local.maxLen">
                                            {{errors.maxLengthError(lang[local].local, $v.data.otherData.$each[index].local.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.local}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                <Calendar 
                                :showIcon="true"  
                                :placeholder="lang[local].nextVisit"  
                                :manualInput="false" 
                                :monthNavigator="true" 
                                :yearNavigator="true" 
                                yearRange="1950:2030" 
                                :touchUI.sync="displayUI" 
                                dateFormat="mm-dd-yy"
                                v-model="row.nextVisit"
                                :class="{'border-error':!$v.data.otherData.$each[index].nextVisit.notValidDate  && $v.data.otherData.$each[index].nextVisit.$dirty}"
                                
                                />
                                <div class="errors">
                                    <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].nextVisit.notValidDate && $v.data.otherData.$each[index].nextVisit.$dirty">
                                        {{ errors.inputError(lang[local].nextVisit) }}
                                    </small>
                                </div>
                            </div>
                            <span v-else>{{row.nextVisit?row.nextVisit.toISOString().split('T')[0]:row.nextVisit}}</span>
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
        <div class="row col-md-6 col-lg-4 my-4">
            <div class="form-group ">
                <label class="mx-2">{{lang[local].comment}}</label>
                <InputText 
                    type="text" 
                    :placeholder="lang[local].comment" 
                    v-model="data.comment"
                    @change="$v.data.comment.$touch()" 
                    :class="{'border-error':$v.data.comment.$invalid  && $v.data.comment.$dirty}"
                ></InputText>
                <div class="errors">
                    <small class="text-error my-2" v-if="!$v.data.comment.notContainsHtmlTags">
                        {{ errors.inputError(lang[local].comment) }}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.comment.minLen">
                        {{errors.minLengthError(lang[local].comment,$v.data.comment.$params.minLen.min)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.comment.maxLen">
                        {{errors.maxLengthError(lang[local].comment, $v.data.comment.$params.maxLen.max) }}
                    </small>
                </div>
        </div>
        </div>
    
    </div>
    
</template>
<script>
import InputText from "primevue/inputtext";
import {minLength,maxLength} from "vuelidate/lib/validators";
import { notContainsHtmlTags,notValidDate} from "../../helpers/customValidators";
import {minLengthError,maxLengthError,inputError} from "../../helpers/errors";
import Button from "primevue/button";
import Calendar from 'primevue/calendar';
export default {
    props:['data','tableData'],
    components:{
        Button,
        InputText,
        Calendar
    },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    date: "Date",
                    pills: "Pills",
                    loop: "Loop",
                    injection: "Injection",
                    nextVisit: "Next visit",
                    implanon: "Implanon", 
                    local: "Local", 
                    comment:"comment",
                    settings:"settings"
                },
                ar:{
                    date: "Date",
                    pills: "pills",
                    loop: "loop",
                    injection: "injection",
                    nextVisit: "Next visit",
                    comment:"comment",
                    settings:"settings"
                }
            },
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
            },
            editingId:-1,
            displayUI:false,
        }
    },
    created(){
        this.displayUI = window.innerWidth <=425 ;
    },
    validations:{
        tableData:{
            date:{
                notValidDate(val) {
                    if (!val) return true;
                    return !notValidDate(val);
                    },
            },
            pills:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            loop:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            injection:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            
            implanon:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            local:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            nextVisit:{
                notValidDate(val) {
                    if (!val) return true;
                    return !notValidDate(val);
                    },
            },
      
        },
        data:{
            comment:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            otherData:{
                $each:{
                    date:{
                        notValidDate(val) {
                            if (!val) return true;
                            return !notValidDate(val);
                            },
                    },
                    pills:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    loop:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    injection:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    implanon:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    local:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    nextVisit:{
                        notValidDate(val) {
                            if (!val) return true;
                            return !notValidDate(val);
                            },
                    },
                },
            },
        },
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch("setOBJGYNContraceptionIsValid",this.$v.data.$invalid ||this.$v.tableData.$invalid);
            },
            deep: true,
        },
        tableData: {
            handler() {
                this.$store.dispatch("setOBJGYNContraceptionIsValid",this.$v.data.$invalid ||this.$v.tableData.$invalid);
            },
            deep: true,
        },

    },
    methods:{
        addToTable(){
            if(!this.$v.tableData.$invalid){
                this.data.otherData.push({...this.tableData});
                this.$emit("restData");
                this.$v.tableData.$reset()
            }
        },
        editRow(index){
            
        if(!this.$v.data.otherData.$invalid)
            this.editingId=index;
        console.log("open",this.editingId)
        },
        deleteFromTable(index){
            this.data.otherData.splice(index,1) ;
            
        },
        closeRow(){
            if(!this.$v.data.otherData.$invalid)
                this.editingId= -1 ;
            console.log("close",this.editingId)
        }
    },
}
</script>
<style lang="scss" scoped>
.DYY-Contraception{
    .table{
            border-radius: 34px;
            width:120%;
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
                border-bottom: 2px solid   #DEE2E6  ;
            }
    }
}
</style>