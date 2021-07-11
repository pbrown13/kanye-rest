import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    backgroundImage: "https://wallpaper.dog/large/17024356.jpg",
    quote: null
  },
  mutations: {
    setBg(state, payload) {
      state.backgroundImage = payload;
    },
    setQuote(state, payload) {
      state.quote = payload;
    }
  },
  actions: {},
  modules: {}
});
