package com.G14_IW.Gimnasio.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.lang.NonNull;

@Data
@Entity
@Table(name = "tipo_actividades")
public class TipoActividad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String tipo;

    private String descripcion;

    private String imagen;

    private int capacidad;
    private float precio;

    public TipoActividad(String tipo) {
        this.tipo = tipo;
    }

    public TipoActividad(String tipo, String descripcion, String imagen, int capacidad, float precio) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.capacidad = capacidad;
        this.precio = precio;
    }

    public TipoActividad() {
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
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

}