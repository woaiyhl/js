let value = 1

function foo() {
  console.log(value)
}

function bar() {
  let value = 2
  foo()
}

bar()

// 结果是 ???

// 词法作用域：
// 意味着函数被定义的时候，它的作用域就已经确定了，和拿到哪里执行没有关系，因此词法作用域也被称为 “静态作用域”
