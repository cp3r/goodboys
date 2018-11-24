<template>
  <div class="welcome">
    <span class="title">Welcome to Good Boys Club</span>
    <img src="../assets/welcome.jpg" alt="welcome dog">
  </div>
</template>

<script>
export default {
  name: "Welcome"
};
</script>

<style lang="stylus" scoped>
.welcome {
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 3em;
  font-weight: bold;
}
</style>
