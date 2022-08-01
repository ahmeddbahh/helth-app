<template>
    <div class="room-and-contact ">
        <div class="row">
            <div class="col-md-4 " :class="local=='ar'?'border-left':'border-right'">
                    <h4 class="my-3 ">{{lang[local].headers.ifInsufficientRoom}}</h4>
                    <div   v-for="(value,key) in lang[local].ifInsufficientRoom" :key="key">
                        <div class="check-container d-flex align-items-center  d-flex align-items-center my-3"  v-if="key !='resin'&&key !='metal'">
                            <Checkbox  v-model="data.lab.labForm.ifInsufficientRoom[key]" :binary="true" />
                            <span  class="mx-1">{{value}}</span>
                        </div>
                        <div class="d-flex mx-4" v-if="key=='resin' && data.lab.labForm.ifInsufficientRoom.reductionCoping">
                            <div class="check-container d-flex align-items-center  d-flex align-items-center ">
                                <Checkbox  v-model="data.lab.labForm.ifInsufficientRoom.resin" :binary="true" />
                                <span  class="mx-1">{{lang[local].ifInsufficientRoom.resin}}</span>
                            </div>
                            <div class="check-container d-flex align-items-center  d-flex align-items-center">
                                <Checkbox  v-model="data.lab.labForm.ifInsufficientRoom.metal" :binary="true" />
                                <span  class="mx-1">{{lang[local].ifInsufficientRoom.metal}}</span>
                            </div>
                        </div>
                        
                    </div>
            </div>
            <hr class="sparator  d-md-none">
            <div class="col-md-4" :class="local=='ar'?'border-left':'border-right'">
                    <h4 class="my-3 ">{{lang[local].headers.occlusalContact}}</h4>
                    <div class="check-container d-flex align-items-center  d-flex align-items-center my-3" v-for="(value,key) in lang[local].occlusalContact" :key="key">
                        <Checkbox v-model="data.lab.labForm.occlusalContact[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                    </div>
            </div>
            <hr class="sparator  d-md-none">
            <div class="col-md-4" >
                    <h4 class="my-3 ">{{lang[local].headers.interproximalContact}}</h4>
                    <div class="check-container d-flex align-items-center  d-flex align-items-center my-3" v-for="(value,key) in lang[local].interproximalContact" :key="key">
                        <Checkbox v-model="data.lab.labForm.interproximalContact[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                    </div>
            </div>
        </div>

    </div>
</template>
<script>
import DentalAdult from "../../../../mixins/clinics/dentalAdult/DentalAdult";
import Checkbox from 'primevue/checkbox';
export default {
    components:{Checkbox},
    mixins:[DentalAdult],
    props:['data'],
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    headers:{
                        ifInsufficientRoom:"If Insufficient Room",
                        occlusalContact:"Occlusal Contact",
                        interproximalContact:"Interproximal Contact",
                    },
                    ifInsufficientRoom:{
                            trimOpposing:"Trim Opposing*",
                            callToDiscuss:"Call To Discuss",
                            metalOcclusal:"Metal Occlusal",
                            reductionCoping:"Reduction Coping",
                            resin:"Resin*",
                            metal:"Metal",
                            metalIsland:"Metal Island",
                            trimPrepNoCoping:"Trim Prep No Coping"
                        },
                    occlusalContact:{
                        light:"Light*",
                        open:"Open",
                        tight:"Tight"
                    },
                    interproximalContact:{
                        light:"Light*",
                        medium:"Medium",
                        heavy:"Heavy"
                    }
                },
                ar:{
                    headers:{
                        ifInsufficientRoom:"If Insufficient Room",
                        occlusalContact:"Occlusal Contact",
                        interproximalContact:"Interproximal Contact",
                    },
                    ifInsufficientRoom:{
                            trimOpposing:"Trim Opposing*",
                            callToDiscuss:"Call To Discuss",
                            metalOcclusal:"Metal Occlusal",
                            reductionCoping:"Reduction Coping",
                            resin:"Resin*",
                            metal:"Metal",
                            metalIsland:"Metal Island",
                            trimPrepNoCoping:"Trim Prep No Coping"
                        },
                    occlusalContact:{
                        light:"Light*",
                        open:"Open",
                        tight:"Tight"
                    },
                    interproximalContact:{
                        light:"Light*",
                        medium:"Medium",
                        heavy:"Heavy"
                    }
                }
            }
        }
    },
    watch:{
        "data.lab.labForm.ifInsufficientRoom.reductionCoping"(){
            if(!this.data.lab.labForm.ifInsufficientRoom.reductionCoping){
                this.data.lab.labForm.ifInsufficientRoom.resin=false ;
                this.data.lab.labForm.ifInsufficientRoom.metal=false ;
            }
        }   
    }
}
</script>
<style lang="scss" scoped>
.room-and-contact{
    width: 70%;
    margin: 0px auto;
    .sparator{
        height: 2px;
        border-radius: 20px;
    }
        // .pfm{
        //     border-right: 2px solid #C0CDD8;
        // }
    .check-container  {
            span{
                font-size: 13px;
            }
    }
    .border-right{
            border-right: 2px solid #C0CDD8;
    }
    .border-left{
            border-left: 2px solid #C0CDD8;
    }
}
@media (max-width:991px) {
.room-and-contact{
    width:100%;
    margin:0px auto;
}
    
}
@media (max-width: 768px){
.room-and-contact{
    .border-right{
            border:none;
    }
    .border-left{
            border:none;
    }
}
    
}

</style>