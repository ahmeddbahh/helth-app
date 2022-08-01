<template>
    <div  class="Ultrasounds-media my-3">
        <DargAndDropFiles :data="data" :validatorDispatcher="'setOBJGYNUltrasoundsAndMediaIsValid'"  :imageSize="10*1000*1024" :videoSize="10*1000*1024"/>   
    </div>
</template>
<script>
import DargAndDropFiles from "../shared/DargAndDropFiles.vue"
export default {
    components:{
        DargAndDropFiles
    },
    props:['data'],
    data(){
        return{
            
        }
    },
}
</script>