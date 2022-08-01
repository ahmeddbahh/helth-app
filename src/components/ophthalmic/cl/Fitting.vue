<template>
    <div class="fitting">
        <section class="row my-2">
            <div class="col-lg-10 col-xl-9">
                <div class="row">
                    <div class="col-sm-5">
                        <div class="input-wrapper row">
                            <div class="col-sm-4 d-flex align-items-center">
                                <label>{{lang[local].fitting.exopirationDate.label}}</label>
                            </div>
                            <div class="col-sm-8">
                                <Calendar v-model="data.fitting.exopirationDate" @date-select="formateDate" 
                                :placeholder="lang[local].fitting.exopirationDate.placeholder" :showIcon="true" class="my-2"
                                :class="{'p-invalid':$v.data.fitting.exopirationDate.$invalid}" />
                                <div class="error">
                                    <small 
                                        class="d-block text-danger" 
                                        v-if="$v.data.fitting.exopirationDate.$model !='' && $v.data.fitting.exopirationDate.notValidDate"
                                    >
                                        {{errors.inputError(lang[local].fitting.exopirationDate.label)}}
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5 offset-sm-2">
                        <div class="input-wrapper row">
                            <div class="col-sm-4 d-flex align-items-center">
                                <label>{{lang[local].fitting.visitType.label}}</label> 
                            </div>
                            <div class="col-sm-8">
                                <CustomDropDown
                                    :placeholder="lang[local].fitting.visitType.placeholder"
                                    :v="$v.data.fitting.visitType.other"
                                    :data="data.fitting.visitType"
                                    :options="manufacturerOptions" 
                                    :selectionKey="'visionSelection'"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="row mt-5">
            <div class="col-lg-10 col-xl-9">
                <div class="row">
                    <div class="col-sm-4 offset-sm-4">
                        <div class="image-wrapper">
                            <img v-if="fittingUserTemplateImageOd" :src="fittingUserTemplateImageOd"  class="w-100 d-block">
                            <img v-else :src="fittingTemplateImageOd"  class="w-100 d-block image-od">
                            <div class="image-controllers d-flex justify-content-center align-items-center gap-3 my-2">
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/edit-text.svg" 
                                    @click="fittingEdit"
                                    class="tangent-screen-edit"
                                >
                                <img 
                                    src="../../../UI/icons/clinic/ophthalmic/entrance/visual/trash.svg"
                                    @click="fittingDelete"
                                    class="tangent-screen-delete"
                                >
                            </div>
                            <ImageEditor 
                                ref="fittingImageEditor"
                                :templateName="'fitting.svg'"
                                @templateChanged="fittingTemplateChanged" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="row my-2">
            <div class="col-lg-10 col-xl-9">
                <div class="row">
                    <div class="col-sm-5">
                        <div class="row">
                            <div class="col-12">
                                <h3 class="text-center">O.D.</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 input-wrapper" v-for="(key) in keys" :key="key.objKey">
                                <label class="text-center">{{local=='ar'? key.label.arabic:key.label.english}}</label>
                                <CustomDropDown
                                    :data="data.fitting.type.od[key.objKey]"
                                    :options="key.options()" 
                                    :selectionKey="key.selctionKey"
                                    ref="odCustomDropdownRefs"
                                />
                            </div>
                            <div class="col-sm-6 input-wrapper" v-for="(key) in textKeys" :key="key.objKey">
                                <label class="text-center">{{local=='ar'? key.label.arabic:key.label.english}}</label>
                                <InputText type="text" v-model="data.fitting.type.od[key.objKey]" :placeholder="key.placeholder" class="my-2" />
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="copy-controllers">
                            <Button 
                                :icon="screenWidth < 576 ?'pi pi-angle-down':'pi pi-angle-right'"
                                class="p-button-rounded p-button-sm"
                                @click="copyTypeToOs"
                            />
                            <Button
                                :icon="screenWidth < 576 ?'pi pi-angle-up':'pi pi-angle-left'" 
                                class="p-button-rounded p-button-sm"
                                @click="copyTypeToOd"
                            />
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="row">
                            <div class="col-12">
                                <h3 class="text-center">O.S.</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 input-wrapper" v-for="(key) in keys" :key="key.objKey">
                                <label class="text-center">{{local=='ar'? key.label.arabic:key.label.english}}</label>
                                <CustomDropDown
                                    :data="data.fitting.type.os[key.objKey]"
                                    :options="key.options()" 
                                    :selectionKey="key.selctionKey"
                                    ref="osCustomDropdownRefs"
                                />
                            </div>
                            <div class="col-sm-6 input-wrapper" v-for="(key) in textKeys" :key="key.objKey">
                                <label class="text-center">{{local=='ar'? key.label.arabic:key.label.english}}</label>
                                <InputText type="text" v-model="data.fitting.type.os[key.objKey]" :placeholder="key.placeholder" class="my-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="row my-2">
            <div class="col-xl-9">
                <div class="d-flex gap-5">
                    <div class="d-flex flex-column justify-content-center gap-2 input-wrapper">
                        <h4 class="mt-2 mb-0">O.D.</h4>
                        <div class="d-flex justify-content-center gap-2">
                            <Button 
                                icon="pi pi-angle-up"
                                class="p-button-rounded p-button-sm"
                                @click="copyMeasurementsToOd"
                            />
                            <Button 
                                icon="pi pi-angle-down" 
                                class="p-button-rounded p-button-sm"
                                @click="copyMeasurementsToOs" 
                            />
                        </div>
                        <h4 class="mb-0">O.S.</h4>
                        <h4 class="mb-2">O.U.</h4>
                    </div>
                    <div class="d-flex gap-3 ">
                        <div class="input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.spherical}}</label>
                            <CustomDropMenu :options="sphericalOptions" :data="data.fitting.measurements.od" :selectionKey="'spherical'" :excludeColumn="0" />
                            <CustomDropMenu :options="sphericalOptions" :data="data.fitting.measurements.os" :selectionKey="'spherical'" :excludeColumn="0" />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.cylindrical}}</label>
                            <CustomDropMenu :options="cylindricalOptions" :data="data.fitting.measurements.od" :selectionKey="'cylindrical'" :excludeColumn="0" />
                            <CustomDropMenu :options="cylindricalOptions" :data="data.fitting.measurements.os" :selectionKey="'cylindrical'" :excludeColumn="0" />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.axis}}</label>
                            <CustomDropMenu :options="axisOptions" :data="data.fitting.measurements.od" :selectionKey="'axis'" />
                            <CustomDropMenu :options="axisOptions" :data="data.fitting.measurements.os" :selectionKey="'axis'" />
                        </div>
                        <div class="input-wrapper custom-width">
                            <label class="w-100 text-center">{{lang[local].fitting.measurements.bc.label}}</label>
                            <InputText type="text" v-model="data.fitting.measurements.od.bc" 
                                :placeholder="lang[local].fitting.measurements.bc.placeholder" class="my-2" />
                            <InputText type="text" v-model="data.fitting.measurements.os.bc" 
                                :placeholder="lang[local].fitting.measurements.bc.placeholder" class="my-2" />
                        </div>
                        <div class="input-wrapper custom-width">
                            <label class="w-100 text-center">{{lang[local].fitting.measurements.dia.label}}</label>
                            <InputText type="text" v-model="data.fitting.measurements.od.dia" 
                                :placeholder="lang[local].fitting.measurements.dia.placeholder" class="my-2"  />
                            <InputText type="text" v-model="data.fitting.measurements.os.dia" 
                                :placeholder="lang[local].fitting.measurements.dia.placeholder" class="my-2"  />
                        </div>
                        <div class="input-wrapper">
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.add}}</label>
                            <CustomDropMenu :options="addOptions" :data="data.fitting.measurements.od" :selectionKey="'add'" />
                            <CustomDropMenu :options="addOptions" :data="data.fitting.measurements.os" :selectionKey="'add'" />
                        </div>
                        <div class="input-wrapper custom-width">
                            <label class="w-100 text-center">{{lang[local].fitting.measurements.dn.label}}</label>
                            <Dropdown 
                                v-model="data.fitting.measurements.od.dn" 
                                :options="dnOptions" 
                                :optionLabel="local=='ar'?'arabic':'english'" 
                                :placeholder="lang[local].fitting.measurements.solution.placeholder" 
                                class="my-2"
                            />
                            <Dropdown 
                                v-model="data.fitting.measurements.os.dn"
                                :options="dnOptions" 
                                :optionLabel="local=='ar'?'arabic':'english'" 
                                placeholder="Select"
                                class="my-2" 
                            />
                        </div>
                        <div class="input-wrapper" >
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.dva}}</label>
                            <CustomDropMenu :options="dvaOptions" :data="data.fitting.measurements.od" :selectionKey="'dva'" :preLabel="'20/'" />
                            <CustomDropMenu :options="dvaOptions" :data="data.fitting.measurements.os" :selectionKey="'dva'" :preLabel="'20/'" />
                            <CustomDropMenu :options="dvaOptions" :data="data.fitting.measurements.ou" :selectionKey="'dva'" :preLabel="'20/'" />
                        </div>
                        <div class="input-wrapper" >
                            <label class="w-100 text-center">{{lang[local].measurementsLabels.nva}}</label>
                            <CustomDropMenu :options="nvaOptions" :data="data.fitting.measurements.od" :selectionKey="'nva'" :preLabel="'20/'" />
                            <CustomDropMenu :options="nvaOptions" :data="data.fitting.measurements.os" :selectionKey="'nva'" :preLabel="'20/'" />
                            <CustomDropMenu :options="nvaOptions" :data="data.fitting.measurements.ou" :selectionKey="'nva'" :preLabel="'20/'" />
                        </div>
                        <div class="input-wrapper" >
                            <label class="w-100 text-center">{{lang[local].fitting.measurements.solution.label}}</label>
                            <CustomDropDown
                                class="my-2"
                                :placeholder="lang[local].fitting.measurements.solution.placeholder"
                                :data="data.fitting.measurements.solution"
                                :options="manufacturerOptions" 
                                :selectionKey="'solutionSelection'"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="row my-2">
            <div class="col-lg-10 col-xl-9">
                <div class="row">
                    <div class="col-sm-5">
                        <label>{{lang[local].fitting.note.label}}</label>
                        <Textarea 
                            v-model="data.fitting.note" 
                            :placeholder="lang[local].fitting.note.placeholder" rows="3" 
                            :class="{'p-invalid':$v.data.fitting.note.$invalid}"
                        />
                        <div class="error">
                            <small 
                                class="d-block text-danger" 
                                v-if="$v.data.fitting.note.$model !='' && !$v.data.fitting.note.notContainsHtmlTags"
                            >
                                {{errors.htmlTagsError(lang[local].fitting.note.label)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.fitting.note.minLen">
                                {{errors.minLengthError(lang[local].fitting.note.label,$v.data.fitting.note.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.fitting.note.maxLen">
                                {{errors.maxLengthError(lang[local].fitting.note.label, $v.data.fitting.note.$params.maxLen.max) }}
                            </small>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
//////////////////////////////////////////////////////////////////////////////
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags,notValidDate} from "../../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError,inputError} from '../../helpers/errors'
////////////////////////////////////////////////////////////////////////////////
import measurementsOptions from '../../../mixins/clinics/ophthalmic/shared/measurements/measurementsOptions'
import clOptions from '../../../mixins/clinics/ophthalmic/cl/clOptions'
import lang from '../../../mixins/clinics/ophthalmic/cl/lang'
////////////////////////////////////////////////////////////////////////////////
import Calendar from 'primevue/calendar';
import CustomDropDown from '../shared components/CustomDropDown.vue'
import InputText from 'primevue/inputtext';
import ImageEditor from '../../../components/shared/ImageEditor.vue'
import CustomDropMenu from '../shared components/CustomDropMenu.vue'
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';


export default {
    mixins:[measurementsOptions,clOptions,lang],
    props:{
        data:{
            typw:Object,
            required:true
        }
    },
    components:{
        Calendar,
        CustomDropDown,
        InputText,
        ImageEditor,
        CustomDropMenu,
        Dropdown,
        Button,        
        Textarea,
    },
      computed:{
        odRefs(){return this.$refs.odCustomDropdownRefs},
        osRefs(){return this.$refs.osCustomDropdownRefs}
      },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            //// od ////
            fittingTemplateImageOd:require('../../../assets/imageEditorTemplates/fitting.svg'),
            fittingUserTemplateImageOd:null,
            ///////////////////////////////
            keys:[
                {
                    label:{english:"Manufacturer",arabic:"Manufacturer"},
                    options:()=>{return this.$data.manufacturerOptions},
                    objKey:"manufacturer",
                    selctionKey:"manufacturerSelection",
                },
                {
                    label:{english:"Brand",arabic:"Brand"},
                    options:()=>{return this.$data.brandOptions},
                    objKey:"brand",
                    selctionKey:"brandSelection",
                },
                {
                    label:{english:"Design",arabic:"Design"},
                    options:()=>{return this.$data.designOptions},
                    objKey:"design",
                    selctionKey:"designSelection",
                },
                {
                    label:{english:"Qty/Box",arabic:"Qty/Box"},
                    options:()=>{return this.$data.qtyBoxOptions},
                    objKey:"qtyBox",
                    selctionKey:"qtySelection",
                },
                {
                    label:{english:"Comfort",arabic:"Comfort"},
                    options:()=>{return this.$data.comfortOptions},
                    objKey:"comfort",
                    selctionKey:"comfortSelection",
                },
                {
                    label:{english:"Vision",arabic:"Vision"},
                    options:()=>{return this.$data.visionOptions},
                    objKey:"vision",
                    selctionKey:"visionSelection",
                },
                {
                    label:{english:"Rotation",arabic:"Rotation"},
                    options:()=>{return this.$data.rotationOptions},
                    objKey:"rotation",
                    selctionKey:"rotationSelection",
                },
                {
                    label:{english:"Movement",arabic:"Movement"},
                    options:()=>{return this.$data.movmentOptions},
                    objKey:"movement",
                    selctionKey:"movementSelection",
                },
                {
                    label:{english:"Centration",arabic:"Centration"},
                    options:()=>{return this.$data.centerationOptions},
                    objKey:"centration",
                    selctionKey:"centrationSelection",
                },
                {
                    label:{english:"Tear",arabic:"Tear"},
                    options:()=>{return this.$data.commonOptions},
                    objKey:"tear",
                    selctionKey:"selection",
                },
                {
                    label:{english:"Sclera",arabic:"Sclera"},
                    options:()=>{return this.$data.commonOptions},
                    objKey:"sclera",
                    selctionKey:"selection",
                },
                {
                    label:{english:"Limbal",arabic:"Limbal"},
                    options:()=>{return this.$data.commonOptions},
                    objKey:"limbal",
                    selctionKey:"selection",
                },
                {
                    label:{english:"cornea",arabic:"cornea"},
                    options:()=>{return this.$data.commonOptions},
                    objKey:"cornea",
                    selctionKey:"selection",
                },
                {
                    label:{english:"lid",arabic:"lid"},
                    options:()=>{return this.$data.commonOptions},
                    objKey:"lid",
                    selctionKey:"selection",
                },
            ],
            textKeys:[
                {
                    label:{english:"Type",arabic:"Type"},
                    placeholder:"text ...",
                    objKey:'type'
                },
                {
                    label:{english:"Material",arabic:"Material"},
                    placeholder:"text ...",
                    objKey:'material'
                },
                {
                    label:{english:"Wearing Period",arabic:"Wearing Period"},
                    placeholder:"text ...",
                    objKey:'wearingPeriod'
                },
                {
                    label:{english:"Replacement",arabic:"Replacement"},
                    placeholder:"text ...",
                    objKey:'replacement'
                },
            ],
            ///////////
            screenWidth:2000,
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
            fitting: {
                    exopirationDate:{
                        notValidDate(value){
                            return notValidDate(value)
                        },
                    },
                    visitType:{
                        other:{
                            minLen: minLength(1),
                            maxLen: maxLength(255),
                            notContainsHtmlTags(value) {
                                return notContainsHtmlTags(value);
                            },
                        },
                    },
                    type:{
                        os: {
                            manufacturer: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            brand: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            design: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            qtyBox: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            type:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                            material:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                            wearingPeriod:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                            replacement:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                            comfort: {
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                            vision: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            rotation: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            movement: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            centration: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            tear: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            sclera: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            limbal: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            cornea: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            lid: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                        },
                        od: {
                            manufacturer: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            brand: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            design: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            qtyBox: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            type:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                            material:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                            wearingPeriod:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                            replacement:{
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                            comfort: {
                                minLen: minLength(1),
                                maxLen: maxLength(255),
                                notContainsHtmlTags(value) {
                                    return notContainsHtmlTags(value);
                                },
                            },
                            vision: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            rotation: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            movement: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            centration: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            tear: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            sclera: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            limbal: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            cornea: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
                                },
                            },
                            lid: {
                                other:{
                                    minLen: minLength(1),
                                    maxLen: maxLength(255),
                                    notContainsHtmlTags(value) {
                                        return notContainsHtmlTags(value);
                                    },
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
    created() {
        window.addEventListener("resize", this.myEventHandler);
    },
    destroyed() {
        window.removeEventListener("resize", this.myEventHandler);
    },
    methods:{
        formateDate(v){
            let date = new Date(v).toISOString().slice(0, 10);
            this.data.fitting.exopirationDate=date;
        },
        myEventHandler(e) {
            this.screenWidth=e.target.innerWidth
        },
        // fitting od methods
        fittingEdit(){
            this.$refs.fittingImageEditor.openMaximizable()
        },
        fittingDelete(){
            this.$refs.fittingImageEditor.delete()
        },
        fittingTemplateChanged(imgUrl){
            this.fittingUserTemplateImageOd=imgUrl
        },
        ///////////////////////////////////////////
        copyTypeToOd(){
            this.data.fitting.type.od=JSON.parse(JSON.stringify(this.data.fitting.type.os));
            setTimeout(()=>{
                this.odRefs.forEach(element => {
                    element.copy()
                });
            },100)
        },
        copyTypeToOs(){
            this.data.fitting.type.os=JSON.parse(JSON.stringify(this.data.fitting.type.od));
            setTimeout(()=>{
                this.osRefs.forEach(element => {
                    element.copy()
                });
            },100)
        },
        ///////////////////////////////////////////
        copyMeasurementsToOd(){
            this.data.fitting.measurements.od=JSON.parse(JSON.stringify(this.data.fitting.measurements.os));
        },
        copyMeasurementsToOs(){
            this.data.fitting.measurements.os=JSON.parse(JSON.stringify(this.data.fitting.measurements.od));
        },
    },
}
</script>
<style lang="scss" scoped>
.fitting{
    .copy-controllers{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
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
    .input-wrapper.custom-width{
        max-width: 115px;
    }

}
</style>