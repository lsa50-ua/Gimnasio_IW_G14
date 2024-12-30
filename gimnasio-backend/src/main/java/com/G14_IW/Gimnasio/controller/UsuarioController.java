package com.G14_IW.Gimnasio.controller;

import com.G14_IW.Gimnasio.model.Usuario;
import com.G14_IW.Gimnasio.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/usuarios")
@CrossOrigin("http://localhost:4200/")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> getAll(){
        return usuarioService.getUsers();
    }

    @GetMapping("/{userId}")
    public Optional<Usuario> getById(@PathVariable("userId") Long userId){
        return usuarioService.getUser(userId);
    }

    @PostMapping
    public void saveUpdate(@RequestBody Usuario user){
        usuarioService.saveOrUpdate(user);
    }

    @DeleteMapping("{userId}")
    public void saveUpdate(@PathVariable("userId") Long userId){
        usuarioService.deleteById(userId);
    }

    @GetMapping("/tipo/{userId}")
    public String getTipo(@PathVariable("userId") Long userId){
        return usuarioService.getTipo(userId);
    }

    @PostMapping("/register")
    public void register(@RequestBody Usuario user) {
        usuarioService.register(user);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Usuario user) {
        return usuarioService.login(user);
    }

    @GetMapping("/validarToken")
    public void validarToken(@RequestHeader("token") String token) {
        usuarioService.validarToken(token);
    }
}
