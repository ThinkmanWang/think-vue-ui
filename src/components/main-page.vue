<template>
    <div id="Main">
        <mt-header id="app-header" v-bind:title="selected" fixed="true">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
                <mt-button >关闭</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <AdPopup ref="adPopup"></AdPopup>

        <mt-tab-container class="page-tabbar-container" v-model="selected">
            <mt-tab-container-item id="首页">
                <IndexPage></IndexPage>
            </mt-tab-container-item>
            <mt-tab-container-item id="发现">
                <DiscoverPage></DiscoverPage>
            </mt-tab-container-item>
            <mt-tab-container-item id="我的">
                <MinePage></MinePage>
            </mt-tab-container-item>
        </mt-tab-container>

        <div class="page-tabbar">
            <mt-tabbar v-model="selected" fixed>
                <mt-tab-item id="首页">
                    <!--<img src="components/img/close-circle-white-64.png"></mt-tab-item>-->
                    <img slot="icon" src="@/components/img/close-circle-white-64.png" />
                    首页
                </mt-tab-item>
                <mt-tab-item id="发现">
                    <img slot="icon" src="@/components/img/close-circle-white-64.png" />
                    发现
                </mt-tab-item>
                <mt-tab-item id="我的">
                    <img slot="icon" src="@/components/img/close-circle-white-64.png" />
                    我的
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>

<script>
    import AdPopup from "@/components/popup/ad-popup";
    import IndexPage from "@/components/index";
    import DiscoverPage from "@/components/discover/discover";
    import MinePage from "@/components/mine/mine";
    import thinkutils from "@/lib/thinkutils/thinkutils"

    export default {
        name: 'Main'
        , data() {
            return {
                selected: '首页'
            };
        }
        , components: {
            MinePage,
            DiscoverPage,
            IndexPage,
            AdPopup,
            // HelloWorld
        }
        , methods: {

        }
        , mounted() {
            console.log(thinkutils.func1());
            console.log(thinkutils.func2());
            console.log(thinkutils.DateUtils.func3());
            console.log(thinkutils.DateUtils.today());

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
    #Main {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        padding-top: 48px;
        /*margin-top: 60px;*/
    }
</style>
