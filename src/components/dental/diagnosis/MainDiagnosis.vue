<template>
  <div class="adult-tooth-main-diagnosis">
    <div class="input-wrapper d-flex align-items-start my-3">
      <label class="mx-3"> {{ lang[local].complaint }} </label>
      <div class="compaint flex-grow-1">
        <InputText class="mx-2 w-100" type="text" :placeholder="lang[local].complaint"
          @change="$v.data.complaint.$touch()" v-model="data.complaint" :class="{
            'border-error':$v.data.complaint.$invalid && $v.data.complaint.$dirty}" />
        <small class="text-error my-2" v-if="
          !$v.data.complaint.notContainsHtmlTags && $v.data.complaint.$dirty
        ">
          {{ errors.inputError(lang[local].complaint) }}
        </small>
        <small class="text-error my-2" v-else-if="!$v.data.complaint.minLen && $v.data.complaint.$dirty">
          {{
              errors.minLengthError(
                lang[local].complaint,
                $v.data.complaint.$params.minLen.min
              )
          }}
        </small>
        <small class="text-error my-2" v-else-if="!$v.data.complaint.maxLen && $v.data.complaint.$dirty">
          {{
              errors.maxLengthError(
                lang[local].complaint,
                $v.data.complaint.$params.maxLen.max
              )
          }}
        </small>
      </div>
    </div>
    <div class="input-wrapper d-flex align-items-start my-3">
      <label class="mx-3"> {{ lang[local].mainDiagnosis }} </label>
      <div class="main-diagnosis-input flex-grow-1">
        <div class="d-flex gap-2">
          <span class="mx-2" :class="local == 'ar' ? 'p-input-icon-right' : 'p-input-icon-left'">
            <i class="pi pi-search" />
            <AutoComplete field="name" :placeholder="lang[local].mainDiagnosis" :suggestions="mainDiagnosis"
              @item-select="getMainDiagnosis" @complete="searchDiagnosis" v-model="diagnosisToPush.manualInsertion" />
          </span>

          <div>
            <Button icon="pi pi-plus" :class="{ 'arabic-icon': local == 'ar' }" @click="addMainDiagnosis" :disabled="
            $v.diagnosisToPush.manualInsertion.$invalid ||
            !diagnosisToPush.manualInsertion
          " class="p-button-rounded" />
          </div>
        </div>

        <small class="text-error my-2" v-if="
          !$v.diagnosisToPush.manualInsertion.notContainsHtmlTags &&
          $v.diagnosisToPush.manualInsertion.$customdirty
        ">
          {{ errors.inputError(lang[local].mainDiagnosis) }}
        </small>
        <small class="text-error my-2" v-else-if="
          !$v.diagnosisToPush.manualInsertion.minLen &&
          $v.diagnosisToPush.manualInsertion.$customdirty
        ">
          {{
              errors.minLengthError(
                lang[local].mainDiagnosis,
                $v.diagnosisToPush.manualInsertion.$params.minLen.min
              )
          }}
        </small>
        <small class="text-error my-2" v-else-if="
          !$v.diagnosisToPush.manualInsertion.maxLen &&
          $v.diagnosisToPush.manualInsertion.$customdirty
        ">
          {{
              errors.maxLengthError(
                lang[local].mainDiagnosis,
                $v.diagnosisToPush.manualInsertion.$params.maxLen.max
              )
          }}
        </small>
      </div>
    </div>
    <div class="input-wrapper d-flex align-items-start my-3">
      <label class="mx-3"> {{ lang[local].details }} </label>
      <div class="details flex-grow-1">
        <InputText v-model="data.details" class="mx-2" type="text" :placeholder="lang[local].details"
          @change="$v.data.details.$touch()" :class="{
            'border-error': $v.data.details.$invalid && $v.data.details.$dirty,
          }" />
        <small class="text-error my-2" v-if="!$v.data.details.notContainsHtmlTags && $v.data.details.$dirty">
          {{ errors.inputError(lang[local].details) }}
        </small>
        <small class="text-error my-2" v-else-if="!$v.data.details.minLen && $v.data.details.$dirty">
          {{
              errors.minLengthError(
                lang[local].details,
                $v.data.details.$params.minLen.min
              )
          }}
        </small>
        <small class="text-error my-2" v-else-if="!$v.data.details.maxLen && $v.data.details.$dirty">
          {{
              errors.maxLengthError(
                lang[local].details,
                $v.data.details.$params.maxLen.max
              )
          }}
        </small>
      </div>
    </div>
    <div class="diagnosis-list mt-3 d-flex">
      <div class="diagnosis my-2 d-flex mx-3" v-for="(dia, index) in data.mainDiagnosis" :key="index">
        <div>
          <h6 class="p-2">{{ dia.manualInsertion }}</h6>
        </div>
        <div class="delete-diagnosis">
          <Button icon="pi pi-minus" class="p-button-rounded p-button-danger" :class="{ 'arabic-icon': local == 'ar' }"
            @click.prevent="deleteMainDiagnosis(index)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputText from "primevue/inputtext";
