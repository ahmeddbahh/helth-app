<template>
    <div class="implant-rx my-5">
        <h3  >{{lang[local].ImplantsRx}}</h3>
        <div class="margin-design" > 
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].cement}}</h3>
            </div>
            <Cement :data="data"></Cement>
        </div>
        <div class="margin-design" > 
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].screw}}</h3>
            </div>
            <Screw :data="data"></Screw>
        </div>
        <div class="margin-design" > 
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].case }}</h3>
            </div>
            <CaseInstructions :data="data"></CaseInstructions>
        </div>
        <div class="margin-design" > 
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].margin }}</h3>
            </div>
            <MarginDesign :data="data"></MarginDesign>
        </div>
        <div class="margin-design" > 
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].crown }}</h3>
            </div>
            <CrownDesign :data="data"></CrownDesign>
        </div>
        <div class="margin-design" > 
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].specific }}</h3>
            </div>
            <SpeificInstructions :data="data"></SpeificInstructions>
        </div>
    </div>
</template>
<script>
import Cement from "./implantRx/Cement.vue";
import Screw from "./implantRx/Screw.vue" ;
import CaseInstructions from "./implantRx/CaseInstructions.vue" ;
import MarginDesign from "./implantRx/MarginDesign.vue";
import CrownDesign from "./implantRx/CrownDesign.vue";
import SpeificInstructions from "./implantRx/SpeificInstructions.vue";

export default {
    components:{
        Cement,
        Screw,
        CaseInstructions,
        MarginDesign,
        CrownDesign,
        SpeificInstructions

    },
    props:['data'],
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    ImplantsRx:"Implants Rx",
                    cement:"CEMENT RETAINED ABUTMENT TYPE",
                    screw:"SCREW RETAINED",
                    case:"CASE INSTRUCTIONS",
                    margin:"MARGIN DESIGN",
                    crown:"CROWN DESIGN",
                    specific:"RX SPECIFIC INSTRUCTIONS"
                },
                ar:{
                    ImplantsRx:"Implants Rx",
                    cement:"CEMENT RETAINED ABUTMENT TYPE",
                    screw:"SCREW RETAINED",
                    case:"CASE INSTRUCTIONS",
                    margin:"MARGIN DESIGN",
                    crown:"CROWN DESIGN",
                    specific:"RX SPECIFIC INSTRUCTIONS"

                }
            },
        }
    },
}
</script>
<style lang="scss" scoped>
.implant-rx {
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