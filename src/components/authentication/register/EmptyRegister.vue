<template>
    <div class="empty-register">
        <Steps :model="steps"/>
        <router-view></router-view>
    </div>
</template>
<script>
import Steps from 'primevue/steps';
export default {
    components:{
        Steps
    },
    data(){
        return{
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            steps:[]
        }
    },
    created(){
        if (this.local=='ar'){
            this.steps=[
                {
                    to: '/register',
                    label:'بيانات شخصية'
                },
                {
                    to: '/register/email-verify',
                    label:'البريد الالكتروني'
                },
                {
                    to: '/register/phone-verify',
                    label:'الهاتف'
                },
            ]
        }
        else
            this.steps=[
                {
                    to: '/register',
                    label:'Personal'
                },
                {
                    to: '/register/email-verify',
                    label:'Email'
                },
                {
                    to: '/register/phone-verify',
                    label:'phone'
                },
            ]
    },
}
</script>
