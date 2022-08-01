<template>
    <div class="obg-pelvicUs">
        <h3 class="mt-3">{{lang[local].uterus}}</h3>
        <div class="row ">
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].size}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].size" 
                        v-model="data.uterus.common.size"
                        @change="$v.data.uterus.common.size.$touch()" 
                        :class="{'border-error':$v.data.uterus.common.size.$invalid  && $v.data.uterus.common.size.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.common.size.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].size) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.common.size.minLen">
                            {{errors.minLengthError(lang[local].size,$v.data.uterus.common.size.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.common.size.maxLen">
                            {{errors.maxLengthError(lang[local].size, $v.data.uterus.common.size.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].shape}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].shape" 
                        v-model="data.uterus.common.shape"
                        @change="$v.data.uterus.common.shape.$touch()" 
                        :class="{'border-error':$v.data.uterus.common.shape.$invalid  && $v.data.uterus.common.shape.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.common.shape.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].shape) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.common.shape.minLen">
                            {{errors.minLengthError(lang[local].shape,$v.data.uterus.common.shape.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.common.shape.maxLen">
                            {{errors.maxLengthError(lang[local].shape, $v.data.uterus.common.shape.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].position}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].position" 
                        v-model="data.uterus.common.position"
                        @change="$v.data.uterus.common.position.$touch()" 
                        :class="{'border-error':$v.data.uterus.common.position.$invalid  && $v.data.uterus.common.position.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.common.position.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].position) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.common.position.minLen">
                            {{errors.minLengthError(lang[local].position,$v.data.uterus.common.position.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.common.position.maxLen">
                            {{errors.maxLengthError(lang[local].position, $v.data.uterus.common.position.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].uterineCavity}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].uterineCavity" 
                        v-model="data.uterus.common.uterineCavity"
                        @change="$v.data.uterus.common.uterineCavity.$touch()" 
                        :class="{'border-error':$v.data.uterus.common.uterineCavity.$invalid  && $v.data.uterus.common.uterineCavity.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.common.uterineCavity.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].uterineCavity) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.common.uterineCavity.minLen">
                            {{errors.minLengthError(lang[local].uterineCavity,$v.data.uterus.common.uterineCavity.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.common.uterineCavity.maxLen">
                            {{errors.maxLengthError(lang[local].uterineCavity, $v.data.uterus.common.uterineCavity.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].enContents}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].enContents" 
                        v-model="data.uterus.common.enContents"
                        @change="$v.data.uterus.common.enContents.$touch()" 
                        :class="{'border-error':$v.data.uterus.common.enContents.$invalid  && $v.data.uterus.common.enContents.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.common.enContents.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].enContents) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.common.enContents.minLen">
                            {{errors.minLengthError(lang[local].enContents,$v.data.uterus.common.enContents.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.common.enContents.maxLen">
                            {{errors.maxLengthError(lang[local].enContents, $v.data.uterus.common.enContents.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].myometrium}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].myometrium" 
                        v-model="data.uterus.common.myometrium"
                        @change="$v.data.uterus.common.myometrium.$touch()" 
                        :class="{'border-error':$v.data.uterus.common.myometrium.$invalid  && $v.data.uterus.common.myometrium.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.common.myometrium.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].myometrium) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.common.myometrium.minLen">
                            {{errors.minLengthError(lang[local].myometrium,$v.data.uterus.common.myometrium.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.common.myometrium.maxLen">
                            {{errors.maxLengthError(lang[local].myometrium, $v.data.uterus.common.myometrium.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="mt-3">{{lang[local].rightOvary}}</h3>
        <div class="row">
            <div class="col-md-4 col-lg-3  my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].size}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].size" 
                        v-model="data.uterus.rightOvary.size"
                        @change="$v.data.uterus.rightOvary.size.$touch()" 
                        :class="{'border-error':$v.data.uterus.rightOvary.size.$invalid  && $v.data.uterus.rightOvary.size.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.rightOvary.size.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].size) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.rightOvary.size.minLen">
                            {{errors.minLengthError(lang[local].size,$v.data.uterus.rightOvary.size.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.rightOvary.size.maxLen">
                            {{errors.maxLengthError(lang[local].size, $v.data.uterus.rightOvary.size.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3  my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].shape}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].shape" 
                        v-model="data.uterus.rightOvary.shape"
                        @change="$v.data.uterus.rightOvary.shape.$touch()" 
                        :class="{'border-error':$v.data.uterus.rightOvary.shape.$invalid  && $v.data.uterus.rightOvary.shape.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.rightOvary.shape.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].shape) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.rightOvary.shape.minLen">
                            {{errors.minLengthError(lang[local].shape,$v.data.uterus.rightOvary.shape.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.rightOvary.shape.maxLen">
                            {{errors.maxLengthError(lang[local].shape, $v.data.uterus.rightOvary.shape.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <h3 class="mt-3">{{lang[local].leftOvary}}</h3>
        <div class="row">
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].size}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].size" 
                        v-model="data.uterus.leftOvary.size"
                        @change="$v.data.uterus.leftOvary.size.$touch()" 
                        :class="{'border-error':$v.data.uterus.leftOvary.size.$invalid  && $v.data.uterus.leftOvary.size.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.leftOvary.size.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].size) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.leftOvary.size.minLen">
                            {{errors.minLengthError(lang[local].size,$v.data.uterus.leftOvary.size.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.leftOvary.size.maxLen">
                            {{errors.maxLengthError(lang[local].size, $v.data.uterus.leftOvary.size.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].shape}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].shape" 
                        v-model="data.uterus.leftOvary.shape"
                        @change="$v.data.uterus.leftOvary.shape.$touch()" 
                        :class="{'border-error':$v.data.uterus.leftOvary.shape.$invalid  && $v.data.uterus.leftOvary.shape.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.leftOvary.shape.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].shape) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.leftOvary.shape.minLen">
                            {{errors.minLengthError(lang[local].shape,$v.data.uterus.leftOvary.shape.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.leftOvary.shape.maxLen">
                            {{errors.maxLengthError(lang[local].shape, $v.data.uterus.leftOvary.shape.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].adnexae}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].adnexae" 
                        v-model="data.uterus.leftOvary.adnexae"
                        @change="$v.data.uterus.leftOvary.adnexae.$touch()" 
                        :class="{'border-error':$v.data.uterus.leftOvary.adnexae.$invalid  && $v.data.uterus.leftOvary.adnexae.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.leftOvary.adnexae.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].adnexae) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.leftOvary.adnexae.minLen">
                            {{errors.minLengthError(lang[local].adnexae,$v.data.uterus.leftOvary.adnexae.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.leftOvary.adnexae.maxLen">
                            {{errors.maxLengthError(lang[local].adnexae, $v.data.uterus.leftOvary.adnexae.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].douglasPouch}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].douglasPouch" 
                        v-model="data.uterus.leftOvary.douglasPouch"
                        @change="$v.data.uterus.leftOvary.douglasPouch.$touch()" 
                        :class="{'border-error':$v.data.uterus.leftOvary.douglasPouch.$invalid  && $v.data.uterus.leftOvary.douglasPouch.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.leftOvary.douglasPouch.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].douglasPouch) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.leftOvary.douglasPouch.minLen">
                            {{errors.minLengthError(lang[local].douglasPouch,$v.data.uterus.leftOvary.douglasPouch.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.leftOvary.douglasPouch.maxLen">
                            {{errors.maxLengthError(lang[local].douglasPouch, $v.data.uterus.leftOvary.douglasPouch.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].opinion}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].opinion" 
                        v-model="data.uterus.leftOvary.opinion"
                        @change="$v.data.uterus.leftOvary.opinion.$touch()" 
                        :class="{'border-error':$v.data.uterus.leftOvary.opinion.$invalid  && $v.data.uterus.leftOvary.opinion.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.leftOvary.opinion.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].opinion) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.leftOvary.opinion.minLen">
                            {{errors.minLengthError(lang[local].opinion,$v.data.uterus.leftOvary.opinion.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.leftOvary.opinion.maxLen">
                            {{errors.maxLengthError(lang[local].opinion, $v.data.uterus.leftOvary.opinion.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>


        <h3 class="mt-3">{{lang[local].other}}</h3>
        <div class="row">
            <div class="col-md-6 col-lg-4  my-3">
                <div class="form-group ">
                    <!-- <label class="mx-2">{{lang[local].other}}</label> -->
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].other" 
                        v-model="data.uterus.other"
                        @change="$v.data.uterus.other.$touch()" 
                        :class="{'border-error':$v.data.uterus.other.$invalid  && $v.data.uterus.other.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.uterus.other.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].other) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.other.minLen">
                            {{errors.minLengthError(lang[local].other,$v.data.uterus.other.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.uterus.other.maxLen">
                            {{errors.maxLengthError(lang[local].other, $v.data.uterus.other.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-3">
            <div class="col-md-8 col-lg-6  my-3">
                <div class="form-group ">
                    <label class="mx-2">{{lang[local].comment}}</label>
                    <InputText 
                        type="text" 
                        :placeholder="lang[local].comment" 
                        v-model="data.comment"
                        @change="$v.data.comment.$touch()" 
                        :class="{'border-error':$v.data.comment.$invalid  && $v.data.comment.$dirty}"
                    ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.comment.notContainsHtmlTags">
                            {{ errors.inputError(lang[local].comment) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.comment.minLen">
                            {{errors.minLengthError(lang[local].comment,$v.data.comment.$params.minLen.min)}}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.comment.maxLen">
                            {{errors.maxLengthError(lang[local].comment, $v.data.comment.$params.maxLen.max) }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import InputText from "primevue/inputtext";
import {minLength,maxLength} from "vuelidate/lib/validators";
import { notContainsHtmlTags} from "../helpers/customValidators";
import {minLengthError,maxLengthError,inputError} from "../helpers/errors";
export default {
    props:['data'],
    components:{
        InputText
    },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    uterus:"Uterus",
                    rightOvary:"Right ovary",
                    leftOvary:"Left ovary",
                    placentaMyometrium:"Placenta myometrium",
                    other:"Other",
                    comment:"Comment",
                    size: "Size", 
                    shape: "Ahape", 
                    position: "Position", 
                    uterineCavity: "Uterine Cavity", 
                    enContents: "EN.Contents", 
                    myometrium: "Myometrium", 
                    adnexae:"Adnexae",
                    douglasPouch:"Douglas Pouch",
                    opinion:"Opinion",
                },
                ar:{
                    
                }
            },
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
            },
        }
    },
    validations:{
        data:{
            uterus:{
                common:{
                    size:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    shape:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    position:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    uterineCavity:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    enContents:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    myometrium:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                },
                rightOvary: {
                    size:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    shape:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                },
                leftOvary: {
                    size:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    shape:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    adnexae:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    douglasPouch:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                    opinion:{
                        minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                    },
                },
                other:{
                    minLen: minLength(1),
                        maxLen: maxLength(100),
                        notContainsHtmlTags(val) {
                        if (!val) return true;
                        return notContainsHtmlTags(val);
                        },
                }
            },
            comment:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            }
        }

    
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch("setOBJGYNPelvicUsIsValid",this.$v.data.$invalid );
            },
            deep: true,
        }
        
    },
    
}
</script>

