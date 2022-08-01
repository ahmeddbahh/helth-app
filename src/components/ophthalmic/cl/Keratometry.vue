<template>
    <div class="keratometry">
        <div class="row my-3">
            <div class="col-lg-8 col-xl-7">
                <div class="svg-wrapper">
                    <img src="../../../UI/icons/clinic/ophthalmic/entrance/pupils/eyes.svg" alt="" class="w-100">
                </div>
                <div class="eyes-labels">
                    <div class="label-wrapper"><h3>O.D.</h3></div>
                    <div class="label-wrapper"><h3>O.S.</h3></div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-8 col-xl-7">
                <div class="row">
                    <div class="col-2 input-wrapper d-flex align-items-center">
                        <label>Power H</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropMenu :options="powerHOptions" :data="data.keratometry.od" :selectionKey="'powerH'" />
                    </div>
                    <div class="col-2 input-wrapper">
                        <div class="copy-controllers">
                            <Button 
                                icon="pi pi-angle-right"
                                class="p-button-rounded p-button-sm"
                                @click="copyToOs"
                            />
                        </div>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropMenu :options="powerHOptions" :data="data.keratometry.os" :selectionKey="'powerH'" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2 input-wrapper d-flex align-items-center">
                        <label>Power V</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropMenu :options="powerVOptions" :data="data.keratometry.od" :selectionKey="'powerV'" />
                    </div>
                    <div class="col-2 input-wrapper">
                        <div class="copy-controllers">
                            <Button 
                                icon="pi pi-angle-left"
                                class="p-button-rounded p-button-sm"
                                @click="copyToOd"
                            />
                        </div>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropMenu :options="powerVOptions" :data="data.keratometry.os" :selectionKey="'powerV'" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2 input-wrapper d-flex align-items-center">
                        <label>Meridian</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropMenu :options="meridianOptions" :data="data.keratometry.od" :selectionKey="'meridian'" />
                    </div>
                    <div class="col-3 offset-2 input-wrapper">
                        <CustomDropMenu :options="meridianOptions" :data="data.keratometry.os" :selectionKey="'meridian'" />
                    </div>
                </div>
                <div class="row my-2">
                        <div class="col-10 col-xl-5">
                            <label>Comment</label>
                            <Textarea v-model="data.keratometry.note" rows="3" />
                        </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import CustomDropMenu from '../shared components/CustomDropMenu.vue'
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
////////////////////////////////////////////////////////////////////////////////
import clOptions from '../../../mixins/clinics/ophthalmic/cl/clOptions'
import lang from '../../../mixins/clinics/ophthalmic/cl/lang'
////////////////////////////////////////////////////////////////////////////////
export default {
    mixins:[clOptions,lang],
    props:{
        data:{
            typw:Object,
            required:true
        }
    },
    components:{
        CustomDropMenu,
        Button,
        Textarea
    },
    methods:{
        copyToOd(){
            this.data.keratometry.od=JSON.parse(JSON.stringify(this.data.keratometry.os));
        },
        copyToOs(){
            this.data.keratometry.os=JSON.parse(JSON.stringify(this.data.keratometry.od));
        },
    },
}
</script>
<style lang="scss" scoped>
.keratometry{
    .copy-controllers{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /deep/.pi{
            color: white;
            font-size: 1.25rem;
            line-height: 0;
        }
    }
    .eyes-labels{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .label-wrapper{
            flex-grow: 1;
            display: flex;
            justify-content: center;
        }
    }
}
</style>