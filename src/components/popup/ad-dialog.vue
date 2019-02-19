<template>
    <div id="AdDialog" class="AdDialog">
        <mt-popup
                v-model="bVisible"
                :modal=false
                position="center">

            <div>
                <div class="slider" >
                    <mt-swipe :auto="3500">
                        <mt-swipe-item v-for="item in swipeData" :key="item.pic">
                            <img :src="item.pic" v-on:click="toAdEvent(item)">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>

                <!--<br />-->
                <h2>fxxkfxxkfxxkfxxkfxxkfxxk</h2>
                <img id="btnClose" src="./img/close-circle.png" v-on:click="dismiss" />
            </div>
        </mt-popup>
    </div>
</template>

<script>
    // import { Swipe, SwipeItem } from 'mint-ui';

    export default {
        name: "AdDialog"
        , data() {
            return {
                bVisible:false
                , swipeData: [
                    {
                        pic: require('./img/jd2019.jpeg'),
                        link: 'https://u.jd.com/gvrmwX',
                        key: 'jd年货节'
                    },
                    {
                        pic: require('./img/taobao.jpg'),
                        link: 'https://u.jd.com/gvrmwX',
                        key: 'taobao特卖'
                    }
                ]
            };
        }
        , methods: {
          show() {
            this.bVisible = true;
          }
          , dismiss() {
              this.bVisible = false;
          }
          , init() {
              // init ad items from server and show if list is not null
              this.show();
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

    .slider {
        height: 188px;
        font-size: 30px;
        text-align: center;
        overflow: hidden;
        margin-bottom: 32px;
        img {
            width: 100%;
            height: 100%;
        }
    }

</style>