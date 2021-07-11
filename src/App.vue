<template>
  <div>
    <div class="row pb-3 ">
      <div id="nav" class="col">
        <router-link to="/">Kanye</router-link> |
        <router-link to="/trump">Trump</router-link> |
        <router-link to="/chucknorris">Chuck Norris</router-link> |
        <router-link to="/brittney">Brittney</router-link>
      </div>
      <div class="col">
        <button class="btn btn-info" @click="getQuote">New Quote</button>
      </div>
    </div>
    <div id="pod" :style="{ backgroundImage: 'url(' + image + ')' }">
      <router-view />
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
const route = useRoute();
import axios from "axios";
import KanyeAPI from "./services/KanyeAPI";

export default {
  data() {
    return {
      quote: null
    };
  },
  computed: {
    image() {
      return this.$store.state.backgroundImage;
    },
    router() {
      return this.$router.options.history.location;
    }
  },
  methods: {
    bQuote() {
      axios
        .get(
          "https://raw.githubusercontent.com/andrewnashed/britney.rest/main/quotes.json"
        )
        .then(res => {
          this.quote = res.data[Math.floor(Math.random() * res.data.length)];
          this.$store.commit("setQuote", this.quote);
        });
    },
    async kanyeQuote() {
      const response = await KanyeAPI.getQuote();
      this.quote = await response.data.quote;
      this.$store.commit("setQuote", this.quote);
    },
    trumpQuote() {
      axios.get("https://api.tronalddump.io/random/quote").then(res => {
        this.quote = res.data.value;
        this.$store.commit("setQuote", this.quote);
      });
    },
    chuckQuote() {
      axios.get("https://api.chucknorris.io/jokes/random").then(res => {
        this.quote = res.data.value;
        alert(JSON.stringify(res.data.value));
        this.$store.commit("setQuote", this.quote);
      });
    },
    async getQuote() {
      if (this.$router.options.history.location === "/") {
        this.kanyeQuote();
      }
      if (this.$router.options.history.location === "/brittney") {
        this.bQuote();
      }
      if (this.$router.options.history.location === "/trump") {
        this.trumpQuote();
      }
      if (this.$router.options.history.location === "/chucknorris") {
        this.chuckQuote();
      }
    }
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
}

#pod {
  padding: 0px;
  max-height: 1000px;
  min-height: 700px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
