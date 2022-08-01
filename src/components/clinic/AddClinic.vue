<template>
  <div class="add-clinic">
      <div class="custom-container w-100 p-4">
        <transition name="slide" mode="out-in">
          <div
            class="
              form-content
              d-flex
              justify-content-center
              align-items-center
              mb-4
            "
          >
            <router-view></router-view>
          </div>
        </transition>
        <Steps :model="steps" class="my-3" />
      </div>
  </div>
</template>
<script>
import Steps from "primevue/steps";
export default {
  provide: {
    innerClinic: true,
  },
  components: {
    Steps,
  },
  data() {
    return {
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      id: "",
      steps: [],
    };
  },
  watch: {
    "$route.params"() {
      this.setStepsModel();
    },
  },
  created() {
    this.setStepsModel();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    setStepsModel() {
      this.id = this.$route.params.id ? this.$route.params.id : "";
      if (this.local=='ar')
        this.steps = [
          {
            to: "/clinic/add-clinic/",
            label: "Speciality",
          },
          {
            to: `/clinic/add-clinic/clinic-registeration/${this.id}`,
            label: "Registeration",
          },
          {
            to: `/clinic/add-clinic/verify-branch/${this.id}`,
            label: "Confirm",
          },
        ];
      else
        this.steps = [
          {
            to: "/clinic/add-clinic/",
            label: "التخصص",
          },
          {
            to: `/clinic/add-clinic/clinic-registeration/${this.id}`,
            label: "تسجيل عيادة",
          },
          {
            to: `/clinic/add-clinic/verify-branch/${this.id}`,
            label: "تأكيد",
          },
        ];
    },
  },
};
</script>
<style lang="scss" scoped>
.slide-enter-active {
  transition-duration: 0.7s;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 1000px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0px;
}
</style>
