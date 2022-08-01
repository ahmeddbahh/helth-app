<template>
    <div class="input-wrapper">
        <label v-if="label">{{label}}</label>
        <div class="custom-input-group">
                <InputText
                    v-model.trim="data[objectKey][valueKey]"
                    :type="valueType"
                    :placeholder="valuePlaceholder"
                />
                <Dropdown
                    v-model="data[objectKey][selectionKey]"
                    :options="options"
                    :optionLabel="local=='ar'?'arabic':'english'" 
                    :placeholder="dropdownPlaceholder"
                />
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
        },
        valuePlaceholder:{
            type:String,
        },
        valueType:{
            type:String,
        },
        dropdownPlaceholder:{
            type:String,
        },
        data:{
            type:Object,
            required:true
        },
        options:{
            type:Array,
            required:true,
        },
        objectKey:{
            type:String,
            required:true,
        },
        selectionKey:{
            type:String,
            required:true,
        },
        valueKey:{
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