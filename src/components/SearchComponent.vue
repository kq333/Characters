<template>
  <div class="container">
    <div class="searchContainer">
      <div class="searchContainer__name">Search by</div>
      <div class="searchContainer__menu">
        <div class="searchContainer__menu__dropButton">
          <button class="searchContainer__menu__dropButton__dropbtn">
            {{ text }}
          </button>
          <div
            @click="active = !active"
            class="searchContainer__menu__dropButton__icon"
          >
            <span v-if="!active" class="material-icons"> arrow_drop_down </span>
            <span v-else class="material-icons"> arrow_drop_up </span>
          </div>
        </div>
        <div
          class="searchContainer__menu__dropdownContent"
          :class="{ 'searchContainer__menu__dropdownContent--show': active }"
          @click="getValue"
        >
          <li value="name">Name</li>
          <li value="id">Identifier</li>
          <li value="gender" class="searchContainer__menu__dropdownContent__li">
            Gender
          </li>
        </div>
      </div>
      <div class="searchContainer__searchInput">
        <input
          type="text"
          class="searchContainer__searchInput__input"
          name="input"
          autofocus
          v-model="inputsValue"
          @keypress="emitData"
        />
        <div class="searchContainer__searchInput__searchBtn">
          <button
            class="searchContainer__searchInput__searchBtn__btn"
            :class="{
              'searchContainer__searchInput__searchBtn__btn--changeColor':
                inputsValue,
            }"
          >
            <span class="material-icons md-24">search</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "SearchComponent",

  setup() {
    const store = useStore();
    const text = computed(() => store.state.searchBy);

    const inputsValue = ref();
    const active = ref(false);

    function getValue(e) {
      const text = e.target.innerHTML;
      this.store.commit("searchedBy", text);
      active.value = false;
    }

    function emitData() {
      this.store.commit("searchItems", inputsValue);
    }

    return {
      active,
      text,
      getValue,
      store,
      inputsValue,
      emitData,
    };
  },
};
</script>
<style scoped lang="scss">
.container {
  max-width: 505px;
  height: auto;

  .searchContainer {
    height: 56px;
    border: solid 1px #a9b1bd;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 123px 130px auto;

    @media (width: 320px) {
      max-width: 250px;
      display: grid;
      grid-template-columns: 80px 80px 90px;
      height: 30px;
      font-size: 6px;
    }

    @media (width: 375px) {
      max-width: 300px;
      display: grid;
      grid-template-columns: 100px 90px 110px;
      height: 30px;
      font-size: 9px;
    }

    @media (width: 425px) {
      max-width: 350px;
      display: grid;
      grid-template-columns: 100px 110px 140px;
      height: 30px;
      font-size: 11px;
    }

    &__name {
      border-right: solid 1px #a9b1bd;
      color: #a9b1bd;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;

      @media (width: 320px) {
        font-size: 8px;
      }
    }

    &__menu {
      width: 130px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: solid 1px #a9b1bd;

      @media (width: 320px) {
        max-width: 60px;
        font-size: 8px;
      }

      @media (width: 375px) {
        max-width: 65px;
      }

      @media (width: 425px) {
        max-width: 110px;
      }

      &__dropButton {
        display: grid;
        grid-template-columns: 49px 24px;
        gap: 25px;

        @media (width: 320px) {
          display: grid;
          grid-template-columns: 40px auto;
          gap: 2px;
          font-size: 8px;
          width: 80px;
        }

        @media (width: 375px) {
          display: grid;
          grid-template-columns: 40px auto;
          width: 80px;
          gap: 1px;
        }

        @media (width: 425px) {
          display: grid;
          grid-template-columns: 40px auto;
          width: 80px;
          gap: 20px;
        }

        &__dropbtn {
          position: relative;
          height: 24px;
          width: 49px;
          font-size: 16px;
          background-color: #ffffff;
          border-style: none;
          outline: none;
          font-family: Poppins, Helvetica, Arial, sans-serif;
          font-weight: 500;
          color: #a9b1bd;

          @media (width: 320px) {
            font-size: 8px;
          }

          @media (width: 375px) {
            font-size: 9px;
          }
          @media (width: 425px) {
            font-size: 11px;
          }
        }

        &__icon {
          width: 10px;
          height: 10px;
          color: #a9b1bd;

          .material-icons {
            @media (width: 320px) {
              font-size: 20px;
            }
          }

          &:hover {
            cursor: pointer;
          }
        }
      }

      &__dropdownContent {
        position: absolute;
        margin-top: 112px;
        height: 56px;
        display: none;

        @media (width: 320px), (width: 375px) {
          margin-top: 86px;
        }

        @media (width: 425px) {
          margin-top: 86px;
        }

        &--show {
          display: block;
        }

        li {
          display: block;
          width: 131px;
          height: 56px;
          display: flex;
          padding: 15px;
          align-items: center;
          text-decoration: none;
          border: solid 1px #a9b1bd;
          font-family: Poppins, Helvetica, Arial, sans-serif;
          font-weight: 500;
          color: #a9b1bd;
          border-top: none;
          cursor: pointer;
          background-color: #ffffff;

          &:visited {
            color: #a9b1bd;
          }

          @media (width: 320px) {
            width: 61px;
            height: 28px;
          }

          @media (width: 375px) {
            width: 66px;
            height: 28px;
          }

          @media (width: 425px) {
            width: 111px;
            height: 28px;
          }
        }

        &__li {
          border-top: none;
          border-bottom-right-radius: 12px;
          border-bottom-left-radius: 12px;
          background-color: #ffffff;
        }
      }
    }

    &__searchInput {
      max-width: 252px;
      display: grid;
      grid-template-columns: auto 47px;

      @media (width: 320px) {
        max-width: 80px;
        display: grid;
        grid-template-columns: 58px 22px;
      }

      @media (width: 375px) {
        max-width: 90px;
        display: grid;
        grid-template-columns: 77px 22px;
      }

      @media (width: 425px) {
        max-width: 100px;
        display: grid;
        grid-template-columns: 108px 22px;
      }

      &__input {
        border-style: none;
        outline: none;
        color: #a9b1bd;
        font-weight: 500;
        font-size: 16px;

        @media (width: 320px) {
          font-size: 8px;
        }

        @media (width: 375px) {
          font-size: 9px;
        }

        @media (width: 425px) {
          font-size: 11px;
        }
      }
      &__searchBtn {
        display: flex;
        justify-content: center;
        align-content: center;

        &__btn {
          border-style: none;
          background-color: #ffffff;
          color: #11b0c8;

          .material-icons {
            @media (width: 320px), (width: 375px), (width: 425px) {
              font-size: 18px;
            }
          }
          &--changeColor {
            color: #a9b1bd;
          }
        }
      }
    }
  }
}
</style>
