<template>
    <aside class="aside-list w-100 h-100" :class="{'arabic-content':local=='ar'}">
        <ul>
            <li v-for="(option,index) in asideOptions" :key="index" class="my-3">
                <h5 class="d-flex align-items-center h-100" 
                    @click="toggle(option.english)">
                    <img :src="option.icon" alt="">
                    <span class="mx-2 title"  v-if="local=='ar'" :class="{active:toggler==option.english}">{{option.arabic}}</span>
                    <span class="mx-2 title" v-else :class="{active:toggler==option.english}">{{option.english}}</span>
                </h5>
            </li>
        </ul>
    </aside>
</template>
<script>
export default {
    props:{
        toggler:{
            type:String,
            default:'Location'
        }
    },
    data(){
        return{
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            asideOptions:[
                {
                    english:'Location',
                    arabic:'الموقغ الجغرافي',
                    icon:require('../../../UI/icons/business/clinic_registeration/locations.svg')
                },
                {
                    english:'Email',
                    arabic:'البريد الالكتروني',
                    icon:require('../../../UI/icons/business/clinic_registeration/mail.svg')
                },
                {
                    english:'Phone Number',
                    arabic:'الهاتف المحمول',
                    icon:require('../../../UI/icons/business/clinic_registeration/phone.svg')
                },
                {
                    english:'Website',
                    arabic:'الموقع الالكتروني',
                    icon:require('../../../UI/icons/business/clinic_registeration/world.svg')
                },
                {
                    english:'Business Hours',
                    arabic:'ساعات العمل',
                    icon:require('../../../UI/icons/business/clinic_registeration/schedule.svg')
                },
                {
                    english:'Waiting Time',
                    arabic:'وقت الانتظار',
                    icon:require('../../../UI/icons/business/clinic_registeration/loading.svg')
                },
                {
                    english:'Isurance Company',
                    arabic:'شركة التأمين',
                    icon:require('../../../UI/icons/business/clinic_registeration/medical_records.svg')
                },
                {
                    english:'Fees',
                    arabic:'المصاريف',
                    icon:require('../../../UI/icons/business/clinic_registeration/money.svg')
                },
            ],
            
        }
    },
    methods:{
        toggle(value){
            this.$emit('toggle',value)
        }
    },
}
</script>
<style lang="scss" scoped>
    .aside-list{
        border-right: 2px solid rgb(206, 206, 206);
        ul{
            li{
                h5{
                    cursor: pointer;
                    .title{
                        transition: all 0.4s ease-in-out;
                    }
                    .active{
                            text-shadow: 0px 0px 20px #2e4dd4
                    }
                    &:hover .title{
                        @extend.active
                    }
                }
            }
        }
    }
    .arabic-content{
        border-right:none;
        border-left: 2px solid rgb(206, 206, 206);
    }
</style>