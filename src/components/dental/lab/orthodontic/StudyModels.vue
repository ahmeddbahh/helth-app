<template>
    <div class="study-models">
        <div class="row my-3">
            <div class="col-md-6 col-lg-4 " v-for="(value,key) in lang[local].studyModels" :key="key">
                <div class="check-container d-flex align-items-center  my-3" >
                        <Checkbox v-model="data.lab.orthodontal.studyModels[key]" :binary="true" />
                        <span class="mx-1">{{value}}</span>
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
import Checkbox from 'primevue/checkbox';
export default {
    components:{
        Checkbox
    },
    props:['data'],
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    studyModels:{
                        finished:"Finished",
                        unfinished:"Unfinished",
                        duplication:"Duplication"
                    }
                    

                },
                ar:{
                    studyModels:{
                        finished:"Finished",
                        unfinished:"Unfinished",
                        duplication:"Duplication"
                    }
                }
            },
        }
    },

}
</script>