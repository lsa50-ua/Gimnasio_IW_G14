package PowerHouse.iw.repository;

import PowerHouse.iw.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    // Métodos adicionales si se necesitan
}
