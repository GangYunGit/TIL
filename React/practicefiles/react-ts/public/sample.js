"use strict";
// 타입 Annotation(주석)
function getRandomMinMax(min = 0, max = 10) {
    return Math.floor(Math.random() * (max - min) + min);
}
// 타입 인퍼런스 : 타입을 추론해서 어떤 타입이 알맞을지 맞추어 준다.
function queryById(idName) {
    return document.getElementById(idName);
}
