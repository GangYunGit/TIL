# JPA 실습 - 회원 등록, 수정, 삭제, 조회

## 프로젝트 기본 설정

- 프로젝트 파일 경로

![image](https://user-images.githubusercontent.com/109258306/221570062-6f53dda5-a670-4fd3-aca8-801c7a1546c5.png)

- pom.xml
  - JPA 하이버네이트, H2 DB 사용

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>jpa-basic</groupId>
    <artifactId>ex1-hello-jpa</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <!-- JPA 하이버네이트 -->
        <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-entitymanager</artifactId>
            <version>5.3.10.Final</version>
        </dependency>

        <!-- H2 데이터베이스 -->
        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <version>1.4.200</version>
        </dependency>
    </dependencies>
</project>
```

- persistence.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<persistence version="2.2"
             xmlns="http://xmlns.jcp.org/xml/ns/persistence" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/persistence http://xmlns.jcp.org/xml/ns/persistence/persistence_2_2.xsd">

    <persistence-unit name="hello">
        <properties>
            <!-- 필수 속성 -->
            <!-- DB Driver -->
            <property name="javax.persistence.jdbc.driver" value="org.h2.Driver"/>
            <!-- DB user info -->
            <property name="javax.persistence.jdbc.user" value="sa"/>
            <property name="javax.persistence.jdbc.password" value=""/>
            <!-- DB url -->
            <property name="javax.persistence.jdbc.url" value="jdbc:h2:tcp://localhost/~/test"/>
            <!-- DB Dialect 설정 -->
            <property name="hibernate.dialect" value="org.hibernate.dialect.H2Dialect"/>

            <!-- 옵션 -->
            <!-- SQL show -->
            <property name="hibernate.show_sql" value="true"/>
            <!-- SQL 정렬 -->
            <property name="hibernate.format_sql" value="true"/>
            <!-- SQL에 관한 주석 처리 -->
            <property name="hibernate.use_sql_comments" value="true"/>
            <!-- application 실행 시 ddl 전략 -->
            <!-- <property name="hibernate.hbm2ddl.auto" value="create"/>-->
        </properties>
    </persistence-unit>
</persistence>
```

## Member Entity 작성

- `@Id` 어노테이션 : JPA에게 PK 컬럼임을 알려줌(꼭 javax.persistence로 import하기!!)
![image](https://user-images.githubusercontent.com/109258306/221571130-99c47b4c-9d59-4c21-9d97-5a0591c01466.png)

- Getter, setter 작성

- Member.java

```java
package hellojpa;

import jdk.nashorn.internal.objects.annotations.Getter;
import jdk.nashorn.internal.objects.annotations.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Member {

    @Id // JPA에게 PK임을 알려줌
    private Long id;
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

```

## 회원 등록

- JPA의 구동 방식 개요

![image](https://user-images.githubusercontent.com/109258306/221572033-48806489-6383-4d3d-877d-41c8988e44ac.png)

- EntityManagerFactory
  - 애플리케이션 `로딩 시점에 한 개만 만들어져야함`!
  - 이후 `EntityManager`를 EntityManagerFactory에서 꺼냄
  - 트랜잭션을 열고, 실행시킬 쿼리를 작성
  - 로딩이 끝나는 시점에서는 `EntityManager 종료 -> EntityManagerFactory 종료` 순으로

- JpaMain.java

```java
package hellojpa;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class JpaMain {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");

        EntityManager em = emf.createEntityManager();

        // JPA에서는 transaction이라는 단위가 매우 중요
        EntityTransaction tx = em.getTransaction();

        // 엔티티 매니저는 데이터 변경 시 트랜잭션을 시작해주어야 함.
        tx.begin();

        try {
            // Id = 1, Name = "HelloA"인 member 생성
            Member member = new Member();
            member.setId(1L);
            member.setName("HelloA");

            // 생성한 member 저장
            em.persist(member);

            // commit을 하는 순간 DB에 insert SQL을 날린다.
            tx.commit();
        } catch (Exception e) {
            // EntityManager close
            em.close();
        }
        // EntityManagerFactory close
        emf.close();
    }
}
```

## 회원 조회, 삭제

- EntityManager를 `Collection처럼 생각하고 메서드들을 꺼내서 쓰자`
  - 간단한 조회 : em.find 로 Member 객체 생성 => `객체의 getter로 Id, Name조회`
  - 삭제 : em.remove(`객체`)로 delete

- JpaMain.java

```java
...
try {
    // EntityManager의 find메서드를 이용하여 조회
    Member findMember = em.find(Member.class, 1L);
    System.out.println("findMember.id = " + findMember.getId());
    System.out.println("findMember.name = " + findMember.getName());

    // EntityManager의 remove메서드를 이용하여 삭제
    em.remove(findMember);
    tx.commit();
}
...

```

## 회원 수정

- 수정도 간단하게 찾은 객체를 setter로 바꿔주기만 하면 된다.(persist로 저장할 필요도 없음!)
  - JPA를 통해서 entity를 가져오면 JPA가 관리를 하게되며, commit이 되는 시점에 변경된 entity가 있는지 체크한다. 이 때 변경된 부분이 있다면 update쿼리를 알아서 날려준다.

- JpaMain.java

```java
...
try {
    Member findMember = em.find(Member.class, 1L);
    findMember.setName("HelloJPA"); // HelloA -> HelloJPA로 바뀜

    tx.commit();
}
...

```

## 주의 사항!!

- `EntityManagerFactory`는 `하나만 생성`해서 `애플리케이션 전체에서 공유`해야함

- `EntityManager`는 `Thread간에 절대로 공유하면 안된다.` (사용하고 버려야함)

- `JPA의 모든 데이터 변경은 트랜잭션 안에서 실행`

## JPQL

- JPA를 사용하면 `엔티티 객체를 중심으로 개발`

- 검색 쿼리(Join을 많이 사용)

- 애플리케이션이 필요한 데이터만 DB에서 불러오려면 결국 검색조건이 포함된 SQL이 필요함

- 검색할 때에도 `테이블이 아닌 엔티티 객체를 대상으로 검색` (SQL은 DB 테이블을 대상으로 검색) => 다른 DB의 Dialect를 사용하게 되더라도 JPQL코드 자체는 변경할 필요가 없음

- SQL문법과 유사(SELECT, FROM, WHERE, GROUP BY, HAVING, JOIN 지원)

- 예시 코드

```java
...
List<Member> result = em.createQuery("Select m from Member as m where m.name = 'HelloJPA'")
    .setFirstResult(5)
    .setMaxResults(8)
    .getResultList();

for (Member member : result) {
    System.out.println("member.name = " + member.getName());
}
...

```

- Query 결과

![image](https://user-images.githubusercontent.com/109258306/221599093-b45c9e0b-fb7e-4d6a-b5f4-9a173346bed4.png)
