<template>
    <div class="input-wrapper row">
        <div class="col-md-4">
            <label>{{label}}</label>
        </div>
        <div class="col-md-8">
            <div class="custom-input-group">
                    <InputText
                        v-model.trim="data['value']"
                        type="number"
                        :placeholder="inputPlaceholder"
                    />
                    <Dropdown
                        v-model="data[selectionKey]"
                        :options="options"
                        :optionLabel="local=='ar'?'arabic':'english'" 
                        :placeholder="placeholder"
                    />
            </div>
        </div>
    </div>
</template>
<script>
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
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
        inputPlaceholder:{
            type:String,
            default(){
                return this.local=='ar'?'القيمة':'Value'
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
        // objectKey:{
        //     type:String,
        //     required:true,
        // },
        selectionKey:{
            type:String,
            required:true,
        },
    },
    components:{
        Dropdown,
        InputText,
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
        }
    },
}
</script>
<style lang="scss" scoped>
      .custom-input-group {
        display: flex;
        .p-dropdown {
          border-radius: 0px 34px 34px 0px;
          .p-dropdown-panel{ 
            .p-dropdown-header{
              padding: 0;
            }
          }
        }
        input {
          border-radius: 34px 0px 0px 34px;
          border-right: 0px;
        }
      }
</style>