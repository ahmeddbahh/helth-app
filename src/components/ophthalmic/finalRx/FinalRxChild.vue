<template>
    <div class="final-rx-child">
        <div class="row my-2">
            <div class="col-12 d-flex align-items-center gap-2">
                <label>Simple </label>
                    <InputSwitch v-model="checked" />
                <label>Advanced</label>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-12">
                <div class="d-flex gap-4">
                    <div class="d-flex flex-column justify-content-center gap-2 input-wrapper">
                        <h4 class="mt-4 mb-0">O.D.</h4>
                        <div class="copy-controllers">
                            <Button 
                                icon="pi pi-angle-up"
                                class="p-button-rounded p-button-sm"
                                @click="copyToOd"
                            />
                            <Button 
                                icon="pi pi-angle-down" 
                                class="p-button-rounded p-button-sm"
                                @click="copyToOs" 
                            />
                        </div>
                        <h4 class="mb-0">O.S.</h4>
                        <h4 class="mb-2" v-show="checked">O.U.</h4>
                    </div>
                    <div class="d-flex gap-2 ">
                        <div class="input-wrapper">
                            <label class="w-100 text-center">Spherical</label>
                            <CustomDropMenu :options="sphericalOptions" :data="data.finalRx.od" :selectionKey="'spherical'" :excludeColumn="0" />
                            <CustomDropMenu :options="sphericalOptions" :data="data.finalRx.os" :selectionKey="'spherical'" :excludeColumn="0" />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">Cylindrical </label>
                            <CustomDropMenu :options="cylindricalOptions" :data="data.finalRx.od" :selectionKey="'cylindrical'" :excludeColumn="0" />
                            <CustomDropMenu :options="cylindricalOptions" :data="data.finalRx.os" :selectionKey="'cylindrical'" :excludeColumn="0" />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">Axis</label>
                            <CustomDropMenu :options="axisOptions" :data="data.finalRx.od" :selectionKey="'axis'" />
                            <CustomDropMenu :options="axisOptions" :data="data.finalRx.os" :selectionKey="'axis'" />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">Add</label>
                            <CustomDropMenu :options="addOptions" :data="data.finalRx.od" :selectionKey="'add'" />
                            <CustomDropMenu :options="addOptions" :data="data.finalRx.os" :selectionKey="'add'" />
                        </div>
                        <div class="input-wrapper" v-show="checked">
                            <label class="w-100 text-center">Prism</label>
                            <CustomDropMenu :options="prismOptions" :data="data.finalRx.od" :selectionKey="'prism'" />
                            <CustomDropMenu :options="prismOptions" :data="data.finalRx.os" :selectionKey="'prism'" />
                        </div>
                        <div class="input-wrapper" v-show="checked">
                            <label class="w-100 text-center">DVA</label>
                            <CustomDropMenu :options="dvaOptions" :data="data.finalRx.od" :selectionKey="'dva'" :preLabel="'20/'" />
                            <CustomDropMenu :options="dvaOptions" :data="data.finalRx.os" :selectionKey="'dva'" :preLabel="'20/'" />
                            <CustomDropMenu :options="dvaOptions" :data="data.finalRx.ou" :selectionKey="'dva'" :preLabel="'20/'" />
                        </div>
                        <div class="input-wrapper" v-show="checked">
                            <label class="w-100 text-center">NVA</label>
                            <CustomDropMenu :options="nvaOptions" :data="data.finalRx.od" :selectionKey="'nva'" :preLabel="'20/'" />
                            <CustomDropMenu :options="nvaOptions" :data="data.finalRx.os" :selectionKey="'nva'" :preLabel="'20/'" />
                            <CustomDropMenu :options="nvaOptions" :data="data.finalRx.ou" :selectionKey="'nva'" :preLabel="'20/'" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-4">
                <label>Comment</label>
                <Textarea v-model="data.finalRx.note" rows="3" />
            </div>
        </div>
    </div>
</template>
<script>
import InputSwitch from 'primevue/inputswitch';
import CustomDropMenu from '../shared components/CustomDropMenu.vue'
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
/////////////////////////////////////////   mixins    ////////////////////////////////////////////////
import measurementsOptions from '../../../mixins/clinics/ophthalmic/shared/measurements/measurementsOptions'
export default {
    mixins:[measurementsOptions],
    props:{
        data:{
            type:Object,
            required:true
        },
    },
    components:{
        InputSwitch,
        CustomDropMenu,
        Button,
        Textarea,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            checked: true,
        }
    },
    methods:{
        copyToOd(){
            this.data.finalRx.od=JSON.parse(JSON.stringify(this.data.finalRx.os));
        },
        copyToOs(){
            this.data.finalRx.os=JSON.parse(JSON.stringify(this.data.finalRx.od));
        },
    },
}
</script>
<style lang="scss" scoped>
.final-rx-child{
    .copy-controllers{
        display: flex;
        gap: 10px;
        /deep/.pi{
            color: white;
            font-size: 1.25rem;
            line-height: 0;
        }
    }
}
</style>