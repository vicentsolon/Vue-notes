let template = `<button @click="count ++">当前点击{{count}}次</button>`;

export default {
    data() {
        return {
            count: 0
        }
    },
    template
}