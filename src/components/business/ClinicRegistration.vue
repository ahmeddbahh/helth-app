<template>
  <div
    class="clinic-registeration"
    :class="{ 'arabic-content': local == 'ar' }"
  >
    <div class="row">
      <div class="col-12">
        <div class="clinic-type mb-4">
          <h3>
            <span>{{ lang[local].register }} - </span>
            <span v-if="local == 'ar'">{{ data.speciality.arabic }}</span>
            <span v-else>{{ data.speciality.english }}</span>
          </h3>
        </div>
      </div>
      <div class="col-lg-6 order-2 order-lg-1">
        <MainForm
          :data="data"
          ref="mainForm"
          :subOptions="subOptions"
        ></MainForm>
      </div>
      <div class="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
        <ProfileImages :images="images" ref="profileImages"></ProfileImages>
      </div>
    </div>
    <div class="row custom-row mt-2">
      <div class="col-12">
        <h3 class="mb-4">{{ lang[local].about }}</h3>
      </div>
      <div class="col-4">
        <Aside :toggler="toggler" @toggle="toggle"></Aside>
      </div>
      <div class="col-8">
        <main class="custom-transition">
          <!-- <transition name="fade" mode="out-in"> -->
          <div
            class="section location"
            :class="{ active: toggler == 'Location' }"
            key="Location"
          >
            <LocationSection
              :data="data"
              ref="locationSection"
            ></LocationSection>
          </div>
          <div
            class="section email"
            :class="{ active: toggler == 'Email' }"
            key="Email"
          >
            <EmailSection :data="data" ref="emailSection"></EmailSection>
          </div>
          <div
            class="section phone"
            :class="{ active: toggler == 'Phone Number' }"
            key="Phone Number"
          >
            <PhoneSection
              :data="data"
              :initPhone="initPhone"
              @chechPhone="chechPhone"
              ref="phoneSection"
            ></PhoneSection>
          </div>
          <div
            class="section website"
            :class="{ active: toggler == 'Website' }"
            key="Website"
          >
            <WebsiteSection :data="data" ref="websiteSection"></WebsiteSection>
          </div>
          <div
            class="section business-hours"
            :class="{ active: toggler == 'Business Hours' }"
            key="Business Hours"
          >
            <BusinessHoursSection
              :data="data"
              :initDays="initDays"
              ref="businessHoursSection"
            ></BusinessHoursSection>
          </div>
          <div
            class="section waiting-time"
            :class="{ active: toggler == 'Waiting Time' }"
            key="Waiting Time"
          >
            <WatingTimeSection
              :data="data"
              ref="waitingTimeSection"
            ></WatingTimeSection>
          </div>
          <div
            class="section isurance-company"
            :class="{ active: toggler == 'Isurance Company' }"
            key="Isurance Company"
          >
            <InsuranceCompaniesSection
              ref="isuranceSection"
              :data="data"
              :initCompany="initCompany"
            ></InsuranceCompaniesSection>
          </div>
          <div
            class="section fees"
            :class="{ active: toggler == 'Fees' }"
            key="Fees"
          >
            <FeesSection :data="data" ref="feesSection"></FeesSection>
          </div>
          <!-- </transition> -->
        </main>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="mt-4">
          <div class="d-flex">
            <Checkbox v-model="data.acceptedAgreement" :binary="true" />
            <span class="mx-2">
              {{ lang[local].terms.text }}
              <a href="#">{{ lang[local].terms.link }} </a>
            </span>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="mt-4 d-flex justify-content-end">
          <Button
            :label="lang[local].next"
            @click.prevent="clinicRegistration"
            :disabled="invalid || !data.acceptedAgreement"
            class="p-button-rounded py-3 px-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Checkbox from "primevue/checkbox";
