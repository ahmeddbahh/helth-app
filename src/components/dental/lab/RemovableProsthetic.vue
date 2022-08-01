<template>
    <div class="removable-prosthetic">
        <h3 class="my-3 ">{{lang[local].headers.removableProstheticRx}}</h3>
        <!-- <div class="">
            <SelectButton
                v-model="data.lab.removableProsthetic.adultOrChild"
                :options="adultOrChildOptions"
                :optionLabel="local=='ar'?'arabic':'english'"
            ></SelectButton>
        </div> -->
        <div class="check-container d-flex align-items-center my-3" v-for="(value,key) in lang[local].select" :key="key">
            <Checkbox v-model="data.lab.removableProsthetic.select[key]" :binary="true" />
            <span class="mx-1">{{value}}</span>
        </div>
                
            
        <div class="extractions">
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2 ">{{lang[local].headers.extractions}}</h3>

            </div>
            <Extractions :data="data" :type="data.lab.removableProsthetic.adultOrChild.english"></Extractions>
        </div>
        <div class="case-design">
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].headers.caseDesign}}</h3>
            </div>
            <CaseDesign :data="data" :type="data.lab.removableProsthetic.adultOrChild.english"></CaseDesign>
        </div>
        <div class="case-design">
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].headers.dentures}}</h3>
            </div>
            <Dentures :data="data" ></Dentures>
        </div>
        <div class="case-design">
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].headers.partials}}</h3>
            </div>
            <Partials :data="data" ></Partials>
        </div>
        <div class="case-design">
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].headers.nightguardsSplints}}</h3>
            </div>
            <NightguardsSplints :data="data" ></NightguardsSplints>
        </div>
        <div class="case-design">
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].headers.other}}</h3>
            </div>
            <Other :data="data" ></Other>
        </div>
        <div class="case-design">
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].headers.specificInstructions}}</h3>
            </div>
            <SpeificInstructions :data="data" ></SpeificInstructions>
        </div>
    </div>
</template>
<script>
import Checkbox from 'primevue/checkbox';
// import SelectButton from "primevue/selectbutton";
import Extractions from "./RemovableProsthetic/Extractions.vue";
import CaseDesign from "./RemovableProsthetic/CaseDesign.vue";
import Dentures from "./RemovableProsthetic/Dentures.vue";
import Partials from "./RemovableProsthetic/Partials.vue";
import NightguardsSplints from "./RemovableProsthetic/NightguardsSplints.vue";
import Other from "./RemovableProsthetic/Other.vue";
import SpeificInstructions from "./RemovableProsthetic/SpeificInstructions.vue";

export default {
    props:["data"],
    components:{
        Checkbox,
        // SelectButton,
        Extractions,
        CaseDesign,
        Dentures,
        Partials,
        NightguardsSplints,
        Other,
        SpeificInstructions
        },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    headers:{
                        removableProstheticRx:"Removable Prosthetic Rx",
                        extractions:"EXTRACTIONS",
                        caseDesign:"CASE DESIGN",
                        dentures:"DENTURES",
                        partials:"PARTIALS",
                        nightguardsSplints:"NIGHTGUARDS/SPLINTS",
                        other:"OTHER",
                        specificInstructions:"RX SPECIFIC INSTRUCTIONS"
                    },
                    please:"Please MARK all teeth to be extracted and replaced",
                    select:{
                        toBeExtracted:"Teeth to be extracted from model now",
                        removed:"Teeth removed from model at final processing"
                    }
                },
                ar:{
                    headers:{
                        removableProstheticRx:"Removable Prosthetic Rx",
                        extractions:"EXTRACTIONS",
                        caseDesign:"CASE DESIGN",
                        dentures:"DENTURES",
                        partials:"PARTIALS",
                        nightguardsSplints:"NIGHTGUARDS/SPLINTS",
                        other:"OTHER",
                        specificInstructions:"RX SPECIFIC INSTRUCTIONS"
                    },
                    please:"Please MARK all teeth to be extracted and replaced",
                    select:{
                        toBeExtracted:"Teeth to be extracted from model now",
                        removed:"Teeth removed from model at final processing"
                    }
                }
            },
            adultOrChildOptions:[
                {
                    english:"ADULT",
                    ararbic:"ADULT"
                },{
                    english:"CHILD",
                    arabic:"CHILD"
                }
            ],
        }
    },
}
</script>
<style lang="scss" scoped>
.removable-prosthetic{
    .header{
            background: $tradmark-color;
            border-radius: 10px;
            font-weight: 300;
    }
}
</style>