<template>
  <div style="min-height: 450px; width: 400px;">
    <div class="kanye" :style="{ backgroundImage: 'url(' + bg + ')' }">
      <div class="bit"></div>
      <h2 style="color: white;">"{{ quote }}"</h2>

      <div class="spacer"></div>
      <div class="spacer"></div>
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: String
    },
    bg: {
      type: String,
      default: "https://wallpaper.dog/large/17024356.jpg"
    }
  }
};
</script>

<style>
.kanye {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.spacer {
  height: 100px;
}
.bit {
  height: 50px;
}
</style>
