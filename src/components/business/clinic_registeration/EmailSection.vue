<template>
    <div class="email-section">
        <div class="input-wrapper col-lg-6">
                <label >{{lang[local].email.label}}</label>
                <InputText 
                    type="email"  
                    :placeholder="lang[local].email.placeholder" 
                    :class="{ 'border-error': $v.data.email.$invalid && $v.data.email.$dirty }"
                    v-model.trim="data.email"
                    @change="$v.data.email.$touch()"
                ></InputText>
                <div class="errors">
                    <small class="text-error"  v-if="$v.data.email.$dirty && !$v.data.email.email">{{errors.inputError(lang[local].email.label)}}</small>
                </div>
        </div>
    </div>
</template>
<script>
import {email} from "vuelidate/lib/validators";
import {inputError}from "../../helpers/errors.js";
import emailSectionLang from "../../../mixins/business/clinic_registeration/emailSectionLang.js";
import InputText from 'primevue/inputtext';
export default {
    mixins:[emailSectionLang],
    props:['data'],
    components:{
        InputText
    },
    data(){
        return{
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            errors:{
                inputError
            }
        }
    },
    validations:{
        data:{
            email: {
                email
            },
        }
    },
    mounted(){
        this.$emit('emailSection',this.$v);
    },
}
</script>