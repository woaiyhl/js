
const debounce = (fn,delay = 250) {
  let timerId
  return function (...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn.apply(this,args)
    },delay)
  }
}

window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 350)
); // Will log the window dimensions at most every 350ms