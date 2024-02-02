# Markdown 扩展 {#markdown-extensions}

VitePress 带有内置的 Markdown 扩展。

## 标题锚点 {#header-anchors}

标题会自动应用锚点。可以使用 markdown.anchor 选项配置锚点的渲染。

### 自定义锚点 {#custom-anchors}

要为标题指定自定义锚点而不是使用自动生成的锚点，请向标题添加后缀：

```
# 使用自定义锚点 {#my-anchor}
```

这允许将标题链接为 `#my-anchor`，而不是默认的 `#使用自定义锚点`。

## 链接

内部和外部链接都会被特殊处理。

### 内部链接

内部链接将转换为单页导航的路由链接。此外，子目录中包含的每个 index.md 都会自动转换为 index.html，并带有相应的 URL /。

例如，给定以下目录结构：
```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md

```

假设现在处于 foo/one.md 文件中：

```

[Home](/) <!-- 将用户导航至根目录下的 index.html -->
[foo](/foo/) <!-- 将用户导航至目录 foo 下的 index.html -->
[foo heading](./#heading) <!-- 将用户锚定到 foo 索引文件中的一个标题上 -->
[bar - three](../bar/three) <!-- 可以省略扩展名 -->
[bar - three](../bar/three.md) <!-- 可以添加 .md -->
[bar - four](../bar/four.html) <!-- 或者可以添加 .html -->

```

### 页面后缀

默认情况下，生成的页面和内部链接带有 ``` .html ```后缀。

### 外部链接

外部链接带有 ``` target="_blank" rel="noreferrer" ```：
- [vuejs.org](https://cn.vuejs.org/)
- [VitePress on GitHub](https://github.com/vuejs/vitepress)
