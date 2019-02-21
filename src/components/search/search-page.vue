<template>
    <div id="main">
        <mt-header id="app-header" title="搜索" fixed="true">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
                <mt-button>关闭</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <input type="button" value="BACK" v-on:click="goBack" />
        <br />
        <iframe src="https://www.baidu.com" width="100%" height="100%" scrolling="no"></iframe>
    </div>
</template>

<script>
    export default {
        name: "Search"
        , methods: {
            goBack() {
                console.log("Exit Login");
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    iframe {
        display: block; /* iframes are inline by default */
        background: #000;
        border: 0; /* Reset default border */
        height: 100vh; /* Viewport-relative units */
        width: 95vw;
    }
</style>