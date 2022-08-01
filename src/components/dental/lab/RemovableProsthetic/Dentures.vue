<template>
    <div class="dantures">
        <div class="row">
            <div class="col-md-6 col-lg-3">
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.upper" :binary="true" />
                    <span class="mx-1">{{lang[local].upper}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.lower" :binary="true" />
                    <span class="mx-1">{{lang[local].lower}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.both" :binary="true" />
                    <span class="mx-1">{{lang[local].both}}</span>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.customTray" :binary="true" />
                    <span class="mx-1">{{lang[local].customTray}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.basePlate" :binary="true" />
                    <span class="mx-1">{{lang[local].basePlate}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.biteRim" :binary="true" />
                    <span class="mx-1">{{lang[local].biteRim}}</span>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.setUpTryIn" :binary="true" />
                    <span class="mx-1">{{lang[local].setUpTryIn}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.eliteDenture" :binary="true" />
                    <span class="mx-1">{{lang[local].eliteDenture}}</span>
                </div>
                <div class="check-container   d-flex  my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.premierDenture" :binary="true" />
                    <div >
                        <span class="mx-1">{{lang[local].premierDenture}}</span>
                        <small class="d-block text-center">({{lang[local].extrAcharge}})</small>
                    </div>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.immediateSurgicalDenture" :binary="true" />
                    <span class="mx-1">{{lang[local].immediateSurgicalDenture}}</span>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.finish" :binary="true" />
                    <span class="mx-1">{{lang[local].finish}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.castMetalMesh" :binary="true" />
                    <span class="mx-1">{{lang[local].castMetalMesh}}</span>
                </div>
                <div class="check-container d-flex align-items-center   my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.wireReinforcement" :binary="true" />
                    <span class="mx-1">{{lang[local].wireReinforcement}}</span>
                </div>
                <div class="check-container  d-flex  my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.dantures.patientID" :binary="true" />
                    <div >
                        <span class="mx-1">{{lang[local].patientID}}</span>
                        <small class="d-block text-center">({{lang[local].extrAcharge}})</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Checkbox from 'primevue/checkbox';
export default {
    props:['data'],
    components:{
        Checkbox,
        
        },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    upper:"Upper",
                    lower:"Lower",
                    both:"Both",
                    customTray:"Custom tray",
                    basePlate:"Base plate",
                    biteRim:"Bite rim",
                    setUpTryIn:"Set-up/Try-in*",
                    eliteDenture:"Elite™ Denture*",
                    premierDenture:"Premier™ Denture",
                    extrAcharge:"extra charge",
                    immediateSurgicalDenture:"Immediate/Surgical Denture",
                    finish:"Finish",
                    castMetalMesh:"Cast metal mesh",
                    wireReinforcement:"Wire reinforcement",
                    patientID:"Patient ID",
                },
                ar:{
                    upper:"Upper",
                    lower:"Lower",
                    both:"Both",
                    customTray:"Custom tray",
                    basePlate:"Base plate",
                    biteRim:"Bite rim",
                    setUpTryIn:"Set-up/Try-in*",
                    eliteDenture:"Elite™ Denture*",
                    premierDenture:"Premier™ Denture",
                    extrAcharge:"extra charge",
                    immediateSurgicalDenture:"Immediate/Surgical Denture",
                    finish:"Finish",
                    castMetalMesh:"Cast metal mesh",
                    wireReinforcement:"Wire reinforcement",
                    patientID:"Patient ID",
                }
            }
        }
    },
    
}
</script>
<style lang="scss" scoped>
.dantures{
    small{
        font-size: 10px;
    }
}
</style>