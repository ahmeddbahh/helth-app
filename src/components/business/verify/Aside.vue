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
            default:'National ID'
        }
    },
    data(){
        return{
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
            asideOptions:[
                {
                    english:'National ID',
                    arabic:'البطاقة',
                    icon:require('../../../UI/icons/business/verify_branch/user-id.svg')
                },
                {
                    english:'Commercial Record',
                    arabic:'السجل التجاري',
                    icon:require('../../../UI/icons/business/verify_branch/i_certificate_paper.svg')
                },
                {
                    english:'Syndicate ID',
                    arabic:'كارنيه النقابة',
                    icon:require('../../../UI/icons/business/verify_branch/user-id.svg')
                },
                {
                    english:'Profession License',
                    arabic:'رخصة المزاولة',
                    icon:require('../../../UI/icons/business/verify_branch/i_certificate_paper.svg')
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