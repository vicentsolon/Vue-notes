<template>
    <div class="imageloader-container">
        <img @load="handleLoad" :src="placeholder" />
    </div>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                required: true,
            },
            placeholder: {
                type: String,
                required: true,
            },
            duration: {
                type: Number,
                default: 500,
            },
        },
        methods: {
            handleLoad() {
                let url = this.src;
                let timer = null;
                timer = setTimeout(() => {
                    this.$emit("imageChange", url);
                    clearTimeout(timer);
                }, this.duration);
            },
        },
    };
</script>

<style lang="less" scoped>
    .imageloader-container {
        width: 500px;
        img {
            width: 100%;
        }
    }
</style>
