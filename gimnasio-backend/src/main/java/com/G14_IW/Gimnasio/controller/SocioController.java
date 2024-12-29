package com.G14_IW.Gimnasio.controller;

import com.G14_IW.Gimnasio.model.Socio;
import com.G14_IW.Gimnasio.service.SocioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/socios")
@CrossOrigin("http://localhost:4200/")
public class SocioController {
    @Autowired
    private SocioService socioService;

    @GetMapping
    public List<Socio> getAll(){
        return socioService.getSocios();
    }

    @GetMapping("/{socioId}")
    public Socio getById(@PathVariable("socioId") Long socioId){
        return socioService.getSocio(socioId);
    }

    @PostMapping
    public void saveUpdate(@RequestBody Socio socio){
        socioService.saveOrUpdate(socio);
    }

    @DeleteMapping("{socioId}")
    public void saveUpdate(@PathVariable("socioId") Long socioId) {
        socioService.deleteById(socioId);
    }
}
