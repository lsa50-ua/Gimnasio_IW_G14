package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.Reserva;
import com.G14_IW.Gimnasio.model.Socio;
import com.G14_IW.Gimnasio.repository.ReservaRepository;
import com.G14_IW.Gimnasio.repository.SocioRepository;
import com.G14_IW.Gimnasio.model.Actividad;
import com.G14_IW.Gimnasio.repository.ActividadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@Service
public class SocioService {
    @Autowired
    private SocioRepository socioRepository;

    @Autowired
    private ActividadRepository actividadRepository;

    @Autowired
    private ReservaRepository reservaRepository;

    public List<Socio> getSocios() {
        return socioRepository.findAll();
    }

    public Socio getSocio(Long id) {
        return socioRepository.findById(id).orElse(null);
    }

    public void saveOrUpdate(Socio socio) {
        socioRepository.save(socio);
    }

    public void deleteById(Long id) {
        socioRepository.deleteById(id);
    }

    public void recargarSaldo(Long socioId, float cuantia) {
        Socio socio = socioRepository.findById(socioId).orElseThrow(() -> new RuntimeException("Socio no encontrado"));
        socio.setSaldo(socio.getSaldo() + cuantia);
        socioRepository.save(socio);
    }

    public void reservarActividad(LocalDate fecha, LocalTime hora, Long socioId, Long actividadId) {
        Socio socio = socioRepository.findById(socioId).orElseThrow(() -> new RuntimeException("Socio no encontrado"));
        Actividad actividad = actividadRepository.findById(actividadId).orElseThrow(() -> new RuntimeException("Actividad no encontrada"));

        if (socio.getSaldo() < actividad.getPrecio()) {
            throw new RuntimeException("Saldo insuficiente");
        }

        Reserva reserva = new Reserva(fecha, hora, actividad, socio);

        socio.getReservas().add(reserva);
        socio.setSaldo(socio.getSaldo() - actividad.getPrecio());
        reservaRepository.save(reserva);
        socioRepository.save(socio);
    }
}
