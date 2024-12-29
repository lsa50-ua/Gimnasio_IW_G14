package com.G14_IW.Gimnasio.controller;

import com.G14_IW.Gimnasio.model.Reserva;
import com.G14_IW.Gimnasio.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/reservas")
@CrossOrigin("http://localhost:4200/")
public class ReservaController {
    @Autowired
    private ReservaService reservaService;

    @GetMapping
    public List<Reserva> getAll(){
        return reservaService.getReservas();
    }

    @GetMapping("/{reservaId}")
    public Reserva getById(@PathVariable("reservaId") Long reservaId){
        return reservaService.getReserva(reservaId);
    }

    @PostMapping
    public void saveUpdate(@RequestBody Reserva reserva){
        reservaService.saveOrUpdate(reserva);
    }

    @DeleteMapping("{reservaId}")
    public void saveUpdate(@PathVariable("reservaId") Long reservaId){
        reservaService.deleteById(reservaId);
    }
}
