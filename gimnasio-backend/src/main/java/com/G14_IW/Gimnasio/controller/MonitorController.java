package com.G14_IW.Gimnasio.controller;

import com.G14_IW.Gimnasio.model.Monitor;
import com.G14_IW.Gimnasio.service.MonitorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/monitores")
@CrossOrigin("http://localhost:4200/")
public class MonitorController {
    @Autowired
    private MonitorService monitorService;

    @GetMapping
    public List<Monitor> getAll(){
        return monitorService.getMonitores();
    }

    @GetMapping("/{monitorId}")
    public Monitor getById(@PathVariable("monitorId") Long monitorId){
        return monitorService.getMonitor(monitorId);
    }

    @PostMapping
    public void saveUpdate(@RequestBody Monitor monitor){
        monitorService.saveOrUpdate(monitor);
    }

    @DeleteMapping("{monitorId}")
    public void saveUpdate(@PathVariable("monitorId") Long monitorId) {
        monitorService.deleteById(monitorId);
    }

    @PutMapping("{monitorId}/addMonitorActividad/{usuarioId}")
    public void addMonitorActividad(@PathVariable("monitorId") Long monitorId, @PathVariable("usuarioId") Long usuarioId) {
        monitorService.addMonitorActividad(monitorId, usuarioId);
    }

    @PutMapping("{monitorId}/removeMonitorActividad/{usuarioId}")
    public void removeMonitorActividad(@PathVariable("monitorId") Long monitorId, @PathVariable("usuarioId") Long usuarioId) {
        monitorService.removeMonitorActividad(monitorId, usuarioId);
    }
}
