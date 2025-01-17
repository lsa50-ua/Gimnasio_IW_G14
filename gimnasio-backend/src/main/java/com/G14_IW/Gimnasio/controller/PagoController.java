package com.G14_IW.Gimnasio.controller;

import com.G14_IW.Gimnasio.model.Pago;
import com.G14_IW.Gimnasio.service.PagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/pagos")
@CrossOrigin("http://localhost:4200/")
public class PagoController {
    @Autowired
    private PagoService pagoService;

    @GetMapping
    public List<Pago> getAll(){
        return pagoService.getPagos();
    }

    @GetMapping("/{pagoId}")
    public Pago getById(@PathVariable("pagoId") Long pagoId){
        return pagoService.getPago(pagoId);
    }

    @PostMapping
    public void saveUpdate(@RequestBody Pago pago){
        pagoService.saveOrUpdate(pago);
    }

    @DeleteMapping("/{pagoId}")
    public void saveUpdate(@PathVariable("pagoId") Long pagoId){
        pagoService.deleteById(pagoId);
    }
}
