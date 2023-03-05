# JPA 이론

## JPA에서 가장 중요한 2가지

- 객체와 관계형 데이터베이스 매핑(Object Relational Mapping)

- `영속성 컨텍스트`

## 영속성 컨텍스트

- 논리적인 개념으로, 눈에 보이지 않는다.

- JPA를 이해하는데 가장 중요한 용어

- `엔티티를 영구 저장하는 환경`이라는 뜻

- 엔티티 매니저를 통해서 영속성 컨텍스트에 접근

- EntityManager.persist(entity);

### 엔티티의 생명 주기

- 비영속 (new/transient)
  - 영속성 컨텍스트와 전혀 관계가 없는 새로운 상태
  ```java
  // 객체를 생성한 상태(비영속)
  Member member = new Member();
  member.setId("member1");
  member.setUsername("회원1");
  ```

- 영속 (managed)
  - 영속성 컨텍스트에 `관리되는 상태`
  ```java
  // 객체를 생성한 상태(비영속)
  Member member = new Member();
  member.setId("member1");
  member.setUsername("회원1");

  EntityManager em = emf.createEntityManager();
  em.getTransaction().begin();

  // 객체를 저장한 상태(영속)
  em.persist(member);
  ```

- 준영속 (detached)
  - 영속성 컨텍스트에 저장되었다가 `분리`된 상태
  ```java
  // 회원 엔티티를 영속성 컨텍스트에서 분리, 준영속 상태
  em.detach(member);
  ```

- 삭제 (removed)
  - 삭제된 상태
  ```java
  // 객체를 삭제한 상태
  em.remove(member)
  ```

### 영속성 컨텍스트의 이점

- 1차 캐시

- 동일성(identity) 보장

- 트랜잭션을 지원하는 쓰기 지연(transactional write-behind)

- 변경 감지(Dirty Checking)

- 지연 로딩(Lazy Loading)

### 1차 캐시, 엔티티 조회

- 객체가 1차 캐시에 저장이 되어있으면 캐싱된 값을 반환, 그렇지 않으면 DB를 조회하고, 1차 캐시에 저장한 뒤 객체를 반환

- 1차 캐시는 하나의 트랜잭션안에서만 효과가 있으며(EntityManager하나당 트랜잭션도 한개이므로), EntityManager가 사라지면 같이 없어짐

```java
// 객체를 생성한 상태(비영속)
Member member = new Member();
member.setId("member1");
member.setUsername("회원1");

// 1차 캐시에 저장됨
em.persist(member);

// 1차 캐시에 저장이 되어있으므로 1차 캐시에서 조회
Member findMember1 = em.find(Member.class, "member1");

// 1차 캐시에 저장이 되어있지 않으므로 DB에서 조회, 이후 캐시에 저장
Member findMember2 = em.find(Member.class, "member2");
```

### 영속 엔티티의 동일성 보장

