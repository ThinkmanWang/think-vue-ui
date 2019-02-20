<template>
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
    </div>
</template>

<script>
    export default {
        name: "DiscoverPage",
        data () {
            return {
                link:'//blog.csdn.net/michael_ouyang'
            }
        }
    }
</script>

<style scoped>

</style>