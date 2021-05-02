<template>
    <div>
        <Avatar :url="img" :size="50" />
        <Icon type="home" />
    </div>
</template>

<script>
import Avatar from './components/Avatar.vue'
import Icon from './components/Icon.vue'
export default {
    name: "App",
    data() {
        return {
            img: require("./img/1.png")
        }
    },
    components: {
        Avatar,
        Icon
    }
}
// 在 vue 单文件组件中，正确的显示一个图片的关键：
// 1.该图片资源被 require 或 import ，即会被 webpack 的 url-loader 处理到最后的目录中
// 2.img src 属性需要被替换为最后的图片资源路径
</script>

<style scoped>
    .iconfont {
        color: red;
        font-size: 30px;
    }
</style>