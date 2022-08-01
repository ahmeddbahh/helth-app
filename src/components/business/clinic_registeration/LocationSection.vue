<template>
    <div class="location-section" :class="{'arabic-content':local=='ar'}">
        <div class="inputs-wrapper">
            <div class="row">
                <div class="col-lg-4">
                    <div class="adress">
                        <label>{{lang[local].adress.label}}</label>
                        <InputText 
                            type="text"
                            :placeholder="lang[local].adress.placeholder"
                            :class="{'border-error':$v.data.location.address.$invalid && $v.data.location.address.$dirty}"
                            v-model="data.location.address"
                            @change="$v.data.location.address.$touch()"
                        >
                        </InputText>
                        <div class="errors">
                            <small class="text-error" v-if="$v.data.location.address.$dirty && !$v.data.location.address.required">
                                {{errors.requiredErorr(lang[local].adress.label)}}
                            </small>
                            <small class="text-error" v-else-if="$v.data.location.address.$dirty && !$v.data.location.address.alpha">
                                {{errors.alphaError(lang[local].adress.label)}}
                            </small>
                            <small class="text-error" v-else-if="$v.data.location.address.$dirty && !$v.data.location.address.minlen">
                                {{errors.minLengthError(lang[local].adress.label,$v.data.location.address.$params.minlen.min)}}
                            </small>
                            <small class="text-error" v-else-if="$v.data.location.address.$dirty && !$v.data.location.address.maxlen">
                                {{errors.maxLengthError(lang[local].adress.label,$v.data.location.address.$params.maxlen.max)}}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="city">
                        <label>{{lang[local].city.label}}</label>
                        <span :class="local=='ar'?'p-input-icon-right':'p-input-icon-left'">
                            <i class="pi pi-search" />                        
                            <AutoComplete
                                :placeholder="lang[local].city.placeholder"
                                v-model="selectedCity" 
                                :suggestions="filteredCities"
                                @item-select="handleState"
                                @complete="searchCity($event)" :field="local=='ar'?'arName':'enName'" 
                            />
                        </span>

                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="zip-code">
                        <label>{{lang[local].zipCode.label}}</label>
                        <InputText 
                            type="number"
                            :placeholder="lang[local].zipCode.placeholder"
                            :class="{'border-error':$v.data.location.zipCode.$invalid && $v.data.location.zipCode.$dirty}"
                            v-model="data.location.zipCode"
                            @change="$v.data.location.zipCode.$touch()"
                        >
                        </InputText>
                        <div class="errors">
                            <small class="text-error" v-if="$v.data.location.zipCode.$dirty && !$v.data.location.zipCode.numeric">
                                {{errors.numericError(lang[local].zipCode.label)}}
                            </small>
                            <small class="text-error" v-else-if="$v.data.location.zipCode.$dirty && !$v.data.location.zipCode.minlen">
                                {{errors.minLengthError(lang[local].zipCode.label,$v.data.location.zipCode.$params.minlen.min)}}
                            </small>
                            <small class="text-error" v-else-if="$v.data.location.zipCode.$dirty && !$v.data.location.zipCode.maxlen">
                                {{errors.maxLengthError(lang[local].zipCode.label,$v.data.location.zipCode.$params.maxlen.max)}}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
        <div class="map mt-3">
            <label>
                <mark>{{lang[local].hint.label}}:</mark> 
                <span>{{lang[local].hint.content}}</span>
                <span class="text-error" v-if="!data.location.coordinates.lg||!data.location.coordinates.lt"> {{lang[local].hint.required}}</span>
            </label>
            <gmap-map :zoom="14" :center="center">
                <gmap-marker
                    :position="center"
                    :draggable="true"
                    @dragstart="getLocation($event)"
                    @dragend="getLocation($event)"
                    ref="marker"
                    
                    :icon="{ url: require('../../../UI/icons/business/clinic_registeration/android-icon-48x48.png')}"
                    size="24"
                >
                </gmap-marker>
            </gmap-map>
        </div>
    </div>
</template>
<script>
import cities from '../../../mixins/business/cities.js';
import governorates from '../../../mixins/business/governorates.js';
import locationSectionLang from '../../../mixins/business/clinic_registeration/locationSectionLang.js';
import {required,minLength,maxLength,numeric} from "vuelidate/lib/validators";
import {alpha} from "../../helpers/customValidators.js";
import {requiredErorr,minLengthError,maxLengthError,alphaError,numericError}from "../../helpers/errors.js";
import InputText from 'primevue/inputtext';
import AutoComplete from 'primevue/autocomplete';
export default {
    props:{
        data:{
            type:Object,
            required:true
        }
    },
    mixins:[cities,governorates,locationSectionLang],
    components:{
        InputText,
        AutoComplete,
    },
    data(){
        return{
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            selectedCity:'',
			filteredCities: [],
            center: { 
                lat: 30.0444,
                lng: 31.2357
            },
            errors:{
                requiredErorr,
                minLengthError,
                maxLengthError,
                alphaError,
                numericError,
            },
        }
    },
    validations:{
        data:{
            location:{
                address:{
                    required,
                    minlen: minLength(3),
                    maxlen: maxLength(255),
                    alpha(value){
                        return alpha(value)
                    },
                },
                zipCode:{
                    numeric,
                    minlen: minLength(2),
                    maxlen: maxLength(20),
                },
                state:{
                    city:{
                        required,
                    }
                },
            }
        }
    },
    mounted(){
        this.locateGeoLocation();
    },

    methods:{
		searchCity(event){
            setTimeout(()=>{
                this.filteredCities =this.cities.filter(c=>
                    c.english.toLowerCase().includes(event.query.toLowerCase()) || c.arabic.includes(event.query)
                );
                if(this.filteredCities.length){
                    for(let c =0 ; c<this.filteredCities.length;c++){
                        for(let g =0 ; g <this.governorates.length;g++){
                            if(this.filteredCities[c].governorate_id==this.governorates[g].id){
                                this.filteredCities[c].arName=this.filteredCities[c].arabic+","+this.governorates[g].arabic ;
                                this.filteredCities[c].enName=this.filteredCities[c].english+","+this.governorates[g].english ;
                                this.filteredCities[c].state = {
                                        arabic:this.governorates[g].arabic,
                                        english:this.governorates[g].english,
                                        city:{
                                            arabic:this.filteredCities[c].arabic,
                                            english:this.filteredCities[c].english,
                                        }
                                }
                                break ;
                            }
                        }
                    }
                }
            },200)

        },
        handleState(){
            this.data.location.state=this.selectedCity.state ;
        },
        locateGeoLocation() {
            navigator.geolocation.getCurrentPosition(res => {
                this.center = {
                    lat: res.coords.latitude,
                    lng: res.coords.longitude
                };
                this.data.location.coordinates.lg = this.center.lng ;
                this.data.location.coordinates.lt = this.center.lat ;
            });
        },
        getLocation(event){
            
            this.center = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            };
            this.data.location.coordinates.lg = this.center.lng ;
            this.data.location.coordinates.lt = this.center.lat ;
        },
    }
}
</script>
<style lang="scss" scoped>
// /deep/ .p-input-icon-right .p-autocomplete .p-autocomplete-loader {
//   left: 1rem;
//   right:auto;
// }
/deep/ .pi{
    z-index: 10;
}
.location-section{
    .map{
        .vue-map-container{
            width: 100%;
            height: 250px ;
        }
    }
}
</style>