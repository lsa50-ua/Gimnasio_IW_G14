package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.Actividad;
import com.G14_IW.Gimnasio.model.Socio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.G14_IW.Gimnasio.model.Reserva;
import com.G14_IW.Gimnasio.repository.ReservaRepository;

import java.util.List;

@Service
public class ReservaService {
    @Autowired
    private ReservaRepository reservaRepository;

    @Autowired
    private ActividadService actividadService;

    @Autowired
    private SocioService socioService;

    public List<Reserva> getReservas() {
        return reservaRepository.findAll();
    }

    public Reserva getReserva(Long id) {
        return reservaRepository.findById(id).orElse(null);
    }

    public void saveOrUpdate(Reserva reserva) {
        if (reserva.getActividad() == null) {
            throw new RuntimeException("La reserva debe tener una fecha asociada");
        } else {
            Actividad actividad = actividadService.getActividad(reserva.getActividad().getId());

            if (actividad == null) {
                throw new RuntimeException("La actividad asociada no existe");
            }

            reserva.setActividad(actividad);
        }

        if (reserva.getSocio() == null) {
            throw new RuntimeException("La reserva debe tener un usuario asociado");
        } else {
            Socio socio = socioService.getSocio(reserva.getSocio().getId());

            if (socio == null) {
                throw new RuntimeException("El usuario asociado no existe");
            }

            reserva.setSocio(socio);
        }

        reservaRepository.save(reserva);
    }

    public void deleteById(Long id) {
        reservaRepository.deleteById(id);
    }
}
