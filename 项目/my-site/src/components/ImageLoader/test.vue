<template>
    <div>
        <ImageLoader
            @imageChange="handleImageChange"
            src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
            :placeholder="placeholder"
        />
    </div>
</template>

<script>
    import ImageLoader from "./";
    export default {
        components: {
            ImageLoader,
        },
        data() {
            return {
                placeholder:
                    "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
            };
        },
        methods: {
            handleImageChange(url) {
                this.placeholder = url;
            },
        },
    };
</script>

<style lang="less" scoped></style>
