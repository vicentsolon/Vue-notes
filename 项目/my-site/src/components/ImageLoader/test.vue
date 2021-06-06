<template>
    <div class="test-container">
        <ImageLoader
            @imageChange="handleImageChange"
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
            placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        />
    </div>
</template>

<script>
    import ImageLoader from "./";
    export default {
        components: {
            ImageLoader,
        },
        methods: {
            handleImageChange() {
                console.log("图片加载结束")
            },
        },
    };
</script>

<style lang="less" scoped>
    .test-container {
        width: 500px;
        height: 400px;
        border: 1px solid;
        margin: 0 auto;
    }
</style>
