<template>
    <div class="register">
        <div class="form-wrapper" :class="{'arabic-content':local=='ar'}">
            <h2>{{lang[local].title}}</h2>
            <h5 class="my-2">{{lang[local].haveAccount}} <router-link :to="{name:'login'}">{{lang[local].signInLink}}</router-link></h5>
            <div class="row mt-2">
                <div class="col-8">
                    <div class="email">
                        <label >{{lang[local].form.email.label}}</label>
                        <span class="p-input-icon-right w-100">
                            <i class="pi pi-spin pi-spinner"  v-if="$v.email.email && searchEmail"/>
                            <InputText 
                                type="email"  
                                :placeholder="lang[local].form.email.placeholder" 
                                :class="{ 'border-error': $v.email.$invalid && $v.email.$dirty }"
                                v-model.trim="email"
                                @change="$v.email.$touch()"
                            ></InputText>
                        </span>
                        <div class="errors">
                            <small class="text-error" v-if="$v.email.$dirty && !$v.email.required">{{errors.requiredErorr(lang[local].form.email.label)}}</small>
                            <small class="text-error"  v-else-if="$v.email.$dirty && !$v.email.email">{{errors.inputError(lang[local].form.email.label)}}</small>
                            <small class="text-error"  v-else-if="$v.email.$dirty && !$v.email.notExist">{{errors.notExistError(lang[local].form.email.label)}}</small>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="profile-pic">
                        <div ><Avatar :image="imgUrl" shape="circle" size="xlarge"/></div>
                        <div class="upload-btn">
                            <UploadFile v-model="image" label="Upload" :className="'primary-btn-gradient custom-sm-btn'"></UploadFile>
                        </div>
                    </div>
                </div>
                <div class="errors">
                    <small class="text-error" v-if="!$v.image.imageType">{{errors.imageTypeError()}}</small>
                    <small class="text-error" v-else-if="!$v.image.imageSize">{{errors.imageSizeError(5)}}</small>
                </div>
            </div>
            <div class="full-name my-2">
                <label>{{lang[local].form.fullName.label}}</label>
                <div class="full-name-fields">
                    <div class="row">
                        <div class="col-lg-6 ">
                            <div class="f-name my-2">
                            <InputText 
                                type="text"  
                                :placeholder="lang[local].form.fullName.fNamePlaceholder"
                                :class="{'border-error':$v.fName.$invalid && $v.fName.$dirty}"
                                v-model.trim="fName"
                                @change="$v.fName.$touch()"
                            >
                            </InputText>
                            <div class="errors">
                                <small class="text-error" v-if="$v.fName.$dirty && !$v.fName.required">
                                    {{errors.requiredErorr(lang[local].form.fullName.fNamePlaceholder)}}
                                </small>
                                <small class="text-error" v-else-if="$v.fName.$dirty && !$v.fName.alpha">
                                    {{errors.alphaError(lang[local].form.fullName.fNamePlaceholder)}}
                                </small>
                                <small class="text-error" v-else-if="$v.fName.$dirty && !$v.fName.minlen">
                                    {{errors.minLengthError(lang[local].form.fullName.fNamePlaceholder,$v.fName.$params.minlen.min)}}
                                </small>
                                <small class="text-error" v-else-if="$v.fName.$dirty && !$v.fName.maxlen">
                                    {{errors.maxLengthError(lang[local].form.fullName.fNamePlaceholder,$v.fName.$params.maxlen.max)}}
                                </small>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-6 ">
                            <div class="s-name my-2">
                                <InputText 
                                type="text" 
                                :placeholder="lang[local].form.fullName.sNamePlaceholder"
                                :class="{'border-error':$v.sName.$invalid && $v.sName.$dirty}"
                                v-model.trim="sName"
                                @change="$v.sName.$touch()" 
                                >
                                </InputText>
                                <div class="errors">
                                    <small class="text-error" v-if="$v.sName.$dirty && !$v.sName.required">
                                        {{errors.requiredErorr(lang[local].form.fullName.sNamePlaceholder)}}
                                    </small>
                                    <small class="text-error" v-else-if="$v.sName.$dirty && !$v.sName.alpha">
                                        {{errors.alphaError(lang[local].form.fullName.sNamePlaceholder)}}
                                    </small>
                                    <small class="text-error" v-else-if="$v.sName.$dirty && !$v.sName.minlen">
                                        {{errors.minLengthError(lang[local].form.fullName.sNamePlaceholder,$v.sName.$params.minlen.min)}}
                                    </small>
                                    <small class="text-error" v-else-if="$v.sName.$dirty && !$v.sName.maxlen">
                                        {{errors.maxLengthError(lang[local].form.fullName.sNamePlaceholder,$v.sName.$params.maxlen.max)}}
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 ">
                                <div class="t-name my-2">
                                    <InputText 
                                        type="text" 
                                        :placeholder="lang[local].form.fullName.tNamePlaceholder"
                                        :class="{'border-error':$v.tName.$invalid && $v.tName.$dirty}"
                                        v-model.trim="tName"
                                        @change="$v.tName.$touch()" 
                                    >
                                    </InputText>
                                    <div class="errors">
                                        <small class="text-error" v-if="$v.tName.$dirty && !$v.tName.required">
                                            {{errors.requiredErorr(lang[local].form.fullName.tNamePlaceholder)}}
                                        </small>
                                        <small class="text-error" v-else-if="$v.tName.$dirty && !$v.tName.alpha">
                                            {{errors.alphaError(lang[local].form.fullName.tNamePlaceholder)}}
                                        </small>
                                        <small class="text-error" v-else-if="$v.tName.$dirty && !$v.tName.minlen">
                                            {{errors.minLengthError(lang[local].form.fullName.tNamePlaceholder,$v.tName.$params.minlen.min)}}
                                        </small>
                                        <small class="text-error" v-else-if="$v.tName.$dirty && !$v.tName.maxlen">
                                            {{errors.maxLengthError(lang[local].form.fullName.tNamePlaceholder,$v.tName.$params.maxlen.max)}}
                                        </small>
                                    </div>
                                </div>
                        </div> 
                        <div class="col-lg-6 ">
                            <div class="fa-name my-2">
                                <InputText 
                                    type="text" 
                                    :placeholder="lang[local].form.fullName.faNamePlaceholder"
                                    :class="{'border-error':$v.faName.$invalid && $v.faName.$dirty}"
                                    v-model.trim="faName"
                                    @change="$v.faName.$touch()" 
                                >
                                </InputText>
                                <div class="errors">
                                    <small class="text-error" v-if="$v.faName.$dirty && !$v.faName.required">
                                        {{errors.requiredErorr(lang[local].form.fullName.faNamePlaceholder)}}
                                    </small>
                                    <small class="text-error" v-else-if="$v.faName.$dirty && !$v.faName.alpha">
                                        {{errors.alphaError(lang[local].form.fullName.faNamePlaceholder)}}
                                    </small>
                                    <small class="text-error" v-else-if="$v.faName.$dirty && !$v.faName.minlen">
                                        {{errors.minLengthError(lang[local].form.fullName.faNamePlaceholder,$v.faName.$params.minlen.min)}}
                                    </small>
                                    <small class="text-error" v-else-if="$v.faName.$dirty && !$v.faName.maxlen">
                                        {{errors.maxLengthError(lang[local].form.fullName.faNamePlaceholder,$v.faName.$params.maxlen.max)}}
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="phone-number my-2">
                <label>{{lang[local].form.phone.label}}</label>
                <VuePhoneNumberInput
                    v-model.trim="phoneNumber"
                    @update="results = $event"
                    required
                    default-country-code="EG"
                    @input="getPhoneNumber"
                    :class="{'border-error':$v.phoneNumber.$invalid && $v.phoneNumber.$error}"
                />
                <div class="errors">
                    <small class="text-error" v-if="$v.phoneNumber.$error && !$v.phoneNumber.required">{{errors.requiredErorr(lang[local].form.phone.label)}}</small>
                    <small class="text-error"  v-else-if="$v.phoneNumber.$error && !$v.phoneNumber.validPhone">{{errors.inputError(lang[local].form.phone.label)}}</small>
                    <small class="text-error"  v-else-if="$v.phoneNumber.$error && !$v.phoneNumber.notExist">{{errors.notExistError(lang[local].form.phone.label)}}</small>
                </div>
            </div>
            <div class="password my-2 ">
                <label>{{lang[local].form.password.label}}</label>
                <Password 
                    :toggleMask="true" 
                    :placeholder="lang[local].form.password.placeholder"
                    :class="[{'border-error':$v.password.$invalid && $v.password.$error},{'p-input-icon-left':local=='ar'}]"
                    v-model.trim="password"
                    @change="$v.password.$touch()" 
                >
                </Password>
                <div class="errors">
                    <small class="text-error" v-if="$v.password.$error && !$v.password.required">
                        {{errors.requiredErorr(lang[local].form.password.placeholder)}}
                    </small>
                    <small class="text-error" v-else-if="$v.password.$error && !$v.password.minlen">
                        {{errors.minLengthError(lang[local].form.password.placeholder,$v.password.$params.minlen.min)}}
                    </small>
                    <small class="text-error" v-else-if="$v.password.$error && !$v.password.maxlen">
                        {{errors.maxLengthError(lang[local].form.password.placeholder,$v.password.$params.maxlen.max)}}
                    </small>
                </div>
            </div>
            <div class="confirm-password my-2">
                <label>{{lang[local].form.confirmPassword.label}}</label>
                <Password 
                :toggleMask="true" 
                :feedback="false"
                :placeholder="lang[local].form.confirmPassword.placeholder"
                :class="{'border-error':$v.confirmPassword.$invalid && $v.confirmPassword.$error}"
                v-model.trim="confirmPassword"
                @change="$v.confirmPassword.$touch()" 
                >
                </Password>
                <div class="errors">
                    <small class="text-error" v-if="$v.confirmPassword.$error && !$v.confirmPassword.required">
                        {{errors.requiredErorr(lang[local].form.password.placeholder)}}
                    </small>
                    <small class="text-error" v-else-if="$v.confirmPassword.$error && !$v.confirmPassword.passwordMatched">
                        {{errors.sameAsError(lang[local].form.password.placeholder)}}
                    </small>
                </div>
            </div>
            <div class="country my-2">
                    <label>{{lang[local].form.country.label}}</label>
                    <Dropdown 
                        :filter="local=='en'" 
                        :options="countries" 
                        :optionLabel="local=='en'?'englishName':'arabicName'" 
                        :placeholder="lang[local].form.country.placeholder"
                        v-model="country" 
                        :class="{'border-error':$v.country.$invalid && $v.country.$error}"
                        @change="$v.country.$touch()" 
                    >
                        <template #option="slotProps">
                            <div class="p-dropdown-car-option">
                                <img  :src="slotProps.option.flag" width="20px" height="20px" />
                                <span style="margin:0px 5px" v-if="local=='en'">{{slotProps.option.englishName}}</span>
                                <span style="margin:0px 5px" v-else>{{slotProps.option.arabicName}}</span>
                            </div>
                        </template>
                    </Dropdown>
                    <div class="errors">
                        <small class="text-error" v-if="$v.country.$error && !$v.country.required">
                            {{errors.requiredErorr(lang[local].form.country.placeholder)}}
                        </small>
                    </div>
            </div>
            <div class="birth-date my-2">
                    <label>{{lang[local].form.birthDate.label}}</label>
                    <Calendar 
                    :showIcon="true"  
                    :placeholder="lang[local].form.birthDate.placeholder" 
                    :manualInput="false" 
                    :monthNavigator="true" 
                    :yearNavigator="true" 
                    yearRange="1950:2030" 
                    :touchUI.sync="displayUI" 
                    v-model="birthDate" 
                    :class="{'border-error':$v.birthDate.$invalid && $v.birthDate.$error}"
                    @change="$v.birthDate.$touch()" 
                    />
                    <div class="errors">
                        <small class="text-error" v-if="$v.birthDate.$error && !$v.birthDate.required">
                            {{errors.requiredErorr(lang[local].form.birthDate.label)}}
                        </small>
                    </div>
            </div>
            <div class="gender my-2">
                    <label>{{lang[local].form.gender.label}}</label>
                    <Dropdown 
                        :options="genders" 
                        :optionLabel="local=='en'?'englishName':'arabicName'" 
                        :placeholder="lang[local].form.gender.placeholder"
                        v-model="gender"
                        :class="{'border-error':$v.gender.$invalid && $v.gender.$error}"
                        @change="$v.gender.$touch()"  
                    />
                    <div class="errors">
                        <small class="text-error" v-if="$v.gender.$error && !$v.gender.required">
                            {{errors.requiredErorr(lang[local].form.gender.label)}}
                        </small>
                    </div>
            </div>
            <div class="company-policy my-4">
                <p v-html="lang[local].company"></p>
            </div>
            <div class="contact-via-email">
                <h5><Checkbox v-model="confirmation" :binary="true" /><span class="mx-1">{{lang[local].form.confirmation}}</span></h5>
            </div>
            <div class="terms my-4">
                <p v-html="lang[local].terms"></p>
            </div>
            <div class="create-btn d-flex justify-content-end">
                <Button :label="lang[local].createBtn"
                 @click.prevent="register"
                 class="p-button-rounded primary-btn-gradient px-5 py-3" 
                 :disabled="$v.$invalid"
                />
            </div>
        </div>
    </div>
