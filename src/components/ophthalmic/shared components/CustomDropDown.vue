<template>
    <div class="input-wrapper row">
        <div class="col-sm-4" v-if="label">
            <label>{{label}}</label>
        </div>
        <div class="col-sm-8" :class="!label?'col-md-12':''">
            <Dropdown 
                v-model="selectedOption" 
                :options="options" 
                :optionLabel="local=='ar'?'arabic':'english'" 
                :placeholder="placeholder" 
            />
            <InputText v-if="otherSelected" type="text" :placeholder="otherPlaceholder" class="my-2" v-model="data['other']" />
            <div class="error" v-if="v">
                <small class="d-block text-danger" v-if="v.$model !='' && !v.notContainsHtmlTags">
                    {{errors.htmlTagsError(label?label:'This Field')}}
                </small>
                <small class="text-error my-2" v-else-if="!v.minLen">
                    {{errors.minLengthError(label?label:'This Field',v.$params.minLen.min)}}
                </small>
                <small class="text-error my-2" v-else-if="!v.maxLen">
                    {{errors.maxLengthError(label?label:'This Field', v.$params.maxLen.max) }}
                </small>
            </div>
        </div>
    </div>
</template>
<script>
import {htmlTagsError,minLengthError,maxLengthError} from '../../helpers/errors'

import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
export default {
    props:{
        label:{
            type:String,
            // required:true
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
        Dropdown,
        InputText,
    },
    watch:{
        // filter the selected options from other option //
        selectedOption(){
            this.otherSelected=false;
            this.data[this.selectionKey]={english:'',arabic:''};
            if(this.selectedOption.english=='other'){
                this.otherSelected=true;
            }
            else if(this.selectedOption.english!='other'){
                this.data[this.selectionKey]=this.selectedOption;
                this.data['other']=''
            }
        },
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            selectedOption:{english:'',arabic:''},
            otherSelected:false,
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
            },   
        }
    },
    methods:{
        // display selectedOption After Copy Method
        copy(){
            if(this.data['other']){
                this.otherSelected=true
                this.selectedOption={english:"other",arabic:"other"}
            }
            else if (this.data[this.selectionKey].english){
                this.selectedOption=this.data[this.selectionKey]
                // console.log(this.selectedOption)
            }
        },
    },
}
</script>