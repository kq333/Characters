<template>
  <div class="container">
    <button class="btns__btn__nav" @click="addNum" :disabled="clickedBtn == 1">
      <span class="material-icons"> keyboard_double_arrow_left </span>
    </button>

    <span class="btns" v-for="item in BtnsNumbers" :key="item">
      <div
        class="btns__btn"
        @click="showNum(item)"
        :class="[backgroundColorBts(item) ? 'btns__btn--active' : '']"
        v-if="
          Math.abs(item - clickedBtn) < 3 || item == BtnsNumbers || item == 0
        "
      >
        {{ item }}
      </div>
    </span>

    <button
      class="btns__btn__nav"
      :disabled="clickedBtn == BtnsNumbers"
      @click="addNum"
    >
      <span class="material-icons">chevron_right </span>
    </button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "PaginationComponent",

  props: {
    BtnsNumbers: {
      type: Number,
      require: true,
    },
  },

  setup() {
    const store = useStore();
    const clickedBtn = ref();
    const GraphQlPageNum = computed(() => store.state.GraphQlPageNum);

    clickedBtn.value = parseInt(GraphQlPageNum.value);

    function addNum(e) {
      if (e.target.innerText === "keyboard_double_arrow_left") {
        clickedBtn.value = 1;
      } else {
        clickedBtn.value++;
      }

      store.commit("CharactersNumbergraphql",clickedBtn.value);
    }

    function showNum(item) {
      clickedBtn.value = item;

      store.commit("CharactersNumbergraphql", clickedBtn.value);
    }

    function backgroundColorBts(index) {
      return [clickedBtn.value].includes(index);
    }

    return {
      addNum,
      backgroundColorBts,
      showNum,
      clickedBtn,
      store,
      GraphQlPageNum,
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  height: 40px;
  .btns {
    &__btn {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 4px;
      border: solid 1px #a9b1bd;
      background-color: #ffffff;
      color: #a9b1bd;
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-left: 10px;

      &--active {
        background-color: #11b0c8;
        color: #ffffff;
        width: 40px;
        height: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
      }

      &__nav {
        width: 40px;
        height: 39.5px;
        border-radius: 4px;
        border: solid 1px #a9b1bd;
        background-color: #ffffff;
        color: #a9b1bd;
        cursor: pointer;
        margin-left: 10px;
      display: inline-flex;
      justify-content: center;
      align-items: center;


        .material-icons {
          font-size: 12px;
        }

        &:disabled {
          cursor: auto;
        }
      }
    }
  }
}
</style>