import { maxLength, minLength } from "vuelidate/lib/validators";
import AutoComplete from "primevue/autocomplete";
import Button from "primevue/button";
import {
  minLengthError,
  maxLengthError,
  inputError,
} from "../../helpers/errors";
import { notContainsHtmlTags } from "../../helpers/customValidators";
export default {
  props: ["data"],
  components: {
    InputText,
    AutoComplete,
    Button,
  },
  data() {
    return {
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      lang: {
        en: {
          complaint: "complaint",
          mainDiagnosis: "main diagnosis",
          details: "details",
        },
        ar: {
          complaint: "complaint",
          mainDiagnosis: "main diagnosis",
          details: "details",
        },
      },
      diagnosisToPush: {
        english: null,
        arabic: null,
        manualInsertion: null,
      },
      mainDiagnosis: [],
      errors: {
        minLengthError,
        maxLengthError,
        inputError,
      },
    };
  },

  validations: {
    data: {
      complaint: {
        minLen: minLength(2),
        maxLen: maxLength(100),
        notContainsHtmlTags(val) {
          if (!val) return true;
          return notContainsHtmlTags(val);
        },
      },
      details: {
        minLen: minLength(2),
        maxLen: maxLength(100),
        notContainsHtmlTags(val) {
          if (!val) return true;
          return notContainsHtmlTags(val);
        },
      },
    },
    diagnosisToPush: {
      manualInsertion: {
        minLen: minLength(1),
        maxLen: maxLength(100),
        notContainsHtmlTags(val) {
          if (!val) return true;
          return notContainsHtmlTags(val);
        },
      },
    },
  },
  watch: {
    "diagnosisToPush.manualInsertion"() {
      this.$v.diagnosisToPush.manualInsertion.$customdirty = true;
      this.$store.dispatch(
        "setMainDignosisIsValid",
        this.$v.data.$invalid || this.$v.diagnosisToPush.$invalid
      );
    },
    data: {
      handler() {
        this.$store.dispatch(
          "setMainDignosisIsValid",
          this.$v.data.$invalid || this.$v.diagnosisToPush.$invalid
        );
      },
      deep: true,
    },
    diagnosisToPush: {
      handler() {
        this.$store.dispatch(
          "setMainDignosisIsValid",
          this.$v.data.$invalid || this.$v.diagnosisToPush.$invalid
        );
      },
      deep: true,
    },
  },
  methods: {
    searchDiagnosis(val) {
      if (val) {
        setTimeout(() => {
          this.mainDiagnosis = [
            {
              name: "test",
            },
            {
              name: "test2",
            },
          ];
        }, 400);
      }
    },
    getMainDiagnosis(val) {
      if (val) this.addMainDiagnosis();
    },
    addMainDiagnosis() {
      if (this.diagnosisToPush.manualInsertion) {
        if (typeof this.diagnosisToPush.manualInsertion == "object")
          this.diagnosisToPush.manualInsertion =
            this.diagnosisToPush.manualInsertion.name;
        if (!this.$v.diagnosisToPush.manualInsertion.$invalid) {
          this.data.mainDiagnosis.push({ ...this.diagnosisToPush });
          this.diagnosisToPush = {
            english: null,
            arabic: null,
            manualInsertion: null,
          };
          this.$v.diagnosisToPush.manualInsertion.$reset();
        }
      }
    },
    deleteMainDiagnosis(index) {
      this.data.mainDiagnosis.splice(index, 1);
    },
  },
};
</script>
<style lang="scss" scoped>

.adult-tooth-main-diagnosis {
  .input-wrapper {
    max-width: 570px;

    label {
      width: 120px;
    }
  }

  .diagnosis-list {
    .diagnosis {
      background: #fff;
      padding: 10px;
      border-radius: 20px;
    }
  }
}
</style>