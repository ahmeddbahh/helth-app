<template>
    <div class="dental-lab">
        <div class="lab-form">
            <div class="row align-items-start">
                <div class="col-md-6 col-lg-4">
                    <div class="d-flex algin-items-center justify-content-between my-3">
                        <label class="input-label" > {{lang[local].caseName}}</label>
                        <div class="flex-grow-1 mx-2">
                            <InputText 
                            type="text"
                            @change="$v.data.lab.caseName.$touch()"
                            v-model="data.lab.caseName"
                            :placeholder="lang[local].caseName"
                            :class="{
                                'border-error':
                                $v.data.lab.caseName.$invalid && $v.data.lab.caseName.$dirty,
                            }"
                            ></InputText>
                            <div class="errors">
                                <small
                                    class="text-error my-2"
                                    v-if="
                                        !$v.data.lab.caseName.notContainsHtmlTags && $v.data.caseName.$dirty
                                    "
                                    >
                                    {{ errors.inputError(lang[local].caseName) }}
                                    </small>
                                    <small
                                    class="text-error my-2"
                                    v-else-if="!$v.data.lab.caseName.minLen && $v.data.lab.caseName.$dirty"
                                    >
                                    {{
                                        errors.minLengthError(
                                        lang[local].caseName,
                                        $v.data.lab.caseName.$params.minLen.min
                                        )
                                    }}
                                    </small>
                                    <small
                                    class="text-error my-2"
                                    v-else-if="!$v.data.lab.caseName.maxLen && $v.data.lab.caseName.$dirty"
                                    >
                                    {{
                                        errors.maxLengthError(
                                        lang[local].caseName,
                                        $v.data.lab.caseName.$params.maxLen.max
                                        )
                                    }}
                                    </small>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-6 col-lg-4 offset-lg-2 ">
                    <div class="d-flex algin-items-center my-3">
                        <label class="input-label" > {{lang[local].labName}}</label>
                        <div class="flex-grow-1 mx-2">
                            <span :class="{'p-input-icon-left':local!='ar','p-input-icon-right':local=='ar'}">
                            <i class="pi pi-search" />
                            <AutoComplete 
                            field="name"
                            v-model="labNameToPush.manualInsertion"
                            :placeholder="lang[local].labName" 
                            :suggestions="labNames"
                            @item-select="getLabName"
                            @complete="searchLabName"
                            />
                            </span>
                            <div class="errors">
                                
                                    <small
                                    class="text-error my-2"
                                    v-if="
                                        !$v.labNameToPush.manualInsertion.notContainsHtmlTags &&
                                        $v.labNameToPush.manualInsertion.$customdirty
                                    "
                                    >
                                    {{ errors.inputError(lang[local].labName) }}
                                    </small>
                                    <small
                                    class="text-error my-2"
                                    v-else-if="
                                        !$v.labNameToPush.manualInsertion.minLen &&
                                        $v.labNameToPush.manualInsertion.$customdirty
                                    "
                                    >
                                    {{
                                        errors.minLengthError(
                                        lang[local].labName,
                                        $v.labNameToPush.manualInsertion.$params.minLen.min
                                        )
                                    }}
                                    </small>
                                    <small
                                    class="text-error my-2"
                                    v-else-if="
                                        !$v.labNameToPush.manualInsertion.maxLen &&
                                        $v.labNameToPush.manualInsertion.$customdirty
                                    "
                                    >
                                    {{
                                        errors.maxLengthError(
                                        lang[local].labName,
                                        $v.labNameToPush.manualInsertion.$params.maxLen.max
                                        )
                                    }}
                                    </small>
                            </div>
                            </div>
                                <Button
                                    icon="pi pi-plus"
                                    :class="{ 'arabic-icon': local == 'ar' }"
                                    class="p-button-rounded mx-2"
                                    :disabled="$v.labNameToPush.manualInsertion.$invalid || !labNameToPush.manualInsertion"
                                    @click="getLabName"
                                />
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="d-flex algin-items-center my-3">
                        <label class="input-label"> {{lang[local].selectForm}}</label>
                        <Dropdown v-model="lab" :options="labOptions" :optionLabel="local=='ar'?'arabic':'english'"></Dropdown>
                    </div>
                </div >
                <div class="col-md-6 col-lg-4 offset-lg-2 ">
                    <div class="lab-name-list offset-lg-2 d-flex flex-wrap">
                    <div
                        class="lab-name my-2 d-flex mx-3"
                        v-for="(dia, index) in data.lab.labName"
                        :key="index"
                        >
                            <div>
                            <h6 class="p-2">{{ dia.manualInsertion }}</h6>
                            </div>
                            <div class="delete-lab-name">
                            <Button
                                icon="pi pi-minus"
                                class="p-button-rounded p-button-danger"
                                :class="{ 'arabic-icon': local == 'ar' }"
                                @click.prevent="deleteLabName(index)"
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div v-if="lab">
        <LabForm :imagesErrors="imagesErrors" :data="data" v-if="lab.english=='form for the lab'"></LabForm>
        <RemovableProsthetic  :data="data" v-if="lab.english=='Removable Prosthetic Rx'"></RemovableProsthetic>
        <ImplantRx  :data="data" v-if="lab.english=='Implants Rx'"></ImplantRx>
        <Orthodontic  :data="data" v-if="lab.english=='Orthodontic Appliance Rx'"></Orthodontic>
        </div>
    </div>
