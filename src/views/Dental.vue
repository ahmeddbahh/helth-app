<template>
  <div
    class="dental-adult mt-3 mx-3"
    :class="{ 'arabic-content': local == 'ar' }"
  >
    <!-- <h3>{{ lang[local].title }}</h3> -->
    <div class="adult-child text-center d-flex gap-3 justify-content-center">
        <Button  
        :label="adultOrChild[0][local=='ar'?'arabic':'english']"
        class="not-selected"
        :class="{'active':adultOrChildSelect.english=='ADULT'}"
        @click="openDialog(adultOrChild[0])"

        />
        <Button  
        :label="adultOrChild[1][local=='ar'?'arabic':'english']"
        :class="{'active':adultOrChildSelect.english=='CHILD'}"
        @click="openDialog(adultOrChild[1])"
        class="not-selected"
        />
    </div>
    <div class="dental-main-options my-3">
      <SelectButton
        v-model="SelectedType"
        :options="mainOptions"
        :optionLabel="local=='ar'?'arabic':'english'"
        class="d-flex justify-content-center"
      />
    </div>
    <hr />
    <div class="d-flex justify-content-between">
      <h3>{{ local=='ar'? SelectedType.arabic: SelectedType.english}}</h3>
    </div>
    <div
      class="
        diagnosis-dental-content
        d-flex
        justify-content-start
        flex-wrap-reverse flex-md-nowrap
        my-3
      "
      v-if="SelectedType.id == 1 || SelectedType.id == 2 ||  SelectedType.id == 4"
    > 
      <div class="flex-grow-1 ">
        <MainDiagnosis
          :data.sync="data.diagnosis.mainDiagnosis"
          class="flex-grow-1 diagnosis-main"
          v-if="diagnosisMainOptionSelected.id == 1 && SelectedType.id == 1 "
        ></MainDiagnosis>
        <Diagnosis
          :data.sync="data"
          :selectedType.sync="SelectedType"
          class="flex-grow-1 diagnosis-tooth-chart-options"
          v-if="(SelectedType.id == 1 &&diagnosisMainOptionSelected.id == 2) || (SelectedType.id == 2 &&operationMainOptionSelected.id == 2 ) || (SelectedType.id == 4 && planingMainOptionSelected.id == 2 )"
        ></Diagnosis>
        
        <div v-if="data[SelectedType.english].toothChart.category.english =='Orto, Facial, TMJ' ">
          <OrtoFacialTMJ :data.sync="data[SelectedType.english].toothChart"></OrtoFacialTMJ>
        </div>
        <div  v-if="diagnosisMainOptionSelected.id == 2 || diagnosisMainOptionSelected.id == 3 || operationMainOptionSelected.id == 2 || planingMainOptionSelected.id==2 ||planingMainOptionSelected.id==3 || operationMainOptionSelected.id == 3  ">
          <div class="tooths" v-if="
            ((SelectedType.id == 1 &&diagnosisMainOptionSelected.id != 1) ||
            (SelectedType.id == 2 &&operationMainOptionSelected.id == 2) ||
            (SelectedType.id == 2 &&operationMainOptionSelected.id == 3)||
            (SelectedType.id == 4 &&planingMainOptionSelected.id == 2) ||
            (SelectedType.id == 4 &&planingMainOptionSelected.id == 3)
            
            )&&
            data[SelectedType.english].toothChart.category.english !='Orto, Facial, TMJ'&&
            !(data[SelectedType.english].toothChart.category.english =='implant'&&data[SelectedType.english].toothChart.categoryType.implant.english == 'Full arch Implants/Denture')
            
            ">
            <h5>{{ lang[local].diagnosis.diagnosisActions.tooths }}</h5>
            <Tooths v-if="adultOrChildSelect.english == 'ADULT'" :gallarAndXray="gallarAndXray" :selectedType.sync="SelectedType" @selectedTooth="getSelectedTooth" :toothNumbers.sync="toothNumbers" :action.sync="data[SelectedType.english].toothChart"></Tooths>
            <ChildThooths v-if="adultOrChildSelect.english == 'CHILD'" :gallarAndXray="gallarAndXray" :selectedType.sync="SelectedType" @selectedTooth="getSelectedTooth" :toothNumbers.sync="toothNumbers" :action.sync="data[SelectedType.english].toothChart"></ChildThooths>
          </div>
        </div>
        <div  v-if="diagnosisMainOptionSelected.id == 2 || diagnosisMainOptionSelected.id == 3 || operationMainOptionSelected.id == 2||planingMainOptionSelected.id==2 || operationMainOptionSelected.id == 3 ||planingMainOptionSelected.id==3  ">
          <div class="tooths" v-if="
            ((SelectedType.id == 1 &&diagnosisMainOptionSelected.id != 1) ||
            (SelectedType.id == 2 &&operationMainOptionSelected.id == 2) ||
            (SelectedType.id == 2 &&operationMainOptionSelected.id == 3)||
            (SelectedType.id == 4 &&planingMainOptionSelected.id == 2) ||
            (SelectedType.id == 4 &&planingMainOptionSelected.id == 3)
            )&&
            data[SelectedType.english].toothChart.category.english !='Orto, Facial, TMJ'&&
            (data[SelectedType.english].toothChart.category.english =='implant'&&data[SelectedType.english].toothChart.categoryType.implant.english == 'Full arch Implants/Denture')
            
            ">
            <Implant :data.sync="data" :selectedType="SelectedType.english"></Implant>
          </div>
        </div>
        <div  class="djagnosis-procedures"
              v-if="(SelectedType.id == 1 &&diagnosisMainOptionSelected.id == 2) || 
                  (SelectedType.id == 2 && operationMainOptionSelected.id == 2) || 
                  (SelectedType.id == 4 && planingMainOptionSelected.id == 2)
                  ">
            <div class="djangosis-actions">
              <diagnosisActions  :data.sync="data" :selectedType.sync="SelectedType"></diagnosisActions>
            </div>
            <div class="diagnosis-actions-categoy-type">
              <proceduresAction :selectedType.sync="SelectedType" :data.sync="data"></proceduresAction>
          </div>
        </div>
        <div
          class="flex-grow-1 diagnosis-gallary-xrays"
          v-if="
            (SelectedType.id == 2 && operationMainOptionSelected.id==3) || 
            (SelectedType.id == 4 && planingMainOptionSelected.id==3) || 
            SelectedType.id == 1 && diagnosisMainOptionSelected.id == 3 
            "
        > 
          
          <GallaryAndXray :imagesErrors="imagesErrors" :selectedTooth="selectedTooth" :toothNumbers.sync="toothNumbers"></GallaryAndXray>
        </div>
      </div>
      <div class="diagonsis-main-options" >
        <SelectButton
          v-if="SelectedType.id == 1"
          v-model="diagnosisMainOptionSelected"
          :options="options.main.diagnosis"
          :optionLabel="local=='ar'?'arabic':'english'"
          />
        <SelectButton
        v-if="SelectedType.id == 2 "
          v-model="operationMainOptionSelected"
          :options="options.main.operations"
          :optionLabel="local=='ar'?'arabic':'english'"
        />
        <SelectButton
        v-if="SelectedType.id == 4 "
          v-model="planingMainOptionSelected"
          :options="options.main.operations"
          :optionLabel="local=='ar'?'arabic':'english'"
        />
      </div>
    </div>
    <div class="dental-lab-componet" v-if="SelectedType.id == 3">
      <Lab :imagesErrors="imagesErrors" :data="data"></Lab>
    </div>
    <div v-if="SelectedType.id == 5">
      <DSanner :data="data.threeDScanner" @notValid="notValid3dInput"></DSanner>

    </div>
    
      

    <div class="adult-tooths-actions-btns">
      <Button
        class="action-btn follow-case"
        icon="pi pi-eye"
        :label="lang[local].btnsActions.followCase"
      ></Button>
      <Button
        class="action-btn print"
        icon="pi pi-print"
        :label="lang[local].btnsActions.print"
      ></Button>
      <Button
        class="action-btn done"
        icon="pi pi-check"
        :label="lang[local].btnsActions.done"
        :disabled="notValid||notValid3d"
        @click="sendData"
      ></Button>
      <Button
        class="action-btn cancel"
        icon="pi pi-times"
        :label="lang[local].btnsActions.cancel"
      ></Button>
    </div>
    <Dialog
      :visible.sync="displayModel"
      :modal="true"
      :breakpoints="{'960px': '75vw'}" 
      :style="{width: '50vw'}"
      :header="lang[local].dialog.header"
      :closable="false"
      
    >
      <p >  
        {{lang[local].dialog.body}}
      </p>
      <template #footer>
        <Button
          :label="lang[local].dialog.ok"
          class="p-button-rounded py-3 mt-3 px-5"
          @click="changeAdultOrChild"
          
        />
        <Button
          :label="lang[local].dialog.cancel"
          class="p-button-rounded py-3 mt-3 px-5 cancel"
          @click="displayModel = false"
          
        />
      </template>
    </Dialog>
  </div>
