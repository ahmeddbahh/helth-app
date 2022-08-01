<template>
    <div class="dental-lab-form my-5">
        <h3 class="text-center" >{{lang[local].lab.headers.labForm}}</h3>
        <div class="chooses">
            <Chooice :data="data"></Chooice>

        </div>
        <div class="margin-design" > 
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].lab.headers.PfmMargin}}</h3>
            </div>
            <p> {{lang[local].lab.headers.marginPlease}}</p>
            <MarginDesign :data="data"></MarginDesign>
        </div>
        <div class="crown-design">
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].lab.headers.crownDesign}}</h3>
            </div>
            <CrownDesign :imagesErrors="imagesErrors" :data="data"></CrownDesign>
        </div>
        <hr class="sparator ">
        <div class="room-and-contact">
            <RoomAndContact :data="data"></RoomAndContact>
        </div>
        <hr class="sparator ">
        <div class="crown-design">
            <div class="d-flex justify-content-center">
                <h3 class="header my-2 px-5 py-2">{{lang[local].lab.headers.rxSpecific}}</h3>
            </div>
            <SpecificInstructions :data="data"></SpecificInstructions>
        </div>
    </div>
</template>
<script>
import DentalAdult from "../../../mixins/clinics/dentalAdult/DentalAdult";

import Chooice from "./labForm/Chooice.vue";
import RoomAndContact from "./labForm/RoomAndContact.vue";
import MarginDesign from "./labForm/MarginDesign.vue";
import CrownDesign from "./labForm/CrownDesign.vue";
import SpecificInstructions from "./labForm/SpeificInstructions.vue"

export default {
    props:['imagesErrors','data'],
    mixins:[DentalAdult],
    components:{
        Chooice,
        MarginDesign,
        CrownDesign,
        RoomAndContact,
        SpecificInstructions
    },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
        }
    },
}
</script>
<style lang="scss" scoped>
.dental-lab-form{
.header{
        background: $tradmark-color;
        border-radius: 10px;
        font-weight: 300;
}
.sparator{
        height: 2px;
        border-radius: 20px;
}
}

</style>