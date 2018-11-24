<template>
  <div class="breeds-list">
    <h2>Select breed</h2>
    <el-row v-loading="loading">
      <el-col
        :xs="12"
        :sm="6"
        :md="4"
        :lg="3"
        v-for="(subbreeds, breed) in breeds"
        :key="breed"
      >
        <el-dropdown v-if="subbreeds.length" trigger="click">
          <span class="breed">
            {{ breed | capitalize }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="subbreed in subbreeds" :key="subbreed">
              <router-link
                class="link"
                :to="'/breeds/' + breed + '/' + subbreed"
                >{{ subbreed | capitalize }}</router-link
              >
            </el-dropdown-item>
            <el-dropdown-item divided>
              <router-link class="link" :to="'/breeds/' + breed"
                >All</router-link
              >
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <router-link class="breed" v-else :to="'/breeds/' + breed">{{
          breed | capitalize
        }}</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../api.js";

export default {
  name: "Breeds",
  filters: {
    capitalize: value => {
      if (!value) return "";

      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  data: () => ({
    breeds: {},
    loading: false
  }),
  methods: {
    getBreeds() {
      this.loading = true;

      axios
        .get(apiUrl + "/breeds/list/all")
        .then(resp => {
          this.loading = false;

          if (resp.data.status !== "success") return;

          this.breeds = resp.data.message;
        })
        .catch(err => (this.loading = false));
    }
  },
  created() {
    this.getBreeds();
  }
};
</script>

<style lang="stylus" scoped>
.breeds-list {
  min-height: calc(100vh - 100px);
}

.breed {
  display: inline-block;
  padding: 8px 0 4px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover {
    border-color: #333;
  }
}

.link {
  text-decoration: none;
  color: #333;

  &:hover {
    color: #4397B6;
  }
}
</style>
