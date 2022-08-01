<template>
    <div class="custom-drop-menu ">
        <div class="menu-head">
            <Button :label="label.toString()" icon="pi pi-angle-down" iconPos="right" @click="toggle" class="custom-button my-2" />
        </div>
        <OverlayPanel ref="op" :showCloseIcon="false" :dismissable="true">
            <div class="menu-body d-flex gap-4 ">
                <div v-for="(option,outer) in options" :key="outer" class="column" >
                    <span v-for="(item,inner) in option" :key="inner" class="item d-flex align-item-center justify-content-center" @click="concateItems(item,outer)">
                        {{item}}
                    </span>
                </div>
            </div>
        </OverlayPanel>
    </div>
</template>
<script>
import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';
export default {
    props:{
        options:{
            type:Array,
            required:true
        },
        data:{
            type:Object,
            required:true
        },
        selectionKey:{
            type:String,
            required:true
        },
        preLabel:{
            type:String
        },
        excludeColumn:{
            type:Number
        },
    },
    components:{
        Button,
        OverlayPanel
    },
    data(){
        return{
            label:'status',
        }
    },
    mounted(){
        this.init();
    },
    watch:{
        data:{
            handler(){
                this.concateItems();
            },
            deep:true,
        },
    },
    methods:{
        toggle(event) {
            this.$refs.op.toggle(event);
        },
        init(){
            let columns=this.options.length;
            for(let i=0; i<columns;i++){
                this.data[this.selectionKey][i]=''
            }
        },
        concateItems(item,outer){
            this.data[this.selectionKey][outer]=item
            if(this.preLabel){
                this.label=this.preLabel+this.data[this.selectionKey].reduce((a, b) => a + b)
            }
            else if(typeof(this.excludeColumn)=="number"){
                if(this.data[this.selectionKey].length>2){
                    this.label=this.data[this.selectionKey][this.excludeColumn] +
                    this.data[this.selectionKey].slice(1,).reduce((a, b) => a + b)
                }
            }
            else
                this.label =this.data[this.selectionKey].reduce((a, b) => a + b )           
        },
    },
}
</script>
<style lang="scss" scoped>
.custom-drop-menu{
    /deep/.pi{
        color: $tradmark-color;
    }
    .menu-head{
        /deep/.p-button{
            width: 100%;
            height: 40px;
            background: #ffffff;
            color: $secondary-color-2;
            border: 1px solid $secondary-color-2;
            transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
            border-radius: 34px;
            font-weight: normal;
        }
    }
    .menu-body{
        .item{
            color: $secondary-color-3;
            &:hover{
                color: $secondary-color-2;
                cursor: pointer;
            }
        }
    }
}
</style>