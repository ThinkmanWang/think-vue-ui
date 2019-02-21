<template>
    <div id="main">
        <input type="button" value="BACK" v-on:click="goBack" />
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

</style>