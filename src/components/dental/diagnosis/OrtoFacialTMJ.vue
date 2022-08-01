<template>
    <div class="orto-Facial-TMJ container">
        <div class="malooclusion my-4" v-if="data.categoryType.ortoFacialTMJ.english == 'Malooclusion'">
            <div class="row">
                <div class="col-md-6  col-xl-3 my-3">
                    <div class="d-flex align-items-center flex-column ">
                        <div class="text-center">
                            <img src="./ortoFacialTMJ/malooclusion/defualt.svg" v-if="!data.ortoFacialTMJ.malooclusion.oneOption.english" alt="">
                            <img src="./ortoFacialTMJ/malooclusion/classII.svg" v-else-if="data.ortoFacialTMJ.malooclusion.oneOption.english=='class II'" alt="">
                            <img src="./ortoFacialTMJ/malooclusion/classIII.svg" v-else-if="data.ortoFacialTMJ.malooclusion.oneOption.english=='class III'" alt="">
                        </div>
                        <div class="selection text-center">
                            <SelectButton
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.malooclusion.oneOption
                                "
                                :options="malooclusion.oneOption"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6  col-xl-3  my-3">
                    <div class="d-flex align-items-center flex-column ">
                        <div class="text-center">
                            <img src="./ortoFacialTMJ/malooclusion/midline_defualt.svg" v-if="!data.ortoFacialTMJ.malooclusion.twoOption.english" alt="">
                            <img src="./ortoFacialTMJ/malooclusion/midline_shift.svg" v-else-if="data.ortoFacialTMJ.malooclusion.twoOption.english=='midline shift'" alt="">
                        </div>
                        <div class="selection text-center">
                            <SelectButton
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.malooclusion.twoOption
                                "
                                :options="malooclusion.twoOption"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6  col-xl-3  my-3">
                    <div class="d-flex align-items-center flex-column ">
                        <div class="text-center">
                            <img src="./ortoFacialTMJ/malooclusion/normal.svg" v-if="!data.ortoFacialTMJ.malooclusion.threeOption.english" alt="">
                            <img src="./ortoFacialTMJ/malooclusion/crowding.svg" v-else-if="data.ortoFacialTMJ.malooclusion.threeOption.english=='crowding'" alt="">    
                        </div>
                        <div class="selection text-center">
                            <SelectButton
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.malooclusion.threeOption
                                "
                                :options="malooclusion.threeOption"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3  my-3">
                    <div class="d-flex align-items-center flex-column ">
                        <div class="text-center">
                            <img src="./ortoFacialTMJ/malooclusion/normal.svg" v-if="!data.ortoFacialTMJ.malooclusion.fourOption.english" alt="">
                            <img src="./ortoFacialTMJ/malooclusion/spacing.svg" v-else-if="data.ortoFacialTMJ.malooclusion.fourOption.english=='spacing'" alt="">
                        </div>
                        <div class="selection text-center">
                            <SelectButton
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.malooclusion.fourOption
                                "
                                :options="malooclusion.fourOption"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3  my-3">
                    <div class="d-flex align-items-center flex-column ">
                        <div class="text-center">
                            <img src="./ortoFacialTMJ/malooclusion/normal.svg" v-if="!data.ortoFacialTMJ.malooclusion.fiveOption.english" alt="">
                            <img src="./ortoFacialTMJ/malooclusion/overjet.svg" v-else-if="data.ortoFacialTMJ.malooclusion.fiveOption.english=='overjet'" alt="">
                            <img src="./ortoFacialTMJ/malooclusion/underbite.svg" v-else-if="data.ortoFacialTMJ.malooclusion.fiveOption.english=='under bite'" alt="">
                        </div>
                        <div class="selection text-center">
                            <SelectButton
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.malooclusion.fiveOption
                                "
                                :options="malooclusion.fiveOption"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3  my-3">
                    <div class="d-flex align-items-center flex-column ">
                        <div class="text-center">
                            <img src="./ortoFacialTMJ/malooclusion/normal.svg" v-if="!data.ortoFacialTMJ.malooclusion.sixOption.english" alt="">
                            <img src="./ortoFacialTMJ/malooclusion/deepbite.svg" v-else-if="data.ortoFacialTMJ.malooclusion.sixOption.english=='deep bite'" alt="">
                            <img src="./ortoFacialTMJ/malooclusion/openbite.svg" v-else-if="data.ortoFacialTMJ.malooclusion.sixOption.english=='open bite'" alt="">
                        </div>
                        <div class="selection text-center">
                            <SelectButton
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.malooclusion.sixOption
                                "
                                :options="malooclusion.sixOption"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3  my-3">
                    <div class="d-flex align-items-center flex-column ">
                        <div class="text-center">
                            <img src="./ortoFacialTMJ/malooclusion/normal.svg" v-if="!data.ortoFacialTMJ.malooclusion.sevenOption.english" alt="">
                            <img src="./ortoFacialTMJ/malooclusion/posterior_crossbit.svg" v-else-if="data.ortoFacialTMJ.malooclusion.sevenOption.english=='posterior crossbite'" alt="">
                        </div>
                        <div class="selection text-center">
                            <SelectButton
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.malooclusion.sevenOption
                                "
                                :options="malooclusion.sevenOption"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3 my-3">
                    <div class="d-flex align-items-center flex-column ">
                        <div class="text-center">
                            <img src="./ortoFacialTMJ/malooclusion/skeletal_defualt.svg" v-if="!data.ortoFacialTMJ.malooclusion.eightOption.english" alt="">
                            <img src="./ortoFacialTMJ/malooclusion/skeletal_disharm.svg" v-else-if="data.ortoFacialTMJ.malooclusion.eightOption.english=='skeletal disharmony'" alt="">
                        </div>
                        <div class="selection text-center">
                            <SelectButton
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.malooclusion.eightOption
                                "
                                :options="malooclusion.eightOption"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Facial" v-else-if="data.categoryType.ortoFacialTMJ.english == 'Facial'">
            <div class="Facial-Profile my-4">
                <div class="row">
                    <div class="col-md-4 ">
                        <h5>
                            {{lang[local].facialProfile}}
                        </h5>
                    </div>
                    <div class="col-md-8">
                        <div class="img">
                            <img src="./ortoFacialTMJ/facial/facial_retrognathic.svg" alt="">
                        </div>
                        <div class="selection">
                            <SelectButton
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.facial.facialProfile
                                "
                                :options="facial.facialProfile"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>

                    </div>
                </div>
            </div>
            <div class="Lower Face my-4">
                <div class="row">
                    <div class="col-md-4">
                        <h5>
                            {{lang[local].lowerFace}}
                        </h5>
                    </div>
                    <div class="col-md-8">
                        <div class="img">
                            <img src="./ortoFacialTMJ/facial/lower_short.svg" alt="">
                        </div>
                        <div class="selection">
                            <SelectButton
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.facial.lowerFace
                                "
                                :options="facial.lowerFace"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="TMJ-Muscles my-4" v-else-if="data.categoryType.ortoFacialTMJ.english == 'TMJ & Muscles'">
            <div class="row">
                <div class="col-md-6  col-xl-4 my-3">
                    <div class="d-flex align-items-center flex-column ">
                        <div class="text-center">
                            <img src="./ortoFacialTMJ/TMJ-Muscles/bruxism_defualt.svg" v-if="!data.ortoFacialTMJ.TMJMuscles.oneOption.english" alt="">
                            <img src="./ortoFacialTMJ/TMJ-Muscles/bruxism.svg" v-else-if="data.ortoFacialTMJ.TMJMuscles.oneOption.english=='Signs of Bruxism'" alt="">
                        </div>
                        <div class="selection text-center">
                            <SelectButton   
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.TMJMuscles.oneOption
                                "
                                :options="TMJMuscles.oneOption"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6  col-xl-4 my-3">
                    <div class="d-flex align-items-center flex-column ">
                        <div class="text-center">
                            <img src="./ortoFacialTMJ/TMJ-Muscles/tmj_disorder_defualt.svg" v-if="!data.ortoFacialTMJ.TMJMuscles.twoOption.english" alt="">
                            <img src="./ortoFacialTMJ/TMJ-Muscles/tmj_disorder.svg" v-else-if="data.ortoFacialTMJ.TMJMuscles.twoOption.english=='TMJ Disorder'" alt="">
                        </div>
                        <div class="selection text-center">
                            <SelectButton   
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.TMJMuscles.twoOption
                                "
                                :options="TMJMuscles.twoOption"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>
                    </div>
                </div>
                <div class="col-md-6  col-xl-4 my-3">
                    <div class="d-flex align-items-center flex-column ">
                        <div class="text-center">
                            <img src="./ortoFacialTMJ/TMJ-Muscles/muscle_disorder_defualt.svg" v-if="!data.ortoFacialTMJ.TMJMuscles.threeOption.english" alt="">
                            <img src="./ortoFacialTMJ/TMJ-Muscles/muscle_disorder.svg" v-else-if="data.ortoFacialTMJ.TMJMuscles.threeOption.english=='Muscle Disorder'" alt="">
                        </div>
                        <div class="selection text-center">
                            <SelectButton   
                                class="f mx-3 diagnosis-actions-categoy-type"
                                v-model="
                                data.ortoFacialTMJ.TMJMuscles.threeOption
                                "
                                :options="TMJMuscles.threeOption"
                                :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                            ></SelectButton>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import SelectButton from "primevue/selectbutton";
