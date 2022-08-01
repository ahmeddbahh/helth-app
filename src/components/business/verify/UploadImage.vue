<template>
    <div class="image-component">
        <div class="image-wrapper">
            <div class="pic" :class="{'border-error':$v.image.$invalid && $v.image.file.$error}">
                <img v-if="image.url" :src="image.url">
                <div class="pic-icon">
                    <input @input="getPic"  type="file" accept="image/*" :id="`upload-pic-${label}`" hidden>
                    <label :for="`upload-pic-${label}`">
                        <i class="pi pi-camera" aria-hidden="true"></i>
                    </label>
                </div>
            </div>
        </div>
        <div class="errors text-center mt-5">
            <small class="text-error" v-if="!$v.image.file.required && $v.image.file.$error">
                {{errors.requiredErorr(label)}}
            </small>
            <small class="text-error" v-else-if="!$v.image.file.imageType">
                {{errors.imageTypeError()}}
            </small>
            <small class="text-error" v-else-if="!$v.image.file.imageSize">
                {{errors.imageSizeError(5)}}
            </small>
        </div>
    </div>
</template>
<script>
import {required} from "vuelidate/lib/validators";
import {imageType,imageSize} from "../../helpers/customValidators.js";
import {requiredErorr,imageTypeError,imageSizeError}from "../../helpers/errors.js";
export default {
    props:{
        label:{
            type:String,
            required:true
        },
        image:{
            type:Object,
            required:true 
        }
    },
    data(){
        return{
            errors:{
                requiredErorr,
                imageTypeError,
                imageSizeError
            }
        }
    },
    validations:{
        image:{
            file:{
                required,
                imageType(value){
                    return imageType(value)
                },
                imageSize(value){
                    return imageSize(value,10*1000*1024)
                },
            }
        },
    },
    watch:{
        image:{
            deep:true,
            handler(){
                console.log(this.$v.$invalid)  
            },
        }
    },
    methods:{
        getPic(event){
            this.$v.$touch();
            if(event.target.files){
                this.image.file = event.target.files[0]
                this.image.url = URL.createObjectURL(this.image.file)
            }
        },
    }
}
</script>
<style lang="scss" scoped>

.image-component{
    width: 100%;
    .image-wrapper{
        position: relative;
        .pic{
            box-shadow:$shadow-1;
            border-radius: 34px;
            width: 100%;
            height: 350px;
            
            img{
                border-radius: 34px;
                width:100%;
                height:100%;
                object-fit: cover;
                object-position: center;
            }
            .pic-icon{
                position: absolute;
                bottom:5%;
                right:5%;
                label{
                    cursor: pointer;
                    i{
                        font-size: 36px;
                    }
                }
            }
            
        }
        .errors{
            position: absolute;
            z-index: 20;
        }
    }
}
</style>