</template>
<script>
// import LabForm from "./lab/LabForm.vue";
// import RemovableProsthetic from "./lab/RemovableProsthetic.vue";
// import ImplantRx from "./lab/ImplantRx.vue";
// import Orthodontic from "./lab/Orthodontic.vue";
import InputText from "primevue/inputtext";
import Dropdown from 'primevue/dropdown';
import Button from "primevue/button";
import AutoComplete from "primevue/autocomplete";
import { maxLength, minLength } from "vuelidate/lib/validators";
import {
  minLengthError,
  maxLengthError,
  inputError,
} from "../helpers/errors";
import { notContainsHtmlTags } from "../helpers/customValidators";

export default {
    props:['imagesErrors','data'],
    components:{
        LabForm:()=>import("./lab/LabForm.vue"),
        RemovableProsthetic:()=>import("./lab/RemovableProsthetic.vue"),
        ImplantRx:()=>import("./lab/ImplantRx.vue"),
        Orthodontic:()=>import("./lab/Orthodontic.vue"),
        InputText,
        Dropdown,
        Button,
        AutoComplete
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    caseName:"Case Name",
                    labName:"Lab Name",
                    selectForm:"Select The From"
                },
                ar:{
                    caseName:"Case Name",
                    labName:"Lab Name",
                    selectForm:"Select The From"

                }
            },
            lab:{
                english:"Orthodontic Appliance Rx",
                arabic:"Orthodontic Appliance Rx",
            },
            labOptions:[{
                english:"form for the lab",
                arabic:"form for the lab"
            },
            {
                english:"Removable Prosthetic Rx",
                arabic:"Removable Prosthetic Rx"
            },{
                english:"Implants Rx",
                arabic:"Implants Rx"
            },
            {
                english:"Orthodontic Appliance Rx",
                arabic:"Orthodontic Appliance Rx",
            }
            ],
            errors:{
                minLengthError,
                maxLengthError,
                inputError,
            },
            labNameToPush: {
                english: null,
                arabic: null,
                manualInsertion: null,
            },
            labNames:[]
            
        }
    },
    validations: {
        data: {
            lab:{
                caseName: {
                    minLen: minLength(2),
                    maxLen: maxLength(100),
                    notContainsHtmlTags(val) {
                    if (!val) return true;
                    return notContainsHtmlTags(val);
                    },
                },
            }
        },
        labNameToPush: {
            manualInsertion: {
                minLen: minLength(2),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
        },
    },
    watch: {
    "labNameToPush.manualInsertion"() {
        this.$v.labNameToPush.manualInsertion.$customdirty = true;
        this.$store.dispatch(
        "setToothLabIsValid",
        this.$v.data.lab.$invalid || this.$v.labNameToPush.$invalid
        );
    },
    "data.lab": {
    handler() {
        this.$store.dispatch(
        "setToothLabIsValid",
        this.$v.data.lab.$invalid || this.$v.labNameToPush.$invalid
        );
        },
        deep: true,
    },
    },
    methods:{
        getLabName(val) {
            if (val) this.addLabName();
        },
        addLabName() {
            if (this.labNameToPush.manualInsertion) {
                if (typeof this.labNameToPush.manualInsertion == "object")
                this.labNameToPush.manualInsertion =
                    this.labNameToPush.manualInsertion.name;
                if (!this.$v.labNameToPush.manualInsertion.$invalid) {
                this.data.lab.labName.push({ ...this.labNameToPush });
                this.labNameToPush = {
                    english: null,
                    arabic: null,
                    manualInsertion: null,
                };
                this.$v.labNameToPush.manualInsertion.$reset();
                }
            }
        },
        searchLabName(val){
            if (val) {
                setTimeout(() => {
                this.labNames = [
                    {
                    name: "test",
                    },
                    {
                    name: "test2",
                    },
                ];
                }, 400);
            }
        },
        deleteLabName(index){
            this.data.lab.labName.splice(index,1)
        }
    },
    
}
</script>
<style lang="scss" scoped>
/deep/ .pi {
  z-index: 10;
  color: #fff;
  left: 2px;
}
/deep/.pi-chevron-down{
    color:$tradmark-color ;
}
.arabic-icon {
  /deep/.pi {
    left: auto;
    right: 2px;
  }
}
/deep/ .pi-plus {
  position: relative;
}
/deep/ .pi-minus {
  position: relative;
}
.lab-name-list-list {
    .lab-name {
      background: #fff;
      padding: 10px;
      border-radius: 20px;
    }
}

</style>