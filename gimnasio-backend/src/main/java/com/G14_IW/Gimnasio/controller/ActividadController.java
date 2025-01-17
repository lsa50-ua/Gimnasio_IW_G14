package com.G14_IW.Gimnasio.controller;

import com.G14_IW.Gimnasio.model.Actividad;
import com.G14_IW.Gimnasio.service.ActividadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/actividades")
@CrossOrigin("http://localhost:4200/")
public class ActividadController {
    @Autowired
    private ActividadService actividadService;

    @GetMapping
    public List<Actividad> getAll(){
        return actividadService.getActividades();
    }

    @GetMapping("/{actividadId}")
    public Actividad getById(@PathVariable("actividadId") Long actividadId){
        return actividadService.getActividad(actividadId);
    }

    @PostMapping
    public void saveUpdate(@RequestBody Actividad actividad){
        actividadService.saveOrUpdate(actividad);
    }

    @DeleteMapping("{actividadId}")
    public void saveUpdate(@PathVariable("actividadId") Long actividadId){
        actividadService.deleteById(actividadId);
    }
}
