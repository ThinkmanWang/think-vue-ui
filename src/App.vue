<template>
  <div id="app">
    <!--<h1>中国最好的UI</h1>-->
    <mt-header id="app-header" v-bind:title="selected">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <AdPopup ref="adPopup"></AdPopup>
    <!--<AppBanner ref="appHeader"></AppBanner>-->

    <!--<div>-->
      <!--<mt-cell class="page-part" title="当前选中" :value="selected" />-->
    <!--</div>-->

    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="首页">
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
      </mt-tab-container-item>
    </mt-tab-container>

    <div class="page-tabbar">
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="首页">
          <img slot="icon" src="components/img/close-circle-white-64.png">
          外卖
        </mt-tab-item>
        <mt-tab-item id="发现">
          <img slot="icon" src="components/img/close-circle-white-64.png">
          发现
        </mt-tab-item>
        <mt-tab-item id="我的">
          <img slot="icon" src="components/img/close-circle-white-64.png">
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
import {EventBus} from "@/event-bus";
import AdPopup from "@/components/popup/ad-popup";
import AppBanner from "@/components/app-banner";

export default {
  name: 'app'
  , data() {
    return {
      selected: '首页'
    };
  }
  , components: {
    AppBanner,
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
#app-header {
  height: 48px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