</template>
<script >
import DentalAdult from "../mixins/clinics/dentalAdult/DentalAdult";
import dataObject from "../mixins/clinics/dentalAdult/dataObject";
import {adultToothObject , childToothObject} from "../components/helpers/toothObject";

// import Diagnosis from "../components/dental/diagnosis/Diagnosis.vue";
// import diagnosisActions from "../components/dental/diagnosis/diagnosisActions.vue";
// import proceduresAction from "../components/dental/diagnosis/proceduresActions.vue";
// import MainDiagnosis from "../components/dental/diagnosis/MainDiagnosis.vue";
// import GallaryAndXray from "../components/dental/diagnosis/GallaryAndXray.vue";
// import Tooths from "../components/dental/Tooths.vue" ; 
// import ChildThooths from "../components/dental/ChildThooths.vue" ; 
// import Implant from "../components/dental/diagnosis/Implant.vue" ; 
// import OrtoFacialTMJ from "../components/dental/diagnosis/OrtoFacialTMJ.vue" ; 
// import Lab from "../components/dental/Lab.vue" ; 
// import DSanner from "../components/dental/3DScanner" ; 
import { restData } from "../components/helpers/thoothData";

import SelectButton from "primevue/selectbutton";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import { convertFileToBase64 } from "../components/helpers/convertFileToBase64";


