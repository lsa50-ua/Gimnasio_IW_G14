package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.Pago;
import com.G14_IW.Gimnasio.model.Usuario;
import com.G14_IW.Gimnasio.repository.PagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PagoService {
    @Autowired
    private PagoRepository pagoRepository;

    @Autowired
    private UsuarioService usuarioService;

    public List<Pago> getPagos() {
        return pagoRepository.findAll();
    }

    public Pago getPago(Long id) {
        return pagoRepository.findById(id).orElse(null);
    }

    public void saveOrUpdate(Pago pago) {
        if (pago.getUsuario() == null) {
            throw new RuntimeException("El pago debe tener un usuario asociado");
        } else {
            Usuario usuario = usuarioService.getUsuario(pago.getUsuario().getId());

            if (usuario == null) {
                throw new RuntimeException("El usuario asociado no existe");
            }

            pago.setUsuario(usuario);
        }

        pagoRepository.save(pago);
    }

    public void deleteById(Long id) {
        pagoRepository.deleteById(id);
    }
}
