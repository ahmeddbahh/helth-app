<template>
    <div class="waiting-time-section" :class="{'arabic-content':local=='ar'}">
        <div class="input-wrapper col-lg-6 my-2">
            <label>{{lang[local].time.label}}</label>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <Dropdown 
                        :options="unitOptions"
                        :optionLabel="local=='ar'?'arabic':'english'"  
                        :placeholder="lang[local].unit.placeholder"
                        v-model="data.waitingTime.unit" 
                        :class="{'border-error': $v.data.waitingTime.unit.$invalid && $v.data.waitingTime.unit.$error}" 
                        @change="$v.data.waitingTime.unit.$touch()" 
                    />
                </span>
                <InputText 
                    type="number"  
                    :placeholder="lang[local].time.placeholder" 
                    :class="{ 'border-error': $v.data.waitingTime.time.$invalid && $v.data.waitingTime.time.$error }"
                    v-model.trim="data.waitingTime.time"
                    @change="$v.data.waitingTime.time.$touch()"
                />
            </div>
            <div class="errors mt-2">
                <small class="text-error"  
                    v-if="$v.data.waitingTime.unit.$error && !$v.data.waitingTime.unit.required">{{errors.requiredErorr(lang[local].unit.label)}}
                </small>
                <small class="text-error"  
                    v-if="$v.data.waitingTime.time.$error && !$v.data.waitingTime.time.required">{{errors.requiredErorr(lang[local].time.label)}}
                </small>
                <small class="text-error"  
                    v-else-if="$v.data.waitingTime.time.$error && !$v.data.waitingTime.time.numeric">{{errors.numericError(lang[local].time.label)}}
                </small>
            </div>
        </div>
    </div>
</template>
<script>
import waitingTimeSectionLang from '../../../mixins/business/clinic_registeration/waitingTimeSectionLang.js'
import {required,numeric} from "vuelidate/lib/validators";
import {requiredErorr,numericError} from '../../../components/helpers/errors.js'
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
export default {
    mixins:[waitingTimeSectionLang],
    props:['data'],
    components:{
        Dropdown,
        InputText
    },
    data() {
        return {
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            unitOptions: [
                {arabic: 'دقيقة', english: 'minute'},
                {arabic: 'ساعة', english: 'hour'},
            ],
            errors:{
                requiredErorr,
                numericError,
            }
        }
    },
    validations:{
        data:{
            waitingTime:{
                time:{  
                    required,
                    numeric
                },
                unit:{  
                    required
                }
            }
        }
    },
}
</script>
<style lang="scss" scoped>
/deep/ .p-inputgroup-addon{
    background: transparent !important;
    padding: 0px !important;
    border: none !important;
}
/deep/ .p-dropdown{
    border-right: 0px !important;
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
}
.wating-time-section{
     
}
.arabic-content{
    /deep/ .p-inputgroup-addon{
        background: transparent !important;
        padding: 0px !important;
        border: none !important;
    }
    /deep/ .p-dropdown{
        border-top-left-radius: 0px !important;
        border-bottom-left-radius: 0px !important;
        border: 1px solid $secondary-color-2 !important;
        border-top-right-radius: 34px !important;
        border-bottom-right-radius: 34px !important;
    }
    .border-error.p-dropdown{
        border: 1px solid $error !important;
    }
}
</style>