<template>
  <div
    class="diagnosis"
    v-if="
      data[selectedType.english].toothChart.diagnosis[
        data[selectedType.english].toothChart.category.english
      ]
    "
  >
    <hr />
    <h5>{{ lang[local].diagnosis.diagnosisActions.diagnosis }}</h5>
    <SelectButton
      class="mx-3 diagnosis-actions-categoy-type"
      v-model="
        data[selectedType.english].toothChart.diagnosis[
          data[selectedType.english].toothChart.category.english
        ].mainOption
      "
      :options="
        options.diagnosis.diagnosisActions.diagnosisAction[
          data[selectedType.english].toothChart.category.english
        ]
      "
      :optionLabel="local == 'ar' ? 'arabic' : 'english'"
    ></SelectButton>
    <div
      class="diagnosis-suboptions"
      v-if="
        data[selectedType.english].toothChart.diagnosis[
          data[selectedType.english].toothChart.category.english
        ]
      "
    >
      <div
        v-for="(value, key) in options.diagnosis.diagnosisSubAction[
          data[selectedType.english].toothChart.category.english
        ][
          data[selectedType.english].toothChart.diagnosis[
            data[selectedType.english].toothChart.category.english
          ].mainOption.english
        ]"
        :key="key"
      >
        <div
          class="m-4 d-flex flex-wrap justify-content-start align-items-center"
        >
          <h6 class="mx-3">{{ lang[local].diagnosis.diagnosis[key] }}</h6>
          <SelectButton
            class="mx-3 diagnosis-actions-categoy-type"
            v-model="
              data[selectedType.english].toothChart.diagnosis[
                data[selectedType.english].toothChart.category.english
              ].subOptions[
                data[selectedType.english].toothChart.diagnosis[
                  data[selectedType.english].toothChart.category.english
                ].mainOption.english
              ][key]
            "
            :options="value"
            :multiple="true"
            :optionLabel="local == 'ar' ? 'arabic' : 'english'"
          ></SelectButton>
        </div>
      </div>
      <div
        class="diangonsis-note m-4 col-md-6 d-flex"
        v-if="
          data[selectedType.english].toothChart.diagnosis[
            data[selectedType.english].toothChart.category.english
          ].subOptions[
            data[selectedType.english].toothChart.diagnosis[
              data[selectedType.english].toothChart.category.english
            ].mainOption.english
          ]
        "
      >
        <InputText
          type="text"
          v-model="
            data[selectedType.english].toothChart.diagnosis[
              data[selectedType.english].toothChart.category.english
            ].subOptions[
              data[selectedType.english].toothChart.diagnosis[
                data[selectedType.english].toothChart.category.english
              ].mainOption.english
            ].other
          "
          :placeholder="lang[local].diagnosis.diagnosis.other"
        ></InputText>
      </div>
    </div>
  </div>
</template>
<script>
import DentalAdult from "../../../mixins/clinics/dentalAdult/DentalAdult";

import SelectButton from "primevue/selectbutton";

import InputText from "primevue/inputtext";
export default {
  props: ["data","selectedType"],
  mixins: [DentalAdult],
  components: {
    SelectButton,
    InputText,
  },
  data() {
    return {
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
    };
  },
};
</script>