::: tip 写在前面

:raised_hands: 文档不全，对应的详情内容请访问官网，冲！！！ :muscle: :clap: :muscle:

:::

# 一、特性

## 最新的技术栈，基于 `Vue3` 、 `Ant Design Vue` 、 `TypeScript` 、 `Vite` 开发

- vue3 语法 Composition Api 按需加载
- vite 直接启动开发服务器，请求那个模块对该模块给予打包
- TypeScript 更好的类型检验，和代码提示，编译时就会检测错误
- Ant Design Vue 全新的 UI 框架，全新的页面
- :zap: 轻量快速的热重载，无论应用程序大小如何，都始终极快的模块热重载
- :muscle: 丰富的示例，常见的 web 端插件示例实现
  - 打印
  - 水印
  - 剪切板
  - Excel
  - 文件下载
  - 图片预览
  - 图片裁剪
  - day.js 时间计算
  - websocket 实时通讯
- :100: 组件封装，对日常使用频率较高的组件二次封装
  - Table 表格
  - Form 表单
  - Icons 图标
  - Tree 树结构
  - Modal 弹窗
  - Echarts 图表
  - Upload 文件上传
  - Loading 加载动画
  - Pagination 分页器
  - 动画组件
  - 图片裁剪
  - 相对时间
  - 数字滚动动画
  - 二维码组件
- :+1: 主题配置，丰富的主图配置以及黑暗主题适配
- :key: 权限管理


# 二、对比

## 1. Vue3

- Composition Api 响应式数据避免了`Vue2`操作数组和对象属性不更新数据问题
- `Vue3`按需引入钩子以及 Api，比较`Vue2` Options API，代码更简洁，清晰
- `v-bind()`可以在 style 里面绑定 css 变量
- `v-model`可绑定多个属性值
- 支持`jsx` `tsx`更好的写函数式组件
- `setup`函数中无需`return`，`template`可直接使用
- 对`await`的支持，在`setup`中无需声明`async`关键字


## 2. Ant Design Vue

- `Ant Design vue`比`Element UI`拥有更丰富的组件和 API
- `Ant Design vue`更好的体验以及更美观的样式
- `Ant Design vue`更好的定制主题


## 3. Vite

- `Vite`是直接启动开发服务器，请求哪个模块再对该模块进行实时编译，webpack 会先打包，然后启动开发服务器，请求服务器时直接给予打包结果。
- `vite`比`webpack`效率高，快速，


## 4. TypeScript

- `TS`拥有更好的代码提示和补全
- `TS`类、接口的使用更易于构建和维护组件
- `TS`引入静态类型声明，减少不必要的类型判断和文档注释
- `TS`及早发现错误，静态类型检查 或编译时发现问题，不用等到运行


## 5. 模板对比

| 名称 | vue-admin-template | vben admin |
| --- | --- | --- |
| 主题 | - | 可配置主题 |
| TailWindCss | 手写耗时 | 在 template 上写指令组合，更快的写样式 |
| 技术栈 | Vue2 + ElementUI + Es6 + Axios + Webpack | Vue3 + Ant Design + Es6 + TypeScript + Axios + Vite |
| Hooks | 不支持 | 支持函数式组件，可提取公用模块为函数导出 |
| TS | 不支持 | 支持类型校验、代码补全和提示 |
| Mock | 不可配置是否开启，不能识别本地还是测试环境 | 可配置是否开启 Mock 请求 |
| Axios | - | 1、标准 Restful 请求规范，包含 GET POST PUT DELETE PATCH <br> 2、可配置返回内容是否带完成参数 <br> 3、可配置是否开启请求 loading <br> 4、请求 URL 携带的时间戳参数 <br> 5、多个接口地址 <br> 6、支持 TS 请求和返回类型值校验 |


## 三、VSCode 插件

- `Ant Design Vue helper`
- `any-rule`
- `ESLint`
- `JSON to TS`
- `Prettier - Code formatter`
- `TypeScript Vue Plugin (Volar)`
- `Vue Language Features (Volar)`
- `Vue VSCode Snippets`
- `WindiCSS intelliSense`
- ~~`Tailwind CSS intelliSense`~~
- ~~`Vetur`~~
- ~~`Vue 3 Snippets`~~
- ~~`VueHelper`~~

:bulb: VSCode 点击设置--> 点击打开设置同步 --> 勾选需要同步的内容 --> 登陆账号 `duishazhu`

有自己特有插件的，安装上面列表对应的插件即可，谨慎同步操作！！！！


## 四、 ESLint 校验规范

