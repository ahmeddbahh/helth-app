<template>
    <div class="GYN-infertility">
        <div class="checks">
            <div class="row">
                <div class="col-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="d-flex align-items-center ">
                        <label >{{lang[local].primary}}</label>
                        <Checkbox class="mx-2" v-model="data.primary" :binary="true"></Checkbox>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="d-flex  align-items-center">
                        <label >{{lang[local].secondary}}</label>
                        <Checkbox class="mx-2" v-model="data.secondary" :binary="true"></Checkbox>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="row">
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group">
                        <label for="">{{lang[local].duration}}</label>
                        <div class="d-flex">
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].value" 
                            v-model="data.duration.number"
                            @change="$v.data.duration.number.$touch()" 
                            :class="{'border-error':$v.data.duration.number.$invalid  && $v.data.duration.number.$dirty}"
                        ></InputText>
                        <Dropdown 
                            :placeholder="lang[local].unit" 
                            :options="durationOptions"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            v-model="data.duration.selection"
                        ></Dropdown>
                        </div>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.duration.number.numeric && $v.data.duration.number.$dirty">
                                {{ errors.inputError(lang[local].duration) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group">
                        <label for="">{{lang[local].count}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].count" 
                            v-model="data.count"
                            @change="$v.data.count.$touch()" 
                            :class="{'border-error':$v.data.count.$invalid  && $v.data.count.$dirty}"
                        ></InputText>

                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.count.numeric && $v.data.count.$dirty">
                                {{ errors.inputError(lang[local].count) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group">
                        <label for="">{{lang[local].gradA}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].gradA" 
                            v-model="data.gradA"
                            @change="$v.data.gradA.$touch()" 
                            :class="{'border-error':$v.data.gradA.$invalid  && $v.data.gradA.$dirty}"
                        ></InputText>

                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.gradA.numeric && $v.data.gradA.$dirty">
                                {{ errors.inputError(lang[local].gradA) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group">
                        <label for="">{{lang[local].gradB}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].gradB" 
                            v-model="data.gradB"
                            @change="$v.data.gradB.$touch()" 
                            :class="{'border-error':$v.data.gradB.$invalid  && $v.data.gradB.$dirty}"
                        ></InputText>

                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.gradB.numeric && $v.data.gradB.$dirty">
                                {{ errors.inputError(lang[local].gradB) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].other}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].other" 
                            v-model="data.other"
                            @change="$v.data.other.$touch()" 
                            :class="{'border-error':$v.data.other.$invalid  && $v.data.other.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.other.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].other) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.other.minLen">
                                {{errors.minLengthError(lang[local].other,$v.data.other.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.other.maxLen">
                                {{errors.maxLengthError(lang[local].other, $v.data.other.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].husband}}</label>
                        <Dropdown 
                            :placeholder="lang[local].husband" 
                            :options="husbandOptions"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            v-model="data.husband"
                        ></Dropdown>
                        
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group">
                        <label for="">{{lang[local].lH}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].lH" 
                            v-model="data.lH"
                            @change="$v.data.lH.$touch()" 
                            :class="{'border-error':$v.data.lH.$invalid  && $v.data.lH.$dirty}"
                        ></InputText>

                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.lH.numeric && $v.data.lH.$dirty">
                                {{ errors.inputError(lang[local].lH) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group">
                        <label for="">{{lang[local].fsh}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].fsh" 
                            v-model="data.fsh"
                            @change="$v.data.fsh.$touch()" 
                            :class="{'border-error':$v.data.fsh.$invalid  && $v.data.fsh.$dirty}"
                        ></InputText>

                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.fsh.numeric && $v.data.fsh.$dirty">
                                {{ errors.inputError(lang[local].fsh) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group">
                        <label for="">{{lang[local].tsh}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].tsh" 
                            v-model="data.tsh"
                            @change="$v.data.tsh.$touch()" 
                            :class="{'border-error':$v.data.tsh.$invalid  && $v.data.tsh.$dirty}"
                        ></InputText>

                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.tsh.numeric && $v.data.tsh.$dirty">
                                {{ errors.inputError(lang[local].tsh) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group">
                        <label for="">{{lang[local].amh}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].amh" 
                            v-model="data.amh"
                            @change="$v.data.amh.$touch()" 
                            :class="{'border-error':$v.data.amh.$invalid  && $v.data.amh.$dirty}"
                        ></InputText>

                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.amh.numeric && $v.data.amh.$dirty">
                                {{ errors.inputError(lang[local].amh) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].semen}}</label>
                        <Dropdown 
                            :placeholder="lang[local].semen" 
                            :options="semenOptions"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            v-model="data.semen"
                        ></Dropdown>
                        
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group">
                        <label for="">{{lang[local].prolactin}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].prolactin" 
                            v-model="data.prolactin"
                            @change="$v.data.prolactin.$touch()" 
                            :class="{'border-error':$v.data.prolactin.$invalid  && $v.data.prolactin.$dirty}"
                        ></InputText>

                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.prolactin.numeric && $v.data.prolactin.$dirty">
                                {{ errors.inputError(lang[local].prolactin) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group">
                        <label for="">{{lang[local].progestron}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].progestron" 
                            v-model="data.progestron"
                            @change="$v.data.progestron.$touch()" 
                            :class="{'border-error':$v.data.progestron.$invalid  && $v.data.progestron.$dirty}"
                        ></InputText>

                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.progestron.numeric && $v.data.progestron.$dirty">
                                {{ errors.inputError(lang[local].progestron) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div  class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group">
                        <label for="">{{lang[local].e2}}</label>
                        <InputText 
                            type="number" 
                            :placeholder="lang[local].e2" 
                            v-model="data.e2"
                            @change="$v.data.e2.$touch()" 
                            :class="{'border-error':$v.data.e2.$invalid  && $v.data.e2.$dirty}"
                        ></InputText>

                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.e2.numeric && $v.data.e2.$dirty">
                                {{ errors.inputError(lang[local].e2) }}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].wife}}</label>
                        <Dropdown 
                            :placeholder="lang[local].wife" 
                            :options="wifeOptions"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            v-model="data.wife"
                        ></Dropdown>
                        
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].cycle}}</label>
                        <Dropdown 
                            :placeholder="lang[local].cycle" 
                            :options="cycleOptions"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            v-model="data.cycle"
                        ></Dropdown>
                        
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].hsg}}</label>
                        <Dropdown 
                            :placeholder="lang[local].hsg" 
                            :options="hsgOptions"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            v-model="data.hsg"
                        ></Dropdown>
                        
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].ultrasound}}</label>
                        <Dropdown 
                            :placeholder="lang[local].ultrasound" 
                            :options="ultrasoundOptions"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            v-model="data.ultrasound"
                        ></Dropdown>
                        
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].leftTube}}</label>
                        <Dropdown 
                            :placeholder="lang[local].leftTube" 
                            :options="leftTubeOptions"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            v-model="data.leftTube"
                        ></Dropdown>
                        
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].rightTube}}</label>
                        <Dropdown 
                            :placeholder="lang[local].rightTube" 
                            :options="rightTubeOptions"
                            :optionLabel="local=='ar'?'arabic':'english'" 
                            v-model="data.rightTube"
                        ></Dropdown>
                        
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-xl-3 my-3">
                    <div class="form-group ">
                        <label class="mx-2">{{lang[local].laproscope}}</label>
                        <InputText 
                            type="text" 
                            :placeholder="lang[local].laproscope" 
                            v-model="data.laproscope"
                            @change="$v.data.laproscope.$touch()" 
                            :class="{'border-error':$v.data.laproscope.$invalid  && $v.data.laproscope.$dirty}"
                        ></InputText>
                        <div class="errors">
                            <small class="text-error my-2" v-if="!$v.data.laproscope.notContainsHtmlTags">
                                {{ errors.inputError(lang[local].laproscope) }}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.laproscope.minLen">
                                {{errors.minLengthError(lang[local].laproscope,$v.data.laproscope.$params.minLen.min)}}
                            </small>
                            <small class="text-error my-2" v-else-if="!$v.data.laproscope.maxLen">
                                {{errors.maxLengthError(lang[local].laproscope, $v.data.laproscope.$params.maxLen.max) }}
                            </small>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
