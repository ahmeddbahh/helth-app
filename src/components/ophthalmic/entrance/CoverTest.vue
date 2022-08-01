<template>
    <div class="cover-test">
        <div class="row my-5">
            <div class="form-wrapper col-lg-4 col-md-6">
                <div class="row my-2">
                    <div class="col-12">
                        <h4>{{lang[local].coverTest.hirschbergTest.heading}}</h4>
                    </div>
                </div>
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].coverTest.hirschbergTest.od.label"
                    :placeholder="lang[local].coverTest.hirschbergTest.od.placeholder" 
                    :data="data.coverTest.hirschbergTest.od"
                    :options="hirschbergOdOptions" 
                    :selectionKey="'odSelection'"
                    :v="$v.data.coverTest.hirschbergTest.od.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].coverTest.hirschbergTest.os.label"
                    :placeholder="lang[local].coverTest.hirschbergTest.os.placeholder" 
                    :data="data.coverTest.hirschbergTest.os"
                    :options="hirschbergOsOptions" 
                    :selectionKey="'osSelection'"
                    :v="$v.data.coverTest.hirschbergTest.os.other"
                />
            </div>
            <div class="form-wrapper offset-lg-2 col-lg-4 col-md-6">
                <div class="row my-2">
                    <div class="col-12">
                        <h4>{{lang[local].coverTest.brucknerTest.heading}}</h4>
                    </div>
                </div>
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].coverTest.brucknerTest.od.label"
                    :placeholder="lang[local].coverTest.brucknerTest.od.placeholder" 
                    :data="data.coverTest.brucknerTest.od"
                    :options="hirschbergOdOptions" 
                    :selectionKey="'odSelection'"
                    :v="$v.data.coverTest.brucknerTest.od.other"
                />
                <CustomDropDown
                    class="my-2"
                    :label="lang[local].coverTest.brucknerTest.os.label"
                    :placeholder="lang[local].coverTest.brucknerTest.os.placeholder" 
                    :data="data.coverTest.brucknerTest.os"
                    :options="hirschbergOsOptions" 
                    :selectionKey="'osSelection'"
                    :v="$v.data.coverTest.brucknerTest.os.other"
                />
            </div>
        </div>


        <div class="row my-2">
            <div class="col-12 d-flex align-items-center gap-2">
                <label>{{lang[local].coverTest.unilateralCoverTest.switchLabel}}</label>
                <InputSwitch v-model="checked" />
                <label>{{lang[local].coverTest.alternatingCoverTest.switchLabel}}</label>
            </div>
        </div>

        <div class="row my-2" v-show="!checked">
            <div class="col-md-6">
                <div class="row my-2">
                    <div class="col-12"><h4>{{lang[local].coverTest.unilateralCoverTest.heading}}</h4></div>
                </div>
                <div class="row my-2">
                    <div class="col-4"></div>
                    <div class="col-4"><label class="text-center">{{lang[local].coverTest.unilateralCoverTest.distantVision}}</label></div>
                    <div class="col-4"><label class="text-center">{{lang[local].coverTest.unilateralCoverTest.nearVision}}</label></div>
                </div>
                <div class="row my-2">

                    <div class="col-4"><label>{{lang[local].coverTest.unilateralCoverTest.uLateral.label}}</label></div>

                    <div class="col-4">
                        <InputText type="text" v-model="data.coverTest.unilateralCoverTest.distantVision.uLateral" 
                        :placeholder="lang[local].coverTest.unilateralCoverTest.uLateral.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.coverTest.unilateralCoverTest.distantVision.uLateral.$model !='' && !$v.data.coverTest.unilateralCoverTest.distantVision.uLateral.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].coverTest.unilateralCoverTest.uLateral.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.unilateralCoverTest.distantVision.uLateral.minLen">
                                {{errors.minLengthError(lang[local].coverTest.unilateralCoverTest.uLateral.label,$v.data.coverTest.unilateralCoverTest.distantVision.uLateral.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.unilateralCoverTest.distantVision.uLateral.maxLen">
                                {{errors.maxLengthError(lang[local].coverTest.unilateralCoverTest.uLateral.label, $v.data.coverTest.unilateralCoverTest.distantVision.uLateral.$params.maxLen.max) }}
                            </small>
                        </div>   
                    </div>

                    <div class="col-4">
                        <InputText type="text" v-model="data.coverTest.unilateralCoverTest.nearVision.uLateral" 
                        :placeholder="lang[local].coverTest.unilateralCoverTest.uLateral.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.coverTest.unilateralCoverTest.nearVision.uLateral.$model !='' && !$v.data.coverTest.unilateralCoverTest.nearVision.uLateral.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].coverTest.unilateralCoverTest.uLateral.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.unilateralCoverTest.nearVision.uLateral.minLen">
                                {{errors.minLengthError(lang[local].coverTest.unilateralCoverTest.uLateral.label,$v.data.coverTest.unilateralCoverTest.nearVision.uLateral.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.unilateralCoverTest.nearVision.uLateral.maxLen">
                                {{errors.maxLengthError(lang[local].coverTest.unilateralCoverTest.uLateral.label, $v.data.coverTest.unilateralCoverTest.nearVision.uLateral.$params.maxLen.max) }}
                            </small>
                        </div>   
                    </div>

                </div>
                <div class="row my-2">

                    <div class="col-4"><label>{{lang[local].coverTest.unilateralCoverTest.uVertical.label}}</label></div>

                    <div class="col-4">
                        <InputText type="text" v-model="data.coverTest.unilateralCoverTest.distantVision.uVertical" 
                        :placeholder="lang[local].coverTest.unilateralCoverTest.uVertical.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.coverTest.unilateralCoverTest.distantVision.uVertical.$model !='' && !$v.data.coverTest.unilateralCoverTest.distantVision.uVertical.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].coverTest.unilateralCoverTest.uVertical.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.unilateralCoverTest.distantVision.uVertical.minLen">
                                {{errors.minLengthError(lang[local].coverTest.unilateralCoverTest.uVertical.label,$v.data.coverTest.unilateralCoverTest.distantVision.uVertical.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.unilateralCoverTest.distantVision.uVertical.maxLen">
                                {{errors.maxLengthError(lang[local].coverTest.unilateralCoverTest.uVertical.label, $v.data.coverTest.unilateralCoverTest.distantVision.uVertical.$params.maxLen.max) }}
                            </small>
                        </div>   
                    </div>

                    <div class="col-4">
                        <InputText type="text" v-model="data.coverTest.unilateralCoverTest.nearVision.uVertical" 
                        :placeholder="lang[local].coverTest.unilateralCoverTest.uVertical.placeholder"
                         />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.coverTest.unilateralCoverTest.nearVision.uVertical.$model !='' && !$v.data.coverTest.unilateralCoverTest.nearVision.uVertical.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].coverTest.unilateralCoverTest.uVertical.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.unilateralCoverTest.nearVision.uVertical.minLen">
                                {{errors.minLengthError(lang[local].coverTest.unilateralCoverTest.uVertical.label,$v.data.coverTest.unilateralCoverTest.nearVision.uVertical.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.unilateralCoverTest.nearVision.uVertical.maxLen">
                                {{errors.maxLengthError(lang[local].coverTest.unilateralCoverTest.uVertical.label, $v.data.coverTest.unilateralCoverTest.nearVision.uVertical.$params.maxLen.max) }}
                            </small>
                        </div>   
                    </div>

                </div>
                <div class="row my-2">
                    <div class="col-4"><label>{{lang[local].coverTest.unilateralCoverTest.uNoncomitant.label}}</label></div>
                    <div class="col-4"><Checkbox v-model="data.coverTest.unilateralCoverTest.distantVision.uNoncomitant" :binary="true" /></div>
                    <div class="col-4"><Checkbox v-model="data.coverTest.unilateralCoverTest.nearVision.uNoncomitant" :binary="true" /></div>
                </div>
            </div>
        </div>
        <div class="row my-2" v-show="checked">
            <div class="col-md-6">
                <div class="row my-2">
                    <div class="col-12"><h4>{{lang[local].coverTest.alternatingCoverTest.heading}}</h4></div>
                </div>
                <div class="row my-2">
                    <div class="col-4"></div>
                    <div class="col-4"><label class="text-center">{{lang[local].coverTest.alternatingCoverTest.distantVision}}</label></div>
                    <div class="col-4"><label class="text-center">{{lang[local].coverTest.alternatingCoverTest.nearVision}}</label></div>
                </div>
                <div class="row my-2">

                    <div class="col-4"><label>{{lang[local].coverTest.alternatingCoverTest.lateral.label}}</label></div>

                    <div class="col-4">
                        <InputText type="text" v-model="data.coverTest.alternatingCoverTest.distantVision.lateral" 
                        :placeholder="lang[local].coverTest.alternatingCoverTest.lateral.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.coverTest.alternatingCoverTest.distantVision.lateral.$model !='' && !$v.data.coverTest.alternatingCoverTest.distantVision.lateral.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].coverTest.alternatingCoverTest.lateral.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.alternatingCoverTest.distantVision.lateral.minLen">
                                {{errors.minLengthError(lang[local].coverTest.alternatingCoverTest.lateral.label,$v.data.coverTest.alternatingCoverTest.distantVision.lateral.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.alternatingCoverTest.distantVision.lateral.maxLen">
                                {{errors.maxLengthError(lang[local].coverTest.alternatingCoverTest.lateral.label, $v.data.coverTest.alternatingCoverTest.distantVision.lateral.$params.maxLen.max) }}
                            </small>
                        </div>   
                    </div>

                    <div class="col-4">
                        <InputText type="text" v-model="data.coverTest.alternatingCoverTest.nearVision.lateral" 
                        :placeholder="lang[local].coverTest.alternatingCoverTest.lateral.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.coverTest.alternatingCoverTest.nearVision.lateral.$model !='' && !$v.data.coverTest.alternatingCoverTest.nearVision.lateral.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].coverTest.alternatingCoverTest.lateral.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.alternatingCoverTest.nearVision.lateral.minLen">
                                {{errors.minLengthError(lang[local].coverTest.alternatingCoverTest.lateral.label,$v.data.coverTest.alternatingCoverTest.nearVision.lateral.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.alternatingCoverTest.nearVision.lateral.maxLen">
                                {{errors.maxLengthError(lang[local].coverTest.alternatingCoverTest.lateral.label, $v.data.coverTest.alternatingCoverTest.nearVision.lateral.$params.maxLen.max) }}
                            </small>
                        </div>   
                    </div>

                </div>
                <div class="row my-2">

                    <div class="col-4"><label>{{lang[local].coverTest.alternatingCoverTest.vertical.label}}</label></div>

                    <div class="col-4">
                        <InputText type="text" v-model="data.coverTest.alternatingCoverTest.distantVision.vertical" 
                        :placeholder="lang[local].coverTest.alternatingCoverTest.vertical.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.coverTest.alternatingCoverTest.distantVision.vertical.$model !='' && !$v.data.coverTest.alternatingCoverTest.distantVision.vertical.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].coverTest.alternatingCoverTest.vertical.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.alternatingCoverTest.distantVision.vertical.minLen">
                                {{errors.minLengthError(lang[local].coverTest.alternatingCoverTest.vertical.label,$v.data.coverTest.alternatingCoverTest.distantVision.vertical.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.alternatingCoverTest.distantVision.vertical.maxLen">
                                {{errors.maxLengthError(lang[local].coverTest.alternatingCoverTest.vertical.label, $v.data.coverTest.alternatingCoverTest.distantVision.vertical.$params.maxLen.max) }}
                            </small>
                        </div>   
                    </div>

                    <div class="col-4">
                        <InputText type="text" v-model="data.coverTest.alternatingCoverTest.nearVision.vertical" 
                        :placeholder="lang[local].coverTest.alternatingCoverTest.vertical.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.coverTest.alternatingCoverTest.nearVision.vertical.$model !='' && !$v.data.coverTest.alternatingCoverTest.nearVision.vertical.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].coverTest.alternatingCoverTest.vertical.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.alternatingCoverTest.nearVision.vertical.minLen">
                                {{errors.minLengthError(lang[local].coverTest.alternatingCoverTest.vertical.label,$v.data.coverTest.alternatingCoverTest.nearVision.vertical.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.alternatingCoverTest.nearVision.vertical.maxLen">
                                {{errors.maxLengthError(lang[local].coverTest.alternatingCoverTest.vertical.label, $v.data.coverTest.alternatingCoverTest.nearVision.vertical.$params.maxLen.max) }}
                            </small>
                        </div>   
                    </div>

                </div>
                <div class="row my-2">
                    <div class="col-4"><label>{{lang[local].coverTest.alternatingCoverTest.aNoncomitant.label}}</label></div>
                    <div class="col-4"><Checkbox v-model="data.coverTest.alternatingCoverTest.distantVision.aNoncomitant" :binary="true" /></div>
                    <div class="col-4"><Checkbox v-model="data.coverTest.alternatingCoverTest.nearVision.aNoncomitant" :binary="true" /></div>
                </div>
            </div>
        </div>


        <div class="row my-2">
            <div class="form-wrapper col-xl-4 col-md-6">
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].coverTest.note.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <Textarea v-model="data.coverTest.note" :placeholder="lang[local].coverTest.note.placeholder" rows="3" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.coverTest.note.$model !='' && !$v.data.coverTest.note.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].coverTest.note.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.note.minLen">
                                {{errors.minLengthError(lang[local].coverTest.note.label,$v.data.coverTest.note.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.coverTest.note.maxLen">
                                {{errors.maxLengthError(lang[local].coverTest.note.label, $v.data.coverTest.note.$params.maxLen.max) }}
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
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import InputSwitch from 'primevue/inputswitch';
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
        InputText,
        Checkbox,
        InputSwitch,
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
            coverTest: {
                hirschbergTest: {
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
                brucknerTest: {
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
                unilateralCoverTest: {
                    distantVision: {
                        uLateral:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        uVertical:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    nearVision: {
                        uLateral:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        uVertical:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                        },
                    },
                },
                alternatingCoverTest: {
                    distantVision: {
                        lateral:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        vertical:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    nearVision: {
                        lateral:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        vertical:{
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
}
</script>
<style lang="scss" scoped>
.cover-test{

}
</style>
