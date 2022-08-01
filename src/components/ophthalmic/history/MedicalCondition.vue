<template>
    <div class="medical-condition">
        <div class="form-wrapper row">
            <div v-for="(condition , i ) in medicalConditionOptions" :key="i" class="field-checkbox my-2 col-md-4" >
                <Checkbox :id="condition.name" v-model="data.medicalCondition[condition.key]" :binary="true" />
                <label :for="condition.name" class="mx-1">{{condition.name}}</label>
            </div>
            <div class="col-md-4 my-2">
                <div class="field-checkbox my-2">
                    <Checkbox id="otherMedicalConditionChecked" v-model="otherMedicalConditionChecked" :binary="true" />
                    <label for="otherMedicalConditionChecked" class="mx-1">Other</label>
                </div>
                <InputText 
                    v-if="otherMedicalConditionChecked"
                    v-model="data.medicalCondition.other" 
                    type="text" 
                    placeholder="Other value" 
                    />
            </div>
            <div class="input-wrapper col-md-4 d-flex my-2">
                <label>{{lang[local].medicalCondition.note.label}}</label>
                <Textarea v-model="data.medicalCondition.note" :placeholder="lang[local].medicalCondition.note.placeholder" rows="3" />
            </div>
        </div>

    </div>
</template>
<script>
import historyOptions from '../../../mixins/clinics/ophthalmic/history/historyOptions'
import lang from '../../../mixins/clinics/ophthalmic/history/lang'
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
export default {
    mixins:[historyOptions,lang],
    props:{
        data:{
            type:Object,
            required:true
        },
    },
    components:{
        Checkbox,
        InputText,
        Textarea,
    },
    data(){
        return{
            // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            otherMedicalConditionChecked:false,
        }
    },
    watch:{
        otherMedicalConditionChecked(){
            if(!this.otherMedicalConditionChecked)
                this.data.medicalCondition.other=''
        }
    },
}
</script>
<style lang="scss" scoped>
.medical-condition{
    .form-wrapper{
        .field-checkbox{
            display: flex;
            align-items: center;
        }
    }

}
</style>