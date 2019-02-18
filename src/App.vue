<template>
  <div id="app">
    <h1>中国最好的VUE</h1>
    <AdDialog ref="adDialog"></AdDialog>
    <AppHeader ref="appHeader"></AppHeader>
  </div>
</template>

<script>
import {EventBus} from "@/event-bus";
import AdDialog from "@/components/popup/ad-dialog";
import AppHeader from "@/components/app-header";

export default {
  name: 'app'
  , components: {
    AppHeader,
    AdDialog
    // HelloWorld
  }
  , mounted() {
    this.$refs.adDialog.init();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
