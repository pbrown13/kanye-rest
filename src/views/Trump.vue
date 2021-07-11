<template>
  <div>
    <div style="display: flex; padding-top: 25px">
      <div style="margin: auto">
        <quote
          :quote="quote"
          :bg="
            'https://s3.amazonaws.com/appforest_uf/f1626027494983x191932590494022100/britnney.png'
          "
        ></quote>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Quote from "../components/Quote.vue";

export default {
  components: { Quote },

  data() {
    return {
      quote: null
    };
  },
  methods: {
    loadQuote() {
      axios.get("https://api.tronalddump.io/random/quote").then(res => {
        console.log(res.data);
        this.quote = res.data.value;
        this.$store.commit("setQuote", this.quote);
      });
    }
  },

  async created() {
    await this.$store.commit(
      "setBg",
      "https://s3.amazonaws.com/appforest_uf/f1626029403472x536392744604647900/download%20%281%29.jpeg"
    );

    await this.loadQuote();
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
