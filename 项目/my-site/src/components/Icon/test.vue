<template>
    <div>
        <Icon type="weixin" />
    </div>
</template>

<script>
    import Icon from "./";
    export default {
        components: {
            Icon
        }
    }
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    .icon-container {
        font-size: 32px;
        color: @lightWords;
    }
</style>