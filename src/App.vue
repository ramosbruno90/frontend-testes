<template>
  <section class="section">
    <h1 class="title is-3 has-text-grey">Teste de conexão</h1>
    <h2 class="subtitle is-6 has-text-grey">
      Author: <a href="https://github.com/ramosbruno90"> Bruno Ramos </a>
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Download: {{ conn }}
      <br />
      Upload:
    </h3>
  </section>
</template>

<script>
  import axios from "axios";
  export default {
    name: "App",
    data() {
      return {
        conn: {},
      };
    },
    created() {
      // this.fetch();
    },
    methods: {
      fetch() {
        const baseURL = "http://localhost:8080";
        const header = { "Access-Control-Allow-Origin": "*" };
        axios
          .get(baseURL + "/test_connection", header)
          .then((response) => {
            this.isLoading = true;
            this.conn = response.data.details;
          })
          .catch((error) => {
            this.isLoading = false;
            console.log(error);
          })
          .finally(() => {
            this.isLoading = false;
          });
      },
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
