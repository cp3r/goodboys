<template>
  <div class="breeds-menu">
    <router-link v-if="isMobile" to="/breeds" class="backward-link">
      <i class="el-icon-back"></i>To breeds
    </router-link>
    <el-menu v-else>
      <template v-for="(subbreeds, breed, idBreed) in breeds">
        <el-submenu
          v-if="subbreeds.length"
          :key="idBreed"
          :index="'1-' + (idBreed + 1)"
        >
          <template slot="title">
            <span>{{ breed }}</span>
          </template>
          <el-menu-item :index="'1-' + (idBreed + 1) + '-1'">
            <router-link :to="'/breeds/' + breed" class="menu-link"
              >all</router-link
            >
          </el-menu-item>
          <el-menu-item
            v-for="(subbreed, idSubbreed) in subbreeds"
            :key="idSubbreed"
            :index="'1-' + (idBreed + 1) + '-' + (idSubbreed + 2)"
          >
            <router-link
              :to="'/breeds/' + breed + '/' + subbreed"
              class="menu-link"
              >{{ subbreed }}</router-link
            >
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :key="idBreed" :index="'1-' + (idBreed + 1)">
          <router-link :to="'/breeds/' + breed" class="menu-link">{{
            breed
          }}</router-link>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../api.js";

export default {
  name: "BreedsMenu",
  data: () => ({
    breeds: {}
  }),
  computed: {
    isMobile() {
      return ["xs", "sm", "md"].includes(this.$mq);
    }
  },
  created() {
    this.getBreeds();
  },
  methods: {
    getBreeds() {
      axios
        .get(apiUrl + "/breeds/list/all")
        .then(resp => {
          if (resp.data.status !== "success") return;

          this.breeds = resp.data.message;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="stylus" scoped>
.breeds-menu {
  padding: 16px;
  width: 100%;

  @media screen and (min-width: 992px) {
    padding: 0;
    width: 25%;
    max-height: calc(100vh - 100px);
    overflow-y: auto;
  }
}

.backward-link {
  padding: 8px;
  display: inline-block;
  font-weight: bold;
  background-color: #F8D059;
  border: 2px solid #333333;
  border-radius: 4px;
  color: #333333;
  text-decoration: none;

  &:hover {
    background-color: #F8D059;
    border-color: #333333;
    color: #333333;
    transform: rotate(4deg);
  }

  &:focus {
    background-color: #F8D059;
    border-color: #4397B6;
    color: #4397B6;
  }

  &:active {
    transform: scale(0.95);
  }
}

.menu-link {
  width: 100%;
  height: 100%;
  display: block;
  color: inherit;
  text-decoration: none;
}

.el-icon-back {
  margin-right: 4px;
  font-weight: bold;
}
</style>
