package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.TipoActividad;
import com.G14_IW.Gimnasio.model.Usuario;
import com.G14_IW.Gimnasio.repository.TipoActividadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TipoActividadService {
    @Autowired
    private TipoActividadRepository tipoActividadRepository;

    public List<TipoActividad> getTipoActividades() {
        return tipoActividadRepository.findAll();
    }

    public TipoActividad getTipoActividad(Long id) {
        return tipoActividadRepository.findById(id).orElse(null);
    }

    public TipoActividad getTipoActividadByNombre(String nombre) {
        Optional<TipoActividad> existingTipo = tipoActividadRepository.findByTipo(nombre);

        if (!existingTipo.isPresent()) {
            throw new RuntimeException("Tipo de actividad no encontrado");
        }

        return existingTipo.get();

    }

    public void saveOrUpdate(TipoActividad tipoActividad) {
        tipoActividadRepository.save(tipoActividad);
    }

    public void deleteById(Long id) {
        tipoActividadRepository.deleteById(id);
    }
}
