<template>
    <div class="other">
        <div class="row">
            <div class="col-md-6 col-lg-4">
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.other.upper" :binary="true" />
                    <span class="mx-1">{{lang[local].upper}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.other.lower" :binary="true" />
                    <span class="mx-1">{{lang[local].lower}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.other.reline" :binary="true" />
                    <span class="mx-1">{{lang[local].reline}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.other.rebase" :binary="true" />
                    <span class="mx-1">{{lang[local].rebase}}</span>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.other.repair" :binary="true" />
                    <span class="mx-1">{{lang[local].repair}}</span>
                </div>
                <div class="check-container d-flex align-items-center  d-flex  my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.other.softLiner" :binary="true" />
                    <div >
                        <span class="mx-1">{{lang[local].softLiner}}</span>
                        
                    </div>
                </div>
                <div class="check-container d-flex align-items-center  justify-content-sta my-3" >
                    <div>
                        <Checkbox v-model="data.lab.removableProsthetic.other.addClasp" :binary="true" />
                    <span  class="mx-1">{{lang[local].addClasp}}</span>
                    </div>
                    <div   >
                        <InputText 
                        :placeholder="lang[local].addClaspInput"
                        v-model="data.lab.removableProsthetic.other.addClaspInput"
                        @change="$v.data.lab.removableProsthetic.other.addClaspInput.$touch()"
                        :class="{
                                    'border-error':
                                    $v.data.lab.removableProsthetic.other.addClaspInput.$invalid && $v.data.lab.removableProsthetic.other.addClaspInput.$dirty,
                                }"
                        ></InputText>
                        <div class="errors">
                                    <small
                                        class="text-error my-2"
                                        v-if="
                                            !$v.data.lab.removableProsthetic.other.addClaspInput.notContainsHtmlTags && $v.data.lab.removableProsthetic.other.addClaspInput.$dirty
                                        "
                                        >
                                        {{ errors.inputError(lang[local].addClasp) }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.removableProsthetic.other.addClaspInput.minLen && $v.data.lab.removableProsthetic.other.addClaspInput.$dirty"
                                        >
                                        {{
                                            errors.minLengthError(
                                            lang[local].addClasp,
                                            $v.data.lab.removableProsthetic.other.addClaspInput.$params.minLen.min
                                            )
                                        }}
                                        </small>
                                        <small
                                        class="text-error my-2"
                                        v-else-if="!$v.data.lab.removableProsthetic.other.addClaspInput.maxLen && $v.data.lab.removableProsthetic.other.addClaspInput.$dirty"
                                        >
                                        {{
                                            errors.maxLengthError(
                                            lang[local].addClasp,
                                            $v.data.lab.removableProsthetic.other.addClaspInput.$params.maxLen.max
                                            )
                                        }}
                                        </small>
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
                    reline:"Reline",
                    rebase:"Rebase",
                    repair:"Repair",
                    softLiner:"Soft liner",
                    addClasp:"Add clasp",
                    addClaspInput:"Clasp type{text/no}",
                },
                ar:{
                    upper:"Upper",
                    lower:"Lower",
                    reline:"Reline",
                    rebase:"Rebase",
                    repair:"Repair",
                    softLiner:"Soft liner",
                    addClasp:"Add clasp",
                    addClaspInput:"Clasp type{text/no}",
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
                    other:{
                        addClaspInput:{
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
       
        "data.lab.removableProsthetic.other.addClaspInput":{
            handler(){
                this.$store.dispatch("setToothLabOtherIsValid",this.$v.data.lab.removableProsthetic.other.$invalid );
            },
            deep:true
        },
        
    },
    
}
</script>
<style lang="scss" scoped>

.other{
    small {
        font-size: 10px;
    }
/deep/ .p-inputtext{
    height: 50%;
}
}
</style>