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
    const payload = this.$store.state.isMobile
      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzC1zC7o6FsrgsdsktnKjJ_SUH38x02AE4A&usqp=CAU"
      : "https://s3.amazonaws.com/appforest_uf/f1626029161319x736406629259311900/images.jpeg";

    await this.$store.commit("setBg", payload);

    await this.loadQuote();
    // async created() {
    //   await this.$store.commit(
    //     "setBg",
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzC1zC7o6FsrgsdsktnKjJ_SUH38x02AE4A&usqp=CAU"
    //   );
    //
    //   await this.loadQuote();
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
