package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.Usuario;
import com.G14_IW.Gimnasio.repository.UsuarioRepository;
import com.G14_IW.Gimnasio.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.Map;

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

    public void activarUsuario(Long id) {
        Usuario usuario = usuarioRepository.findById(id).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (usuario.isActivo()) {
            throw new RuntimeException("El usuario ya está activo");
        }

        usuario.setActivo(true);
        usuarioRepository.save(usuario);
    }

    public void desactivarUsuario(Long id) {
        Usuario usuario = usuarioRepository.findById(id).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (!usuario.isActivo()) {
            throw new RuntimeException("El usuario ya está desactivado");
        }

        usuario.setActivo(false);
        usuarioRepository.save(usuario);
    }

    public String getTipo(Long id){
        Usuario usuario = usuarioRepository.findById(id).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return usuario.getTipo();
    }

    public void register(Usuario user) {
        Optional<Usuario> existingUser = usuarioRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new RuntimeException("El correo ya está registrado");
        }

        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            throw new RuntimeException("El correo es un campo obligatorio");
        }

        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            throw new RuntimeException("La contraseña es un campo obligatorio");
        }

        user.setActivo(false);
        usuarioRepository.save(user);
    }



    // Código modificado
    public ResponseEntity<Map<String, String>> login(Usuario user) {
        Optional<Usuario> existingUser = usuarioRepository.findByEmail(user.getEmail());

        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            throw new RuntimeException("El correo es un campo obligatorio");
        }

        if (user.getPassword() == null || user.getPassword().isEmpty()) {
            throw new RuntimeException("La contraseña es un campo obligatorio");
        }

        if (existingUser.isEmpty()) {
            throw new RuntimeException("El correo no está registrado");
        }

        Usuario usuario = existingUser.get();
        if (!usuario.getPassword().equals(user.getPassword())) {
            throw new RuntimeException("Contraseña incorrecta");
        }

        // Generar un token
        String token = JwtUtil.generateToken(user.getEmail());

        // Devolver un JSON con el token
        return ResponseEntity.ok(Map.of("token", token));

        /*
        Q: ¿Deberíamos permitir que un usuario inactivo inicie sesión?
         ¿O que inicien sesión como Usuario esperando la validación?
        if (!usuario.isActivo()) {
            throw new RuntimeException("El usuario no está activo");
        }*/
    }




    public ResponseEntity<String> validarToken(String token) {
        // Quitar el prefijo "Bearer " del token
        if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }

        if (token == null || token.isEmpty()) {
            throw new RuntimeException("Token vacío");
        }

        if (!JwtUtil.validateToken(token)) {
            throw new RuntimeException("Token inválido");
        }

        String email = JwtUtil.getEmailFromToken(token);
        return ResponseEntity.ok("Token válido para el usuario: " + email);
    }

}
