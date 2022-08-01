<template>
    <div class="partials">
        <div class="row">
            <div class="col-md-6 col-lg-3">
                <div class="check-container  my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.partials.upper" :binary="true" />
                    <span class="mx-1">{{lang[local].upper}}</span>
                </div>
                <div class="check-container  my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.partials.lower" :binary="true" />
                    <span class="mx-1">{{lang[local].lower}}</span>
                </div>
                <div class="check-container  my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.partials.both" :binary="true" />
                    <span class="mx-1">{{lang[local].both}}</span>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="check-container  my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.partials.customTray" :binary="true" />
                    <span class="mx-1">{{lang[local].customTray}}</span>
                </div>
                <div class="check-container  my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.partials.basePlate" :binary="true" />
                    <span class="mx-1">{{lang[local].basePlate}}</span>
                </div>
                <div class="check-container  my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.partials.biteRim" :binary="true" />
                    <span class="mx-1">{{lang[local].biteRim}}</span>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <div class="check-container  my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.partials.finish" :binary="true" />
                    <span class="mx-1">{{lang[local].finish}}</span>
                </div>
                <div class="check-container  my-3" >
                    <Checkbox v-model="data.lab.removableProsthetic.partials.setUpTryIn" :binary="true" />
                    <span class="mx-1">{{lang[local].setUpTryIn}}</span>
                </div>
                
            </div>
            
            
        </div>
        <div class="row my-3">
            <div class="col-md-6 col-xl-3">
                <h4>{{lang[local].headers.baseMaterial}}</h4>
                <div class="check-container  m-3" v-for="(value,key) in lang[local].baseMaterial" :key="key">
                        <Checkbox  v-model="data.lab.removableProsthetic.partials.baseMaterial[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <h4>{{lang[local].headers.metalFramework}}</h4>
                <div class="check-container  m-3" v-for="(value,key) in lang[local].metalFramework" :key="key">
                        <Checkbox  v-model="data.lab.removableProsthetic.partials.metalFramework[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <h4>{{lang[local].headers.toothType}}</h4>
                <div class="check-container  m-3" v-for="(value,key) in lang[local].toothType" :key="key">
                        <Checkbox  v-model="data.lab.removableProsthetic.partials.toothType[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <h4>{{lang[local].headers.design}}</h4>
                <div class="check-container  m-3" v-for="(value,key) in lang[local].design" :key="key">
                        <Checkbox  v-model="data.lab.removableProsthetic.partials.design[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
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
                    headers:{
                        baseMaterial:"Base Material (non-metal)",
                        metalFramework:"Metal Framework",
                        toothType:"Tooth Type",
                        design:"Design"
                    },
                    upper:"Upper",
                    lower:"Lower",
                    both:"Both",
                    customTray:"Custom tray",
                    basePlate:"Base plate",
                    biteRim:"Bite rim",
                    setUpTryIn:"Set-up/Try-in*",
                    finish:"Finish",
                    baseMaterial:{
                        acrylicPartial:"Acrylic Partial*",
                        customFlexPartial:"CustomFlex™ Partial",
                        valplastPartia:"Valplast® Partia",
                        immediateSurgicalPartial :"Immediate/Surgical partial"
                    },
                    metalFramework:{
                        chromeCobalt:"Chrome Cobalt*",
                        vitallium:"Vitallium",
                        eliteMetalPartial:"Elite Metal Partial*",
                        valplastPartial:"Valplast Partial",
                        castMetalOnly:"Cast metal only",
                        castMetalSetIpTryIn:"Cast metal w/ Set-up/Try-in",
                        castMetalBiterim:"Cast metal w/ Bite rim",
                    },
                    toothType:{
                        elite:"Elite™*",
                        premier:"Premier™ (extra charge)"
                    },
                    design:{
                        horseshoePalate:"Horseshoe palate (upper)",
                        fullPalatalMetal:"Full palatal metal coverage (upper)",
                        aPStrap:"A-P strap",
                        lingualBar:"Lingual bar (lower)",
                        lingualApron:"Lingual apron (lower)",
                        wroughtWireClasps:"Wrought wire clasps (2*)",
                        ballClasps:"Ball clasps",
                        cosmeticClasp:"Cosmetic clasp",
                        unilateral:"Unilateral (nesbit)"
                    }
                },
                ar:{
                    headers:{
                        baseMaterial:"Base Material (non-metal)",
                        metalFramework:"Metal Framework",
                        toothType:"Tooth Type",
                        design:"Design"
                    },
                    upper:"Upper",
                    lower:"Lower",
                    both:"Both",
                    customTray:"Custom tray",
                    basePlate:"Base plate",
                    biteRim:"Bite rim",
                    setUpTryIn:"Set-up/Try-in*",
                    finish:"Finish",
                    baseMaterial:{
                        acrylicPartial:"Acrylic Partial*",
                        customFlexPartial:"CustomFlex™ Partial",
                        valplastPartia:"Valplast® Partia",
                        immediateSurgicalPartial :"Immediate/Surgical partial"
                    },
                    metalFramework:{
                        chromeCobalt:"Chrome Cobalt*",
                        vitallium:"Vitallium",
                        eliteMetalPartial:"Elite Metal Partial*",
                        valplastPartial:"Valplast Partial",
                        castMetalOnly:"Cast metal only",
                        castMetalSetIpTryIn:"Cast metal w/ Set-up/Try-in",
                        castMetalBiterim:"Cast metal w/ Bite rim",
                    },
                    toothType:{
                        elite:"Elite™*",
                        premier:"Premier™ (extra charge)"
                    },
                    design:{
                        horseshoePalate:"Horseshoe palate (upper)",
                        fullPalatalMetal:"Full palatal metal coverage (upper)",
                        aPStrap:"A-P strap",
                        lingualBar:"Lingual bar (lower)",
                        lingualApron:"Lingual apron (lower)",
                        wroughtWireClasps:"Wrought wire clasps (2*)",
                        ballClasps:"Ball clasps",
                        cosmeticClasp:"Cosmetic clasp",
                        unilateral:"Unilateral (nesbit)"
                    }
                }
            }
        }
    },
    
}
</script>
<style lang="scss" scoped>
.partials{
    small{
        font-size: 10px;
    }
}
</style>