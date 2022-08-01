<template>
  <div class="side-bar-wrapper" :class="{ ar: local == 'ar' }">
    <div
      class="toggler-icon"
      @click="toggle"
      :class="{ 'toggle-icon': toogleSideBar }"
    >
      <i class="pi pi-bars"></i>
    </div>
    <div class="side-bar" :class="{ 'toggle-side-bar': toogleSideBar }">
      <div class="links">
        <ul>
          <router-link to="/" tag="li">
            <img src="../../../UI/icons/clinic/sidebar/capsule.svg" alt="" />
            <span>Drug RX</span>
          </router-link>
          <router-link to="/" tag="li">
            <img src="../../../UI/icons/clinic/sidebar/eye-exam.svg" alt="" />
            <span>Diagnosis</span>
          </router-link>
          <router-link :to="{ name: 'clinicHome' }" tag="li">
            <img src="../../../UI/icons/clinic/sidebar/doctor.svg" alt="" />
            <span>My Clinics</span>
          </router-link>
          <router-link to="/" tag="li">
            <img src="../../../UI/icons/clinic/sidebar/money.svg" alt="" />
            <span>Monetization</span>
          </router-link>
          <router-link to="/" tag="li">
            <img src="../../../UI/icons/clinic/sidebar/mail.svg" alt="" />
            <span>Messages</span>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      toogleSideBar: false,
      local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
    };
  },
  methods: {
    toggle() {
      this.toogleSideBar = !this.toogleSideBar;
    },
  },
};
</script>
<style lang="scss" scoped>
.side-bar-wrapper {
  position: relative;
  .toggler-icon {
    position: fixed;
    left: 0;
    top: 61px;
    z-index: 10;
    padding: 10px;
    border-radius: 0px 34px 34px 0px;
    background-image: linear-gradient(
      160deg,
      $gradient-color-2,
      $gradient-color-2,
      $gradient-color-1
    );
    transition: all 1s ease-in-out;
    cursor: pointer;
    display: none;
    i {
      font-size: 24px;
    }
  }
  .side-bar {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 61px;
    left: 0px;
    overflow-x: hidden;
    padding: 20px;
    background-image: linear-gradient(
      160deg,
      $gradient-color-2,
      $gradient-color-2,
      $gradient-color-1
    );
    transition: all 1s ease-in-out;
    .links {
      li {
        margin: 20px 0px;
        font-weight: $Bold;
        opacity: 0.7;
        cursor: pointer;
        transition: opacity 0.25s ease-in-out;
        span {
          margin: 0px 10px;
        }
        &:hover {
          opacity: 1;
        }
      }
      .router-link-exact-active {
        opacity: 1;
      }
    }
  }
}
.ar {
  direction: rtl;
  .toggler-icon {
    right: 0;
    left: auto;
    border-radius: 34px 0px 0px 34px;
    background-image: linear-gradient(
      160deg,
      $gradient-color-2,
      $gradient-color-2,
      $gradient-color-1
    );
  }
  .side-bar {
    right: 0px;
    left: auto;
    background-image: linear-gradient(
      160deg,
      $gradient-color-2,
      $gradient-color-2,
      $gradient-color-1
    );
  }
}
@media (max-width: 1200px) {
  .side-bar-wrapper {
    .toggler-icon {
      display: block;
      left: 0;
    }
    .side-bar {
      left: -250px;
    }
    .toggle-icon {
      left: 250px;
    }
    .toggle-side-bar {
      left: 0px;
    }
  }
  .ar {
    .toggler-icon {
      display: block;
      right: 0;
      left: auto;
    }
    .side-bar {
      left: auto;
      right: -250px;
    }
    .toggle-icon {
      left: auto;
      right: 250px;
    }
    .toggle-side-bar {
      left: auto;
      right: 0px;
    }
  }
}
</style>