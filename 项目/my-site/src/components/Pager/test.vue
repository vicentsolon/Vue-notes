<template>
    <div>
        <Pager @pageChange="handlePageClick" :current="current" :total="total" />
    </div>
</template>

<script>
    import Pager from "./";
    export default {
        data() {
            return {
                current: 1,
                total: 301,
            };
        },
        components: {
            Pager,
        },
        methods: {
            handlePageClick(newPage) {
                this.current = newPage;
                console.log(`加载页面数据，当前页码 ${newPage} `);
            },
        },
    };
</script>

<style lang="less" scoped></style>
