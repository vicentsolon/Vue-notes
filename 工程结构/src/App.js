// 组件注册

import MyButton from "./components/MyButton.js"
import Title from "./components/Title.js"

let template = `
<div>
    <Title title="标题1" head="次级标题1" />
    <Title title="标题2" head="次级标题2" />
    <MyButton />
</div>
`

export default {
    components: {
        MyButton,
        Title
    },
    template
}