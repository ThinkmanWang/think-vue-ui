<template>
    <div class="page">
        <div class="header">
            <div>
                <img class="avatar" src="./img/default-avatar-black-64.png" style="width: 20vmin; height: 20vmin" >
                <span class="username">登录/注册</span>
            </div>
        </div>
        <mt-cell title="标题文字"></mt-cell>
    </div>
</template>

<script>
    export default {
        name: "MinePage"
    }
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    /*实现垂直居中*/
    align-items: center;
    /*实现水平居中*/
    justify-content: center;

    /*text-align: justify;*/
    width:100%;
    height:25vh;
    background: lightskyblue;
    .avatar {
        width: 20vmin;
        height: 20vmin;
        align:center;
    }
    .username {
        margin-top: 3vmin;
        display: block;
        font-size: 14px;
        line-height: 14px;
        text-align: center;
        color: whitesmoke;
        font-weight: bold;
    }
}
</style>