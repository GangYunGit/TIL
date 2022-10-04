# 2022. 10. 04.

# Database

## Intro

> 지금은 데이터의 시대

- 세상에는 수 많은 데이터들이 존재한다.

- 인터넷만 떠올려봐도 셀 수 없이 많은 데이터가 지금 이 순간에도 우리가 사용하는 웹 서비스나 애플리케이션 등을 통해 생성, 수정, 삭제되고 있다.(ID, E-mail, password, 접속 기록 등)

- 과거와 달리 이러한 데이터 규모는 점점 더 빠른 속도로 증가하고 있고, 이 데이터를 다루는 기술 또한 점점 중요해지고 있다.

> 파일을 이용한 데이터 관리

- 장점
  
  - 운영체제에 관계없이 어디에서나 쉽게 사용가능
  - 이메일이나 메신저를 이용해 간편하게 전송 가능

- 단점

  - 성능과 보안적 측면에서 한계가 명확
  - 대용량 데이터를 다루기에 적합하지 않음
  - 데이터를 구조적으로 정리하기 어려움
  - 확장이 불가능한 구조

> 스프레드 시트를 이용한 데이터 관리

  - 스프레드 시트(엑셀)을 사용
  - 스프레드 시트는 column(열)을 통해 데이터의 유형을 지정하고 record(행)을 통해 구체적인 데이터 값을 포함

> 데이터베이스의 등장

- 스프레드 시트와 달리 프로그래밍 언어를 사용해 작동 시킬 수 있음

- 많은 형태가 있지만 실제 가장 많이 쓰이는 유형은 RDB(Relational Database)라고 부르는 `관계형 데이터베이스`

- RDB는 각각의 데이터를 테이블에 기입함(마치 스프레드 시트에 작성하는 것처럼)

- 쉽게 스프레드시트 파일 모음을 관계형 RDB라고 생각하면 된다. 

> DB 학습의 기초

- 데이터베이스에 데이터를 어떻게 `입력`하고, 어떻게 `출력`하는가?

- 즉, 데이터베이스에서의 CRUD와 여러 키워드를 위주로 학습! 

> Database의 정의

- 체계화된 데이터의 모임

- 여러 사람이 공유하고 사용할 목적으로 통합 관리되는 정보의 집합

- 검색, 구조화 같은 작업을 보다 쉽게 하기 위해 조직화된 데이터를 수집하는 저장 시스템
  - 내용을 고도로 구조화 함으로써 `검색과 갱신의 효율을 높임`
  - 즉, 자료 파일을 조직적으로 통합하여 자료항목의 중복을 없애고 구조화하여 기억시켜 놓은 자료의 집합체

- 이러한 Database를 조작하는 프로그램 = DBMS(Database management System)
  - Oracle, MySQL, SQLite,...

- 웹 개발에서 대부분의 데이터베이스는 `관계형 데이터베이스 관리 시스템(RDBMS)`을 사용하여 SQL로 데이터와 프로그래밍을 구성

---

## RDB

> RDB란?

- 데이터를 테이블, 행, 열 등으로 나누어 구조화하는 방식

- 자료를 여러 테이블로 나누서어 관리하고, 이 테이블간 관계를 설정하여 여러 데이터를 쉽게 조작할 수 있다

- SQL을 사용하여 데이터를 조회하고 조작
  
> RDB 기본 구조

- 스키마
  - 테이블의 구조(Structure)
  - 데이터 베이스에서 자료의 구조, 표현 방법, 관계등 `전반적인 명세`를 기술

- 테이블
  - 필드와 레코드를 사용해 조직되 데이터 요소들의 집합
  - `관계(Relation)`라고도 부름
  - field(속성, 열), record(튜플, 행)

- PK(Primary Key)
  - 기본 키
  - 각 레코드의 고유한 값
  - 기술적으로 다른 항목과 `절대로 중복될 수 없는 단일 값(Unique)`

> RDBMS

- Relational Database Management System(관계형 데이터베이스 관리 시스템)

- 관계형 데이터베이스를 관리

