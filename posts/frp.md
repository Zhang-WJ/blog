---
title: Reactive programming(Observable)
published_at: 2023-08-25T15:00:00.000Z
snippet: rxjs.
categories:
  - javascript
  - fp
---

    Rx.Observable.fromEvent(document.querySelector('#student-ssn'), 'keyup')    
                 .map(input => input.srcElement.value)    
                 .filter(ssn => ssn !== null && ssn.length !== 0)    
                 .map(ssn => ssn.replace(/^\s*|\s*$|\-/g, ''))    
                 .skipWhile(ssn => ssn.length !== 9)    
                 .subscribe( validSsn => console.log(`Valid SSN ${validSsn}`));


    
上面这是基于rxjs的一个可观察对象的例子

FRP里面，重要的就是Observable， 这里我们主要围绕Observable 2大特性
 - 1.Data propagation
 - 2.Declarative, lazy pipeline

> An Observable is a function that takes an observer and returns a function. Nothing more, nothing less. If you write a function that takes an observer and returns a function, is it async or sync? Neither. It’s a function.
—Ben Lesh


![Data propagation](/rxjs-01.jpg/)


这里我们使用Corejs中的Observable来构建我们自己的Reactive工具

    const map = curry((fn, stream) => 
        new Observable( observer => {
            const subs = stream.subscribe({ // subscribe to the source stream
                next(value){         // per the definition of map, applies the gaven function to each value and report error
                    try {
                        observer.next(fn(value))
                    }catch (err){
                        observer.error(err)
                    }
                },
                error(e){           // propagates any error from the source
                    observer.error(e)
                },
                complete(){         // emit event the 
                    observer.complete()
                }
            })
            return () => subs.unsubscribe()
        }))
接下来使用map

    const square = num => num ** 2
    map(square, Observable.of(1,2,3))
        .subscribe({
            next(value){
                console.log(number);
            },
            complete(){         
                console.log('Stream ended');
            }
        })

    // output 1 4 9 Stream ended

> 可以在这里找到相关的图片资源 https://rxmarbles.com/

组合这些可观察的对象

    const add = curry((x, y) => x + y)
    const subs = map(square, map(add(1), Observable.of(1,2,3))
        .subscribe({
            next(value){
                console.log(number);
            },
            complete(){         
                console.log('Stream ended');
            }
        }))
    
接下来我们构造一个filter

    const filter = curry(
        (predicate, stream) =>
            new Observable(observer => {
                const subs = stream.subscribe({
                    next(value) {
                     if (predicate(value)) {
                        observer.next(value);
                        }
                    },
                    error(e) {           // propagates any error from the source
                        observer.error(e);
                    },
                    complete() {         // emit event the
                        observer.complete();
                    },
                });
                return () => subs.unsubscribe();
            })
        );

如你所见，大多数的逻辑都存在observer.next中, 通过他来传播结果到这条链的下一次操作

我们继续完成工具的reduce
    
    const reduce = curry(
        (accumulator, initionalValue, stream) => {
            let result = initionalValue ?? {};
            return new Observable(observer => {
                const subs = stream.subscribe({
                    next(value) {
                        result = accumulator(result, value);
                    },
                    error(e) {
                        observer.error(e);
                    },
                    complete() {
                        observer.next(result); // emits the accumulated result
                        observer.complete();
                    },
                });
                return () => subs.unsubscribe();
            });
        },
    );

skip 允许你忽略可观察对象前面的X个event

    const skip = curry(
        (count, stream) => {
            let skipped = 0;
            return new Observable(observer => {
                const subs = stream.subscribe({
                    next(value){
                        if (skipped++ >= count){
                        observer.next(value)
                        }
                    },
                    error(e) {
                        observer.error(e);
                    },
                    complete() {
                        observer.complete();
                    },
                })
                return () => subs.unsubscribe();
            })
        }
    )

到这里我们就完成了Observable的一些基本的工具

测试下结果

![stream data](/observable.jpg/)

以上完成了一些基本的功能，接下来我们通过mix-in的方式集成到我们的Observable中

    export const ReactiveExtensions = {
        filter(predicate){
            return filter(predicate, this)
        },
        map(fn){
            return map(fn, this)
        },
        skip(count){
            return skip(count, this)
        },
        reduce(accumulator, initialValue={}){
            return reduce(accumulator, initialValue, this)
        },
    }
    
    Object.assign(Observable.prototype, ReactiveExtensions);

 现在我们可以使我们的工具更好用
 
    obs.skip(1)
       .filter(isEven) 
       .map(square) 
       .reduce(add, 0)
       .subscribe({
          next(value){
            assert.equal(value, 20);
          },
          complete() {
            console.log('complete');
          },
    });

同样，测试成功
