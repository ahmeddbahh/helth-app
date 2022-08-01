<template>
  <div class="phone-section col-lg-6">
    <div class="input-wrapper">
      <label>{{ lang[local].phone.label }}</label>
      <div class="d-flex align-items-center flex-wrap gap-3">
        <div class="flex-grow-1">
          <VuePhoneNumberInput
            v-model.trim="mobileNumber"
            @update="results = $event"
            default-country-code="EG"
            @input="getPhoneNumber"
            :class="{
              'border-error':
                $v.mobileNumber.$invalid && $v.mobileNumber.$customDirty,
            }"
            :disabled="data.phone.length == 3"
          />
        </div>
        <div class="add-phone">
          <Button
            icon="pi pi-plus"
            class="p-button-rounded"
            @click.prevent="addPhone"
            :disabled="$v.mobileNumber.$invalid || $v.data.phone.$invalid"
          />
        </div>
      </div>
      <div class="hint mt-2">
        <span
          ><mark>{{ lang[local].phone.hint.label }} </mark> :
          {{ lang[local].phone.hint.content }}</span
        >
      </div>
      <div class="errors mt-2">
        <small
          class="text-error"
          v-if="$v.mobileNumber.$customDirty && !$v.mobileNumber.requiredIf"
          >{{ errors.requiredErorr(lang[local].phone.label) }}</small
        >
        <small
          class="text-error"
          v-else-if="
            $v.mobileNumber.$customDirty && !$v.mobileNumber.validPhone
          "
          >{{ errors.inputError(lang[local].phone.label) }}</small
        >
        <small
          class="text-error"
          v-else-if="
            $v.mobileNumber.$customDirty && !$v.mobileNumber.uniquePhone
          "
          >{{ errors.notExistError(lang[local].phone.label) }}</small
        >
      </div>
    </div>
    <div class="phone-list mt-3">
      <div
        v-for="(num, index) in data.phone"
        :key="index"
        class="phone my-2 d-flex justify-content-between align-items-center"
      >
        <div>
          <h6 class="p-2">{{ num.nationalNumber }}</h6>
        </div>
        <div class="delete-phone">
          <Button
            icon="pi pi-minus"
            class="p-button-rounded p-button-danger"
            @click.prevent="deletePhone(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import phoneSectionLang from "../../../mixins/business/clinic_registeration/phoneSectionLang.js";
import httpErrorCodesHandling from "../../../mixins/httpErrors/httpErrorCodesHandling.js";
import {
  inputError,
  requiredErorr,
  maxLengthError,
  notExistError,
} from "../../helpers/errors.js";
import { required, maxLength } from "vuelidate/lib/validators";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import Button from "primevue/button";
import axios from "axios";
export default {
  mixins: [phoneSectionLang, httpErrorCodesHandling],
  props: {
    data: {
      type: Object,
      required: true,
    },
    initPhone: {
      type: Object,
      required: true,
    },
  },
  components: {
    VuePhoneNumberInput,
    Button,
  },
  data() {
    return {
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      errors: {
        requiredErorr,
        inputError,
        maxLengthError,
        notExistError,
      },
      mobileNumber: "fdgdsf",
      // phone:{
      //     phoneNumber:'',
      //     nationalNumber:''
      // },
      isPhoneValid: true,
    };
  },
  validations: {
    data: {
      phone: {
        maxLen: maxLength(2),
        $each: {
          phoneNumber: {
            required,
          },
          nationalNumber: {
            required,
          },
        },
      },
    },
    mobileNumber: {
      requiredIf(value, vm) {
        if (!vm.data.phone.length && !value) return false;
        return true;
      },
      validPhone(value, vm) {
        if (!value) return true;
        return vm.isPhoneValid;
      },
      uniquePhone(value, vm) {
        if (!value || !vm.results || !vm.data.phone.length) return true;
        let phoneNumber = vm.results.formattedNumber;
        let status = true;
        vm.data.phone.forEach((phone) => {
          if (phone.nationalNumber == phoneNumber) status = false;
        });
        return status;
      },
    },
  },
  watch: {
    mobileNumber() {
      if (this.mobileNumber) {
        this.$v.mobileNumber.$customDirty = true;
        this.initPhone.mobileNumber = this.mobileNumber;
      }
    },
  },
  mounted() {
    document
      .querySelector(".input-tel__input")
      .setAttribute("placeholder", this.lang[this.local].phone.placeholder);
    document.querySelector(".input-tel__label").innerHTML =
      this.lang[this.local].phone.placeholder;
  },
  methods: {
    invalidPhone() {
      if (this.$v.mobileNumber.$invalid || this.$v.data.phone.$invalid) {
        return true;
      } else {
        return false;
      }
    },
    getPhoneNumber() {
      this.isPhoneValid = this.results.isValid;
      if (this.results.isValid) {
        // console.log(this.results)
        this.initPhone.init.phoneNumber = this.results.formatNational.replace(
          /\s/g,
          ""
        );
        this.initPhone.init.nationalNumber = this.results.formattedNumber;
        this.$emit("chechPhone", true);
        setTimeout(() => {
          axios
            .post("/clinicRegistration/checkPhone", this.initPhone.init)
            .then((res) => {
              // console.log(res)
              this.isPhoneValid = res.data.isPhoneValid;
              this.$emit("chechPhone", false);
            })
            .catch((err) => {
              console.log(err);
              this.httpErrorCodesHandling(err);
            });
        }, 400);
      }
    },
    addPhone() {
      if (!(this.$v.mobileNumber.$invalid || this.$v.data.phone.$invalid)) {
        let phone = { ...this.initPhone.init };
        this.data.phone.push(phone);
        this.mobileNumber = "";
        this.$v.mobileNumber.$customDirty = false;
        this.$v.mobileNumber.$reset();
      }
    },
    deletePhone(index) {
      this.data.phone.splice(index, 1);
    },
  },
};
</script>
<style lang="scss" scoped >
/deep/ .pi {
  color: white !important;
}
.phone-section {
  .phone-list {
    .phone {
      background-color: #f8f9fa;
    }
  }
}
</style>