export default {
    components:{
        SelectButton
    },
    props:['data'],
    data(){
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang:{
                en:{
                    facialProfile:"Facial Profile",
                    lowerFace:"Lower Face"
                },
                ar:{
                    facialProfile:"Facial Profile",
                    lowerFace:"Lower Face"
                }
            },
            malooclusion:{
                oneOption:[
                    {
                        english:"class II",
                        arabic:"class II"
                    },{
                        english:"class III",
                        arabic:"class III"
                    },
                ],
                twoOption:[{
                    english:"midline shift",
                    arabic:"midline shift"
                }],
                threeOption:[{
                    english:"crowding",
                    arabic:"crowding"
                }],
                fourOption:[{
                    english:"spacing",
                    arabic:"spacing"
                }],
                fiveOption:[
                    {
                    english:"overjet",
                    arabic:"overjet"
                    },
                    {
                    english:"under bite",
                    arabic:"under bite"
                    },
                ],
                sixOption:[
                    {
                    english:"deep bite",
                    arabic:"deep bite"
                    },
                    {
                    english:"open bite",
                    arabic:"open bite"
                    },
                ],
                sevenOption:[
                    {
                    english:"posterior crossbite",
                    arabic:"posterior crossbite"
                    },
                ],
                eightOption:[
                    {
                    english:"skeletal disharmony",
                    arabic:"skeletal disharmony"
                    },
                ],
                
            },
            facial:{
                facialProfile:[
                    {
                        english:"Normal",
                        arabic:"Normal"

                    },
                    {
                        english:"Convex/Retrognathic",
                        arabic:"Convex/Retrognathic"

                    },
                    {
                        english:"Concave/Prognathic",
                        arabic:"Concave/Prognathic"

                    },
                    

                ],
                lowerFace:[
                    {
                        english:"Normal",
                        arabic:"Normal"
                    },
                    {
                        english:"Short",
                        arabic:"Short"
                    },
                    {
                        english:"Long",
                        arabic:"Long"
                    },
                ]
                
            },
            TMJMuscles:{
                oneOption:[{
                    english:"Signs of Bruxism",
                    arabic:"Signs of Bruxism"
                }],
                twoOption:[
                    {
                    english:"TMJ Disorder",
                    arabic:"TMJ Disorder"
                },
                ],
                threeOption:[
                    {
                        english:"Muscle Disorder",
                        arabic:"Muscle Disorder"
                    },
                ],
                
            },
        }
    },
}
</script>