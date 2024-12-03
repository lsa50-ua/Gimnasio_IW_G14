package PowerHouse.iw.repository;

import PowerHouse.iw.model.Pago;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PagoRepository extends JpaRepository<Pago, Long> {
    // Métodos adicionales si se necesitan
}
