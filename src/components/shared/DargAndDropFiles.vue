<template>
    <div class="darg-drop-files">
        <div class="row">
            <div class="col-md-6">
                <form>
                    <div class="upload-wrapper" @drop.prevent="getFiles">
                        <img src="../../UI/icons/shared/upload-svgrepo-com.svg" alt="">
                        <h4 class="my-2">{{lang[local].label}}</h4>
                        <h6 class="my-2">{{lang[local].or}}</h6>
                        <input type="file" hidden @change="getFielsFromBtn($event)" multiple="true" ref="inputFile">
                        <Button
                            :label="lang[local].btnLabel"
                            @click="$refs.inputFile.click()"
                        >
                        </Button>
                    </div>
                </form>
            </div>
            <div class="col-md-6" v-if="data.length">
                <div v-for="(file,index) in data" :key="index" class="display-wrapper mb-2">
                    <div class="media-wrapper d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center gap-2">
                            <img 
                                v-if="checkName(file.media.name).image" 
                                src="../../UI/icons/shared/image.svg"
                            >
                            <img
                                v-else-if="checkName(file.media.name).video" 
                                src="../../UI/icons/shared/video.svg">
                            <span v-else><i class="pi pi-file-excel" style="font-size: 2.5rem"></i></span>
                            <h6>{{file.media.name}}</h6>
                        </div>
                        <div class="delete">
                            <img src="../../UI/icons/shared/trash.svg" style="cursor: pointer;" @click="deleteItem(index)" alt="">
                        </div>
                    </div>
                    <div class="media-errors">
                        <small v-if="!$v.data.$each[index].media.mediaValidator" class="text-error">{{errors.inputError(file.media.name)}}</small>
                        <small v-else-if="!$v.data.$each[index].media.meidaSize" class="text-error" >
                            {{ checkName(file.media.name).image? errors.fileSizeError(imageSize/(1000*1024)):errors.fileSizeError(videoSize/(1000*1024))}}
                        </small>
                    </div>
                    <div class="media-comment d-flex gap-2 mt-3">
                        <label>{{lang[local].comment}}</label>
                        <InputText 
                        :placeholder="lang[local].comment"
                        type="text" 
                        v-model="file.comment" 
                        @change="$v.data.$each[index].comment.$touch()"
                        :class="{'border-error':$v.data.$each[index].comment.$invalid  && $v.data.$each[index].comment.$dirty}"
                        />
                    </div>
                    <div class="comment-errors">
                        <small class="text-error my-2" v-if="!$v.data.$each[index].comment.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].comment) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.$each[index].comment.minLen">
                            {{errors.minLengthError(lang[local].comment,$v.data.$each[index].comment$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.$each[index].comment.maxLen">
                            {{errors.maxLengthError(lang[local].comment, $v.data.$each[index].comment.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import { mediaValidator ,meidaSize,notContainsHtmlTags} from "../helpers/customValidators";
import {inputError,fileSizeError,minLengthError,maxLengthError} from "../helpers/errors";
import {minLength,maxLength} from "vuelidate/lib/validators";

export default {
    props:{
        data:{
            type:Array,
            required:true
        },
        validatorDispatcher:{
            type:String,
            required:true 
        },
        imageSize:{
            type:Number,
            required:true 
        },
        videoSize:{
            type:Number,
            required:true 
        },
    },
    components:{
        Button,
        InputText
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    label:"Drag Files Here",
                    or:"OR",
                    comment:"Comment",
                    btnLabel:"Browse",
                },
                ar:{
                    label:"Drag Files Here",
                    or:"OR",
                    comment:"Comment",
                    btnLabel:"Browse",
                },
            },
            errors:{
                inputError,
                fileSizeError,
                minLengthError,
                maxLengthError
            },
        }
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch(this.validatorDispatcher,this.$v.data.$invalid );
            },
            deep: true,
        }
    },
    validations:{
        data:{
            $each:{
                media:{
                    mediaValidator(val){
                        if (!val) return true;
                            return mediaValidator(val);
                    },
                    meidaSize(val){
                        if (!val) return true;
                            return meidaSize(val,this.imageSize,this.videoSize);
                    }
                },
                comment:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                }
            }
        },
    },
    methods:{
        getFiles(ev){
                if (ev.dataTransfer.items) {
                    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                        if (ev.dataTransfer.items[i].kind === 'file') {
                            var file = ev.dataTransfer.items[i].getAsFile();
                            this.data.push({media:file,comment:null})
                        }
                    }
                }
                // this.data.push(...event.files)
            
        },
        getFielsFromBtn(event){
            for(let i = 0 ; i < event.target.files.length ; i++){
                this.data.push({media:event.target.files[i],comment:null})
            }
            

        },
        checkName(name){
            let type =  {video:false,image:false}
            if(name.endsWith('jpg') || name.endsWith('jpeg') || name.endsWith('png') || name.endsWith('bmp'))
            {
                type.image = true ;
                return type 
            }
            else if(name.endsWith('mp4')||name.endsWith('mov')||name.endsWith('avi')||name.endsWith('webm')||name.endsWith('mkv'))
            {
                type.video = true ;
                return type 
            }

            return type ;
        },
        deleteItem(index){
            this.data.splice(index,1)
        }
    },
    mounted(){
        window.addEventListener("dragover",function(e){
            e = e || event;
            e.preventDefault();
            },false);
        window.addEventListener("drop",function(e){
            e = e || event;
            e.preventDefault();
        },false);
}

}
</script>
<style lang="scss" scoped>
.darg-drop-files{
    .upload-wrapper,.display-wrapper{
        text-align: center;
        padding: 20px;
        background-color: white;
        border: 1px dashed $tradmark-color;
        border-radius: 34px;
    }
}
</style>