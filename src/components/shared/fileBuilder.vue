<template>
    <div class="build-file">
        <div class="form-group">
            <label :for="id" class="btn btn-info upload">{{label}}</label>
            <small> (Optional)</small> 
            <input @input="validate" type="file" multiple accept=".jpg,jpeg,.png,.docx,.pdf" class="upload-input"   :id="id" name="image" >
            <div v-if="maxFilesError" class="text-danger text-center">max number of files is 10 files</div>
            <div v-if="fileSrc.length!=0" class="img-box">
                <div v-for="(file,index) in fileSrc" :key="index" class="inner-img-box m-1 p-1">
                    <img v-if="file.type=='image'" :src="file.source">
                    <!-- <object v-if="file.type=='pdf'" :data="file.source"></object> -->
                    <div v-if="file.type=='pdf'" class="pdf-file">
                        <span><i class="fa fa-file-pdf-o" aria-hidden="true"></i></span>
                    </div>
                    <div v-if="file.type=='docx'" class="docx-file">
                        <span><i class="fa fa-file-word-o" aria-hidden="true"></i></span>
                        <!-- <span>{{file.name}}</span> -->
                    </div>
                    <small class="d-block">name:{{file.name}}</small>
                    <small class="d-block">size:{{file.size/1000}}kb</small>
                    <small class="text-danger d-block" v-if="!file.validExtension">not Valid Extension</small>
                    <small class="text-danger d-block" v-if="!file.validSize">Size of file is too large</small>
                    <span  class="delete-image" @click="deleteFile(index)"><i class="fa fa-times" aria-hidden="true"></i></span>
                </div>
            </div>
            <span class="text-danger d-block" v-if="fileSrc.length>10">images can't be more than 10 </span>
        </div>
    </div>
</template>
<script>
import {validateFile} from "../helpers/customValidators"
export default {
    props:['label','id'],
    data(){
        return{
            fileSrc:[],
            maxFilesError:false,
        }
    },
    methods:{
        resetFiles(){
            this.fileSrc = [] ; 
        },
        deleteFile(index){
            this.fileSrc.splice(index, 1);
        },
        validate(e){
            this.maxFilesError=false;
            let files=e.target.files;
            // check allowed max number files
            if(this.fileSrc.length<10||(this.fileSrc.length+files.length) <10){
                files.forEach(el => {
                    // check if no dublication in uploaded files 
                    if (this.fileSrc.length!=0){
                        let isExistedFile = this.fileSrc.filter(data=>data.name ==el.name); 
                        if (isExistedFile.length == 0 ){
                            this.fileSrc.push(validateFile(el));
                        }
                    }
                    else{
                        this.fileSrc.push(validateFile(el));
                    }
                    
                });
            }
            else{
                this.maxFilesError=true;
            }
        },
    },
    watch:{
        fileSrc(){
            this.$emit("uploadedFiles",this.fileSrc)
        }
    },
}

</script>
<style lang="scss" scoped>
.build-file{
        .upload-input{
            display: none;
        }
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
                img,object,.docx-file,.pdf-file{
                    width: 100%;
                    height:60%;
                }
                img{
                    padding: 15px;
                    image-rendering:-webkit-optimize-contrast;
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
                    padding:10px;
                    background-color:rgba(0,0,0,0.1);
                    color: red;
                    &:hover{
                        cursor: pointer;
                        background-color:rgba(0, 0, 0, 0.3);
                    }
                }   
            }
        }
}
</style>