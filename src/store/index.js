import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    backgroundImage: "https://wallpaper.dog/large/17024356.jpg",
    quote: null,
    isMobile: null,
    window: null
  },
  mutations: {
    setBg(state, payload) {
      state.backgroundImage = payload;
    },
    setQuote(state, payload) {
      state.quote = payload;
    },
    setScreen(state, payload) {
      state.isMobile = payload;
    },
    setWindow(state, payload) {
      state.window = payload;
    }
  },
  actions: {
    screenSize({ state, commit }, windowWidth) {
      commit("setWindow", windowWidth);
      const payload = windowWidth < 550;
      commit("setScreen", payload);
    }
  },
  modules: {}
});
