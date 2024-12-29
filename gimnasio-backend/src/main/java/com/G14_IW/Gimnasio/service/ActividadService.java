package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.Actividad;
import com.G14_IW.Gimnasio.repository.ActividadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActividadService {
    @Autowired
    private ActividadRepository actividadRepository;

    public List<Actividad> getActividades() {
        return actividadRepository.findAll();
    }

    public Actividad getActividad(Long id) {
        return actividadRepository.findById(id).orElse(null);
    }

    public void saveOrUpdate(Actividad actividad) {
        actividadRepository.save(actividad);
    }

    public void deleteById(Long id) {
        actividadRepository.deleteById(id);
    }
}
