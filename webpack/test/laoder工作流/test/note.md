<!--
 * @LastEditors: wudan01
 * @description: 文件描述
-->
# 1. loader的分成哪几类？如何指定类型？
> loader 的叠加顺序 = post(后置)+inline(内联)+normal(正常)+pre(前置)
> 从右向左执行，pre -> normal -> inline -> post
```
// 不写pitch输出顺序
pre2 -> pre1 -> normal2 -> normal1 -> inline2 -> inline1 -> post2 -> post1 -> null
```

```
// 写 pitch 没有 return 结果
// 先输出 pitch 再输出 loader 函数值
post1 pitch / post2 pitch / inline1 pitch / inline2 pitch / normal1 pitch / normal2 pitch / pre1 pitch / pre2 pitch/ pre2 / pre1 / normal2
/ normal1 / inline2 / inline1 / post2 / post1 / null
```

```
// pitch 有返回 
// nomal1 有 return
// 返回到 nomal1 前一个 loader 执行 函数本身主体
post1 pitch -> post2 pitch -> inline1 pitch -> inline2 pitch -> normal1 pitch -> inline2 -> inline1 -> post2 -> post1 -> null
```

# 2. 这些不同的loader是如何组合的？
```
 * -! noPreAutoLoaders 不要前置和普通loader
 * ! noAutoLoaders 不要普通loader
 * !! noPrePostAutoLoaders 不要前置、后置、普通loader,只要内联
```

# 3. 这些loader是如何串联在一起工作的？
# 4. 加载的模块前面的特殊符号如何工作的？! !! -!
# 5. 什么是normal?什么是pitch?它们如果都写了会如何配合工作？

