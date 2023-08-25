---
title: Functional Programming
published_at: 2023-08-24T15:00:00.000Z
snippet: why need functional programming.
---

> "Object-oriented programming makes code understandable by encapsulating moving parts. Functional programming makes code understandable by minimizing moving parts."
– Michael Feathers

#### 函数式编程带来的是一种思维方式
- 当你深陷mutable中的时候，immutable可以作为一个思路。 
- 当你在OO中不断的Encapsulate，FP的partial，currying，composition等等，让问题更加明确。
- type inference带的来得便利是可以写一些更加通用的code。同时及时发现你的错误。
- pattern match可以把问题模型更加清楚，（但是当你的模型变得复杂使用When后或者wildcat之后）。
- option 类型可以让你处理错误的时候变得睿智。
- 将复杂的任务分解成更细的function
- 使用流程的链式处理数据
- 使用reactive减少由事件驱动的复杂性

#### 随着现在浏览器中，OOP解决了很多问题但是我们需要的更多
 - 可扩展性Extensibility：是否需要不断的重构代码以实现新的功能
 - 易模块化Easy to modularize：一个文件改变了，是否影响了其他的文件
 - 复用性Reusability：是否有跟多重复的地方
 - 可测试Testability：是否很难进行测试
 - 易理解Easy to reasonable：是否结构良好，容易被理解

#### 声明式Declarative
  ><p style="color: grey">it’s a paradigm that expresses a set of operations without revealing how they’re implemented or how data flows through them</p>
- 将程序和evaluation分开，抽象for loop with Lambda expressions
- pure functions(aims to statelessness and immutability)

