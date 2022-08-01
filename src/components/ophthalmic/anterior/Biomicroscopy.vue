<template>
    <div class="biomicroscopy">
        <div class="row my-2">
            <div class="col-lg-6">
                <div class="row my-4">
                    <div class="col-md-5 offset-md-1 col-lg-4 offset-lg-3">
                        <div><h4 class="text-center">O.D</h4></div>
                        <div class="image-wrapper">
                            <img v-if="anteriorUserTemplateImageOd" :src="anteriorUserTemplateImageOd"  class="w-100 d-block">
                            <img v-else :src="anteriorTemplateImageOd"  class="w-100 d-block image-od">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="anteriorOdEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="anteriorOdDelete"
                                    class="tangent-screen-delete"
                                >
                            </div>
                            <ImageEditor 
                                ref="anteriorOdImageEditor"
                                :templateName="'anterior.svg'"
                                @templateChanged="anteriorOdTemplateChanged" 
                            />
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-4 ">
                        <div><h4 class="text-center">O.S</h4></div>
                        <div class="image-wrapper">
                            <img v-if="anteriorUserTemplateImageOs" :src="anteriorUserTemplateImageOs"  class="w-100 d-block">
                            <img v-else :src="anteriorTemplateImageOs"  class="w-100 d-block image-od">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="anteriorOsEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="anteriorOsDelete"
                                    class="tangent-screen-delete"
                                >
                            </div>
                            <ImageEditor 
                                ref="anteriorOsImageEditor"
                                :templateName="'anterior.svg'"
                                @templateChanged="anteriorOsTemplateChanged" 
                            />
                        </div>
                    </div>
                </div>
                <div class="row" v-for="(key,index) in keys " :key="index">
                    <div class="col-3 input-wrapper">
                        <label class="">{{local=='ar'?key.label.arabic:key.label.english}}</label>
                    </div>
                    <div class="col-3 input-wrapper">
                        <InputText 
                            type="text" v-model="data.biomicroscopy.od[key.objKey]" 
                            :placeholder="local=='ar'?key.placeholder.arabic:key.placeholder.english" class="my-2"
                            :class="{'p-invalid':$v.data.biomicroscopy.od[key.objKey].$invalid}"
                             />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.biomicroscopy.od[key.objKey].$model !='' && !$v.data.biomicroscopy.od[key.objKey].notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(local=='ar'?key.label.arabic:key.label.english)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.biomicroscopy.od[key.objKey].minLen">
                                {{errors.minLengthError(local=='ar'?key.label.arabic:key.label.english,$v.data.biomicroscopy.od[key.objKey].$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.biomicroscopy.od[key.objKey].maxLen">
                                {{errors.maxLengthError(local=='ar'?key.label.arabic:key.label.english, $v.data.biomicroscopy.od[key.objKey].$params.maxLen.max) }}
                            </small>
                        </div> 
                    </div>
                    <div class="col-2 input-wrapper" v-if="key.copyController">
                        <div class="copy-controllers">
                            <Button 
                                :icon="index==0?'pi pi-angle-left':'pi pi-angle-right'"
                                class="p-button-rounded p-button-sm"
                                @click="index == 0 ? copyToOd() : copyToOs()"
                            />
                        </div>
                    </div>
                    <div class="col-3 input-wrapper" :class="{'offset-2':!key.copyController}">
                        <InputText 
                            type="text" v-model="data.biomicroscopy.os[key.objKey]" 
                            :placeholder="local=='ar'?key.placeholder.arabic:key.placeholder.english" class="my-2"
                            :class="{'p-invalid':$v.data.biomicroscopy.os[key.objKey].$invalid}"
                             />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.biomicroscopy.os[key.objKey].$model !='' && !$v.data.biomicroscopy.os[key.objKey].notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(local=='ar'?key.label.arabic:key.label.english)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.biomicroscopy.os[key.objKey].minLen">
                                {{errors.minLengthError(local=='ar'?key.label.arabic:key.label.english,$v.data.biomicroscopy.os[key.objKey].$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.biomicroscopy.os[key.objKey].maxLen">
                                {{errors.maxLengthError(local=='ar'?key.label.arabic:key.label.english, $v.data.biomicroscopy.os[key.objKey].$params.maxLen.max) }}
                            </small>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="col-lg-4 offset-lg-1">
                <div class="row my-4">
                    <div class="col-md-5 offset-md-1">
                        <div><h4 class="text-center">O.D. Seg</h4></div>
                        <div class="image-wrapper">
                            <img v-if="anteriorUserTemplateImageOdSeg" :src="anteriorUserTemplateImageOdSeg"  class="w-100 d-block">
                            <img v-else :src="anteriorTemplateImageOdSeg"  class="w-100 d-block image-od">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="anteriorOdSegEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="anteriorOdSegDelete"
                                    class="tangent-screen-delete"
                                >
                            </div>
                            <ImageEditor 
                                ref="anteriorOdSegImageEditor"
                                :templateName="'odSeg.svg'"
                                @templateChanged="anteriorOdSegTemplateChanged" 
                            />
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div><h4 class="text-center">O.S Seg</h4></div>
                        <div class="image-wrapper">
                            <img v-if="anteriorUserTemplateImageOsSeg" :src="anteriorUserTemplateImageOsSeg"  class="w-100 d-block">
                            <img v-else :src="anteriorTemplateImageOsSeg"  class="w-100 d-block image-od">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="anteriorOsSegEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="anteriorOsSegDelete"
                                    class="tangent-screen-delete"
                                >
                            </div>
                            <ImageEditor 
                                ref="anteriorOsSegImageEditor"
                                :templateName="'osSeg.svg'"
                                @templateChanged="anteriorOsSegTemplateChanged" 
                            />
                        </div>
                    </div>
                    <div class="col-md-10 offset-md-1">
                        <div><h4 class="text-center">O.S</h4></div>
                        <div class="image-wrapper">
                            <img v-if="anteriorUserTemplateImageNotations" :src="anteriorUserTemplateImageNotations"  class="w-100 d-block">
                            <img v-else :src="anteriorTemplateImageNotations"  class="w-100 d-block image-od">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="anteriorNotationsEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="anteriorNotationsDelete"
                                    class="tangent-screen-delete"
                                >
                            </div>
                            <ImageEditor 
                                ref="anteriorNotationsImageEditor"
                                :templateName="'White-Background.svg'"
                                @templateChanged="anteriorNotationsTemplateChanged" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-6 col-xl-3">
                <label>{{lang[local].biomicroscopy.note.label}}</label>
                <Textarea v-model="data.biomicroscopy.note" 
                    :placeholder="lang[local].biomicroscopy.note.placeholder" rows="3"
                    :class="{'p-invalid':$v.data.biomicroscopy.note.$invalid}"
                 />
                <div class="error">
                    <small 
                        class="d-block text-danger" 
                        v-if="$v.data.biomicroscopy.note.$model !='' && !$v.data.biomicroscopy.note.notContainsHtmlTags"
                    >
                        {{errors.htmlTagsError(lang[local].biomicroscopy.note.label)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.biomicroscopy.note.minLen">
                        {{errors.minLengthError(lang[local].biomicroscopy.note.label,$v.data.biomicroscopy.note.$params.minLen.min)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.biomicroscopy.note.maxLen">
                        {{errors.maxLengthError(lang[local].biomicroscopy.note.label, $v.data.biomicroscopy.note.$params.maxLen.max) }}
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
import {htmlTagsError,minLengthError,maxLengthError,inputError} from '../../helpers/errors'
/////////////////////////////////////////
import lang from '../../../mixins/clinics/ophthalmic/anterior/lang'
import anteriorOptions from '../../../mixins/clinics/ophthalmic/anterior/anteriorOptions'
/////////////////////////////////////////
import ImageEditor from '../../../components/shared/ImageEditor.vue'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
export default {
    mixins:[lang,anteriorOptions],
    props:{
        data:{
            type:Object,
            required:true
        },
    },
    components:{
        ImageEditor,
        InputText,
        Button,
        Textarea,
    },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            //// od ////
            anteriorTemplateImageOd:require('../../../assets/imageEditorTemplates/anterior.svg'),
            anteriorUserTemplateImageOd:null,
            //// os ////
            anteriorTemplateImageOs:require('../../../assets/imageEditorTemplates/anterior.svg'),
            anteriorUserTemplateImageOs:null,
            //// od ////
            anteriorTemplateImageOdSeg:require('../../../assets/imageEditorTemplates/odSeg.svg'),
            anteriorUserTemplateImageOdSeg:null,
            //// os ////
            anteriorTemplateImageOsSeg:require('../../../assets/imageEditorTemplates/osSeg.svg'),
            anteriorUserTemplateImageOsSeg:null,
            //// Notations ////
            anteriorTemplateImageNotations:require('../../../assets/imageEditorTemplates/White-Background.svg'),
            anteriorUserTemplateImageNotations:null,
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
            biomicroscopy: {
                    od: {
                        lid:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        conjunctiva:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        cornea:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        ac:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        viterous:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        iris:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        eyeColour:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        lens:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        angle:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        tbut:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        tvol:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    os: {
                        lid:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        conjunctiva:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        cornea:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        ac:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        viterous:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        iris:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        eyeColour:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        lens:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        angle:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        tbut:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        tvol:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
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
            this.data.biomicroscopy.od=JSON.parse(JSON.stringify(this.data.biomicroscopy.os));
        },
        copyToOs(){
            this.data.biomicroscopy.os=JSON.parse(JSON.stringify(this.data.biomicroscopy.od));
        },
        // anterior od methods
        anteriorOdEdit(){
            this.$refs.anteriorOdImageEditor.openMaximizable()
        },
        anteriorOdDelete(){
            this.$refs.anteriorOdImageEditor.delete()
        },
        anteriorOdTemplateChanged(imgUrl){
            this.anteriorUserTemplateImageOd=imgUrl
        },
        // anterior os methods
        anteriorOsEdit(){
            this.$refs.anteriorOsImageEditor.openMaximizable()
        },
        anteriorOsDelete(){
            this.$refs.anteriorOsImageEditor.delete()
        },
        anteriorOsTemplateChanged(imgUrl){
            this.anteriorUserTemplateImageOs=imgUrl
        },
        // anterior odSeg methods
        anteriorOdSegEdit(){
            this.$refs.anteriorOdSegImageEditor.openMaximizable()
        },
        anteriorOdSegDelete(){
            this.$refs.anteriorOdSegImageEditor.delete()
        },
        anteriorOdSegTemplateChanged(imgUrl){
            this.anteriorUserTemplateImageOdSeg=imgUrl
        },
        // anterior osSeg methods
        anteriorOsSegEdit(){
            this.$refs.anteriorOsSegImageEditor.openMaximizable()
        },
        anteriorOsSegDelete(){
            this.$refs.anteriorOsSegImageEditor.delete()
        },
        anteriorOsSegTemplateChanged(imgUrl){
            this.anteriorUserTemplateImageOsSeg=imgUrl
        },
        // anterior Notations methods
        anteriorNotationsEdit(){
            this.$refs.anteriorNotationsImageEditor.openMaximizable()
        },
        anteriorNotationsDelete(){
            this.$refs.anteriorNotationsImageEditor.delete()
        },
        anteriorNotationsTemplateChanged(imgUrl){
            this.anteriorUserTemplateImageNotations=imgUrl
        },
    },
}
</script>
<style lang="scss" scoped>
.biomicroscopy{
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