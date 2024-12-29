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
}
