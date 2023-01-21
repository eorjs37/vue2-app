const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/_variable.scss";
          @import "@/assets/styles/styles.scss";
        `,
      },
    },
  },
});