export default {
  mixins: [DentalAdult, dataObject],
 
  components: {
    SelectButton,
    Button,
    Dialog,
    Diagnosis:()=>import("../components/dental/diagnosis/Diagnosis.vue"),
    MainDiagnosis:()=>import("../components/dental/diagnosis/MainDiagnosis.vue"),
    GallaryAndXray:()=>import("../components/dental/diagnosis/GallaryAndXray.vue"),
    Tooths:()=>import( "../components/dental/Tooths.vue"),
    ChildThooths:()=>import("../components/dental/ChildThooths.vue"),
    diagnosisActions:()=>import("../components/dental/diagnosis/diagnosisActions.vue"),
    proceduresAction:()=>import( "../components/dental/diagnosis/proceduresActions.vue"),
    Implant:()=>import("../components/dental/diagnosis/Implant.vue"),
    OrtoFacialTMJ:()=>import("../components/dental/diagnosis/OrtoFacialTMJ.vue" ),
    Lab:()=>import("../components/dental/Lab.vue" ),
    DSanner:()=>import("../components/dental/3DScanner.vue")
    
  },
  data() {
    return {
      toothNumbers: adultToothObject(),
      selectedTooth:null,
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      SelectedType: null,
      diagnosisMainOptionSelected: null,
      operationMainOptionSelected:null,
      planingMainOptionSelected:null,
      gallarAndXray:false,
      imagesErrors:{
        type:false,
        size:false
      },
      adultOrChild:[
        {
          english:"ADULT",
          arabic:"ADULT",
        },
        {
          english:"CHILD",
          arabic:"CHILD",
        }
      ],
      adultOrChildSelect:{
          english:"ADULT",
          arabic:"ADULT",
        },
      selectedAdultOrChild:null ,
      oldAdultOrChildSelect:null,
      AdultOrChildChanged:false,
      displayModel:false,
      notValid3d:false,
    };
  },
  created() {
    this.data.adultOrChild = this.adultOrChildSelect
    this.SelectedType = this.mainOptions[0];
    this.diagnosisMainOptionSelected =this.options.main.diagnosis[0];
    this.operationMainOptionSelected =this.options.main.operations[0];
    this.planingMainOptionSelected =this.options.main.planing[0];
    this.data.diagnosis.toothChart.category =
    this.options.diagnosis.diagnosisSubOptions[0];
  },
  computed: {
    isNotMainDiagnosisValid() {
      return this.$store.getters.getMainDignosisIsValid;
    },
    isNotLabToothisValid() {
      return this.$store.getters.getToothLabIsValid;
    },
    isNotLabToothCrownDesignisValid() {
      return this.$store.getters.getToothLabCrownDesignIsValid;
    },
    isNotLabToothCaseDesignisValid() {
      return this.$store.getters.getToothLabCaseDesignIsValid;
    },
    isNotLabSpecificInstactionsisValid() {
      return this.$store.getters.getToothLabSpecificInstructionsIsValid;
    },
    isNotLabNightguardsSplintsisValid() {
      return this.$store.getters.getToothLabNightguardsSplintsIsValid;
    },
    isNotLabOtherisValid() {
      return this.$store.getters.getToothLabOtherIsValid;
    },
    isNotLabScrewisValid() {
      return this.$store.getters.getToothLabScrewIsValid;
    },
    isNotLabImpantCrownDesignisValid() {
      return this.$store.getters.getToothLabImplantRxCrownDesignIsValid;
    },
    isNotLabRataienrsisValid() {
      return this.$store.getters.getToothLabRatainersIsValid;
    },
    notValid() {
      return this.isNotMainDiagnosisValid 
      || this.isNotLabToothisValid 
      || this.isNotLabToothCrownDesignisValid 
      || this.isNotLabSpecificInstactionsisValid 
      || this.isNotLabToothCaseDesignisValid
      || this.isNotLabNightguardsSplintsisValid
      || this.isNotLabOtherisValid
      || this.isNotLabScrewisValid
      || this.isNotLabImpantCrownDesignisValid
      || this.isNotLabRataienrsisValid
      ;
    },
  },
  methods:{
    notValid3dInput(val){
        this.notValid3d = val
    },
    getSelectedTooth(value){
      this.selectedTooth = value;
    },
    changeAdultOrChild(){
      if(this.displayModel){
        if(this.selectedAdultOrChild.english == 'ADULT'){
          this.SelectedType = this.mainOptions[0];
            this.toothNumbers = adultToothObject()
          }
          else if(this.selectedAdultOrChild.english == 'CHILD'){
            this.toothNumbers = childToothObject()
          }
          
          this.data = restData() ;
          this.adultOrChildSelect = {...this.selectedAdultOrChild} ;
          this.data.adultOrChild = this.adultOrChildSelect

      }
        this.displayModel = false ; 
        
    },
    openDialog(value){
      if(value.english != this.adultOrChildSelect.english ){
        this.selectedAdultOrChild = value ; 
        this.displayModel = true ;
      }
    },
    closeModel(){
      this.AdultOrChildChanged = true ;
      if(this.adultOrChildSelect.english == 'ADULT'){
          this.adultOrChildSelect = {
            english:"CHILD",
            arabic:"CHILD"
          }
        }
        else if(this.adultOrChildSelect.english == 'CHILD'){
          this.adultOrChildSelect = {
            english:"ADULT",
            arabic:"ADULT"
          }
        }
      
      this.displayModel = false ;
      this.data.adultOrChild = this.adultOrChildSelect ;

    },
    async sendData(){
      if(!(this.notValid||this.imagesErrors.type||this.imagesErrors.size||this.notValid3d)){
        let labFormFiles = []
        let implantRxFiles = []
        let orthodontalFiles = []
        let removableFiles = []
        if(this.data.lab.labForm.specificInstructions.fileSrc.length){
          for(let i = 0 ; i < this.data.lab.labForm.specificInstructions.fileSrc.length;i++){
            let base = await convertFileToBase64(this.data.lab.labForm.specificInstructions.fileSrc[i].rawFile)
            labFormFiles.push(base)
          }
        }
        if(this.data.lab.implantRx.specificInstructions.fileSrc.length){
          for(let i = 0 ; i < this.data.lab.implantRx.specificInstructions.fileSrc.length;i++){
            let base = await convertFileToBase64(this.data.lab.implantRx.specificInstructions.fileSrc[i].rawFile)
            implantRxFiles.push(base)
          }
        }
        if(this.data.lab.orthodontal.specificInstructions.fileSrc.length){
          for(let i = 0 ; i < this.data.lab.orthodontal.specificInstructions.fileSrc.length;i++){
            let base = await convertFileToBase64(this.data.lab.orthodontal.specificInstructions.fileSrc[i].rawFile)
            orthodontalFiles.push(base)
          }
        }
        if(this.data.lab.removableProsthetic.specificInstructions.fileSrc.length){
          for(let i = 0 ; i < this.data.lab.removableProsthetic.specificInstructions.fileSrc.length;i++){
            let base = await convertFileToBase64(this.data.lab.removableProsthetic.specificInstructions.fileSrc[i].rawFile)
            removableFiles.push(base)
          }
        }
        let data = {
          ...this.data,
          lab:{
            ...this.data.lab,
            labForm:{
              ...this.data.lab.labForm,
              specificInstructions:{
                ...this.data.lab.labForm.specificInstructions,
                fileSrc:labFormFiles
              }
              
            },
            implantRx:{
              ...this.data.lab.implantRx,
              specificInstructions:{
                ...this.data.lab.implantRx.specificInstructions,
                fileSrc:implantRxFiles
              }
            },
            orthodontal:{
              ...this.data.lab.orthodontal,
              specificInstructions:{
                ...this.data.lab.orthodontal.specificInstructions,
                fileSrc:orthodontalFiles
              }
            },
            removableProsthetic:{
              ...this.data.lab.removableProsthetic,
              specificInstructions:{
                ...this.data.lab.removableProsthetic.specificInstructions,
                fileSrc:removableFiles
              }
            },
          }
        }
        console.log(data);
      }
    }
    
  },
  watch:{
    "diagnosisMainOptionSelected.id"(){
      if(this.diagnosisMainOptionSelected.id==3) 
      this.gallarAndXray = true 
      else 
      this.gallarAndXray = false 
      
    },
    "data.adultOrChild"(){
      this.data.lab.orthodontal.springAligners.adultOrChild = {...this.data.adultOrChild}
      this.data.lab.removableProsthetic.adultOrChild = {...this.data.adultOrChild}
    },
    SelectedType:{
      handler(){
        if(this.SelectedType.id==1||this.SelectedType.id==2 || this.SelectedType == 4){
          this.data.diagnosis.toothChart.category={
              english:null,
              arabic:null

          }
          this.data.operations.toothChart.category={
              english:null,
              arabic:null
          }
        }
      },
      deep:true
    },
    operationMainOptionSelected:{
      handler(){
        if(this.operationMainOptionSelected.id==3 && this.data[this.SelectedType.english].toothChart.category.english=='Orto, Facial, TMJ')
            this.data[this.SelectedType.english].toothChart.category ={
              english:null,
              arabic:null
          }
      },
      deep:true
    },
    planingMainOptionSelected:{
      handler(){
        if(this.planingMainOptionSelected.id==3 && this.data[this.SelectedType.english].toothChart.category.english=='Orto, Facial, TMJ')
            this.data[this.SelectedType.english].toothChart.category ={
              english:null,
              arabic:null
          }
      },
      deep:true
    },
    diagnosisMainOptionSelected:{
      handler(){
        if(this.diagnosisMainOptionSelected.id==3 && this.data[this.SelectedType.english].toothChart.category.english=='Orto, Facial, TMJ')
          this.data[this.SelectedType.english].toothChart.category ={
              english:null,
              arabic:null
          }
      },
      deep:true
    },

  },

};
</script>
<style lang="scss" >
.dental-adult {
  .not-selected{
    background: transparent;
    color:$name-color ;
    border:3px solid $tradmark-color ;
  }
  .not-selected:hover{
    color:#fff ;
  }
  .not-selected.active {
    background: $tradmark-color;
    color:#fff ;
  }
  
  .adult-tooths-actions-btns {
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
      background-image: linear-gradient(
        160deg,
        $gradient-color-3,
        $gradient-color-5
      ) !important;
    }
    .print {
      background-image: linear-gradient(
        160deg,
        $secondary-color-2,
        $gradient-color-5
      ) !important;
    }
    .cancel {
      background-image: linear-gradient(
        160deg,
        $gradient-color-6,
        $gradient-color-5
      );
      &:hover{
        background-image: linear-gradient(
        160deg,
        $gradient-color-6,
        $gradient-color-5
      );

      }
    }
  }
  .diagonsis-main-options {
    .p-selectbutton {
      .p-button {
        border: none;
        border-radius: 34px !important;
        background: $secondary-color-5;
        color: #ffff;
        margin: 10px;
        width: 230px;
        display: block;
        &:hover {
          background: $secondary-color-5 !important;
          color: #ffff !important;
        }
      }
      .p-highlight {
        background: $tradmark-color !important;
        &:hover {
          background: $tradmark-color !important;
        }
      }
    }
  }
  .cancel {
      background-image: linear-gradient(
        160deg,
        $gradient-color-6,
        $gradient-color-5
      );
      &:hover{
        background-image: linear-gradient(
        160deg,
        $gradient-color-6,
        $gradient-color-5
      ) !important;

      }
    }
  h5 {
  font-size: 1.25em;
  font-weight: 500;
  }
}
</style>

