<template>
  <div style="min-height: 450px; max-width: 800px;" class="m-3">
    <div class="kanye">
      <div class="bit"></div>
      <h2 style="color: white;">"{{ quote }}"</h2>

      <div class="bit"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: "https://wallpaper.dog/large/17024356.jpg"
    }
  },
  computed: {
    quote() {
      return this.$store.state.quote;
    }
  }
};
</script>

<style>
.kanye {
  padding-right: 25px;
  padding-left: 25px;

  background-color: rgba(188, 192, 196, 0.8);
  border-radius: 25px;
  border: none;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.15);
}
.spacer {
  height: 100px;
}
.bit {
  height: 50px;
}
</style>
