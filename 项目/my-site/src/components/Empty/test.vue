<template>
    <div class="test-container">
        <Empty />
    </div>
</template>

<script>
    import Empty from "./";
    export default {
        components: {
            Empty,
        },
    };
</script>

<style lang="less" scoped>
    .test-container {
        width: 500px;
        height: 400px;
        border: 1px solid;
        margin: 0 auto;
        position: relative;
        resize: both;
        overflow: hidden;
    }
</style>
