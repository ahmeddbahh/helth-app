<template>
    <div class="form">
        <div class="row">
            <div class="col-md-6 col-xl-3 my-2 d-flex align-items-end gap-3">
                <div class="input-wrapper my-2">
                    <label class="col-sm">{{lang[local].title.label}}</label>
                    <InputText 
                        type="text" 
                        v-model="initialObject.title"
                        @change="$v.initialObject.title.$touch()" 
                        :placeholder="lang[local].title.placeholder" 
                        :class="{'border-error':$v.initialObject.title.$invalid  && $v.initialObject.title.$dirty}"
                    > </InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.initialObject.title.notContainsHtmlTags">
                            {{ errors.htmlTagsError(lang[local].title.label) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.initialObject.title.minLen">
                            {{errors.minLengthError(lang[local].title.label,$v.initialObject.title.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.initialObject.title.maxLen">
                            {{errors.maxLengthError(lang[local].title.label, $v.initialObject.title.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
                <div class="input-wrapper custom-btn my-2">
                    <input type="file" hidden @change="getFielFromBtn($event)" ref="inputFile">
                        <Button
                            icon="pi pi-link"
                            class="custom-btn"
                            @click="$refs.inputFile.click()"
                        >
                        </Button>
                </div>
                <div class="input-wrapper my-2">
                    <Button
                        icon="pi pi-plus"
                        class="p-button-rounded"
                        @click="addToTable"
                        :disabled="$v.initialObject.$invalid ||
                        (!$v.initialObject.title.$model && !$v.initialObject.note.$model && !$v.initialObject.file.$model)"
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-xl-3 d-flex ">
                <div class="input-wrapper my-2">
                    <label >{{lang[local].note.label}}</label>
                    <InputText 
                        type="text" 
                        v-model="initialObject.note"
                        @change="$v.initialObject.note.$touch()" 
                        :placeholder="lang[local].note.placeholder" 
                        :class="{'border-error':$v.initialObject.note.$invalid  && $v.initialObject.note.$dirty}"
                    > </InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.initialObject.note.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].note.label) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.initialObject.note.minLen">
                            {{errors.minLengthError(lang[local].note.label,$v.initialObject.note.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.initialObject.note.maxLen">
                            {{errors.maxLengthError(lang[local].note.label, $v.initialObject.note.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-5" v-if="initialObject.file">
            <div class="col-md-6 col-xl-3">
                <div class="display-file">
                    <div class="file-box">
                        <img 
                            v-if="checkFileName(initialObject.file.name).image" 
                            :src="ObjectURL(initialObject.file)"
                        >
                        <video   controls  v-else-if="checkFileName(initialObject.file.name).video">
                            <source :src="ObjectURL(initialObject.file)" />
                        </video>
                        <span v-else-if="checkFileName(initialObject.file.name).pdf"><i class="pi pi-pdf " style="font-size: 5rem"></i></span>
                        <span v-else-if="checkFileName(initialObject.file.name).file"><i class="pi pi-file " style="font-size: 5rem"></i></span>
                        <span v-else><i class="pi pi-file-excel" style="font-size: 5rem"></i></span>
                        <span class="text-center">
                            {{initialObject.file.name.substring(0,8)}} {{initialObject.file.name.length>8?'...':''}}
                        </span>
                        <div class="delete">
                            
                        <Button 
                            icon="pi pi-trash " 
                            @click="deleteFileItem()" 
                            class="p-button-rounded p-button-danger"
                        />
                        </div>
                    </div>
                    <div class="media-errors text-center">
                        <small v-if="!$v.initialObject.file.fileExtension" class="text-error">{{errors.inputError(initialObject.file.name)}}</small>
                        <small v-else-if="!$v.initialObject.file.fileSize" class="text-error" >
                            {{errors.fileSizeError(5)}}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-5" v-if="data.form.length">
            <div class="col-md-6 col-xl-3">
                <DataTable :value="data.form" responsiveLayout="scroll" class="p-datatable-sm">
                    <template #header>
                        <div class="table-header">
                            Documents
                        </div>
                    </template>
                    <Column field="title" header="Title"></Column>
                    <Column field="note" header="Note"></Column>
                    <Column header="File">
                        <template #body="slotProps">
                            <div class="file-image" v-if="slotProps.data.file">
                                <img 
                                    v-if="checkFileName(slotProps.data.file.name).image" 
                                    :src="ObjectURL(slotProps.data.file)"
                                >
                                <video  controls  v-else-if="checkFileName(slotProps.data.file.name).video">
                                    <source :src="ObjectURL(slotProps.data.file)" />
                                </video>
                                <span v-else-if="checkFileName(slotProps.data.file.name).pdf"><i class="pi pi-pdf " style="font-size: 5rem"></i></span>
                                <span v-else-if="checkFileName(slotProps.data.file.name).file"><i class="pi pi-file " style="font-size: 5rem"></i></span>
                                <span v-else><i class="pi pi-file-excel" style="font-size: 5rem"></i></span>
                                <span class="text-center">
                                    {{slotProps.data.file.name.substring(0,8)}} {{slotProps.data.file.name.length>8?'...':''}}
                                </span>
                            </div>
                            <div v-else></div>
                        </template>
                    </Column>
                    <Column header="Delete">
                        <template #body="slotProps">
                            <div class="delete">
                                <Button 
                                    icon="pi pi-trash " 
                                    @click="deleteFromTable(slotProps.index)" 
                                    class="p-button-rounded p-button-danger"
                                />
                            </div>
                        </template>
                    </Column>
                    <template #footer>
                        In total there are {{data.form ? data.form.length : 0 }} Documents.
                    </template>
                </DataTable>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-xl-3">
                <div class="input-wrapper my-2">
                    <h4>{{lang[local].comment.label}}</h4>
                    <Textarea v-model="data.comment" :placeholder="lang[local].comment.placeholder" rows="3" 
                        :class="{'p-invalid':$v.data.comment.$invalid}" />
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.comment.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].comment.label) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.comment.minLen">
                            {{errors.minLengthError(lang[local].comment.label,$v.data.comment.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.comment.maxLen">
                            {{errors.maxLengthError(lang[local].comment.label, $v.data.comment.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-actions row">
            <div class="col-12">
                <div class="btns-wrapper">
                    <div class="save-btn">
                        <Button label="Save" />
                    </div>
                    <div class="cancel-btn">
                        <Button label="Cancel" class="p-button-danger" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';
import { minLengthError, maxLengthError, inputError,htmlTagsError,fileSizeError } from "../helpers/errors";
import { maxLength, minLength } from "vuelidate/lib/validators";
import { notContainsHtmlTags,fileExtension ,fileSize } from "../helpers/customValidators";
import Button from "primevue/button";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
export default {
    components:{
        InputText,
        Button,
        Textarea,
        DataTable,
        Column
    },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            data:{
                patientId:"",
                form:[],
                comment:''
            },
            initialObject:{
                    title:"",
                    note:"",
                    file:""
            },
            lang:{
                en:{
                    note:{
                        label:"Comment",
                        placeholder:"text..."
                    },
                    title:{
                        label:"Title",
                        placeholder:"text..."
                    },
                    comment:{
                        label:"Overall Comment",
                        placeholder:"text..."
                    }
                },
                ar:{
                    note:{
                        label:"Comment",
                        placeholder:"text..."
                    },
                    title:{
                        label:"Title",
                        placeholder:"text..."
                    },
                    comment:{
                        label:"Overall Comment",
                        placeholder:"text..."
                    }
                }
            },
            errors: {
            minLengthError,
            maxLengthError,
            inputError,
            htmlTagsError,
            fileSizeError
            },
            ObjectURL:window.URL.createObjectURL
        }
    },
    validations:{
            initialObject:{
                note:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                            return notContainsHtmlTags(val);
                        },
                },
                title:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                            return notContainsHtmlTags(val);
                        },
                },
                file:{
                    fileExtension(val){
                        if (!val) return true;
                            return fileExtension(val);
                    },
                    fileSize(val){
                        if (!val) return true;
                            return fileSize(val,5*1000*1024,5*1000*1024,10*1000*1024);
                    }
                },
            },
            data:{
                comment:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                            return notContainsHtmlTags(val);
                        },
                },
            },
    },
    methods:{
        addToTable(){
            if(!this.$v.initialObject.$invalid){
                // let file =this.getBase64(this.initialObject.file)
                // console.log(file)
                // this.initialObject.file=file;
                this.data.form.push({...this.initialObject});
                // console.log(this.initialObject)
                this.initialObject={
                    title:"",
                    note:"",
                    file:""
                };
                this.$v.initialObject.$reset()
            }
        },
        deleteFromTable(index){
            this.data.form.splice(index,1) ;
            
        },
        getFielFromBtn(event){
            this.initialObject.file=event.target.files[0]
        },
        checkFileName(name){
            let type =  {video:false,image:false,pdf:false,file:false}
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
            else if(name.endsWith('pdf')){
                type.pdf = true  ; 
                return type
            }
            else if(name.endsWith('docx') ||name.endsWith("ppt") || name.endsWith("pptx") || name.endsWith("doc") || name.endsWith("txt")){
                type.file = true  ; 
                return type
            }
            return type ;
        },
        deleteFileItem(){
            this.initialObject.file="";
        },
        getBase64(file) {
            let result 
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload =  ()=> {
                result=reader.result
            };
            return result ;
        }
    },
}
</script>
<style lang="scss" scoped>
.form{
    .input-wrapper{
        /deep/.p-button.custom-btn{
            background-color: transparent;
            background-image: none;
            .pi{
                font-size: 1.5rem;
            }
        }
    }
    /deep/.table-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    /deep/.p-datatable.p-datatable-sm .p-datatable-tbody>tr>td{
        // text-align: center;
    }
    .delete{
        /deep/.p-button{
            .p-button-icon{
                color: #fff ;
            }
        }
    }
    .file-image {
        width: 100%;
        // box-shadow: 0 3px 6px rgba(226, 224, 224, 0.16), 0 3px 6px rgba(228, 225, 225, 0.23)
    }
    video,img{
                width: 100%;
                height: 100%;
    }
    .display-file{
        .file-box{
            width:100px ;
            height: 100px;
            position: relative;
            video , img{
                width: 100%;
                height: 100%;
            }
            .delete{
                position: absolute;
                padding:3px;
                background:white;
                border-radius: 50%;
                right: -15px;
                top: -15px;
            }
        }
    }
    .form-actions{
        .btns-wrapper{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            .save-btn,.cancel-btn{
                .p-button{
                    width:150px;
                }
            }
        }
    }
}
</style>