进来的晚， 代码是经过babel-core转义过，然后再走这个后面的plugin么 

babel-core包括三部分
1.把源代码转成AST语法
2.遍历AST语法树，遍历的时候 会把语法树给插件进行处理。插件可以关注自己感兴趣的类型，进行处理(插件写在plugins中)
例如
```
let targetSource = core.transform(sourceCode, {
    plugins: [transformClassesPlugin]
});
```

3.新的AST语法树重新生成源代码

20:51
奋斗ing
replacewith什么意思 
xy08879
这个插件只适用于第三方插件吗  自己写的文件 可以tree shaking吗 
奋斗ing
use是数组和对象两种写法吗 
提
use值可以是数组，放多个loader,也可以是对象，只放一个loader
瑞思拜撤回了一条消息


xy08879
要是一部分默认  一部分部分导入呢 

