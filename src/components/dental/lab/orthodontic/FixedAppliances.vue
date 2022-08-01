<template>
    <div class="fixed-appliances">
        <div class="row">
            <div class="col-lg-4 ">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                        <th class="w-100" ></th>
                        <th class="text-center " > {{lang[local].U}}</th>
                        <th class="text-center" > {{lang[local].L}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th  >{{lang[local].fixedAnterior}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.fixedAnterior.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.fixedAnterior.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].lingualArch}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.lingualArch.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.lingualArch.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].nance}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.nance.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.nance.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].habitTongue}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.habitTongue.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.habitTongue.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].fenceTongue}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.fenceTongue.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.fenceTongue.L" :binary="true" /></td>
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
                            <th  >{{lang[local].bandLoop}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.bandLoop.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.bandLoop.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].activeLoop}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.activeLoop.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.activeLoop.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].slidingLoop}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.slidingLoop.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.slidingLoop.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].loopedCoil}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.loopedCoil.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.loopedCoil.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].distalShoe}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.distalShoe.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.distalShoe.L" :binary="true" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-4 ">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                        <th  class="w-100"></th>
                        <th class="text-center" > {{lang[local].U}}</th>
                        <th class="text-center" > {{lang[local].L}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th  >{{lang[local].lipBumper}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.lipBumper.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.lipBumper.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].bluegrass}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.bluegrass.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.bluegrass.L" :binary="true" /></td>
                        </tr>
                        <tr>
                            <th  >{{lang[local].pedoPartial}}</th>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.pedoPartial.U" :binary="true" /></td>
                            <td class="text-center"><Checkbox  v-model="data.lab.orthodontal.fixedAplliances.pedoPartial.L" :binary="true" /></td>
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
                    fixedAnterior:"Fixed Anterior Bite Plate",
                    lingualArch:"Lingual Arch (Bilateral)",
                    nance:"Nance",
                    habitTongue:"Habit Tongue Crib",
                    fenceTongue:"Fence Tongue Guard",
                    bandLoop:"Band & Loop (Unilateral)",
                    activeLoop:"Active Loop",
                    slidingLoop:"Sliding Loop",
                    loopedCoil:"Looped Coil",
                    distalShoe:"Distal Shoe",
                    lipBumper:"Lip Bumper",
                    bluegrass:"Bluegrass",
                    pedoPartial:"Pedo Partial"

                },
                ar:{
                    U:"U",
                    L:"L",
                    fixedAnterior:"Fixed Anterior Bite Plate",
                    lingualArch:"Lingual Arch (Bilateral)",
                    nance:"Nance",
                    habitTongue:"Habit Tongue Crib",
                    fenceTongue:"Fence Tongue Guard",
                    bandLoop:"Band & Loop (Unilateral)",
                    activeLoop:"Active Loop",
                    slidingLoop:"Sliding Loop",
                    loopedCoil:"Looped Coil",
                    distalShoe:"Distal Shoe",
                    lipBumper:"Lip Bumper",
                    bluegrass:"Bluegrass",
                    pedoPartial:"Pedo Partial"
                }
            },
        }
    },

}
</script>
<style lang="scss" scoped>
.table{
    td,th{
        color: $name-color;
        font-weight: 300;
    }
}
</style>