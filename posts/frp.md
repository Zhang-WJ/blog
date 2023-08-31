---
title: Functional Reactive Programming
published_at: 2023-08-25T15:00:00.000Z
snippet: rxjs.
---

    Rx.Observable.fromEvent(document.querySelector('#student-ssn'), 'keyup')    
                 .map(input => input.srcElement.value)    
                 .filter(ssn => ssn !== null && ssn.length !== 0)    
                 .map(ssn => ssn.replace(/^\s*|\s*$|\-/g, ''))    
                 .skipWhile(ssn => ssn.length !== 9)    
                 .subscribe( validSsn => console.log(`Valid SSN ${validSsn}`));


    
这里主要是针对FRP，所以就不采用React或者Vue做例子，上面这是基于rxjs的例子

FRP里面，重要的就是Observable
> An Observable is a function that takes an observer and returns a function. Nothing more, nothing less. If you write a function that takes an observer and returns a function, is it async or sync? Neither. It’s a function.
—Ben Lesh

![stream data](/rxjs-01.jpg/)

learning... and update when finished
