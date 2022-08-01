<template>
    <div class="recommendation">
        <div class="row my-2">
            <div class="col-md-4 col-xl-3">
                <CustomDropDown
                    class="my-2"
                    :label="'Lens Type'" 
                    :data="data.recommendation.lensType"
                    :options="lensTypeOptions" 
                    :selectionKey="'lensTypeSelection'"
                />
            </div>
        </div>
        <div class="row my-2">
            <div class="col-12">
                <div class="d-flex gap-4 ">
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
                            <CustomDropMenu :options="sphericalOptions" :data="data.recommendation.od" :selectionKey="'spherical'" :excludeColumn="0" />
                            <CustomDropMenu :options="sphericalOptions" :data="data.recommendation.os" :selectionKey="'spherical'" :excludeColumn="0" />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">Cylindrical </label>
                            <CustomDropMenu :options="cylindricalOptions" :data="data.recommendation.od" :selectionKey="'cylindrical'" :excludeColumn="0" />
                            <CustomDropMenu :options="cylindricalOptions" :data="data.recommendation.os" :selectionKey="'cylindrical'" :excludeColumn="0" />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">Axis</label>
                            <CustomDropMenu :options="axisOptions" :data="data.recommendation.od" :selectionKey="'axis'" />
                            <CustomDropMenu :options="axisOptions" :data="data.recommendation.os" :selectionKey="'axis'" />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">Add</label>
                            <CustomDropMenu :options="addOptions" :data="data.recommendation.od" :selectionKey="'add'" />
                            <CustomDropMenu :options="addOptions" :data="data.recommendation.os" :selectionKey="'add'" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-4">
                <label>Comment</label>
                <Textarea v-model="data.recommendation.note" rows="3" />
            </div>
        </div>
    </div>
</template>
<script>
import CustomDropDown from '../shared components/CustomDropDown.vue'
import CustomDropMenu from '../shared components/CustomDropMenu.vue'
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
/////////////////////////////////////////   mixins    ////////////////////////////////////////////////
import lensTypeOptions from '../../../mixins/clinics/ophthalmic/finalRx/lensTypeOptions'
import measurementsOptions from '../../../mixins/clinics/ophthalmic/shared/measurements/measurementsOptions'
export default {
    mixins:[measurementsOptions,lensTypeOptions],
    props:{
        data:{
            type:Object,
            required:true
        },
    },
    components:{
        CustomDropDown,
        CustomDropMenu,
        Button,
        Textarea,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            checked: false,
        }
    },
    methods:{
        copyToOd(){
            // if(!(
            //     !this.data.recommendation.spherical.os.length && 
            //     !this.data.recommendation.cylindrical.os.length &&
            //     !this.data.recommendation.axis.os.length &&
            //     !this.data.recommendation.add.os.length &&
            // ))
            // {
                this.data.recommendation.spherical.od=[...this.data.recommendation.spherical.os];
                this.data.recommendation.cylindrical.od=[...this.data.recommendation.cylindrical.os];
                this.data.recommendation.axis.od=[...this.data.recommendation.axis.os];
                this.data.recommendation.add.od=[...this.data.recommendation.add.os];
            // }
            // else{
                // console.log("Empty")
            // }
        },
        copyToOs(){
            // if(!(
            //     !this.data.recommendation.spherical.od.length && 
            //     !this.data.recommendation.cylindrical.od.length &&
            //     !this.data.recommendation.axis.od.length &&
            //     !this.data.recommendation.add.od.length &&
            // ))
            // {
                this.data.recommendation.spherical.os=[...this.data.recommendation.spherical.od];
                this.data.recommendation.cylindrical.os=[...this.data.recommendation.cylindrical.od];
                this.data.recommendation.axis.os=[...this.data.recommendation.axis.od];
                this.data.recommendation.add.os=[...this.data.recommendation.add.od];
            // }
            // else{
            //     console.log("Empty")
            // }
        },
    },
}
</script>
<style lang="scss" scoped>
.recommendation{
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