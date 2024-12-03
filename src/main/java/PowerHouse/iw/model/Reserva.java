package PowerHouse.iw.model;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class Reserva {

    private Date fechaReserva;
    private String hora;

    // Getters y Setters
    public Date getFechaReserva() {
        return fechaReserva;
    }

    public void setFechaReserva(Date fechaReserva) {
        this.fechaReserva = fechaReserva;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }
}
