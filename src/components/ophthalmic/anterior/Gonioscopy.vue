<template>
    <div class="gonioscopy">
        <div class="row my-2">
            <div class="col-lg-8 col-xl-7 offset-lg-2">
                <div class="row my-4">
                    <div class="col-md-6">
                        <div><h4 class="text-center">O.D</h4></div>
                        <div class="image-wrapper">
                            <img v-if="gonioscopyUserTemplateImageOd" :src="gonioscopyUserTemplateImageOd"  class="w-100 d-block">
                            <img v-else :src="gonioscopyTemplateImageOd"  class="w-100 d-block image-od">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="gonioscopyOdEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="gonioscopyOdDelete"
                                    class="tangent-screen-delete"
                                >
                            </div>
                            <ImageEditor 
                                ref="gonioscopyOdImageEditor"
                                :templateName="'ginioscopy.svg'"
                                @templateChanged="gonioscopyOdTemplateChanged" 
                            />
                            <div class="box-wrapper">
                                <div class="dirctions-wrapper">
                                    <div class="north d-flex align-items-center justify-content-center gap-1">
                                        <InputText type="number" v-model="data.gonioscopy.od.box.north.number" placeholder="+1" 
                                        class="my-2" :class="{'p-invalid':$v.data.gonioscopy.od.box.north.number.$invalid}" />
                                        <div class="error">
                                            <small 
                                                class="d-block text-danger" 
                                                v-if="$v.data.gonioscopy.od.box.north.number.$model !='' && !$v.data.gonioscopy.od.box.north.number.numeric"
                                            >
                                                {{errors.numericError('This Field')}}
                                            </small>
                                        </div>
                                        <Dropdown 
                                            v-model="data.gonioscopy.od.box.north.direction" 
                                            :options="dropdownOptions" 
                                            :optionLabel="local=='ar'?'arabic':'english'" 
                                            placeholder="Select" 
                                        />
                                    </div>
                                    <div class="south d-flex align-items-center justify-content-center gap-1">
                                        <InputText type="number" v-model="data.gonioscopy.od.box.south.number" placeholder="+1" 
                                        class="my-2" :class="{'p-invalid':$v.data.gonioscopy.od.box.south.number.$invalid}" />
                                        <div class="error">
                                            <small 
                                                class="d-block text-danger" 
                                                v-if="$v.data.gonioscopy.od.box.south.number.$model !='' && !$v.data.gonioscopy.od.box.south.number.numeric"
                                            >
                                                {{errors.numericError('This Field')}}
                                            </small>
                                        </div>
                                        <Dropdown 
                                            v-model="data.gonioscopy.od.box.south.direction" 
                                            :options="dropdownOptions" 
                                            :optionLabel="local=='ar'?'arabic':'english'" 
                                            placeholder="Select" 
                                        />
                                    </div>
                                    <div class="east">
                                        <div class="d-flex align-items-center justify-content-center gap-1">
                                            <div>
                                                <InputText type="number" v-model="data.gonioscopy.od.box.east.number" placeholder="+1" 
                                                class="my-2" :class="{'p-invalid':$v.data.gonioscopy.od.box.east.number.$invalid}" />
                                                <div class="error">
                                                    <small 
                                                        class="d-block text-danger" 
                                                        v-if="$v.data.gonioscopy.od.box.east.number.$model !='' && !$v.data.gonioscopy.od.box.east.number.numeric"
                                                    >
                                                        {{errors.numericError('This Field')}}
                                                    </small>
                                                </div>
                                                <Dropdown 
                                                    v-model="data.gonioscopy.od.box.east.direction" 
                                                    :options="dropdownOptions" 
                                                    :optionLabel="local=='ar'?'arabic':'english'" 
                                                    placeholder="Select" 
                                                />
                                            </div>
                                            <div><h4>N</h4></div>
                                        </div>
                                    </div>
                                    <div class="west">
                                        <div class="d-flex align-items-center justify-content-center gap-1">
                                            <div><h4>T</h4></div>
                                            <div>
                                                <InputText type="number" v-model="data.gonioscopy.od.box.west.number" placeholder="+1" class="my-2" :class="{'p-invalid':$v.data.gonioscopy.od.box.west.number.$invalid}" />
                                                <div class="error">
                                                    <small 
                                                        class="d-block text-danger" 
                                                        v-if="$v.data.gonioscopy.od.box.west.number.$model !='' && !$v.data.gonioscopy.od.box.west.number.numeric"
                                                    >
                                                        {{errors.numericError('This Field')}}
                                                    </small>
                                                </div>
                                                <Dropdown 
                                                    v-model="data.gonioscopy.od.box.west.direction" 
                                                    :options="dropdownOptions" 
                                                    :optionLabel="local=='ar'?'arabic':'english'" 
                                                    placeholder="Select" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4 d-flex align-items-center"><label>{{lang[local].gonioscopy.iris.label}}</label></div>
                            <div class="col-sm-8">
                                <InputText type="text" v-model="data.gonioscopy.od.iris" 
                                    :placeholder="lang[local].gonioscopy.iris.placeholder" 
                                    class="my-2" :class="{'p-invalid':$v.data.gonioscopy.od.iris.$invalid}"
                                 />
                                <div class="error">
                                    <small 
                                        class="d-block text-danger" 
                                        v-if="$v.data.gonioscopy.od.iris.$model !='' && !$v.data.gonioscopy.od.iris.notContainsHtmlTags"
                                    >
                                        {{errors.htmlTagsError(lang[local].gonioscopy.iris.label)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.gonioscopy.od.iris.minLen">
                                        {{errors.minLengthError(lang[local].gonioscopy.iris.label,$v.data.gonioscopy.od.iris.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.gonioscopy.od.iris.maxLen">
                                        {{errors.maxLengthError(lang[local].gonioscopy.iris.label, $v.data.gonioscopy.od.iris.$params.maxLen.max) }}
                                    </small>
                                </div>  
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <CustomDropDown
                                    class="my-2"
                                    :label="lang[local].gonioscopy.lens.label"
                                    :placeholder="lang[local].gonioscopy.lens.placeholder"
                                    :data="data.gonioscopy.od.lens"
                                    :options="gonioscopyOptions" 
                                    :selectionKey="'lenSelection'"
                                    :v="$v.data.gonioscopy.od.lens.other"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div><h4 class="text-center">O.S</h4></div>
                        <div class="image-wrapper">
                            <img v-if="gonioscopyUserTemplateImageOs" :src="gonioscopyUserTemplateImageOs"  class="w-100 d-block">
                            <img v-else :src="gonioscopyTemplateImageOs"  class="w-100 d-block image-od">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="gonioscopyOsEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="gonioscopyOsDelete"
                                    class="tangent-screen-delete"
                                >
                            </div>
                            <ImageEditor 
                                ref="gonioscopyOsImageEditor"
                                :templateName="'ginioscopy.svg'"
                                @templateChanged="gonioscopyOsTemplateChanged" 
                            />
                            <div class="box-wrapper">
                                <div class="dirctions-wrapper">
                                    <div class="north d-flex align-items-center justify-content-center gap-1">
                                        <InputText type="number" v-model="data.gonioscopy.os.box.north.number" placeholder="+1" 
                                        class="my-2" :class="{'p-invalid':$v.data.gonioscopy.os.box.north.number.$invalid}" />
                                        <div class="error">
                                            <small 
                                                class="d-block text-danger" 
                                                v-if="$v.data.gonioscopy.os.box.north.number.$model !='' && !$v.data.gonioscopy.os.box.north.number.numeric"
                                            >
                                                {{errors.numericError('This Field')}}
                                            </small>
                                        </div>
                                        <Dropdown 
                                            v-model="data.gonioscopy.os.box.north.direction" 
                                            :options="dropdownOptions" 
                                            :optionLabel="local=='ar'?'arabic':'english'" 
                                            placeholder="Select" 
                                        />
                                    </div>
                                    <div class="south d-flex align-items-center justify-content-center gap-1">
                                        <InputText type="number" v-model="data.gonioscopy.os.box.south.number" placeholder="+1" 
                                        class="my-2" :class="{'p-invalid':$v.data.gonioscopy.os.box.south.number.$invalid}" />
                                        <div class="error">
                                            <small 
                                                class="d-block text-danger" 
                                                v-if="$v.data.gonioscopy.os.box.south.number.$model !='' && !$v.data.gonioscopy.os.box.south.number.numeric"
                                            >
                                                {{errors.numericError('This Field')}}
                                            </small>
                                        </div>
                                        <Dropdown 
                                            v-model="data.gonioscopy.os.box.south.direction" 
                                            :options="dropdownOptions" 
                                            :optionLabel="local=='ar'?'arabic':'english'" 
                                            placeholder="Select" 
                                        />
                                    </div>
                                    <div class="east">
                                        <div class="d-flex align-items-center justify-content-center gap-1">
                                            <div>
                                                <InputText type="number" v-model="data.gonioscopy.os.box.east.number" placeholder="+1" 
                                                class="my-2" :class="{'p-invalid':$v.data.gonioscopy.os.box.east.number.$invalid}" />
                                                <div class="error">
                                                    <small 
                                                        class="d-block text-danger" 
                                                        v-if="$v.data.gonioscopy.os.box.east.number.$model !='' && !$v.data.gonioscopy.os.box.east.number.numeric"
                                                    >
                                                        {{errors.numericError('This Field')}}
                                                    </small>
                                                </div>
                                                <Dropdown 
                                                    v-model="data.gonioscopy.os.box.east.direction" 
                                                    :options="dropdownOptions" 
                                                    :optionLabel="local=='ar'?'arabic':'english'" 
                                                    placeholder="Select" 
                                                />
                                            </div>
                                            <div><h4>N</h4></div>
                                        </div>
                                    </div>
                                    <div class="west">
                                        <div class="d-flex align-items-center justify-content-center gap-1">
                                            <div><h4>T</h4></div>
                                            <div>
                                                <InputText type="number" v-model="data.gonioscopy.os.box.west.number" placeholder="+1" class="my-2" :class="{'p-invalid':$v.data.gonioscopy.os.box.west.number.$invalid}" />
                                                <div class="error">
                                                    <small 
                                                        class="d-block text-danger" 
                                                        v-if="$v.data.gonioscopy.os.box.west.number.$model !='' && !$v.data.gonioscopy.os.box.west.number.numeric"
                                                    >
                                                        {{errors.numericError('This Field')}}
                                                    </small>
                                                </div>
                                                <Dropdown 
                                                    v-model="data.gonioscopy.os.box.west.direction" 
                                                    :options="dropdownOptions" 
                                                    :optionLabel="local=='ar'?'arabic':'english'" 
                                                    placeholder="Select" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4 d-flex align-items-center"><label>{{lang[local].gonioscopy.iris.label}}</label></div>
                            <div class="col-sm-8">
                                <InputText type="text" v-model="data.gonioscopy.os.iris" 
                                    :placeholder="lang[local].gonioscopy.iris.placeholder" 
                                    class="my-2" :class="{'p-invalid':$v.data.gonioscopy.os.iris.$invalid}"
                                 />
                                <div class="error">
                                    <small 
                                        class="d-block text-danger" 
                                        v-if="$v.data.gonioscopy.os.iris.$model !='' && !$v.data.gonioscopy.os.iris.notContainsHtmlTags"
                                    >
                                        {{errors.htmlTagsError(lang[local].gonioscopy.iris.label)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.gonioscopy.os.iris.minLen">
                                        {{errors.minLengthError(lang[local].gonioscopy.iris.label,$v.data.gonioscopy.os.iris.$params.minLen.min)}}
                                    </small>
                                    <small class="text-error my-2" v-else-if="!$v.data.gonioscopy.os.iris.maxLen">
                                        {{errors.maxLengthError(lang[local].gonioscopy.iris.label, $v.data.gonioscopy.os.iris.$params.maxLen.max) }}
                                    </small>
                                </div>  
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <CustomDropDown
                                    class="my-2"
                                    :label="lang[local].gonioscopy.lens.label"
                                    :placeholder="lang[local].gonioscopy.lens.placeholder"
                                    :data="data.gonioscopy.os.lens"
                                    :options="gonioscopyOptions" 
                                    :selectionKey="'lenSelection'"
                                    :v="$v.data.gonioscopy.os.lens.other"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-8 col-xl-7 offset-lg-2">
                <label>{{lang[local].gonioscopy.note.label}}</label>
                <Textarea 
                    v-model="data.gonioscopy.note" 
                    :placeholder="lang[local].gonioscopy.note.placeholder" rows="3"
                    :class="{'p-invalid':$v.data.gonioscopy.note.$invalid}"
                 />
                <div class="error">
                    <small 
                        class="d-block text-danger" 
                        v-if="$v.data.gonioscopy.note.$model !='' && !$v.data.gonioscopy.note.notContainsHtmlTags"
                    >
                        {{errors.htmlTagsError(lang[local].gonioscopy.note.label)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.gonioscopy.note.minLen">
                        {{errors.minLengthError(lang[local].gonioscopy.note.label,$v.data.gonioscopy.note.$params.minLen.min)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.gonioscopy.note.maxLen">
                        {{errors.maxLengthError(lang[local].gonioscopy.note.label, $v.data.gonioscopy.note.$params.maxLen.max) }}
                    </small>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
////////////////////////////////////////////////////////
import {minLength,maxLength,numeric} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "../../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError,numericError} from '../../helpers/errors'
/////////////////////////////////////////
import anteriorOptions from '../../../mixins/clinics/ophthalmic/anterior/anteriorOptions'
import lang from '../../../mixins/clinics/ophthalmic/anterior/lang'
import measurementsOptions from '../../../mixins/clinics/ophthalmic/shared/measurements/measurementsOptions'
import ImageEditor from '../../../components/shared/ImageEditor.vue'
import CustomDropDown from '../shared components/CustomDropDown.vue'
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
// import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
export default {
    mixins:[anteriorOptions,lang,measurementsOptions],
    props:{
        data:{
            type:Object,
            required:true
        },
    },
    components:{
        ImageEditor,
        CustomDropDown,
        InputText,
        Dropdown,
        // Button,
        Textarea,
    },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            //// od ////
            gonioscopyTemplateImageOd:require('../../../assets/imageEditorTemplates/ginioscopy.svg'),
            gonioscopyUserTemplateImageOd:null,
            //// os ////
            gonioscopyTemplateImageOs:require('../../../assets/imageEditorTemplates/ginioscopy.svg'),
            gonioscopyUserTemplateImageOs:null,
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
                numericError,
            },
        }
    },
    validations:{
        data:{
            gonioscopy: {
                    od: {
                        box: {
                            north: {
                                number:{
                                    numeric
                                },
                            }, 
                            south: {
                                number:{
                                    numeric
                                },
                            },
                            east: {
                                number:{
                                    numeric
                                },
                            },
                            west: {
                                number:{
                                    numeric
                                },
                            },
                        },
                        iris:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        lens:{
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            }
                        },
                    },
                    os: {
                        box: {
                            north: {
                                number:{
                                    numeric
                                },
                            }, 
                            south: {
                                number:{
                                    numeric
                                },
                            },
                            east: {
                                number:{
                                    numeric
                                },
                            },
                            west: {
                                number:{
                                    numeric
                                },
                            },
                        },
                        iris:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        lens:{
                            other:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            }
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
        // gonioscopy od methods
        gonioscopyOdEdit(){
            this.$refs.gonioscopyOdImageEditor.openMaximizable()
        },
        gonioscopyOdDelete(){
            this.$refs.gonioscopyOdImageEditor.delete()
        },
        gonioscopyOdTemplateChanged(imgUrl){
            this.gonioscopyUserTemplateImageOd=imgUrl
        },
        // gonioscopy os methods
        gonioscopyOsEdit(){
            this.$refs.gonioscopyOsImageEditor.openMaximizable()
        },
        gonioscopyOsDelete(){
            this.$refs.gonioscopyOsImageEditor.delete()
        },
        gonioscopyOsTemplateChanged(imgUrl){
            this.gonioscopyUserTemplateImageOs=imgUrl
        },
    },
}
</script>
<style lang="scss" scoped>
.gonioscopy{
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
        position: relative;
        .box-wrapper{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 10%;
            .dirctions-wrapper{
                position: relative;
                width: 100%;
                height: 100%;
                .north{
                    position: absolute;
                    top: 7%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 65%;
                    margin: 0 auto;
                }
                .south{
                    position: absolute;
                    transform: translate(-50%,-50%);
                    bottom:-9%;
                    left: 50%;
                    width: 65%;
                    margin: 0 auto;
                }
                .west{
                    position: absolute;
                    transform: translate(5%, -50%);
                    top: 50%;
                    left: 0%;
                    width: 40%;
                    margin: auto auto;
                }
                .east{
                    position: absolute;
                    transform: translate(-5%, -50%);
                    top: 50%;
                    right: 0%;
                    width: 40%;
                    margin: auto auto;
                }
            }
        }
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