</template>
<script>
import Checkbox from 'primevue/checkbox';
import InputText from "primevue/inputtext";
import Dropdown from 'primevue/dropdown';
// 
import {numeric,minLength,maxLength} from "vuelidate/lib/validators";
import { notContainsHtmlTags} from "../../helpers/customValidators";
import {minLengthError,maxLengthError,inputError} from "../../helpers/errors";
export default {
    props:['data'],
    components:{
        Checkbox,
        InputText,
        Dropdown
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    primary:"Primary",
                    secondary:"Secondary",
                    duration:"Duration",
                    value:"value",
                    unit:"unit",
                    count:"count",
                    gradA:"Grad A",
                    gradB:"Grad B",
                    other:"other",
                    husband:"Husband",
                    lH:"LH",
                    fsh:"FSH",
                    tsh:"TSH",
                    amh:"AMH",
                    semen:"Semen",
                    prolactin:"Prolactin",
                    progestron:"Progestron",
                    e2:"E2",
                    wife:"Wife",
                    cycle:"Cycle",
                    ultrasound:"ultrasound",
                    hsg:"HSG",
                    leftTube:"Left Tube",
                    rightTube:"Right Tube",
                    laproscope:"Laproscope"
                },
                ar:{
                    primary:"Primary",
                    secondary:"Secondary",
                    duration:"Duration",
                    value:"value",
                    unit:"unit",
                    count:"count",
                    gradA:"Grad A",
                    gradB:"Grad B",
                    other:"other",
                    husband:"Husband",
                    lH:"LH",
                    fsh:"FSH",
                    tsh:"TSH",
                    amh:"AMH",
                    semen:"Semen",
                    prolactin:"Prolactin",
                    progestron:"Progestron",
                    e2:"E2",
                    wife:"Wife",
                    cycle:"Cycle",
                    ultrasound:"ultrasound",
                    hsg:"HSG",
                    leftTube:"Left Tube",
                    rightTube:"Right Tube",
                    laproscope:"Laproscope"
                }
            },
            errors: {
                minLengthError,
                maxLengthError,
                inputError,
            },
            durationOptions:[
                {english:"year",arabic:"year"},
                {english:"month",arabic:"month"},
            ],
            husbandOptions:[
                {english:"normal",arabic:"normal"},
                {english:"abnormal",arabic:"abnormal"},
                {english:"aboard",arabic:"aboard"},
                {english:"always present",arabic:"always present"},
                {english:"transferred",arabic:"transferred"},
                {english:"outside the country",arabic:"outside the country"},
                {english:"other",arabic:"other"},
            ],
            semenOptions:[
                {english:"normal",arabic:"normal"},
                {english:"abnormal",arabic:"abnormal"},
                {english:"adequate",arabic:"adequate"},
                {english:"ashenozoospermia",arabic:"ashenozoospermia"},
                {english:"azoospermia",arabic:"azoospermia"},
                {english:"needed",arabic:"needed"},
                {english:"other",arabic:"other"},
            ],
            wifeOptions:[
                {english:"normal",arabic:"normal"},
                {english:"abnormal",arabic:"abnormal"},
                {english:"dysmenorrhea",arabic:"dysmenorrhea"},
                {english:"galactorrhea",arabic:"galactorrhea"},
                {english:"increase BMI",arabic:"increase BMI"},
                {english:"no. galactorrhea",arabic:"no. galactorrhea"},
                {english:"obese",arabic:"obese"},
                {english:"other",arabic:"other"},
            ],
            cycleOptions:[
                {english:"normal",arabic:"normal"},
                {english:"abnormal",arabic:"abnormal"},
                {english:"congestive dysmenorrhea",arabic:"congestive dysmenorrhea"},
                {english:"irregular",arabic:"irregular"},
                {english:"irregular after marriage",arabic:"irregular after marriage"},
                {english:"irregular cycle bet. regular ones",arabic:"irregular cycle bet. regular ones"},
                {english:"menorrhagia",arabic:"menorrhagia"},
                {english:"ovarian cyst <5cm",arabic:"ovarian cyst <5cm"},
                {english:"polymenorrhea",arabic:"polymenorrhea"},
                {english:"regular",arabic:"regular"},
                {english:"withdrawal mensis",arabic:"withdrawal mensis"},
                {english:"other",arabic:"other"},
            ],
            hsgOptions:[
                {english:"free",arabic:"free"},
                {english:"HSG if not conceived in the next cycle",arabic:"HSG if not conceived in the next cycle"},
                {english:"left tube",arabic:"left tube"},
                {english:"needed",arabic:"needed"},
                {english:"right tube - patient/ LT.tube - blocked",arabic:"right tube - patient/ LT.tube - blocked"},
                {english:"other",arabic:"other"},                
            ],
            ultrasoundOptions:[
                {english:"normal",arabic:"normal"},
                {english:"abnormal",arabic:"abnormal"},
                {english:"free",arabic:"free"},
                {english:"varicocele & reflux",arabic:"varicocele & reflux"},
                {english:"Lt. pelvic kd",arabic:"Lt. pelvic kd"},
                {english:"ovarian cyst < 5cm",arabic:"ovarian cyst < 5cm"},
                {english:"ovarian cyst > 5cm",arabic:"ovarian cyst > 5cm"},
                {english:"other",arabic:"other"},
            ],
            leftTubeOptions:[
                {english:"normal",arabic:"normal"},
                {english:"hydrosalpinx",arabic:"hydrosalpinx"},
                {english:"obstructed",arabic:"obstructed"},
                {english:"peritubular adhesion",arabic:"peritubular adhesion"},
                {english:"pyosalpinex",arabic:"pyosalpinex"},
                {english:"other",arabic:"other"},
            ],
            rightTubeOptions:[
                {english:"normal",arabic:"normal"},
                {english:"hydrosalpinx",arabic:"hydrosalpinx"},
                {english:"obstructed",arabic:"obstructed"},
                {english:"peritubular adhesion",arabic:"peritubular adhesion"},
                {english:"pyosalpinex",arabic:"pyosalpinex"},
                {english:"other",arabic:"other"},
            ],
        }
    },
    validations:{
        data:{
            duration:{
                number:{
                    numeric
                }
            },
            count:{
                numeric
            },
            gradA:{
                numeric
            },
            gradB:{
                numeric
            },
            other:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
            lH:{
                numeric
            },
            fsh:{
                numeric
            },
            tsh:{
                numeric
            },
            amh:{
                numeric
            },
            prolactin:{
                numeric
            },
            progestron:{
                numeric
            },
            e2:{
                numeric
            },
            laproscope:{
                minLen: minLength(1),
                maxLen: maxLength(100),
                notContainsHtmlTags(val) {
                if (!val) return true;
                return notContainsHtmlTags(val);
                },
            },
        }
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch("setOBJGYNInfertilitIsValid",this.$v.data.$invalid);
            },
            deep: true,
        },
        
    }
}
</script>