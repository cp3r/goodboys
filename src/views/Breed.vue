<template>
  <el-container>
    <el-container>
      <el-header>
        <h2>{{ title | capitalize }}</h2>
      </el-header>
      <el-main v-loading="loading">
        <BreedsCarousel v-if="images.length" :images="images" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../api.js";
import BreedsMenu from "@/components/BreedsMenu.vue";
import BreedsCarousel from "@/components/BreedsCarousel.vue";

export default {
  name: "Breed",
  components: {
    BreedsMenu,
    BreedsCarousel
  },
  filters: {
    capitalize: value => {
      if (!value) return "";

      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  data: () => ({
    images: [],
    loading: false
  }),
  computed: {
    title() {
      const breed = this.$route.params.breed;
      const subbreed = this.$route.params.subbreed;

      return subbreed ? subbreed + " " + breed : breed;
    }
  },
  watch: {
    $route(to, from) {
      this.getImages();
    }
  },
  created() {
    this.getImages();
  },
  methods: {
    getImages() {
      this.loading = true;

      const breed = this.$route.params.breed;
      const subbreed = this.$route.params.subbreed;

      let path = subbreed ? breed + "/" + subbreed : breed;

      axios
        .get(apiUrl + `/breed/${path}/images/random/10`)
        .then(resp => {
          this.loading = false;
          if (resp.data.status !== "success") return;

          this.images = resp.data.message;
        })
        .catch(err => (this.loading = false));
    }
  }
};
</script>

<style scoped lang="stylus">
.aside {
  max-height: 100vh;
}
</style>
