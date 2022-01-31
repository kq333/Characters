<template>
  <div class="Characters">
    <div class="header">
      <HeaderComponent />
    </div>
    <div class="switchPage">
      <SwitchPageComponent />
    </div>
    <div class="CharactersTableComponent">
      <CharactersTableComponent />
    </div>
    <div class="pagination">
      <PaginationComponent :BtnsNumbers="BtnsNumbers" />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import CharactersTableComponent from "../components/CharactersTableComponent.vue";
import PaginationComponent from "../components/PaginationComponent.vue";
import SwitchPageComponent from "../components/SwitchPageComponent.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Characters",

  setup() {
    const store = useStore();
    const BtnsNumbers = computed(() => store.state.BtnsNumbers);

    return { BtnsNumbers, store };
  },

  components: {
    HeaderComponent,
    CharactersTableComponent,
    PaginationComponent,
    SwitchPageComponent,
  },
};
</script>

<style scoped lang="scss">
.Characters {
  max-width: 1920px;
  .headers {
    display: flex;
    justify-content: flex-start;
  }
  .pagination {
    margin-left: 120px;
    margin-top: 40px;
    margin-bottom: 60px;

    @media (width: 320px), (width: 375px), (width: 425px) {
      margin-left: 5px;
    }
  }

  .header {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
