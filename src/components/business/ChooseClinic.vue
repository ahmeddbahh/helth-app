<template>
  <div class="choose-clinic">
    <div
      class="heading d-flex justify-content-between flex-wrap my-3"
      :class="{ 'arabic-content': local == 'ar' }"
    >
      <h2>{{ lang[local].head }}</h2>
      <div>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <!-- @input="searchInClinics" -->
          <InputText
            type="text"
            v-model="searchTxt"
            :placeholder="lang[local].searchPlaceholder"
          />
        </span>
      </div>
    </div>
    <div class="clinics p-2" :class="{ 'override-clinics': innerClinic }">
      <transition name="fade" mode="out-in">
        <div v-if="activateTransition" class="row">
          <div
            class="col-md-6 col-xl-3"
            v-for="(clinic, index) in filteredClinics"
            :key="index"
          >
            <div class="clinic my-2 p-2">
              <h4 v-if="local == 'ar'" class="my-2">{{ clinic.arabic }}</h4>
              <h4 v-else class="my-2">{{ clinic.english }}</h4>
              <div class="icon-wrapper my-2">
                <img :src="getIcon(clinic.icon)" alt="icon" />
              </div>
              <button
                class="primary-btn-gradient px-5 py-2 my-2"
                @click="goNext(clinic)"
              >
                {{ lang[local].btnLabel }}
              </button>
            </div>
          </div>
        </div>
      </transition>
      <div v-if="!filteredClinics.length">
        <h3 class="text-center">{{ lang[local].noResultMsg }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
import clinics from "../../mixins/business/clinics";
import chooseClinicLang from "../../mixins/business/chooseClinicLang";
import InputText from "primevue/inputtext";
export default {
  inject: {
    innerClinic: {
      default: false,
    },
  },
  mixins: [chooseClinicLang, clinics],
  components: {
    InputText,
  },
  data() {
    return {
      searchTxt: "",
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      // filteredClinics: [],
      activateTransition: true,
    };
  },
  beforeCreate() {
    if (
      !(
        localStorage.getItem("accessToken") ||
        localStorage.getItem("refreshToken")
      )
    ) {
      this.$router.push({ name: "notFound" });
      return;
    }
  },
  computed: {
    filteredClinics() {
      let filteredClinics = [];
      if (!this.searchTxt) {
        filteredClinics = [...this.clinics];
      } else {
        filteredClinics = this.clinics.filter((el) => {
          return (
            el.english.toLowerCase().includes(this.searchTxt.toLowerCase()) ||
            el.arabic.includes(this.searchTxt)
          );
        });
      }
      return filteredClinics;
    },
  },
  watch: {
    searchTxt() {
      this.activateTransition = false;
      setTimeout(() => {
        this.activateTransition = true;
      }, 200);
    },
  },
  created() {
    this.sortClinicsAlphabetically();
    // this.filteredClinics = [...this.clinics];
  },
  methods: {
    getIcon(icon) {
      return require(`../../UI/icons/business/clinics/${icon}`);
    },
    sortClinicsAlphabetically() {
      if (this.local == "ar") {
        this.clinics.sort((a, b) => a.arabic.localeCompare(b.arabic));
      } else this.clinics.sort((a, b) => a.english.localeCompare(b.english));
    },
    // searchInClinics() {
    //   this.activateTransition = false;
    //   setTimeout(() => {
    //     this.filteredClinics = this.clinics.filter((el) => {
    //       return (
    //         el.english.toLowerCase().includes(this.searchTxt.toLowerCase()) ||
    //         el.arabic.includes(this.searchTxt)
    //       );
    //     });
    //     this.activateTransition = true;
    //   }, 200);
    // },
    goNext(clinic) {
      if (this.innerClinic) {
        this.$router.push({
          name: "AddCliniclinicRegistration",
          params: { id: clinic.index },
        });
      } else {
        this.$router.push({
          name: "clinicRegistration",
          params: { id: clinic.index },
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.choose-clinic {
  width: 100%;
  .clinics {
    min-height: 50vh;
    max-height: 50vh;
    overflow-y: auto;
    overflow-x: hidden;
    .clinic {
      border-radius: 34px;
      text-align: center;
      box-shadow: $shadow-1;
      padding: 10px;
      .icon-wrapper {
        // width: 80px;
        // height: 80px;
        // margin: 0 auto;
        // img{
        //     width: 100%;
        //     height: 100%;
        // }
      }
    }
  }
  .override-clinics {
    min-height: auto;
    max-height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
// fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media (max-width: 768px) {
  .choose-clinic {
    .clinics {
      min-height: 30vh;
      max-height: 30vh;
    }
  }
}
</style>