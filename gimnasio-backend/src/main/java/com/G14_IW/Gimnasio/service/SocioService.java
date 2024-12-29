package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.Socio;
import com.G14_IW.Gimnasio.repository.SocioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SocioService {
    @Autowired
    private SocioRepository socioRepository;

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
}