![image](https://user-images.githubusercontent.com/109258306/221610963-21e7c1cc-eec3-49d9-883f-28b55e98c1a3.png)

![image](https://user-images.githubusercontent.com/109258306/221611339-6bbb62e7-b679-4d44-a956-182e2a963ece.png)

- 1차 캐시로 반복 가능한 읽기(Repeatable Read) 등급의 트랜잭션 격리 수준을 데이터베이스가 아닌 애플리케이션 차원에서 제공

### 트랜잭션을 지원하는 쓰기 지연

- 영속성 컨텍스트에는 `쓰기 지연 SQL 저장소`가 존재

```java
EntityManaber em = emf.createEntityManager();
EntityTransaction transaction = em.getTransaction();
// 트랜잭션 변경시 트랜잭션 시작이 필요
transaction.begin();

em.persist(memberA);
em.persist(memberB);
// 여기까지 실행되어도 Insert SQL문이 DB로 날아가지 않음

// 커밋하는 순간 DB에 SQL문을 날림
transaction.commit();
```

- `batch_size 옵션`
  - persistence.xml에 추가 : `<property name="hibernate.jdbc.batch_size" value="10"/>`
  - value값 만큼 SQL문을 모아서 DB에 쿼리문을 한 방에 commit하게 됨(`버퍼링` 기능)

### 변경 감지(Dirty Checking)

- 엔티티를 수정 할 때, 수정만 하고 끝이 아니라 DB에 반영을 해줘야 하는거 아닌가...? => `그럴 필요 없다!`

```java
EntityManaber em = emf.createEntityManager();
EntityTransaction transaction = em.getTransaction();
transaction.begin();  // 트랜잭션 시작

// 영속성 엔티티 조회
Member member = em.find(Member.class, "memberA");

// 영속성 엔티티 수정
memberA.setUsername("hi");
memberA.setAge(10);

// em.persist(member) 이런 코드가 있어야 하지 않나?? -> X

transaction.commit(); // 트랜잭션 커밋
```

- JPA의 변경 감지 과정

![image](https://user-images.githubusercontent.com/109258306/221617579-879b2514-1058-4984-985c-fd5001068fcc.png)

## 플러시(Flush)

- 영속성 컨텍스트의 변경내용을 데이터베이스에 반영하는 과정

- 변경 감지(Dirty Checking) -> 수정된 엔티티를 쓰기 지연 SQL 저장소에 등록 -> 쓰기 지연 SQL 저장소의 쿼리를 데이터베이스에 전송(등록, 수정, 삭제 쿼리)

- 영속성 컨텍스트를 플러시하는 방법
  - 직접 호출 : `em.flush()` 
  - 자동 호출 : `트랜잭션 커밋`, 혹은 `JPQL 쿼리 실행` 시

- em.flush()를 이용하여 플러시를 강제 호출하여 DB에 반영시킨 모습

![image](https://user-images.githubusercontent.com/109258306/221620514-924b53eb-661c-408e-aba6-f63633f9e669.png)

- flush를 진행한다고 해서 1차 캐시가 지워지는 것은 아님.

- JPQL 쿼리 실행 시 플러시가 자동으로 호출되는 이유
  - insert된 객체를 바로 다음 줄에서 조회하는 상황이 발생할 수도 있기 때문..
  ```java
  em.persist(memberA);
  em.persist(memberB);
  em.persist(memberC);

  // member A, B, C 를 insert한 후에 바로 JPQL로 모든 멤버를 조회하면 조회가 안될 텐데? -> 그러면 그냥 flush 해주지뭐
  query = em.createQuery("Select m from Member m", Member.class);
  List<Member> members = query.getResultList();
  ```

- flush 모드 옵션
  - `em.setFlushMode(FlushModeType.COMMIT)`
  - FlushModeType.AUTO : 커밋이나 쿼리를 실행할 때 자동으로 플러시(기본값)
  - FlushModeType.COMMIT : 커밋을 할 때만 플러시

### 플러시 정리

- 영속성 컨텍스트를 비우고 DB에 반영하는게 아니다!!

- 영속성 컨텍스트의 `변경 내용`을 DB에 동기화

- 트랜잭션이라는 작업 단위가 중요 -> 커밋 직전에만 동기화하면 됨

## 준영속 상태

- 영속 상태의 엔티티가 영속성 컨텍스트에서 분리(detached)

- 즉, `영속성 컨텍스트가 제공하는 기능(캐시, 변경 감지)을 사용하지 못하게됨`

- 준영속 상태로 만드는 방법
  - `em.detach(entity)` : 특정 엔티티만 준영속 상태로 전환
  - `em.clear()` : 영속성 컨텍스트를 완전히 초기화
  - `em.close()` : 영속성 컨텍스트 종료

- ex) setName으로 엔티티를 수정하고, detach를 호출하면 insert 쿼리가 날아가지 않는 모습

![image](https://user-images.githubusercontent.com/109258306/221625884-88b27002-a15c-4d44-badb-5b3859ae18a6.png)