```JS
module.exports = {
    rules: {
        'vue/script-setup-uses-vars': 'error', // 单文件没有使用 <template> <script setup>
        '@typescript-eslint/ban-ts-ignore': 'off', // 校验是否忽略检查类型问题
        '@typescript-eslint/explicit-function-return-type': 'off', // 校验函数是否需要明确的返回类型注释
        '@typescript-eslint/no-explicit-any': 'off', // 校验是否允许使用any类型
        '@typescript-eslint/no-var-requires': 'off', // 校验是否使用es6模块导入
        '@typescript-eslint/no-empty-function': 'off', // 校验是否允许出现空函数
        'vue/custom-event-name-casing': 'off', // 自定义事件名称规则 [驼峰、连字符]
        'no-use-before-define': 'off', // 定义前是否能使用
        '@typescript-eslint/no-use-before-define': 'off', // 校验变量或者枚举等，定义前是否能使用
        '@typescript-eslint/ban-ts-comment': 'off', // 校验指令注释
        '@typescript-eslint/ban-types': 'off', // 校验变量类型是否规范 （ts变量内容为小写、不实用Function类型等）
        '@typescript-eslint/no-non-null-assertion': 'off', // 非空断言运算符向类型系统断言表达式不可为空 （访问肯能不存在的属性使用??'默认值'）
        '@typescript-eslint/explicit-module-boundary-types': 'off', // 校验函数都要显式的表明函数返回值
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        'no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ], // 禁止未使用过的变量
        'space-before-function-paren': 'off', // 校验函数圆括号之前是否允许有一个空格

        'vue/attributes-order': 'off', // 校验组件属性排列顺序
        'vue/one-component-per-file': 'off', // 校验是否每个文件一个组件
        'vue/html-closing-bracket-newline': 'off', // 校验HTML标签或者组件关闭括号是否换行
        'vue/max-attributes-per-line': 'off', // 校验多个属性是换行
        'vue/multiline-html-element-content-newline': 'off', // 校验多行HTML标签里面内容是否换行
        'vue/singleline-html-element-content-newline': 'off', // 校验单行HTML标签里面内容是否换行
        'vue/attribute-hyphenation': 'error', // 校验自定义变量是否使用连字符
        'vue/require-default-prop': 'error', // 校验props下的属性是否给默认值
        'vue/require-explicit-emits': 'error', // 校验是否声明自定义事件
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'never',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ], // 组件HTML标签或组件 是否是单标签结尾
        'vue/multi-word-component-names': 'off', // 是否写组件名称、组件名称校验 [驼峰、连字符、语义化]
    },
};
```