- ex) SQLite, MySQL, Oracle 등

> SQLite

- 응용 프로그램에 파일 형식으로 넣어 사용하는 비교적 가벼운 데이터베이스

- 안드로이드, iOS, macOS에 기본적으로 탑재되어 있음. 임베디드에서도 많이 사용됨

- 오픈 소스 프로젝트이기 때문에 자유롭게 사용가능

- 단점 : 대규모 동시 처리 작업에는 적합하지 않음

> SQL

- Structured Query Language

- RDBMS의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어

- 데이터베이스 객체에 대한 처리를 관리하거나 접근 권한을 설정하여 허가된 사용자만 RDBMS를 관리할 수 있도록 할 수 있음

- 많은 데이터베이스 관련 프로그램들이 SQL을 표준으로 채택하고 있음

> SQL Commands 종류

| 분류                                              | 개념                                                                                | SQL 키워드                           |
| ------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------ |
| DDL - 데이터 정의 언어(Data Definition Language)  | 관계형 데이터베이스 구조(테이블, 스키마)를 정의(생성, 수정 및 삭제)하기 위한 명령어 | CREATE<br>DROP<br>ALTER              |
| DML - 데이터 조작 언어(Data Mnipulation Language) | 데이터를 조작(추가, 조회, 변경, 삭제)하기 위한 명령어                               | INSERT<br>SELECT<br>UPDATE<br>DELETE |

---

## SQL Syntax

```sql
-- SQL Syntax 예시

SELECT column_name FROM table_name;
```

- 모든 SQL문은 SELECT, INSERT, UPDATE 등과 같은 키워드로 시작하고, 하나의 statement는 `세미콜론(;)`으로 끝남

- SQL 키워드는 `대소문자를 구분하지 않음`. 하지만 `대문자로 작성하는 것을 권장`

> 참고) Statement & Clause

- Statement(문)
  - 독립적으로 실행할 수 있는 완전한 코드조각
  - statement는 clause로 구성됨

- Clause(절)
  - statment의 하위 단위
  
```sql
SELECT column_name FROM table_name;
```
- SELECT statement라고 부름

- 이 statement는 `SELECT column_name`과 `FROM table_name` 2개의 clause로 구성됨

---

# DDL

> 개요

- `Data definition`

- SQL 데이터 정의 언어를 사용하여 테이블 데이터베이스 개체를 만드는 방법을 학습

- CREATE(생성), ALTER(수정), DROP(삭제)

> `CREATE TABLE` statement

- 데이터베이스에 새 테이블을 만듦

```sql
-- 예시
CREATE TABLE table_name (
  column_1 data_type constraints,
  column_2 data_type constraints,
  column_3 data_type constraints
);

-- 실제 작성문
CREATE TABLE contacts (
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  email TEXT NOT NULL UNIQUE
);
```

- 쿼리 실행 후 테이블 및 스키마 확인

![image](https://user-images.githubusercontent.com/109258306/193740579-1780771d-a8b6-4150-af93-abe0e49ac39e.png)

- id 컬럼(PK)은 우리가 직접 기본 키 역할의 컬럼을 정의하지 않으면 자동으로 `rowid`라는 컬럼으로 생성됨

---

## SQLite Data Types

- NULL, INTEGER, REAL, TEXT, BLOB

> NULL

- 정보가 없거나 알 수 없음을 의미(missing information or unknown)

> INTEGER

- 정수

- 크기에 따라 0, 1, 2, 3, 4, 6 또는 8바이트와 같은 가변 크기를 가짐

> REAL

- 실수

- 8바이트 부동 소수점을 사용하는 10진수 값이 있는 실수

> TEXT

- 문자 데이터

> BLOB(Binary Large Object)

- 입력된 그대로 저장된 데이터 덩어리 (대용 타입이 없음)

- 바이너리 등 멀티미디어 파일

- ex) 이미지 데이터

> 참고) Boolean type

- SQLite에는 별도의 Boolean 타입이 없음

- 대신 Boolean 값은 정수 0(false)과 1(true)로 저장

