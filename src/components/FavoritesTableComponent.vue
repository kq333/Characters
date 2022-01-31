<template>
  <div>
    <div class="table">
      <div class="table__header">
        <div class="table__header__photo">Photo</div>
        <div class="table__header__Character">Character ID</div>
        <div class="table__header__Name">Name</div>
        <div class="table__header__Gender">Gender</div>
        <div class="table__header__Species">Species</div>
        <div class="table__header__Episode">Last Episode</div>
        <div class="table__header__Add">Add To Favorites</div>
      </div>
    </div>
    <div class="table__content" v-for="item in searchValue" :key="item.id">
      <div class="table__content__photo">
        <img :src="item.image" alt="characterImage" />
      </div>
      <div class="table__content__Character">{{ item.id }}</div>
      <div class="table__content__Name">{{ item.name }}</div>
      <div class="table__content__Gender">
        <div class="table__content__Gender__content">
          <div class="table__content__Gender__content__logo">
            <span
              class="material-icons"
              :class="[addGenderIcon(item.gender)]"
              >{{ getIconName }}</span
            >
          </div>
          <div class="table__content__Gender__GenderName">
            {{ item.gender }}
          </div>
        </div>
      </div>
      <div class="table__content__Species">{{ item.species }}</div>
      <div class="table__content__Episode">{{ item.episode[0].episode }}</div>
      <div class="table__content__Add">
        <button
          class="table__content__Add__btn"
          @click="removeFromFavorites(item.id)"
        >
          <span class="material-icons"> star </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "FavoritesTableComponent.vue",

  setup() {
    const store = useStore();
    const getData = computed(() => store.state.AddToFav);
    const getIconName = computed(() => store.state.iconName);
    const searchWord = computed(() => store.state.searchInputValue);
    const searchedBy = computed(() => store.state.searchBy);
    const searchValue = computed(() => {
      return inputValue();
    });

    function inputValue() {
      if (searchedBy.value === "Name") {
        return store.state.AddToFav.filter((item) =>
          item.name.toLowerCase().includes(searchWord.value)
        );
      }

      if (searchedBy.value === " Gender ") {
        return store.state.AddToFav.filter((item) =>
          item.gender.toLowerCase().includes(searchWord.value)
        );
      }

      if (searchedBy.value === "Identifier") {
        return store.state.AddToFav.filter((item) =>
          item.id.toString().includes(searchWord.value)
        );
      }
    }

    function removeFromFavorites(id) {
      const RemovedCharacter = id;
      this.store.commit("removeFromFavoritesPage", RemovedCharacter);
    }

    function addGenderIcon(gender) {
      this.store.commit("addGenderIcon", gender);
    }

    return {
      store,
      getData,
      removeFromFavorites,
      addGenderIcon,
      getIconName,
      searchValue,
      inputValue,
    };
  },
};
</script>

<style scoped lang="scss">
.table {
  &__header {
    max-width: 1920px;
    height: 54px;
    background-color: rgba(229, 234, 244, 0.25);
    display: grid;
    grid-template-columns: 307px 222px 222px 212px 212px 216px auto;

    @media (width: 320px) {
      max-width: 320px;
      grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
      display: grid;
      font-size: 5px;
    }

    @media (width: 375px) {
      max-width: 375px;
      grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
      display: grid;
      font-size: 8px;
    }

    @media (width: 425px) {
      max-width: 425px;
      grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
      display: grid;
      font-size: 9px;
    }

    color: #a9b1bd;
    font-weight: 500;
    font-size: 16px;

    &__photo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__Character {
      display: flex;
      align-items: center;
    }
    &__Name {
      display: flex;
      align-items: center;
    }
    &__Gender {
      display: flex;
      align-items: center;
    }
    &__Species {
      display: flex;
      align-items: center;
    }
    &__Episode {
      display: flex;
      align-items: center;
    }
    &__Add {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  &__content {
    max-width: 1920px;
    height: 76px;
    display: grid;
    grid-template-columns: 307px 222px 222px 212px 212px 216px auto;
    color: #a9b1bd;
    font-weight: 500;
    font-size: 16px;
    border-bottom: 1px solid #e5eaf4;

    @media (width: 320px) {
      max-width: 320px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
      font-size: 6px;
    }

    @media (width: 375px) {
      max-width: 375px;
      grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
      display: grid;
      font-size: 8px;
    }

    @media (width: 425px) {
      max-width: 4255px;
      grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
      display: grid;
      font-size: 9px;
    }

    &__photo {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 68px;
        width: 48px;

        @media (width: 320px) {
          height: 30px;
          width: 20px;
        }
        @media (width: 375px) {
          height: 40px;
          width: 28px;
        }

        @media (width: 425px) {
          height: 45px;
          width: 31px;
        }
      }
    }
    &__Character {
      display: flex;
      align-items: center;
    }
    &__Name {
      display: flex;
      align-items: center;
    }
    &__Gender {
      display: flex;
      align-items: center;

      &__content {
        display: grid;
        grid-template-columns: 26px 39px;
        gap: 4px;

        @media (width: 320px) {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(4px, 1fr));
          gap: 4px;
        }

        @media (width: 375px) {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(8px, 1fr));
          gap: 3px;
          width: 30px;
        }

        @media (width: 425px) {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(13px, 1fr));
          gap: 1px;
          width: 30px;
        }

        &__logo {
          .material-icons {
            font-size: 24px;

            @media (width: 320px) {
              font-size: 9px;
            }
            @media (width: 375px) {
              font-size: 11px;
            }

            @media (width: 425px) {
              font-size: 13px;
            }
          }
        }

        &__GenderName {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    &__Species {
      display: flex;
      align-items: center;
    }
    &__Episode {
      display: flex;
      align-items: center;
    }
    &__Add {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &__btn {
        width: 43px;
        height: 43px;
        border: 2px solid #11b0c8;
        background-color: #ffffff;
        border-radius: 8px;

        @media (width: 320px) {
          height: 30px;
          width: 30px;
        }

        @media (width: 375px) {
          height: 38px;
          width: 38px;
        }

        @media (width: 425px) {
          height: 40px;
          width: 40px;
        }

        .material-icons {
          color: #11b0c8;

          @media (width: 320px) {
            font-size: 13px;
          }
          @media (width: 375px) {
            font-size: 18px;
          }
          @media (width: 425px) {
            font-size: 18px;
          }

          &--changeColor {
            color: #ffffff;
            background-color: #11b0c8;
          }

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
