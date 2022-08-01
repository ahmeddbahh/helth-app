<template>
    <div class="obgyn-GYN mx-3">
        <SelectButton
            v-model="mainOption"
            :options="gynOptions"
            :optionLabel="local=='ar'?'arabic':'english'"
            class="my-5"
        ></SelectButton>
        <div class="my-5">
            <Infertility  v-if="mainOption.id==1" :data="data.infertility"></Infertility>
            <Folliculometry 
                :tableData="initData.folliculometry"
                @restData="initData.folliculometry={...backUpData.folliculometry}"
                v-if="mainOption.id==2" 
                :data="data.folliculometry"
            />
            <PID 
                v-if="mainOption.id==3" 
                :data="data.pid"
                :tableData="initData.pid"
                @restData="initData.pid={...backUpData.pid}"
            
            />
            <Contraception 
                v-if="mainOption.id==4" 
                :data="data.contraception" 
                :tableData="initData.contraception"
                @restData="initData.contraception={...backUpData.contraception}"
                />
            <PerimenopausalBleeding 
                v-if="mainOption.id==5" 
                :data="data.perimenopausalBleeding" 
                :tableData="initData.perimenopausalBleeding"
                @restData="initData.perimenopausalBleeding={...backUpData.perimenopausalBleeding}"
            />
            <PostMenopausalBleeding 
                v-if="mainOption.id==6" 
                :data="data.postMenopausalBleeding"
                :tableData="initData.postMenopausalBleeding"
                @restData="initData.postMenopausalBleeding={...backUpData.postMenopausalBleeding}" 
            />
        </div>
        
    </div>
</template>
<script>
import SelectButton from "primevue/selectbutton";
import Infertility from "./GYN/Infertility.vue";
import Folliculometry from "./GYN/Folliculometry.vue";
import PID from "./GYN/PID.vue";
import Contraception from "./GYN/Contraception.vue";
import PerimenopausalBleeding from "./GYN/PerimenopausalBleeding.vue";
import PostMenopausalBleeding from "./GYN/PostMenopausalBleeding.vue";
export default {
    props:['data','initData','backUpData'],
    components:{
        SelectButton,
        Infertility,
        Folliculometry,
        Contraception,
        PID,
        PerimenopausalBleeding,
        PostMenopausalBleeding
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{},
                ar:{}
            },
            gynOptions:[
                {english:"Infertility",arabic:"Infertility",id:1},
                {english:"Folliculometry",arabic:"Folliculometry",id:2},
                {english:"PID",arabic:"PID",id:3},
                {english:"Contraception",arabic:"Contraception",id:4},
                {english:"Perimenopausal Bleeding",arabic:"Perimenopausal Bleeding",id:5},
                {english:"Post-Menopausal Bleeding",arabic:"Post-Menopausal Bleeding",id:6},
            ],
            mainOption:{english:"Infertility",arabic:"Infertility",id:1},
        }
    },
}
</script>