> 참고) Date & Time Datatype

- SQLite에는 `날짜 및 시간을 저장하기 위한 타입이 없음`

- 대신 SQLite의 `built-in "Date And Time Functions"`으로 TEXT, REAL 또는 INTEGER 값으로 저장할 수 있음

> 참고) Binary Data

- 데이터의 저장과 처리를 목적으로 0과 1의 이진 형식으로 인코딩 된 파일

- 기본적으로 컴퓨터의 모든 데이터는 binary data이지만, 이를 필요에 따라서 텍스트 타입으로 변형해서 사용하는 것임

> SQLite의 데이터 타입을 결정하는 규칙

- 값에 둘러싸는 따옴표와 소수점 또는 지수가 없으면 - INTEGER

- 값이 `작은 따옴표`나 `큰따옴표`로 묶이면 - `TEXT`

- 값에 `따옴표나 소수점, 지수가 없으면` - REAL

- 값이 따옴표 없이 NULL이면 - NULL

> SQLite Datatype의 특징

- SQLite는 다른 모든 SQL 데이터베이스 엔진(MySQL, PostgreSQL등)의 정적이고 엄격한 타입(static, rigid typing)이 아닌 `동적 타입 시스템(dynamic type system)`을 사용

- 컬럼에 선언된 데이터 타입에 의해서가 아니라 `컬럼에 저장된 값에 따라` 데이터 타입이 결정됨!

- 또한 테이블을 생성할 때 `column에 대해 특정 데이터 타입을 선언하지 않아도 가능`함

- ex) 동일한 컬럼에 정수 1을 넣으면 INTEGER, 문자 '1'을 넣으면 TEXT 타입으로 지정됨

- 다만 이는 `다른 데이터베이스와의 호환성 문제`가 있기 때문에, 테이블 생성 시 `데이터 타입을 지정하는 것을 권장`

> Type Affinity(타입 선호도)

- 특정 컬럼에 저장된 데이터에 권장되는 타입

- 데이터 타입 작성 시 SQLite의 5가지 데이터 타입이 아닌 다른 데이터 타입을 선언한다면, 내부적으로 각 타입의 지정된 선호도에 따라 5가지 선호도로 인식됨

- 타입 선호도 존재 이유
  - 다른 데이터베이스 엔진 간의 `호환성`을 최대화
  - 정적이고 엄격한 타입을 사용하는 데이터베이스의 SQl문을 SQLite에서도 작동하도록 하기 위함

---

## Constraints

- 입력하는 자료에 대한 제약을 정함

- 제약에 맞지 않다면 입력이 거부됨

- `데이터의 무결성을 유지`하기 위한 보편적인 방법으로 테이블의 특정 컬럼에 설정하는 제약

> 데이터 무결성

- 데이터 베이스 내의 데이터에 대한 `정확성`, `일관성`을 보장하기 위해 데이터 변경 혹은 수정시 여러 제한을 두어 데이터의 정확성을 보증하는 것

> NOT NULL

- 컬럼이 NULL 값을 허용하지 않도록 지정

- 기본적으로 테이블의 모든 컬럼은 NOT NULL 제약 조건을 명시적으로 사용하는 경우를 제외하고는 NULL 값을 허용함

> UNIQUE

- 컬럼의 모든 값이 서로 구별되거나 고유한 값이 되도록 함

> PRIMARY KEY

- 테이블에서 행의 고유성을 식별하는데 사용되는 컬럼

- 각 테이블에는 하나의 기본 키만 있음

- 암시적으로 NOT NULL 제약 조건이 포함되어 있음

```sql
CREATE TABLE table_name (
  id INTEGER PRIMARY KEY,
  ..
);
```

- 주의! `INTEGER 타입에만` 사용 가능(INT, BIGINT도 불가능)

> AUTOINCREMENT

- 사용되지 않은 값이나 삭제된 행의 값을 재사용하는 것을 방지

- `INTEGER PRIMARY KEY 다음에 작성하면 해당 rowid를 다시 재사용하지 못하도록` 함

