function Debounce(f, t) {
  let lastCall;
  let lastCallTimer;
  return function (args) {
    let previousCall = lastCall;
    lastCall = Date.now();
    if (previousCall && lastCall - previousCall <= t) {
      clearTimeout(lastCallTimer);
    }
    lastCallTimer = setTimeout(() => f(args), t);
  };
}

export default Debounce;
