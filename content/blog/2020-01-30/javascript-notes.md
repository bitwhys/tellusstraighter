---
title: JavaScript Notes
banner: none
date: 2020-01-30
autor: George Bockari
topic: JavaScript
created: '1970-01-01T00:00:00.000Z'
modified: '2020-01-30T13:40:54.206Z'
keywords:
 - javascript
 - callbacks
 - asynchronous
---

# **JavaScript** 

## Language Overview

> *"...In actuality JS bares more in common with functional programming languages like LISP and Scheme than to Java* "

### Quick Glance Features

- Supports **dynamic typing** as opposed to Java, which supports static typing. This means you can declare a variable in JavaScript without declaring **its type**, which will only be **derived at run-time**

- Has **first class functions**. It is possible to assign a function to a variable or pass it to another function as a parameter. This may sound like a small feature, but it leads to an enormous number of possibilities, and allows software engineers to write software *using functional programming techniques*.

  > _The term "first-class" means that something is just a __value__. A first class function is one that can go anywhere that any other value can go--there are few to no restrictions._ - **Michael Fogus : _Functional JavaScript_**

- Although JS supports classes, its implementation of classes is somewhat confusing. It is recommended to **avoid using classes** as far as possible and utilize **prototyping techniques** to **create objects**

### Syntactic Categories

JavaScript has two major syntactic categories: __statements__ and __expressions__

- __statements__: _"do things"_ , A  program is a sequence of statements.
- __expressions__: produce values, they are function arguments, RHS...etc 

#### Semicolons

> Semicolons terminate __statements__, but not _blocks_. There is one case where you will see a semicolon after a block: a __function expression__, which is an expression that ends with a block. If such an expression comes last in a statement, it is followed by a semicolon:

```javascript
// Pattern: var _ = ___;
var x = 3 * 7;
var f = function () {}; // function expr. inside var decl.
```

---

## Modern JavaScript (ES6+)

### Declaring Variables in ES6

```javascript
let caught = 5*5;
```

The _keyword_ `let` defines a **binding** between the *identifier* `caught` and the _value_ `5*5`. After a binding has been created, its name can be used as an **expression** (i.e., an identifier/**variable** is a synonym for the value it is bound to)

- A single `let` statement may define multiple bindings, each separated by commas.
- *lexical scoping*: this means variables declared with `let` are scoped to their declaration context (i.e. within the `{}` they are declared in)

The *keyword* `const` defines an **immutable binding** between the *identifier* `obj` and the _value_ `{...}`. This does not necessarily imply that the value of the variable is immutable, simply that the binding is. This means you are **not allowed reassignment to a `const` variable**. 

If the value happens to be a _scalar type_ (e.g, number, string...), then consequentially the value will never change. If however, as is in the following, the value is an object then this object is still mutable by accessing its fields. 

```javascript
const obj = {
    a: 'value',
    b: 'import'
}

// throws 'Assignment to constant variable' error
obj = {x: 'different object'}
```



---

## JavaScript Objects: A Collection of Properties

> An Object is logically a **collection of properties**. Each property is either a **data property** or an **accessor property**.[^1]

- _data property_ associates a key value with ECMAScript language value and a set of Boolean attributes
- _accessor property_ associates a key value with one or two accessor functions, and a set of Boolean attributes. The accessor functions are used to store or retrieve an ECMAScript language value that is associated with the property.

```javascript
person = {
    firstName: "James",
    lastName:	"Heywood",
    levelsCompleted: [1,2,3],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    dateStarted: new Date("January 1, 2017");
}
```



### JavaScript Constructors

> By convention the name of a function we wish to utilize as a constructor should begin with a capital letter.

- The keyword __new__ determines whether or not a function is a constructor

- It creates a new object, which is bound to ___this___

- The function is invoked with the value of this equal to the new object

- It sets the new objects prototype to the prototype property of the constructor

  > _A function has a __prototype__ property who's value is an object. When a function is used as a constructor (by use of the __new__ keyword) the resulting object has its prototype property given this same object as its value_ 

- it returns the object

##### examples

```javascript
function Users() {
    console.log(this);
};

/* no use of the new keyword */
var user1 = Users();

/* use of the new keyword */
var user2 = new Users();
```




## Callbacks

> Callbacks are just the __name of a convention__ for using JavaScript functions

_callbacks are a design pattern for common js function use cases_

- Usually callbacks are only used when doing I/O, e.g. downloading things, reading files, talking to databases etc.

[^1]: 6.1.7 The Object Type
