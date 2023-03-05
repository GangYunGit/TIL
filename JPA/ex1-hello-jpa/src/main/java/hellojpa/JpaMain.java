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
            // 팀 저장
            Team team = new Team();
            team.setName("TeamA");
            em.persist(team);

            // 회원 저장
            Member member = new Member();
            member.setUsername("member1");
            member.setTeam(team);   // 단방향 연관관계 설정, 참조 저장
            em.persist(member);

            em.flush();
            em.clear();

            // 멤버 조회
            Member findMember = em.find(Member.class, member.getId());
            List<Member> members = findMember.getTeam().getMembers();

            for (Member m : members) {
                System.out.println("m = " + m.getUsername());
            }

            // 새로운 팀B
            Team teamB = new Team();
            teamB.setName("TeamB");
            em.persist(teamB);

            // 회원1에 새로운 팀B 설정
            member.setTeam(teamB);

            tx.commit();
        } catch (Exception e) {
            // EntityManager close
            em.close();
        }
        // EntityManagerFactory close
        emf.close();
    }
}
