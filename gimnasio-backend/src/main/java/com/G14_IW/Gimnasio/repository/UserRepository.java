package com.G14_IW.Gimnasio.repository;

import com.G14_IW.Gimnasio.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
