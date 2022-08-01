<template>
  <div class="login">
        <div class="form-wrapper" :class="{'arabic-content':local=='ar'}">
            <h3 class="text-error text-center">{{lang[local].title}}</h3>
            <h5 class="my-2">{{lang[local].newUser}} <router-link :to="{name:'register'}">{{lang[local].signUpLink}}</router-link></h5>
            <div class="email my-2">
                <label >{{lang[local].form.email.label}}</label>
                    <InputText 
                        type="text"  
                        :placeholder="lang[local].form.email.placeholder" 
                        :class="{'border-error': $v.data.phoneOrEmail.$invalid && $v.data.phoneOrEmail.$dirty }"
                        v-model.trim="data.phoneOrEmail"
                        @change="$v.data.phoneOrEmail.$touch()"
                    ></InputText>
                <div class="errors">
                    <small class="text-error" v-if="$v.data.phoneOrEmail.$dirty && !$v.data.phoneOrEmail.required">{{errors.requiredErorr(lang[local].form.email.label)}}</small>
                    <small class="text-error"  v-else-if="$v.data.phoneOrEmail.$dirty && !$v.data.phoneOrEmail.valid">{{errors.inputError(lang[local].form.email.label)}}</small>
                </div>
            </div>
            <div class="password my-2 ">
                <label>{{lang[local].form.password.label}}</label>
                <Password 
                    :toggleMask="true" 
                    :feedback="false"
                    :placeholder="lang[local].form.password.placeholder"
                    :class="{'border-error':$v.data.password.$invalid && $v.data.password.$customDirty}"
                    v-model.trim="data.password"
                    @change="$v.data.password.$touch()" 
                >
                </Password>
                <div class="errors">
                    <small class="text-error" v-if="$v.data.password.$customDirty && !$v.data.password.required">
                        {{errors.requiredErorr(lang[local].form.password.placeholder)}}
                    </small>
                </div>
            </div>
            <div v-if="unauthorized">
                <small class="text-error"> {{errors.unauthorizedError()}}</small>
            </div>
            <div class="create-btn d-flex justify-content-between">
                <div class="d-flex justify-content-center align-items-center">
                    <router-link :to="{name:'findAccount'}">{{lang[local].forgetPassword}}</router-link>
                </div>
                <div>
                    <Button :label="lang[local].siginBtn" :disabled="$v.$invalid" @click="login" class="p-button-rounded primary-btn-gradient" />
                </div>
            </div>
            <div><OrSeparator :label="lang[local].or"></OrSeparator></div>
            <div class="icons-wrapper d-flex justify-content-around flex-wrap">
                <div class="icon"><img src="../../UI/icons/authentication/facebook.svg" alt="facebook"></div>
                <div class="icon"><img src="../../UI/icons/authentication/google.svg" alt="google"></div>
                <div class="icon"><img src="../../UI/icons/authentication/apple.svg" alt="apple"></div>
                <div class="icon"><img src="../../UI/icons/authentication/twitter.svg" alt="twitter"></div>
            </div>
            
        </div>
  </div>
</template>

<script>
import loginLang from '../../mixins/business/loginLang.js';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import OrSeparator from '../../UI/components/OrSeparator.vue';
import {required} from "vuelidate/lib/validators";
import {requiredErorr,inputError,unauthorizedError}from "../helpers/errors.js";
import backendDomains from '../helpers/backendDomains.js';
import httpErrorCodesHandling from '../../mixins/httpErrors/httpErrorCodesHandling.js';
import axios from "axios";
export default {
    mixins:[loginLang,backendDomains,httpErrorCodesHandling],
    components: {
        InputText,
        Password,
        Button,
        OrSeparator,        
    },
    data() {
        return {
            data:{
                phoneOrEmail: '',
                password: '',
            },
            myAxios:"",
            unauthorized:false,
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            errors:{
                requiredErorr,
                inputError,
                unauthorizedError
            }
        };
    },
    validations:{
        data:{
            phoneOrEmail:{
            required,
            valid(value){
                if(!value)
                    return true
                else if (value.search( /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}/g) != -1)
                    return true
                else if (value.search( /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/gi) != -1)
                    return true
                else
                    return false
                },
            },
            password:{
                required
            }
        }
    },
    watch:{
        "data.password"(){
            this.$v.data.password.$customDirty=true;
        },
    },
    beforeCreate(){
        let lang =localStorage.getItem('lang');
        localStorage.clear();
        localStorage.setItem('lang',lang)
    },   
    created(){
        // create axios instance
        this.myAxios =axios.create({
            baseURL: `${this.backendBaseUrl}`,
        });
    },
    methods:{
        login(){
            if(!this.$v.$invalid){
                this.myAxios
                .post("/login",this.data)
                .then(res=>{
                    if(res.data.user){
                        localStorage.setItem("user",JSON.stringify({
                            email:res.data.user.email,
                            phoneNumber:res.data.user.phoneNumber,
                            nationalNumber:res.data.user.nationalNumber ,
                        }));
                        if(!res.data.user.email_verified){
                            this.$router.push({name:"registerEmailVerify"})
                        }
                        else if(!res.data.user.phone_verified){
                            this.$router.push({name:"registerPhoneVerify"})
                        }
                    }
                    else{
                        let lang =localStorage.getItem('lang');
                        localStorage.clear();
                        localStorage.setItem('lang',lang)
                        localStorage.setItem("accessToken",res.data.tokens.access)
                        localStorage.setItem("refreshToken",res.data.tokens.refresh)
                        this.$router.push({name:"chooseCategory"})
                    }
                })
                .catch((err) => {   
                    this.unauthorized = false ;        
                    if(err.response.data.not_authenticated || err.response.status==401)
                        this.unauthorized=true ;
                    else
                        this.httpErrorCodesHandling(err)
                })
            }
            else{
                console.log("fuck u bitch")
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.login {
    .form-wrapper{
        padding: 40px;
        border-radius: 34px;
        box-shadow: $shadow-1;
        .icons-wrapper{
            .icon{
                width:40px;
                height:40px;
                img{
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                }
            }
        }
    }
}

</style>
