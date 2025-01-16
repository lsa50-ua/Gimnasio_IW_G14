package com.G14_IW.Gimnasio.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@DiscriminatorValue("Monitor")
public class Monitor extends Usuario {

    @OneToMany(mappedBy = "monitor", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private List<Actividad> actividades = new ArrayList<>();

    public Monitor() {
        super();
    }

    public Monitor(String email, String password) {
        super(email, password);
    }

    public Monitor(String email, String password, List<Actividad> actividades) {
        super(email, password);
        this.actividades = actividades;
    }

    public List<Actividad> getActividades() {
        return actividades;
    }

    public void setActividades(List<Actividad> actividades) {
        this.actividades = actividades;
    }

    public void addActividad(Actividad actividad) {
        actividades.add(actividad);
        actividad.setMonitor(this);
    }

    public void removeActividad(Actividad actividad) {
        actividades.remove(actividad);
        actividad.setMonitor(null);
    }

    public void removeActividad(int index) {
        Actividad actividad = actividades.get(index);
        actividades.remove(index);
        if (actividad != null) {
            actividad.setMonitor(null);
        }
    }

    public void clearActividades() {
        for (Actividad actividad : actividades) {
            actividad.setMonitor(null);
        }
        actividades.clear();
    }

    public int getNumActividades() {
        return actividades.size();
    }
}
