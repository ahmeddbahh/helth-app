<template>
  <div class="clinic-home">
    <div class="d-flex justify-content-end">
      <Button
        :label="lang[local].addClinicBtn"
        class="p-button-rounded py-3 mt-3 px-4"
        :iconPos="local == 'ar' ? 'right' : 'left'"
        icon="pi pi-plus"
        @click.prevent="$router.push({ name: 'AddClinicChooseClinic' })"
      />
    </div>
    <div class="row" v-if="clinicsData">
      <div class="col-md-6" v-for="(clinic, index) in clinicsData" :key="index">
        <Card class="my-4">
          <template #header>
            <div class="position-container">
              <div class="cover-pic">
                <img
                  alt="conver image"
                  v-if="clinic.coverImage"
                  :src="`${backendMediaDomain}${clinic.coverImage}`"
                />
                <img
                  alt="conver image"
                  v-else
                  src="../../assets/clinics/clinic_cover_image.svg"
                />
              </div>
            </div>
            <div class="position-container">
              <div class="profile-pic">
                <img
                  alt="profile image"
                  v-if="clinic.profileImage"
                  :src="`${backendMediaDomain}${clinic.profileImage}`"
                />
                <img
                  alt="profile image"
                  v-else
                  src="../../assets/clinics/clinic_profile_image.svg"
                />
              </div>
            </div>
          </template>
          <template #title>
            <span>{{ clinic.name.english }}</span> -
            <span>{{ clinic.name.arabic }}</span>
          </template>
          <template #content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
          <template #footer>
            <Button label="Save" class="mx-2" />
            <Button
              label="Cancel"
              class="p-button-danger"
              style="margin-left: 0.5em"
            />
          </template>
        </Card>
      </div>
    </div>
    <div v-else>
      <h3 class="my-5 text-center">{{ lang[local].doNotHaveClinic }}</h3>
    </div>
  </div>
</template>
<script>
import Card from "primevue/card";
import Button from "primevue/button";
export default {
  components: {
    Card,
    Button,
  },
  data() {
    return {
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      backendMediaDomain: this.$store.getters.getBackendMediaDomain,
      lang: {
        en: {
          doNotHaveClinic: "you do not have any clinics",
          addClinicBtn: "Add new Clinic",
        },
        ar: {
          doNotHaveClinic: "ليس لديك عيادات",
          addClinicBtn: "اضف عيادة جديدة",
        },
      },
    };
  },
  computed: {
    clinicsData() {
      return this.$store.getters.getClinicRegistrationData;
    },
  },
  methods: {
    getImage(event) {
      let profile = event.target.files[0];
      this.test = URL.createObjectURL(profile);
    },
  },
};
</script>
<style lang="scss" scoped>
.clinic-home {
  padding: 20px;
  .position-container {
    position: relative;
  }
  .cover-pic {
    position: relative;
    width: 100%;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 34px;
    }
  }
  .profile-pic {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgb(207, 207, 207);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
      border: 2px solid white;
      box-shadow: $shadow-1;
    }
  }
  /deep/.p-card-header {
    margin-bottom: 34px;
  }
  /deep/.p-card-title {
    color: $name-color;
    text-align: center;
  }
  /deep/.p-card-content {
    color: $name-color;
  }
}
</style>