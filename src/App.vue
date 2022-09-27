<template>
  <div id="app">
    <TableWrap msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import TableWrap from "@/components/TableWrap";

export default {
  name: 'App',
  components: {
    TableWrap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
