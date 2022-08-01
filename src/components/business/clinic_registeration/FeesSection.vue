<template>
    <div class="fees-section" :class="{'arabic-content':local=='ar'}">
        <div class="input-wrapper col-lg-6 my-2">
            <label>{{lang[local].amount.label}}</label>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <Dropdown 
                        :placeholder="lang[local].unit.placeholder"
                        :options="currencyOptions" 
                        :optionLabel="local=='ar'?'arabic':'english'" 
                        v-model="data.fees.currency" 
                        :class="{'border-error': $v.data.fees.currency.$invalid && $v.data.fees.currency.$error}" 
                        @change="$v.data.fees.currency.$touch()"
                    />
                </span>
                <InputText 
                    type="number"  
                    :placeholder="lang[local].amount.placeholder" 
                    v-model.trim="data.fees.amount"
                    :class="{'border-error': $v.data.fees.amount.$invalid && $v.data.fees.amount.$error}"
                    @change="$v.data.fees.amount.$touch()"
                ></InputText>
            </div>
            <div class="errors mt-2">
                <small class="text-error"  
                    v-if="$v.data.fees.currency.$error && !$v.data.fees.currency.required">{{errors.requiredErorr(lang[local].unit.label)}}
                </small>
                <small class="text-error"  
                    v-if="$v.data.fees.amount.$error && !$v.data.fees.amount.required">{{errors.requiredErorr(lang[local].amount.label)}}
                </small>
                <small class="text-error"  
                    v-else-if="$v.data.fees.amount.$error && !$v.data.fees.amount.numeric">{{errors.numericError(lang[local].amount.label)}}
                </small>
            </div>
        </div>
    </div>
</template>
<script>
import feesSectionLang from '../../../mixins/business/clinic_registeration/feesSectionLang.js'
import {required,numeric} from "vuelidate/lib/validators";
import {requiredErorr,numericError} from '../../../components/helpers/errors.js'
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
export default {
    mixins:[feesSectionLang],
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    components:{
        Dropdown,
        InputText
    },
    data() {
        return {
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            currencyOptions: [
                {arabic: 'دولار', english: '$'},
                {arabic: 'جنيه', english: 'LE'},
                {arabic: 'يورو', english: 'EUR'},
            ],
            errors:{
                requiredErorr,
                numericError,
            }
        }
    },
    validations:{
        data:{
            fees:{
                amount:{  
                    required,
                    numeric
                },
                currency:{
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