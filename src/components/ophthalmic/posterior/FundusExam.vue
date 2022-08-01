<template>
    <div class="fundus-exam">
        <div class="row my-2">
            <div class="col-lg-7 col-xl-6">
                <div class="input-wrapper row">
                    <div class="col-3 d-flex align-items-center">
                        <label>{{lang[local].fundusExam.lens}}</label>
                    </div>
                    <div class="col-4">
                        <CustomDropMenu :options="lensOptions" :data="data.fundusExam" :selectionKey="'lens'" />
                    </div>
                </div>
                <div class="input-wrapper row">
                    <div class="col-3 d-flex align-items-center">
                        <label>{{lang[local].fundusExam.opthalmoscopy.label}}</label>
                    </div>
                    <div class="col-4">
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.opthalmoscopy.placeholder"
                            :v="$v.data.fundusExam.opthalmoscopy.other"
                            :data="data.fundusExam.opthalmoscopy"
                            :options="opthalmoscopyOptions" 
                            :selectionKey="'opthalmoscopySelection'"
                        />
                    </div>
                </div>
                <div class="input-wrapper row">
                    <div class="col-3 d-flex align-items-center">
                        <label for="informedPt">{{lang[local].fundusExam.dilated}}</label>
                    </div>
                    <div class="col-4">
                        <div class="field-checkbox my-2">
                            <Checkbox id="informedPt" v-model="data.fundusExam.dilated" :binary="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-7 col-xl-6">
                <div class="row my-4">
                    <div class="col-6 col-md-4 offset-md-3 col-lg-4 offset-lg-3">
                        <div><h4 class="text-center">O.D</h4></div>
                        <div class="image-wrapper">
                            <img v-if="fundusUserTemplateImageOd" :src="fundusUserTemplateImageOd"  class="w-100 d-block">
                            <img v-else :src="fundusTemplateImageOd"  class="w-100 d-block image-od">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="fundusOdEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="fundusOdDelete"
                                    class="tangent-screen-delete"
                                >
                            </div>
                            <ImageEditor 
                                ref="fundusOdImageEditor"
                                :templateName="'fundus.svg'"
                                @templateChanged="fundusOdTemplateChanged" 
                            />
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-4 ">
                        <div><h4 class="text-center">O.S</h4></div>
                        <div class="image-wrapper">
                            <img v-if="fundusUserTemplateImageOs" :src="fundusUserTemplateImageOs"  class="w-100 d-block">
                            <img v-else :src="fundusTemplateImageOs"  class="w-100 d-block image-od">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="fundusOsEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="fundusOsDelete"
                                    class="tangent-screen-delete"
                                >
                            </div>
                            <ImageEditor 
                                ref="fundusOsImageEditor"
                                :templateName="'fundus.svg'"
                                @templateChanged="fundusOsTemplateChanged" 
                            />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper d-flex align-items-center">
                        <label>{{lang[local].fundusExam.pupillaryRelex.label}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.pupillaryRelex.placeholder"
                            :v="$v.data.fundusExam.od.pupillaryRelex.other"
                            :data="data.fundusExam.od.pupillaryRelex"
                            :options="pupillaryOptions" 
                            :selectionKey="'pupillaryRelexSelection'"
                            ref="pupillaryRelexOd"
                        />
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
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.pupillaryRelex.placeholder"
                            :v="$v.data.fundusExam.os.pupillaryRelex.other"
                            :data="data.fundusExam.os.pupillaryRelex"
                            :options="pupillaryOptions" 
                            :selectionKey="'pupillaryRelexSelection'"
                            ref="pupillaryRelexOs"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper d-flex align-items-center">
                        <label>{{lang[local].fundusExam.vitreous.label}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.vitreous.placeholder"
                            :v="$v.data.fundusExam.od.vitreous.other"
                            :data="data.fundusExam.od.vitreous"
                            :options="vitreousOptions" 
                            :selectionKey="'vitreousSelection'"
                            ref="vitreousOd"
                        />
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
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.vitreous.placeholder"
                            :v="$v.data.fundusExam.os.vitreous.other"
                            :data="data.fundusExam.os.vitreous"
                            :options="vitreousOptions" 
                            :selectionKey="'vitreousSelection'"
                            ref="vitreousOs"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper d-flex align-items-center">
                        <label>{{lang[local].fundusExam.opticDisc}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropMenu :options="opticOptions" :data="data.fundusExam.od" :selectionKey="'opticDisc'" />
                    </div>
                    <div class="col-3 offset-2 input-wrapper">
                        <CustomDropMenu :options="opticOptions" :data="data.fundusExam.os" :selectionKey="'opticDisc'" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper d-flex align-items-center">
                        <label>{{lang[local].fundusExam.cdRatio}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropMenu :options="ratioOptions" :data="data.fundusExam.od" :selectionKey="'cdRatio'" />
                    </div>
                    <div class="col-3 offset-2 input-wrapper">
                        <CustomDropMenu :options="ratioOptions" :data="data.fundusExam.os" :selectionKey="'cdRatio'" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper d-flex align-items-center">
                        <label>{{lang[local].fundusExam.vessels.label}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.vessels.placeholder"
                            :v="$v.data.fundusExam.od.vessels.other"
                            :data="data.fundusExam.od.vessels"
                            :options="vesselsOptions" 
                            :selectionKey="'vesselSelection'"
                            ref="vesselsOd"
                        />
                    </div>
                    <div class="col-3 offset-2 input-wrapper">
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.vessels.placeholder"
                            :v="$v.data.fundusExam.os.vessels.other"
                            :data="data.fundusExam.os.vessels"
                            :options="vesselsOptions" 
                            :selectionKey="'vesselSelection'"
                            ref="vesselsOs"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper d-flex align-items-center">
                        <label>{{lang[local].fundusExam.macula.label}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.macula.placeholder"
                            :v="$v.data.fundusExam.od.macula.other"
                            :data="data.fundusExam.od.macula"
                            :options="maculaOptions" 
                            :selectionKey="'maculaSelection'"
                            ref="maculaOd"
                        />
                    </div>
                    <div class="col-3 offset-2 input-wrapper">
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.macula.placeholder"
                            :v="$v.data.fundusExam.os.macula.other"
                            :data="data.fundusExam.os.macula"
                            :options="maculaOptions" 
                            :selectionKey="'maculaSelection'"
                            ref="maculaOs"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper d-flex align-items-center">
                        <label>{{lang[local].fundusExam.fovealReflex}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <div class="field-checkbox my-2">
                            <Checkbox v-model="data.fundusExam.od.fovealReflex" :binary="true" />
                        </div>
                    </div>
                    <div class="col-3 offset-2 input-wrapper">
                        <div class="field-checkbox my-2">
                            <Checkbox v-model="data.fundusExam.os.fovealReflex" :binary="true" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper d-flex align-items-center">
                        <label>{{lang[local].fundusExam.retina.label}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.retina.placeholder"
                            :v="$v.data.fundusExam.od.retina.other"
                            :data="data.fundusExam.od.retina"
                            :options="retinaOptions" 
                            :selectionKey="'retinaSelection'"
                            ref="retinaOd"
                        />
                    </div>
                    <div class="col-3 offset-2 input-wrapper">
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.retina.placeholder"
                            :v="$v.data.fundusExam.os.retina.other"
                            :data="data.fundusExam.os.retina"
                            :options="retinaOptions" 
                            :selectionKey="'retinaSelection'"
                            ref="retinaOs"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper d-flex align-items-center">
                        <label>{{lang[local].fundusExam.posteriorPole.label}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropDown
                            class="my-2"
                            :v="$v.data.fundusExam.od.posteriorPole.other"
                            :placeholder="lang[local].fundusExam.posteriorPole.placeholder"
                            :data="data.fundusExam.od.posteriorPole"
                            :options="poleOptions" 
                            :selectionKey="'posteriorPoleSelection'"
                            ref="posteriorPoleOd"
                        />
                    </div>
                    <div class="col-3 offset-2 input-wrapper">
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.posteriorPole.placeholder"
                            :v="$v.data.fundusExam.os.posteriorPole.other"
                            :data="data.fundusExam.os.posteriorPole"
                            :options="poleOptions" 
                            :selectionKey="'posteriorPoleSelection'"
                            ref="posteriorPoleOs"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-3 input-wrapper d-flex align-items-center">
                        <label>{{lang[local].fundusExam.periphery.label}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.periphery.placeholder"
                            :v="$v.data.fundusExam.od.periphery.other"
                            :data="data.fundusExam.od.periphery"
                            :options="peripheryOptions" 
                            :selectionKey="'peripherySelection'"
                            ref="peripheryOd"
                        />
                    </div>
                    <div class="col-3 offset-2 input-wrapper">
                        <CustomDropDown
                            class="my-2"
                            :placeholder="lang[local].fundusExam.periphery.placeholder"
                            :v="$v.data.fundusExam.os.periphery.other"
                            :data="data.fundusExam.os.periphery"
                            :options="peripheryOptions" 
                            :selectionKey="'peripherySelection'"
                            ref="peripheryOs"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
                <div class="col-md-6 col-lg-5 col-xl-3">
                    <label>{{lang[local].fundusExam.note.label}}</label>
                    <Textarea v-model="data.fundusExam.note" 
                    :placeholder="lang[local].fundusExam.note.placeholder" rows="3" :class="{'p-invalid':$v.data.fundusExam.note.$invalid}" />
                    <div class="error">
                        <small 
                            class="d-block text-danger" 
                            v-if="$v.data.fundusExam.note.$model !='' && !$v.data.fundusExam.note.notContainsHtmlTags"
                        >
                            {{errors.htmlTagsError(lang[local].fundusExam.note.label)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fundusExam.note.minLen">
                            {{errors.minLengthError(lang[local].fundusExam.note.label,$v.data.fundusExam.note.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.fundusExam.note.maxLen">
                            {{errors.maxLengthError(lang[local].fundusExam.note.label, $v.data.fundusExam.note.$params.maxLen.max) }}
                        </small>
                    </div>  
                </div>
        </div>
    </div>
</template>
<script>
///////////////////////////////////////////////////////////////////
import posteriorOptions from '../../../mixins/clinics/ophthalmic/posterior/posteriorOptions'
import lang from '../../../mixins/clinics/ophthalmic/posterior/lang'
///////////////////////////////////////////////////////////////////
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "../../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError,inputError} from '../../helpers/errors'
/////////////////////////////////////////
import CustomDropMenu from '../shared components/CustomDropMenu.vue'
import CustomDropDown from '../shared components/CustomDropDown.vue'
import ImageEditor from '../../../components/shared/ImageEditor.vue'
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';

export default {
    mixins:[posteriorOptions,lang],
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    components:{
        CustomDropMenu,
        CustomDropDown,
        ImageEditor,
        Button,
        Checkbox,
        Textarea
    },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",

            //// od ////
            fundusTemplateImageOd:require('../../../assets/imageEditorTemplates/fundus.svg'),
            fundusUserTemplateImageOd:null,
            //// os ////
            fundusTemplateImageOs:require('../../../assets/imageEditorTemplates/fundus.svg'),
            fundusUserTemplateImageOs:null,
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
                inputError,
            },
        }
    },
    validations:{
        data:{
            fundusExam: {
                    opthalmoscopy:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    od: {
                        pupillaryRelex: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        vitreous: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        vessels: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        vesselSelection: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        macula: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        maculaSelection: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        retina: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        posteriorPole: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        periphery: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                    },
                    os: {
                        pupillaryRelex: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        vitreous: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        vessels: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        vesselSelection: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        macula: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        maculaSelection: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        retina: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        posteriorPole: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        periphery: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                    },
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
            this.data.fundusExam.od=JSON.parse(JSON.stringify(this.data.fundusExam.os));
            setTimeout(()=>{
                this.$refs.peripheryOd.copy()
                this.$refs.posteriorPoleOd.copy()
                this.$refs.retinaOd.copy()
                this.$refs.maculaOd.copy()
                this.$refs.vesselsOd.copy()
                this.$refs.vitreousOd.copy()
                this.$refs.pupillaryRelexOd.copy()
            },100)
            
        },
        copyToOs(){
            this.data.fundusExam.os=JSON.parse(JSON.stringify(this.data.fundusExam.od));
            setTimeout(()=>{
                this.$refs.peripheryOs.copy()
                this.$refs.posteriorPoleOs.copy()
                this.$refs.retinaOs.copy()
                this.$refs.maculaOs.copy()
                this.$refs.vesselsOs.copy()
                this.$refs.vitreousOs.copy()
                this.$refs.pupillaryRelexOs.copy()

            },100)
        },





        // fundus od methods
        fundusOdEdit(){
            this.$refs.fundusOdImageEditor.openMaximizable()
        },
        fundusOdDelete(){
            this.$refs.fundusOdImageEditor.delete()
        },
        fundusOdTemplateChanged(imgUrl){
            this.fundusUserTemplateImageOd=imgUrl
        },
        // fundus os methods
        fundusOsEdit(){
            this.$refs.fundusOsImageEditor.openMaximizable()
        },
        fundusOsDelete(){
            this.$refs.fundusOsImageEditor.delete()
        },
        fundusOsTemplateChanged(imgUrl){
            this.fundusUserTemplateImageOs=imgUrl
        },
    },
}
</script>
<style lang="scss" scoped>
.fundus-exam{
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
    .image-wrapper{
        .image-od-os{
        }
        .image-controllers{
            .tangent-screen-edit,.tangent-screen-delete{
                cursor: pointer;
            }
        }
    }
}
</style>