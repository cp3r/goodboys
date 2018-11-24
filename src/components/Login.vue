<template>
  <div class="user">
    <div v-if="isAuth" class="login">
      <el-popover placement="bottom" width="300" trigger="click">
        <div class="logout">
          <router-link to="/breeds/" class="breeds-link"
            >Breeds list</router-link
          >
          <el-button type="primary" native-type="button" @click="logout"
            >Log out</el-button
          >
        </div>
        <el-button native-type="button" type="primary" slot="reference">
          {{ form.name }} <i class="el-icon-arrow-down"></i>
        </el-button>
      </el-popover>
    </div>
    <div v-else>
      <el-popover placement="bottom" title="Login" width="300" trigger="click">
        <el-form ref="form" :model="form" :rules="rules" v-loading="loading">
          <el-form-item label="Login" prop="name">
            <el-input
              type="text"
              placeholder="Enter login"
              v-model.trim="form.name"
            />
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              type="password"
              placeholder="Enter password"
              v-model.trim="form.password"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              native-type="submit"
              type="primary"
              @click.prevent="handleSubmit(form);"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
        <el-button native-type="button" type="primary" slot="reference"
          >Login</el-button
        >
      </el-popover>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { authApiUrl } from "../api.js";

export default {
  name: "Login",
  data: () => ({
    form: {
      name: "",
      password: ""
    },
    rules: {
      name: {
        required: true,
        message: "Empty login",
        trigger: "blur"
      },
      password: {
        required: true,
        message: "Empty password",
        trigger: "blur"
      }
    },
    isAuth: false,
    loading: false
  }),
  methods: {
    handleSubmit() {
      this.loading = true;

      this.$refs.form.validate(valid => {
        if (valid) {
          this.submit();
        } else {
          this.loading = false;
        }
      });
    },

    submit() {
      axios
        .post(authApiUrl, {
          email: this.form.name,
          password: this.form.password
        })
        .then(resp => {
          localStorage.setItem("user-token", resp.data.token);
          localStorage.setItem("user-name", this.form.name);

          this.loading = false;
          this.isAuth = true;
          this.$router.push({ path: "breeds" });
        })
        .catch(err => {
          localStorage.removeItem("user-token");
          localStorage.removeItem("user-name");

          this.loading = false;
        });
    },

    showErrors() {
      if (!this.form.name) {
        this.errors.name = true;
      }

      if (!this.form.password) {
        this.errors.password - true;
      }
    },

    logout() {
      localStorage.removeItem("user-token");
      localStorage.removeItem("user-name");

      this.isAuth = false;
      this.$router.push("/");
    }
  },
  mounted() {
    this.isAuth = !!localStorage.getItem("user-token");
    this.form.name = localStorage.getItem("user-name") || "";
  }
};
</script>

<style lang="stylus" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logout {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.breeds-link {
  padding: 12px 20px;
  display: inline-block;
  font-weight: bold;
  line-height: 1;
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
</style>
