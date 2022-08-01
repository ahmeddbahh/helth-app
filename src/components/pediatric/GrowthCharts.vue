<template>
    <div class="Growth-Charts my-3">
        <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                <div class="form-group mx-2">
                    <label >{{lang[local].gender}} {{lang[local].ageUnit}}</label>
                    <Dropdown 
                        v-model="data.gender" 
                        :options="genderOptions" 
                        :optionLabel="local=='ar'?'arabic':'english'" 
                        :placeholder="lang[local].gender"
                    />
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                <div class="form-group mx-2">
                    <label >{{lang[local].age}} {{lang[local].ageUnit}}</label>
                        <InputText 
                            type="number" 
                            :class="{'border-error':$v.data.age.$invalid  && $v.data.age.$dirty}" 
                            v-model="data.age" 
                            @change="$v.data.age.$touch()" 
                            :placeholder="lang[local].age"
                            step="0.01" 
                        ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.age.decimal && $v.data.age.$dirty">
                            {{ errors.inputError(lang[local].age) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.age.minVal && $v.data.age.$dirty">
                            {{ errors.minValueError(lang[local].age,$v.data.age.$params.minVal.min) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.age.maxVal && $v.data.age.$dirty">
                            {{ errors.minValueError(lang[local].age,$v.data.age.$params.maxVal.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                <div class="form-group mx-2">
                    <label >{{lang[local].length}} {{lang[local].lengthUnit}}</label>
                        <InputText 
                            type="number" 
                            :class="{'border-error':$v.data.length.$invalid  && $v.data.length.$dirty}" 
                            v-model="data.length" 
                            @change="$v.data.length.$touch()" 
                            :placeholder="lang[local].length"
                            step="0.01" 
                        ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.length.decimal && $v.data.length.$dirty">
                            {{ errors.inputError(lang[local].length) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.length.minVal && $v.data.length.$dirty">
                            {{ errors.minValueError(lang[local].length,$v.data.length.$params.minVal.min) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.length.maxVal && $v.data.length.$dirty">
                            {{ errors.minValueError(lang[local].length,$v.data.length.$params.maxVal.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                <div class="form-group mx-2">
                    <label >{{lang[local].weight}} {{lang[local].weightUnit}}</label>
                        <InputText 
                            type="number" 
                            :class="{'border-error':$v.data.weight.$invalid  && $v.data.weight.$dirty}" 
                            v-model="data.weight" 
                            @change="$v.data.weight.$touch()" 
                            :placeholder="lang[local].weight"
                            step="0.01" 
                        ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.weight.decimal && $v.data.weight.$dirty">
                            {{ errors.inputError(lang[local].weight) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.weight.minVal && $v.data.weight.$dirty">
                            {{ errors.minValueError(lang[local].weight,$v.data.weight.$params.minVal.min) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.weight.maxVal && $v.data.weight.$dirty">
                            {{ errors.minValueError(lang[local].weight,$v.data.weight.$params.maxVal.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                <div class="form-group mx-2">
                    <label >{{lang[local].head}} {{lang[local].lengthUnit}}</label>
                        <InputText 
                            type="number" 
                            :class="{'border-error':$v.data.head.$invalid  && $v.data.head.$dirty}" 
                            v-model="data.head" 
                            @change="$v.data.head.$touch()" 
                            :placeholder="lang[local].head"
                            step="0.01" 
                        ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.head.decimal && $v.data.head.$dirty">
                            {{ errors.inputError(lang[local].head) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.head.minVal && $v.data.head.$dirty">
                            {{ errors.minValueError(lang[local].head,$v.data.head.$params.minVal.min) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.head.maxVal && $v.data.head.$dirty">
                            {{ errors.minValueError(lang[local].head,$v.data.head.$params.maxVal.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3  my-3">
                <div class="form-group mx-2">
                    <div class="form-group mx-2 my-4">
                    <Button
                        :label="lang[local].add"
                        :class="{ 'arabic-icon': local == 'ar' }"
                        class="p-button-rounded"
                        @click="addToChart"
                        :disabled="$v.data.$invalid||!data.gender.english||!data.age||(!data.head&&!data.BMI&&!data.length&&!data.weight)"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="BMI mx-3" v-if="data.BMI">
            <label >{{lang[local].BMI}}</label>
            <h4 >{{data.BMI}}</h4>
        </div>  
        <div class="males" v-if="data.gender.english=='male'">
            <div v-if="showing.ageUnder2years">
                <h3>Male Length</h3>
                <Chart type="line" ref="lengthDataMales" :data="lengthDataMales" :options="lengthDataMales.options" />
            </div>
            <div v-if="showing.ageUnder2years">
                <h3>Male wieght</h3>
                <Chart type="line" ref="weightDataMales"  :data="weightDataMales" :options="weightDataMales.options" />
            </div>
            <div  v-if="showing.ageUnder2years">
                <h3>Male head</h3>
                <Chart type="line" ref="headtDataMales"  :data="headtDataMales" :options="headtDataMales.options" />
            </div>
            <div v-if="showing.ageUnder2years">
                <h3>Male length weight</h3>
                <Chart type="line" ref="lengthWeightDataMales"  :data="lengthWeightDataMales" :options="lengthWeightDataMales.options" />
            </div>
            <div v-if="showing.ageAbove2Yyears">
                <h3>Male stature</h3>
                <Chart type="line" ref="statureDataMales"  :data="statureDataMales" :options="statureDataMales.options" />
            </div>
            <div  v-if="showing.ageAbove2Yyears">
                <h3>Male old weight</h3>
                <Chart type="line" ref="oldWeightDataMales" :data="oldWeightDataMales" :options="oldWeightDataMales.options" />
            </div>
            <div v-if="showing.ageAbove2Yyears">
                <h3>Male old BMI</h3>
                <Chart type="line" ref="oldBMIDataMales"  :data="oldBMIDataMales" :options="oldBMIDataMales.options" />
            </div>
            <div v-if="showing.ageAbove2Yyears">
                <h3>Male old stature Weight</h3>
                <Chart type="line"  ref="statureWeightDataMales" :data="statureWeightDataMales" :options="statureWeightDataMales.options" />
            </div>
        </div>
        <div class="females"  v-if="data.gender.english=='female'">
            <div v-if="showing.ageUnder2years" >
                <h3>female Length</h3>
                <Chart type="line" ref="lengthDataFemales"  :data="lengthDataFemales" :options="lengthDataFemales.options" />
            </div>
            <div v-if="showing.ageUnder2years" >
                <h3>female weight</h3>
                <Chart type="line" ref="weightDataFemales" :data="weightDataFemales" :options="weightDataFemales.options" />
            </div>
            <div v-if="showing.ageUnder2years" >
                <h3>female head</h3>
                <Chart type="line" ref="headtDataFemales"  :data="headtDataFemales" :options="headtDataFemales.options" />
            </div>
            <div v-if="showing.ageUnder2years" >            
                <h3>female length weight</h3>
                <Chart type="line" ref="lengthWeightDataFemales" :data="lengthWeightDataFemales" :options="lengthWeightDataFemales.options" />
            </div>
            <div v-if="showing.ageAbove2Yyears" >
                <h3>female stature</h3>
                <Chart type="line" ref="statureDataFemales" :data="statureDataFemales" :options="statureDataFemales.options" />
            </div>
            <div v-if="showing.ageAbove2Yyears" >
                <h3>female old weight</h3>
                <Chart type="line" ref="oldWeightDataFemales" :data="oldWeightDataFemales" :options="oldWeightDataFemales.options" />
            </div>
            <div v-if="showing.ageAbove2Yyears" >
                <h3>female old BMI</h3>
                <Chart type="line" ref="oldBMIDatafemales"  :data="oldBMIDatafemales" :options="oldBMIDatafemales.options" />
            </div>
            <div v-if="showing.ageAbove2Yyears" >
                <h3>female old BMI</h3>
                <Chart type="line" ref="statureWeightDatafemales" :data="statureWeightDatafemales" :options="statureWeightDatafemales.options" />
            </div>
        </div>


    </div>
</template>
<script>
import InputText from "primevue/inputtext";
import Chart  from "primevue/chart";
import { decimal ,minValue,maxValue } from "vuelidate/lib/validators";
import {inputError,minValueError,maxValueError} from "../helpers/errors";
import Dropdown from 'primevue/dropdown';
import Button from "primevue/button";
import {
    yAxis,
    lengthAxis,
    male3PercentileLength,
    male5thPercentileLength,
    male10thPercentileLength,
    male25thPercentileLength,
    male50thPercentileLength,
    male75thPercentileLength,
    male90thPercentileLength,
    male95thPercentileLength,
    male97thPercentileLength,
    female3PercentileLength,
    female5thPercentileLength,
    female10thPercentileLength,
    female25thPercentileLength,
    female50thPercentileLength,
    female75thPercentileLength,
    female90thPercentileLength,
    female95thPercentileLength,
    female97thPercentileLength,
    male3PercentileWeight,
    male5thPercentileWeight,
    male10thPercentileWeight,
    male25thPercentileWeight,
    male50thPercentileWeight,
    male75thPercentileWeight,
    male90thPercentileWeight,
    male95thPercentileWeight,
    male97thPercentileWeight,
    female3PercentileWeight,
    female5thPercentileWeight,
    female10thPercentileWeight,
    female25thPercentileWeight,
    female50thPercentileWeight,
    female75thPercentileWeight,
    female90thPercentileWeight,
    female95thPercentileWeight,
    female97thPercentileWeight,
    male3PercentileHead,
    male5thPercentileHead,
    male10thPercentileHead,
    male25thPercentileHead,
    male50thPercentileHead,
    male75thPercentileHead,
    male90thPercentileHead,
    male95thPercentileHead,
    male97thPercentileHead,
    female3PercentileHead,
    female5thPercentileHead,
    female10thPercentileHead,
    female25thPercentileHead,
    female50thPercentileHead,
    female75thPercentileHead,
    female90thPercentileHead,
    female95thPercentileHead,
    female97thPercentileHead,
    male3PercentileLengthWeight,
    male5thPercentileLengthWeight,
    male10thPercentileLengthWeight,
    male25thPercentileLengthWeight,
    male50thPercentileLengthWeight,
    male75thPercentileLengthWeight,
    male90thPercentileLengthWeight,
    male95thPercentileLengthWeight,
    male97thPercentileLengthWeight,
    female3PercentileLengthWeight,
    female5thPercentileLengthWeight,
    female10thPercentileLengthWeight,
    female25thPercentileLengthWeight,
    female50thPercentileLengthWeight,
    female75thPercentileLengthWeight,
    female90thPercentileLengthWeight,
    female95thPercentileLengthWeight,
    female97thPercentileLengthWeight,
    oldAxis,
    male3PercentileStature,
    male5thPercentileStature,
    male10thPercentileStature,
    male25thPercentileStature,
    male50thPercentileStature,
    male75thPercentileStature,
    male90thPercentileStature,
    male95thPercentileStature,
    male97thPercentileStature,
    female3PercentileStature,
    female5thPercentileStature,
    female10thPercentileStature,
    female25thPercentileStature,
    female50thPercentileStature,
    female75thPercentileStature,
    female90thPercentileStature,
    female95thPercentileStature,
    female97thPercentileStature,
    male3PercentileOldWeight,
    male5thPercentileOldWeight,
    male10thPercentileOldWeight,
    male25thPercentileOldWeight,
    male50thPercentileOldWeight,
    male75thPercentileOldWeight,
    male90thPercentileOldWeight,
    male95thPercentileOldWeight,
    male97thPercentileOldWeight,
    female3PercentileOldWeight,
    female5thPercentileOldWeight,
    female10thPercentileOldWeight,
    female25thPercentileOldWeight,
    female50thPercentileOldWeight,
    female75thPercentileOldWeight,
    female90thPercentileOldWeight,
    female95thPercentileOldWeight,
    female97thPercentileOldWeight,
    male3PercentileOldBMI,
    male5thPercentileOldBMI,
    male10thPercentileOldBMI,
    male25thPercentileOldBMI,
    male50thPercentileOldBMI,
    male75thPercentileOldBMI,
    male85thPercentileOldBMI,
    male90thPercentileOldBMI,
    male95thPercentileOldBMI,
    male97thPercentileOldBMI,
    female3PercentileOldBMI,
    female5thPercentileOldBMI,
    female10thPercentileOldBMI,
    female25thPercentileOldBMI,
    female50thPercentileOldBMI,
    female75thPercentileOldBMI,
    female85thPercentileOldBMI,
    female90thPercentileOldBMI,
    female95thPercentileOldBMI,
    female97thPercentileOldBMI,
    statureAxis,
    male3PercentileStatureWeight,
    male5thPercentileStatureWeight,
    male10thPercentileStatureWeight,
    male25thPercentileStatureWeight,
    male50thPercentileStatureWeight,
    male75thPercentileStatureWeight,
    male85thPercentileStatureWeight,
    male90thPercentileStatureWeight,
    male95thPercentileStatureWeight,
    male97thPercentileStatureWeight,
    female3PercentileStatureWeight,
    female5thPercentileStatureWeight,
    female10thPercentileStatureWeight,
    female25thPercentileStatureWeight,
    female50thPercentileStatureWeight,
    female75thPercentileStatureWeight,
    female85thPercentileStatureWeight,
    female90thPercentileStatureWeight,
    female95thPercentileStatureWeight,
    female97thPercentileStatureWeight,
    } from "../helpers/childGrowthData";

export default {
    props:['data'],
    components:{
        Chart,
        Dropdown,
        InputText,
        Button
    },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    gender:"gender",
                    age:"age",
                    length:"length",
                    weight:"weight",
                    head:"Head",
                    BMI:"BMI",
                    ageUnit:"(months)",
                    lengthUnit:"(CM)",
                    weightUnit:"(KG)",
                    add:"Add",

                },
                ar:{
                    gender:"gender",
                    age:"age",
                    length:"length",
                    weight:"weight",
                    head:"Head",
                    BMI:"BMI",
                    ageUnit:"(months)",
                    lengthUnit:"(CM)",
                    weightUnit:"(KG)",
                    add:"Add"
                }
            },
            yAxis:yAxis,
            lengthDataMales:{
                labels:yAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Length (cm)':'your Percentile Length (cm)',
                        data:[
                            
                            {
                            x:13.5,
                            y:70
                            },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Length (cm)':'3rd Percentile Length (cm)',
                        data:male3PercentileLength,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Length (cm)':'5th Percentile Length (cm)',
                        data:male5thPercentileLength,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Length (cm)':'10th Percentile Length (cm)',
                        data:male10thPercentileLength,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile Length (cm)':'25th Percentile Length (cm)',
                        data:male25thPercentileLength,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile Length (cm)':'50th Percentile Length (cm)',
                        data:male50thPercentileLength,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile Length (cm)':'75th Percentile Length (cm)',
                        data:male75thPercentileLength,
                        fill: false,
                        borderColor: '#008000',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile Length (cm)':'90th Percentile Length (cm)',
                        data:male90thPercentileLength,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile Length (cm)':'95th Percentile Length (cm)',
                        data:male95thPercentileLength,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile Length (cm)':'97th Percentile Length (cm)',
                        data:male97thPercentileLength,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                    
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            title: {
                                display: true,
                                text: 'Length (cm)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    },
                                    
                            },
                            ticks: { color: '#205072',stepSize:.5}
                            
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'age (months)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                            point:{
                                    radius: 0
                                }
                            }
                    
                },
            },
            weightDataMales:{
                labels:yAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Weight (kg)':'your Percentile Weight (kg)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Weight (kg)':'3rd Percentile Weight (kg)',
                        data:male3PercentileWeight,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Weight (kg)':'5th Percentile Weight (kg)',
                        data:male5thPercentileWeight,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Weight (kg)':'10th Percentile Weight (kg)',
                        data:male10thPercentileWeight,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile Weight (kg)':'25th Percentile Weight (kg)',
                        data:male25thPercentileWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile Weight (kg)':'50th Percentile Weight (kg)',
                        data:male50thPercentileWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile Weight (kg)':'75th Percentile Weight (kg)',
                        data:male75thPercentileWeight,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile Weight (kg)':'90th Percentile Weight (kg)',
                        data:male90thPercentileWeight,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile Weight (kg)':'95th Percentile Weight (kg)',
                        data:male95thPercentileWeight,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile Weight (kg)':'97th Percentile Weight (kg)',
                        data:male97thPercentileWeight,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            title: {
                                display: true,
                                text: 'Weight (kg)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'age (months)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
                
            },
            headtDataMales:{
                labels:yAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Head Circumference (cm)':'your Head Circumference (cm)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Head Circumference (cm)':'3rd Percentile Head Circumference (cm)',
                        data:male3PercentileHead,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Head Circumference (cm)':'5th Percentile Head Circumference (cm)',
                        data:male5thPercentileHead,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Head Circumference (cm)':'10th Percentile Head Circumference (cm)',
                        data:male10thPercentileHead,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile Head Circumference (cm)':'25th Percentile Head Circumference (cm)',
                        data:male25thPercentileHead,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile Head Circumference (cm)':'50th Percentile Head Circumference (cm)',
                        data:male50thPercentileHead,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile Head Circumference (cm)':'75th Percentile Head Circumference (cm)',
                        data:male75thPercentileHead,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile Head Circumference (cm)':'90th Percentile Head Circumference (cm)',
                        data:male90thPercentileHead,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile Head Circumference (cm)':'95th Percentile Head Circumference (cm)',
                        data:male95thPercentileHead,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile Head Circumference (cm)':'97th Percentile Head Circumference (cm)',
                        data:male97thPercentileHead,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2
                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            title: {
                                display: true,
                                text: 'Head (cm)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'age (months)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            lengthWeightDataMales:{
                labels:lengthAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Weight (kg)':'your Percentile Weight (kg)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Weight (kg)':'3rd Percentile Weight (kg)',
                        data:male3PercentileLengthWeight,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Weight (kg)':'5th Percentile Weight (kg)',
                        data:male5thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Weight (kg)':'10th Percentile Weight (kg)',
                        data:male10thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile  Weight (kg)':'25th Percentile Weight (kg)',
                        data:male25thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile  Weight (kg)':'50th Percentile  Weight (kg)',
                        data:male50thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile  Weight (kg)':'75th Percentile Weight (kg)',
                        data:male75thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile  Weight (kg)':'90th Percentile Weight (kg)',
                        data:male90thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile  Weight (kg)':'95th Percentile Weight (kg)',
                        data:male95thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile Weight (kg)':'97th Percentile Weight (kg)',
                        data:male97thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            
                            title: {
                                display: true,
                                text: 'weight (kg)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'Length (cm)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            statureDataMales:{
                labels:oldAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Stature  (cm)':'your Percentile Stature  (cm)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Stature  (cm)':'3rd Percentile Stature  (cm)',
                        data:male3PercentileStature ,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Stature (cm)':'5th Percentile Stature (cm)',
                        data:male5thPercentileStature,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Stature (cm)':'10th Percentile Stature (cm)',
                        data:male10thPercentileStature,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile  Stature (cm)':'25th Percentile Stature (cm)',
                        data:male25thPercentileStature,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile  Stature (cm)':'50th Percentile  Stature (cm)',
                        data:male50thPercentileStature,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile  Stature (cm)':'75th Percentile Stature (cm)',
                        data:male75thPercentileStature,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile  Stature (cm)':'90th Percentile Stature (cm)',
                        data:male90thPercentileStature,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile  Stature (cm)':'95th Percentile Stature (cm)',
                        data:male95thPercentileStature,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile Stature (cm)':'97th Percentile Stature (cm)',
                        data:male97thPercentileStature,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            
                            title: {
                                display: true,
                                text: 'Stature (cm)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'age (Months)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            oldWeightDataMales:{
                labels:oldAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Weight (kg)':'your Percentile Weight (kg)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Weight (kg)':'3rd Percentile Weight (kg)',
                        data:male3PercentileOldWeight,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Weight (kg)':'5th Percentile Weight (kg)',
                        data:male5thPercentileOldWeight,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Weight (kg)':'10th Percentile Weight (kg)',
                        data:male10thPercentileOldWeight,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile Weight (kg)':'25th Percentile Weight (kg)',
                        data:male25thPercentileOldWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile Weight (kg)':'50th Percentile Weight (kg)',
                        data:male50thPercentileOldWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile Weight (kg)':'75th Percentile Weight (kg)',
                        data:male75thPercentileOldWeight,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile Weight (kg)':'90th Percentile Weight (kg)',
                        data:male90thPercentileOldWeight,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile Weight (kg)':'95th Percentile Weight (kg)',
                        data:male95thPercentileOldWeight,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile Weight (kg)':'97th Percentile Weight (kg)',
                        data:male97thPercentileOldWeight,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            title: {
                                display: true,
                                text: 'Weight (kg)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'age (months)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            oldBMIDataMales:{
                labels:oldAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile BMI Value':'your Percentile BMI Value',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile BMI Value':'3rd Percentile BMI Value',
                        data:male3PercentileOldBMI,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile BMI Value':'5th Percentile BMI Value',
                        data:male5thPercentileOldBMI,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile BMI Value':'10th Percentile BMI Value',
                        data:male10thPercentileOldBMI,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile BMI Value':'25th Percentile BMI Value',
                        data:male25thPercentileOldBMI,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile BMI Value':'50th Percentile BMI Value',
                        data:male50thPercentileOldBMI,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile BMI Value':'75th Percentile BMI Value',
                        data:male75thPercentileOldBMI,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'85th Percentile BMI Value':'85th Percentile BMI Value',
                        data:male85thPercentileOldBMI,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile BMI Value':'90th Percentile BMI Value',
                        data:male90thPercentileOldBMI,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile BMI Value':'95th Percentile BMI Value',
                        data:male95thPercentileOldBMI,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile BMI Value':'97th Percentile BMI Value',
                        data:male97thPercentileOldBMI,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            title: {
                                display: true,
                                text: 'BMI',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'age (months)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            statureWeightDataMales:{
                labels:statureAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Weight (kg)':'your Percentile Weight (kg)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Weight (kg)':'3rd Percentile Weight (kg)',
                        data:male3PercentileStatureWeight,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Weight (kg)':'5th Percentile Weight (kg)',
                        data:male5thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Weight (kg)':'10th Percentile Weight (kg)',
                        data:male10thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile Weight (kg)':'25th Percentile Weight (kg)',
                        data:male25thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile Weight (kg)':'50th Percentile Weight (kg)',
                        data:male50thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile Weight (kg)':'75th Percentile Weight (kg)',
                        data:male75thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'85th Percentile Weight (kg)':'85th Percentile Weight (kg)',
                        data:male85thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile Weight (kg)':'90th Percentile Weight (kg)',
                        data:male90thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile BMI Value':'95th Percentile BMI Value',
                        data:male95thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile BMI Value':'97th Percentile BMI Value',
                        data:male97thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            title: {
                                display: true,
                                text: 'Weight (kg)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'Stature (cm)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },


            lengthDataFemales:{
                labels:yAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Length (cm)':'your Percentile Length (cm)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Length (cm)':'3rd Percentile Length (cm)',
                        data:female3PercentileLength,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Length (cm)':'5th Percentile Length (cm)',
                        data:female5thPercentileLength,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Length (cm)':'10th Percentile Length (cm)',
                        data:female10thPercentileLength,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile Length (cm)':'25th Percentile Length (cm)',
                        data:female25thPercentileLength,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile Length (cm)':'50th Percentile Length (cm)',
                        data:female50thPercentileLength,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile Length (cm)':'75th Percentile Length (cm)',
                        data:female75thPercentileLength,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile Length (cm)':'90th Percentile Length (cm)',
                        data:female90thPercentileLength,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile Length (cm)':'95th Percentile Length (cm)',
                        data:female95thPercentileLength,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile Length (cm)':'97th Percentile Length (cm)',
                        data:female97thPercentileLength,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            title: {
                                display: true,
                                text: 'Length (cm)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'age (months)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            weightDataFemales:{
                labels:yAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Weight (kg))':'your Percentile Weight (kg)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Weight (kg)':'3rd Percentile Weight (kg)',
                        data:female3PercentileWeight,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Weight (kg)':'5th Percentile Weight (kg)',
                        data:female5thPercentileWeight,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Weight (kg)':'10th Percentile Weight (kg)',
                        data:female10thPercentileWeight,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile Weight (kg)':'25th Percentile Weight (kg)',
                        data:female25thPercentileWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile Weight (kg)':'50th Percentile Weight (kg)',
                        data:female50thPercentileWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile Weight (kg)':'75th Percentile Weight (kg)',
                        data:female75thPercentileWeight,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile Weight (kg)':'90th Percentile Weight (kg)',
                        data:female90thPercentileWeight,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile Weight (kg)':'95th Percentile Weight (kg)',
                        data:female95thPercentileWeight,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile Weight (kg)':'97th Percentile Weight (kg)',
                        data:female97thPercentileWeight,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            title: {
                                display: true,
                                text: 'Weight (kg)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'age (months)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            headtDataFemales:{
                labels:yAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Head Circumference (cm)':'your Percentile Head Circumference (cm)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Head Circumference (cm)':'3rd Percentile Head Circumference (cm)',
                        data:female3PercentileHead,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2,
                        

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Head Circumference (cm)':'5th Percentile Head Circumference (cm)',
                        data:female5thPercentileHead,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Head Circumference (cm)':'10th Percentile Head Circumference (cm)',
                        data:female10thPercentileHead,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile Head Circumference (cm)':'25th Percentile Head Circumference (cm)',
                        data:female25thPercentileHead,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile Head Circumference (cm)':'50th Percentile Head Circumference (cm)',
                        data:female50thPercentileHead,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile Head Circumference (cm)':'75th Percentile Head Circumference (cm)',
                        data:female75thPercentileHead,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile Head Circumference (cm)':'90th Percentile Head Circumference (cm)',
                        data:female90thPercentileHead,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile Head Circumference (cm)':'95th Percentile Head Circumference (cm)',
                        data:female95thPercentileHead,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile Head Circumference (cm)':'97th Percentile Head Circumference (cm)',
                        data:female97thPercentileHead,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            
                            title: {
                                display: true,
                                text: 'Head (CM)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'age (months)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            lengthWeightDataFemales:{
                labels:lengthAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Weight (kg)':'your Percentile Weight (kg)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Weight (kg)':'3rd Percentile Weight (kg)',
                        data:female3PercentileLengthWeight,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Weight (kg)':'5th Percentile Weight (kg)',
                        data:female5thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Weight (kg)':'10th Percentile Weight (kg)',
                        data:female10thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile  Weight (kg)':'25th Percentile Weight (kg)',
                        data:female25thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile  Weight (kg)':'50th Percentile  Weight (kg)',
                        data:female50thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile  Weight (kg)':'75th Percentile Weight (kg)',
                        data:female75thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile  Weight (kg)':'90th Percentile Weight (kg)',
                        data:female90thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile  Weight (kg)':'95th Percentile Weight (kg)',
                        data:female95thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile Weight (kg)':'97th Percentile Weight (kg)',
                        data:female97thPercentileLengthWeight,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            
                            title: {
                                display: true,
                                text: 'weight (kg)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'Length (cm)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            statureDataFemales:{
                labels:oldAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Stature  (cm)':'your Percentile Stature  (cm)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Stature  (cm)':'3rd Percentile Stature  (cm)',
                        data:female3PercentileStature ,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Stature (cm)':'5th Percentile Stature (cm)',
                        data:female5thPercentileStature,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Stature (cm)':'10th Percentile Stature (cm)',
                        data:female10thPercentileStature,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile  Stature (cm)':'25th Percentile Stature (cm)',
                        data:female25thPercentileStature,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile  Stature (cm)':'50th Percentile  Stature (cm)',
                        data:female50thPercentileStature,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile  Stature (cm)':'75th Percentile Stature (cm)',
                        data:female75thPercentileStature,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile  Stature (cm)':'90th Percentile Stature (cm)',
                        data:female90thPercentileStature,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile  Stature (cm)':'95th Percentile Stature (cm)',
                        data:female95thPercentileStature,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile Stature (cm)':'97th Percentile Stature (cm)',
                        data:female97thPercentileStature,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            
                            title: {
                                display: true,
                                text: 'Stature (cm)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'age (Months)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            oldWeightDataFemales:{
                labels:oldAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Weight (kg)':'your Percentile Weight (kg)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Weight (kg)':'3rd Percentile Weight (kg)',
                        data:female3PercentileOldWeight,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Weight (kg)':'5th Percentile Weight (kg)',
                        data:female5thPercentileOldWeight,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Weight (kg)':'10th Percentile Weight (kg)',
                        data:female10thPercentileOldWeight,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile Weight (kg)':'25th Percentile Weight (kg)',
                        data:female25thPercentileOldWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile Weight (kg)':'50th Percentile Weight (kg)',
                        data:female50thPercentileOldWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile Weight (kg)':'75th Percentile Weight (kg)',
                        data:female75thPercentileOldWeight,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile Weight (kg)':'90th Percentile Weight (kg)',
                        data:female90thPercentileOldWeight,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile Weight (kg)':'95th Percentile Weight (kg)',
                        data:female95thPercentileOldWeight,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile Weight (kg)':'97th Percentile Weight (kg)',
                        data:female97thPercentileOldWeight,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            title: {
                                display: true,
                                text: 'Weight (kg)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'age (months)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            oldBMIDatafemales:{
                labels:oldAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile BMI Value':'your Percentile BMI Value',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile BMI Value':'3rd Percentile BMI Value',
                        data:female3PercentileOldBMI,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile BMI Value':'5th Percentile BMI Value',
                        data:female5thPercentileOldBMI,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile BMI Value':'10th Percentile BMI Value',
                        data:female10thPercentileOldBMI,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile BMI Value':'25th Percentile BMI Value',
                        data:female25thPercentileOldBMI,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile BMI Value':'50th Percentile BMI Value',
                        data:female50thPercentileOldBMI,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile BMI Value':'75th Percentile BMI Value',
                        data:female75thPercentileOldBMI,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'85th Percentile BMI Value':'85th Percentile BMI Value',
                        data:female85thPercentileOldBMI,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile BMI Value':'90th Percentile BMI Value',
                        data:female90thPercentileOldBMI,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile BMI Value':'95th Percentile BMI Value',
                        data:female95thPercentileOldBMI,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile BMI Value':'97th Percentile BMI Value',
                        data:female97thPercentileOldBMI,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            title: {
                                display: true,
                                text: 'BMI',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'age (months)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            statureWeightDatafemales:{
                labels:statureAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your Percentile Weight (kg)':'your Percentile Weight (kg)',
                        data:[
                            
                            // {
                            // x:13.5,
                            // y:70
                            // },
                            // {
                            // x:14.5,
                            // y:75
                            // },
                        ],
                        fill: false,
                        borderColor: '#000',
                        tension: .2,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'3rd Percentile Weight (kg)':'3rd Percentile Weight (kg)',
                        data:female3PercentileStatureWeight,
                        fill: false,
                        borderColor: '#009900',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'5th Percentile Weight (kg)':'5th Percentile Weight (kg)',
                        data:female5thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#009500',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'10th Percentile Weight (kg)':'10th Percentile Weight (kg)',
                        data:female10thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#009100',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'25th Percentile Weight (kg)':'25th Percentile Weight (kg)',
                        data:female25thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'50th Percentile Weight (kg)':'50th Percentile Weight (kg)',
                        data:female50thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#008800',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'75th Percentile Weight (kg)':'75th Percentile Weight (kg)',
                        data:female75thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'85th Percentile Weight (kg)':'85th Percentile Weight (kg)',
                        data:female85thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#008400',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'90th Percentile Weight (kg)':'90th Percentile Weight (kg)',
                        data:female90thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#007600',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'95th Percentile BMI Value':'95th Percentile BMI Value',
                        data:female95thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#007200',
                        tension: .2

                    },
                    {
                        label:this.local =='ar'?'97th Percentile BMI Value':'97th Percentile BMI Value',
                        data:female97thPercentileStatureWeight,
                        fill: false,
                        borderColor: '#006800',
                        tension: .2

                    },
                ],
                options:{
                    scales: {
                        y: { type:'linear',
                            title: {
                                
                                display: true,
                                text: 'Weight (kg)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                        x: { type:'linear',
                            title: {
                                display: true,
                                text: 'Stature (cm)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            ticks: { color: '#205072',stepSize:.5}
                        },
                    },
                    elements: {
                    point:{
                            radius: 0
                        }
                    }
                },
            },
            genderOptions:[
                {english:"male",arabic:"male"},
                {english:"female",arabic:"female"},
            ],
            errors:{
                inputError,
                minValueError,
                maxValueError
            },
            showing:{
                ageUnder2years:false,
                ageAbove2Yyears:false,
            },


        }
    },
    validations:{
        data:{
            age:{
                decimal,
                minVal:minValue(.1),
                maxVal:maxValue(240),
            },
            weight:{
                decimal,
                minVal:minValue(1),
                maxVal:maxValue(170),
            },
            head:{
                decimal,
                minVal:minValue(1),
                maxVal:maxValue(55),
            },
            length:{
                decimal,
                minVal:minValue(1),
                maxVal:maxValue(220),
            }
        }
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch("setPediatricGrowthchartIsValid",this.$v.data.$invalid );
            },
            deep: true,
        },
    },
    methods:{
        addToChart(){
            if(!this.$v.data.$invalid){
                this.showing.ageUnder2years = false ;
                this.showing.ageAbove2Yyears = false ;
                this.data.BMI = null ;
                if(this.data.age <=24){
                    if(this.data.gender.english=='male')
                        this.handleUnder2AgesData('male');
                    else
                        this.handleUnder2AgesData('female');
                    this.showing.ageUnder2years = true ;
                }
                else{
                    if(this.data.gender.english=='male')
                        this.handleAbove2AgesData('male');
                    else
                        this.handleAbove2AgesData('female');
                    this.showing.ageAbove2Yyears = true ;
                }
            }
        },
        handleUnder2AgesData(childtype){
            if(this.data.length){
                let lengthChart = childtype=='male'?this.$refs.lengthDataMales:this.$refs.lengthDataFemales ;
                if(lengthChart)
                    this.updateExistsChart(lengthChart.chart,this.data.age,this.data.length)
                else
                    this.updateDataChart(childtype=='male'?this.lengthDataMales: this.lengthDataFemales,this.data.age,this.data.length)
            }
            if(this.data.weight){
                let wightChart = childtype=='male'? this.$refs.weightDataMales:this.$refs.weightDataFemales ;
                if(wightChart)
                    this.updateExistsChart(wightChart.chart,this.data.age,this.data.weight)
                else
                    this.updateDataChart(childtype=='male'?this.weightDataMales:this.weightDataFemales,this.data.age,this.data.weight)
            }
            if(this.data.head){
                let headChart = childtype=='male'?this.$refs.headtDataMales:this.$refs.headtDataFemales ;
                if(headChart)
                    this.updateExistsChart(headChart.chart,this.data.age,this.data.head)
                else
                    this.updateDataChart(childtype=='male'?this.headtDataMales:this.headtDataFemales,this.data.age,this.data.head)
            }
            if(this.data.length&&this.data.weight){
                let lengthWeightChart =childtype=='male'? this.$refs.lengthWeightDataMales :this.$refs.lengthWeightDataFemales ;
                if(lengthWeightChart)
                    this.updateExistsChart(lengthWeightChart.chart,this.data.length,this.data.weight)
                else
                    this.updateDataChart(childtype=='male'?this.lengthWeightDataMales:this.lengthWeightDataFemales,this.data.length,this.data.weight)
            }
            
        },
        handleAbove2AgesData(childtype){
            if(this.data.length){
                let lengthChart = childtype=='male'?this.$refs.statureDataMales:this.$refs.statureDataFemales ;
                if(lengthChart)
                    this.updateExistsChart(lengthChart.chart,this.data.age,this.data.length)
                else
                    this.updateDataChart(childtype=='male'?this.statureDataMales: this.statureDataFemales,this.data.age,this.data.length)
            }
            if(this.data.weight){
                let wightChart = childtype=='male'? this.$refs.oldWeightDataMales:this.$refs.oldWeightDataFemales ;
                if(wightChart)
                    this.updateExistsChart(wightChart.chart,this.data.age,this.data.weight)
                else
                    this.updateDataChart(childtype=='male'?this.oldWeightDataMales:this.oldWeightDataFemales,this.data.age,this.data.weight)
            }
            if(this.data.length&&this.data.weight){
                let lengthWeightChart =childtype=='male'? this.$refs.statureWeightDataMales :this.$refs.statureWeightDatafemales ;
                let BMIWeightChart =childtype=='male'? this.$refs.oldBMIDataMales :this.$refs.oldBMIDatafemales ;
                this.data.BMI = Math.round(parseFloat(this.data.weight) / Math.pow((parseFloat(this.data.length)/100),2))
                if(lengthWeightChart)
                    this.updateExistsChart(lengthWeightChart.chart,this.data.length,this.data.weight)
                else
                    this.updateDataChart(childtype=='male'?this.statureWeightDataMales:this.statureWeightDatafemales,this.data.length,this.data.weight)
                if(BMIWeightChart)
                    this.updateExistsChart(BMIWeightChart.chart,this.data.age,this.data.BMI)
                else
                    this.updateDataChart(childtype=='male'?this.oldBMIDataMales:this.oldBMIDatafemales,this.data.age,this.data.BMI)
            }

        },
        updateExistsChart(chart,x,y){
            chart.data.datasets[0].data =[{
                x:parseFloat(x),
                y:parseFloat(y)
            }]
                
            chart.update();
        },
        updateDataChart(chart,x,y){
            chart.datasets[0].data = [{
                x:parseFloat(x),
                y:parseFloat(y)
            }]
        },
    },
}
</script>