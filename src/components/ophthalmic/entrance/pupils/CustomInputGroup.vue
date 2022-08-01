<template>
    <div class="input-group-wrapper row my-2">
        <div class="input-wrapper col-2"><label>{{label}}</label></div>
        <div class="input-wrapper col-3"><InputText type="decimal" v-model="data.pupils.od[keyModel]" :placeholder="placeholder" /></div>
        <div class="input-wrapper copy-controllers col-2" :class="{'invisible':!visibleControllers}">
            <div class="left-arrow">
                <Button
                    class="p-button-rounded p-button-sm p-button p-component p-button-icon-only" 
                    icon="pi pi-angle-left" 
                    @click="copyToOd"
                />
            </div>
            <div class="right-arrow">
                <Button
                    class="p-button-rounded p-button-sm p-button p-component p-button-icon-only" 
                    icon="pi pi-angle-right"  
                    @click="copyToOs" 
                />
            </div>
        </div>
        <div class="input-wrapper col-3"><InputText type="decimal" v-model="data.pupils.os[keyModel]" :placeholder="placeholder" /></div>
    </div>
</template>
<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
export default {
    props:{
        data:{
            type:Object,
            required:true
        },
        label:{
            type:String,
            required:true
        },
        visibleControllers:{
            type:Boolean,
            default:false            
        },
        keyModel:{
            type:String,
            required:true
        },
        placeholder:{
            type:String,
        },
    },
    components:{
        InputText,
        Button
    },
    methods:{
        copyToOd(){
                this.data.pupils.od=JSON.parse(JSON.stringify(this.data.pupils.os));
        },
        copyToOs(){
            this.data.pupils.os=JSON.parse(JSON.stringify(this.data.pupils.od));
        },
    },
}
</script>
<style lang="scss" scoped>
    .input-group-wrapper{
        .copy-controllers{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            .left-arrow,.right-arrow{
                /deep/ .p-button-icon{
                    color: white;
                    font-size: 1.25rem;
                    line-height: 0;
                }
            }
        }
    }
</style>