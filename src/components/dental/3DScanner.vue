<template>
    <div class="3d-sccanner">
        <Message class="3d-viewer my-3"   severity="error"  v-if="notValid" > {{lang[local].notValid}}</Message>
        <div class="row">
            <div class="col-md-6 col-lg-5 col-xl-4">
                <div class="view-type d-flex align-items-center ">
                    <div class="flex-grow-1">
                        <Dropdown v-model="data.viewType" :placeholder="lang[local].placeholder" :options="typeOfView" :optionLabel="local=='ar'?'arabic':'english'"></Dropdown>
                    </div>
                    <div class="attach-image mx-2">
                        <img src="../../UI/icons/clinic/attach.svg" style="cursor: pointer;" @click="$refs.input3dScanner.click()" alt="">
                        <input  type="file"   style="display:none" @input="getUploaded3D"    ref="input3dScanner"/>
                    </div>
                    <div class="attach-image mx-2">
                        <img src="../../UI/icons/clinic/trash.svg" style="cursor: pointer;" @click="deteteImage()" alt="">
                    </div>
                </div>
            </div>
        </div>
        
        <div class="3d-viewer my-5" v-if="displayImage" >
            <input type="color" v-model="bgColor">
            <ModelObj :backgroundColor.sync="bgColor" :src="displayImage" v-if="extension=='obj'"></ModelObj>
            <ModelThree :backgroundColor.sync="bgColor" :src="displayImage" v-else-if="extension=='json'"></ModelThree>
            <ModelStl :backgroundColor.sync="bgColor" :src="displayImage" v-else-if="extension=='stl'"></ModelStl>
            <ModelCollada :backgroundColor.sync="bgColor" :src="displayImage" v-else-if="extension=='dae'"></ModelCollada>
            <ModelPly :backgroundColor.sync="bgColor" :src="displayImage" v-else-if="extension=='ply'"></ModelPly>
            <ModelFbx :backgroundColor.sync="bgColor" :src="displayImage" v-else-if="extension=='fbx'"></ModelFbx>
            <ModelGltf :backgroundColor.sync="bgColor" :src="displayImage" v-else-if="extension=='gltf'"></ModelGltf>
        </div>
    </div>
</template>
<script >
import { ModelObj, ModelThree,ModelStl,ModelCollada ,ModelPly,ModelFbx,ModelGltf } from 'vue-3d-model';
import Dropdown from 'primevue/dropdown';
import Message from 'primevue/message';
export default {
    components:{
        Dropdown,
        Message,
        ModelObj,
        ModelThree,
        ModelStl,
        ModelCollada,
        ModelPly,   
        ModelFbx,
        ModelGltf,
        
    },
    props:['data'],
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    placeholder:"Type of view",
                    notValid:"not Valid  3d extension"
                },
                ar:{
                    placeholder:"Type of view",
                    notValid:"not Valid  3d extension"
                }
            },
            typeOfView:[
                {
                    english:"Upper Half",
                    arabic:"Upper Half",
                },
                {
                    english:"lower Half",
                    arabic:"lower Half",
                },
                {
                    english:"all theeth",
                    arabic:"all theeth",
                },
            ],
            notValid:false,
            displayImage:null,
            extension:null,
            bgColor:'#fff' ,
            file:null 
        }
    },
    methods:{
        getUploaded3D(event){
            let file=event.target.files[0];
            this.notValid = false ; 
            this.data.image=null ;
            this.displayImage = null ; 
            this.extension = null ; 
            this.file = event.target ; 
            if(
                file.name.endsWith('fbx') || 
                file.name.endsWith('dae') || 
                file.name.endsWith('babylon') || 
                file.name.endsWith('blend')||
                file.name.endsWith('clara')||
                file.name.endsWith('stl')||
                file.name.endsWith('ply')||
                file.name.endsWith('json')||
                file.name.endsWith('obj')||
                file.name.endsWith('x3d')
                ){
                this.displayImage= window.URL.createObjectURL(file);
                if(file.name.endsWith('fbx'))
                    this.extension = 'fbx'
                else if(file.name.endsWith('dae'))
                    this.extension = 'dae'
                else if(file.name.endsWith('babylon'))
                    this.extension = 'babylon'
                else if(file.name.endsWith('blend'))
                    this.extension = 'blend'
                else if(file.name.endsWith('clara'))
                    this.extension = 'clara'
                else if(file.name.endsWith('stl'))
                    this.extension = 'stl'
                else if(file.name.endsWith('json'))
                    this.extension = 'json'
                else if(file.name.endsWith('obj'))
                    this.extension = 'obj'
                else if(file.name.endsWith('x3d'))
                    this.extension = 'x3d'
                else if(file.name.endsWith('ply'))
                    this.extension = 'ply'
                else if(file.name.endsWith('gltf'))
                    this.extension = 'gltf'
                this.getBase64(file)
                this.notValid = false ; 
            }
            else{
                this.notValid=true
            }
            this.$emit("notValid",this.notValid)
            

        },
        deteteImage(){
            this.notValid=false ; 
            this.data.image=null ;
            this.displayImage = null ; 
            this.extension = null ;
            if(this.file)
            this.file.value = null ;
        },
        getBase64(file) {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    this.data.image =reader.result
                };
            }
        }
}
</script>