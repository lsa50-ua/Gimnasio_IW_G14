package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.Monitor;
import com.G14_IW.Gimnasio.model.Usuario;
import com.G14_IW.Gimnasio.repository.MonitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MonitorService {
    @Autowired
    private MonitorRepository monitorRepository;

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
}
