<template>
    <div>
        <div v-if="!isloading" class="mt-3 mx-3">
            <h2>{{ lang[local].title }}</h2>
            <SelectButton v-model="mainOption" :options="mainOptions" :optionLabel="local == 'ar' ? 'arabic' : 'english'"
                class="mx-3"></SelectButton>
            <MainDiagnosis :data.sync="data.diagnosis.mainDiagnosis" class="flex-grow-1 diagnosis-main"
                v-if="mainOption.id == 1" :diagnosisToPush="mainDiagnosisOptions"></MainDiagnosis>
            <Rx :data.sync="data.medicalRx" class="flex-grow-1 diagnosis-main" v-if="mainOption.id == 2"
                :prescriptionObject="initData.medicalRx" @restData="initData.medicalRx = { ...backUpData.medicalRx }">
            </Rx>
            <Obstetric :data.sync="data.obstetric" class="flex-grow-1 diagnosis-main" v-if="mainOption.id == 3"
                :antenatal="initData.antenatal" @restData="initData.antenatal = { ...backUpData.antenatal }"></Obstetric>
            <GYN :data.sync="data.gyn" class="flex-grow-1 diagnosis-main" v-if="mainOption.id == 4"
                :initData="initData.gyn" :backUpData="backUpData.gyn"></GYN>
            <Borns :data.sync="data.borns" class="flex-grow-1 diagnosis-main" v-if="mainOption.id == 5"
                :tableData="initData.borns" @restData="initData.borns = { ...backUpData.borns }"></Borns>
            <PregUs :data.sync="data.pregUs" class="flex-grow-1 diagnosis-main" v-if="mainOption.id == 6"></PregUs>
            <History :data.sync="data.history" class="flex-grow-1 diagnosis-main" v-if="mainOption.id == 7"></History>
            <PelvicUs :data.sync="data.pelvicUs" class="flex-grow-1 diagnosis-main" v-if="mainOption.id == 8">
            </PelvicUs>
            <UltrasoundsAndMedia :data.sync="data.ultrasoundsAndMedia" class="flex-grow-1 diagnosis-main"
                v-if="mainOption.id == 12"></UltrasoundsAndMedia>

            <div class="obgyn-actions-btns">
                <Button class="action-btn follow-case" icon="pi pi-eye"
                    :label="lang[local].btnsActions.followCase"></Button>
                <Button class="action-btn print" icon="pi pi-print" :label="lang[local].btnsActions.print"></Button>
                <Button class="action-btn done" icon="pi pi-check" :label="lang[local].btnsActions.done"
                    :disabled="notValid" @click="sendData"></Button>
                <Button class="action-btn cancel" icon="pi pi-times" :label="lang[local].btnsActions.cancel"></Button>
            </div>

        </div>
        <div class="loading" v-else>
            <ProgressSpinner />
        </div>
    </div>
</template>
 
