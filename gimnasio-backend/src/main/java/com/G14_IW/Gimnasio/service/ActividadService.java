package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.Actividad;
import com.G14_IW.Gimnasio.model.Monitor;
import com.G14_IW.Gimnasio.model.TipoActividad;
import com.G14_IW.Gimnasio.repository.ActividadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActividadService {
    @Autowired
    private ActividadRepository actividadRepository;

    @Autowired
    private TipoActividadService tipoActividadService;

    @Autowired
    private MonitorService monitorService;

    public List<Actividad> getActividades() {
        return actividadRepository.findAll();
    }

    public Actividad getActividad(Long id) {
        return actividadRepository.findById(id).orElse(null);
    }

    public void saveOrUpdate(Actividad actividad) {
        if (actividad.getNombre() == null || actividad.getNombre().isEmpty()) {
            throw new RuntimeException("El nombre de la actividad no puede estar vacío");
        }

        if (actividad.getTipoActividad() == null) {
            throw new RuntimeException("La actividad debe tener un tipo de actividad asociado");
        } else {
            TipoActividad tipoActividad = tipoActividadService.getTipoActividad(actividad.getTipoActividad().getId());

            if (tipoActividad == null) {
                throw new RuntimeException("El tipo de actividad asociado no existe");
            }

            actividad.setTipoActividad(tipoActividad);
        }

        if (actividad.getMonitor() == null) {
            throw new RuntimeException("La actividad debe tener un monitor asociado");
        } else {
            Monitor monitor = monitorService.getMonitor(actividad.getMonitor().getId());

            if (monitor == null) {
                throw new RuntimeException("El monitor asociado no existe");
            }

            actividad.setMonitor(monitor);
        }


        actividadRepository.save(actividad);
    }

    public void deleteById(Long id) {
        actividadRepository.deleteById(id);
    }
}
