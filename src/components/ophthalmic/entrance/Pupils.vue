<template>
    <div class="pupils">
        <div class="row my-3">
            <div class="col-lg-8 col-xl-7">
                <div class="svg-wrapper">
                    <img src="../../../UI/icons/clinic/ophthalmic/entrance/pupils/eyes.svg" alt="" class="w-100">
                </div>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-lg-8 col-xl-7">
                <div class="eyes-labels">
                    <div class="label-wrapper"><h3>{{lang[local].eyesLabels.od}}</h3></div>
                    <div class="label-wrapper"><h3>{{lang[local].eyesLabels.os}}</h3></div>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-lg-8 col-xl-7">
                <CustomInputGroup 
                    :data="data" 
                    :label="lang[local].pupils.sizeInLight.label" 
                    :visibleControllers="true"
                    :keyModel="'sizeInLight'" 
                    :placeholder="lang[local].pupils.sizeInLight.placeholder"
                    :v="$v"
                />
                <div class="error">
                    <small 
                        class="d-block text-danger text-center" 
                        v-if="($v.data.pupils.od.sizeInDark.$model !='' && !$v.data.pupils.od.sizeInLight.decimal) || 
                                ($v.data.pupils.os.sizeInLight.$model !='' && !$v.data.pupils.os.sizeInLight.decimal)"
                    >
                        {{errors.numericError(lang[local].pupils.sizeInLight.label)}}
                    </small>
                </div>  
                <CustomInputGroup 
                    :data="data" 
                    :label="lang[local].pupils.sizeInDark.label" 
                    :keyModel="'sizeInDark'" 
                    :placeholder="lang[local].pupils.sizeInDark.placeholder"
                    :v="$v"  
                />
                <div class="error">
                    <small 
                        class="d-block text-danger text-center" 
                        v-if="($v.data.pupils.od.sizeInDark.$model !='' && !$v.data.pupils.od.sizeInDark.decimal) || 
                                ($v.data.pupils.os.sizeInDark.$model !='' && !$v.data.pupils.os.sizeInDark.decimal)"
                    >
                        {{errors.numericError(lang[local].pupils.sizeInDark.label)}}
                    </small>
                </div>  
                <CustomInputGroup 
                    :data="data" 
                    :label="lang[local].pupils.shape.label"  
                    :keyModel="'shape'" 
                    :placeholder="lang[local].pupils.shape.placeholder"
                    :v="$v"  
                />
                <div class="error">
                    <small 
                        class="d-block text-danger text-center" 
                        v-if="($v.data.pupils.od.shape.$model !='' && !$v.data.pupils.od.shape.notContainsHtmlTags) || 
                                ($v.data.pupils.os.shape.$model !='' && !$v.data.pupils.os.shape.notContainsHtmlTags)"
                    >
                        {{errors.htmlTagsError(lang[local].pupils.shape.label)}}
                    </small>
                    <small class="text-error text-center my-2" v-else-if="!$v.data.pupils.od.shape.minLen || !$v.data.pupils.os.shape.minLen">
                        {{errors.minLengthError(lang[local].pupils.shape.label,$v.data.pupils.od.shape.$params.minLen.min)}}
                    </small>
                    <small class="text-error text-center my-2" v-else-if="!$v.data.pupils.od.shape.maxLen || !$v.data.pupils.od.accom.maxLen">
                        {{errors.maxLengthError(lang[local].pupils.shape.label, $v.data.pupils.od.shape.$params.maxLen.max) }}
                    </small>
                </div>  
                <CustomInputGroup 
                    :data="data" 
                    :label="lang[local].pupils.reaction.label" 
                    :keyModel="'reaction'" 
                    :placeholder="lang[local].pupils.reaction.placeholder"
                    :v="$v"
                />
                <div class="error">
                    <small 
                        class="d-block text-danger text-center" 
                        v-if="($v.data.pupils.od.reaction.$model !='' && !$v.data.pupils.od.reaction.notContainsHtmlTags) || 
                                ($v.data.pupils.os.reaction.$model !='' && !$v.data.pupils.os.reaction.notContainsHtmlTags)"
                    >
                        {{errors.htmlTagsError(lang[local].pupils.reaction.label)}}
                    </small>
                    <small class="text-error text-center my-2" v-else-if="!$v.data.pupils.od.reaction.minLen || !$v.data.pupils.os.reaction.minLen">
                        {{errors.minLengthError(lang[local].pupils.reaction.label,$v.data.pupils.od.reaction.$params.minLen.min)}}
                    </small>
                    <small class="text-error text-center my-2" v-else-if="!$v.data.pupils.od.reaction.maxLen || !$v.data.pupils.od.accom.maxLen">
                        {{errors.maxLengthError(lang[local].pupils.reaction.label, $v.data.pupils.od.reaction.$params.maxLen.max) }}
                    </small>
                </div>  
                <CustomInputGroup 
                    :data="data" 
                    :label="lang[local].pupils.mGunn.label" 
                    :keyModel="'mGunn'" 
                    :placeholder="lang[local].pupils.mGunn.placeholder"
                    :v="$v" 
                />
                <div class="error">
                    <small 
                        class="d-block text-danger text-center" 
                        v-if="($v.data.pupils.od.mGunn.$model !='' && !$v.data.pupils.od.mGunn.notContainsHtmlTags) || 
                                ($v.data.pupils.os.mGunn.$model !='' && !$v.data.pupils.os.mGunn.notContainsHtmlTags)"
                    >
                        {{errors.htmlTagsError(lang[local].pupils.mGunn.label)}}
                    </small>
                    <small class="text-error text-center my-2" v-else-if="!$v.data.pupils.od.mGunn.minLen || !$v.data.pupils.os.mGunn.minLen">
                        {{errors.minLengthError(lang[local].pupils.mGunn.label,$v.data.pupils.od.mGunn.$params.minLen.min)}}
                    </small>
                    <small class="text-error text-center my-2" v-else-if="!$v.data.pupils.od.mGunn.maxLen || !$v.data.pupils.od.accom.maxLen">
                        {{errors.maxLengthError(lang[local].pupils.mGunn.label, $v.data.pupils.od.mGunn.$params.maxLen.max) }}
                    </small>
                </div>  
                <CustomInputGroup 
                    :data="data" 
                    :label="lang[local].pupils.accom.label" 
                    :keyModel="'accom'" 
                    :placeholder="lang[local].pupils.accom.placeholder"
                    :v="$v"
                />
                <div class="error">
                    <small 
                        class="d-block text-danger text-center" 
                        v-if="($v.data.pupils.od.accom.$model !='' && !$v.data.pupils.od.accom.notContainsHtmlTags) || 
                                ($v.data.pupils.os.accom.$model !='' && !$v.data.pupils.os.accom.notContainsHtmlTags)"
                    >
                        {{errors.htmlTagsError(lang[local].pupils.accom.label)}}
                    </small>
                    <small class="text-error text-center my-2" v-else-if="!$v.data.pupils.od.accom.minLen || !$v.data.pupils.os.accom.minLen">
                        {{errors.minLengthError(lang[local].pupils.accom.label,$v.data.pupils.od.accom.$params.minLen.min)}}
                    </small>
                    <small class="text-error text-center my-2" v-else-if="!$v.data.pupils.od.accom.maxLen || !$v.data.pupils.od.accom.maxLen">
                        {{errors.maxLengthError(lang[local].pupils.accom.label, $v.data.pupils.od.accom.$params.maxLen.max) }}
                    </small>
                </div>  
                <CustomInputGroup 
                    :data="data" 
                    :label="lang[local].pupils.diagnose.label" 
                    :keyModel="'diagnose'" 
                    :placeholder="lang[local].pupils.diagnose.placeholder"
                    :v="$v"
                />
                <div class="error">
                    <small 
                        class="d-block text-danger text-center" 
                        v-if="($v.data.pupils.od.diagnose.$model !='' && !$v.data.pupils.od.diagnose.notContainsHtmlTags) || 
                                ($v.data.pupils.os.diagnose.$model !='' && !$v.data.pupils.os.diagnose.notContainsHtmlTags)"
                    >
                        {{errors.htmlTagsError(lang[local].pupils.diagnose.label)}}
                    </small>
                    <small class="text-error text-center my-2" v-else-if="!$v.data.pupils.od.diagnose.minLen || !$v.data.pupils.os.diagnose.minLen">
                        {{errors.minLengthError(lang[local].pupils.diagnose.label,$v.data.pupils.od.diagnose.$params.minLen.min)}}
                    </small>
                    <small class="text-error text-center my-2" v-else-if="!$v.data.pupils.od.diagnose.maxLen || !$v.data.pupils.od.diagnose.maxLen">
                        {{errors.maxLengthError(lang[local].pupils.diagnose.label, $v.data.pupils.od.diagnose.$params.maxLen.max) }}
                    </small>
                </div>  
                <div class="row my-2">
                    <div class="col-10 col-lg-5">
                        <label>{{lang[local].pupils.note.label}}</label>
                        <Textarea v-model="data.pupils.note" :placeholder="lang[local].pupils.note.placeholder" rows="3" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.pupils.note.$model !='' && !$v.data.pupils.note.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].pupils.note.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.pupils.note.minLen">
                                {{errors.minLengthError(lang[local].pupils.note.label,$v.data.pupils.note.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.pupils.note.maxLen">
                                {{errors.maxLengthError(lang[local].pupils.note.label, $v.data.pupils.note.$params.maxLen.max) }}
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
import {minLength,maxLength,decimal} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "../../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError,numericError} from '../../helpers/errors'
//////////////////////////////////////////////////////////
import lang from '../../../mixins/clinics/ophthalmic/entrance/lang'
import CustomInputGroup from './pupils/CustomInputGroup.vue'
import Textarea from 'primevue/textarea';
export default {
    mixins:[lang],
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    components:{
        CustomInputGroup,
        Textarea,
    },
    data(){
        return{
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
                numericError
            },
        }
    },
    validations:{
        data:{
            pupils: {
                od: {
                    sizeInLight:{
                        decimal,
                    },
                    sizeInDark:{
                        decimal,
                    },
                    shape:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    reaction:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    mGunn:{                            
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    accom:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    diagnose:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                },
                os: {
                    sizeInLight:{
                        decimal
                    },
                    sizeInDark:{
                        decimal
                    },
                    shape:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    reaction:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    mGunn:{                            
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    accom:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    diagnose:{
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
    },
}
</script>
<style lang="scss" scoped>
.pupils{
    .eyes-labels{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .label-wrapper{
            flex-grow: 1;
            display: flex;
            justify-content: center;
        }
    }
}
</style>