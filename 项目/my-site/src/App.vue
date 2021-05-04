<template>
    <div>
        <Pager @pageChange="handlePageClick" :total="total" :current="current" />
    </div>
</template>

<script>
    import Avatar from "./components/Avatar";
    import Icon from "./components/Icon";
    import Pager from "./components/Pager";
    export default {
        name: "App",
        components: {
            Avatar,
            Icon,
            Pager
        },
        data() {
            return {
                total: 301,
                current: 1
            }
        },
        methods: {
            handlePageClick(newPage) {
                this.current = newPage;
                console.log(`加载页面数据，当前页码 ${newPage} `)
            }
        },
    };
</script>

<style lang="less" scoped>

</style>