:star: [ESLint](https://cn.eslint.org/)

:star: [eslint-plugin-vue](https://eslint.vuejs.org/)

:star: [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules)


## 五、Prettier 格式化规范

```JS
module.exports = {
    printWidth: 100, // 最大超过多少行换行
    semi: true, //句末使用分号
    vueIndentScriptAndStyle: true,
    singleQuote: true, //使用单引号
    trailingComma: 'all', //多行时尽可能打印尾随逗号
    proseWrap: 'never', // 不强制换行
    htmlWhitespaceSensitivity: 'strict', // 对HTML全局空白敏感
    endOfLine: 'auto', //结束行形式
};
```

:star: [Prettier](https://www.prettier.cn/docs/index.html)


## 六、Vite


### 1、创建项目

- yarn create vite
- 输入项目名称 vue3-todo-list
- 选择模版

  - vanilla
  - vanilla-ts
  - vue
  - vue-ts
  - react
  - react-ts
  - preact
  - preact-ts
  - lit
  - lit-ts
  - svelte
  - svelte-ts

- cd vue3-todo-list
- yarn
- yarn dev


### 2、配置

- 别名

  引用不是当前根文件夹下的组件或者函数用 `/@/` 去找

```ts
resolve: {
  alias: [
    {
      find: 'vue-i18n',
      replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
    },
    // /@/xxxx => src/xxxx
    {
      find: /\/@\//,
      replacement: pathResolve('src') + '/',
    },
    // /#/xxxx => types/xxxx
    {
      find: /\/#\//,
      replacement: pathResolve('types') + '/',
    },
  ],
},
```

- 自动导入 API、组件配置

  - `unplugin-auto-import/vite` 自动导入`Vue` API
  - `unplugin-vue-components/vite` 自动导入`components`组件

```ts
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router'],
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [AntDesignVueResolver({ importStyle: true, resolveIcons: true })],
    }),
  ],
});
```

- windicss 配置

```JS
export default defineConfig({
    darkMode: 'class',
    plugins: [createEnterPlugin()],
    theme: {
        extend: {
            spacing: {
                15: '60px',
                25: '100px',
            },
            textColor: {
                333: '#333',
                666: '#666',
                999: '#999',
                1890: '#1890FF',
                4541: '#FC4541',
            },
            zIndex: {
                '-1': '-1',
            },
            colors: {
                primary: primaryColor,
            },
            screens: {
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
            },
            // ..........
        },
    },
});

// 需要配置自行添加，访问 windicss 或者 tailwindcss 官网查看配置
```

:star: [Vite](https://cn.vitejs.dev/)

:star: [windicss](https://cn.windicss.org/guide/)

:star: [tailwindcss](https://www.tailwindcss.cn/)


## 七、Pinia

```TS
import { defineStore } from 'pinia';


enum TODO_STATUS {
  WILLDO = 'willdo',
  DOING = 'doing',
  FINISHED = 'finished'
}

interface ITodoModel {
  id: number;
  checked: boolean;
  status: TODO_STATUS;
  content: string;
}

interface ITodoStateModel {
  todoList: ITodoModel[]
}

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。

export default useTodoStore = defineStore({
  id: 'todo-list',
  state: (): ITodoStateModel => ({
    todoList: [],
  }),
  actions: {
    setTodo(data) {
      // this 访问state 中的属性值
      this.todoList = data
    }
  },
  gutter: {
    finishTodoList: (state) => state.todoList.filter(element => element.status === 'finished')
  }



  // 在组件中使用

  import { useTodoStore } from 'xxxxxxxxx'

  const todoStore = useTodoStore()

  console.log(todoStore.state)

  todoStore.setTodo([])

});
```

:star: [Pinia](https://pinia.vuejs.org/zh/)


## 八、hooks(Composition Api)

- [Vue Use](https://vueuse.org/guide/)
- [Hooks 时代，如何写出高质量的 react 和 vue 组件？](https://mp.weixin.qq.com/s/_A3CmH9awg_2z3mCu8odQQ)

:raised_hands:

```ts

import { ref } from 'vue'

enum TODO_STATUS {
  WILLDO = 'willdo',
  DOING = 'doing',
  FINISHED = 'finished'
}

interface IUseTodo {
  id: number;
  checked: boolean;
  content: string;
  status: TODO_STATUS
}

interface TodoState {
  todoList: IUseTodo[]
}


export interface IUseTodoList {
  addTodo: (todoItem: IUseTodo) => void;
  editTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  setChecked: (id: number) => void;
  setTodoList: (todoList: IUseTodo[]) => void;
}

export fucntion useTodoList<IUseTodoList> (): void {

  const addTodo = (inputValue: string) => {
    /*** do something  */
    const todoItem: IUseTodo  = {
      id: new Date().getTime(),
      checked: false,
      content: inputValue,
      status: TODO_STATUS.WILLDO
    }

    /**   **/
  }

  const editTodo = () => {
    /*** do something  */
  }

  const removeTodo = () => {
    /*** do something  */
  }

  const setChecked = () => {
    /*** do something  */
  }

  const setTodoList = () => {
    /*** do something  */
  }

  return {
    addTodo,
    editTodo,
    removeTodo,
    setChecked,
    setTodoList
  }

}

```

```ts
import { defineStore } from 'pinia';

export const useTodoStore = defineStore({
  id: 'todo-list',
  state: (): TodoState => ({
    todoList: [],
  }),
  actions: {
    addTodo(todo: IUseTodo): void {
      this.todoList = [...this.todoList, todo];
    },
    setTdoList(todoList: IUseTodo[]): void {
      this.todoList = todoList;
    },
  },
});
```

```vue
<template>
  <div class="mt-4">
    <Input v-model="state.inputValue" @keyup.enter="onInputValue" />

    <div class="todo-list">
      <div
        class="todo-item flex items-center justify-between mt-2.5"
        v-for="item in todoStore.todoList"
        :data-item="item"
        :key="item.id"
      >
        <Checkbox v-model:checked="dataItem.checked" />
        <p class="flex-1 text-left px-4">{{ dataItem.content }}</p>
        <Button type="primary" @click="removeTodo(dataItem.id)">删除</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Input, Button, Checkbox } from 'antd-desgin-vue';

  import { useTodoList } from '../hooks/useTodoList';

  import { useTodoStore } from '/@/store/todoList';

  const todoStore = useTodoStore();

  const { addTodo, editTodo, removeTodo, setChecked, setTodoList } = useTodoList();

  const inputValue = ref<string>('');

  const onInputValue = (e: KeyboardEvent) => {
    const target = <HTMLInputElement>e.target;
    if (!target.value.trim()) return;
    addTodo(target.value);
    inputValue.value = '';
  };
</script>
```


## 九、 vben-admin 组件、功能、以及其他配置

:star: [vben 文档](https://vvbin.cn/doc-next/)

:star: [vben 预览](https://vvbin.cn/next/#/login?redirect=/dashboard)


## 十、vue3 相关资料 :clap: :clap: :clap:

- [Vue3 One Piece](https://vue3js.cn/)
- [tsx 开发 vue3](https://www.jianshu.com/p/d89fb4755879)
- [用 Vue3.2 + Vite2.7 从 0 快速打造一个 UI 组件库](https://juejin.cn/post/7052717075168493598)
- [VitePress 学习(全面拥抱 vite)](https://juejin.cn/post/6965510644007665671)
- [Vue3.2 setup 语法糖、Composition API、状态库 Pinia 归纳总结](https://juejin.cn/post/7006108454028836895)
- [vue3.0 + vite + ts 完成自动导入 vue API 和 自动导入组件](https://blog.csdn.net/weixin_43191327/article/details/123982521)
- [vite + vue3 + setup + pinia + ts 项目实战](https://juejin.cn/post/7041188884864040991)
- [vite3+vue3 整合 mock.js](https://blog.csdn.net/lianghecai52171314/article/details/116780116)
- [FormMaking 表单设计器](https://form.making.link/sample/#/zh-CN/)
