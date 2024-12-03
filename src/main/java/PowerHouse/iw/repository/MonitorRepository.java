package PowerHouse.iw.repository;

import PowerHouse.iw.model.Monitor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MonitorRepository extends JpaRepository<Monitor, Long> {
    // Métodos adicionales si se necesitan
}
