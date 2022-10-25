<template>
  <div id="app">
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Hello Vue Capacitor",
    };
  },
  mounted() {},
};
</script>

<style>
.container {
  text-align: center;
}
</style>
