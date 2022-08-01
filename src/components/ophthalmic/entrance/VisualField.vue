<template>
    <div class="visual-field">
        <div class="row my-2">
            <div class="form-wrapper col-lg-4 col-md-6">
                <div class="row my-2">
                    <div class="col-12">
                        <h4>{{lang[local].visualField.confrontation.heading}}</h4>
                    </div>
                </div>
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].visualField.confrontation.od.label"
                    :placeholder="lang[local].visualField.confrontation.od.placeholder" 
                    :data="data.visualField.confrontation.od"
                    :options="confrontationOdOptions" 
                    :selectionKey="'odSelection'"
                    :v="$v.data.visualField.confrontation.od.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].visualField.confrontation.os.label"
                    :placeholder="lang[local].visualField.confrontation.os.placeholder" 
                    :data="data.visualField.confrontation.os"
                    :options="confrontationOsOptions" 
                    :selectionKey="'osSelection'"
                    :v="$v.data.visualField.confrontation.os.other"
                />
            </div>
            <div class="form-wrapper offset-lg-2 col-lg-4 col-md-6">
                <div class="row my-2">
                    <div class="col-12">
                        <h4>{{lang[local].visualField.autoPerimetry.heading}}</h4>
                    </div>
                </div>
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].visualField.autoPerimetry.instrument.label"
                    :placeholder="lang[local].visualField.autoPerimetry.instrument.placeholder"  
                    :data="data.visualField.autoPerimetry.instrument"
                    :options="instrumentOptions" 
                    :selectionKey="'instrumentSelection'"
                    :v="$v.data.visualField.autoPerimetry.instrument.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].visualField.autoPerimetry.od.label"
                    :placeholder="lang[local].visualField.autoPerimetry.od.placeholder"
                    :data="data.visualField.autoPerimetry.od"
                    :options="autoPerimetryOdOptions" 
                    :selectionKey="'odSelection'"
                    :v="$v.data.visualField.autoPerimetry.od.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].visualField.autoPerimetry.os.label"
                    :placeholder="lang[local].visualField.autoPerimetry.os.placeholder" 
                    :data="data.visualField.autoPerimetry.os"
                    :options="autoPerimetryOsOptions" 
                    :selectionKey="'osSelection'"
                    :v="$v.data.visualField.autoPerimetry.os.other"
                />
            </div>
        </div>

        <div class="row my-2">
            <div class="col-xl-4 col-md-6">
                <div class="row my-2">
                    <div class="col-12">
                        <h4>{{lang[local].visualField.tangentSreen.heading}}</h4>
                    </div>
                </div>
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].visualField.tangentSreen.scale.label"
                    :placeholder="lang[local].visualField.tangentSreen.scale.placeholder" 
                    :data="data.visualField.tangentSreen"
                    :options="scaleOptions" 
                    :selectionKey="'scaleSelection'"
                    :v="$v.data.visualField.tangentSreen.other"
                />
                <div class="row my-2">
                    <div class="col-md-8 offset-md-4">
                        <div class="image-wrapper">
                            <img v-if="tangentScreenUserTemplateImage" :src="tangentScreenUserTemplateImage"  class="w-100 d-block">
                            <img v-else :src="tangentScreenTemplateImage"  class="w-100 d-block">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="tangentScreenEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="tangentScreenDelete"
                                    class="tangent-screen-delete"
                                >
                                <!-- <img src="../../../UI/icons/clinic/ophthalmic/entrance/visual/done.svg"> -->
                                <!-- <img src="../../../UI/icons/clinic/ophthalmic/entrance/visual/attach.svg" @click="tangentScreenUpload"> -->
                            </div>
                            <ImageEditor
                                ref="tangentScreenImageEditor"
                                :templateName="'tangent-template-image.svg'" 
                                @templateChanged="tangentScreenTemplateChanged" 
                             />
                        </div>
                    </div>
                </div>
            </div>
            <div class="offset-xl-2 col-xl-6 col-md-6">
                <div class="row my-2">
                    <div class="col-12">
                        <h4>{{lang[local].visualField.amslerGrid.heading}}</h4>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-md-6">
                        <div><h4 class="text-center">{{lang[local].visualField.amslerGrid.od}}</h4></div>
                        <div class="image-wrapper">
                            <img v-if="amslerGridUserTemplateImageOd" :src="amslerGridUserTemplateImageOd"  class="w-100 d-block">
                            <img v-else :src="amslerGridTemplateImageOd"  class="w-100 d-block image-od">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="amslerGridOdEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="amslerGridOdDelete"
                                    class="tangent-screen-delete"
                                >
                            </div>
                            <ImageEditor 
                                ref="amslerGridOdImageEditor"
                                :templateName="'AmslerGrid.svg'"
                                @templateChanged="amslerGridOdTemplateChanged" 
                             />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div><h4 class="text-center">{{lang[local].visualField.amslerGrid.os}}</h4></div>
                        <div class="image-wrapper">
                            <img v-if="amslerGridUserTemplateImageOs" :src="amslerGridUserTemplateImageOs"  class="w-100 d-block image-os">
                            <img v-else :src="amslerGridTemplateImageOs"  class="w-100 d-block image-os">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="amslerGridOsEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="amslerGridOsDelete"
                                    class="tangent-screen-delete"
                                >
                            </div>
                            <ImageEditor 
                                :templateName="'AmslerGrid.svg'"
                                ref="amslerGridOsImageEditor" 
                                @templateChanged="amslerGridOsTemplateChanged"  
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-5">
            <div class="form-wrapper col-lg-4 col-md-6">
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].visualField.note.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <Textarea v-model="data.visualField.note" :placeholder="lang[local].visualField.note.placeholder" rows="3" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.visualField.note.$model !='' && !$v.data.visualField.note.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].visualField.note.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.visualField.note.minLen">
                                {{errors.minLengthError(lang[local].visualField.note.label,$v.data.visualField.note.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.visualField.note.maxLen">
                                {{errors.maxLengthError(lang[local].visualField.note.label, $v.data.visualField.note.$params.maxLen.max) }}
                            </small>
                        </div>   
                    </div>
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
import entranceOptions from '../../../mixins/clinics/ophthalmic/entrance/entranceOptions'
import lang from '../../../mixins/clinics/ophthalmic/entrance/lang'
import CustomDropDown from '../shared components/CustomDropDown.vue'
import ImageEditor from '../../../components/shared/ImageEditor.vue'
import Textarea from 'primevue/textarea';
export default {
    mixins:[entranceOptions,lang],
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    components:{
        CustomDropDown,
        ImageEditor,
        Textarea,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            // Tangent
            tangentScreenTemplateImage:require('../../../assets/imageEditorTemplates/tangent-template-image.svg'),
            tangentScreenUserTemplateImage:null,
            // Amsler Grid
            // O.D
            amslerGridTemplateImageOd:require('../../../assets/imageEditorTemplates/AmslerGrid.svg'),
            amslerGridUserTemplateImageOd:null,
            // O.S
            amslerGridTemplateImageOs:require('../../../assets/imageEditorTemplates/AmslerGrid.svg'),
            amslerGridUserTemplateImageOs:null,
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
            },
        }
    },
    validations:{
        data:{
            visualField: {
                    confrontation: {
                        os: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        od: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                    },
                    autoPerimetry: {
                        instrument: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        od: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                        os: {
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                        },
                    },
                    tangentSreen: {
                        other:{
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
        // tangent screen methods
        tangentScreenEdit(){
            this.$refs.tangentScreenImageEditor.openMaximizable()
        },
        tangentScreenDelete(){
            this.$refs.tangentScreenImageEditor.delete()
        },
        // tangentScreenUpload(){
        //     this.$refs.tangentScreenImageEditor.openMaximizable()
        // },
        tangentScreenTemplateChanged(imgUrl){
            this.tangentScreenUserTemplateImage=imgUrl
        },
        // amsler grid od methods
        amslerGridOdEdit(){
            this.$refs.amslerGridOdImageEditor.openMaximizable()
        },
        amslerGridOdDelete(){
            this.$refs.amslerGridOdImageEditor.delete()
        },
        amslerGridOdTemplateChanged(imgUrl){
            this.amslerGridUserTemplateImageOd=imgUrl
        },
        // amsler grid os methods
        amslerGridOsEdit(){
            this.$refs.amslerGridOsImageEditor.openMaximizable()
        },
        amslerGridOsDelete(){
            this.$refs.amslerGridOsImageEditor.delete()
        },
        amslerGridOsTemplateChanged(imgUrl){
            this.amslerGridUserTemplateImageOs=imgUrl
        },
    },
}
</script>
<style lang="scss" scoped>
.visual-field{
    .image-wrapper{
        .image-od-os{
                // margin-top:40px;
        }
        .image-controllers{
            .tangent-screen-edit,.tangent-screen-delete{
                cursor: pointer;
            }
        }
    }
}
</style>
