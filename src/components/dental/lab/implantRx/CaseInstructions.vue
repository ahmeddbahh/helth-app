<template>
    <div class="case-instructions my-3">
        <div class="tooths my-3">
            <p>{{lang[local].please}}</p>
            <div class="d-flex justify-content-center mx-4">
                <div class="upper-theeth-numbers "> 
                    <span  
                    style="cursor: pointer;" 
                    v-for="i in 16" @click="handleTooth(i)" :key="i" 
                    :class="{'active-tooth':data.lab.implantRx.caseInstructions.selectedTooths.includes(i)}" 
                    class="tooths-number mx-1">{{i}}</span>
                    <hr class="my-2" >
                    <span style="cursor: pointer;"
                        v-for="i in j" :key="i" 
                    :class="{'active-tooth'
                    :data.lab.implantRx.caseInstructions.selectedTooths.includes(i)}"
                    @click="handleTooth(i)" class="tooths-number mx-1">{{i}}</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <h4 class="my-2">{{lang[local].headers.metal}}</h4>
                <div class="check-container d-flex align-items-center  my-3" v-for="(value,key) in lang[local].metal" :key="key">
                    <Checkbox v-model="data.lab.implantRx.caseInstructions.metal[key]" :binary="true" />
                    <span class="mx-1">{{value}}</span>
                </div>
            </div>
            <div class="col-md-4">
                <h4 class="my-2">{{lang[local].headers.zirconiaCeramic}}</h4>
                <div class="check-container d-flex align-items-center  my-3" v-for="(value,key) in lang[local].zirconiaCeramic" :key="key">
                    <Checkbox v-model="data.lab.implantRx.caseInstructions.zirconiaCeramic[key]" :binary="true" />
                    <span class="mx-1">{{value}}</span>
                </div>
            </div>
            <div class="col-md-4">
                <h4 class="my-2">{{lang[local].headers.restoration}}</h4>
                <div class="check-container d-flex align-items-center  my-3" v-for="(value,key) in lang[local].restoration" :key="key">
                    <Checkbox v-model="data.lab.implantRx.caseInstructions.restoration[key]" :binary="true" />
                    <span class="mx-1">{{value}}</span>
                </div>
                <h4 class="my-2">{{lang[local].headers.returnFor}}</h4>
                <div class="check-container d-flex align-items-center  my-3" v-for="(value,key) in lang[local].returnFor" :key="key">
                    <Checkbox v-model="data.lab.implantRx.caseInstructions.returnFor[key]" :binary="true" />
                    <span class="mx-1">{{value}}</span>
                </div>
            </div>
            

        </div>
    </div>
</template>
<script>
import Checkbox from 'primevue/checkbox';
export default {
    components:{
        Checkbox,
    },
    props:['data'],
    data(){
        return {
            j:[32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17],
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    please:"Please select single units",
                    small:"Not recommended w/titanium abutment",
                    headers:{
                        metal:"Metal",
                        zirconiaCeramic:"Zirconia / All Ceramic",
                        restoration:"Restoration",
                        returnFor:"Return for"
                    },
                    metal:{
                        white:"White HN*",
                        yellow:"Yellow HN",
                        semiPrecious:"Semi-precious",
                        nonPrecious:"Non-precious"
                    },
                    zirconiaCeramic:{
                        zirconiaSolid:"Zirconia Solid",
                        zirconiaLayered:"Zirconia Layered",
                        IPS:"IPS e.max",
                        lithiumDisillicate:"Lithium Disillicate*",
                        
                    },
                    restoration:{
                        crown:"Crown",
                        bridge:"Bridge",
                    },
                    returnFor:{
                        dieTrim:"Die trim",
                        bisque:"Bisque",
                        metalTryIn:"Metal try-in",
                        finish:"Finish*"
                    },

                },
                ar:{
                    please:"Please select single units",
                }
            },

        }
    },
     methods:{
        handleTooth(i){
            if(this.data.lab.implantRx.caseInstructions.selectedTooths.includes(i))
                this.data.lab.implantRx.caseInstructions.selectedTooths.splice(this.data.lab.implantRx.caseInstructions.selectedTooths.indexOf(i),1)
            else
            this.data.lab.implantRx.caseInstructions.selectedTooths.push(i)
        }
    },
}
</script>
<style lang="scss" scoped>
.case-instructions{
    .tooths{

    .tooths-number {
        width:20px;
        height: 20px;
        padding: 10px;
    }
}
    .active-tooth{
        background: $tradmark-color;
        // padding: 10px;
        border-radius: 50%;
        color:#fff ;
    }
}
@media (max-width:425px) {
    .case-instructions{
    .tooths{

    .tooths-number {
        width:15px;
        height: 15px;
        padding: 7px;
        font-size: 8;
    }
   }
    
    
}
}
@media (max-width: 768px){
.case-instructions{
        .tooths{
            .tooths-number {
                font-size: 8;
                width:7px;
                height: 7px;
                padding: 4px;
            }
        }
        
    }
}
</style>
