<template>
    <div class="diagnosis-glallary-xray my-4">
        <Message  severity="warn" v-if="showSelectError"> {{lang[local].selectError}}</Message>
        <Message  severity="error" v-if="typeError" > {{errors.imageTypeError()}}</Message>
        <Message  severity="error" v-if="sizeError" > {{errors.imageSizeError(5)}}</Message>
        <h3 class="my-4" v-if="selectedTooth">{{ lang[local].selectTooth}} {{ lang[local][selectedTooth]}}</h3>
        <div class="row">
            <div class="col-md-6">
                <div class="repeated-images d-flex flex-wrap">
                    <div class="tooth-xray mx-4">
                        <h3 class="action-title"> {{lang[local].teethXray}}</h3>
                        <div class="actions d-flex">
                            <div class="attach-image m-2">
                                <img src="../../../UI/icons/clinic/attach.svg" @click="selectedTooth?$refs[`teethXrayAttavhFile${selectedTooth}`][0].click():showSelectError=true" alt="">
                                
                                <input  v-for="i in theethKeys" :key="i"   type="file" accept="image/*"  style="display:none" @change="TeethXraySetImage"     :ref="`teethXrayAttavhFile${i}`"/>
                                
                            </div>
                            <!-- <div class="check-image  m-2">
                                <img src="../../../UI/icons/clinic/check.svg"  alt="">
                            </div> -->
                            <div class="edit-image  m-2">
                                <img src="../../../UI/icons/clinic/edit.svg" @click="TeethXrayEditImage" alt="">
                            </div>
                            <div class="trash-image  m-2">
                                <img src="../../../UI/icons/clinic/trash.svg" @click="TeethXrayDeleteImage" alt="">
                            </div>
                        </div>
                        <div class="empty-box" >
                            <img :src="toothNumbers[selectedTooth].images.xray" v-if="selectedTooth&&toothNumbers[selectedTooth].images.xray" width="100%" height="100%" >
                        </div>
                    </div>
                    <div class="image mx-4">
                        <h3 class="action-title"> {{lang[local].image}}</h3>
                        <div class="actions d-flex">
                            <div class="attach-image m-2">
                                <img src="../../../UI/icons/clinic/attach.svg" @click="selectedTooth?$refs[`imageAttavhFile${selectedTooth}`][0].click():showSelectError=true" alt="">
                                <input v-for="i in theethKeys" :key="i" accept="image/*" type="file" style="display:none" @change="imageSetImage"    :ref="`imageAttavhFile${i}`"/>
                            </div>
                            <!-- <div class="check-image  m-2">
                                <img src="../../../UI/icons/clinic/check.svg"  alt="">
                            </div> -->
                            <div class="edit-image  m-2">
                                <img src="../../../UI/icons/clinic/edit.svg" @click="imageEditImage" alt="">
                            </div>
                            <div class="trash-image  m-2">
                                <img src="../../../UI/icons/clinic/trash.svg" @click="imageDeleteImage" alt="">
                            </div>
                        </div>
                        <div class="empty-box" >
                            <img :src="toothNumbers[selectedTooth].images.image" v-if="selectedTooth&&toothNumbers[selectedTooth].images.image" width="100%" height="100%" >
                        </div>
                        <!-- <div class="empty-box" >
                                <img :src="editedImage" v-if="editedImage" width="100%" height="100%" >
                        </div> -->
                    </div>
                </div>

            </div>
            <div class="col-md-6">
                <div class="d-flex flex-wrap">
                    <div class="panoramic-Xray mx-4">
                        <h3 class="action-title"> {{lang[local].panoramicXray}}</h3>
                        <div class="actions d-flex">
                            <div class="attach-image m-2">
                                <img src="../../../UI/icons/clinic/attach.svg" @click="$refs.panoramicXrayAttavhFile.click()" alt="">
                                <input accept="image/*" type="file" style="display:none"  @input="panoramicXraySetImage"  ref="panoramicXrayAttavhFile"/>
                            </div>
                            <!-- <div class="check-image  m-2">
                                <img src="../../../UI/icons/clinic/check.svg"  alt="">
                            </div> -->
                            <div class="edit-image  m-2">
                                <img src="../../../UI/icons/clinic/edit.svg" @click="panoramicXrayEditImage" alt="">
                            </div>
                            <div class="trash-image  m-2">
                                <img src="../../../UI/icons/clinic/trash.svg" @click="panoramicXrayDeleteImage" alt="">
                            </div>
                        </div>
                        <div class="empty-box" >
                            <img :src="toothNumbers.images.panoramicXray" v-if="toothNumbers.images.panoramicXray" width="100%" height="100%" >
                        </div>
                    </div>
                    <div class="panoramic-image mx-4">
                        <h3 class="action-title"> {{lang[local].panoramicImage}}</h3>
                        <div class="actions d-flex">
                            <div class="attach-image m-2">
                                <img src="../../../UI/icons/clinic/attach.svg" @click="$refs.panoramicImageAttavhFile.click()" alt="">
                                <input accept="image/*" type="file" style="display:none" @input="panoramicImageSetImage"  ref="panoramicImageAttavhFile"/>
                            </div>
                            <!-- <div class="check-image  m-2">
                                <img src="../../../UI/icons/clinic/check.svg"  alt="">
                            </div> -->
                            <div class="edit-image  m-2">
                                <img src="../../../UI/icons/clinic/edit.svg" @click="panoramicImageEditImage" alt="">
                            </div>
                            <div class="trash-image  m-2">
                                <img src="../../../UI/icons/clinic/trash.svg" @click="panoramicImageDeleteImage" alt="">
                            </div>
                        </div>
                        <div class="empty-box" >
                            <img :src="toothNumbers.images.panoramicImage" v-if="toothNumbers.images.panoramicImage" width="100%" height="100%" >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div >
            <ImageEdit  @close="display.xray=false"  v-if="inputImages.xray" :displayControl="{display:display.xray}" @getImage="TeethXrayGetEditedImage" :image="inputImages.xray"></ImageEdit>
            <ImageEdit  @close="display.image=false" v-if="inputImages.image" :displayControl="{display:display.image}" @getImage="imageGetEditedImage" :image="inputImages.image"></ImageEdit>
            <ImageEdit  @close="display.panoramicXray=false" v-if="inputImages.panoramicXray" :displayControl="{display:display.panoramicXray}" @getImage="panoramicXrayGetEditedImage" :image="inputImages.panoramicXray"></ImageEdit>
            <ImageEdit  @close="display.panoramicImage=false" v-if="inputImages.panoramicImage"  :displayControl="{display:display.panoramicImage}" @getImage="panoramicImageGetEditedImage" :image="inputImages.panoramicImage"></ImageEdit>
        </div>
    
    </div>
