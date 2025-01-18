package com.G14_IW.Gimnasio.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.lang.Nullable;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Data
@Entity
@Table(name = "reservas")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate fechaReserva;
    private LocalTime hora;

    @ManyToOne
    @JoinColumn(name = "actividad_id", nullable = false)
    @JsonBackReference
    private Actividad actividad;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    @JsonIgnoreProperties("reservas")
    @Nullable
    private Socio socio;

    // Constructores
    public Reserva() {
    }

    public Reserva(LocalDate fechaReserva, LocalTime hora, Actividad actividad, Socio socio) {
        this.fechaReserva = fechaReserva;
        this.hora = hora;
        this.actividad = actividad;
        this.socio = socio;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getFechaReserva() {
        return fechaReserva;
    }

    public void setFechaReserva(LocalDate fechaReserva) {
        this.fechaReserva = fechaReserva;
    }

    public LocalTime getHora() {
        return hora;
    }

    public void setHora(LocalTime hora) {
        this.hora = hora;
    }

    public Actividad getActividad() {
        return actividad;
    }

    public void setActividad(Actividad actividad) {
        this.actividad = actividad;
    }

    public Socio getSocio() {
        return socio;
    }

    public void setSocio(Socio socio) {
        this.socio = socio;
    }
}
