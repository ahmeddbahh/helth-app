<template>
    <div class="cover-test">
        <div class="row my-2">
            <div class="form-wrapper col-xl-4 col-md-6">
                <div class="row my-2">
                    <div class="col-4"><label>{{lang[local].colourVision.aquired.label}}</label></div>
                    <div class="col-4"><Checkbox v-model="data.colourVision.aquired" :binary="true" /></div>
                </div>
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].colourVision.test.label"
                    :placeholder="lang[local].colourVision.test.placeholder" 
                    :data="data.colourVision.test"
                    :options="colorTestOptions" 
                    :selectionKey="'testSelection'"
                    :v="$v.data.colourVision.test.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].colourVision.od.label"
                    :placeholder="lang[local].colourVision.od.placeholder"  
                    :data="data.colourVision.od"
                    :options="colorOdOptions" 
                    :selectionKey="'odSelection'"
                    :v="$v.data.colourVision.od.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].colourVision.os.label"
                    :placeholder="lang[local].colourVision.os.placeholder" 
                    :data="data.colourVision.os"
                    :options="colorOsOptions" 
                    :selectionKey="'osSelection'"
                    :v="$v.data.colourVision.os.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].colourVision.ou.label"
                    :placeholder="lang[local].colourVision.ou.placeholder"  
                    :data="data.colourVision.ou"
                    :options="colorOuOptions" 
                    :selectionKey="'ouSelection'"
                    :v="$v.data.colourVision.ou.other"
                />
            </div>
        </div>

        <div class="row my-2">
            <div class="col-xl-4 col-md-6">
                <div class="row my-2">
                    <div class="col-12">
                        <h4>{{lang[local].colourVision.d15.heading}}</h4>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-12">
                        <div class="image-wrapper">
                            <img v-if="d15UserTemplateImage" :src="d15UserTemplateImage"  class="w-100 d-block">
                            <img v-else :src="d15TemplateImage"  class="w-100 d-block">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="d15Edit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="d15Delete"
                                    class="tangent-screen-delete"
                                >
                                <!-- <img src="../../../UI/icons/clinic/ophthalmic/entrance/visual/done.svg"> -->
                                <!-- <img src="../../../UI/icons/clinic/ophthalmic/entrance/visual/attach.svg" @click="tangentScreenUpload"> -->
                            </div>
                            <ImageEditor
                                ref="d15ImageEditor"
                                :templateName="'visual-color-d15.png'" 
                                @templateChanged="d15TemplateChanged" 
                             />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="form-wrapper col-xl-4 col-md-6">
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].colourVision.note.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <Textarea v-model="data.colourVision.note" :placeholder="lang[local].colourVision.note.placeholder" rows="3" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.colourVision.note.$model !='' && !$v.data.colourVision.note.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].colourVision.note.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.colourVision.note.minLen">
                                {{errors.minLengthError(lang[local].colourVision.note.label,$v.data.colourVision.note.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.colourVision.note.maxLen">
                                {{errors.maxLengthError(lang[local].colourVision.note.label, $v.data.colourVision.note.$params.maxLen.max) }}
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
import Checkbox from 'primevue/checkbox';
import CustomDropDown from '../shared components/CustomDropDown.vue'
import ImageEditor from '../../shared/ImageEditor.vue'
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
        Checkbox,
        CustomDropDown,
        ImageEditor,
        Textarea,
    },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            // D15
            d15TemplateImage:require('../../../assets/imageEditorTemplates/visual-color-d15.png'),
            d15UserTemplateImage:null,
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
            },
        }
    },
    validations:{
        data:{
            colourVision: {
                    test: {
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
                    ou: {
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
        // D15 methods
        d15Edit(){
            this.$refs.d15ImageEditor.openMaximizable()
        },
        d15Delete(){
            this.$refs.d15ImageEditor.delete()
        },
        d15TemplateChanged(imgUrl){
            this.d15UserTemplateImage=imgUrl
        },
    },
}
</script>
<style lang="scss" scoped>
.cover-test{
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
