package com.G14_IW.Gimnasio.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    private int capacidad;
    private float precio;

    @ManyToOne
    @JoinColumn(name = "tipo_actividad_id")
    private TipoActividad tipoActividad;

    @ManyToOne
    @JoinColumn(name = "monitor_id")
    @JsonIgnoreProperties("actividades")
    private Monitor monitor;

    @OneToMany(mappedBy = "actividad")
    @JsonManagedReference
    private List<Reserva> reservas;

    public Actividad(String nombre, String diaSemana, String horas, String fechaInicio, String fechaFin,
                     int capacidad, float precio, TipoActividad tipoActividad, Monitor monitor) {
        this.nombre = nombre;
        this.diaSemana = diaSemana;
        this.horas = horas;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.capacidad = capacidad;
        this.precio = precio;
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

    public int getCapacidad() {
        return capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
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