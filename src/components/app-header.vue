<template>
    <div class="slider">
        <mt-swipe :auto="3500">
            <mt-swipe-item v-for="item in swipeData" :key="item.pic">
                <img :src="item.pic" @click="toAdEvent(item)">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "AppHeader"

        , data() {
            return {
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
    }
</script>

<style scoped>
    .slider {
        height: 188px;
        font-size: 30px;
        text-align: center;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
    }

</style>