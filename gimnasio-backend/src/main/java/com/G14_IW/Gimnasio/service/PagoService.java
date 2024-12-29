package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.Pago;
import com.G14_IW.Gimnasio.repository.PagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PagoService {
    @Autowired
    private PagoRepository pagoRepository;

    public List<Pago> getPagos() {
        return pagoRepository.findAll();
    }

    public Pago getPago(Long id) {
        return pagoRepository.findById(id).orElse(null);
    }

    public void saveOrUpdate(Pago pago) {
        pagoRepository.save(pago);
    }

    public void deleteById(Long id) {
        pagoRepository.deleteById(id);
    }
}
