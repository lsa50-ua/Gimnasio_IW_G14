package PowerHouse.iw.model;

import javax.persistence.Entity;

@Entity
public class WebMaster extends Usuario {

    private boolean activo;

    // Getters y Setters
    public boolean isActivo() {
        return activo;
    }

    public void setActivo(boolean activo) {
        this.activo = activo;
    }

    // Métodos adicionales para gestionar la base de datos
    public void activarSocio(Socio socio) {
        socio.setActivo(true);
    }

    public void bloquearSocio(Socio socio) {
        socio.setActivo(false);
    }

    public void crearActividad(Actividad actividad) {
        // Lógica para crear actividad
    }

    public void modificarActividad(Actividad actividad) {
        // Lógica para modificar actividad
    }

    public void borrarActividad(Actividad actividad) {
        // Lógica para borrar actividad
    }

    public void generarInforme() {
        // Lógica para generar informes
    }
}
