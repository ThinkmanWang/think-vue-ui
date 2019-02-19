<template>
  <div id="app">
    <!--<h1>中国最好的UI</h1>-->
    <AdPopup ref="adPopup"></AdPopup>
    <AppHeader ref="appHeader"></AppHeader>
  </div>
</template>

<script>
import {EventBus} from "@/event-bus";
import AdPopup from "@/components/popup/ad-popup";
import AppHeader from "@/components/app-header";

export default {
  name: 'app'
  , components: {
    AppHeader,
    AdPopup
    // HelloWorld
  }
  , methods: {

  }
  , mounted() {
    var aryData = [
      {
          pic: 'https://www.baidu.com/img/xinshouye_587b8961411e2b7405bfa4e20c143faa.png',
          link: 'https://u.jd.com/gvrmwX',
          key: 'jd年货节'
      },
      {
          pic: 'https://www.baidu.com/img/xinshouye_587b8961411e2b7405bfa4e20c143faa.png',
          link: 'https://u.jd.com/gvrmwX',
          key: 'taobao特卖'
      }
    ];

    // var aryData = [];

    this.$refs.adPopup.initData(aryData);
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
