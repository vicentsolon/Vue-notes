<template>
    <div class="empty-container">
        <Icon type="empty" />
        <p>{{ text }}</p>
    </div>
</template>

<script>
    import Icon from "@/components/Icon"
    export default {
        components: {
            Icon
        },
        props: {
            text: {
                type: String,
                default: "无数据",
            },
        },
    }
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    .empty-container {
        width: 100%;
        text-align: center;
        color: @lightWords;
        font-size: 50px;
        p {
            font-size: 12px;
        }
    }
</style>