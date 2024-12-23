package PowerHouse.iw;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "PowerHouse.iw")
@EntityScan(basePackages = "PowerHouse.iw.model")
@EnableJpaRepositories(basePackages = "PowerHouse.iw.repository")
public class PowerHouseApplication {
	public static void main(String[] args) {
		SpringApplication.run(PowerHouseApplication.class, args);
	}
}