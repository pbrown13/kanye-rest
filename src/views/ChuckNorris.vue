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
      axios.get("https://api.chucknorris.io/jokes/random").then(res => {
        console.log(res.data);
        this.quote = res.data.value;
        this.$store.commit("setQuote", this.quote);
      });
    }
  },

  async created() {
    await this.$store.commit(
      "setBg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVh9Ppk_D5Ya0qO4tGsgvv0yKOHRDiE7Krpw&usqp=CAU"
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
