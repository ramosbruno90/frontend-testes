const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
        headers: { "Access-Control-Allow-Origin": "*" },
        proxy: "http://localhost:5000/v1",
    }
})