import clinics from "../../mixins/business/clinics.js";
import cities from "../../mixins/business/cities.js";
import governorates from "../../mixins/business/governorates.js";
import egyptianCities from "../../mixins/business/egyptianCities.js";
/////////////////////////////////////////////////////
import MainForm from "./clinic_registeration/MainForm.vue";
import ProfileImages from "./clinic_registeration/ProfileImages.vue";
import Aside from "./clinic_registeration/Aside.vue";
import LocationSection from "./clinic_registeration/LocationSection.vue";
import EmailSection from "./clinic_registeration/EmailSection.vue";
import PhoneSection from "./clinic_registeration/PhoneSection.vue";
import WebsiteSection from "./clinic_registeration/WebsiteSection.vue";
import BusinessHoursSection from "./clinic_registeration/BusinessHoursSection.vue";
import WatingTimeSection from "./clinic_registeration/WatingTimeSection.vue";
import InsuranceCompaniesSection from "./clinic_registeration/InsuranceCompaniesSection.vue";
import FeesSection from "./clinic_registeration/FeesSection.vue";
////////////////////////////////////////////////
import Button from "primevue/button";
import axios from "axios";
export default {
  inject: {
    innerClinic: {
      default: false,
    },
  },
  mixins: [clinics, cities, governorates, egyptianCities],
  components: {
    MainForm,
    ProfileImages,
    Aside,
    LocationSection,
    EmailSection,
    PhoneSection,
    WebsiteSection,
    BusinessHoursSection,
    WatingTimeSection,
    InsuranceCompaniesSection,
    FeesSection,

    // MainForm:()=>import("./clinic_registeration/MainForm.vue"),
    // ProfileImages:()=>import("./clinic_registeration/ProfileImages.vue"),
    // Aside:()=>import("./clinic_registeration/Aside.vue"),
    // LocationSection:()=>import("./clinic_registeration/LocationSection.vue"),
    // EmailSection:()=>import("./clinic_registeration/EmailSection.vue"),
    // PhoneSection:()=>import("./clinic_registeration/PhoneSection.vue"),
    // WebsiteSection:()=>import("./clinic_registeration/WebsiteSection.vue"),
    // BusinessHoursSection:()=>import("./clinic_registeration/BusinessHoursSection.vue"),
    // WatingTimeSection:()=>import("./clinic_registeration/WatingTimeSection.vue"),
    // InsuranceCompaniesSection:()=>import("./clinic_registeration/InsuranceCompaniesSection.vue"),
    // FeesSection:()=>import("./clinic_registeration/FeesSection.vue"),

    Button,
    Checkbox,
  },
  data() {
    return {
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      toggler: "Location",
      lang: {
        en: {
          register: "Clinic Registeration",
          terms: {
            text: "accept",
            link: "terms and conditions",
          },
          about: "About",
          next: "Next",
        },
        ar: {
          register: "تسجيل عيادة",
          terms: {
            text: "اقبل",
            link: "الشروط و الاحكام",
          },
          about: "عن العيادة",
          next: "التالي",
        },
      },
      id: "",
      subOptions: [],
      data: {
        name: {
          arabic: "",
          english: "",
        },
        branchType: {},
        title: {},
        speciality: {
          arabic: "",
          english: "",
          subspeciality: [],
        },
        serviceType: [],
        description: "",
        location: {
          address: "",
          zipCode: "",
          state: {
            arabic: "",
            english: "",
            city: {},
          },
          coordinates: {},
        },
        email: "",
        phone: [],
        website: {
          website: "",
          facebook: "",
          youtube: "",
          instagram: "",
          whatsapp: "",
        },
        businessHours: {
          saturday: [],
          sunday: [],
          monday: [],
          tuesday: [],
          wednesday: [],
          thursday: [],
          friday: [],
        },
        waitingTime: {
          time: "",
          unit: {},
        },
        insuranceCompanies: [],
        fees: {
          amount: "",
          currency: {},
        },
        acceptedAgreement: false,
      },
      initPhone: {
        mobileNumber: "",
        init: {
          phoneNumber: "",
          nationalNumber: "",
        },
      },
      initDays: {
        saturday: {
          From: "",
          To: "",
        },
        sunday: {
          From: "",
          To: "",
        },
        monday: {
          From: "",
          To: "",
        },
        tuesday: {
          From: "",
          To: "",
        },
        wednesday: {
          From: "",
          To: "",
        },
        thursday: {
          From: "",
          To: "",
        },
        friday: {
          From: "",
          To: "",
        },
      },
      initCompany: {
        init: {
          arabic: "",
          english: "",
        },
      },
      images: {
        profileImages: {
          profile: "",
          cover: "",
        },
      },
      invalid: true,
      checkPhone: false,
    };
  },
  watch: {
    data: {
      deep: true,
      handler() {
        this.invalidRegistration();
      },
    },
    images: {
      deep: true,
      handler() {
        this.invalidRegistration();
      },
    },
    initDays: {
      deep: true,
      handler() {
        this.invalidRegistration();
      },
    },
    initPhone: {
      deep: true,
      handler() {
        this.chechPhone();
      },
    },
    initCompany: {
      deep: true,
      handler() {
        this.invalidRegistration();
      },
    },
  },
  beforeCreate() {
    let id = this.$route.params.id;
    try {
      id = parseInt(id);
      if (!(id >= 0 && id < 41)) {
        this.$router.push({ name: "notFound" });
        return;
      }
    } catch {
      this.$router.push({ name: "notFound" });
      return;
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getSpeciality();
  },
  methods: {
    getSpeciality() {
      try {
        let clinic = null;
        for (let i = 0; i < this.clinics.length; i++) {
          if (this.clinics[i].index == this.id) clinic = this.clinics[i];
        }
        if (clinic) {
          this.data.speciality.arabic = clinic.arabic;
          this.data.speciality.english = clinic.english;
          this.subOptions = [...clinic.specialities];
        } else {
          this.$router.push({ name: "notFound" });
        }
      } catch {
        this.$router.push({ name: "notFound" });
      }
    },
    chechPhone(check) {
      this.checkPhone = check;
      this.invalidPhoneRegistration();
    },
    toggle(value) {
      this.toggler = value;
    },
    checkInits() {
      if (
        this.initPhone.init.phoneNumber &&
        this.initPhone.init.nationalNumber
      ) {
        this.data.phone.push(this.initPhone.init);
      }
      if (this.initCompany.init.arabic && this.initCompany.init.english) {
        this.data.insuranceCompanies.push(this.initCompany.init);
      }
      if (this.initDays.saturday.From && this.initDays.saturday.To) {
        this.data.businessHours.saturday.push(this.initDays.saturday);
      }
      if (this.initDays.sunday.From && this.initDays.sunday.To) {
        this.data.businessHours.sunday.push(this.initDays.sunday);
      }
      if (this.initDays.monday.From && this.initDays.monday.To) {
        this.data.businessHours.monday.push(this.initDays.monday);
      }
      if (this.initDays.tuesday.From && this.initDays.tuesday.To) {
        this.data.businessHours.tuesday.push(this.initDays.tuesday);
      }
      if (this.initDays.wednesday.From && this.initDays.wednesday.To) {
        this.data.businessHours.wednesday.push(this.initDays.wednesday);
      }
      if (this.initDays.thursday.From && this.initDays.thursday.To) {
        this.data.businessHours.thursday.push(this.initDays.thursday);
      }
      if (this.initDays.friday.From && this.initDays.friday.To) {
        this.data.businessHours.friday.push(this.initDays.friday);
      }
    },
    invalidRegistration() {
      if (!this.checkPhone) {
        if (
          this.$refs.mainForm.$v.data.$invalid ||
          this.$refs.profileImages.$v.images.$invalid ||
          this.$refs.locationSection.$v.data.location.$invalid ||
          this.$refs.emailSection.$v.data.email.$invalid ||
          this.$refs.phoneSection.invalidPhone() ||
          this.$refs.websiteSection.$v.data.website.$invalid ||
          this.$refs.businessHoursSection.invalidDays() ||
          this.$refs.waitingTimeSection.$v.data.waitingTime.$invalid ||
          this.$refs.isuranceSection.$v.data.insuranceCompanies.$invalid ||
          this.$refs.feesSection.$v.data.fees.$invalid
        ) {
          return (this.invalid = true);
        } else {
          return (this.invalid = false);
        }
      } else {
        this.invalid = true;
      }
    },
    invalidPhoneRegistration() {
      if (!this.checkPhone) {
        if (this.$refs.phoneSection.invalidPhone())
          return (this.invalid = true);
        else return (this.invalid = false);
      } else this.invalid = true;
    },
    clinicRegistration() {
      if (!this.invalid || this.data.acceptedAgreement) {
        this.checkInits();

        let formData = new FormData();

        if (this.images.profileImages.cover)
          formData.append("converImage", this.images.profileImages.cover);
        if (this.images.profileImages.profile)
          formData.append("profileImage", this.images.profileImages.profile);

        formData.append("data", JSON.stringify(this.data));

        axios
          .post("/clinicRegistration/saveData", formData)
          .then((res) => {
            // console.log(res)
            if (res.data.id) {
              localStorage.setItem("clinicId", res.data.id);
              // this.$store.dispatch("setNewClinicRegistrationData", res.data);
              if (this.innerClinic) {
                this.$router.push({
                  name: "AddClinicVerifyBranch",
                  params: { id: this.id },
                });
              } else {
                this.$router.push({
                  name: "verifyBranch",
                  params: { id: this.id },
                });
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        console.log("fuck you bitch");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes scale-display {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes scale-display--reversed {
  0% {
    display: block;
    opacity: 1;
    transform: scale(1);
  }
  99% {
    display: block;
    opacity: 0;
    transform: scale(0);
  }
  100% {
    display: none;
    opacity: 0;
    transform: scale(0);
  }
}
.clinic-registeration {
  width: 100%;
  .custom-row {
    min-height: 50vh;
    .custom-transition {
      .section {
        display: none;
        transition: height 5s ease-in-out;
        animation: scale-display--reversed 0.5s;
        // animation-fill-mode:backwards;
        animation-direction: alternate;
      }
      .active {
        display: block;
        animation: scale-display 0.5s;
        // animation-fill-mode:backwards;
        animation-direction: alternate;
      }
    }
  }
}
// fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>