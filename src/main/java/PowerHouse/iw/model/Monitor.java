package PowerHouse.iw.model;

import javax.persistence.Entity;

@Entity
public class Monitor extends Usuario {

    private String actividad;

    // Getters y Setters
    public String getActividad() {
        return actividad;
    }

    public void setActividad(String actividad) {
        this.actividad = actividad;
    }
}
