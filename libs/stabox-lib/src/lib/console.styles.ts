export function cSuccess(value?: string) {
  const success = [
    'background: green',
    'color: white',
    'border-style: solid black',
  ].join(';');
  if (value) {
    console.log('%c ' + value, success);
  } else {
    console.log('%cSuccess!', success);
  }
}

export function cError(value?: string) {
  const success = [
    'background: red',
    'color: white',
    'border-style: solid black',
  ].join(';');
  if (value) {
    console.log('%c ' + value, success);
  } else {
    console.log('%cError!', success);
  }
}
