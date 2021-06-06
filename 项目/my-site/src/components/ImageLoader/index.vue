<template>
    <div class="imageloader-container">
        <img v-if="!everythingDone" class="placeholder" :src="placeholder" />
        <img
            @load="handleLoad"
            class="origin"
            :src="src"
            :style="{
                opacity: originOpacity,
                transition: `all ${duration}ms`,
            }"
        />
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
                let timer = null;
                this.originLoaded = true;
                timer = setTimeout(() => {
                    this.everythingDone = true;
                    this.$emit("imageChange");
                    clearTimeout(timer);
                }, this.duration);
            },
        },
        data() {
            return {
                originLoaded: false,
                everythingDone: false
            };
        },
        computed: {
            originOpacity() {
                return this.originLoaded ? 1 : 0;
            },
        },
    };
</script>

<style lang="less" scoped>
    @import "~@/styles/mixin.less";
    .imageloader-container {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        img {
            .self-fill();
            object-fit: cover;
        }
        .placeholder {
            filter: blur(2vw);
        }
    }
</style>
