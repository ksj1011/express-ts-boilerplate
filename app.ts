import express from 'express';

const app = express(); // express 실행

const a = 123;
const b: number = a;

console.log(a, b);

function test(a: number, b: number): number {
  return a + b;
}

app.listen(7000, () => {
  console.log('Hello, World!'); // 서버가 실행되면 콘솔에 'Hello, World!' 출력
});
