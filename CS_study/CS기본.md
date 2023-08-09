# CS 기본

## Hardware

- CPU(Central Processing Unit)

  - `중앙처리장치`로, 주기억장치에 저장된 자료를 읽어와 각종 연산이나 프로그램을 실행하는 장치
  - Core : 연산을 수행하는 핵심 요소. Thread 단위로 Core 단위에 맵핑
  - 캐시 메모리
  - 컨트롤러

- Memeory

  - `ROM(Read Only Memory)` : 전원이 끊어져도 데이터들이 소멸되지 않는 비휘발성 메모리. 데이터를 한번 저장하면 수정할 수 없고, 데이터를 읽기만 가능
  - `RAM(Random Access Memory)` : 응용프로그램, 운영체제 등을 불러워 CPU가 작업할 수 있도록하는 기억장치. 전원이 끊어지면 데이터가 소멸됨.

- GPU(Graphics Processing Unit)

  - 그래픽, 3D모델링을 위한 프로세서로 탄생하였음.
  - CPU에 비해 연산 장치(ALU)의 구조가 단순하고, 작은 제어/캐시 영역을 가짐. 다수의 코어로 이루어져 있음.
  - 여러 개의 코어를 병렬로 실행시켜 단순 계산을 빠르게 수행 가능

## Software

- 프로그램(실행 가능한 파일, 코드)

  - 응용 프로그램 : 브라우저, 그래픽, 워드 프로그램 등

- 운영체제(Operating System) : 하드웨어를 제어하고 `응용 프로그램`을 실행하는 기본 프로그램

## Process

- Process : `프로그램이 운영체제에 의해 메모리 영역을 할당받고 실행중인 상태`. Code, Data, Stack, Heap의 4가지 구성요소를 가짐

  - Code : Program Counter(`다음번에 실행될 명령어`의 주소를 갖고 있는 레지스터). 코드 저장
  - Data : global variables, static variables 저장
  - Heap : 메모리 관리
  - Stack(`Thread`) : 프로세스가 할당된 자원을 이용하는 실행의 단위. 임시 데이터(local variables, return address) 저장

- Thread란?
  - 한 Process 내에서 실행되는 여러 흐름의 단위
  - 스레드는 `프로세스 내에서 각각 Stack만 따로 할당`받고, `Code, Data, Heap은 공유`한다.
  - 각각의 스레드는 별도의 레지스터와 스택을 갖고 있지만, Heap 메모리는 서로 읽고 쓸 수 있다.
