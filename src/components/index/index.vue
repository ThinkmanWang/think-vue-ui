<template>
    <div>
        <AppBanner ref="appHeader"></AppBanner>
        <!-- 种类 -->
        <div class="types">
            <types-item v-for="item in types"
                        :key="item.ico"
                        :ico="item.ico"
                        :txt="item.txt" @toList="toList(item)"></types-item>
        </div>
    </div>
</template>

<script>
    import AppBanner from "@/components/app-banner";
    import TypesItem from '@/components/controlls/types-item/types-item'

    export default {
        name: "IndexPage",
        components: {AppBanner,TypesItem}
        , data() {
            return {
                types: [
                    {
                        ico: require('./img/types/food1.png'),
                        txt: '美食',
                        cname: '美食'
                    },
                    {
                        ico: require('./img/types/hotel1.png'),
                        txt: '酒店',
                        cname: '酒店'
                    },
                    {
                        ico: require('./img/types/movie.png'),
                        txt: '电影/演出',
                        cname: '电影院'
                    },
                    {
                        ico: require('./img/types/fruits.png'),
                        txt: '生鲜果蔬',
                        cname: '水果生鲜'
                    },
                    {
                        ico: require('./img/types/son.png'),
                        txt: '亲子',
                        cname: '亲子'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .types {
        overflow: hidden;
        padding-top: 6px;
        padding-bottom: 12px;
        background-color: #fff;
    }
</style>