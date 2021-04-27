## Vue的初步使用

```js
var vm = new Vue({
    el: "#app",
    data: {
        
    },
    computed: {
        
    },
    methods: {
        
    }
});
```
## 核心概念

### 注入
vue会将以下配置注入到vue实例：
- data: 和页面相关的数据
- computed: 通过已有数据计算出来的数据
- methods: 方法

### 虚拟dom树
直接操作真实的DOM会引发严重的效率问题，vue使用虚拟DOM(vnode)的方式来描述要渲染的内容

vnode是一个**普通的**js对象，用于描述界面上应该有什么，比如：
```js
var vnode = {
    tag: 'h1',
    children: [
        {
            tag: undefined, text: 'Hello Wrold'
        }
    ]
}
```

上面对象描述了：
```
有一个标签名为h1的节点，它有一个子子节点，该节点是一个文本，内容为[Hello Wrold]
```

```html
<h1>Hello Wrold</h1>
```

**vue模板并不是真实的DOM，它会被编译成虚拟DOM**




