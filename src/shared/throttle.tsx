export const throttle = (fn: Function, time: number) => {
  let timer: number | undefined = undefined;
  return () => {
    if (timer) {
    } else {
      fn();
      timer = setTimeout(() => {
        timer = undefined;
      }, time);
    }
  };
};
