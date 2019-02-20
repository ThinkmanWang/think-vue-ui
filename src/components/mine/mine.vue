<template>
    <div class="page">
        <div class="header">
            <div>
                <img class="avatar" src="./img/default-avatar-black-64.png" style="width: 20vmin; height: 20vmin" >
                <span class="username">登录/注册</span>
            </div>
        </div>
        <div>
            <mt-cell
                    title="标题文字"
                    :to="link"
                    is-link
                    value="带链接">
            </mt-cell>
            <!-- 列表使用 -->
            <mt-cell title="标题" label="描述信息" is-link></mt-cell>
            <!-- 列表使用 -->
            <mt-cell title="标题" is-link>
                <span>信息</span>
                <img slot="icon" src="./img/default-avatar-black-64.png" width="24" height="24">
            </mt-cell>
            <mt-cell title="标题" label="描述信息" is-link></mt-cell>
            <mt-cell title="标题" label="描述信息" is-link></mt-cell>
            <mt-cell title="标题" label="描述信息" is-link></mt-cell>
            <mt-cell title="标题" label="描述信息" is-link></mt-cell>
            <mt-cell title="标题" label="描述信息" is-link></mt-cell>
            <mt-cell title="标题" label="描述信息" is-link></mt-cell>
            <mt-cell title="标题" label="描述信息" is-link></mt-cell>
            <mt-cell title="标题" label="描述信息" is-link></mt-cell>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MinePage"
        , data () {
            return {
                link:'https://baidu.com'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .page {
        justify-content: left;
        .header {
            display: flex;
            /*实现垂直居中*/
            align-items: center;
            /*实现水平居中*/
            justify-content: center;

            /*text-align: justify;*/
            width: 100%;
            height: 25vh;
            background: lightskyblue;

            .avatar {
                width: 20vmin;
                height: 20vmin;
                align: center;
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
    }
</style>