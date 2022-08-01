<template>
    <div class="final-rx-child">
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
                    </div>
                    <div class="d-flex gap-2 ">
                        <div class="input-wrapper">
                            <label class="w-100 text-center">Spherical</label>
                            <CustomDropMenu :options="sphericalOptions" :data="data.pd.od" :selectionKey="'spherical'" :excludeColumn="0" />
                            <CustomDropMenu :options="sphericalOptions" :data="data.pd.os" :selectionKey="'spherical'" :excludeColumn="0" />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">Cylindrical </label>
                            <CustomDropMenu :options="cylindricalOptions" :data="data.pd.od" :selectionKey="'cylindrical'" :excludeColumn="0" />
                            <CustomDropMenu :options="cylindricalOptions" :data="data.pd.os" :selectionKey="'cylindrical'" :excludeColumn="0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CustomDropMenu from '../shared components/CustomDropMenu.vue'
import Button from 'primevue/button';
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
        CustomDropMenu,
        Button,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            checked: true,
        }
    },
    methods:{
        copyToOd(){
            this.data.pd.od=JSON.parse(JSON.stringify(this.data.pd.os));
        },
        copyToOs(){
            this.data.pd.os=JSON.parse(JSON.stringify(this.data.pd.od));
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