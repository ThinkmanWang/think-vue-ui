<template>
  <div id="app">
    <h1>Hello World</h1>
    <AdDialog ref="adDialog"></AdDialog>
  </div>
</template>

<script>
import {EventBus} from "@/event-bus";
import AdDialog from "@/components/dialog/ad-dialog";

export default {
  name: 'app'
  , components: {
    AdDialog
    // HelloWorld
  }
  , mounted() {
    this.$refs.adDialog.init();
    // this.$dlg.modal(AdDialog, {
    //   width: 350
    //   , height: 450
    //   , callback: data=>{
    //
    //   }
    // })
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
