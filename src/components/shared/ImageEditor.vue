<template>
    <div class="imageEditorApp">
        <Dialog 
            header="Edit Image" 
            :visible.sync="displayMaximizable" 
            :maximizable="true" 
            :modal="true"
            :closable="false"
        >
            <tui-image-editor ref="tuiImageEditor" :include-ui="useDefaultUI" :options="options"></tui-image-editor>
            <template #footer>
                <div class="dialog-btns">
                    <div class="upload-btn">
                            <Button @click="upload" label="Upload" icon="pi pi-paperclip"></Button>
                    </div>
                    <div class="main-btns">
                        <Button label="Cancel" icon="pi pi-times" @click="closeMaximizable" class="p-button-danger my-2" />
                        <Button label="Save" icon="pi pi-check" @click="save" class="my-2" autofocus />
                    </div>
                </div>
            </template>
        </Dialog>
    </div>
</template>
<script>
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import ImageEditor from '@toast-ui/vue-image-editor/src/ImageEditor.vue'
const icona = require("tui-image-editor/dist/svg/icon-a.svg");
const iconb = require("tui-image-editor/dist/svg/icon-b.svg");
const iconc = require("tui-image-editor/dist/svg/icon-c.svg");
const icond = require("tui-image-editor/dist/svg/icon-d.svg");
const blackTheme = {
 "menu.normalIcon.path": icond,
 "menu.activeIcon.path": iconb,
 "menu.disabledIcon.path": icona,
 "menu.hoverIcon.path": iconc
};
export default {
    props:{
        templateName:{
            type:String,
        }
    },
    components: {
        Dialog,
        Button,
        "tui-image-editor": ImageEditor
    },
    data() {
        return {
            // dialog variables 
            displayMaximizable: false,
            // image variables 
            inputImage:null,
            outputImage:null,
            // image Editor variables 
            useDefaultUI: true,
            options: {
            cssMaxWidth: window.innerWidth,
            cssHeight: 800,
            includeUI: {
                menuBarPosition:'left',
                loadImage: {
                    path: require(`../../assets/imageEditorTemplates/${this.templateName}`),
                    name:'template image'
                },
                theme: blackTheme
            },
            //  initMenu: "filter"
            }
        };
    },
    methods: {
        openMaximizable() {
                this.displayMaximizable = true;
                if(!this.outputImage){
                    this.options.includeUI.loadImage.path=require(`../../assets/imageEditorTemplates/${this.templateName}`)
                }
        },
        closeMaximizable() {
            this.displayMaximizable = false;
        },
        upload(){
            this.$refs.tuiImageEditor.$el.children[2].children[0].children[1].children[0].children[0].click()
        },
        save() {
            this.outputImage = this.$refs.tuiImageEditor.invoke("toDataURL");
            this.$emit('templateChanged',this.outputImage);
            this.closeMaximizable();
            this.options.includeUI.loadImage.path=this.outputImage
        },
        delete(){
            this.outputImage=null;
            this.$emit('templateChanged',this.outputImage);
            if(!this.outputImage){
                this.options.includeUI.loadImage.path=require(`../../assets/imageEditorTemplates/${this.templateName}`)
            }
        },
    }
};
</script>
<style lang="scss" scoped>
/deep/ .p-dialog{
    min-width:50vw;
    .p-dialog-content{
        height: 100%;
        height: 60vh;
    }
    .dialog-btns{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .pi{
            color: white;
        }
    }
}
.imageEditorApp {
    // width: 100%;
    // height: 100%;
//  width: 95vw;
//  height: calc(100vh - 150px);
//  margin: 0 auto;
 /deep/.tui-image-editor-header-buttons{
  display: none;
 }

 /deep/.tui-image-editor-header-logo{
   display: none;
 }

 /deep/.tui-image-editor-help-menu .top{
   display: flex;
 }
 /deep/.tui-image-editor-container.left{
     min-height: 530px;
 }
/deep/.tui-image-editor-container.left .tui-image-editor-main-container{
    left: 64px;
    width: calc(100% - 128px);
    height: 100%;
    right: 64px;
}
 /deep/.tui-colorpicker-clearfix{
     display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    li{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 7px;
        input{
            width: 100%;
            height: 100%;
            margin: 0;
            font-size: 0px;
        }
    }
 }



 /deep/.tui-image-editor-container .tui-image-editor-menu > .tui-image-editor-item.active, .tui-image-editor-container .tui-image-editor-help-menu > .tui-image-editor-item.active{
     background: $tradmark-color;
 }

 /deep/.tui-image-editor-menu use.normal.use-default, .tui-image-editor-help-menu use.normal.use-default{
    fill-rule: evenodd;
    fill: $tradmark-color;
    stroke: $tradmark-color;
 }

 /deep/.tui-image-editor-menu use.active.use-default, .tui-image-editor-help-menu use.active.use-default{
    fill-rule: evenodd;
    fill: white;
    stroke: white;
 }

 /deep/.tui-image-editor-menu use.hover.use-default, .tui-image-editor-help-menu use.hover.use-default{
    fill-rule: evenodd;
    fill: white;
    stroke: white;
 }

 /deep/.tui-image-editor-submenu use.normal.use-default{
     fill-rule: evenodd;
     fill: white;
     stroke: white;
 }

 /deep/.tui-image-editor-submenu use.active.use-default{
    fill-rule: evenodd;
    fill: $tradmark-color;
    stroke: $tradmark-color;
 }

 /deep/.tui-image-editor-container .tui-image-editor-submenu .tui-image-editor-button > label, .tui-image-editor-container .tui-image-editor-range-wrap.tui-image-editor-newline.short label, .tui-image-editor-container .tui-image-editor-range-wrap.tui-image-editor-newline.short label > span{
     color: white;
     &:hover{
         color: $tradmark-color;
     }
 }

/deep/.tui-image-editor-container .tui-image-editor-help-menu.right{
    width: 64px;
    background-color: #151515;
    height: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
/deep/.tui-image-editor-container .tui-image-editor-menu, .tui-image-editor-container .tui-image-editor-help-menu{
    width: 64px;
    background-color: #151515;
    height: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

}
 /deep/.tui-image-editor-help-menu .tui-image-editor-item .svg_ic-menu .normal.use-default{
    fill-rule: evenodd;
    fill: $tradmark-color;
    stroke: $tradmark-color;
    &:hover{
        fill-rule: evenodd;
        fill: white;
        stroke: white;
    }
 }
 /deep/.tui-image-editor-help-menu .tui-image-editor-item .svg_ic-menu .hover.use-default{
        fill-rule: evenodd;
        fill: white;
        stroke: white;
 }

}

</style>