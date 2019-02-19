<template>
    <div id="AdDialog" class="AdDialog">
        <mt-popup
                v-model="bVisible"
                :modal=false
                position="center">
            <div class="slider" >
                <mt-swipe :auto="3500">
                    <mt-swipe-item v-for="item in swipeData" :key="item.pic">
                        <img :src="item.pic" @click="toAdEvent(item)">
                    </mt-swipe-item>
                </mt-swipe>
            </div>

            <!--<br />-->
            <img id="btnClose" src="./img/close-circle.png" v-on:click="dismiss" />

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
              this.show();
          }
          , toAdEvent (item) {
                if (typeof this._hmt !== 'undefined') {
                    this._hmt.push(['_trackEvent', 'banner', 'click', item.key, '-'])
                }
                // $.report('banner', item.key, 'click', item.key)
                let linkBase = btoa(unescape(encodeURIComponent(item.link)))
                if (item.link.startsWith('http')) {
                    location.href = item.link
                } else {
                    location.href = this.ADDRESS + '/html/openDeepLink?urlBase=' + linkBase
                }
            }
        }
    }
</script>

<style scoped>
    .AdDialog {
        background-color:rgba(255,255,255,0);
    }

    mt-popup{
        background-color:rgba(255,255,255,0);
    }

    .slider {
        height: 188px;
        width: 100%;

        font-size: 30px;
        text-align: center;
        overflow: hidden;
        /*border-radius: 8px;*/
        background-color:rgba(255,255,255,0);
        /*padding: 10px;*/
        /*transform: translate(-50%, 0);*/

        /*filter:alpha(Opacity=60);*/
        /*-moz-opacity:0.6;*/
        /*opacity: 0.6;*/
        margin-bottom: 100px;
    }

    img {
        width: 100%;
        height: 100%;
    }

    /*.AdDialog {*/
        /*filter:alpha(Opacity=60);*/
        /*-moz-opacity:0.6;*/
        /*opacity: 0.6;*/
    /*}*/
</style>

<!--<style scoped lang="sass">-->
    <!--.slider {-->
        <!--height: 188px;-->
        <!--font-size: 30px;-->
        <!--text-align: center;-->
        <!--overflow: hidden;-->
        <!--img {-->
            <!--width: 100%;-->
            <!--height: 100%;-->
        <!--}-->
    <!--}-->
<!--</style>-->