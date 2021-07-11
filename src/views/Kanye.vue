<template>
  <div>
    <i>"{{ quote }}"</i>
    <p>- Kanye West</p>
    <p>
      <button @click="loadQuote">New Quote</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import KanyeAPI from "../services/KanyeAPI";
export default {
  setup() {
    const quote = ref("");

    const loadQuote = async () => {
      try {
        const response = await KanyeAPI.getQuote();
        quote.value = response.data.quote;
      } catch (err) {
        console.log(err);
      }
    };

    loadQuote();

    // axios.get('https://api.kanye.rest/')
    //   .then(response => {
    //     // handle response
    //     quote.value = response.data.quote
    //   }).catch(err => {
    //   console.log(err)
    // })

    const createPost = async () => {
      const response = await KanyeAPI.createPost(
        JSON.stringify({
          title: "foo",
          body: "bar",
          userId: 1
        })
      );

      alert(JSON.stringify(response));
      // axios.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify({
      //     title: 'foo',
      //     body: 'bar',
      //     userId: 1,
      // })).then(response => {
      //   console.log(response)
      // })
    };

    return {
      createPost,
      quote
    };
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
