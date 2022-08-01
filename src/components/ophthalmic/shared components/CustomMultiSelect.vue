<template>
    <div class="input-wrapper row">
        <div class="col-md-4">
            <label>{{label}}</label>
        </div>
        <div class="col-md-8">
            <MultiSelect 
                v-model="selectedOptions" 
                :options="options" 
                :optionLabel="local=='ar'?'arabic':'english'" 
                :showToggleAll="false"
                :placeholder="placeholder" 
            />
            <InputText v-if="otherSelected" type="text" :placeholder="otherPlaceholder" class="my-2" v-model="data['other']" />
            <div class="error" v-if="v">
                <small class="d-block text-danger" v-if="v.$model !='' && !v.notContainsHtmlTags">
                    {{errors.htmlTagsError(label)}}
                </small>
                <small class="text-error my-2" v-else-if="!v.minLen">
                    {{errors.minLengthError(label,v.$params.minLen.min)}}
                </small>
                <small class="text-error my-2" v-else-if="!v.maxLen">
                    {{errors.maxLengthError(label, v.$params.maxLen.max) }}
                </small>
            </div>
        </div>
    </div>
</template>
<script>
import MultiSelect from 'primevue/multiselect';
import InputText from 'primevue/inputtext';
import {htmlTagsError,minLengthError,maxLengthError} from '../../helpers/errors'
export default {
    props:{
        label:{
            type:String,
            required:true
        },
        placeholder:{
            type:String,
            default(){
                return this.local=='ar'?'اختر':'Select'
            },
        },
        otherPlaceholder:{
            type:String,
            default(){
                return this.local=='ar'?'اختيار اخر':'Other Value'
            },
        },
        data:{
            type:Object,
            required:true
        },
        options:{
            type:Array,
            required:true,
        },
        selectionKey:{
            type:String,
            required:true,
        },
        v:{
            type:Object,
        }
    },
    components:{
        MultiSelect,
        InputText,
    },
    watch:{
        // filter the selected options from other option //
        selectedOptions(){
                this.otherSelected=false;
                this.data[this.selectionKey]=[];
                this.selectedOptions.forEach(el=>{
                    if(el.english=='other'){
                        this.otherSelected=true;
                    }
                    else if(el.english!='other'){
                        this.data[this.selectionKey].push(el);
                        this.data['other']='';
                    }
                })
        },
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            selectedOptions:[],
            otherSelected:false,
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
            },           
        }
    },
}
</script>
<style lang="scss" scoped>

</style>