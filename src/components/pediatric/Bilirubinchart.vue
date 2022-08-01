<template>
    <div>
        <Chart ref="BilirubinChart"  type="line" :data.sync="transcutaneousBilirubinData" :options="transcutaneousBilirubinData.options" />
        <div class="row">
            <div class="col-md-6 col-lg-4  my-3">
                <div class="form-group mx-2">
                    <label >{{lang[local].time}}</label>
                        <InputText 
                            type="number" 
                            :class="{'border-error':$v.data.time.$invalid  && $v.data.time.$dirty}" 
                            v-model="data.time" 
                            @change="$v.data.time.$touch()" 
                            :placeholder="lang[local].time"
                            step="0.01" 
                        ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.time.decimal && $v.data.time.$dirty">
                            {{ errors.inputError(lang[local].time) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.time.minVal && $v.data.time.$dirty">
                            {{ errors.minValueError(lang[local].time,$v.data.time.$params.minVal.min) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.time.maxVal && $v.data.time.$dirty">
                            {{ errors.minValueError(lang[local].time,$v.data.time.$params.maxVal.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4  my-3">
                <div class="form-group mx-2">
                    <label >{{lang[local].serumBilirubin}}</label>
                        <InputText 
                            type="number" 
                            :class="{'border-error':$v.data.serumBilirubin.$invalid  && $v.data.serumBilirubin.$dirty}" 
                            v-model="data.serumBilirubin" 
                            @change="$v.data.serumBilirubin.$touch()" 
                            :placeholder="lang[local].serumBilirubin"
                            step="0.01" 
                        ></InputText>
                    <div class="errors">
                        <small class="text-error my-2" v-if="!$v.data.serumBilirubin.decimal && $v.data.serumBilirubin.$dirty">
                            {{ errors.inputError(lang[local].serumBilirubin) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.serumBilirubin.minVal && $v.data.serumBilirubin.$dirty">
                            {{ errors.minValueError(lang[local].serumBilirubin,$v.data.serumBilirubin.$params.minVal.min) }}
                        </small>
                        <small class="text-error my-2" v-else-if="!$v.data.serumBilirubin.maxVal && $v.data.serumBilirubin.$dirty">
                            {{ errors.minValueError(lang[local].serumBilirubin,$v.data.serumBilirubin.$params.maxVal.max) }}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4  my-3">
                <div class="form-group mx-2 my-4">
                    <Button
                        :label="lang[local].add"
                        :class="{ 'arabic-icon': local == 'ar' }"
                        class="p-button-rounded"
                        @click="addToChart"
                        :disabled="$v.data.$invalid||!data.time||!data.serumBilirubin"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    timeAxis,
    transcutaneousBilirubinLow,
    transcutaneousBilirubinMedium,
    transcutaneousBilirubinHeigh,
} from "../helpers/BilirubinchartData" ; 
import { decimal ,minValue,maxValue } from "vuelidate/lib/validators";
import {inputError,minValueError,maxValueError} from "../helpers/errors";
import Chart  from "primevue/chart" ;
import InputText from "primevue/inputtext";
import Button from "primevue/button";
export default {
    props:['data'],
    components:{
        Chart,
        InputText,
        Button
    },
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    time:"Time (hours)",
                    serumBilirubin:"Serum bilirubin (mg/dl)",
                    add:"Add",
                },
                ar:{
                    time:"Time (hours)",
                    serumBilirubin:"Serum bilirubin (mg/dl)",
                    add:"Add"
                },
            },
            transcutaneousBilirubinData:{
                labels:timeAxis,
                datasets:[
                    {
                        label:this.local =='ar'?'your risk':'your risk',
                        data:[],
                        fill: false,
                        borderColor: '#000',
                        tension: 0,
                        elements: {
                            point:{
                                    radius: 5,
                                    backgroundColor:"#000",
                                }
                            }

                    },
                    {
                        label:this.local =='ar'?'Low risk':'Low risk',
                        data:transcutaneousBilirubinLow,
                        fill: true,
                        borderColor: 'green',
                        fillColor:'green',
                        backgroundColor:'rgb(0, 255, 0,.2)',
                        tension: 0

                    },
                    {
                        label:this.local =='ar'?'Medium risk':'Medium risk',
                        data:transcutaneousBilirubinMedium,
                        fill: true,
                        borderColor: 'yellow',
                        fillColor : 'yellow',
                        backgroundColor  : 'rgb(255, 255, 0,.2)',
                        tension: 0

                    },
                    {
                        label:this.local =='ar'?'High risk':'High risk',
                        data:transcutaneousBilirubinHeigh,
                        fill: true,
                        borderColor: 'red',
                        fillColor : 'red',
                        backgroundColor  : 'rgb(255, 0, 0,.2)',
                        tension: 0
                    },
                    
                ],
                options:{
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: 'Serum bilirubin (mg/dl)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    },
                                    
                            },
                            grid:{
                                color:'rgb(200,200, 200,.2)',
                            },
                            ticks: { color: '#205072', beginAtZero: true,  }
                        },
                        // gridLines:{
                        //         display:false
                        //     },
                        x: {
                            type:'linear',
                            title: {
                                display: true,
                                text: 'time (hours)',
                                color:"#205072",
                                font: {
                                        size: 20,
                                        weight:300
                                    }
                            },
                            grid:{
                                color:'rgb(200,200, 200,.2)',
                            },
                            ticks: { color: '#205072', beginAtZero: true,stepSize:4 },
                            
                            
                        },
                    },
                    elements: {
                        point:{
                                radius: 0
                            }
                    }
                    
                },
            },
            errors:{
                inputError,
                minValueError,
                maxValueError
            },


        }
    },
    validations:{
        data:{
            time:{
                decimal,
                minVal:minValue(0),
                maxVal:maxValue(144),
            },
            serumBilirubin:{
                decimal,
                minVal:minValue(0),
                maxVal:maxValue(18),
            }
        }
    },
    watch:{
        data: {
            handler() {
                this.$store.dispatch("setPediatricBilirubinchartIsValid",this.$v.data.$invalid );
            },
            deep: true,
        },
    },
    methods:{
        addToChart(){
            if(!this.$v.data.$invalid&&this.data.time&&this.data.serumBilirubin){
                let chart = this.$refs.BilirubinChart.chart ;
                chart.data.datasets[0].data = [{
                        x:parseFloat(this.data.time),
                        y:parseFloat(this.data.serumBilirubin)
                    }]
                
                chart.update();
                // this.data.time = null ; 
                // this.data.serumBilirubin = null ; 
                // this.$v.data.$reset();
                
            
            }
        },
    },
}
</script>
