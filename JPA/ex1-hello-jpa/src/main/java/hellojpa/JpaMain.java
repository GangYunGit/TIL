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
                Member member = em.find(Member.class, 201L);
                member.setName("asdasd");

                em.detach(member);

                System.out.println("=====================");
                tx.commit();
                System.out.println("커밋 완료!!!!!!!");
        } catch (Exception e) {
            // EntityManager close
            em.close();
        }
        // EntityManagerFactory close
        emf.close();
    }
}