```sql
CREATE TABLE tagble_name (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ..
);
```

- Django에서 테이블 생성 시 id 컬럼에 기본적으로 사용되는 제약조건임을 확인할 수 있었음.

> rowid의 특징

- 테이블을 생성할 때마다 rowid라는 암시적 자동 증가 컬럼이 자동으로 생성됨

- 테이블의 행을 고유하게 식별하는 64비트 부호가 있는 정수 값

- 테이블에 새 행을 삽입할 때마다 정수 값을 자동으로 할당
  - 값은 1에서 시작
  - 데이터 삽입 시에 rowid 또는 INTEGER PRIMARY KEY 컬럼에 명시적으로 값이 지정되지 않는 경우, SQLite는 테이블에서 가장 큰 rowid보다 하나 다음 순차 정수를 자동으로 할당

- 만약 INTEGER PRIMARY KEY 키워드를 가진 컬럼을 직점 만들면 이 컬럼은 rowid 컬럼의 별칭(alias)이 됨
  - 즉, 새 컬럼 이름으로 rowid에 접근할 수 있으며, rowid 이름도 여전히 접근 가능

- 데이터가 최대 값에 도달하고 새 행을 삽입하려고 한다면 SQLite는 사용되지 않는 정수를 찾아 씀

- 만약 SQLite가 사용되지 안은 정수를 찾을 수 없다면 SQLITE_FULL에러 발생

---

## ALTER TABLE

- 기존 테이블의 구조를 수정(변경)

- SQLite의 ALTER TABLE 문을 사용하면 기존 테이블을 다음과 같이 변경할 수 있음
  - 1. Rename a table
  - 2. Rename a column
  - 3. Add a new column to a table
  - 4. Delete a coulmn

> ALTER TABLE statemet 예시

```sql
-- 1. Rename a table
ALTER TABLE table_name RENAME TO new_table_name;

-- 2. Rename a column
ALTER TABLE table_name RENAME COLUMN column_name TO new_column_name;

-- 3. Add a new column to a table
ALTER TABLE table_name ADD COLUMN column_definition;

-- 4. Delete a table
ALTER TABLE table_name DROP COLUMN column_name;

```

> 만약 테이블에 기존 데이터가 있을 경우 다음과 같은 에러가 발생

![image](https://user-images.githubusercontent.com/109258306/193747301-233607a6-b0fb-4a0e-b359-a48f1bceac96.png)

- 이전에 이미 저장된 데이터들은 새롭게 추가되는 컬럼에 값이 없기 때문에 NULL이 작성됨 => 하지만 NOT NULL 제약조건에 의해 기본 값이 없다면 추가될 수 없다는 에러가 발생

> NOT NULL 에러 해결하기

- DEFAULT 제약 조건을 사용하여 해결할 수 있음

```sql
ALTER TABLE new_contacts ADD COLUMN address TEXT NOT NULL DEFAULT 'no address';
```

> ALTER TABLE DROP COLUMN

- 컬럼 삭제

```sql
ALTER TABLE new_contacts DROP COLUMN address;
```

- 삭제가 블가능한 경우!
  - 컬럼이 다른 부분에서 참조되는 경우
  - 특히 FOREIGN KEY(외래 키) 제약조건에서 사용되는 경우

- PRIMARY KEY인 경우

- UNIQUE 제약조건이 있는 경우

---

## DROP TABLE

- 데이터베이스에서 테이블을 제거

```sql
DROP TABLE table_name;
```

> DROP TABLE의 특징

- `한 번에 하나의 테이블만 삭제` 가능

- DROP TABLE문은 `실행 취소하거나 복구 불가능`

--- 

# DML

> 개요

- DML을 통해 데이터를 조작하기(CRUD)

- INSERT(C), SELECT(R), UPDATE(U), DELETE(D)

---

## Simple query

> 개요

- SELECT문을 사용하여 간단하게 단일 테이블에서 데이터 조회하기

> SELECT statement

```sql
SELECT column1, column2 FROM table_name;
```

- 특정 테이블에서 데이터를 조회하기 위해 사용

- 문법 규칙
  - SELECT 절에서 컬럼 또는 쉼표로 구분된 컬럼 목록을 지정
  - FROM절(clause)에서 데이터를 가져올 테이블을 지정

- SELECT문은 다양한 절과 함께 사용할 수 있음
  - ORDER BY
  - DISTINCT
  - WHERE
  - LIMIT
  - LIKE
  - GROUP By

---

## Sorting rows

> ORDER BY `clause`

```sql
SELECT select_list FROM table_name
ORDER BY column_1 ASC, column_2 DESC;
```

- SLELCT 문에 추가하여 결과를 정렬

- ORDER BY 절은 FROM 절 뒤에 위치함

- 하나 이상의 컬럼을 기준으로 결과를 오름차순, 내림차순 정렬가능

- 이를 위해 ORDER BY 절 다음에 `ASC` 또는 `DESC` 키워드를 사용
  - ASC : 오름차순 (기본 값)
  - DESC : 내림차순

> 참고) Sorting NULLs

