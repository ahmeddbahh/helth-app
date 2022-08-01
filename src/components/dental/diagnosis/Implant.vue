<template>
    <div class="implant">
        <div v-if="data[selectedType].toothChart.categoryType.implant.english == 'Full arch Implants/Denture'">
            <div class="row my-3">
                <div class="col-md-4">
                    <label > {{lang[local].arch}}</label>
                </div>
                <div class="col-md-8">
                    <SelectButton
                    class="mx-3 diagnosis-actions-categoy-type"
                    v-model="data[selectedType].toothChart.implant.fullArch.arch"
                    :options="arch"
                    :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                    ></SelectButton>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-md-4">
                    <label > {{lang[local].type}}</label>
                </div>
                <div class="col-md-8">
                    <SelectButton
                    class="mx-3 diagnosis-actions-categoy-type"
                    v-model="data[selectedType].toothChart.implant.fullArch.type"
                    :options="type"
                    :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                    ></SelectButton>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-md-4">
                    <label > {{lang[local].material}}</label>
                </div>
                <div class="col-md-8">
                    <SelectButton
                    class="mx-3 diagnosis-actions-categoy-type"
                    v-model="data[selectedType].toothChart.implant.fullArch.material"
                    :options="material"
                    :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                    ></SelectButton>
                </div>
            </div>
            <div class="row my-3" v-if="data[selectedType].toothChart.implant.fullArch.type.english=='Fixed Bridge'">
                <div class="col-md-4">
                    <label > {{lang[local].mode}}</label>
                </div>
                <div class="col-md-8">
                    <SelectButton
                    class="mx-3 diagnosis-actions-categoy-type"
                    v-model="data[selectedType].toothChart.implant.fullArch.mode"
                    
                    :options="mode1"
                    :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                    ></SelectButton>
                </div>
            </div>
            <div class="row my-3" v-if="data[selectedType].toothChart.implant.fullArch.type.english=='Overdenture'">
                <div class="col-md-4">
                    <label > {{lang[local].mode}}</label>
                </div>
                <div class="col-md-8">
                    <SelectButton
                    class="mx-3 diagnosis-actions-categoy-type"
                    v-model="data[selectedType].toothChart.implant.fullArch.mode"
                    :options="mode2"
                    :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                    ></SelectButton>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-md-4">
                    <label > {{lang[local].NImplants}}</label>
                </div>
                <div class="col-md-8">
                    <div>
                        <InputText  
                        v-model="data[selectedType].toothChart.implant.fullArch.NImplants" 
                        type="number" :placeholder="lang[local].placeholder"
                        ></InputText>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
</template>
<script>
import SelectButton from "primevue/selectbutton";
import InputText from "primevue/inputtext"
export default {
    components:{
        SelectButton,
        InputText
    },
    props:['data','selectedType'],
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    placeholder:"No.",
                    arch:"Arch",
                    type:"Type",
                    material:"Material",
                    mode:"Mode",
                    NImplants:"Nº Implants",
                },
                ar:{
                    placeholder:"No.",
                    arch:"Arch",
                    type:"Type",
                    material:"Material",
                    mode:"Mode",
                    NImplants:"Nº Implants",
                }
            },
            
            arch:[
                {
                    english:"Upper Arch",
                    arabic:"Upper Arch"
                },
                {
                    english:"Lower Arch",
                    arabic:"Lower Arch"
                },
            ],
            type:[
                {
                    english:"Fixed Bridge",
                    arabic:"Fixed Bridge"
                },
                {
                    english:"Overdenture",
                    arabic:"Overdenture"
                },
                {
                    english:"Complete Denture",
                    arabic:"Complete Denture"
                },
            ],
            material:[
                {
                    english:"Ceramic",
                    arabic:"Ceramic"
                },
                {
                    english:"Acrylic",
                    arabic:"Acrylic"
                },
            ],
            mode1:[
                {
                    english:"Vertical Implants",
                    arabic:"Vertical Implants"
                },
                {
                    english:"All-on 4.5.6 TM",
                    arabic:"All-on 4.5.6 TM"
                },
            ],
            mode2:[
                {
                    english:"Vertical Implants",
                    arabic:"Vertical Implants"
                },
            ],

            
        }
    },
}
</script>