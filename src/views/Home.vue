<template>
  <div>
    <div style="display: flex; padding-top: 25px">
      <div style="margin: auto">
        <quote
          :quote="quote"
          :bg="
            'https://s3.amazonaws.com/appforest_uf/f1626028365411x341945020555228160/kanye.png'
          "
        ></quote>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import KanyeAPI from "../services/KanyeAPI";
import Quote from "../components/Quote.vue";
export default {
  components: { Quote },
  data() {
    return {
      quote: null
    };
  },
  methods: {
    async loadQuote() {
      const response = await KanyeAPI.getQuote();
      this.quote = await response.data.quote;
      this.$store.commit("setQuote", this.quote);
    }
  },

  async created() {
    await this.$store.commit(
      "setBg",
      "https://s3.amazonaws.com/appforest_uf/f1626028365411x341945020555228160/kanye.png"
    );
    this.loadQuote();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
