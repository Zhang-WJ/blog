---
title: Reactive UI
published_at: 2023-09-05T15:00:00.000Z
snippet: UI framework
categories:
  - discuss
  - framework
---

最近在Twitter上看到有reactive UI相关的讨论。
当下主流的UI框架， 都使用了虚拟DOM来处理DON生成，主要是利用到虚拟DOM提前做Diff以达到页面渲染的优化。
使用React的，一定会接触到状态管理。React本身会提供例如useState，useReducer等做组件内部的状态管理。
还有useContext等做状态的管理。

OCaml的bonsai，提供一个新的思路：
在组件返回的时候将状态和视图同时返回。这样做可以直接在外部获取组件的状态。
在[这里](https://github.com/TyOverby/composition-comparison)可以看到和其他UI的对比

![Data propagation](/bonsai.png/)

可以看出这里textbox返会UI的同时也返回了状态


> 更多阅读
> - https://raphlinus.github.io/ui/druid/2019/11/22/reactive-ui.html
> - https://blog.janestreet.com/self-adjusting-dom/

