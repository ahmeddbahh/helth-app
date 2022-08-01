<template>
  <div class="verify-branch" :class="{ 'arabic-content': local == 'ar' }">
    <div class="row custom-row mt-2">
      <div class="col-12">
        <h3 class="mb-4">{{ lang[local].verify }}</h3>
      </div>
      <div class="col-4">
        <Aside :toggler="toggler" @toggle="toggle"></Aside>
      </div>
      <div class="col-8">
        <main class="custom-transition">
          <!-- <transition name="fade" mode="out-in"> -->
          <div
            class="section national"
            :class="{ active: toggler == 'National ID' }"
            key="National ID"
          >
            <UploadImage
              :image="images.nationalId"
              :label="lang[local].labels.nationalId"
              ref="nationalId"
            ></UploadImage>
          </div>
          <div
            class="section commercial"
            :class="{ active: toggler == 'Commercial Record' }"
            key="Commercial Record"
          >
            <UploadImage
              :image="images.commercialRecord"
              :label="lang[local].labels.commercialRecord"
              ref="commercialRecord"
            ></UploadImage>
          </div>
          <div
            class="section syndicate"
            :class="{ active: toggler == 'Syndicate ID' }"
            key="Syndicate ID"
          >
            <UploadImage
              :image="images.syndicateId"
              :label="lang[local].labels.syndicateId"
              ref="syndicateId"
            ></UploadImage>
          </div>
          <div
            class="section profession"
            :class="{ active: toggler == 'Profession License' }"
            key="Profession License"
          >
            <UploadImage
              :image="images.professionLicense"
              :label="lang[local].labels.professionLicense"
              ref="professionLicense"
            ></UploadImage>
          </div>
          <!-- </transition> -->
        </main>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div
          class="next d-flex mt-4"
          :class="{ 'justify-content-end': local == 'en' }"
        >
          <Button
            :label="lang[local].next"
            @click.prevent="verifyBranch"
            :disabled="invalid"
            class="p-button-rounded py-3 px-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import clinics from "../../mixins/business/clinics.js";
// import Aside from "./verify/Aside.vue";
// import UploadImage from "./verify/UploadImage.vue";
import Button from "primevue/button";
import axios from "axios";
export default {
  mixins: [clinics],
  components: {
    Aside:()=>import("./verify/Aside.vue"),
    UploadImage:()=>import("./verify/UploadImage.vue"),
    Button,
  },
  data() {
    return {
      lang: {
        en: {
          verify: "Verifying Your Branch",
          next: "Next",
          labels: {
            nationalId: "National ID",
            commercialRecord: "Commercial Record",
            syndicateId: "Syndicate ID",
            professionLicense: "Profession License",
          },
        },
        ar: {
          verify: "التحقق من الفرع",
          next: "التالي",
          labels: {
            nationalId: "البطاقة",
            commercialRecord: "السجل التجاري",
            syndicateId: "كارنيه النقابة",
            professionLicense: "رخصة المزاولة",
          },
        },
      },
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      toggler: "National ID",
      id: "",
      clinicId: "",
      speciality: {
        arabic: "",
        english: "",
      },
      images: {
        nationalId: {
          file: "",
          url: "",
        },
        commercialRecord: {
          file: "",
          url: "",
        },
        syndicateId: {
          file: "",
          url: "",
        },
        professionLicense: {
          file: "",
          url: "",
        },
      },
      invalid: true,
    };
  },
  watch: {
    images: {
      deep: true,
      handler() {
        this.invalidImages();
      },
    },
  },
  beforeCreate() {
    let id = this.$route.params.id;
    let clinicId = localStorage.getItem("clinicId");
    if (!(id && clinicId)) {
      this.$router.push({ name: "notFound" });
      return;
    }
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
    this.clinicId = localStorage.getItem("clinicId");
    this.speciality.arabic = this.clinics[this.id].arabic;
    this.speciality.english = this.clinics[this.id].english;
  },
  methods: {
    toggle(value) {
      this.toggler = value;
    },
    invalidImages() {
      if (
        this.$refs.nationalId.$v.image.$invalid ||
        this.$refs.commercialRecord.$v.image.$invalid ||
        this.$refs.syndicateId.$v.image.$invalid ||
        this.$refs.professionLicense.$v.image.$invalid
      ) {
        return (this.invalid = true);
      } else {
        return (this.invalid = false);
      }
    },
    verifyBranch() {
      if (!(this.invalid && this.clinicId)) {
        let formData = new FormData();

        if (this.images.nationalId.file)
          formData.append("nationalId", this.images.nationalId.file);
        if (this.images.commercialRecord.file)
          formData.append(
            "commercialRecord",
            this.images.commercialRecord.file
          );
        if (this.images.syndicateId.file)
          formData.append("syndicateId", this.images.syndicateId.file);
        if (this.images.professionLicense.file)
          formData.append(
            "professionLicense",
            this.images.professionLicense.file
          );

        axios
          .post("/clinicRegistration/saveProof", formData, {
            headers: {
              "Clinic-Id": this.clinicId,
            },
          })
          .then((res) => {
            this.$store.dispatch("updateClinicRegistrationData", res.data);
            this.$router.push({ name: "clinicHome" });
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
.verify-branch {
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