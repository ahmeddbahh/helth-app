<template>
    <div class="chooises">
        <div class="tooths my-3">
            <p class="my-3"> {{lang[local].lab.headers.please}}</p>
            <div class="d-flex justify-content-center mx-4">
                <div class="upper-theeth-numbers "> 
                    <span  
                    style="cursor: pointer;" 
                    v-for="i in 16" @click="handleTooth(i)" :key="i" 
                    :class="{'active-tooth':data.lab.labForm.selectedTooths.includes(i)}" 
                    class="tooths-number mx-1">{{i}}</span>
                    <hr class="my-2" >
                    <span style="cursor: pointer;"
                        v-for="i in j" :key="i" 
                    :class="{'active-tooth'
                    :data.lab.labForm.selectedTooths.includes(i)}"
                    @click="handleTooth(i)" class="tooths-number mx-1">{{i}}</span>
                </div>
            </div>
        </div>
        <hr class="sparator ">
        <div class="row my-2">
            <div class="col-md-6 " :class="local=='ar'?'border-left':'border-right'">
                <div class="row">
                    <div class="col-md-3">
                        <h4 class="my-3 ">{{lang[local].lab.labForm.headers.Pfm}}</h4>
                    </div>
                    <div class="col-md-9">
                        <div class="check-container d-flex align-items-center  my-3" v-for="(value,key) in lang[local].lab.labForm.pfm" :key="key">
                            <Checkbox v-model="data.lab.labForm.pfm[key]" :binary="true" />
                            <span class="mx-1">{{value}}</span>
                        </div>
                    </div>
                </div>
                <hr class="sparator ">
                <div class="row my-2">
                    <div class="col-md-3">
                        <h4 class="my-3 ">{{lang[local].lab.labForm.headers.fullCast}}</h4>
                    </div>      
                    <div class="col-md-9">
                        <div class="check-container d-flex align-items-center  my-3" v-for="(value,key) in lang[local].lab.labForm.fullCast" :key="key">
                            <Checkbox v-model="data.lab.labForm.fullCast[key]" :binary="true" />
                            <span class="mx-1">{{value}}</span>
                        </div>
                    </div>
                </div>
                <hr class="sparator  d-md-none">
            </div>
            <div class="col-md-6 my-2">
                <div class="row">
                    <div class="col-md-3">
                        <h4 class="my-3 ">{{lang[local].lab.labForm.headers.metalFree}}</h4>
                    </div>      
                    <div class="col-md-9">
                        <div class="check-container d-flex align-items-center  my-3" v-for="(value,key) in lang[local].lab.labForm.metalFree" :key="key">
                            <Checkbox v-model="data.lab.labForm.metalFree[key]" :binary="true" />
                            <span class="mx-1">{{value}}</span>
                        </div>
                    </div>
                </div>
                <hr class="sparator ">
                <div class="row">
                    <div class="col-md-3">
                        <h4 class="my-3 ">{{lang[local].lab.labForm.headers.other}}</h4>
                    </div>      
                    <div class="col-md-9">
                        <div class="check-container d-flex align-items-center  my-3" v-for="(value,key) in lang[local].lab.labForm.other" :key="key">
                            <Checkbox v-model="data.lab.labForm.other[key]" :binary="true" />
                            <span class="mx-1">{{value}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="sparator">
        <div class="row my-3">
            <div class="col-md-6" :class="local=='ar'?'border-left':'border-right'">
                <div class="row">
                    <div class="col-md-3">
                        <h4 class="my-3 ">{{lang[local].lab.labForm.headers.returnFor}}</h4>
                    </div>      
                    <div class="col-md-9">
                        <div class="check-container d-flex align-items-center  my-3" v-for="(value,key) in lang[local].lab.labForm.returnFor" :key="key">
                            <Checkbox v-model="data.lab.labForm.returnFor[key]" :binary="true" />
                            <span class="mx-1">{{value}}</span>
                        </div>
                    </div>
                </div>
                <hr class="sparator  d-md-none">
            </div>
            <div class="col-md-6">
                <div class="row">
                    <div class="col-md-3">
                        <h4 class="my-3 ">{{lang[local].lab.labForm.headers.restoration}}</h4>
                    </div>      
                    <div class="col-md-9">
                        <div class="check-container d-flex align-items-center  my-3" v-for="(value,key) in lang[local].lab.labForm.restoration" :key="key">
                            <Checkbox v-model="data.lab.labForm.restoration[key]" :binary="true" />
                            <span class="mx-1">{{value}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="sparator">
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
        return {
            j:[32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17],
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
        }
    },
    methods:{
        handleTooth(i){
            if(this.data.lab.labForm.selectedTooths.includes(i))
                this.data.lab.labForm.selectedTooths.splice(this.data.lab.labForm.selectedTooths.indexOf(i),1)
            else
            this.data.lab.labForm.selectedTooths.push(i)
        }
    }
}
</script>
<style lang="scss" scoped>
.chooises{
    .tooths{
        div.upper-theeth-numbers{
            span{
                font-size: 12px;
            }
        }
}
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
    .chooises{
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
    .chooises{

        .border-right{
            border:none;
        }
        .border-left{
            border:none;
        }
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