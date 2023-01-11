// 타입 Annotation(주석)
let greetingMessage: string;

// 타입 가드 (보호)
// 조건문을 사용!
if (typeof greetingMessage === 'string') {
  greetingMessage = 100;
}
greetingMessage = 100;

greetingMessage = 'one';

greetingMessage = () => { };

function getRandomMinMax(min: number = 0, max: number = 10) {
  return Math.floor(Math.random() * (max - min) + min);
}

// 타입 인퍼런스 : 타입을 추론해서 어떤 타입이 알맞을지 맞추어 준다.
function queryById(idName: string): HTMLElement | null {
  return document.getElementById(idName);
}