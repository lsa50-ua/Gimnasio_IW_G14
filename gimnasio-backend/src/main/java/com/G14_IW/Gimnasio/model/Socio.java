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

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "usuario_id")
    private List<Pago> pagos = new ArrayList<>();

    @OneToMany
    @JoinColumn(name = "usuario_id")
    private List<Reserva> reservas = new ArrayList<>();

    // Getters y Setters
    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public List<Pago> getPagos() {
        return pagos;
    }

    public void setPagos(List<Pago> pagos) {
        this.pagos = pagos;
    }

    public void addPago(Pago pago) {
        pagos.add(pago);
        pago.setUsuario(this);
    }

    public void removePago(Pago pago) {
        pagos.remove(pago);
        pago.setUsuario(null);
    }

    public void setReservas(List<Reserva> reservas) {
        this.reservas = reservas;
    }

    public List<Reserva> getReservas() {
        return reservas;
    }

    public void addReserva(Reserva reserva) {
        reservas.add(reserva);
        reserva.setSocio(this);
    }

    public void removeReserva(Reserva reserva) {
        reservas.remove(reserva);
        reserva.setSocio(null);
    }
}