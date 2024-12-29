package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.Usuario;
import com.G14_IW.Gimnasio.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    UsuarioRepository usuarioRepository;

    public List<Usuario> getUsers(){
        return usuarioRepository.findAll();
    }

    public Optional<Usuario> getUser(Long id){
        return usuarioRepository.findById(id);
    }

    public void saveOrUpdate(Usuario user){
        usuarioRepository.save(user);
    }

    public void deleteById(Long id){
        usuarioRepository.deleteById(id);
    }
}
