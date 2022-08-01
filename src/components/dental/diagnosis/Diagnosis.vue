<template>
  <div class="tooth-diagnosis">
    <div>
      <h5 class="my-3">
        {{ lang[local].diagnosis.diagnosisActions.category }}
      </h5>
      <SelectButton
        v-model="data[selectedType.english].toothChart.category"
        :options="options[selectedType.english].diagnosisSubOptions"
        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
        class="d-flex justify-content-center flex-wrap"
      ></SelectButton>
    </div>
    <hr class="my-3" />
    <div class="category-type">
      <h5 class="my-3">
        {{ lang[local].diagnosis.diagnosisActions.categoryType }}
      </h5>
      <SelectButton
        class="f mx-3 diagnosis-actions-categoy-type"
        v-if="
        data[selectedType.english].toothChart.category.english!='Orto, Facial, TMJ' && 
        data[selectedType.english].toothChart.category.english!='Fraction / Damaged'&&
        data[selectedType.english].toothChart.category.english!='Restorative color'&&
        data[selectedType.english].toothChart.category.english!='Prevention Hygiene'&&
        data[selectedType.english].toothChart.category.english!='Other Surgery'
        
        
        "
        v-model="
          data[selectedType.english].toothChart.categoryType[
            data[selectedType.english].toothChart.category.english
          ]
        "
        :options="
          options[selectedType.english].diagnosisActions.categoryTypeActions[
            data[selectedType.english].toothChart.category.english
          ]
        "
        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
      ></SelectButton>
      
      <SelectButton
        class="f mx-3 diagnosis-actions-categoy-type"
        v-if="data[selectedType.english].toothChart.category.english=='Orto, Facial, TMJ'"
        v-model="
          data[selectedType.english].toothChart.categoryType.ortoFacialTMJ
        "
        :options="
          options[selectedType.english].diagnosisActions.categoryTypeActions.ortoFacialTMJ
        "
        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
      ></SelectButton>
      <SelectButton
        class="f mx-3 diagnosis-actions-categoy-type"
        v-if="data[selectedType.english].toothChart.category.english=='Restorative color'"
        v-model="
          data[selectedType.english].toothChart.categoryType.restorativeColor
        "
        :options="
          options[selectedType.english].diagnosisActions.categoryTypeActions.restorativeColor
        "
        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
      ></SelectButton>
      <SelectButton
        class="f mx-3 diagnosis-actions-categoy-type"
        v-if="data[selectedType.english].toothChart.category.english=='Prevention Hygiene'"
        v-model="
          data[selectedType.english].toothChart.categoryType.preventionHygiene
        "
        :options="
          options[selectedType.english].diagnosisActions.categoryTypeActions.preventionHygiene
        "
        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
      ></SelectButton>
      <SelectButton
        class="f mx-3 diagnosis-actions-categoy-type"
        v-if="data[selectedType.english].toothChart.category.english=='Other Surgery'"
        v-model="
          data[selectedType.english].toothChart.categoryType.otherSurgery
        "
        :options="
          options[selectedType.english].diagnosisActions.categoryTypeActions.otherSurgery
        "
        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
      ></SelectButton>
      <SelectButton
        class="f mx-3 diagnosis-actions-categoy-type"
        v-if="data[selectedType.english].toothChart.category.english=='Fraction / Damaged'"
        v-model="
          data[selectedType.english].toothChart.categoryType.fraction
        "
        :options="
          options[selectedType.english].diagnosisActions.categoryTypeActions.fraction
        "
        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
      ></SelectButton>
    </div>
    <hr class="my-3" />
    <div class="style">
      <h5 class="my-3">{{ lang[local].diagnosis.diagnosisActions.style }}</h5>
      <SelectButton
      v-if="
      data[selectedType.english].toothChart.category.english != 'orthodontic' &&
      data[selectedType.english].toothChart.category.english != 'fractures' &&
      data[selectedType.english].toothChart.category.english != 'Restorative color'&&
      data[selectedType.english].toothChart.category.english != 'Prevention Hygiene'&&
      data[selectedType.english].toothChart.category.english != 'Other Surgery'
      
      " 
        class="mx-3 diagnosis-actions-categoy-type"
        v-model="
          data[selectedType.english].toothChart.style[
            data.diagnosis.toothChart.category.english
          ]
        "
        :options="
          options[selectedType.english].diagnosisActions.styleActions[
            data[[selectedType.english]].toothChart.category.english
          ]
        "
        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
      ></SelectButton>
      <div v-if="data[selectedType.english].toothChart.category.english == 'orthodontic'">
        <SelectButton
      
        class="mx-3 diagnosis-actions-categoy-type"
        v-model="data[selectedType.english].toothChart.style.orthodontic.mainOption"
        :options="
          options[selectedType.english].diagnosisActions.styleActions.orthodontic[
            data[selectedType.english].toothChart.categoryType.orthodontic.english
          ]
        "
        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
      ></SelectButton>
      <div v-if="
              data[selectedType.english].toothChart.style.orthodontic.mainOption.english&& 
              data[selectedType.english].toothChart.style.orthodontic.mainOption.english!='internal'">
        <span>{{lang[local].diagnosis.diagnosis.orthodontic}}</span>
        <SelectButton
        
        class="mx-3 diagnosis-actions-categoy-type"
        v-model="data[selectedType.english].toothChart.style.orthodontic.type"
        :options="
          options[selectedType.english].diagnosisActions.styleActions.orthodontic.type
        "
        :optionLabel="local == 'ar' ? 'arabic' : 'english'"
      ></SelectButton>

      </div>
      </div>
      <div class="fractures" v-if="data[selectedType.english].toothChart.category.english == 'fractures'">
        <div v-if="data[selectedType.english].toothChart.categoryType.fractures.english=='Fracture'">
          <SelectButton
          
          class="mx-3 diagnosis-actions-categoy-type"
          v-model="data[selectedType.english].toothChart.style.fractures"
          :options="
            options[selectedType.english].diagnosisActions.styleActions.fractures.fructure
          "
          :optionLabel="local == 'ar' ? 'arabic' : 'english'"
        ></SelectButton>
        <div class="mx-2" v-if="data[selectedType.english].toothChart.selectedTooths.fractures.fructure.length">
            <h5>{{lang[local].teeth}} : <span>{{data[selectedType.english].toothChart.selectedTooths.fractures.fructure.join(" - ")}}</span></h5>
        </div>
        
        </div>
        <div v-else-if="data[selectedType.english].toothChart.categoryType.fractures.english=='Severely Damaged'">
          <SelectButton
          
          class="m-3 diagnosis-actions-categoy-type"
          v-model="data[selectedType.english].toothChart.style.fractures"
          :options="
            options[selectedType.english].diagnosisActions.styleActions.fractures.severelyDamaged
          "
          :optionLabel="local == 'ar' ? 'arabic' : 'english'"
        ></SelectButton>
        <div class="m-3" v-if="data[selectedType.english].toothChart.selectedTooths.fractures.severelyDamaged.length">
            <h5>{{lang[local].teeth}} : <span>{{data[selectedType.english].toothChart.selectedTooths.fractures.severelyDamaged.join(" - ")}}</span></h5>
        </div>
        </div>
        <div v-else-if="data[selectedType.english].toothChart.categoryType.fractures.english=='Wear'">
          <SelectButton
          
          class="mx-3 diagnosis-actions-categoy-type"
          v-model="data[selectedType.english].toothChart.style.fractures"
          :options="
            options[selectedType.english].diagnosisActions.styleActions.fractures.wear
          "
          :optionLabel="local == 'ar' ? 'arabic' : 'english'"
        ></SelectButton>
        <div class="m-3" v-if="data[selectedType.english].toothChart.selectedTooths.fractures.wear.length">
            <h5>{{lang[local].teeth}} : <span>{{data[selectedType.english].toothChart.selectedTooths.fractures.wear.join(" - ")}}</span></h5>
        </div>
        </div>

      </div>
      <div   v-if="data[selectedType.english].toothChart.category.english == 'Restorative color'" >
        <div >
          <SelectButton
          
          class="mx-3 diagnosis-actions-categoy-type"
          v-model="data[selectedType.english].toothChart.style.restorativeColor"
          :options="
            options[selectedType.english].diagnosisActions.styleActions.restorativeColor
          "
          :optionLabel="local == 'ar' ? 'arabic' : 'english'"
        ></SelectButton>
        <div class="m-3" v-if="data[selectedType.english].toothChart.selectedTooths.restorativeColor.length">
            <h5>{{lang[local].teeth}} : <span>{{data[selectedType.english].toothChart.selectedTooths.restorativeColor.join(" - ")}}</span></h5>
        </div>
        </div>

      </div>
      <div  v-if="data[selectedType.english].toothChart.category.english == 'Prevention Hygiene'" >
        <div class="m-3" v-if="data[selectedType.english].toothChart.selectedTooths.preventionHygiene.length">
            <h5>{{lang[local].teeth}} : <span>{{data[selectedType.english].toothChart.selectedTooths.preventionHygiene.join(" - ")}}</span></h5>
        </div>
      </div>
      <div  v-if="data[selectedType.english].toothChart.category.english == 'Other Surgery'" >
        <div class="m-3" v-if="data[selectedType.english].toothChart.selectedTooths.otherSurgery.length">
            <h5>{{lang[local].teeth}} : <span>{{data[selectedType.english].toothChart.selectedTooths.otherSurgery.join(" - ")}}</span></h5>
        </div>
      </div>
      
    </div>
    <hr class="my-3" />
    
  </div>
</template>
<script>
import DentalAdult from "../../../mixins/clinics/dentalAdult/DentalAdult";
// import diagnosisActions from "./diagnosisActions.vue";
// import proceduresAction from "./proceduresActions.vue";
import SelectButton from "primevue/selectbutton";
// import Tooths from "../Tooths.vue";
export default {
  props: ["data","selectedType"],
  mixins: [DentalAdult],
  components: {
    SelectButton,
    // Tooths,
    // diagnosisActions,
    // proceduresAction,
  },
  data() {
    return {
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      lang:{
        en:{
          teeth:"Selected Teeth",
        },
        ar:{
          teeth:"Selected Teeth",
        }
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.djagnosis-procedures {
  min-height: 450px;
}
h5 {
  font-size: 1.25em;
  font-weight: 500;
}
</style>