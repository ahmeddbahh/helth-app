<template>
    <div class="website-section" :class="{'arabic-content':local=='ar'}">
        <div class="input-wrapper website col-lg-6 my-2">
            <label>{{lang[local].website.label}}</label>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-globe"></i>
                </span>
                <InputText 
                    type="url"  
                    :placeholder="lang[local].website.placeholder" 
                    :class="{ 'border-error': $v.data.website.website.$invalid && $v.data.website.website.$error }"
                    v-model.trim="data.website.website"
                    @change="$v.data.website.website.$touch()"
                ></InputText>
            </div>
            <div class="errors">
                <small class="text-error"  
                    v-if="$v.data.website.website.$error && !$v.data.website.website.url">{{errors.inputError(lang[local].website.label)}}</small>
            </div>
        </div>
        <div class="input-wrapper facebook col-lg-6 my-2">
            <label>{{lang[local].facebook.label}}</label>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-facebook"></i>
                </span>
                <InputText 
                    type="url"  
                    :placeholder="lang[local].facebook.placeholder" 
                    :class="{ 'border-error': $v.data.website.facebook.$invalid && $v.data.website.facebook.$error }"
                    v-model.trim="data.website.facebook"
                    @change="$v.data.website.facebook.$touch()"
                ></InputText>
            </div>
            <div class="errors">
                <small class="text-error"  
                    v-if="$v.data.website.facebook.$error && !$v.data.website.facebook.url">{{errors.inputError(lang[local].facebook.label)}}</small>
            </div>
        </div>
        <div class="input-wrapper youtube col-lg-6 my-2">
            <label>{{lang[local].youtube.label}}</label>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-youtube"></i>
                </span>
                <InputText 
                    type="url"  
                    :placeholder="lang[local].youtube.placeholder" 
                    :class="{ 'border-error': $v.data.website.youtube.$invalid && $v.data.website.youtube.$error }"
                    v-model.trim="data.website.youtube"
                    @change="$v.data.website.youtube.$touch()"
                ></InputText>
            </div>
            <div class="errors">
                <small class="text-error"  
                    v-if="$v.data.website.youtube.$error && !$v.data.website.youtube.url">{{errors.inputError(lang[local].youtube.label)}}</small>
            </div>
        </div>
        <div class="input-wrapper instagram col-lg-6 my-2">
            <label>{{lang[local].instagram.label}}</label>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-instagram"></i>
                </span>
                <InputText 
                    type="url"  
                    :placeholder="lang[local].instagram.placeholder" 
                    :class="{ 'border-error': $v.data.website.instagram.$invalid && $v.data.website.instagram.$error }"
                    v-model.trim="data.website.instagram"
                    @change="$v.data.website.instagram.$touch()"
                ></InputText>
            </div>
            <div class="errors">
                <small class="text-error"  
                    v-if="$v.data.website.instagram.$error && !$v.data.website.instagram.url">{{errors.inputError(lang[local].instagram.label)}}</small>
            </div>
        </div>
        <div class="input-wrapper whatsapp col-lg-6 my-2">
            <label>{{lang[local].whatsapp.label}}</label>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-whatsapp"></i>
                </span>
                <InputText 
                    type="url"  
                    :placeholder="lang[local].whatsapp.placeholder" 
                    :class="{ 'border-error': $v.data.website.whatsapp.$invalid && $v.data.website.whatsapp.$error }"
                    v-model.trim="data.website.whatsapp"
                    @change="$v.data.website.whatsapp.$touch()"
                ></InputText>
            </div>
            <div class="errors">
                <small class="text-error"  
                    v-if="$v.data.website.whatsapp.$error && !$v.data.website.whatsapp.integer">{{errors.numericError(lang[local].whatsapp.label)}}</small>
            </div>
        </div>
    </div>
</template>
<script>
import {url,integer} from "vuelidate/lib/validators";
import {inputError,numericError}from "../../helpers/errors.js";
import websiteSectionLang from "../../../mixins/business/clinic_registeration/websiteSectionLang.js";
import InputText from 'primevue/inputtext';
export default {
    mixins:[websiteSectionLang],
    props:['data'],
    components:{
        InputText
    },
    data(){
        return{
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            errors:{
                inputError,
                numericError
            }
        }
    },
    validations:{
        data:{
            website: {
                website:{
                    url
                },
                facebook:{
                    url
                },
                youtube:{
                    url
                },
                instagram:{
                    url
                },
                whatsapp:{
                    integer
                },
            },
        }
    },
}
</script>
<style lang="scss" scoped>
.website-section{ 

}
</style>