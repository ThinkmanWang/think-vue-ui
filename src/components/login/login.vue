<template>
    <div>
        <h1>Login</h1>
        <h1>Login</h1>
        <input type="button" value="BACK" v-on:click="goBack" />
    </div>
</template>

<script>
    export default {
        name: "Login"
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