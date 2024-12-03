package PowerHouse.iw.model;

import javax.persistence.Entity;

@Entity
public class Actividad {

    private String nombre;
    private String diaSemana;
    private String horas;
    private String fechaFinActividad;
    private int capacidad;

    // Getters y Setters
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDiaSemana() {
        return diaSemana;
    }

    public void setDiaSemana(String diaSemana) {
        this.diaSemana = diaSemana;
    }

    public String getHoras() {
        return horas;
    }

    public void setHoras(String horas) {
        this.horas = horas;
    }

    public String getFechaFinActividad() {
        return fechaFinActividad;
    }

    public void setFechaFinActividad(String fechaFinActividad) {
        this.fechaFinActividad = fechaFinActividad;
    }

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }
}
