---
title: ECMAScript Modules
published_at: 2023-09-18T15:00:00.000Z
snippet: javascript moudle system
---


### AMD，Commonjs，ESM

 - AMD 同步，并在服务器上使用（fast I/O)   (requirejs)
 - Commonjs 异步，并在浏览器上使用（文件访问速度慢，并且通过互联网传输）(requirejs)
 - UMD(SystemJS) 同时在客户端和服务端工作 (systemjs)
  ESM经过多年之后，现在是javascript的标准模块化系统

而在模块成为语言的核心之前，主要有以下临时模块化编程模式：
 1. Object Namespace
 2. IIFEs
 3. IIFE mixins
 4. Factory Function

| Pattern          | Description                                           |
|------------------|-------------------------------------------------------|
| Object Namespace | 浏览器不处理依赖管理，就需要在全局下建立唯一的标识来封装脚本                        |
| IIFEs            | 利用函数的作用域                                              |
| IIFE mixins      | 利用Function#call，Function#apply，动态设置the object context |
| Factory Function | 工厂函数，每次都返回新的对象(object)                                |

### Static vs. dynamic module systems

| System    | Type    | Example                                                                            |
|-----------|---------|------------------------------------------------------------------------------------|
| CommonJS  | Dynamic | const Transaction = require('./domain/Transaction.js');                            |
| RequireJS | Dynamic | requirejs(['domain/Transaction.js'], Transaction => {    //... use Transaction }); |
| ESM       | Static  | import Transaction from './domain/Transaction.js';                                 |

### Benefit of ESM
1. Dead-code elimination and tree shaking
2. Faster property lookups
3. Type-friendliness -- (could be a optional type system)
