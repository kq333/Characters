<template>
  <div class="container">
    <div class="header">
      <HeaderComponent />
    </div>
    <div class="SwitchPageComponent">
      <SwitchPageComponent />
    </div>
    <div class="table">
      <FavoritesTableComponent />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import SwitchPageComponent from "../components/SwitchPageComponent.vue";
import FavoritesTableComponent from "../components/FavoritesTableComponent.vue";

export default {
  name: "Favorites",

  components: {
    HeaderComponent,
    SwitchPageComponent,
    FavoritesTableComponent,
  },
};
</script>

<style scoped lang="scss"></style>
