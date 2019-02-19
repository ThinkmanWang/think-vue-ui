<template>
    <div id="AdDialog" class="AdDialog">

        <mt-popup
                id="ad-popup"
                style="width: 50vmin; height: 50vmin; background-color: transparent"
                v-model="showPopup"
                :modal=true
                position="center">

            <div>
                <div class="slider" >
                    <mt-swipe :auto="3500" >
                        <mt-swipe-item v-for="item in swipeData" :key="item.pic">
                            <img :src="item.pic" v-on:click="toAdEvent(item)">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>

                <!--<br />-->
                <!--<h2>fxxf</h2>-->
                <img id="btnClose" src="./img/close-circle-white-64.png" v-on:click="dismiss" style="width: 6vmin; height: 6vmin" />
            </div>
        </mt-popup>
    </div>
</template>

<script>
    // import { Swipe, SwipeItem } from 'mint-ui';

    export default {
        name: "AdPopup"
        , props: {
        }
        , data() {
            return {
                showPopup: false
                , swipeData: [
                ]
            };
        }
        , methods: {
          show() {
            this.showPopup = true;
          }
          , dismiss() {
              // console.log("FXXK02");
              this.showPopup = false;
          }
          , initData(aryData) {
              // init ad items from server and show if list is not null
              this.showPopup = false;

              if (null == aryData || aryData.length <= 0) {
                  this.swipeData = [];
                  return;
              }

              console.log("swipeData length => " + this.swipeData.length);
              this.swipeData = aryData;
              if (this.swipeData.length > 0) {
                this.show();
              } else {
                  console.log("swipeData length <= 0 do not show popup");
              }
          }
          , toAdEvent (item) {
              this.dismiss();

              if (typeof this._hmt !== 'undefined') {
                  this._hmt.push(['_trackEvent', 'banner', 'click', item.key, '-'])
              }

              // $.report('banner', item.key, 'click', item.key)
              let linkBase = btoa(unescape(encodeURIComponent(item.link)))
              if (item.link.startsWith('http')) {
                  // window.open(item.link);
                  location.href = item.link
              } else {
                  location.href = this.ADDRESS + '/html/openDeepLink?urlBase=' + linkBase
              }
          }

        }
        , mounted() {
            console.log("FXXK HAHAHA")
        }
    }
</script>

<style scoped lang="scss">
    /*.AdDialog {*/
        /*!*width: 100%;*!*/
        /*mt-popup {*/
            /*!*width: 100%;*!*/
            /*!*height: 188px;*!*/
            /*.slider {*/
                /*height: 188px;*/
                /*font-size: 30px;*/
                /*text-align: center;*/
                /*overflow: hidden;*/
                /*img {*/
                    /*width: 100%;*/
                    /*height: 100%;*/
                /*}*/
            /*}*/
        /*}*/

    /*}*/
.AdDialog {
    /*width: 300px;*/
    /*margin-top: 100px;*/

    .slider {
        width: 50vmin;
        height: 50vmin;
        /*font-size: 30px;*/
        text-align: center;
        overflow: hidden;
        margin-bottom: 5vmin;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

</style>