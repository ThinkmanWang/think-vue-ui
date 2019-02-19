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
        name: "AdDialog"
        , props: {
            showPopup: {
                type: Boolean
                , default: true
            }
        }
        , data() {
            return {
                // bVisible:false
                swipeData: [
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
            this.showPopup = true;
          }
          , dismiss() {
              this.showPopup = false;
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
.AdDialog {
    /*width: 300px;*/
    /*margin-top: 100px;*/

    .slider {
        width: 50vmin;
        height: 50vmin;
        /*font-size: 30px;*/
        text-align: center;
        overflow: hidden;
        margin-bottom: 8vmin;

        img {
            width: 100%;
            height: 100%;
        }
    }
}

</style>