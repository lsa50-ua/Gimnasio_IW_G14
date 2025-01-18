package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.Actividad;
import com.G14_IW.Gimnasio.model.Reserva;
import com.G14_IW.Gimnasio.model.Socio;
import com.G14_IW.Gimnasio.repository.ReservaRepository;
import com.G14_IW.Gimnasio.repository.SocioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ReservaManagerService {
    @Autowired
    private SocioRepository socioRepository;

    @Autowired
    private ReservaRepository reservaRepository;

    @Transactional
    public void cancelarReserva(Long socioId, Long reservaId) {
        Socio socio = socioRepository.findById(socioId).orElseThrow(() -> new RuntimeException("Socio no encontrado"));
        Reserva reserva = reservaRepository.findById(reservaId).orElseThrow(() -> new RuntimeException("Reserva no encontrada"));
        Actividad actividad = reserva.getActividad();

        if (reserva.getSocio() == null || reserva.getSocio().getId() != socioId) {
            throw new RuntimeException("La reserva no pertenece al socio");
        }

        reservaRepository.deleteById(reservaId);
        reservaRepository.flush();

        socio.setSaldo(socio.getSaldo() + actividad.getPrecio());
        socioRepository.save(socio);
    }
}
