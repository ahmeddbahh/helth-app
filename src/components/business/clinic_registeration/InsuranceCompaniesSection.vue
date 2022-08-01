<template>
    <div class="insurance-companies-section">
        <div class="col-lg-6">
            <div class="input-wrapper">
                <label>Search in Insurance Companies List</label>
                <div class="d-flex gap-2">
                    <span :class="local=='en'?'p-input-icon-left':'p-input-icon-right'" class="flex-grow-1">
                        <i class="pi pi-search" />                        
                        <AutoComplete 
                            v-model="initCompany.init" 
                            :suggestions.sync="filteredCompanies"
                            @complete="searchCompany($event)" :field="local=='ar'?'arabic':'english'" 
                        />
                    </span>
                    <Button icon="pi pi-plus" @click.prevent="addCompany" class="p-button-rounded" />
                </div>
            </div>
        </div>
        <div v-if="data.insuranceCompanies.length" class="selected-companies-list d-flex gap-2 flex-wrap mb-2">
            <div v-for="(c,index) in data.insuranceCompanies" :key="index" class="company d-flex gap-2 align-items-center my-2">
                <label v-if="local=='ar'">{{c.arabic}}</label>
                <label v-else>{{c.english}}</label>
                <Button icon="pi pi-times" @click.prevent="deleteCompany(index)" class="p-button-rounded p-button-danger" />
            </div>
        </div>
    </div>
</template>
<script>
import insuranceCompaniesList from '../../../mixins/business/clinic_registeration/insuranceCompaniesList.js';
import {required} from "vuelidate/lib/validators";
import AutoComplete from 'primevue/autocomplete';
import Button from 'primevue/button';
export default {
    mixins:[insuranceCompaniesList],
    props:{
        data:{
            type:Object,
            required:true
        },
        initCompany:{
            type:Object,
            required:true
        },
    },
    components:{
        AutoComplete,
        Button
    },
    data(){
        return{
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
			filteredCompanies: [],
        }
    },
    validations:{
        data:{
            insuranceCompanies:{
                $each: {
                    arabic: {
                        required,
                    },
                    english:{
                        required,
                    },
                }
            }
        },
    },
    methods:{
        searchCompany(event){
            setTimeout(()=>{
                this.filteredCompanies =this.insuranceCompaniesList.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
                if(this.data.insuranceCompanies.length&&this.filteredCompanies.length){
                    this.data.insuranceCompanies.forEach(ele=>{ 
                        for(let i=0 ; i<this.filteredCompanies.length;i++){
                            if(ele.arabic ==this.filteredCompanies[i].arabic&&ele.english ==this.filteredCompanies[i].english){
                                this.filteredCompanies.splice(i,1);
                                break ;
                            }
                        }
                    });
                }
            },200)
        },
        addCompany(){
            if(this.initCompany.init.arabic && this.initCompany.init.english){
                this.data.insuranceCompanies.push({...this.initCompany.init})
                this.initCompany.init={arabic:"",english:"" }
                this.filteredCompanies=[];
            }
        },
        deleteCompany(index){
            this.data.insuranceCompanies.splice(index,1)
        },
    }

}
</script>
<style lang="scss" scoped>
/deep/ .p-input-icon-left .p-autocomplete .p-inputtext{
    padding-left: 2.5rem;
}
/deep/ .p-input-icon-right .p-autocomplete .p-inputtext{
    padding-right: 2.5rem;
}
/deep/ .p-input-icon-right .p-autocomplete .p-autocomplete-loader {
  left: 1rem;
  right:auto;
}
/deep/ .pi{
    z-index: 10;
}
/deep/ .p-button-icon-only{
    .pi{
        color: white !important;
    }
}
.selected-companies-list{
    .company{
        padding: 5px;
        border-radius: 34px;
        background-color: #f8f9fa;
    }
}
</style>