</template>
<script>
// import {minLenError} from "../helpers/errors.js"
import UploadFile from '../../../UI/components/form/UploadFile.vue'
import countries from '../../../mixins/authentication/countries.js'
import registerLang from '../../../mixins/authentication/registerLang.js'
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import Password from 'primevue/password';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import {required,minLength,maxLength,email,sameAs,} from "vuelidate/lib/validators";
import {alpha,imageType,imageSize} from "../../helpers/customValidators.js";
import {requiredErorr,minLengthError,inputError,notExistError,maxLengthError,alphaError,sameAsError,imageTypeError,imageSizeError}from "../../helpers/errors.js";
import backendDomains from '../../helpers/backendDomains.js';
import httpErrorCodesHandling from '../../../mixins/httpErrors/httpErrorCodesHandling'
import axios from "axios";
export default {
    mixins:[countries,registerLang,backendDomains,httpErrorCodesHandling],
    components:{
        UploadFile,
        VuePhoneNumberInput,
        Dropdown,
        InputText,
        Avatar,
        Password,
        Calendar,
        Checkbox,
        Button,
    },
    data() {
        return {
            fName: "",
            sName: "",
            tName: "",
            faName: "",
            email: "",
            phoneNumber: "",
            nationalNumber:'',
            password: "",
            confirmPassword: "",
            country:{
                englishName: "Egypt",
                arabicName: "مصر",
                region: "Africa",
                flag: "https://flagcdn.com/eg.svg",
            },
            birthDate: "",
            age:"",
            genders: [
                {englishName: 'Male', arabicName:"ذكر" ,code: 'm'},
                {englishName: 'Female', arabicName:"انثى", code: 'f'},
                {englishName: 'Other', arabicName:"أخري",code: 'o'},
            ],
            gender: {englishName: 'Male', arabicName:"ذكر" ,code: 'm'},
            validPhoneNumber:true,
            confirmation:'',
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            image:'',
            imgUrl:require(`../../../UI/icons/authentication/avatar.svg`),
            errors:{
                requiredErorr,
                minLengthError,
                inputError,
                notExistError,
                maxLengthError,
                sameAsError,
                alphaError,
                imageTypeError,
                imageSizeError
            },
            displayUI:false,
            myAxios:"",
            // search email and phone in the backend
            searchEmail:false,
            searchPhone:false,
            // backend errors handling
            isEmailExist:true,
            isPhoneValid:false,
            isPhoneExist:true,
        }
    },
    validations: {
        fName: {
            required,
            minlen: minLength(3),
            maxlen: maxLength(30),
            alpha(value){
                return alpha(value)
            },
        },
        /**************************************************/
        sName: {
            required,
            minlen: minLength(3),
            maxlen: maxLength(30),
            alpha(value){
                return alpha(value)
            },
        },
        /**************************************************/
        tName: {
            required,
            minlen: minLength(3),
            maxlen: maxLength(30),
            alpha(value){
                return alpha(value)
            },
        },
        /**************************************************/
        faName: {
            required,
            minlen: minLength(3),
            maxlen: maxLength(30),
            alpha(value){
                return alpha(value)
            },
        },
        /**************************************************/
        phoneNumber: {
            required,
            validPhone(value,vm){
                if(!value)
                    return false;
                return vm.isPhoneValid
            },
            notExist(value,vm){
                if(!value)
                    return false;
                return !vm.isPhoneExist
            }
        },
        /**************************************************/
        email: {
            required,
            email,
            notExist(value,vm){
                if(!value)
                    return false;
                return !vm.isEmailExist
            }
        },
        /**************************************************/
        password: {
            required,
            minlen: minLength(8),
            maxlen: maxLength(68),
        },
        /**************************************************/
        confirmPassword: {
            required,
            passwordMatched: sameAs("password"),
        },
        /**************************************************/
        country: {
            required,
        },
        /**************************************************/
        birthDate: {
            required,
        },
        /**************************************************/
        gender: {
            required,
        },
        /**************************************************/
        image: {
            imageType(value){
                return imageType(value)
            },
            imageSize(value){
                return imageSize(value,5*1000*1024)
            },
        },
        /**************************************************/
        confirmation: {
            required
        },
        /**************************************************/
    },
    watch:{
        email(){
            if(this.$v.email.email && this.$v.email.$model!=''){
                this.searchEmail=true;
                setTimeout(()=>{
                    this.myAxios
                    .post(`${this.backendBaseUrl}/check-email-exist`,{email:this.email})
                    .then(res=>{
                        this.isEmailExist=res.data.isEmailExist;
                    })
                    .finally(()=>{
                        this.searchEmail=false;
                    })
                },400);
            }
        },
        image(){
            this.imgUrl = URL.createObjectURL(this.image);          
        },
        confirmation(){
            if(!this.confirmation)
                this.confirmation=''
        },
    },
    created(){
        // calender Responsive
        window.addEventListener("resize", this.onResize);
        this.displayUI = window.innerWidth <=425 ;

        // create axios instance
        this.myAxios =axios.create({
            baseURL: `${this.backendBaseUrl}`,
        });
    },
    destroyed() {
        window.removeEventListener("resize", this.onResize);
    },
    mounted(){
        document.querySelector(".input-tel__input").setAttribute("placeholder",this.lang[this.local].form.phone.placeholder);
        document.querySelector(".input-tel__label").innerHTML=this.lang[this.local].form.phone.placeholder;
    },
   computed:{
       inputFieldValue(){
           return this.birthDate
       },
   },
    methods:{
        getPhoneNumber() {
            this.isPhoneValid=this.results.isValid;
            if (this.results.isValid) {
                // console.log(this.results)
                this.phoneNumber = this.results.formatNational.replace(/\s/g, '');
                this.nationalNumber = this.results.formattedNumber;
                this.searchPhone=true;
                setTimeout(()=>{
                    this.myAxios
                    .post(`${this.backendBaseUrl}/check-phone-exist`,{phoneNumber:this.phoneNumber,nationalNumber:this.nationalNumber})
                    .then(res=>{
                        // console.log(res.data)
                        this.isPhoneValid=res.data.isPhoneValid;
                        this.isPhoneExist=res.data.isPhoneExist;
                    })
                    .catch(err=>{
                        this.httpErrorCodesHandling(err)
                    })
                    .finally(()=>{
                        this.searchPhone=false;
                    })
                },400);
                
            }
        },
        getImage(event){
            this.image =event.files[0].objectURL;
            this.imageToUpload = event.files[0];
        },
        calcAge(){
            let today = new Date();
            this.age = today.getFullYear() - this.birthDate.getFullYear();
            let m = today.getMonth() - this.birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < this.birthDate.getDate())) {
                this.age--;
            }
        },
        register() {
        if(!this.$v.$invalid && !this.searchEmail && !this.searchPhone){
            if(this.birthDate)
                this.calcAge()
            let data = {
                email: this.email,
                firstName: this.fName,
                secondName: this.sName,
                thirdName: this.tName,
                familyName: this.faName,
                phoneNumber: this.phoneNumber,
                nationalNumber: this.nationalNumber,
                password: this.password,
                country:this.country.englishName,
                birthDate: this.birthDate.toISOString().split('T')[0],
                age:this.age,
                gender: this.gender.englishName,
            };
            // console.log(data)
            let formData =new FormData();
            formData.append('data',JSON.stringify(data))
            formData.append('image',this.image)
            this.myAxios
                .post('/register',formData)
                .then((res) => {
                    let data =JSON.stringify(res.data);
                    localStorage.setItem('user',data);
                    this.$router.push({name:'registerEmailVerify'});
                    this.email='';
                    this.fName='';
                    this.sName='';
                    this.tName='';
                    this.faName='';
                    this.phoneNumber='';
                    this.nationalNumber='';
                    this.password='';
                    this.confirmPassword= "";
                    this.country={englishName: "Egypt",arabicName: "مصر",region: "Africa",flag: "https://flagcdn.com/eg.svg"};
                    this.birthDate='';
                    this.gender={englishName: 'Male', arabicName:"ذكر" ,code: 'm'};
                    this.confirmation='';
                })
                .catch((err) => {           
                    // console.log(err);
                    this.httpErrorCodesHandling(err)
                })
        }
        else {
            console.log("Fuck U Bitch , Try Later")
        }
        },
    }
}
</script>
<style lang="scss" scoped>
.register{
    .form-wrapper{
            .profile-pic{
                display: flex;
                flex-direction: column;
                justify-content:center;
                align-items:center;
               
            }
        
    }
}
</style>
