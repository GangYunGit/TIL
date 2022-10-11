# 웹 프로그래밍

## 웹 프로그래밍 개요

> 프론트 엔드

- HTML, CSS : 웹 사이트의 껍데기 부분

- JavaScript : 데이터를 받아서 화면에 동적으로 그려줌 (Vue.js 이용)

> 백 엔드

- Data base와 소통하면서 데이터를 가공하고, 데이터를 보내줌

- 서버 개발

---

## Web Architecture

![image](https://user-images.githubusercontent.com/109258306/191024433-523bea8d-4d43-41a2-8470-1b083cec5eba.png)

> Web Server

- 이미 정형화되어있는 HTML, CSS, JS(정적 페이지)를 저장하고있는 서버

- Application Server로부터 동적 페이지를 받음

> Application Server

- Presentation : 화면 출력

- Business Logic :`CREATE`, `READ`, `UPDATE`, `DELETE`

- Persistence Logic : DB와 소통

- Web Server에게 동적 페이지를 보내줌

> Web Application Server(WAS)

- Web Server + Applictaion Server

- `Tomcat`을 이용하여 쉽게 WAS를 구현할 수 있다.

> Server

- (Web Server + Applictaion Server) + Data Base

---

## 웹과 웹 프로그래밍

- URL (Uniform Resource Locator) : 웹 상의 자원을 참조하기 위한 웹 주소

- 웹페이지 : 웹 브라우저를 통해서 보여지는 화면

- 웹 서버 : 클라이언트의 요청에 맞는 응답(웹 페이지)를 제공

- 웹 어플리케이션(Web Application) : 웹 서버를 기반으로 실행되는 응용 소프트웨어

- 웹 어플리케이션 서버(Web Applcation erver, WAS) : 요청이 오면 알맞은 프로그램을 실행하여 응답을 만들고 제공하는 서버

