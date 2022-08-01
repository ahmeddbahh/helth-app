<template>
    <div class="nightguardsSplints">
        <div class="row">
            <div class="col-md-6 col-lg-4">
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.nightguardsSplints.upper" :binary="true" />
                    <span class="mx-1">{{lang[local].upper}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.nightguardsSplints.lower" :binary="true" />
                    <span class="mx-1">{{lang[local].lower}}</span>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.nightguardsSplints.soft" :binary="true" />
                    <span class="mx-1">{{lang[local].soft}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.nightguardsSplints.hard" :binary="true" />
                    <span class="mx-1">{{lang[local].hard}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.nightguardsSplints.flexiGuard" :binary="true" />
                    <span class="mx-1">{{lang[local].flexiGuard}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.nightguardsSplints.astronThermoguard" :binary="true" />
                    <span class="mx-1">{{lang[local].astronThermoguard}}</span>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="check-container d-flex align-items-center  justify-content-sta my-3" >
                    <div>
                        <Checkbox v-model="data.lab.removableProsthetic.nightguardsSplints.sportsGuard" :binary="true" />
                    <span  class="mx-1">{{lang[local].sportsGuard}}</span>
                    </div>
                    <div   >
                        <InputText 
                        :placeholder="lang[local].sportsGuardInput"
                        v-model="data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput"
                        @change="$v.data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput.$touch()"
                        :class="{
                                    'border-error':
                                    $v.data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput.$invalid && $v.data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput.$dirty,
                                }"
                        ></InputText>
                        <div class="errors">
                                    <small
                                        class="text-error my-2"
                                        v-if="
                                            !$v.data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput.notContainsHtmlTags && $v.data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput.$dirty
                                        "
                                        >
                                        {{ errors.inputError(lang[local].sportsGuard) }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput.minLen && $v.data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput.$dirty"
                                        >
                                        {{
                                            errors.minLengthError(
                                            lang[local].sportsGuard,
                                            $v.data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput.$params.minLen.min
                                            )
                                        }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput.maxLen && $v.data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput.$dirty"
                                        >
                                        {{
                                            errors.maxLengthError(
                                            lang[local].sportsGuard,
                                            $v.data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput.$params.maxLen.max
                                            )
                                        }}
                                        </small>
                                </div>

                    </div>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.nightguardsSplints.dreamTAPSnoreGuard" :binary="true" />
                    <span class="mx-1">{{lang[local].dreamTAPSnoreGuard}}</span>
                </div>
                <div class="check-container d-flex align-items-center  d-flex  my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.nightguardsSplints.deprogrammerMini" :binary="true" />
                    <div >
                        <span class="mx-1">{{lang[local].deprogrammerMini}}</span>
                        
                    </div>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.nightguardsSplints.deprogrammerFull" :binary="true" />
                    <span class="mx-1">{{lang[local].deprogrammerFull}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.nightguardsSplints.noOpposing" :binary="true" />
                    <span class="mx-1">{{lang[local].noOpposing}}</span>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import Checkbox from 'primevue/checkbox';
import InputText from "primevue/inputtext";
import { maxLength, minLength } from "vuelidate/lib/validators";
import {minLengthError,maxLengthError,inputError} from "../../../helpers/errors";
import { notContainsHtmlTags } from "../../../helpers/customValidators";

export default {
    props:['data'],
    components:{
        Checkbox,
        InputText
        
        },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    upper:"Upper",
                    lower:"Lower",
                    soft:"Soft",
                    hard:"Hard (clear acrylic)",
                    flexiGuard:"FlexiGuard™ (hard-soft)*",
                    astronThermoguard:"Astron thermoguard",
                    sportsGuard:"Sports guard",
                    sportsGuardInput:"Level {text/no}",
                    dreamTAPSnoreGuard:"dreamTAP® snore guard",
                    deprogrammerMini:"Deprogrammer mini",
                    deprogrammerFull:"Deprogrammer full",
                    noOpposing:"No opposing",
                },
                ar:{
                    upper:"Upper",
                    lower:"Lower",
                    soft:"Soft",
                    hard:"Hard (clear acrylic)",
                    flexiGuard:"FlexiGuard™ (hard-soft)*",
                    sportsGuard:"Sports guard",
                    sportsGuardInput:"Level {text/no}",
                    dreamTAPSnoreGuard:"dreamTAP® snore guard",
                    deprogrammerMini:"Deprogrammer mini",
                    deprogrammerFull:"Deprogrammer full",
                    noOpposing:"No opposing",
                }
            },
            errors:{
                minLengthError,
                maxLengthError,
                inputError
            }
        }
    },
    validations:{
        data:{
            lab:{
                removableProsthetic:{
                    nightguardsSplints:{
                        sportsGuardInput:{
                            minLen: minLength(2),
                            maxLen: maxLength(100),
                            notContainsHtmlTags(val) {
                            if (!val) return true;
                            return notContainsHtmlTags(val);
                            },
                        },
                    }
                }
                }
        },
    },
     watch:{
       
        "data.lab.removableProsthetic.nightguardsSplints.sportsGuardInput":{
            handler(){
                this.$store.dispatch("setToothLabNightguardsSplintsIsValid",this.$v.data.lab.removableProsthetic.nightguardsSplints.$invalid );
            },
            deep:true
        },
        
    },
    
}
</script>
<style lang="scss" scoped>

.nightguardsSplints{
    small {
        font-size: 10px;
    }
/deep/ .p-inputtext{
    height: 50%;
}
}
</style>