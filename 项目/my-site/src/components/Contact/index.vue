<template>
    <div class="contact-container">
        <ul>
            <li>
                <a href="mailto:603413691@qq.com">
                    <div class="icon">
                        <Icon type="mail" />
                    </div>
                    <span>
                        603413691@qq.com
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import Icon from "@/components/Icon";
    export default {
        components: {
            Icon,
        },
    };
</script>

<style lang="less" scoped>
    @import "~@/styles/global.less";
    @import "~@/styles/var.less";
    .contact-container {
        color: @gray;
        padding: 20px;
        ul {
            list-style: none;
        }
        a {
            display: flex;
            align-content: center;
            font-size: 14px;
        }
        .icon {
            font-size: 26px;
            width: 36px;
        }
        li {
            height: 30px;
            line-height: 30px;
            margin: 20px 0;
        }
    }
</style>
