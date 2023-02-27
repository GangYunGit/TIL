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

## 엔티티의 생명 주기

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

## 영속성 컨텍스트의 이점

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