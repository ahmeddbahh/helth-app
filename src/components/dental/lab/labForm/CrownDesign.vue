<template>
    <div >
        <Message  severity="error" v-if="typeError" > {{errors.imageTypeError()}}</Message>
        <Message  severity="error" v-if="sizeError" > {{errors.imageSizeError(5)}}</Message>
        <div class="crow-design d-flex justify-content-center flex-wrap my-3">
            <div class="characterization mx-4">
                <img width="250px"  v-if="!data.lab.labForm.crowmDesign.image" src="./charactrizations.svg" alt="">
                <img  width="250px"  v-else :src="data.lab.labForm.crowmDesign.image" alt="">
                <div class="actions d-flex justify-content-center">
                    <div class="attach-image m-2">
                        <img src="../../../../UI/icons/clinic/attach.svg" @click="$refs.imageInput.click()" style="cursor:pointer"  alt="">
                        <input accept="image/*" type="file" @input="setInputImage" style="display:none" ref="imageInput" />
                    </div>
                    <div class="edit-image  m-2">
                        <img src="../../../../UI/icons/clinic/edit.svg" @click="passImageToEdit" style="cursor:pointer"  alt="" />
                    </div>
                    <div class="trash-image  m-2">
                        <img src="../../../../UI/icons/clinic/trash.svg" @click="deleteImage" style="cursor:pointer"  alt="" />
                    </div>
                </div>
            </div>
            <div class="pontic-design mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="331.23" height="174.908" viewBox="0 0 331.23 174.908">
                    <rect @click="data.lab.labForm.crowmDesign.modifiedTidgeLap = !data.lab.labForm.crowmDesign.modifiedTidgeLap" v-if="data.lab.labForm.crowmDesign.modifiedTidgeLap" id="Rectangle_102" style="z-index:5; transform: translate(-2px, 34px);" data-name="Rectangle 102" width="67" height="69" fill="rgba(57,181,74,0.2)"/>
                    <rect @click="data.lab.labForm.crowmDesign.FullRidgeLap = !data.lab.labForm.crowmDesign.FullRidgeLap" v-if="data.lab.labForm.crowmDesign.FullRidgeLap" id="Rectangle_102" style="z-index:5; transform: translate(67px, 34px);" data-name="Rectangle 102" width="67" height="69" fill="rgba(57,181,74,0.2)"/>
                    <rect @click="data.lab.labForm.crowmDesign.sanitaryHygienic = !data.lab.labForm.crowmDesign.sanitaryHygienic" v-if="data.lab.labForm.crowmDesign.sanitaryHygienic" id="Rectangle_102" style="z-index:5; transform: translate(136px, 34px);" data-name="Rectangle 102" width="67" height="69" fill="rgba(57,181,74,0.2)"/>
                    <rect @click="data.lab.labForm.crowmDesign.conical = !data.lab.labForm.crowmDesign.conical" v-if="data.lab.labForm.crowmDesign.conical" id="Rectangle_102" style="z-index:5; transform: translate(205px, 34px);" data-name="Rectangle 102" width="67" height="69" fill="rgba(57,181,74,0.2)"/>
                    <rect @click="data.lab.labForm.crowmDesign.ovate = !data.lab.labForm.crowmDesign.ovate" v-if="data.lab.labForm.crowmDesign.ovate" id="Rectangle_102" style="z-index:5; transform: translate(275px, 34px);" data-name="Rectangle 102" width="67" height="69" fill="rgba(57,181,74,0.2)"/>
                    <g  id="pontic_design" data-name="pontic design" transform="translate(-619.804 -449.47)">
                        <g  style="pointer-events: bounding-box; cursor: pointer;" @click="data.lab.labForm.crowmDesign.modifiedTidgeLap = !data.lab.labForm.crowmDesign.modifiedTidgeLap" id="modified_ridge-lap" data-name="modified ridge-lap">
                        <path id="Path_585" data-name="Path 585" d="M654.916,502.263c-5.331-.351-6.005-8.129-10.232-8.526-9.853-.926-23.106,39.746-17.81,42.631,3.639,1.983,13.484-15.266,25.01-12.694,4.4.981,5.839,4.133,9.474,3.41,2.076-.413,4.049-1.927,10.042-14.589,6.712-14.179,6.55-17.164,5.168-18.811a5.4,5.4,0,0,0-3.463-1.652C665.635,490.947,661.563,502.7,654.916,502.263Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path id="Path_586" data-name="Path 586" d="M620.25,550.475a67.091,67.091,0,0,1,12.77-17.635c5.283-5.213,9.459-9.214,15.529-9.353,4.976-.114,8.8,2.422,10.453,3.516a23.825,23.825,0,0,1,8.8,11.45,28.463,28.463,0,0,1,2.084,11.179" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path id="Path_587" data-name="Path 587" d="M671.618,490.484h9.6l-7.832,5.388,4.295-9.095,2.274,9.095Z" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <text id="P4" transform="translate(645.096 469.775)" fill="#56c596" font-size="18.696" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">P4</tspan></text>
                        <text id="Modified_ridge-lap-2" data-name="Modified ridge-lap" transform="translate(640.33 593.205) rotate(-89.549)" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="-29.865" y="0">Modified</tspan><tspan x="-30.22" y="18">ridge-lap</tspan></text>
                        </g>
                        <g style="pointer-events: bounding-box; cursor: pointer;" @click="data.lab.labForm.crowmDesign.FullRidgeLap = !data.lab.labForm.crowmDesign.FullRidgeLap" id="full_ridge-lap" data-name="full ridge-lap">
                        <path id="Path_588" data-name="Path 588" d="M723.884,503.589c-3.05-.207-2.461-10.721-6.821-12.126-5.127-1.653-13.176,10.558-14.21,12.126a43.969,43.969,0,0,0-6.828,16.075c-2.019,10.129,1.152,13.533-2.267,21.252a32.634,32.634,0,0,1-6.253,9.094c.008.007,2.5-3.442,5.107-6.723,4.725-5.95,7.088-8.925,10.43-11.466,3.594-2.732,8.978-6.826,14.968-5.684,7.5,1.429,11.294,10.179,12.69,13.4,3.232,7.454,2.795,14.474,3.037,14.456.263-.021-1.34-8.2.379-17.622,1.379-7.56,3.557-8.585,6.821-18,2.038-5.878,7.574-21.847,2.652-25.389-3.054-2.2-10.048.457-14.021,4.168C726.153,500.339,725.617,503.707,723.884,503.589Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <text id="P5" transform="translate(711.438 469.47)" fill="#56c596" font-size="18.696" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">P5</tspan></text>
                        <text id="Full_ridge-lap-2" data-name="Full ridge-lap" transform="translate(709.52 593.205) rotate(-89.549)" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="-11.539" y="0">Full</tspan><tspan x="-30.22" y="18">ridge-lap</tspan></text>
                        </g>
                        <g style="pointer-events: bounding-box; cursor: pointer;" @click="data.lab.labForm.crowmDesign.sanitaryHygienic = !data.lab.labForm.crowmDesign.sanitaryHygienic" id="sanitary_hygienic" data-name="sanitary/hygienic">
                        <path style="pointer-events: bounding-box;" id="Path_589" data-name="Path 589" d="M793.232,500.558c-.579-1.38-4.18-9.7-10.043-10.232-7.282-.659-15.194,10.958-14.021,21.411,1.046,9.317,9.2,16.715,17.432,17.81,13.791,1.834,24.153-14.5,25.768-25.958.25-1.767,1.321-9.367-2.273-11.557C806.694,489.959,799.826,493.159,793.232,500.558Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path id="Path_590" data-name="Path 590" d="M755.905,551.147c.382-.548.958-1.348,1.706-2.273,2.222-2.754,13.632-16.889,29.936-15.916,11.225.67,21.466,8.3,26.906,19.326" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <text id="P1" transform="translate(780.543 469.47)" fill="#56c596" font-size="18.696" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">P1</tspan></text>
                        <text id="_Sanitary_hygienic" data-name="/Sanitary hygienic" transform="translate(777.356 592.164) rotate(-89.549)" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="-29.377" y="0">/Sanitary</tspan><tspan x="-27.554" y="18">hygienic</tspan></text>
                        </g>
                        <g  style="pointer-events: bounding-box; cursor: pointer; " @click="data.lab.labForm.crowmDesign.conical = !data.lab.labForm.crowmDesign.conical" id="conical">
                        <path id="Path_591" data-name="Path 591" d="M856.326,503.211c2.677-8.222,8.987-12.628,13.263-11.558,4.728,1.182,6.8,9.014,6.064,14.589-.863,6.542-5.659,10.52-11.937,15.726-6.838,5.671-10.738,8.9-15.916,8.337-7.572-.831-13.3-9.291-14.4-16.863-1.351-9.266,3.652-21.079,10.61-21.41C848.664,491.81,853.42,496.758,856.326,503.211Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path id="Path_592" data-name="Path 592" d="M830.179,548.874c3.247-9.912,11.674-16.922,21.032-17.621,12.073-.9,24.086,8.824,25.957,22.926" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <text id="P2" transform="translate(841.628 469.729)" fill="#56c596" font-size="18.696" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">P2</tspan></text>
                        <text id="Conical-2" data-name="Conical" transform="translate(857.354 590.426) rotate(-89.549)" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="-24.196" y="0">Conical</tspan></text>
                        </g>
                        <g style="pointer-events: bounding-box; cursor: pointer;"  @click="data.lab.labForm.crowmDesign.ovate = !data.lab.labForm.crowmDesign.ovate" id="ovate">
                        <path id="Path_593" data-name="Path 593" d="M926.811,503.968c-3.456-6.931-8.585-11.618-12.885-10.989-6.163.9-8.956,12.478-8.147,20.463,1.049,10.36,8.88,21.767,18.189,22.548,14.394,1.206,27.9-23.36,23.306-36.758-.37-1.079-1.785-5.208-5.116-6.253C937.843,491.626,931.671,495.873,926.811,503.968Z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <path id="Path_594" data-name="Path 594" d="M894.389,548.386c10.377-17.349,15.162-20.693,17.555-19.867,1.5.516,1.783,2.567,4.97,4.778a16.406,16.406,0,0,0,7.7,2.773c7.648.661,10.912-6.267,15.4-5.684,3.116.405,7.182,4.472,10.529,22.169" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1"/>
                        <text id="P3" transform="translate(914.88 469.599)" fill="#56c596" font-size="18.696" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">P3</tspan></text>
                        <text id="Ovate-2" data-name="Ovate" transform="translate(927.945 589.236) rotate(-89.549)" font-size="15" font-family="SegoeUI, Segoe UI"><tspan x="-19.526" y="0">Ovate</tspan></text>
                        </g>
                    </g>
                </svg>
            </div>
            <ImageEdit @close="closeTheModel" v-if="inputImage"  :displayControl="{display:displayed}" @getImage="getEditedImage" :image.sync="inputImage"></ImageEdit>
        </div>
        <div class="inputs">
            <div class="row">
                <div class="col-md-6">
                    <div class="d-flex align-items-start  m-2">
                        <label class="mx-2"> 
                            <span>{{lang[local].toothShade}}</span>
                            <small class="d-block text-center text-small">({{lang[local].required}})</small>
                        </label>
                        <div class="flex-grow-1">
                            <InputText 
                            type="text"
                            @change="$v.data.lab.labForm.crowmDesign.toothShade.$touch()"
                            v-model="data.lab.labForm.crowmDesign.toothShade"
                            :placeholder="lang[local].toothShade"
                            class="px-2"
                            :class="{
                                'border-error':
                                $v.data.lab.labForm.crowmDesign.toothShade.$invalid && $v.data.lab.labForm.crowmDesign.toothShade.$dirty,
                            }"
                            ></InputText>
                            <div class="errors">
                            <small
                                class="text-error my-2"
                                v-if="
                                    !$v.data.lab.labForm.crowmDesign.toothShade.notContainsHtmlTags && $v.data.lab.labForm.crowmDesign.toothShade.$dirty
                                "
                                >
                                {{ errors.inputError(lang[local].toothShade) }}
                                </small>
                                <small
                                class="text-error my-2"
                                v-else-if="!$v.data.lab.labForm.crowmDesign.toothShade.minLen && $v.data.lab.labForm.crowmDesign.toothShade.$dirty"
                                >
                                {{
                                    errors.minLengthError(
                                    lang[local].toothShade,
                                    $v.data.lab.labForm.crowmDesign.toothShade.$params.minLen.min
                                    )
                                }}
                                </small>
                                <small
                                class="text-error my-2"
                                v-else-if="!$v.data.lab.labForm.crowmDesign.toothShade.maxLen && $v.data.lab.labForm.crowmDesign.toothShade.$dirty"
                                >
                                {{
                                    errors.maxLengthError(
                                    lang[local].toothShade,
                                    $v.data.lab.labForm.crowmDesign.toothShade.$params.maxLen.max
                                    )
                                }}
                                </small>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-start m-2">
                            <label class="mx-2" > 
                                <span>{{lang[local].shadeGuideUsed}}</span>
                                <small class="d-block text-center text-small">({{lang[local].vitaIsDefault}})</small>
                            </label>
                            <div class="flex-grow-1">
                                <InputText 
                                type="text"
                                @change="$v.data.lab.labForm.crowmDesign.shadeGuide.$touch()"
                                v-model="data.lab.labForm.crowmDesign.shadeGuide"
                                :placeholder="lang[local].shadeGuideUsed"
                                class="px-2"
                                :class="{
                                    'border-error':
                                    $v.data.lab.labForm.crowmDesign.shadeGuide.$invalid && $v.data.lab.labForm.crowmDesign.shadeGuide.$dirty,
                                }"
                                ></InputText>
                                <div class="errors">
                                    <small
                                        class="text-error my-2"
                                        v-if="
                                            !$v.data.lab.labForm.crowmDesign.shadeGuide.notContainsHtmlTags && $v.data.labForm.crowmDesign.shadeGuide.$dirty
                                        "
                                        >
                                        {{ errors.inputError(lang[local].shadeGuideUsed) }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.labForm.crowmDesign.shadeGuide.minLen && $v.data.lab.labForm.crowmDesign.shadeGuide.$dirty"
                                        >
                                        {{
                                            errors.minLengthError(
                                            lang[local].shadeGuideUsed,
                                            $v.data.lab.labForm.crowmDesign.shadeGuide.$params.minLen.min
                                            )
                                        }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.labForm.crowmDesign.shadeGuide.maxLen && $v.data.lab.labForm.crowmDesign.shadeGuide.$dirty"
                                        >
                                        {{
                                            errors.maxLengthError(
                                            lang[local].shadeGuideUsed,
                                            $v.data.lab.labForm.crowmDesign.shadeGuide.$params.maxLen.max
                                            )
                                        }}
                                        </small>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-start m-2">
                            <label class="mx-2" > 
                                <span>{{lang[local].toothShade}}</span>
                                <small class="d-block text-center text-small">({{lang[local].requiredForEmax}})</small>
                            </label>
                            <div class="flex-grow-1">
                                <InputText 
                                type="text"
                                @change="$v.data.lab.labForm.crowmDesign.toothShadeEmax.$touch()"
                                v-model="data.lab.labForm.crowmDesign.toothShadeEmax"
                                :placeholder="lang[local].toothShade"
                                class="px-2"
                                :class="{
                                    'border-error':
                                    $v.data.lab.labForm.crowmDesign.toothShadeEmax.$invalid && $v.data.lab.labForm.crowmDesign.toothShadeEmax.$dirty,
                                }"
                                ></InputText>
                                <div class="errors">
                                    <small
                                        class="text-error my-2"
                                        v-if="
                                            !$v.data.lab.labForm.crowmDesign.toothShadeEmax.notContainsHtmlTags && $v.data.labForm.crowmDesign.toothShadeEmax.$dirty
                                        "
                                        >
                                        {{ errors.inputError(lang[local].toothShade) }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.labForm.crowmDesign.toothShadeEmax.minLen && $v.data.lab.labForm.crowmDesign.toothShadeEmax.$dirty"
                                        >
                                        {{
                                            errors.minLengthError(
                                            lang[local].toothShade,
                                            $v.data.lab.labForm.crowmDesign.toothShadeEmax.$params.minLen.min
                                            )
                                        }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.labForm.crowmDesign.toothShadeEmax.maxLen && $v.data.lab.labForm.crowmDesign.toothShadeEmax.$dirty"
                                        >
                                        {{
                                            errors.maxLengthError(
                                            lang[local].toothShade,
                                            $v.data.lab.labForm.crowmDesign.toothShadeEmax.$params.maxLen.max
                                            )
                                        }}
                                        </small>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex align-items-start m-2">
                            <label class="mx-2" > 
                                <span>{{lang[local].pinkTissueShade}}</span>
                                <!-- <small class="d-block text-center text-small">({{lang[local].requiredForEmax}})</small> -->
                            </label>
                            <div class="flex-grow-1">
                                <InputText 
                                type="text"
                                @change="$v.data.lab.labForm.crowmDesign.pinkTissueShade.$touch()"
                                v-model="data.lab.labForm.crowmDesign.pinkTissueShade"
                                :placeholder="lang[local].pinkTissueShade"
                                class="px-2"
                                :class="{
                                    'border-error':
                                    $v.data.lab.labForm.crowmDesign.pinkTissueShade.$invalid && $v.data.lab.labForm.crowmDesign.pinkTissueShade.$dirty,
                                }"
                                ></InputText>
                                <div class="errors">
                                    <small
                                        class="text-error my-2"
                                        v-if="
                                            !$v.data.lab.labForm.crowmDesign.pinkTissueShade.notContainsHtmlTags && $v.data.lab.labForm.crowmDesign.pinkTissueShade.$dirty
                                        "
                                        >
                                        {{ errors.inputError(lang[local].pinkTissueShade) }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.labForm.crowmDesign.pinkTissueShade.minLen && $v.data.lab.labForm.crowmDesign.pinkTissueShade.$dirty"
                                        >
                                        {{
                                            errors.minLengthError(
                                            lang[local].pinkTissueShade,
                                            $v.data.lab.labForm.crowmDesign.pinkTissueShade.$params.minLen.min
                                            )
                                        }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.labForm.crowmDesign.pinkTissueShade.maxLen && $v.data.lab.labForm.crowmDesign.pinkTissueShade.$dirty"
                                        >
                                        {{
                                            errors.maxLengthError(
                                            lang[local].pinkTissueShade,
                                            $v.data.lab.labForm.crowmDesign.pinkTissueShade.$params.maxLen.max
                                            )
                                        }}
                                        </small>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import DentalAdult from "../../../../mixins/clinics/dentalAdult/DentalAdult";
import Message from 'primevue/message';
import {imageType,imageSize} from "../../../helpers/customValidators";
import {imageTypeError ,imageSizeError} from "../../../helpers/errors";
import InputText from "primevue/inputtext";
import { maxLength, minLength } from "vuelidate/lib/validators";
import {
  minLengthError,
  maxLengthError,
  inputError,
} from "../../../helpers/errors";
import { notContainsHtmlTags } from "../../../helpers/customValidators";
export default {
    mixins:[DentalAdult],
    props:['data','imagesErrors'],
    components:{
        Message,
        ImageEdit:()=>import("../../../shared/ImageEditorWithImage.vue"),
        InputText
        
        
    },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    characterizations:"Characterizations",
                    ponticDesign:"Pontic Design",
                    toothShade :"Tooth Shade",
                    required:"REQUIRED",
                    requiredForEmax:"REQUIRED FOR EMAX",
                    shadeGuideUsed:"Shade Guide Used",
                    vitaIsDefault:"Vita is default",
                    pinkTissueShade:"Pink Tissue Shade",
                    modifiedTidgeLap:"Modified ridge-lap",
                    FullRidgeLap:"Full ridge-lap",
                    sanitaryHygienic:"Sanitary/hygienic",
                    conical:"Conical",
                    ovate:"Ovate"
                },
                ar:{
                    characterizations:"Characterizations",
                    ponticDesign:"Pontic Design",
                    toothShade :"Tooth Shade",
                    required:"REQUIRED",
                    requiredForEmax:"REQUIRED FOR EMAX",
                    shadeGuideUsed:"Shade Guide Used",
                    vitaIsDefault:"Vita is default",
                    pinkTissueShade:"Pink Tissue Shade",
                    modifiedTidgeLap:"Modified ridge-lap",
                    FullRidgeLap:"Full ridge-lap",
                    sanitaryHygienic:"Sanitary/hygienic",
                    conical:"Conical",
                    ovate:"Ovate"
                },
            },
            typeError:false,
            sizeError:false,
            displayed:false,
            event:null,
            inputImage:null,
            errors:{
                imageTypeError,
                imageSizeError,
                minLengthError,
                maxLengthError,
                inputError,
            },
            validators:{
                imageType,
                imageSize
            }
        
        }
    },
    watch:{
        "data.lab.labForm.crowmDesign":{
            handler(){
                this.$store.dispatch("setToothLabCrownDesignIsValid",this.$v.data.lab.labForm.crowmDesign.$invalid );
            },
            deep:true
        },
    },
    validations:{
        data:{
            lab:{
                labForm:{
                    crowmDesign: {
                        toothShade:{
                            minLen: minLength(2),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        },
                        toothShadeEmax:{
                            minLen: minLength(2),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        },
                        shadeGuide:{
                            minLen: minLength(2),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        },
                        pinkTissueShade:{
                            minLen: minLength(2),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        },
                    
                },
                }
            }
        },
    },
    methods:{
        setInputImage(event){
                this.event = event.target
                this.inputImage=null ;
                let file=event.target.files[0];
                if(this.validators.imageType(file)){
                    this.imagesErrors.type=false ;
                    this.typeError =false ;
                    if(this.validators.imageSize(file,5*1000*1024)){
                        this.imagesErrors.size = false;
                        this.sizeError = false ;
                        this.inputImage = window.URL.createObjectURL(file);
                        this.displayed = true ;
                    }else{
                        this.sizeError = true ;
                        if(!this.inputImage)
                            this.imagesErrors.size=true
                    }
                    event.target.value =""
                }
                else{
                    this.typeError = true ;
                    if(!this.inputImage) 
                        this.imagesErrors.type = true ;
                }
        },
        passImageToEdit(){
            this.inputImage =null ;
            if(!this.data.lab.labForm.crowmDesign.image)
                this.inputImage = require("./charactrizations.svg");
            else
                this.inputImage = window.URL.createObjectURL(this.dataURLtoFile(this.data.lab.labForm.crowmDesign.image,this.makeid(20)));
            this.displayed =true ;
        },
        getEditedImage(value){ 
            this.data.lab.labForm.crowmDesign.image = value ;
            this.inputImage =null ;
            this.displayed = false ;
        },
        closeTheModel(){
            this.inputImage=null ;
            this.displayed = false ;
        },
        deleteImage(){
            if(this.event){
                this.event.value = null ;
            }
            this.data.lab.labForm.crowmDesign.image =null ;
            this.inputImage =null ;
            this.displayed =false ;
        },
        dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
        },
        makeid(length) {
                var result= '';
                var characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * 
            charactersLength));
            }
            return result+".png";
        },
        
    },
    
}
</script>
<style lang="scss"  scoped>
.inputs{
    width:70%;
    margin:10px auto;
}
.text-small {
    font-size: 8px;
}
/deep/ .p-dialog-header-maximize-icon{
    color:$tradmark-color;
}
@media (max-width:991px) {
    .inputs{
    width:100%;
    margin:10px auto;
}

    
}
</style>