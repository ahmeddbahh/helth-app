<template>
    <div class="business-hours-section p-2">
        <DayBusinessHour :label="lang[local].label.saturday" :data="data.businessHours.saturday" :init="initDays.saturday" ref="saturday" ></DayBusinessHour>
        <DayBusinessHour :label="lang[local].label.sunday" :data="data.businessHours.sunday" :init="initDays.sunday" ref="sunday"></DayBusinessHour>
        <DayBusinessHour :label="lang[local].label.monday" :data="data.businessHours.monday" :init="initDays.monday" ref="monday"></DayBusinessHour>
        <DayBusinessHour :label="lang[local].label.tuesday" :data="data.businessHours.tuesday" :init="initDays.tuesday" ref="tuesday"></DayBusinessHour>
        <DayBusinessHour :label="lang[local].label.wednesday" :data="data.businessHours.wednesday" :init="initDays.wednesday" ref="wednesday"></DayBusinessHour>
        <DayBusinessHour :label="lang[local].label.thursday" :data="data.businessHours.thursday" :init="initDays.thursday" ref="thursday"></DayBusinessHour>
        <DayBusinessHour :label="lang[local].label.friday" :data="data.businessHours.friday" :init="initDays.friday" ref="friday"></DayBusinessHour>
    </div>
</template>
<script>
import DayBusinessHour from './business_hours/DayBusinessHour.vue'
export default {
    props:{
        data:{
            type:Object,
            required:true,
        },
        initDays:{
            type:Object,
            required:true,
        },
    },
    components:{
        DayBusinessHour
    },
    data(){
        return{
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            lang:{
                en:{
                    label:{
                        saturday:"saturday",
                        sunday:"sunday",
                        monday:"monday",
                        tuesday:"tuesday",
                        wednesday:"wednesday",
                        thursday:"thursday",
                        friday:"friday",
                    }
                },
                ar:{
                    label:{
                        saturday:"السبت",
                        sunday:"الاحد",
                        monday:"الاثنين",
                        tuesday:"الثلاثاء",
                        wednesday:"الاربعاء",
                        thursday:"الخميس",
                        friday:"الجمعة",
                    }
                },
            },
        }
    },
    watch:{
        data:{
            deep:true,
            handler(){
                this.invalidDays();
            }
        },
        initDays:{
            deep:true,
            handler(){
                this.invalidDays();
            }
        }
    },
    methods:{
        // console.log(this.$refs.saturday.$v.$invalid)
        // console.log(this.$refs.sunday.$v.$invalid)
        // console.log(this.$refs.monday.$v.$invalid)
        // console.log(this.$refs.tuesday.$v.$invalid)
        // console.log(this.$refs.wednesday.$v.$invalid)
        // console.log(this.$refs.thursday.$v.$invalid)
        // console.log(this.$refs.friday.$v.$invalid)
        invalidDays(){
            if(
                this.$refs.saturday.$v.$invalid ||
                this.$refs.sunday.$v.$invalid ||
                this.$refs.monday.$v.$invalid ||
                this.$refs.tuesday.$v.$invalid ||
                this.$refs.wednesday.$v.$invalid ||
                this.$refs.thursday.$v.$invalid ||
                this.$refs.friday.$v.$invalid 
            )
            {
                return true
            }
            else{
                return false
            }
        }
    },
}
</script>
<style lang="scss" scoped>
.business-hours-section{
        // border-radius:10px;
        // box-shadow: 1px 1px 5px #f8f9fa, -1px -1px 5px #f8f9fa;
}
</style>