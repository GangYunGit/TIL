package hellojpa;
import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Item {

    @Id @GeneratedValue
    private Long id;

    private String name;
    private int prices;

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

    public int getPrices() {
        return prices;
    }

    public void setPrices(int prices) {
        this.prices = prices;
    }
}
