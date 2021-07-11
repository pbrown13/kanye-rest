<template>
  <div>
    <div>
      <p>
        <button @click="loadQuote">New Quote</button>
      </p>
    </div>
    <div style="display: flex">
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
      axios
        .get(
          "https://raw.githubusercontent.com/andrewnashed/britney.rest/main/quotes.json"
        )
        .then(res => {
          console.log(res.data);
          this.quote = res.data[Math.floor(Math.random() * res.data.length)];
        });
    }
  },

  async created() {
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
