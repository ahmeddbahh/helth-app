<template>
    <div class="cement">
        <div class="check-container d-flex align-items-center  my-3" v-for="(value,key) in lang[local].select" :key="key">
            <Checkbox v-model="data.lab.implantRx.cement.select[key]" :binary="true" />
            <span class="mx-1">{{value}}</span>
        </div>
        <div class="row">
            <div class="col-md-4">
                <h4 class="my-2">{{lang[local].headers.design}}</h4>
                <div class="check-container d-flex align-items-center  my-3" v-for="(value,key) in lang[local].design" :key="key">
                    <Checkbox v-model="data.lab.implantRx.cement.design[key]" :binary="true" />
                    <span class="mx-1">{{value}}</span>
                </div>
            </div>
            <div class="col-md-8">
                <h4 class="my-2">{{lang[local].headers.emergenceProfile}}</h4>
                <div class="d-flex">
                    <div class="follow mx-3">
                        <img src="./follow.svg"   alt="">
                        <div class="d-flex align-items-center my-2">
                            <Checkbox v-model="data.lab.implantRx.cement.emergenceProfile.followTissue" :binary="true" />
                            <div class="d-flex flex-column align-items-center my- ">
                                <span class="mx-1">{{lang[local].emergenceProfile.followTissue}}</span>
                                <small >({{lang[local].small.noExpansion}})</small>
                            </div>
                        </div>
                        
                    </div>
                    <div class="contour mx-3">
                        <img src="./contour.svg"   alt="">
                        <div class="d-flex align-items-center my-2">
                            <Checkbox v-model="data.lab.implantRx.cement.emergenceProfile.contourDesign" :binary="true" />
                            <div class="d-flex flex-column align-items-center my- ">
                                <span class="mx-1">{{lang[local].emergenceProfile.contourDesign}}</span>
                                <small >({{lang[local].small.expand}})</small>
                            </div>
                        </div>
                        
                    </div>
                    <div class="antomical mx-3">
                        <img src="./anatomical.svg"   alt="">
                        <div class="d-flex align-items-center my-2">
                            <Checkbox v-model="data.lab.implantRx.cement.emergenceProfile.anatomical" :binary="true" />
                            <div class="d-flex flex-column align-items-center my- ">
                                <span class="mx-1">{{lang[local].emergenceProfile.anatomical}}</span>
                                <small >({{lang[local].small.fully}})</small>
                            </div>
                        </div>
                        
                    </div>

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
    props:["data"],
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    headers:{
                        design:"Design",
                        emergenceProfile:"Emergence Profile"
                    },
                    select:{
                        customTitanium:"Custom Titanium Abutment",
                        customZirconia:"Custom Zirconia Abutment",
                    },
                    design:{
                        L:"L - 0.5mm",
                        B:"B - 1mm",
                        D:"D - 0.5mm",
                        M:"M - 0.5mm"
                    },
                    emergenceProfile:{
                        followTissue:"Follow tissue",
                        contourDesign:"Contour design",
                        anatomical:"Anatomical"
                    },
                    small:{
                        noExpansion:"no expansion",
                        expand:"expand tissue by 0.5mm",
                        fully:"(fully expand tissue)"
                    }

                },
                ar:{
                    headers:{
                        design:"Design",
                        emergenceProfile:"Emergence Profile"
                    },
                    select:{
                        customTitanium:"Custom Titanium Abutment",
                        customZirconia:"Custom Zirconia Abutment",
                    },
                    design:{
                        L:"L - 0.5mm",
                        B:"B - 1mm",
                        D:"D - 0.5mm",
                        M:"M - 0.5mm"
                    },
                    emergenceProfile:{
                        followTissue:"Follow tissue",
                        contourDesign:"Contour design",
                        anatomical:"Anatomical"
                    },
                    small:{
                        noExpansion:"no expansion",
                        expand:"expand tissue by 0.5mm",
                        fully:"fully expand tissue"
                    }
                }
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.cement{
    small{
        font-size: 9px;
    }
}
</style>