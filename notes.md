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

render(h) {
    return h("div", {

    })
}
```js
render(h) {
    return h('div', {
      'class': {
        'is-red': this.isRed
      }
    }, [
      h('p', '这是一个 render 事例')
    ]
  }
```
- 第一个参数（必要参数）：主要用于提供DOM的html内容，类型可以是字符串、对象或函数

- 第二个参数（类型是对象，可选）：用于设置这个DOM的一些样式、属性、传的组件的参数、绑定事件之类

- 第三个参数（类型是数组，数组元素类型是VNode，可选）：主要是指该结点下还有其他结点，用于设置分发的内容，包括新增的其他组件。注意，组件树中的所有VNode必须是唯一的

## 挂载
将生成的真实DOM树，放置到某个元素位置，称之为挂载
挂载方式：
- 通过`el: "css选择器"`进行配置
- 通过`vue实例.$mount("css选择器")`进行配置



