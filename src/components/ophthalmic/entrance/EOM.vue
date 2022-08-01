<template>
    <div class="eom">
        <div class="row my-5">
            <div class="form-wrapper col-lg-4 col-md-6">
                <div class="row my-2">
                    <div class="col-12 d-flex align-items-center" :style="{'height':'26px'}">
                        <h4>{{lang[local].eom.extraOcularMotilities.heading}}</h4>
                    </div>
                </div>
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].eom.extraOcularMotilities.od.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <InputText type="text" v-model="data.eom.extraOcularMotilities.od" 
                        :placeholder="lang[local].eom.extraOcularMotilities.od.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.eom.extraOcularMotilities.od.$model !='' && !$v.data.eom.extraOcularMotilities.od.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].eom.extraOcularMotilities.od.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.eom.extraOcularMotilities.od.minLen">
                                {{errors.minLengthError(lang[local].eom.extraOcularMotilities.od.label,$v.data.eom.extraOcularMotilities.od.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.eom.extraOcularMotilities.od.maxLen">
                                {{errors.maxLengthError(lang[local].eom.extraOcularMotilities.od.label, $v.data.eom.extraOcularMotilities.od.$params.maxLen.max) }}
                            </small>
                        </div> 
                    </div>
                </div>
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].eom.extraOcularMotilities.os.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <InputText type="text" v-model="data.eom.extraOcularMotilities.os" 
                        :placeholder="lang[local].eom.extraOcularMotilities.os.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.eom.extraOcularMotilities.os.$model !='' && !$v.data.eom.extraOcularMotilities.os.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].eom.extraOcularMotilities.os.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.eom.extraOcularMotilities.os.minLen">
                                {{errors.minLengthError(lang[local].eom.extraOcularMotilities.os.label,$v.data.eom.extraOcularMotilities.os.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.eom.extraOcularMotilities.os.maxLen">
                                {{errors.maxLengthError(lang[local].eom.extraOcularMotilities.os.label, $v.data.eom.extraOcularMotilities.os.$params.maxLen.max) }}
                            </small>
                        </div>  
                    </div>
                </div>
            </div>
            <div class="form-wrapper offset-lg-2 col-lg-4 col-md-6">
                <div class="input-wrapper row my-2">
                    <div class="col-md-4 d-flex align-items-center">
                        <h4>{{lang[local].eom.npc.heading}}</h4>
                    </div>
                    <div class="col-md-8 d-flex align-items-center gap-2">
                        <label for="binary">{{lang[local].eom.npc.npcWithEffect.label}}</label>
                         <Checkbox id="binary" v-model="data.eom.npc.npcWithEffect" :binary="true" />
                    </div>
                </div>
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].eom.npc.npcBreak.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <InputText type="text" v-model="data.eom.npc.npcBreak" :placeholder="lang[local].eom.npc.npcBreak.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.eom.npc.npcBreak.$model !='' && !$v.data.eom.npc.npcBreak.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].eom.npc.npcBreak.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.eom.npc.npcBreak.minLen">
                                {{errors.minLengthError(lang[local].eom.npc.npcBreak.label,$v.data.eom.npc.npcBreak.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.eom.npc.npcBreak.maxLen">
                                {{errors.maxLengthError(lang[local].eom.npc.npcBreak.label, $v.data.eom.npc.npcBreak.$params.maxLen.max) }}
                            </small>
                        </div>  
                    </div>
                </div>
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].eom.npc.npcRecovery.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <InputText type="text" v-model="data.eom.npc.npcRecovery" :placeholder="lang[local].eom.npc.npcRecovery.placeholder" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.eom.npc.npcRecovery.$model !='' && !$v.data.eom.npc.npcRecovery.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].eom.npc.npcRecovery.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.eom.npc.npcRecovery.minLen">
                                {{errors.minLengthError(lang[local].eom.npc.npcRecovery.label,$v.data.eom.npc.npcRecovery.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.eom.npc.npcRecovery.maxLen">
                                {{errors.maxLengthError(lang[local].eom.npc.npcRecovery.label, $v.data.eom.npc.npcRecovery.$params.maxLen.max) }}
                            </small>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <div class="row broad-test my-5">
            <div><h3 class="text-center my-2">{{lang[local].eom.broadHTest.heading}}</h3></div>
            <div class="test-wrapper">
                <section class="od">
                    <section class="one">
                        <div class="input-wrapper">
                            <label>{{lang[local].eom.broadHTest.sr.label}}</label>
                            <InputText type="text" v-model="data.eom.broadHTest.od.sr" :placeholder="lang[local].eom.broadHTest.sr.placeholder" />
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="$v.data.eom.broadHTest.od.sr.$model !='' && !$v.data.eom.broadHTest.od.sr.notContainsHtmlTags"
                                >
                                    {{errors.htmlTagsError(lang[local].eom.broadHTest.sr.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.od.sr.minLen">
                                    {{errors.minLengthError(lang[local].eom.broadHTest.sr.label,$v.data.eom.broadHTest.od.sr.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.od.sr.maxLen">
                                    {{errors.maxLengthError(lang[local].eom.broadHTest.sr.label, $v.data.eom.broadHTest.od.sr.$params.maxLen.max) }}
                                </small>
                            </div>  
                        </div>
                        <div class="input-wrapper">
                            <label>{{lang[local].eom.broadHTest.lr.label}}</label>
                            <InputText type="text" v-model="data.eom.broadHTest.od.lr" :placeholder="lang[local].eom.broadHTest.lr.placeholder" />
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="$v.data.eom.broadHTest.od.lr.$model !='' && !$v.data.eom.broadHTest.od.lr.notContainsHtmlTags"
                                >
                                    {{errors.htmlTagsError(lang[local].eom.broadHTest.lr.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.od.lr.minLen">
                                    {{errors.minLengthError(lang[local].eom.broadHTest.lr.label,$v.data.eom.broadHTest.od.lr.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.od.lr.maxLen">
                                    {{errors.maxLengthError(lang[local].eom.broadHTest.lr.label, $v.data.eom.broadHTest.od.lr.$params.maxLen.max) }}
                                </small>
                            </div>  
                        </div>
                        <div class="input-wrapper">
                            <label>{{lang[local].eom.broadHTest.ir.label}}</label>
                            <InputText type="text" v-model="data.eom.broadHTest.od.ir" :placeholder="lang[local].eom.broadHTest.ir.placeholder" />
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="$v.data.eom.broadHTest.od.ir.$model !='' && !$v.data.eom.broadHTest.od.ir.notContainsHtmlTags"
                                >
                                    {{errors.htmlTagsError(lang[local].eom.broadHTest.ir.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.od.ir.minLen">
                                    {{errors.minLengthError(lang[local].eom.broadHTest.ir.label,$v.data.eom.broadHTest.od.ir.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.od.ir.maxLen">
                                    {{errors.maxLengthError(lang[local].eom.broadHTest.ir.label, $v.data.eom.broadHTest.od.ir.$params.maxLen.max) }}
                                </small>
                            </div>  
                        </div>
                    </section>
                    <section class="two">
                        <div>
                            <h3>{{lang[local].eyesLabels.os}}</h3>
                        </div>
                        <div class="svg-wrapper">
                            <img src="../../../UI/icons/clinic/ophthalmic/entrance/eom/lefteye.svg" alt="" class="w-100">
                        </div>
                    </section>
                    <section class="three">
                        <div class="input-wrapper">
                            <label>{{lang[local].eom.broadHTest.io.label}}</label>
                            <InputText type="text" v-model="data.eom.broadHTest.od.io" :placeholder="lang[local].eom.broadHTest.io.placeholder" />
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="$v.data.eom.broadHTest.od.io.$model !='' && !$v.data.eom.broadHTest.od.io.notContainsHtmlTags"
                                >
                                    {{errors.htmlTagsError(lang[local].eom.broadHTest.io.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.od.io.minLen">
                                    {{errors.minLengthError(lang[local].eom.broadHTest.io.label,$v.data.eom.broadHTest.od.io.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.od.io.maxLen">
                                    {{errors.maxLengthError(lang[local].eom.broadHTest.io.label, $v.data.eom.broadHTest.od.io.$params.maxLen.max) }}
                                </small>
                            </div>  
                        </div>
                        <div class="input-wrapper">
                            <label>{{lang[local].eom.broadHTest.mr.label}}</label>
                            <InputText type="text" v-model="data.eom.broadHTest.od.mr" :placeholder="lang[local].eom.broadHTest.mr.placeholder" />
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="$v.data.eom.broadHTest.od.mr.$model !='' && !$v.data.eom.broadHTest.od.mr.notContainsHtmlTags"
                                >
                                    {{errors.htmlTagsError(lang[local].eom.broadHTest.mr.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.od.mr.minLen">
                                    {{errors.minLengthError(lang[local].eom.broadHTest.mr.label,$v.data.eom.broadHTest.od.mr.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.od.mr.maxLen">
                                    {{errors.maxLengthError(lang[local].eom.broadHTest.mr.label, $v.data.eom.broadHTest.od.mr.$params.maxLen.max) }}
                                </small>
                            </div>  
                        </div>
                        <div class="input-wrapper">
                            <label>{{lang[local].eom.broadHTest.so.label}}</label>
                            <InputText type="text" v-model="data.eom.broadHTest.od.so" :placeholder="lang[local].eom.broadHTest.so.placeholder" />
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="$v.data.eom.broadHTest.od.so.$model !='' && !$v.data.eom.broadHTest.od.so.notContainsHtmlTags"
                                >
                                    {{errors.htmlTagsError(lang[local].eom.broadHTest.so.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.od.so.minLen">
                                    {{errors.minLengthError(lang[local].eom.broadHTest.so.label,$v.data.eom.broadHTest.od.so.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.od.so.maxLen">
                                    {{errors.maxLengthError(lang[local].eom.broadHTest.so.label, $v.data.eom.broadHTest.od.so.$params.maxLen.max) }}
                                </small>
                            </div>  
                        </div>
                    </section>
                </section>
                <section class="os">
                    <section class="one">
                        <div class="input-wrapper">
                            <label>{{lang[local].eom.broadHTest.sr.label}}</label>
                            <InputText type="text" v-model="data.eom.broadHTest.os.sr" :placeholder="lang[local].eom.broadHTest.sr.placeholder" />
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="$v.data.eom.broadHTest.os.sr.$model !='' && !$v.data.eom.broadHTest.os.sr.notContainsHtmlTags"
                                >
                                    {{errors.htmlTagsError(lang[local].eom.broadHTest.sr.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.os.sr.minLen">
                                    {{errors.minLengthError(lang[local].eom.broadHTest.sr.label,$v.data.eom.broadHTest.os.sr.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.os.sr.maxLen">
                                    {{errors.maxLengthError(lang[local].eom.broadHTest.sr.label, $v.data.eom.broadHTest.os.sr.$params.maxLen.max) }}
                                </small>
                            </div>  
                        </div>
                        <div class="input-wrapper">
                            <label>{{lang[local].eom.broadHTest.lr.label}}</label>
                            <InputText type="text" v-model="data.eom.broadHTest.os.lr" :placeholder="lang[local].eom.broadHTest.lr.placeholder" />
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="$v.data.eom.broadHTest.os.lr.$model !='' && !$v.data.eom.broadHTest.os.lr.notContainsHtmlTags"
                                >
                                    {{errors.htmlTagsError(lang[local].eom.broadHTest.lr.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.os.lr.minLen">
                                    {{errors.minLengthError(lang[local].eom.broadHTest.lr.label,$v.data.eom.broadHTest.os.lr.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.os.lr.maxLen">
                                    {{errors.maxLengthError(lang[local].eom.broadHTest.lr.label, $v.data.eom.broadHTest.os.lr.$params.maxLen.max) }}
                                </small>
                            </div>  
                        </div>
                        <div class="input-wrapper">
                            <label>{{lang[local].eom.broadHTest.ir.label}}</label>
                            <InputText type="text" v-model="data.eom.broadHTest.os.ir" :placeholder="lang[local].eom.broadHTest.ir.placeholder" />
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="$v.data.eom.broadHTest.os.ir.$model !='' && !$v.data.eom.broadHTest.os.ir.notContainsHtmlTags"
                                >
                                    {{errors.htmlTagsError(lang[local].eom.broadHTest.ir.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.os.ir.minLen">
                                    {{errors.minLengthError(lang[local].eom.broadHTest.ir.label,$v.data.eom.broadHTest.os.ir.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.os.ir.maxLen">
                                    {{errors.maxLengthError(lang[local].eom.broadHTest.ir.label, $v.data.eom.broadHTest.os.ir.$params.maxLen.max) }}
                                </small>
                            </div>  
                        </div>
                    </section>
                    <section class="two">
                        <div>
                            <h3>{{lang[local].eyesLabels.os}}</h3>
                        </div>
                        <div class="svg-wrapper">
                            <img src="../../../UI/icons/clinic/ophthalmic/entrance/eom/righteye.svg" alt="" class="w-100">
                        </div>
                    </section>
                    <section class="three">
                        <div class="input-wrapper">
                            <label>{{lang[local].eom.broadHTest.io.label}}</label>
                            <InputText type="text" v-model="data.eom.broadHTest.os.io" :placeholder="lang[local].eom.broadHTest.io.placeholder" />
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="$v.data.eom.broadHTest.os.io.$model !='' && !$v.data.eom.broadHTest.os.io.notContainsHtmlTags"
                                >
                                    {{errors.htmlTagsError(lang[local].eom.broadHTest.io.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.os.io.minLen">
                                    {{errors.minLengthError(lang[local].eom.broadHTest.io.label,$v.data.eom.broadHTest.os.io.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.os.io.maxLen">
                                    {{errors.maxLengthError(lang[local].eom.broadHTest.io.label, $v.data.eom.broadHTest.os.io.$params.maxLen.max) }}
                                </small>
                            </div>  
                        </div>
                        <div class="input-wrapper">
                            <label>{{lang[local].eom.broadHTest.mr.label}}</label>
                            <InputText type="text" v-model="data.eom.broadHTest.os.mr" :placeholder="lang[local].eom.broadHTest.mr.placeholder" />
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="$v.data.eom.broadHTest.os.mr.$model !='' && !$v.data.eom.broadHTest.os.mr.notContainsHtmlTags"
                                >
                                    {{errors.htmlTagsError(lang[local].eom.broadHTest.mr.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.os.mr.minLen">
                                    {{errors.minLengthError(lang[local].eom.broadHTest.mr.label,$v.data.eom.broadHTest.os.mr.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.os.mr.maxLen">
                                    {{errors.maxLengthError(lang[local].eom.broadHTest.mr.label, $v.data.eom.broadHTest.os.mr.$params.maxLen.max) }}
                                </small>
                            </div>  
                        </div>
                        <div class="input-wrapper">
                            <label>{{lang[local].eom.broadHTest.so.label}}</label>
                            <InputText type="text" v-model="data.eom.broadHTest.os.so" :placeholder="lang[local].eom.broadHTest.so.placeholder" />
                            <div class="error">
                                <small 
                                    class="d-block text-danger" 
                                    v-if="$v.data.eom.broadHTest.os.so.$model !='' && !$v.data.eom.broadHTest.os.so.notContainsHtmlTags"
                                >
                                    {{errors.htmlTagsError(lang[local].eom.broadHTest.so.label)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.os.so.minLen">
                                    {{errors.minLengthError(lang[local].eom.broadHTest.so.label,$v.data.eom.broadHTest.os.so.$params.minLen.min)}}
                                </small>
                                <small class="text-error my-2" v-else-if="!$v.data.eom.broadHTest.os.so.maxLen">
                                    {{errors.maxLengthError(lang[local].eom.broadHTest.so.label, $v.data.eom.broadHTest.os.so.$params.maxLen.max) }}
                                </small>
                            </div>  
                        </div>
                    </section>
                </section>
            </div>
        </div>
        <div class="row my-5">
            <div class="form-wrapper col-xl-4 col-md-6">
                <div class="input-wrapper row my-2">
                    <div class="col-md-4">
                        <label>{{lang[local].eom.note.label}}</label>
                    </div>
                    <div class="col-md-8">
                        <Textarea v-model="data.eom.note" :placeholder="lang[local].eom.note.placeholder" rows="3" />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.eom.note.$model !='' && !$v.data.eom.note.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].eom.note.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.eom.note.minLen">
                                {{errors.minLengthError(lang[local].eom.note.label,$v.data.eom.note.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.eom.note.maxLen">
                                {{errors.maxLengthError(lang[local].eom.note.label, $v.data.eom.note.$params.maxLen.max) }}
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
import lang from '../../../mixins/clinics/ophthalmic/entrance/lang'
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
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
        InputText,
        Checkbox,
        Textarea,
    },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
            },
        }
    },
    validations:{
        data:{
            eom: {
                extraOcularMotilities: {
                    od: {
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    os: {
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                },
                npc: {
                    npcBreak:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                    npcRecovery:{
                        minLen: minLength(1),
                        maxLen: maxLength(255),
                        notContainsHtmlTags(value) {
                            return notContainsHtmlTags(value);
                        },
                    },
                },
                broadHTest: {
                    od: {
                        sr:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        lr:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        ir:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        io:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        mr:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        so:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    os: {
                        sr:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        lr:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        ir:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        io:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        mr:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                        so:{
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
.eom{
    .broad-test{
        .test-wrapper{
            display: flex;
            gap: 50px;
            .od,.os{
                display: flex;
                gap: 20px;
                .two{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
}
</style>
