package hellojpa;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.util.List;

public class JpaMain {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");

        EntityManager em = emf.createEntityManager();

        // JPA에서는 transaction이라는 단위가 매우 중요
        EntityTransaction tx = em.getTransaction();

        // 엔티티 매니저는 데이터 변경 시 트랜잭션을 시작해주어야 함.
        tx.begin();

        try {

            Team team = new Team();
            team.setName("TeamA");
            em.persist(team);

            Member member = new Member();
            member.setUsername("member1");

            // 역방향 연관관계
            team.getMembers().add(member);
            // 연관관계의 주인에 값 설정
            member.setTeam(team);

            em.persist(member);

//            em.flush();
//            em.clear();

            // select하면서 1차 캐시에 저장
            Team findTeam = em.find(Team.class, team.getId());
            List<Member> members = findTeam.getMembers();

            System.out.println("================");
            for (Member m : members) {
                System.out.println("m = " + m.getUsername());
            }
            System.out.println("================");

            tx.commit();
        } catch (Exception e) {
            // EntityManager close
            em.close();
        }
        // EntityManagerFactory close
        emf.close();
    }
}
