<template>
    <div class="orthodontic">
            <div>
                <h3  >{{lang[local].orthodontal}}</h3>
                <!-- <div >
                    <SelectButton
                        v-model="data.lab.orthodontal.springAligners.adultOrChild"
                        :options="adultOrChildOptions"
                        :optionLabel="local=='ar'?'arabic':'english'"
                    ></SelectButton>
                </div> -->
            </div>
            <div class="margin-design" > 
                <div class="d-flex justify-content-center">
                    <h3 class="header my-2 px-5 py-2">{{lang[local].spring}}</h3>
                </div>
                <SpringAligners :data="data" :type="data.lab.orthodontal.springAligners.adultOrChild.english"></SpringAligners>
            </div>
            <div class="margin-design" > 
                <div class="d-flex justify-content-center">
                    <h3 class="header my-2 px-5 py-2">{{lang[local].fixed}}</h3>
                </div>
                <FixedAppliances :data="data" ></FixedAppliances>
            </div>
            <div class="margin-design" > 
                <div class="d-flex justify-content-center">
                    <h3 class="header my-2 px-5 py-2">{{lang[local].arch}}</h3>
                </div>
                <ArchDevelopment :data="data" ></ArchDevelopment>
            </div>
            <div class="margin-design" > 
                <div class="d-flex justify-content-center">
                    <h3 class="header my-2 px-5 py-2">{{lang[local].retainers}}</h3>
                </div>
                <Retainers :data="data" ></Retainers>
            </div>
            <div class="margin-design" > 
                <div class="d-flex justify-content-center">
                    <h3 class="header my-2 px-5 py-2">{{lang[local].study}}</h3>
                </div>
                <StudyModels :data="data" ></StudyModels>
            </div>
            <div class="margin-design" > 
                <div class="d-flex justify-content-center">
                    <h3 class="header my-2 px-5 py-2">{{lang[local].nightguards}}</h3>
                </div>
                <NightGuards :data="data" ></NightGuards>
            </div>
            <div class="margin-design" > 
                <div class="d-flex justify-content-center">
                    <h3 class="header my-2 px-5 py-2">{{lang[local].specific}}</h3>
                </div>
                <SpeificInstructions :data="data" ></SpeificInstructions>
            </div>
    </div>
</template>
<script>
// import SelectButton from "primevue/selectbutton";
import SpringAligners from "./orthodontic/SpringAligners.vue";
import FixedAppliances from "./orthodontic/FixedAppliances.vue";
import ArchDevelopment from "./orthodontic/ArchDevelopment.vue";
import Retainers from "./orthodontic/Retainers.vue";
import StudyModels from "./orthodontic/StudyModels.vue";
import NightGuards from "./orthodontic/NightGuards.vue";
import SpeificInstructions from "./orthodontic/SpeificInstructions.vue";
export default {
    components:{
        // SelectButton,
        SpringAligners,
        FixedAppliances,
        ArchDevelopment,
        Retainers,
        StudyModels,
        NightGuards,
        SpeificInstructions

    },
    props:['data'],
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    orthodontal:"Orthodontic Appliance Rx",
                    spring:"SPRING ALIGNERS",
                    fixed:"FIXED APPLIANCES",
                    arch:"ARCH DEVELOPMENT",
                    retainers:"RETAINERS",
                    study:"STUDY MODELS",
                    nightguards:"NIGHTGUARDS",
                    specific:"RX SPECIFIC INSTRUCTIONS"
                },
                ar:{
                    spring:"SPRING ALIGNERS",
                    fixed:"FIXED APPLIANCES",
                    arch:"ARCH DEVELOPMENT",
                    retainers:"RETAINERS",
                    study:"STUDY MODELS",
                    nightguards:"NIGHTGUARDS",
                    specific:"RX SPECIFIC INSTRUCTIONS"

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
.orthodontic{
.header{
        background: $tradmark-color;
        border-radius: 10px;
        font-weight: 300;
}
// .sparator{
//         height: 2px;
//         border-radius: 20px;
// }
}

</style>