</template>
<script>
import Message from 'primevue/message';
import {imageType,imageSize} from "../../helpers/customValidators";
import {imageTypeError ,imageSizeError} from "../../helpers/errors";


export default {
    props:["selectedTooth","toothNumbers","imagesErrors"],
    components:{
        Message,
        ImageEdit:()=>import("../../shared/ImageEditorWithImage.vue")
    },
    data(){
        return {
            rebuidInput:true ,
            display:{
                xray:false,
                image:false,
                panoramicXray:false,
                panoramicImage:false
            },
            showSelectError:false,
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                ar:{
                    teethXray:"Teeth Xray",
                    image:"image",
                    panoramicXray:"panoramic Xray",
                    panoramicImage:"panoramic image",
                    selectError:"please select a tooth",
                    selectTooth:"selected tooth",
                    one:1,
                    two:2,
                    three:3,
                    four:4,
                    five:5,
                    six:6,
                    seven:7,
                    eight:8,
                    nine:9,
                    ten:10,
                    eleven:11,
                    twelve:12,
                    thirteen:13,
                    fourteen:14,
                    fifteen:15,
                    sixteen:16,
                    seventeen:17,
                    eighteen:18,
                    nineteen:19,
                    twenty:20,
                    twentyOne:21,
                    twentyTwo:22,
                    twentyThree:23,
                    twentyFour:24,
                    twentyFive:25,
                    twentySix:26,
                    twentySeven:27,
                    twentyEight:28,
                    twentyNine:29,
                    thirty:30,
                    thirtyOne:31,
                    thirtyTwo:32,
                },
                en:{
                    teethXray:"Teeth Xray",
                    image:"image",
                    panoramicXray:"panoramic Xray",
                    panoramicImage:"panoramic image",
                    selectError:"please select a tooth",
                    selectTooth:"selected tooth",
                    one:1,
                    two:2,
                    three:3,
                    four:4,
                    five:5,
                    six:6,
                    seven:7,
                    eight:8,
                    nine:9,
                    ten:10,
                    eleven:11,
                    twelve:12,
                    thirteen:13,
                    fourteen:14,
                    fifteen:15,
                    sixteen:16,
                    seventeen:17,
                    eighteen:18,
                    nineteen:19,
                    twenty:20,
                    twentyOne:21,
                    twentyTwo:22,
                    twentyThree:23,
                    twentyFour:24,
                    twentyFive:25,
                    twentySix:26,
                    twentySeven:27,
                    twentyEight:28,
                    twentyNine:29,
                    thirty:30,
                    thirtyOne:31,
                    thirtyTwo:32,
                }
            },
            inputImages:{
                xray:null,
                image:null,
                panoramicXray:null,
                panoramicImage:null
            },
            errors:{
                imageTypeError,
                imageSizeError
            },
            validators:{
                imageType,
                imageSize

            },
            typeError:false,
            sizeError:false,
            events:{
                xray:null,
                image:null,
                panoramicXray:null,
                panoramicImage:null
            },
            theethKeys:[
                "one",
                "two",
                "three",
                "four",
                "five",
                "six",
                "seven",
                "eight",
                "nine",
                "ten",
                "eleven",
                "twelve",
                "thirteen",
                "fourteen",
                "fifteen",
                "sixteen",
                "seventeen",
                "eighteen",
                "nineteen",
                "twenty",
                "twentyOne",
                "twentyTwo",
                "twentyThree",
                "twentyFour",
                "twentyFive",
                "twentySix",
                "twentySeven",
                "twentyEight",
                "twentyNine",
                "thirty",
                "thirtyOne",
                "thirtyTwo",
            ],
            

        }
    },

    watch:{
        selectedTooth(){
            if(this.selectedTooth)
            this.showSelectError = false ;
        },
        
    },

    methods:{
        TeethXraySetImage(event){
            if(this.selectedTooth){
                this.inputImages.xray=null ;
                this.events.xray = event.target
                let file=event.target.files[0];
                if(this.validators.imageType(file)){
                    this.imagesErrors.type=false ;
                    this.typeError =false ;
                    if(this.validators.imageSize(file,5*1000*1024)){
                        this.imagesErrors.size = false;
                        this.sizeError = false ;
                        this.inputImages.xray = window.URL.createObjectURL(file);
                        this.display.xray = true ;
                    }else{
                        this.sizeError = true ;
                        if(!this.inputImages.xray)
                            this.imagesErrors.size=true
                    }
                    event.target.value = "" ;
                }
                else{
                    this.typeError = true ;
                    if(!this.inputImages.xray) 
                        this.imagesErrors.type = true ;
                }
            }else{
                this.showSelectError=true;
            }
        },
        TeethXrayGetEditedImage(value){
            this.toothNumbers[this.selectedTooth].images.xray =value ;
            this.inputImages.xray=null ;
            this.display.xray = false ;
        },
        TeethXrayEditImage(){
            this.inputImages.xray=null ;
            if(!this.selectedTooth){
                this.showSelectError=true ;
                return 
            }
            if(this.toothNumbers[this.selectedTooth].images.xray){
                this.inputImages.xray = window.URL.createObjectURL(this.dataURLtoFile(this.toothNumbers[this.selectedTooth].images.xray,this.makeid(20)));
                this.display.xray = true ;
            }
        },
        TeethXrayDeleteImage(){
            if(this.selectedTooth){
                this.inputImages.xray = null ;
                this.toothNumbers[this.selectedTooth].images.xray = null ;
                this.display.xray = false ;
                if(this.events.xray)
                    this.events.xray.value = ""
            }
        },
        imageSetImage(event){
        if(this.selectedTooth){
                this.inputImages.image=null ;
                this.events.image = event.target
                let file=event.target.files[0];
                if(imageType(file)){
                    this.imagesErrors.type=false ;
                    this.typeError =false ;
                    if(imageSize(file,5*1000*1024)){
                        this.imagesErrors.size = false;
                        this.sizeError = false ;
                        this.inputImages.image = window.URL.createObjectURL(file);
                        this.display.image = true ;
                        
                    }else{
                        this.sizeError = true ;
                        if(!this.inputImages.image)
                            this.imagesErrors.size=true
                    }
                    
                }
                else{
                    this.typeError = true ;
                    if(!this.inputImages.image) 
                        this.imagesErrors.type = true ;
                }
                event.target.value = ""
            }else{
                this.showSelectError=true;
            }
        },
        imageGetEditedImage(value){
            this.toothNumbers[this.selectedTooth].images.image =value ;
            this.display.image = false ;
            this.inputImages.image=null ;
        },
        imageEditImage(){
            this.inputImages.image =null ;
            if(!this.selectedTooth){
                this.showSelectError=true ;
                return 
            }
            if(this.toothNumbers[this.selectedTooth].images.image){
                this.inputImages.image = window.URL.createObjectURL(this.dataURLtoFile(this.toothNumbers[this.selectedTooth].images.image,this.makeid(20)));
                this.display.image = true ;
            }
        },
        imageDeleteImage(){
            if(this.selectedTooth){
                this.inputImages.image = null ;
                this.toothNumbers[this.selectedTooth].images.image = null ;
                this.display.image = false ;
                if(this.events.image)
                    this.events.image.value = ""
            }
        },
        panoramicXraySetImage(event){
                this.inputImages.panoramicXray=null;
                let file=event.target.files[0];
                this.events.panoramicXray = event.target
                if(imageType(file)){
                    this.imagesErrors.type=false ;
                    this.typeError =false ;
                    if(imageSize(file,5*1000*1024)){
                        this.imagesErrors.size = false;
                        this.sizeError = false ;
                        this.inputImages.panoramicXray = window.URL.createObjectURL(file);
                        this.display.panoramicXray = true ;
                        
                    }else{
                        this.sizeError = true ;
                        if(!this.inputImages.panoramicXray)
                            this.imagesErrors.size=true
                    }
                    event.target.value = ""
                }
                else{
                    this.typeError = true ;
                    if(!this.inputImages.panoramicXray) 
                        this.imagesErrors.type = true ;
                }
            
        },
        panoramicXrayGetEditedImage(value){
                this.toothNumbers.images.panoramicXray =value;
                this.display.panoramicXray = false ; 
                this.inputImages.panoramicXray=null;
        },
        panoramicXrayEditImage(){
            this.inputImages.panoramicXray=null;
            if(this.toothNumbers.images.panoramicXray){
                this.inputImages.panoramicXray = window.URL.createObjectURL(this.dataURLtoFile(this.toothNumbers.images.panoramicXray,this.makeid(20)));
                this.display.panoramicXray = true ;
            }
        },
        panoramicXrayDeleteImage(){
                this.inputImages.panoramicXray = null ;
                this.toothNumbers.images.panoramicXray = null ;
                this.display.panoramicXray = false ;
                if(this.events.panoramicXray)
                    this.events.panoramicXray.value = ""
            
        },
        panoramicImageSetImage(event){
            this.inputImages.panoramicImage=null ;
                let file=event.target.files[0];
                this.events.panoramicImage = event.target
                if(imageType(file)){
                    this.imagesErrors.type=false ;
                    this.typeError =false ;
                    if(imageSize(file,5*1000*1024)){
                        this.imagesErrors.size = false;
                        this.sizeError = false ;
                        this.inputImages.panoramicImage = window.URL.createObjectURL(file);
                        this.display.panoramicImage = true ;
                        
                    }else{
                        this.sizeError = true ;
                        if(!this.inputImages.panoramicImage)
                            this.imagesErrors.size=true
                    }
                    event.target.value=""
                }
                else{
                    this.typeError = true ;
                    if(!this.inputImages.panoramicImage) 
                        this.imagesErrors.type = true ;
                }
            
        },
        panoramicImageGetEditedImage(value){
                this.toothNumbers.images.panoramicImage =value ;
                this.display.panoramicImage = false ; 
                this.inputImages.panoramicImage=null;
        },
        panoramicImageEditImage(){
            this.inputImages.panoramicImage =null ;
            if(this.toothNumbers.images.panoramicImage){
                this.inputImages.panoramicImage = window.URL.createObjectURL(this.dataURLtoFile(this.toothNumbers.images.panoramicImage,this.makeid(20)));
                this.display.panoramicImage = true ;
            }
        },
        panoramicImageDeleteImage(){
                this.inputImages.panoramicImage = null ;
                this.toothNumbers.images.panoramicImage = null ;
                this.display.panoramicImage = false ;
                if(this.events.panoramicImage)
                    this.events.panoramicImage.value = ""
            
        },
        dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
        },
        makeid(length) {
                var result= '';
                var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * 
            charactersLength));
            }
            return result+".jpeg";
        }
    }
    
}
</script>

<style lang="scss" scoped>
.empty-box{
    background: #FFF;
    width: 150px;
    height: 150px;
    border:1px solid  $tradmark-color ;
}
.actions{
   div{
    img{
        cursor: pointer;
    }
}
}
.image-enitor{
    position: absolute;
    top: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 100;
}

</style>
