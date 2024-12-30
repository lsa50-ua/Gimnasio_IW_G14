package com.G14_IW.Gimnasio.controller;

import com.G14_IW.Gimnasio.model.TipoActividad;
import com.G14_IW.Gimnasio.service.TipoActividadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/tipoActividades")
@CrossOrigin("http://localhost:4200/")
public class TipoActividadController {
    @Autowired
    private TipoActividadService tipoActividadService;

    @GetMapping
    public List<TipoActividad> getAll(){
        return tipoActividadService.getTipoActividades();
    }

    @GetMapping("/id/{tipoActividadId}")
    public TipoActividad getById(@PathVariable("tipoActividadId") Long tipoActividadId){
        return tipoActividadService.getTipoActividad(tipoActividadId);
    }

    @GetMapping("/nombre/{nombre}")
    public TipoActividad getByNombre(@PathVariable("nombre") String nombre){
        return tipoActividadService.getTipoActividadByNombre(nombre);
    }

    @PostMapping
    public void saveUpdate(@RequestBody TipoActividad tipoActividad){
        tipoActividadService.saveOrUpdate(tipoActividad);
    }

    @DeleteMapping("{tipoActividadId}")
    public void saveUpdate(@PathVariable("tipoActividadId") Long tipoActividadId) {
        tipoActividadService.deleteById(tipoActividadId);
    }
}
