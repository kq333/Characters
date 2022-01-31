import { createStore } from "vuex";

export default createStore({
  state: {
    Arrs: [],
    AddToFav: [],
    searchInputValue: "",
    BtnId: [],
    searchBy: "Name",
    iconName: [],
    GraphQlPageNum: 1,
    BtnsNumbers: 41,
  },

  mutations: {
    searchItems(state, inputsValue) {
      state.searchInputValue = inputsValue;
    },

    searchedBy(state, text) {
      state.searchBy = text;
    },

    changeColorBtn(state, item) {
      state.BtnId.push(item);
    },

    removeColorFromBtn(state, item) {
      state.BtnId.splice(state.BtnId.indexOf(item), 1);
    },

    removeFromFavoritesPage(state, RemovedCharacter) {
      const index2 = state.BtnId.findIndex((elem) => elem == RemovedCharacter);

      state.BtnId.splice(index2, 1);
      state.AddToFav.splice(index2, 1);
    },

    RemovefromArrayCharacter(state, RemovedCharacter) {
      const index = state.AddToFav.findIndex(
        (elem) => RemovedCharacter.id == elem.id
      );

      state.AddToFav.splice(index, 1);
    },

    addandRemoveValues(state, clickedValues) {
      const find = state.AddToFav.find((elem) => clickedValues.id === elem.id);
      const index = state.AddToFav.findIndex(
        (elem) => clickedValues.id === elem.id
      );

      if (find == undefined) {
        state.AddToFav.push(clickedValues);
      } else if (find) {
        state.AddToFav.splice(index, 1);
      }
    },

    addGenderIcon(state, elem) {
      switch (elem) {
        case "Male":
          return (state.iconName = "male");
        case "Female":
          return (state.iconName = "female");
        case "Genderless":
          return (state.iconName = "clear");
        case "unknown":
          return (state.iconName = "remove");
      }
    },

    charactersValue(state, Characters) {
      const charactersMap = Characters.map((item) => {
        return {
          id: item.id,
          name: item.name,
          image: item.image,
          gender: item.gender,
          species: item.species,
          episode: item.episode.slice(0, 1),
        };
      });

      localStorage.setItem("setValue", JSON.stringify(charactersMap));
      const getLocatData = localStorage.getItem("setValue");
      state.Arrs = JSON.parse(getLocatData);
    },

    CharactersNumbergraphql(state, payload) {
      state.GraphQlPageNum = payload;
    },
  },

  actions: {
    async getData({ commit, state }) {
      let results = await fetch("https://rickandmortyapi.com/graphql/", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          query: `{
        characters(page:${state.GraphQlPageNum}) {
          results {
            id
            name
            image
            gender
            species
            episode{
              episode
            }
          }
        }
      }`,
        }),
      });
      let characters = await results.json();

      commit("charactersValue", characters.data.characters.results);
    },
  },

  modules: {},
});
