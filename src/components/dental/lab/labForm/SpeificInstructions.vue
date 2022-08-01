<template>
    <div class="specific-instructions my-3">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <p>{{lang[local].please}}</p>
                <div>
                    <Textarea v-model="data.lab.labForm.specificInstructions.text"
                                @change="$v.data.lab.labForm.specificInstructions.text.$touch()"
                                class="px-2"
                                :class="{
                                    'border-error':
                                    $v.data.lab.labForm.specificInstructions.text.$invalid && $v.data.lab.labForm.specificInstructions.text.$dirty,
                                }"
                    ></Textarea>
                    <div class="errors">
                        <small
                        class="text-error my-2"
                        v-if="
                            !$v.data.lab.labForm.specificInstructions.text.notContainsHtmlTags && $v.data.lab.labForm.specificInstructions.text.$dirty
                        "
                        >
                        {{ errors.inputError(lang[local].input) }}
                        </small>
                    </div>
                </div>
                <div class="actions d-flex justify-content-end">
                    <div class="attach-image m-2">
                        <img src="../../../../UI/icons/clinic/attach.svg" @click="$refs.imageInput.click()" style="cursor:pointer"  alt="">
                        
                        
                    </div>
                </div>
                <div class="build-file" >
                    <div class="form-group">
                        <input type="file" multiple accept=".jpg,jpeg,.png,.docx,.pdf"  @input="setInputImage" style="display:none" ref="imageInput" />
                        <div v-if="maxFilesError" class="text-danger text-center">{{lang[local].maxError}}</div>
                        <div v-if="data.lab.labForm.specificInstructions.fileSrc.length!=0" class="img-box">
                            <div v-for="(file,index) in data.lab.labForm.specificInstructions.fileSrc"  :key="index" class="inner-img-box m-1 p-1">
                                <img v-if="file.type=='image'" :src="file.source">
                                <div v-if="file.type=='pdf'" class="pdf-file">  
                                    <img src="../../../../UI/icons/pdf.svg" alt="">
                                </div>
                                <div v-if="file.type=='docx'" class="docx-file">
                                    <img src="../../../../UI/icons/word.svg" alt="">
                                </div>
                                <small class="d-block">name:{{file.name}}</small>
                                <small class="d-block">size:{{Math.floor(file.size/(1000*1024))}} {{lang[local].mb}}</small>
                                <small class="text-danger d-block" v-if="!file.validExtension">{{lang[local].notValidExtension}}</small>
                                <small class="text-danger d-block" v-if="!file.validSize">{{lang[local].tooLarge}}</small>
                                <span  class="delete-image" @click="deleteFile(index)"><i class="pi pi-times"></i></span>
                            </div>
                        </div>
                        <span class="text-danger d-block" v-if="data.lab.labForm.specificInstructions.fileSrc.length>10">{{lang[local].maxError}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Textarea from 'primevue/textarea';
import {customvalidateFile} from "../../../helpers/customValidators";
import { notContainsHtmlTags } from "../../../helpers/customValidators";
import {
  inputError,
} from "../../../helpers/errors";
export default {
    components:{
        Textarea
    },
    props:['data'],
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    please:"Please provide any photos, study models, diagnostic casts with case",
                    maxError:"max number of files is 10 files",
                    notValidExtension:"not Valid Extension",
                    tooLarge:"Size of file is too large",
                    mb:"MB",
                    input:"SPECIFIC INSTRUCTIONS",
                },
                ar:{
                    please:"Please provide any photos, study models, diagnostic casts with case",
                    maxError:"max number of files is 10 files",
                    notValidExtension:"not Valid Extension",
                    tooLarge:"Size of file is too large",
                    mb:"MB",
                    input:"SPECIFIC INSTRUCTIONS",
                }
            },
            maxFilesError:false,
            errors:{
                inputError
            }
        }
    },
    watch:{
        "data.lab.labForm.specificInstructions":{
            handler(){
                let notValid = false ;
                this.data.lab.labForm.specificInstructions.fileSrc.forEach(file=>{
                    if(!file.validExtension || !file.validSize)
                    notValid = true 
                })
                this.$store.dispatch("setToothLabSpecificInstructionsIsValid",notValid ||this.$v.data.$invalid)
            },
            deep:true
        }
    },
    validations:{
        data:{
            lab:{
                labForm:{
                    specificInstructions: {
                        text:{

                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        },
                        
                    
                },
                }
            }
        },
    },
    methods:{

        resetFiles(){
            this.data.lab.labForm.specificInstructions.fileSrc = [] ; 
            
        },
        deleteFile(index){
            this.data.lab.labForm.specificInstructions.fileSrc.splice(index, 1);
        },
        setInputImage(e){
            this.maxFilesError=false;
            let files=e.target.files;
            // check allowed max number files
            if(this.data.lab.labForm.specificInstructions.fileSrc.length<10||(this.fileSrdata.lab.labForm.specificInstructions.fileSrc.length+files.length) <10){
                Object.keys(files).forEach(index => {
                    // check if no dublication in uploaded files 
                    if (this.data.lab.labForm.specificInstructions.fileSrc.length!=0){
                        let isExistedFile = this.data.lab.labForm.specificInstructions.fileSrc.filter(data=>data.name ==files[index].name); 
                        if (isExistedFile.length == 0 ){
                            this.data.lab.labForm.specificInstructions.fileSrc.push(customvalidateFile(files[index]));
                        }
                    }
                    else{
                        this.data.lab.labForm.specificInstructions.fileSrc.push(customvalidateFile(files[index]));
                    }
                    
                });
            }
            else{
                this.maxFilesError=true;
            }
            e.target.value =""
        },
    },
}
</script>
<style lang="scss" scoped>
.specific-instructions{
    .build-file{
        .img-box{
            width: fit-content;
            padding: 5px;
            box-shadow: 1px 1px 5px #f8f9fa, -1px -1px 5px #f8f9fa;
            display: flex;
            flex-wrap: wrap;
            margin:5px;
            .inner-img-box{
                position: relative;
                box-shadow: 1px 1px 5px #f8f9fa, -1px -1px 5px #f8f9fa;   
                width:150px;
                height:150px;   
                img{
                    padding: 15px;
                    image-rendering:-webkit-optimize-contrast;
                    width: 100%;
                    height: 100%;
                }
                
                .docx-file,.pdf-file{
                    text-align: center;
                    span{
                        display: block;
                        font-size: 60px;
                    }
                }
                small{
                    text-align: center;
                    word-break: break-all;
                }
                
                .delete-image{
                    position: absolute;
                    top:0;
                    right:0;
                    padding:6px;
                    background-color:red;
                    cursor: pointer;
                    i{
                        color: #fff;
                    }
                }   
            }
        }
    }
}
</style>