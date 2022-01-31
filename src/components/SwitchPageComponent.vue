<template>
  <div class="container">
    <div class="content">
      <router-link @click="resetInputValue" to="/" class="content__characters"
        >All Characters</router-link
      >
      <router-link to="/favorites" class="content__favorites">
        Favorites</router-link
      >
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "SwitchPageComponent",

  setup() {
    const store = useStore();

    function resetInputValue() {
      const text = "";
      store.state.searchInputValue = text;
    }

    return { resetInputValue, store };
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1920px;
  height: 78px;
  border-top: 1px solid #e5eaf4;

  @media (width: 320px), (width: 375px) {
    height: 60px;
  }

  @media (width: 425px) {
    height: 60px;
    margin-top: -50px;
  }

  a {
    font-weight: 500 !important;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #11b0c8 !important;

      &:link {
        border-bottom: 2px solid #000;
      }
    }
  }

  .content {
    color: #a9b1bd;
    display: grid;
    grid-template-columns: auto auto;
    gap: 80px;
    width: 269px;
    margin-left: 130px;
    margin-top: 24px;

    @media (width: 320px) {
      width: 150px;
      margin-left: 10px;
      font-size: 10px;
      grid-template-columns: auto auto;
      gap: 20px;
    }

    @media (width: 375px) {
      width: 150px;
      margin-left: 10px;
      font-size: 10px;
      grid-template-columns: auto auto;
      gap: 20px;
    }

    @media (width: 425px) {
      width: 150px;
      margin-left: 10px;
      font-size: 11px;
      grid-template-columns: auto auto;
      gap: 20px;
    }

    &__characters {
      &:visited {
        color: #a9b1bd;
      }
      &:link {
        text-decoration: none;
      }
    }

    &__favorites {
      &:visited {
        color: #a9b1bd;
      }
      &:link {
        text-decoration: none;
      }
    }
  }
}
</style>
