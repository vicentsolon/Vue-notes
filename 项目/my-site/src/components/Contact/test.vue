<template>
    <div class="test-container">
        <Contact />
    </div>
</template>

<script>
    import Contact from "./";
    export default {
        components: {
            Contact
        }
    }
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    .test-container {
        width: 300px;
        height: 500px;
        border: 1px solid;
        background: @dark;
        margin: 0 auto;
    }
</style>