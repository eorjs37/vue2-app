<template>
  <div id="app"></div>
</template>

<script>
import { Device } from "@capacitor/device";
export default {
  name: "App",
  data() {
    return {
      title: "Hello Vue Capacitor",
    };
  },
  created() {},
  async mounted() {},

  methods: {
    async getDevice() {
      try {
        const info = await Device.getInfo();
        return info;
      } catch (error) {
        console.error("getDevice error : ", error);
        return error;
      }
    },
  },
};
</script>

<style lang="scss"></style>
