<template>
  <div class="container">
    <div class="content">
      <div class="content__logo">
        <img src="../assets/Rick_Morty_logo.png" />
      </div>
      <div class="content__searchComponent">
        <SearchComponent />
      </div>
    </div>
  </div>
</template>

<script>
import SearchComponent from "../components/SearchComponent.vue";

export default {
  name: "HeaderComponent",

  components: {
    SearchComponent,
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 965px;
  height: 134px;
  display: flex;
  align-items: center;
  margin-left: 120px;

  @media (width: 320px) {
    display: flex;
    align-items: flex-start;
    margin-left: 10px;
    margin-top: -70px;
  }

  @media (width: 375px) {
    display: flex;
    align-items: flex-start;
    margin-left: 8px;
    margin-top: -45px;
    height: 110px;
  }

  @media (width: 425px) {
    display: flex;
    margin-left: 8px;
    margin-top: 10px;
    height: 110px;
    max-width: 315px;
  }

  .content {
    max-width: 965px;
    display: grid;
    grid-template-columns: 240px 550px;
    gap: 80px;

    @media (width: 320px) {
      width: 120px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    }

    @media (width: 375px) {
      width: 150px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    }

    @media (width: 425px) {
      width: 200px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    }

    &__logo {
      margin-top: 32px;
      width: 240px;
      height: 70px;
      img {
        width: 240px;
        height: 70px;

        @media (width: 320px) {
          margin-top: 50px;
          max-width: 55px;
          height: 27px;
        }

        @media (width: 375px) {
          margin-top: 25px;
          max-width: 63px;
          height: 30px;
        }

        @media (width: 425px) {
          max-width: 63px;
          height: 30px;
          margin-top: 8px;
        }
      }
    }

    &__searchComponent {
      margin-left: 40px;

      @media (width: 320px) {
        margin-top: -28px;
        margin-left: 50px;
        height: 30px;
      }

      @media (width: 375px) {
        margin-top: -78px;
        margin-left: 57px;
        height: 30px;
      }

      @media (width: 425px) {
        margin-top: -192px;
        margin-left: 57px;
        height: 27px;
      }
    }
  }
}
</style>
