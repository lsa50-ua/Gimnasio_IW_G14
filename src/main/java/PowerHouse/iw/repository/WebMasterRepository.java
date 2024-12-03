package PowerHouse.iw.repository;

import PowerHouse.iw.model.WebMaster;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WebMasterRepository extends JpaRepository<WebMaster, Long> {
    // Métodos adicionales si se necesitan
}