<template>
    <div class="cell">
        <span class="title">{{ title }}</span>
        <span class="value">{{ value }}</span>
        <img class="arraw" src="../img/arraw-right-gray-64.png">
    </div>
</template>

<script>
    export default {
        name: "BasicCell"
        , props: {
            title: {
                type: String
                , default: "OOXX"
            }
            , value: {
                type: String
                , default: "fxxk"
            }
        }
    }
</script>

<style lang="scss" scoped>
.cell {
    height: 48px;
    width: 100%;
    background-color: lightskyblue;

    .title {
        align-items: center;
        width: 50%;
        height: 100%;
        text-align: left;
    }
    .value {
        align-items: center;
        width: 30%;
        height: 100%;
        text-align: left;
    }
    .arraw {
        height: 36px;
        width: 36px;
        max-width: 20%;
        text-align: right;
        align-items: center;
    }

}
</style>