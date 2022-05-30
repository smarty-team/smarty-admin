# Button 按钮

常用操作按钮

> TIP: 欢迎大家来然叔的网站

## 基本用法

使用`size`、`style`属性来定义 Card 的样式。

:::demo 使用`size`、`style`属性来定义 Card 的样式。

```vue
<template>
  <div>
    <MyButton color="blue">主要按钮</MyButton>
    <MyButton color="green">绿色按钮</MyButton>
    <MyButton color="gray">灰色按钮</MyButton>
    <MyButton color="yellow">黄色按钮</MyButton>
    <MyButton color="red">红色按钮</MyButton>
  </div>
  <div>
    <MyButton color="blue" plain>朴素按钮</MyButton>
    <MyButton color="green" plain>绿色按钮</MyButton>
    <MyButton color="gray" plain>灰色按钮</MyButton>
    <MyButton color="yellow" plain>黄色按钮</MyButton>
    <MyButton color="red" plain>红色按钮</MyButton>
  </div>
  <div>
    <MyButton size="small" plain>小按钮</MyButton>
    <MyButton size="medium" plain>中按钮</MyButton>
    <MyButton size="large" plain>大按钮</MyButton>
  </div>
  <div>
    <MyButton color="blue" round plain icon="search">搜索按钮</MyButton>
    <MyButton color="green" round plain icon="edit">编辑按钮</MyButton>
    <MyButton color="gray" round plain icon="check">成功按钮</MyButton>
    <MyButton color="yellow" round plain icon="message">提示按钮</MyButton>
    <MyButton color="red" round plain icon="delete">删除按钮</MyButton>
  </div>

  <div>
    <MyButton color="blue" round plain icon="search"></MyButton>
    <MyButton color="green" round plain icon="edit"></MyButton>
    <MyButton color="gray" round plain icon="check"></MyButton>
    <MyButton color="yellow" round plain icon="message"></MyButton>
    <MyButton color="red" round plain icon="delete"></MyButton>
  </div>
</template>
```

:::

## 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值
