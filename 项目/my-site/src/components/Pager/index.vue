<template>
    <div class="pager-container" v-if="pageNumber > 1">
        <a @click="handleClick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
        <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }">&lt;&lt;</a>
        <a
            @click="handleClick(item)"
            v-for="(item, index) in numbers"
            :key="index"
            :class="{ active: item === current }"
            >{{ item }}</a
        >
        <a @click="handleClick(current + 1)" :class="{ disabled: current === pageNumber }"
            >&gt;&gt;</a
        >
        <a @click="handleClick(pageNumber)" :class="{ disabled: current === pageNumber }"
            >&gt;&gt;|</a
        >
    </div>
</template>

<script>
    export default {
        props: {
            current: {
                type: Number,
                default: 1,
            },
            total: {
                type: Number,
                default: 0,
            },
            limit: {
                type: Number,
                default: 10,
            },
            visibleNumber: {
                type: Number,
                default: 10,
            },
        },
        computed: {
            pageNumber() {
                return Math.ceil(this.total / this.limit);
            },
            numbers() {
                let nums = [];
                for (let i = this.visibleMin; i <= this.visibleMax; i++) {
                    nums.push(i);
                }
                return nums;
            },
            visibleMin() {
                let min = this.current - Math.floor(this.visibleNumber / 2);
                
                if (min < 1) {
                    min = 1;
                }
                return min;
            },
            visibleMax () {
                let max = this.visibleMin + this.visibleNumber - 1;
                if (max > this.pageNumber) {
                    max = this.pageNumber
                }
                return max;
            }
        },
        methods: {
            handleClick(newPage) {
                // 自定义事件函数处理
                if (newPage < 1) {
                    newPage = 1;
                }
                if (newPage > this.pageNumber) {
                    newPage = this.pageNumber;
                }
                if (newPage === this.current) {
                    return;
                }
                // 抛出事件
                this.$emit("pageChange", newPage);
            },
        },
    };
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    .pager-container {
        display: flex;
        justify-content: center;
        margin: 20px 0;
        a {
            color: @primary;
            margin: 0 6px;
            cursor: pointer;
            font-weight: 600;
            &.active {
                color: @words;
                cursor: text;
            }
            &.disabled {
                color: @lightWords;
                cursor: not-allowed;
            }
        }
    }
</style>
