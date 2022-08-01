<template>
  <div class="main-form" :class="{ 'arabic-content': local == 'ar' }">
    <div class="clinic-name w-100">
      <div class="row">
        <div class="col-md-4">
          <div class="label-wrapper d-flex align-items-center mb-2">
            <img
              src="../../../UI/icons/business/clinic_registeration/user.svg"
              alt=""
            />
            <label class="mx-1">{{ lang[local].name.label }}</label>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <div class="en-name mb-2">
                <InputText
                  type="text"
                  :placeholder="lang[local].name.englishPlaceholder"
                  v-model="data.name.english"
                  :class="{
                    'border-error':
                      $v.data.name.english.$invalid &&
                      $v.data.name.english.$dirty,
                  }"
                  @change="$v.data.name.english.$touch()"
                />
                <div class="errors">
                  <small
                    class="text-error"
                    v-if="
                      $v.data.name.english.$dirty &&
                      !$v.data.name.english.required
                    "
                  >
                    {{
                      errors.requiredErorr(lang[local].name.englishPlaceholder)
                    }}
                  </small>
                  <small
                    class="text-error"
                    v-else-if="
                      $v.data.name.english.$dirty &&
                      !$v.data.name.english.english
                    "
                  >
                    {{
                      errors.englishError(lang[local].name.englishPlaceholder)
                    }}
                  </small>
                  <small
                    class="text-error"
                    v-else-if="
                      $v.data.name.english.$dirty &&
                      !$v.data.name.english.minlen
                    "
                  >
                    {{
                      errors.minLengthError(
                        lang[local].name.englishPlaceholder,
                        $v.data.name.english.$params.minlen.min
                      )
                    }}
                  </small>
                  <small
                    class="text-error"
                    v-else-if="
                      $v.data.name.english.$dirty &&
                      !$v.data.name.english.maxlen
                    "
                  >
                    {{
                      errors.maxLengthError(
                        lang[local].name.englishPlaceholder,
                        $v.data.name.english.$params.maxlen.max
                      )
                    }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="ar-name mb-2">
                <InputText
                  type="text"
                  :class="{
                    'border-error':
                      $v.data.name.arabic.$invalid &&
                      $v.data.name.arabic.$dirty,
                  }"
                  @change="$v.data.name.arabic.$touch()"
                  v-model="data.name.arabic"
                  :placeholder="lang[local].name.arabicPlaceholder"
                >
                </InputText>
                <div class="errors">
                  <small
                    class="text-error"
                    v-if="
                      $v.data.name.arabic.$dirty &&
                      !$v.data.name.arabic.required
                    "
                  >
                    {{
                      errors.requiredErorr(lang[local].name.arabicPlaceholder)
                    }}
                  </small>
                  <small
                    class="text-error"
                    v-else-if="
                      $v.data.name.arabic.$dirty && !$v.data.name.arabic.arabic
                    "
                  >
                    {{ errors.arabicError(lang[local].name.arabicPlaceholder) }}
                  </small>
                  <small
                    class="text-error"
                    v-else-if="
                      $v.data.name.arabic.$dirty && !$v.data.name.arabic.minlen
                    "
                  >
                    {{
                      errors.minLengthError(
                        lang[local].name.arabicPlaceholder,
                        $v.data.name.arabic.$params.minlen.min
                      )
                    }}
                  </small>
                  <small
                    class="text-error"
                    v-else-if="
                      $v.data.name.arabic.$dirty && !$v.data.name.arabic.maxlen
                    "
                  >
                    {{
                      errors.maxLengthError(
                        lang[local].name.arabicPlaceholder,
                        $v.data.name.arabic.$params.maxlen.max
                      )
                    }}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="title">
      <div class="row">
        <div class="col-md-4">
          <div class="label-wrapper d-flex align-items-center mb-2">
            <img
              src="../../../UI/icons/business/clinic_registeration/award.svg"
              alt=""
            />
            <label class="mx-1">{{ lang[local].title.label }}</label>
          </div>
        </div>
        <div class="col-md-8">
          <div class="title-dropdown mb-2">
            <Dropdown
              :placeholder="lang[local].title.placeholder"
              :options="titleTypes"
              :optionLabel="local == 'ar' ? 'arabic' : 'english'"
              :class="{
                'border-error': $v.data.title.$invalid && $v.data.title.$error,
              }"
              v-model="data.title"
              @change="$v.data.title.$touch()"
            />
            <div class="errors">
              <small
                class="text-error"
                v-if="$v.data.title.$error && !$v.data.title.required"
              >
                {{ errors.requiredErorr(lang[local].type.placeholder) }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="branch-type w-100">
      <div class="row">
        <div class="col-md-4">
          <div class="label-wrapper d-flex align-items-center mb-2">
            <img
              src="../../../UI/icons/business/clinic_registeration/pin-2.svg"
              alt=""
            />
            <label class="mx-1">{{ lang[local].type.label }}</label>
          </div>
        </div>
        <div class="col-md-8">
          <div class="type-dropdown mb-2">
            <Dropdown
              :placeholder="lang[local].type.placeholder"
              :options="branchTypes"
              :optionLabel="local == 'ar' ? 'arabic' : 'english'"
              :class="{
                'border-error':
                  $v.data.branchType.$invalid && $v.data.branchType.$error,
              }"
              v-model="data.branchType"
              @change="$v.data.branchType.$touch()"
            />
            <div class="errors">
              <small
                class="text-error"
                v-if="$v.data.branchType.$error && !$v.data.branchType.required"
              >
                {{ errors.requiredErorr(lang[local].type.placeholder) }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-specialities w-100">
      <div class="row">
        <div class="col-md-4">
          <div class="label-wrapper d-flex align-items-center mb-2">
            <img
              src="../../../UI/icons/business/clinic_registeration/zoom-in.svg"
              alt=""
            />
            <label class="mx-1">{{ lang[local].sub.label }}</label>
          </div>
        </div>
        <div class="col-md-8">
          <div class="subspeciality-dropdown mb-2">
            <MultiSelect
              :options="subOptions"
              :optionLabel="local == 'ar' ? 'arabic' : 'english'"
              :placeholder="lang[local].sub.placeholder"
              :headerLabel="lang[local].sub.selectAll"
              :class="{
                'border-error':
                  $v.data.speciality.subspeciality.$invalid &&
                  $v.data.speciality.subspeciality.$error,
              }"
              v-model="data.speciality.subspeciality"
              @change="$v.data.speciality.subspeciality.$touch()"
            />
            <div class="errors">
              <small
                class="text-error"
                v-if="
                  $v.data.speciality.subspeciality.$error &&
                  !$v.data.speciality.subspeciality.required
                "
              >
                {{ errors.requiredErorr(lang[local].sub.placeholder) }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sevice-type w-100">
      <div class="row">
        <div class="col-md-4">
          <div class="label-wrapper d-flex align-items-center mb-2">
            <img
              src="../../../UI/icons/business/clinic_registeration/magic-wand.svg"
              alt=""
            />
            <label class="mx-1">{{ lang[local].service.label }}</label>
          </div>
        </div>
        <div class="col-md-8">
          <div class="service-type-dropdown mb-2">
            <MultiSelect
              :options="serviceTypes"
              :optionLabel="local == 'ar' ? 'arabic' : 'english'"
              :placeholder="lang[local].service.placeholder"
              :headerLabel="lang[local].service.selectAll"
              :class="{
                'border-error':
                  $v.data.serviceType.$invalid && $v.data.serviceType.$error,
              }"
              v-model="data.serviceType"
              @change="$v.data.serviceType.$touch()"
            >
            </MultiSelect>
            <div class="errors">
              <small
                class="text-error"
                v-if="
                  $v.data.serviceType.$error && !$v.data.serviceType.required
                "
              >
                {{ errors.requiredErorr(lang[local].service.placeholder) }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="description w-100">
      <div class="row">
        <div class="col-md-4">
          <div class="label-wrapper d-flex align-items-center mb-2">
            <img
              src="../../../UI/icons/business/clinic_registeration/message-2.svg"
              alt=""
            />
            <label class="mx-1">{{ lang[local].description.label }}</label>
          </div>
        </div>
        <div class="col-md-8">
          <div class="description-wrapper mb-2">
            <Textarea
              rows="2"
              v-model="data.description"
              :placeholder="lang[local].description.placeholder"
              :class="{
                'border-error':
                  $v.data.description.$invalid && $v.data.description.$dirty,
              }"
              @change="$v.data.description.$touch()"
            >
            </Textarea>
            <div class="errors">
              <!-- <small
                class="text-error"
                v-if="$v.data.description.$dirty && !$v.data.description.alpha"
              >
                {{ errors.alphaError(lang[local].description.placeholder) }}
              </small> -->
              <small
                class="text-error"
                v-if="$v.data.description.$dirty && !$v.data.description.minlen"
              >
                {{
                  errors.minLengthError(
                    lang[local].description.placeholder,
                    $v.data.description.$params.minlen.min
                  )
                }}
              </small>
              <small
                class="text-error"
                v-else-if="
                  $v.data.description.$dirty && !$v.data.description.maxlen
                "
              >
                {{
                  errors.maxLengthError(
                    lang[local].description.placeholder,
                    $v.data.description.$params.maxlen.max
                  )
                }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mainFormLang from "../../../mixins/business/clinic_registeration/mainFormLang.js";
import clinics from "../../../mixins/business/clinics";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
// alpha,
import { arabic, english } from "../../helpers/customValidators.js";
import {
  requiredErorr,
  minLengthError,
  maxLengthError,
  alphaError,
  arabicError,
  englishError,
} from "../../helpers/errors.js";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import MultiSelect from "../../../UI/components/form/MultiSelect.vue";
import Textarea from "primevue/textarea";
export default {
  mixins: [mainFormLang, clinics],
  components: {
    InputText,
    Dropdown,
    MultiSelect,
    Textarea,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    subOptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      branchTypes: [
        {
          arabic: "عيادة",
          english: "clinic",
        },
        {
          arabic: "مركز",
          english: "center",
        },
      ],
      titleTypes: [
        {
          arabic: "استاذ",
          english: "professor",
        },
        {
          arabic: "محاضر",
          english: "lecturer",
        },
        {
          arabic: "استشاري",
          english: "consultant",
        },
        {
          arabic: "اخصائي",
          english: "specialist",
        },
        {
          arabic: "استاذ مساعد",
          english: "assistant lecturer",
        },
      ],
      serviceTypes: [
        {
          arabic: "زيارة الفرع",
          english: "Branch Visit",
        },
        {
          arabic: "الرعاية الصحية عن بعد",
          english: "Telehealth",
        },
        {
          arabic: "زيارة منزلية",
          english: "Home Visit",
        },
      ],
      errors: {
        requiredErorr,
        minLengthError,
        maxLengthError,
        alphaError,
        arabicError,
        englishError,
      },
    };
  },
  validations: {
    data: {
      name: {
        arabic: {
          required,
          minlen: minLength(3),
          maxlen: maxLength(255),
          arabic(value) {
            return arabic(value);
          },
        },
        english: {
          required,
          minlen: minLength(3),
          maxlen: maxLength(255),
          english(value) {
            return english(value);
          },
        },
      },
      branchType: {
        required,
      },
      title: {
        required,
      },
      speciality: {
        subspeciality: {
          required,
        },
      },
      serviceType: {
        required,
      },
      description: {
        minlen: minLength(1),
        maxlen: maxLength(255),
        // alpha(value) {
        //   return alpha(value);
        // },
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.main-form {
  width: 100%;
}
</style>