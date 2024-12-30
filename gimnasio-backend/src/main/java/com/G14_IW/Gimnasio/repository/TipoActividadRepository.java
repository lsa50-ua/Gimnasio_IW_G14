package com.G14_IW.Gimnasio.repository;

import com.G14_IW.Gimnasio.model.TipoActividad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TipoActividadRepository extends JpaRepository<TipoActividad, Long> {
    Optional<TipoActividad>  findByTipo(String tipo);
}
