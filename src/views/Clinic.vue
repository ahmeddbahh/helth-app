<template>
  <div class="clinic">
    <TopBar></TopBar>
    <SideBar></SideBar>
    <div class="clinic-wrapper" :class="{ ar: local == 'ar' }">
      <div class="clinic-content">
        <router-view v-if="isRequestFinish"></router-view>
        <div v-else class="loading">
          <ProgressSpinner />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import TopBar from "../components/clinic/shared/TopBar.vue";
// import SideBar from "../components/clinic/shared/SideBar.vue";
import ProgressSpinner from "primevue/progressspinner";
import httpErrorCodesHandling from "../mixins/httpErrors/httpErrorCodesHandling.js";
import axios from "axios";
export default {
  components: {
    TopBar:()=>import("../components/clinic/shared/TopBar.vue"),
    SideBar:()=>import("../components/clinic/shared/SideBar.vue"),
    ProgressSpinner,
  },
  mixins: [httpErrorCodesHandling],
  data() {
    return {
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      isRequestFinish: false,
    };
  },
  created() {
    axios
      .get("/getClinics")
      .then((res) => {
        // console.log(res)
        if(res.data.clinics)
        this.$store.dispatch("setClinicRegistrationData", res.data.clinics);
        this.isRequestFinish = true;
      })
      .catch((err) => {
        this.isRequestFinish = true;
        this.httpErrorCodesHandling(err);
      });
  },
};
</script>
<style lang="scss" scoped>
.clinic {
  width: 100%;
  height: 100%;
  .clinic-wrapper {
    width: 100%;
    height: 100%;
    padding-top: 61px;
    padding-left: 250px;
    transition: all 1s ease-in-out;
    background-image: linear-gradient(
      160deg,
      $gradient-color-2,
      $gradient-color-2,
      $gradient-color-1
    );
    .clinic-content {
      width: 100%;
      height: 100%;
      // padding: 20px;
      border-radius: 50px 0px 0px 0px;
      background-color: #f5f6fa;
      overflow-y: scroll;
    }
  }
  .clinic-wrapper.ar {
    direction: rtl;
    padding-left: 0px;
    padding-right: 250px;
    .clinic-content {
      border-radius: 0px 34px 0px 0px;
    }
  }
  
}
@media (max-width: 1200px) {
  .clinic {
    .clinic-wrapper {
      padding-left: 0px;
      .clinic-content {
        border-radius: 0px;
      }
    }
    .clinic-wrapper.ar {
      padding-right: 0px;
    }
  }
}
</style>