- 정렬과 관련하여 SQLite는 NULL을 다른 값보다 작은 것으로 간주

- 즉, ASC의 경우는 결과의 시작 부분에 NULL이 표시되고, DESC는 결과의 마지막 부분에 NULL이 표시됨

---

## Filtering data

> 개요

- 데이터를 필터링하여 중복제거, 조건 설정 등 쿼리를 제어

- Clause
  - SELECT DISTINCT
  - WHERE
  - LIMIT

- Operator
  - LIKE
  - IN
  - BETWEEN

> `SELECT DISTINCT` clause

```sql
SELECT DISTINCT FROM table_name;
```

- 조회 결과에서 중복된 행을 제거

- DISTINCT 절은 SELECT에서 선택적으로 사용할 수 있는 절

- 문법 규칙
  - DISTINCT 절은 SELECT 키워드 바로 뒤에 나타나야 함
  - DISTINCT 키워드 뒤에 컬럼 또는 컬럼 목록을 작성

```sql
SELECT DISTINCT first_name, country FROM users;
```

- 주의! 각 컬럼의 중복을 따로 계산하는 것이 아니라 `두 컬럼을 하나의 집합으로 보고 중복을 제거`함

> 참고) NULL with DISTINCT

- SQLite는 `NULL 값을 중복으로 간주`

- NULL 값이 있는 컬럼에 DISTINCT 절을 사용하면 SQLite는 NULL 값의 한 행을 유지

> `WHERE` clause

- 조회 시 특정 검색 조건을 지정

- WHERE 절은 SELECT 문에서 선택적으로 사용할 수 있는 절
  - SELECT문 외에도 UPDATE 및 DLETE 문에서 사용 가능

- FROM 절 뒤에 사용

> WHERE의 검색 조건 작성 형식

```sql
left_expression COMPARISON_OPERATOR right_expression
```

- 작성 예시

```sql
WHERE column_1 = 10

WHERE column_2 LIKE 'KO%'   -- 'KO'로 시작하는지

WHERE column_3 IN (1, 2)    -- 1 아니면 2인지

WHERE column_4 BETWEEN 10 AND 20    -- 10과 20 사이인지
```

> SQLite logical operators (논리연산자)

- 일부 표현식의 truth를 테스트할 수 있음

- 1, 0 또는 NULL 값을 반환

- SQLite는 Boolean 타입을 제공하지 않으므로 1과 0으로 판별

- ALL, AND, ANY, BETWEEN, IN, LIKE, NOT, OR 등

> `LIKE` operator

- 패턴 일치를 기반으로 데이터를 조회

- SELECT, DELETE, UPDATE 문의 WHERE 절에서 사용

- 기본적으로 대소문자를 구분하지 않음
  - `'A' LIKE 'a'` 는 `true`

- SQLite는 패턴 구성을 위한 두 개의 와일드카드(wildcards)를 제공

1. %(percent) : 0개 이상의 문자가 올 수 있음을 의미
2. _(underscore) : 단일(1개) 문자가 있음을 의미

