# 입출력 API

## 입출력 스트림 개요

> I/O 와 Stream

- I/O : 데이터의 입력(input)과 출력(output)

- 데이터는 한쪽에서 주고 한쪽에서 받는 구조
  - 입력과 출력의 끝단을 `노드(Node)`라고 함
  - 두 노드를 연결하고 데이터를 전송할 수 있는 개념 : `스트림(Stream)`
  - 스트림은 단방향으로만 통신이 가능. 하나의 스트림으로 입력과 출력을 동시에 처리할 수 없음

> I/O 처리 단위

|      | byte         | Char   |
| ---- | ------------ | ------ |
| 입력 | InputStream  | Reader |
| 출력 | OutputStream | Writer |

--

## Input Stream과 Reader

> InputStream의 주요 메서드

- read() : byte를 읽어서 저장하고 출력하는 메서드

- close() : 스트림을 종료해서 자원을 반납

---

## OutputStream과 Writer

> OutputStream 의 주요 메서드

- write() : 저장된 내용을 byte로 출력

- close() : 스트림 종료하고 자원을 반납한다. 내부적으로 flush()를 호출한다.

- flush() : 버퍼가 있는 스트림에서 버퍼의 내용을 출력하고 버퍼를 비운다.

> Writer의 주요 메서드

- OutputStream에서 append()가 추가됨

- append() : Char Sequence(csq)를 출력하고 Writer를 리턴
  
---

## 노드 스트림 활용

> File

- File()
  - public File(String pathname) : pathname에 해당하는 파일을 생성. 경로없이 파일을 생성하면 애플리케이션을 시작한 경로가 된다.
  - public File(String parent, String child) : parent 경로 아래에 child를 생성한다.
  - public File(URI uri) : file로 시작하는 URI 객체를 이용해 파일을 생성

- createNewFile()
  - public boolean createNewFile() throws IOException : 새로운 물리적인 파일을 생성

- mkdir()
  - public boolean mkdir() : 새로운 디렉토리 생성

- delete()
  - public boolean delete() : 파일 또는 디렉토리를 삭제