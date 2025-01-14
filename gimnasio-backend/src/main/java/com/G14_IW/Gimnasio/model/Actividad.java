package com.G14_IW.Gimnasio.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.lang.NonNull;

import java.util.List;

@Data
@Entity
@Table(name = "actividades")
public class Actividad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String nombre;
    private String diaSemana;
    private String horas;
    private String fechaInicio;
    private String fechaFin;

    @ManyToOne
    @JoinColumn(name = "tipo_actividad_id")
    private TipoActividad tipoActividad;

    @ManyToOne
    @JoinColumn(name = "monitor_id")
    private Monitor monitor;

    @OneToMany(mappedBy = "actividad")
    private List<Reserva> reservas;

    public Actividad(String nombre, String diaSemana, String horas, String fechaInicio, String fechaFin, TipoActividad tipoActividad, Monitor monitor) {
        this.nombre = nombre;
        this.diaSemana = diaSemana;
        this.horas = horas;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.tipoActividad = tipoActividad;
        this.monitor = monitor;
    }

    public Actividad() {
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public String getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(String fechaInicioActividad) {
        this.fechaInicio = fechaInicioActividad;
    }

    public String getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(String fechaFinActividad) {
        this.fechaFin = fechaFinActividad;
    }

    public TipoActividad getTipoActividad() {
        return tipoActividad;
    }

    public void setTipoActividad(TipoActividad tipoActividad) {
        this.tipoActividad = tipoActividad;
    }

    public Monitor getMonitor() {
        return monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public List<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(List<Reserva> reservas) {
        this.reservas = reservas;
    }
}