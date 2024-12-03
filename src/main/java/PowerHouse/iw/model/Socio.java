package PowerHouse.iw.model;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Socio extends Usuario {

    private double saldo;
    private String actividadReservada;

    @OneToMany(mappedBy = "socio")
    private List<Pago> pagos;  // Relación con pagos

    // Getters y Setters
    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public String getActividadReservada() {
        return actividadReservada;
    }

    public void setActividadReservada(String actividadReservada) {
        this.actividadReservada = actividadReservada;
    }

    public List<Pago> getPagos() {
        return pagos;
    }

    public void setPagos(List<Pago> pagos) {
        this.pagos = pagos;
    }
}
