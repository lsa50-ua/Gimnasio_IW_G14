package com.G14_IW.Gimnasio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.G14_IW.Gimnasio.model.Reserva;
import com.G14_IW.Gimnasio.repository.ReservaRepository;

import java.util.List;

@Service
public class ReservaService {
    @Autowired
    private ReservaRepository reservaRepository;

    public List<Reserva> getReservas() {
        return reservaRepository.findAll();
    }

    public Reserva getReserva(Long id) {
        return reservaRepository.findById(id).orElse(null);
    }

    public void saveOrUpdate(Reserva reserva) {
        reservaRepository.save(reserva);
    }

    public void deleteById(Long id) {
        reservaRepository.deleteById(id);
    }
}