<script>
import SelectButton from "primevue/selectbutton";
import dataObject from "../mixins/clinics/obgyn/dataObject";
import Button from "primevue/button";
import { CheckIfObjectChange } from "../components/helpers/checkIfDataObjectChanges";
import { convertFileToBase64 } from "../components/helpers/convertFileToBase64";
import axios from 'axios';
import ProgressSpinner from "primevue/progressspinner";
// import MainDiagnosis from "../components/obgyn/MainDiagnosis.vue";
// import Rx from "../components/obgyn/Rx.vue";
// import Obstetric from "../components/obgyn/Obstetric.vue";
// import GYN from "../components/obgyn/GYN.vue";
// import Borns from "../components/obgyn/Borns.vue";
// import PregUs from "../components/obgyn/PregUs.vue";
// import History from "../components/obgyn/History.vue";
// import PelvicUs from "../components/obgyn/PelvicUs.vue";
// import UltrasoundsAndMedia from "../components/obgyn/UltrasoundsAndMedia.vue";
// import DargAndDropFiles from "../components/shared/DargAndDropFiles.vue";
export default {
    components: {
        SelectButton,
        ProgressSpinner,
        MainDiagnosis: () => import("../components/obgyn/MainDiagnosis.vue"),
        Rx: () => import("../components/obgyn/Rx.vue"),
        Obstetric: () => import("../components/obgyn/Obstetric.vue"),
        GYN: () => import("../components/obgyn/GYN.vue"),
        Borns: () => import("../components/obgyn/Borns.vue"),
        PregUs: () => import("../components/obgyn/PregUs.vue"),
        History: () => import("../components/obgyn/History.vue"),
        PelvicUs: () => import("../components/obgyn/PelvicUs.vue"),
        UltrasoundsAndMedia: () => import("../components/obgyn/UltrasoundsAndMedia.vue"),
        Button,

    },
    mixins: [dataObject],
    data() {
        return {
            local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
            lang: {
                en: {
                    title: "OBJyn Clinic",
                    btnsActions: {
                        followCase: "follow case",
                        print: "print",
                        done: "done",
                        cancel: "cancel",

                    }
                },
                ar: {
                    title: "OBJyn Clinic",
                    btnsActions: {
                        followCase: "follow case",
                        print: "print",
                        done: "done",
                        cancel: "cancel",
                    }
                }
            },
            mainOptions: [
                { english: "Diagnosis", arabic: "Diagnosis", id: 1 },
                { english: "RX", arabic: "RX", id: 2 },
                { english: "Obstetric", arabic: "Obstetric", id: 3 },
                { english: "Gyn", arabic: "Gyn", id: 4 },
                { english: "Borns", arabic: "Borns", id: 5 },
                { english: "Preg.US", arabic: "Preg.US", id: 6 },
                { english: "History", arabic: "History", id: 7 },
                { english: "Pelvic.Us", arabic: "Pelvic.Us", id: 8 },
                { english: "Ultrasounds & media", arabic: "Ultrasounds & media", id: 12 },
                { english: "Form", arabic: "Form", id: 9 },
                { english: "Recall", arabic: "Recall", id: 10 },
                { english: "Billing", arabic: "Billing", id: 11 },
            ],
            mainOption: { english: "History", arabic: "History", id: 7 },
            mainDiagnosisOptions: {
                value: {
                    english: null,
                    arabic: null,
                    manualInsertion: null,
                }
            },
            isloading: false
        }
    },
    computed: {
        isNotMainDiagnosisValid() {
            return this.$store.getters.getOBJMainDignosisIsValid;
        },
        isNotRxValid() {
            return this.$store.getters.getOBJRxIsValid;
        },
        isNotRxObstetric() {
            return this.$store.getters.getOBJRxObstetricValid;
        },
        isNotGYNInfertilit() {
            return this.$store.getters.getOBJGYNInfertilitValid;
        },
        isNotGYNFolliculometry() {
            return this.$store.getters.getOBJGYNFolliculometryValid;
        },
        isNotGYNPID() {
            return this.$store.getters.getOBJGYNPIDValid;
        },
        isNotGYNContraception() {
            return this.$store.getters.getOBJGYNContraceptionValid;
        },
        isNotGYNperimenopausalBleedingValid() {
            return this.$store.getters.getOBJGYNperimenopausalBleedingValid;
        },
        isNotGYNPostMenopausalBleedingValid() {
            return this.$store.getters.getOBJGYNPostMenopausalBleedingValid;
        },
        isNotGYNBornsValid() {
            return this.$store.getters.getOBJBornsValid;
        },
        isNotGYNPregUsValid() {
            return this.$store.getters.getOBJPregUsValid;
        },
        isNotGYNPelvicUsValid() {
            return this.$store.getters.getOBJPelvicUsValid;
        },
        isNotGYNHistoryValid() {
            return this.$store.getters.getOBJHistoryValid;
        },
        isNotGYNgetOBJUltrasoundsAndMediaValid() {
            return this.$store.getters.getOBJUltrasoundsAndMediaValid;
        },
        notValid() {
            return this.isNotMainDiagnosisValid ||
                this.isNotRxValid ||
                this.isNotRxObstetric ||
                this.isNotGYNInfertilit ||
                this.isNotGYNFolliculometry ||
                this.isNotGYNPID ||
                this.isNotGYNContraception ||
                this.isNotGYNperimenopausalBleedingValid ||
                this.isNotGYNPostMenopausalBleedingValid ||
                this.isNotGYNBornsValid ||
                this.isNotGYNPregUsValid ||
                this.isNotGYNPelvicUsValid ||
                this.isNotGYNHistoryValid ||
                this.isNotGYNgetOBJUltrasoundsAndMediaValid

                ;
        },
        clinic() {
            return this.$store.getters.getClinicRegistrationData
        }
    },
    methods: {
        async sendData() {
            if (!this.notValid) {
                if (CheckIfObjectChange(this.mainDiagnosisOptions.value, { english: null, arabic: null, manualInsertion: null, }))
                    this.data.diagnosis.mainDiagnosis.mainDiagnosis.push(this.mainDiagnosisOptions.value)
                if (CheckIfObjectChange(this.initData.medicalRx, this.backUpData.medicalRx))
                    this.data.medicalRx.push({ ...this.initData.medicalRx })
                if (CheckIfObjectChange(this.initData.antenatal, this.backUpData.antenatal))
                    this.data.obstetric.antenatal.push({ ...this.initData.antenatal })
                if (CheckIfObjectChange(this.initData.gyn.folliculometry, this.backUpData.gyn.folliculometry))
                    this.data.gyn.folliculometry.otherData.push({ ...this.initData.gyn.folliculometry })
                if (CheckIfObjectChange(this.initData.gyn.pid, this.backUpData.gyn.pid))
                    this.data.gyn.pid.otherData.push({ ...this.initData.gyn.pid })
                if (CheckIfObjectChange(this.initData.gyn.contraception, this.backUpData.gyn.contraception))
                    this.data.gyn.contraception.otherData.push({ ...this.initData.gyn.contraception })
                if (CheckIfObjectChange(this.initData.gyn.perimenopausalBleeding, this.backUpData.gyn.perimenopausalBleeding))
                    this.data.gyn.perimenopausalBleeding.otherData.push({ ...this.initData.gyn.perimenopausalBleeding })
                if (CheckIfObjectChange(this.initData.gyn.postMenopausalBleeding, this.backUpData.gyn.postMenopausalBleeding))
                    this.data.gyn.postMenopausalBleeding.otherData.push({ ...this.initData.gyn.postMenopausalBleeding })
                if (CheckIfObjectChange(this.initData.borns, this.backUpData.borns))
                    this.data.borns.otherData.push({ ...this.initData.borns })
                if (CheckIfObjectChange(this.initData.borns, this.backUpData.borns))
                    this.data.borns.otherData.push({ ...this.initData.borns })
                let files = []
                if (this.data.ultrasoundsAndMedia.length) {
                    for (let i = 0; i < this.data.ultrasoundsAndMedia.length; i++) {
                        let file_obj = {
                            media: null,
                            comment: null
                        }
                        file_obj.comment = this.data.ultrasoundsAndMedia[i].comment
                        file_obj.media = await convertFileToBase64(this.data.ultrasoundsAndMedia[i].media)
                        files.push(file_obj)
                    }

                }
                let womanHealthFile = null
                if (this.data.obstetric.womanHealth.uploadFile)
                    womanHealthFile = await convertFileToBase64(this.data.obstetric.womanHealth.uploadFile)
                let data = {
                    patientId: 'f75a1a3d-f886-11ec-9613-f04da2381cc7',
                    ...this.data,
                    obstetric: {
                        ...this.data.obstetric,
                        womanHealth: {
                            ...this.data.obstetric.womanHealth,
                            uploadFile: womanHealthFile
                        }
                    },
                    ultrasoundsAndMedia: files
                }
                console.log(data)
                axios.post('/clinic/obstetric/createObstetric', data, {
                    headers: {
                        "clinic-id": this.clinic.id
                    }
                }).then(res => {
                    console.log(res);
                    // this.data = { ...this.restData };
                    // this.initData = { ...this.backUpData };
                    // this.mainDiagnosisOptions = {
                    //     value: {
                    //         english: null,
                    //         arabic: null,
                    //         manualInsertion: null
                    //     }
                    // }
                    // this.isloading = false;
                }).catch(error=>{
                    console.log(error)
                    this.isloading = false;
                })
            }
        },
    },
}
</script>
<style lang="scss" scoped>
.obgyn-actions-btns {
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    right: 20px;
    bottom: 20px;
    margin: 20px 0px;
    z-index: 10;

    .action-btn {
        min-width: 150px;
        margin-top: 10px;
    }

    .follow-case {
        background-image: linear-gradient(160deg,
                $gradient-color-3,
                $gradient-color-5 ) !important;
    }

    .print {
        background-image: linear-gradient(160deg,
                $secondary-color-2,
                $gradient-color-5 ) !important;
    }

    .cancel {
        background-image: linear-gradient(160deg,
                $gradient-color-6,
                $gradient-color-5 );

        &:hover {
            background-image: linear-gradient(160deg,
                    $gradient-color-6,
                    $gradient-color-5 );

        }
    }
}
</style>