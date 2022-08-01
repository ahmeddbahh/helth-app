<template>
    <div class="over-refraction">
        <div class="row my-2">
            <div class="col-12 d-flex align-items-center gap-2">
                <label>{{lang[local].measurementsLabels.simple}}</label>
                    <InputSwitch v-model="checked" />
                <label>{{lang[local].measurementsLabels.advanced}}</label>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-12">
                <div class="d-flex gap-4">
                    <div class="d-flex flex-column justify-content-center gap-2 input-wrapper">
                        <h4 class="mt-2 mb-0">{{lang[local].measurementsLabels.od}}</h4>
                        <div class="d-flex justify-content-center gap-2 copy-controllers">
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
                        <h4 class="mb-0">{{lang[local].measurementsLabels.os}}</h4>
                        <h4 class="mb-2" v-show="checked">{{lang[local].measurementsLabels.ou}}</h4>
                    </div>
                    <div class="d-flex gap-2 ">
                        <div class="input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.spherical}}</label>
                            <CustomDropMenu :options="sphericalOptions" :data="data.overRefraction.od" :selectionKey="'spherical'" :excludeColumn="0" />
                            <CustomDropMenu :options="sphericalOptions" :data="data.overRefraction.os" :selectionKey="'spherical'" :excludeColumn="0" />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.cylindrical}}</label>
                            <CustomDropMenu :options="cylindricalOptions" :data="data.overRefraction.od" :selectionKey="'cylindrical'" :excludeColumn="0" />
                            <CustomDropMenu :options="cylindricalOptions" :data="data.overRefraction.os" :selectionKey="'cylindrical'" :excludeColumn="0" />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.axis}}</label>
                            <CustomDropMenu :options="axisOptions" :data="data.overRefraction.od" :selectionKey="'axis'" />
                            <CustomDropMenu :options="axisOptions" :data="data.overRefraction.os" :selectionKey="'axis'" />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.add}}</label>
                            <CustomDropMenu :options="addOptions" :data="data.overRefraction.od" :selectionKey="'add'" />
                            <CustomDropMenu :options="addOptions" :data="data.overRefraction.os" :selectionKey="'add'" />
                        </div>
                        <div class="input-wrapper" v-show="checked">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.prism}}</label>
                            <CustomDropMenu :options="prismOptions" :data="data.overRefraction.od" :selectionKey="'prism'" />
                            <CustomDropMenu :options="prismOptions" :data="data.overRefraction.os" :selectionKey="'prism'" />
                        </div>
                        <div class="input-wrapper" v-show="checked">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.dva}}</label>
                            <CustomDropMenu :options="dvaOptions" :data="data.overRefraction.od" :selectionKey="'dva'" :preLabel="'20/'" />
                            <CustomDropMenu :options="dvaOptions" :data="data.overRefraction.os" :selectionKey="'dva'" :preLabel="'20/'" />
                            <CustomDropMenu :options="dvaOptions" :data="data.overRefraction.ou" :selectionKey="'dva'" :preLabel="'20/'" />
                        </div>
                        <div class="input-wrapper" v-show="checked">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.nva}}</label>
                            <CustomDropMenu :options="nvaOptions" :data="data.overRefraction.od" :selectionKey="'nva'" :preLabel="'20/'" />
                            <CustomDropMenu :options="nvaOptions" :data="data.overRefraction.os" :selectionKey="'nva'" :preLabel="'20/'" />
                            <CustomDropMenu :options="nvaOptions" :data="data.overRefraction.ou" :selectionKey="'nva'" :preLabel="'20/'" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-4">
                <label>{{lang[local].overRefraction.note.label}}</label>
                <Textarea v-model="data.overRefraction.note" :placeholder="lang[local].overRefraction.note.placeholder" rows="3" />
                <div class="error">
                    <small 
                        class="d-block text-danger" 
                        v-if="$v.data.overRefraction.note.$model !='' && !$v.data.overRefraction.note.notContainsHtmlTags"
                    >
                        {{errors.htmlTagsError(lang[local].overRefraction.note.label)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.overRefraction.note.minLen">
                        {{errors.minLengthError(lang[local].overRefraction.note.label,$v.data.overRefraction.note.$params.minLen.min)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.overRefraction.note.maxLen">
                        {{errors.maxLengthError(lang[local].overRefraction.note.label, $v.data.overRefraction.note.$params.maxLen.max) }}
                    </small>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
////////////////////////////////////////////////////////
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "../../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError} from '../../helpers/errors'
//////////////////////////////////////////////////////////
import measurementsOptions from '../../../mixins/clinics/ophthalmic/shared/measurements/measurementsOptions'
import lang from '../../../mixins/clinics/ophthalmic/vision/lang'
//////////////////////////////////////////////////////////
import InputSwitch from 'primevue/inputswitch';
import CustomDropMenu from '../shared components/CustomDropMenu.vue'
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
export default {
    mixins:[measurementsOptions,lang],
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
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            checked: false,
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
            },
        }
    },
    validations:{
        data:{
            overRefraction: {
                    note:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
            },
        },
    },
    methods:{
        copyToOd(){
            this.data.overRefraction.od=JSON.parse(JSON.stringify(this.data.overRefraction.os));
        },
        copyToOs(){
            this.data.overRefraction.os=JSON.parse(JSON.stringify(this.data.overRefraction.od));
        },
    },
}
</script>
<style lang="scss" scoped>
.over-refraction{
    .copy-controllers{
        /deep/.pi{
            color: white;
            font-size: 1.25rem;
            line-height: 0;
        }
    }
}
</style>