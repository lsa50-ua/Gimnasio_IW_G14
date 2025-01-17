package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.Actividad;
import com.G14_IW.Gimnasio.model.Monitor;
import com.G14_IW.Gimnasio.repository.ActividadRepository;
import com.G14_IW.Gimnasio.repository.MonitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MonitorService {
    @Autowired
    private MonitorRepository monitorRepository;

    @Autowired
    private ActividadRepository actividadRepository;

    public List<Monitor> getMonitores() {
        return monitorRepository.findAll();
    }

    public Monitor getMonitor(Long id) {
        return monitorRepository.findById(id).orElse(null);
    }

    public void saveOrUpdate(Monitor monitor) {
        monitorRepository.save(monitor);
    }

    public void deleteById(Long id) {
        monitorRepository.deleteById(id);
    }

    public void addMonitorActividad(Long monitorId, Long actividadId) {
        Monitor monitor = monitorRepository.findById(monitorId).orElseThrow(() -> new RuntimeException("Monitor no encontrado"));
        Actividad actividad = actividadRepository.findById(actividadId).orElseThrow(() -> new RuntimeException("Actividad no encontrada"));

        monitor.getActividades().add(actividad);
        actividad.setMonitor(monitor);
        actividadRepository.save(actividad);
        monitorRepository.save(monitor);
    }

    public void removeMonitorActividad(Long monitorId, Long actividadId) {
        Monitor monitor = monitorRepository.findById(monitorId).orElseThrow(() -> new RuntimeException("Monitor no encontrado"));
        Actividad actividad = actividadRepository.findById(actividadId).orElseThrow(() -> new RuntimeException("Actividad no encontrada"));

        monitor.getActividades().remove(actividad);
        actividad.setMonitor(null);
        monitorRepository.save(monitor);
        actividadRepository.save(actividad);
    }
}
