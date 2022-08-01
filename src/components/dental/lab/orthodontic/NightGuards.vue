<template>
    <div class="nightguards">
        <div class="row my-3">
            <div class="col-md-6 col-lg-4 " >
                <div class="check-container d-flex align-items-center  my-3" >
                    <Checkbox v-model="data.lab.orthodontal.nightguards.upper" :binary="true" />
                    <span class="mx-1">{{lang[local].nightguards.upper}}</span>
                </div>  
                <div class="check-container d-flex align-items-center  my-3" >
                    <Checkbox v-model="data.lab.orthodontal.nightguards.lower" :binary="true" />
                    <span class="mx-1">{{lang[local].nightguards.lower}}</span>
                </div>  
            </div>
            <div class="col-md-6 col-lg-4 " >
                <div class="check-container d-flex align-items-center  my-3" >
                    <Checkbox v-model="data.lab.orthodontal.nightguards.hard" :binary="true" />
                    <span class="mx-1">{{lang[local].nightguards.hard}}</span>
                </div>  
                <div class="check-container d-flex align-items-center  my-3" >
                    <Checkbox v-model="data.lab.orthodontal.nightguards.flexiguard" :binary="true" />
                    <span class="mx-1">{{lang[local].nightguards.flexiguard}}</span>
                </div>  
                <div class="check-container d-flex align-items-center  my-3" >
                    <Checkbox v-model="data.lab.orthodontal.nightguards.deprogrammerMini" :binary="true" />
                    <span class="mx-1">{{lang[local].nightguards.deprogrammerMini}}</span>
                </div>  
                <div class="check-container d-flex align-items-center  my-3" >
                    <Checkbox v-model="data.lab.orthodontal.nightguards.deprogrammerFull" :binary="true" />
                    <span class="mx-1">{{lang[local].nightguards.deprogrammerFull}}</span>
                </div>  
            </div>
            <div class="col-md-6 col-lg-4 " >
                <div class="check-container d-flex align-items-center  my-3" >
                    <Checkbox v-model="data.lab.orthodontal.nightguards.soft" :binary="true" />
                    <span class="mx-1">{{lang[local].nightguards.soft}}</span>
                </div>  
                <div class="check-container d-flex align-items-center  my-3" >
                    <Checkbox v-model="data.lab.orthodontal.nightguards.astronThermo" :binary="true" />
                    <span class="mx-1">{{lang[local].nightguards.astronThermo}}</span>
                </div>  
                <div class="check-container d-flex align-items-center  my-3" >
                    <Checkbox v-model="data.lab.orthodontal.nightguards.noOpposing" :binary="true" />
                    <span class="mx-1">{{lang[local].nightguards.noOpposing}}</span>
                </div>  
            </div>
        </div>
        
    </div>
</template>
<script>
import Checkbox from 'primevue/checkbox';
export default {
    components:{
        Checkbox
    },
    props:['data'],
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    nightguards:{
                        upper:"Upper*",
                        lower :"Lower",
                        hard:"Hard",
                        flexiguard:"Flexiguard* Hard/Soft",
                        deprogrammerMini:"Deprogrammer Mini",
                        deprogrammerFull:"Deprogrammer Full",
                        soft:"Soft",
                        astronThermo:"Astron/Thermo",
                        noOpposing:"No Opposing"
                    }
                    

                },
                ar:{
                    nightguards:{
                        upper:"Upper*",
                        Lower :"Lower",
                        hard:"Hard",
                        flexiguard:"Flexiguard* Hard/Soft",
                        deprogrammerMini:"Deprogrammer Mini",
                        deprogrammerFull:"Deprogrammer Full",
                        soft:"Soft",
                        astronThermo:"Astron/Thermo",
                        noOpposing:"No Opposing"
                    }
                }
            },
        }
    },

}
</script>