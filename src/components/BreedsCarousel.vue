<template>
  <el-carousel
    :interval="5000"
    arrow="always"
    trigger="click"
    indicator-position="outside"
  >
    <el-carousel-item v-for="image in images" :key="image">
      <img :src="image" class="image" alt="dog photo" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "BreedsCarousel",
  props: {
    images: {
      type: Array
    }
  }
};
</script>

<style lang="stylus" scoped>
.image {
  height: 100%;
}
</style>
