package com.G14_IW.Gimnasio.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@DiscriminatorValue("Socio")
public class Socio extends Usuario {
    private double saldo;
    private String actividadReservada;
    private boolean activo;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "usuario_id")
    private List<Pago> pagos = new ArrayList<>();

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

    public boolean isActivo() {
        return activo;
    }

    public void setActivo(boolean activo) {
        this.activo = activo;
    }

    public void addPago(Pago pago) {
        pagos.add(pago);
        pago.setUsuario(this);
    }

    public void removePago(Pago pago) {
        pagos.remove(pago);
        pago.setUsuario(null);
    }
}