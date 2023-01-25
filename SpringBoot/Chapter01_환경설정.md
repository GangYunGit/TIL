# SpringBoot 환경설정

## Spring initializer

![image](https://user-images.githubusercontent.com/109258306/214615212-6117bd75-1e0b-42b2-84ff-81a8cc49645f.png)

- start.spring.io 접속 후 세팅

- Generate를 눌러 세팅된 프로젝트를 다운로드

## project import 하기

![image](https://user-images.githubusercontent.com/109258306/214616136-76fd6bb2-e277-43e8-84a2-036e0d725c5e.png)

- Existing Gradle Project => Next

![image](https://user-images.githubusercontent.com/109258306/214616335-ec7d74fe-8fcf-439b-b2f5-341588c276b2.png)

- 다운로드 받은 jpashop 폴더 선택 => Next 

- Next후 Finish를 누르면 꽤 긴 시간동안 라이브러리를 다운로드 한다.

## 서버 뜨는지 확인하기

![image](https://user-images.githubusercontent.com/109258306/214617758-1714ac39-18ea-4030-a50a-3ef6369b4f90.png)

- src/main/java/jpabook.jpashop의 Application.java파일을 Spring Boot App으로 실행

![image](https://user-images.githubusercontent.com/109258306/214618431-83bd440f-3dee-4e7f-86b3-47d598b0ee24.png)

![image](https://user-images.githubusercontent.com/109258306/214618697-3413958a-36ff-4a3a-90bf-3d90faa4b189.png)

- 콘솔창 확인 => `http://localhost:8080/` 으로 접속하여 서버가 뜨는지 확인

## Lombok 적용

![image](https://user-images.githubusercontent.com/109258306/214622851-96c0d840-e454-40dd-be2e-47e9f7c9431a.png)

- lombok.jar를 다운로드 받아서 sts경로에 붙여넣기

![image](https://user-images.githubusercontent.com/109258306/214623580-07ddcf08-af2a-43ef-be96-f34c42c0f8cb.png)

- cmd를 관리자 권한으로 실행 => 명령어 입력 후 Lombok 설치

![image](https://user-images.githubusercontent.com/109258306/214624705-d0fbfe81-8625-4d9e-b28f-bf9daf29ecc2.png)

- 설치 후 STS 재실행

- 프로젝트 우클릭 -> Spring -> Add Starters

![image](https://user-images.githubusercontent.com/109258306/214625164-209e065e-d1f8-48de-88ac-ded40f5325dd.png)

- Lombok 검색하여 선택 => Next

![image](https://user-images.githubusercontent.com/109258306/214625704-f3b416f1-37c6-47ea-ab3f-1bb07c4b5b02.png)

- build.gradle 체크 후 Finish

![image](https://user-images.githubusercontent.com/109258306/214628753-747d6738-a485-4605-ae8a-1e71fde4aa79.png)

- 임의의 클래스를 생성한 후 Getter와 Setter를 Annotation으로 만들었을 때 lombok을 Import 할 수 있다면 정상적으로 설치된 것임.