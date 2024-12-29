package com.G14_IW.Gimnasio.repository;

import com.G14_IW.Gimnasio.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
