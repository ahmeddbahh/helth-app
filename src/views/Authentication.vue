<template>
    <div class="authentication">
        <div class="bg-vid">
            <video autoplay muted loop>
                <source src="../assets/authentication/bg-vid.mp4">
            </video>
        </div>
        <div class="content">
            <div class="lang-selection">
                <div class="w-10">
                    <Dropdown v-model="selectedLanguage" @change="getLanguage" :options="languages" optionLabel="name" placeholder="Select a language" />
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-6 col-xl-7">
                        <div class="logo">
                            <h1>Health App</h1>
                        </div>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-5">
                        <div class="toggler-wrapper">
                            <div class="toggler-component">
                                <transition name="slide" mode="out-in">
                                    <router-view></router-view>
                                </transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Dropdown from 'primevue/dropdown';
export default {
    components:{
        Dropdown,
    },
    data() {
        return {
            selectedLanguage:'',
            languages: [
                {name: 'English', code: 'en'},
                {name: 'عربي', code: 'ar'},
            ],
            local:localStorage.getItem("lang")?localStorage.getItem("lang"):'en',
        }
    },
    mounted(){
         if(this.local =='ar')
         this.selectedLanguage={name: 'عربي', code: 'ar'};
         else if(this.local =='en')
         this.selectedLanguage = {name: 'English', code: 'en'}
    },
   
    methods:{
        getLanguage(){
            localStorage.setItem("lang",this.selectedLanguage.code);
            location.reload();
        },
    }
}
</script>
<style lang="scss" scoped>
.authentication{
    width: 100%;
    height: 100%;
    .bg-vid{
        width: 100%;
        height: 100%;
        video{
            position: fixed;
            right: 0;
            bottom: 0;
            min-width: 100%;
            min-height: 100%;
            object-position: center;
            object-fit: cover;
        }
    }
    .content{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        // backdrop-filter: blur(10px);
        min-height: 100px;
        overflow-y: auto;
        width: 100%;
        height: 100%;
        padding:10px;
        .lang-selection{
            display: flex;
            flex-direction: row-reverse;
            margin-bottom: 20px;
        }
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color:$tradmark-color;
            h1{
                text-align:center;
            }
        }
        .toggler-wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            height:100%;
            width: 100%;
            .toggler-component{
                width: 100%;
                border-radius: 34px;
                background-color: white;
                padding: 40px;
            }
        }  
    }
}


// animation 

.slide-enter-active {
   transition-duration:0.7s;
   transition-timing-function: ease-in;
}

.slide-leave-active {
   transition-duration: 0.7s;
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
   max-height:1000px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height:0px;
}



@media (max-width:320px) {  
    .authentication{
        .content{
            .toggler-wrapper{
                .toggler-component{
                    padding:30px 10px;
                }
            }  
        }
        
    }
}
@media (min-width:321px) and (max-width:375px) {  
    .authentication{
        .content{
            .toggler-wrapper{
                .toggler-component{
                    padding:30px;
                }
            }  
        }
        
    }
}
@media (max-width: 768px) {  
    .authentication{
    .bg-vid{
        
        video{
           
        }
    }
    .content{
            .logo{
                height: auto;
                margin-bottom: 20px;
                
            }
        }
    }
}

</style>
