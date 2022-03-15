export function cSuccess(value?: string) {
  const style = [
    'background: green',
    'color: white',
    'border-style: solid black',
  ].join(';');
  if (value) {
    console.log('%c ' + value, style);
  } else {
    console.log('%cSuccess!', style);
  }
}

export function cError(value?: string) {
  const style = [
    'background: red',
    'color: white',
    'border-style: solid black',
  ].join(';');
  if (value) {
    console.log('%c ' + value, style);
  } else {
    console.log('%cError!', style);
  }
}

export function cLog(value:any) {
  const style = [
    'background: #b36200',
    'color: white',
    'border-style: solid black',
  ].join(';');
  console.log('%c ' + value, style);
}