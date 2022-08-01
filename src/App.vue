<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: $font-stack;
  color: $name-color;
  width: 100%;
  height: 100%;
}
</style>


