<template>
    <div class="PostMenopausalBleeding">
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
                    <label class="mx-2">{{lang[local].fibroid}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].fibroid" 
                        v-model="tableData.fibroid"
                        @change="$v.tableData.fibroid.$touch()" 
                        :class="{'border-error':$v.tableData.fibroid.$invalid  && $v.tableData.fibroid.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.fibroid.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].fibroid) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.fibroid.minLen">
                            {{errors.minLengthError(lang[local].fibroid,$v.tableData.fibroid.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.fibroid.maxLen">
                            {{errors.maxLengthError(lang[local].fibroid, $v.tableData.fibroid.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].endometrium}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].endometrium" 
                        v-model="tableData.endometrium"
                        @change="$v.tableData.endometrium.$touch()" 
                        :class="{'border-error':$v.tableData.endometrium.$invalid  && $v.tableData.endometrium.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.endometrium.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].endometrium) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.endometrium.minLen">
                            {{errors.minLengthError(lang[local].endometrium,$v.tableData.endometrium.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.endometrium.maxLen">
                            {{errors.maxLengthError(lang[local].endometrium, $v.tableData.endometrium.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].overies}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].overies" 
                        v-model="tableData.overies"
                        @change="$v.tableData.overies.$touch()" 
                        :class="{'border-error':$v.tableData.overies.$invalid  && $v.tableData.overies.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.tableData.overies.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].overies) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.overies.minLen">
                            {{errors.minLengthError(lang[local].overies,$v.tableData.overies.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.tableData.overies.maxLen">
                            {{errors.maxLengthError(lang[local].overies, $v.tableData.overies.$params.maxLen.max) }}
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
                        <th>{{lang[local].fibroid}}</th>
                        <th>{{lang[local].endometrium}}</th>
                        <th>{{lang[local].overies}}</th>
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
                                        :placeholder="lang[local].fibroid" 
                                        v-model="row.fibroid"
                                        @change="$v.data.otherData.$each[index].fibroid.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].fibroid.$invalid  && $v.data.otherData.$each[index].fibroid.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].fibroid.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].fibroid) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].fibroid.minLen">
                                            {{errors.minLengthError(lang[local].fibroid,$v.data.otherData.$each[index].fibroid.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].fibroid.maxLen">
                                            {{errors.maxLengthError(lang[local].fibroid, $v.data.otherData.$each[index].fibroid.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.fibroid}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].endometrium" 
                                        v-model="row.endometrium"
                                        @change="$v.data.otherData.$each[index].endometrium.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].endometrium.$invalid  && $v.data.otherData.$each[index].endometrium.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].endometrium.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].endometrium) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].endometrium.minLen">
                                            {{errors.minLengthError(lang[local].endometrium,$v.data.otherData.$each[index].endometrium.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].endometrium.maxLen">
                                            {{errors.maxLengthError(lang[local].endometrium, $v.data.otherData.$each[index].endometrium.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.endometrium}}</span>
                        </td>
                        <td scope="row">
                            <div v-if="index == editingId">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].overies" 
                                        v-model="row.overies"
                                        @change="$v.data.otherData.$each[index].overies.$touch()" 
                                        :class="{'border-error':$v.data.otherData.$each[index].overies.$invalid  && $v.data.otherData.$each[index].overies.$dirty}"
                                    ></InputText>
                                    <div class="errors">
                                        <small class="text-error my-2" v-if="!$v.data.otherData.$each[index].overies.notContainsHtmlTags">
                                            {{ errors.inputError(lang[local].overies) }}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].overies.minLen">
                                            {{errors.minLengthError(lang[local].overies,$v.data.otherData.$each[index].overies.$params.minLen.min)}}
                                        </small>
                                        <small class="text-error my-2" v-else-if="!$v.data.otherData.$each[index].overies.maxLen">
                                            {{errors.maxLengthError(lang[local].overies, $v.data.otherData.$each[index].overies.$params.maxLen.max) }}
                                        </small>
                                    </div>
                            </div>
                            <span v-else>{{row.overies}}</span>
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
                    fibroid: "Fibroid",
                    endometrium: "Endometrium",
                    overies: "Overies",
                    nextVisit: "Next visit",
                    comment:"comment",
                    settings:"settings"
                },
                ar:{
                    date: "Date",
                    fibroid: "Fibroid",
                    endometrium: "Endometrium",
                    overies: "Overies",
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
            fibroid:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            endometrium:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            overies:{
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
                    fibroid:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    endometrium:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    overies:{
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
                this.$store.dispatch("setOBJGYNPostMenopausalBleedingIsValid",this.$v.data.$invalid ||this.$v.tableData.$invalid);
            },
            deep: true,
        },
        tableData: {
            handler() {
                this.$store.dispatch("setOBJGYNPostMenopausalBleedingIsValid",this.$v.data.$invalid ||this.$v.tableData.$invalid);
            },
            deep: true,
        },

    },
    methods:{
        addToTable(){
            if(!this.$v.tableData.$invalid){
                this.data.otherData.push({...this.tableData});
                this.$emit("restData")
                this.$v.tableData.$reset()
            }
        },
        editRow(index){
            
        if(!this.$v.data.otherData.$invalid)
            this.editingId=index;
        },
        deleteFromTable(index){
            this.data.otherData.splice(index,1) ;
            
        },
        closeRow(){
            if(!this.$v.data.otherData.$invalid)
                this.editingId= -1 ;
        }
    },
}
</script>
<style lang="scss" scoped>
.PostMenopausalBleeding{
    .table{
            border-radius: 34px;
            width:100%;
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