<template>
    <div class="medical-rx">
        <Rx :data="data" />
        <div class="row my-5">
            <div class="col-lg-4">
                <label>{{lang[local].overallComment.label}}</label>
                <Textarea v-model="data.note" rows="3" :placeholder="lang[local].overallComment.placeholder" />
                <div class="error">
                    <small 
                        class="d-block text-danger" 
                        v-if="$v.data.note.$model !='' && !$v.data.note.notContainsHtmlTags"
                    >
                        {{errors.htmlTagsError("Overall Comment")}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.note.minLen">
                        {{errors.minLengthError("Overall Comment",$v.data.note.$params.minLen.min)}}
                    </small>
                    <small class="text-error my-2" v-else-if="!$v.data.note.maxLen">
                        {{errors.maxLengthError("Overall Comment", $v.data.note.$params.maxLen.max) }}
                    </small>
                </div>   
            </div>
        </div>
        <div class="form-actions row">
            <div class="col-12">
                <div class="btns-wrapper">
                    <div class="save-btn">
                        <Button label="Save" />
                    </div>
                    <div class="cancel-btn">
                        <Button label="Cancel" class="p-button-danger" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Button from "primevue/button";
import Rx from './medicalRx/Rx.vue'
import Textarea from 'primevue/textarea';
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "../helpers/customValidators";
import {htmlTagsError,minLengthError,maxLengthError} from '../helpers/errors'
export default {
    components:{
        Button,
        Rx,
        Textarea
    },
    data(){
        return{
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    overallComment:{
                        label:"Overall Comment",
                        placeholder:"text..."
                    }
                },
                ar:{
                    overallComment:{
                        label:"Overall Comment",
                        placeholder:"text..."
                    }
                },
            },
            data:{
                patientId:"",
                prescription:[],
                note:""   
            },
            errors:{
                htmlTagsError,
                minLengthError,
                maxLengthError,
            },
        }
    },
    validations:{
        data:{
            note:{
                minLen: minLength(1),
                maxLen: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                },
            }
            
        },
    }
}
</script>
<style lang="scss" scoped>
.medical-rx{
    .form-actions{
        .btns-wrapper{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            .save-btn,.cancel-btn{
                .p-button{
                    width:150px;
                }
            }
        }
    }
}
</style>
