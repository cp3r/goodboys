<template>
  <div id="app">
    <el-container>
      <el-header class="header" height="100px">
        <div class="left">
          <router-link to="/">
            <img class="logo" src="./assets/logo.png" alt="logo">
          </router-link>
        </div>
        <div class="right">
          <Login/>
        </div>
      </el-header>
      <el-main class="main">
        <div class="content">
          <router-view name="menu"></router-view>
          <div class="main">
            <router-view/>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "app",
  components: {
    Login
  }
};
</script>

<style lang="stylus">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.layout {
  width: 100vw;
  height: 100vh;
}

.header {
  padding: 8px 16px;
  background-color: #EC9696;
  border-bottom: 2px solid #333333;
  display: flex;
  justify-content: space-between;
}

.left {
  width: 50%;
  display: flex;
  align-items: center;
}

.right {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.main {
  padding: 0;
  flex-grow: 1;

  @media screen and (min-width: 992px) {
    border-left: 2px solid #333;
  }
}

.content {
  min-height: calc(100vh - 100px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #50C1EC;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
}

.logo {
  width: 80px;
}

.el-button {
  border: 2px solid #333333;
  color: #333333;
  font-weight: bold;

  &--primary {
    background-color: #F8D059;

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
}

.el-popover {
  background-color: #E8E7E2;
  border: 2px solid #333;

  &__title {
    font-weight: bold;
    color: #333;
  }
}

.el-input {
  &__inner {
    border: 2px solid #333;

    &:hover, &:focus {
      border-color: #4397B6;
    }
  }
}

.el-dropdown-menu {
  background-color: #E8E7E2;
  border: 2px solid #333;

  &__item {
    &--divided {
      margin-top: 0;
      border-top: 1px solid #333;

      &:before {
        height: 0;
      }
    }

    &:not(.is-disabled) {
      &:hover {
        background-color: inherit;
        color: #4397B6;
      }
    }
  }
}

.el-carousel {
  &__arrow {
    font-size: 20px;
    font-weight: bold;
    background-color: transparent;
    border: 2px solid #333;
    border-radius: 4px;
    color: #333;

    &:hover {
      background-color: #F8D059;
    }
  }

  &__button {
    width: 10px;
    height: 10px;
    background-color: transparent;
    border: 2px solid #333;
    border-radius: 50%;
  }

  &__indicators--outside {
    button {
      background-color: transparent;
      opacity: 1;
    }

    & .el-carousel__indicator:hover button {
      background-color: #F8D059;
      opacity: 1;
    }
  }

  &__indicator {
    &.is-active button {
      background-color: #F8D059;
    }
  }
}

.el-loading-mask {
  background-color: rgba(250, 250, 250, 0.4);
}

.el-loading-spinner .path {
  stroke: #EC9696;
}

.el-popper[x-placement^=bottom] .popper__arrow {
  border: 2px solid #333333;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background-color: inherit;
  border-bottom: none;
  border-right: none;

  &:after {
    border-bottom-color: transparent;
  }
}

.el-popper[x-placement^=top] .popper__arrow {
  border: 2px solid #333333;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background-color: inherit;
  border-left: none;
  border-top: none;

  &:after {
    border-top-color: transparent;
  }
}

.el-menu {
  background-color: #E8E7E2;
  border-right: 2px solid #333333;

  &-item {
    font-weight: bold;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    &:hover {
      background-color: #F8D059;
      border-color: #333333;
    }

    &.is-active {
      background-color: #F8D059;
      border-color: #333333;
    }
  }
}

.el-submenu {
  &__title {
    font-weight: bold;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    &:hover {
      background-color: #F8D059;
      border-color: #333333;
    }

    i {
      color: #333333;
    }
  }

  &__icon-arrow {
    font-size: 16px;
    font-weight: bold;
    color: #333333;
  }

  &.is-active .el-submenu__title {
    border-bottom-color: transparent;
  }

  & .el-menu {
    background-color: #ffffff;
  }
}

.el-icon-arrow-down {
  font-weight: bold;
}
</style>
