<template>
    <div class="day-business-hour">
        <div class="row">
            <div class="col-lg-2 my-2">
                <div class="label">
                    <label>{{label}}</label>
                </div>
            </div>
            <div class="col-md-5 col-lg-4 my-2">
                <div class="opening d-flex align-items-center">
                    <InputText type="time" 
                        v-model="init.From" 
                        :class="{'border-error':!$v.init.From.time && $v.init.From.$error}"
                        @change="$v.init.From.$touch()"
                    />
                    <label class="px-1">{{lang[local].open}}</label>
                </div>
                <div class="errors">
                    <small class="text-error" v-if="!$v.init.From.time">
                        {{errors.inputError(lang[local].open)}}
                    </small>
                    <!-- <small class="text-error" v-else-if="!$v.init.From.requiredIf">
                        {{errors.requiredIfErorr(lang[local].open,lang[local].close)}}
                    </small> -->
                </div>
            </div>
            <div class="col-md-5 col-lg-4 my-2">
                <div class="closing d-flex align-items-center">
                    <InputText 
                        type="time" 
                        v-model="init.To" 
                        :class="{'border-error':!$v.init.To.time && $v.init.To.$error}"
                        @change="$v.init.To.$touch()"
                    />
                    <label class="px-1">{{lang[local].close}}</label>
                </div>
                <div class="errors">
                    <small class="text-error" v-if="!$v.init.To.time">
                        {{errors.inputError(lang[local].close)}}
                    </small>
                    <!-- <small class="text-error" v-else-if="!$v.init.To.requiredIf">
                        {{errors.requiredIfErorr(lang[local].open,lang[local].close)}}
                    </small> -->
                </div>
            </div>
            <div class="col-md-2 col-lg-2 my-2">
                <div class="addMore">
                    <Button icon="pi pi-plus" :disabled="$v.init.$invalid" @click.prevent="addTime" class="p-button-rounded" />
                </div>
            </div>
        </div>
        <div v-if="data.length">
            <div v-for="(v, index) in $v.data.$each.$iter" :key="index" class="row">
                <div  class="d-none d-lg-block col-lg-2"></div>
                <div class="col-md-5 col-lg-4 my-2">
                    <div class="opening d-flex align-items-center">
                        <InputText 
                            type="time" 
                            v-model.trim="v.From.$model"
                            :class="{'border-error':v.From.$invalid && v.From.$error}" 
                        />
                        <label class="px-1">{{lang[local].open}}</label>
                    </div>
                    <div class="errors">
                        <small class="text-error" v-if="!v.From.time">
                            {{errors.inputError(lang[local].open)}}
                        </small>
                        <small class="text-error" v-else-if="!v.From.required && v.From.$error">
                            {{errors.requiredErorr(lang[local].open)}}
                        </small>
                    </div>
                </div>
                <div class="col-md-5 col-lg-4 my-2">
                    <div class="closing d-flex align-items-center">
                        <InputText 
                            type="time" 
                            v-model.trim="v.To.$model" 
                            :class="{'border-error':v.To.$invalid && v.To.$error}" 
                        />
                        <label class="px-1">{{lang[local].close}}</label>
                    </div>
                    <div class="errors">
                        <small class="text-error" v-if="!v.To.time">
                            {{errors.inputError(lang[local].close)}}
                        </small>
                        <small class="text-error" v-else-if="!v.To.required && v.To.$error">
                            {{errors.requiredErorr(lang[local].close)}}
                        </small>
                    </div>
                </div>
                <div class="col-md-2 col-lg-2 my-2">
                    <div class="deleteTime">
                        <Button icon="pi pi-times" @click.prevent="deleteTime(index)" class="p-button-rounded p-button-danger" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import {required} from "vuelidate/lib/validators";
import {time} from "../../../helpers/customValidators.js";
import {inputError,requiredIfErorr,requiredErorr}from "../../../helpers/errors.js";
export default {
    props:{
        label:{
            type:String,
            required:true,
        },
        data:{
            type:Array,
            required:true,
        },
        init:{
            type:Object,
            required:true,
        },
    },
    components:{
        InputText,
        Button
    },
    data(){
        return{
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            lang:{
                en:{
                    open:'Opening',
                    close:'Closing',
                },
                ar:{
                    open:'موعد البدأ',
                    close:'موعد الانتهاء',
                },
            },
            errors:{
                inputError,
                requiredIfErorr,
                requiredErorr
            }
        }
    },

    validations:{
        data:{
            $each: {
                From: {
                    required,
                    time(value){
                        return time(value)
                    },
                },
                To:{
                    required,
                    time(value){
                        return time(value)
                    },
                },
            }
        },
        init:{
            From:{
                requiredIf(value,init){
                    if((!init.To && init.From))
                        return false
                    else if(!init.From && init.To )
                        return false
                    else if (!init.From && !init.To)
                        return true 
                    else if (init.From &&  init.To)
                        return true 
                    return false
                },
                time(value){
                    return time(value)
                },
            },
            To:{
                requiredIf(value,init){
                    if((!init.To && init.From))
                        return false
                    else if(!init.From && init.To )
                        return false
                    else if (!init.From && !init.To)
                        return true 
                    else if (init.From &&  init.To)
                        return true 
                    return false
                },
                time(value){
                    return time(value)
                },
            },
        }
    },
    methods:{
        addTime(){
            if(this.init.From && this.init.To){
                this.data.push({...this.init})
                this.init.From='';
                this.init.To='';
            }
        },
        deleteTime(index){
            this.data.splice(index,1)
        },
    }
}
</script>
<style lang="scss" scoped>
/deep/ .pi{
    color: white !important;
}
</style>