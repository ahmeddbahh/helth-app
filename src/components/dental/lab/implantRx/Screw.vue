<template>
    <div class="screw">
        <div class="check-container d-flex align-items-center  my-3"  >
            <Checkbox v-model="data.lab.implantRx.screw.select.screwRetainedChange" :binary="true" />
            <span class="mx-1">{{lang[local].select.screwRetainedChange}}</span>
        </div>
        <div class="check-container d-flex align-items-center  my-3"  >
            <Checkbox v-model="data.lab.implantRx.screw.select.screwRetainedContinue" :binary="true" />
            <span class="mx-1">{{lang[local].select.screwRetainedContinue}}</span>
        </div>
        <hr class="sparator">
        <div class="row">
            <div class="col-md-6">
                <div class="check-container d-flex align-items-center  my-3"  >
                    <Checkbox v-model="data.lab.implantRx.screw.select.zirconiaSolid" :binary="true" />
                    <span class="mx-1">{{lang[local].select.zirconiaSolid}}</span>
                </div>
                <div class="check-container d-flex align-items-center  my-3"  >
                    <Checkbox v-model="data.lab.implantRx.screw.select.solidLingual" :binary="true" />
                    <span class="mx-1">{{lang[local].select.solidLingual}}</span>
                </div>

            </div>
            <div class="col-md-6">
                <div class="check-container d-flex align-items-center  my-3"  >
                    <Checkbox v-model="data.lab.implantRx.screw.select.PFM" :binary="true" />
                    <span class="mx-1">{{lang[local].select.PFM}}</span>
                </div>
                <div class="check-container d-flex align-items-center  my-3"  >
                    <Checkbox v-model="data.lab.implantRx.screw.select.fullCastCrown" :binary="true" />
                    <span class="mx-1">{{lang[local].select.fullCastCrown}}</span>
                </div>
            </div>
        </div>
        <hr class="sparator">
        <h4 class="my-2">{{lang[local].headers.emergenceProfile}}</h4>
        <div class="row">
            <div class="col-lg-4" v-for="(value,key) in lang[local].emergenceProfile" :key="key">
                <div class="check-container d-flex align-items-center  my-3" >
                    <Checkbox v-model="data.lab.implantRx.screw.emergenceProfile[key]" :binary="true" />
                    <span class="mx-1">{{value}}</span>
                    {{data.lab.implantRx.screw.emergenceProfile[key]}}
                </div>
            </div>
            
        </div>
        <hr class="sparator">
        <h4 class="my-2 mb-4">{{lang[local].headers.implant}}</h4>
        <div class="row mb-4">
            <div class="col-md-6 col-lg-4">
                <div class="d-flex ">
                    <label class="mx-2"> {{lang[local].implant.type}}</label>
                        <div class="flex-grow-1">
                            <InputText 
                            type="text"
                            @change="$v.data.lab.implantRx.screw.implant.type.$touch()"
                            v-model="data.lab.implantRx.screw.implant.type"
                            :placeholder="lang[local].implant.type"
                            class="px-2"
                            :class="{
                                'border-error':
                                $v.data.lab.implantRx.screw.implant.type.$invalid && $v.data.lab.implantRx.screw.implant.type.$dirty,
                            }"
                            ></InputText>
                            <div class="errors">
                            <small
                                class="text-error my-2"
                                v-if="
                                    !$v.data.lab.implantRx.screw.implant.type.notContainsHtmlTags && $v.data.lab.implantRx.screw.implant.type.$dirty
                                "
                                >
                                {{ errors.inputError(lang[local].implant.type) }}
                                </small>
                                <small
                                class="text-error my-2"
                                v-else-if="!$v.data.lab.implantRx.screw.implant.type.minLen && $v.data.lab.implantRx.screw.implant.type.$dirty"
                                >
                                {{
                                    errors.minLengthError(
                                    lang[local].implant.type,
                                    $v.data.lab.implantRx.screw.implant.type.$params.minLen.min
                                    )
                                }}
                                </small>
                                <small
                                class="text-error my-2"
                                v-else-if="!$v.data.lab.implantRx.screw.implant.type.maxLen && $v.data.lab.implantRx.screw.implant.type.$dirty"
                                >
                                {{
                                    errors.maxLengthError(
                                    lang[local].implant.type,
                                    $v.data.lab.implantRx.screw.implant.type.$params.maxLen.max
                                    )
                                }}
                                </small>
                        </div>
                        </div>
                    
                    
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="d-flex ">
                    <label class="mx-2"> {{lang[local].implant.diameter}}</label>
                        <div class="flex-grow-1">
                            <InputText 
                            type="text"
                            @change="$v.data.lab.implantRx.screw.implant.diameter.$touch()"
                            v-model="data.lab.implantRx.screw.implant.diameter"
                            :placeholder="lang[local].implant.diameter"
                            class="px-2"
                            :class="{
                                'border-error':
                                $v.data.lab.implantRx.screw.implant.diameter.$invalid && $v.data.lab.implantRx.screw.implant.diameter.$dirty,
                            }"
                            ></InputText>
                            <div class="errors">
                            <small
                                class="text-error my-2"
                                v-if="
                                    !$v.data.lab.implantRx.screw.implant.diameter.notContainsHtmlTags && $v.data.lab.implantRx.screw.implant.diameter.$dirty
                                "
                                >
                                {{ errors.inputError(lang[local].implant.diameter) }}
                                </small>
                                <small
                                class="text-error my-2"
                                v-else-if="!$v.data.lab.implantRx.screw.implant.diameter.minLen && $v.data.lab.implantRx.screw.implant.diameter.$dirty"
                                >
                                {{
                                    errors.minLengthError(
                                    lang[local].implant.diameter,
                                    $v.data.lab.implantRx.screw.implant.diameter.$params.minLen.min
                                    )
                                }}
                                </small>
                                <small
                                class="text-error my-2"
                                v-else-if="!$v.data.lab.implantRx.screw.implant.diameter.maxLen && $v.data.lab.implantRx.screw.implant.diameter.$dirty"
                                >
                                {{
                                    errors.maxLengthError(
                                    lang[local].implant.diameter,
                                    $v.data.lab.implantRx.screw.implant.diameter.$params.maxLen.max
                                    )
                                }}
                                </small>
                        </div>
                        </div>
                </div>
            </div>
        </div>
        <h4 class="my-2">{{lang[local].headers.toBeIncluded}}</h4>
        <div class="row">
            <div class="col-md-6">
                <div class="check-container d-flex align-items-center  my-3"  >
                    <Checkbox v-model="data.lab.implantRx.screw.toBeIncluded.labAnalog" :binary="true" />
                    <span class="mx-1">{{lang[local].toBeIncluded.labAnalog}}</span>
                </div>
                <div class="check-container d-flex align-items-center  my-3"  >
                    <Checkbox v-model="data.lab.implantRx.screw.toBeIncluded.impressionCoping" :binary="true" />
                    <span class="mx-1">{{lang[local].toBeIncluded.impressionCoping}}</span>
                </div>

            </div>
            <div class="col-md-6">
                <div class="check-container d-flex align-items-center  my-3"  >
                    <Checkbox v-model="data.lab.implantRx.screw.toBeIncluded.abutment" :binary="true" />
                    <span class="mx-1">{{lang[local].toBeIncluded.abutment}}</span>
                </div>
                <div class="check-container d-flex align-items-start  my-3"  >
                    <Checkbox v-model="data.lab.implantRx.screw.toBeIncluded.others" :binary="true" />
                    <div class="d-flex d-flex align-items-start">
                        <span class="mx-1">{{lang[local].toBeIncluded.others}}</span>
                        <div  >
                            <InputText 
                            type="text"
                            @change="$v.data.lab.implantRx.screw.toBeIncluded.othersInput.$touch()"
                            v-model="data.lab.implantRx.screw.toBeIncluded.othersInput"
                            :placeholder="lang[local].placeholder"
                            class="px-2"
                            :class="{
                                'border-error':
                                $v.data.lab.implantRx.screw.toBeIncluded.othersInput.$invalid && $v.data.lab.implantRx.screw.toBeIncluded.othersInput.$dirty,
                            }"
                            ></InputText>
                            <div class="errors">
                            <small
                                class="text-error my-2"
                                v-if="
                                    !$v.data.lab.implantRx.screw.toBeIncluded.othersInput.notContainsHtmlTags && $v.data.lab.implantRx.screw.toBeIncluded.othersInput.$dirty
                                "
                                >
                                {{ errors.inputError(lang[local].toBeIncluded.others) }}
                                </small>
                                <small
                                class="text-error my-2"
                                v-else-if="!$v.data.lab.implantRx.screw.toBeIncluded.othersInput.minLen && $v.data.lab.implantRx.screw.toBeIncluded.othersInput.$dirty"
                                >
                                {{
                                    errors.minLengthError(
                                    lang[local].toBeIncluded.others,
                                    $v.data.lab.implantRx.screw.toBeIncluded.othersInput.$params.minLen.min
                                    )
                                }}
                                </small>
                                <small
                                class="text-error my-2"
                                v-else-if="!$v.data.lab.implantRx.screw.toBeIncluded.othersInput.maxLen && $v.data.lab.implantRx.screw.toBeIncluded.othersInput.$dirty"
                                >
                                {{
                                    errors.maxLengthError(
                                    lang[local].toBeIncluded.others,
                                    $v.data.lab.implantRx.screw.toBeIncluded.othersInput.$params.maxLen.max
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
import Checkbox from 'primevue/checkbox';
import InputText from "primevue/inputtext";
import { maxLength, minLength } from "vuelidate/lib/validators";
import {
  minLengthError,
  maxLengthError,
  inputError,
} from "../../../helpers/errors";
import { notContainsHtmlTags } from "../../../helpers/customValidators";
export default {
    components:{
        Checkbox,
        InputText
    },
    props:["data"],
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    placeholder:"{text/no}",
                    headers:{
                        emergenceProfile:"Emergence Profile",
                        implant:"Implant",
                        toBeIncluded:"To be included"
                    },
                    select:{
                        screwRetainedChange:"Screw retained - change to cement retained if not possible ",
                        screwRetainedContinue:"Screw retained - continue regardless of access hole position",
                        zirconiaSolid:"Zirconia Solid (Posterior default)",
                        solidLingual:"Solid Lingual (Anterior default)",
                        PFM:"PFM",
                        fullCastCrown:"Full cast crown"
                        
                    },
                    emergenceProfile:{
                        pushTissue:"Push tissue by 0.5mm",
                        ridgeLap:"Ridge lap on buccal",
                        anatomicalDesign:"Anatomical design"
                    },
                    implant:{
                        type:"Type",
                        diameter:"Diameter",
                        
                    },
                    toBeIncluded:{
                        labAnalog:"Lab analog",
                        impressionCoping:"Impression coping",
                        abutment:"Abutment",
                        others:"Others",
                    }

                },
                ar:{
                    placeholder:"{text/no}",
                    headers:{
                        emergenceProfile:"Emergence Profile",
                        implant:"Implant",
                        toBeIncluded:"To be included"
                    },
                    select:{
                        screwRetainedChange:"Screw retained - change to cement retained if not possible ",
                        screwRetainedContinue:"Screw retained - continue regardless of access hole position",
                        zirconiaSolid:"Zirconia Solid (Posterior default)",
                        solidLingual:"Solid Lingual (Anterior default)",
                        PFM:"PFM",
                        fullCastCrown:"Full cast crown"
                        
                    },
                    emergenceProfile:{
                        pushTissue:"Push tissue by 0.5mm",
                        ridgeLap:"Ridge lap on buccal",
                        anatomicalDesign:"Anatomical design"
                    },
                    implant:{
                        type:"Type",
                        diameter:"Diameter",
                        
                    },
                    toBeIncluded:{
                        labAnalog:"Lab analog",
                        impressionCoping:"Impression coping",
                        abutment:"Abutment",
                        others:"Others",
                    }

                }
            },
            errors:{
                minLengthError,
                maxLengthError,
                inputError,
            },
        }
    },
    validations:{
        data:{
            lab:{
                implantRx:{
                    screw: {
                        implant:{
                            type:{
                            minLen: minLength(2),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        },
                        diameter:{
                            minLen: minLength(2),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        },

                        },
                        toBeIncluded:{
                            othersInput:{
                                minLen: minLength(2),
                                maxLen: maxLength(100),
                                notContainsHtmlTags(val) {
                                if (!val) return true;
                                return notContainsHtmlTags(val);
                                },
                            }
                        },
                        
                        
                    
                },
                }
            }
        },
    },
    watch:{
        "data.lab.implantRx.screw":{
            handler(){
                this.$store.dispatch("setToothLabCrownDesignIsValid",this.$v.data.lab.implantRx.screw.$invalid );
            },
            deep:true
        },
    },

}
</script>
<style lang="scss" scoped>
.cement{
    small{
        font-size: 9px;
    }
    .sparator{
        height: 2px;
        border-radius: 20px;
    }
}
</style>