> `'%'` wildcard 예시

- '영%' 패턴은 영으로 시작하는 모든 문자열과 일치(영, 영미, 영미리 등)

- '%도' 패턴은 도로 끝나는 모든 문자열과 일치(도, 수도, 경기도 등)

- '%강원%' 패턴은 강원을 포함하는 모든 문자열과 일치(강원, 강원도, 이강원 등)

> `'_'` wildcard 예시

- '영_' 패턴은 영으로 시작하고 총 2자리인 문자열과 일치(영미, 영수, 영호 등)

- '_도' 패턴은 도로 끝나고 총 2자리인 문자열과 일치(수도, 과도 등)

> `IN` operator

- 값이 값 목록 결과에 있는 값과 일치하는지 확인

- 표현식이 값 목록의 값과 일치하는지 여부에 따라 true 또는 false를 반환

- IN 연산자의 결과를 부정하려면 NOT IN 연산자를 사용

> `BETWEEN` operator

- 값이 범위에 있는지 테스트

- 값이 지정된 벙위에 있으면 true를 반환

- SELECT, DELETE, 및 UPDATE 문의 WHERE 절에서 사용할 수 있음

- BETWEEN 연산자의 결과를 부정하려면 `NOT BETWEEN` 사용

> `LIMIT` clause

```sql
SELECT column_list FROM table_name LIMIT row_count;
```

- 쿼리에서 반환되는 행 수를 제한

- SELECT 문에서 선택적으로 사용할 수 있는 절

- row_count는 반환되는 행 수를 지정하는 양의 정수를 의미

> `OFFSET` keyword

- LIMIT 절을 사용하면 첫 번째 데이터부터 지정한 수 만큼의 데이터를 받아올 수 있지만, OFFSET과 함께 사용하면 특정 지정된 위치에서부터 데이터를 조회할 수 있음

- ex) 11번째부터 20번째 데이터의 rowid와 이름 조회하기

```sql
SELECT rowid, first_name FROM users LIMIT 10 OFFSET 10;
```

> `GROUP BY` clause

```sql
SELECT column_1, aggregate_function(column_2)
FROM table_name
GROUP BY column_1, column_2;
```

- 특정 그룹으로 묶인 결과를 생성

- 선택된 컬럼 값을 기준으로 데이터(행)들의 공통 값을 묶어서 결과로 나타냄

- SELECT 문의 FROM절 뒤에 작성
  - WHERE 절이 포함된 경우 WHERE 절 뒤에 작성해야 함

- 각 그룹에 대해 MIN, MAX, SUM, COUNT 또는 AVG와 같은 집계 함수(aggregate function)를 추가하여 각 그룹에 대한 추가적인 정보를 제공할 수 있음

> Aggregate function

- 집계 함수

- 각 집합의 최개, 최소, 평균, 합계 및 개수를 계산

- SELECT문의 GROUP BY 절과 함께 종종 사용됨

- 제공하는 함수 : AVG(), COUNT(), MAX(), MIN(), SUM()

- AVG(), MAX(), MIN(), SUM()는 숫자를 기준으로 계산 되어야 하기 때문에 반드시 컬럼의 데이터 타입이 숫자(INTEGER)일 때만 사용 가능

---

## Changing data

> 개요

- 데이터를 삽입, 수정, 삭제

- INSERT, UPDATRE, DELETE


> `DELETE` statement

```sql
DELETE FROM table_name
WHERE search_condition;
```

- 테이블에서 행을 제거

- 테이블의 한 행, 여러 행 및 모든 행 삭제 가능

- 문법 규칙
  - 1. DELETE FROM 키워드 뒤에 행을 제거하려는 테이블의 이름을 지정
  - 2. WHERE 절에 검색 조건을 추가하여 제거할 행을 식별(WHERE절은 선택 사항이며, `생략하면 테이블의 모든 행을 삭제`)
  - 3. 선택적으로 ORDER BY 및 LIMIT 절을 사용하여 삭제할 행 수를 지정할 수도 있음
  
