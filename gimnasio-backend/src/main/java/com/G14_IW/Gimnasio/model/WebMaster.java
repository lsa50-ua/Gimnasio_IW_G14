package com.G14_IW.Gimnasio.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
@DiscriminatorValue("WebMaster")
public class WebMaster extends Usuario {
    public WebMaster(String email, String password) {
        super(email, password);
    }

    public WebMaster() {
    }
}
