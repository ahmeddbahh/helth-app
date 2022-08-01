<template>
    <div class="arch-development">
        <div class="row">
            <div class="col-lg-4">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                        <th class="w-100" ></th>
                        <th class="text-center" > {{lang[local].U}}</th>
                        <th class="text-center" > {{lang[local].L}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th  >{{lang[local].hyraxMiniScrew}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.hyraxMiniScrew.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.hyraxMiniScrew.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].hyraxRPEwith}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.hyraxRPEwith.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.hyraxRPEwith.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].facemaskHooks}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.facemaskHooks.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.facemaskHooks.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].hyraxRPE}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.hyraxRPE.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.hyraxRPE.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].bondedRPE}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.bondedRPE.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.bondedRPE.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].pendulum}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.pendulum.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.pendulum.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].pendex}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.pendex.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.pendex.L" :binary="true" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-4 ">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                        <th class="w-100" ></th>
                        <th class="text-center" > {{lang[local].U}}</th>
                        <th class="text-center" > {{lang[local].L}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th  >{{lang[local].quadHelix}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.quadHelix.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.quadHelix.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].biHelix}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.biHelix.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.biHelix.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].transpalatalArch}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.transpalatalArch.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.transpalatalArch.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].expansionAppliance}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.expansionAppliance.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.expansionAppliance.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].schwartz}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.schwartz.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.schwartz.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].sagittal}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.sagittal.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.sagittal.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].twinBlock}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.twinBlock.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.twinBlock.L" :binary="true" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-4">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                        <th class="w-100"></th>
                        <th class="text-center" > {{lang[local].U}}</th>
                        <th class="text-center" > {{lang[local].L}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th  >{{lang[local].eArch}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.eArch.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.eArch.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].mara}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.mara.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.mara.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].herbst}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.herbst.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.archDevelopment.herbst.L" :binary="true" /></td>
                        </tr>
                        
                        
                    </tbody>
                </table>
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
                    U:"U",
                    L:"L",
                    hyraxMiniScrew:"Hyrax Mini Screw",
                    hyraxRPEwith:"Hyrax RPE with",
                    facemaskHooks:"Facemask hooks",
                    hyraxRPE:"Hyrax RPE",
                    bondedRPE:"Bonded RPE",
                    pendulum:"Pendulum",
                    pendex:"Pendex",
                    quadHelix:"Quad-Helix",
                    biHelix:"Bi-Helix",
                    transpalatalArch:"Transpalatal Arch (TPA)",
                    expansionAppliance:"“W” Expansion Appliance",
                    schwartz:"Schwartz",
                    sagittal:"Sagittal",
                    twinBlock:"Twin Block",
                    eArch :"E-Arch",
                    mara:"Mara",
                    herbst:"Herbst"

                },
                ar:{
                    U:"U",
                    L:"L",
                    hyraxMiniScrew:"Hyrax Mini Screw",
                    hyraxRPEwith:"Hyrax RPE with",
                    facemaskHooks:"Facemask hooks",
                    hyraxRPE:"Hyrax RPE",
                    bondedRPE:"Bonded RPE",
                    pendulum:"Pendulum",
                    pendex:"Pendex",
                    quadHelix:"Quad-Helix",
                    biHelix:"Bi-Helix",
                    transpalatalArch:"Transpalatal Arch (TPA)",
                    expansionAppliance:"“W” Expansion Appliance",
                    schwartz:"Schwartz",
                    sagittal:"Sagittal",
                    twinBlock:"Twin Block",
                    eArch :"E-Arch",
                    mara:"Mara",
                    herbst:"Herbst"
                }
            },
        }
    },

}
</script>
<style lang="scss" scoped>
.arch-development{
    td,th{
        color: $name-color;
        font-weight: 300;
    }
}
</style>