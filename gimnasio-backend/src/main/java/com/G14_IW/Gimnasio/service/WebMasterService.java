package com.G14_IW.Gimnasio.service;

import com.G14_IW.Gimnasio.model.WebMaster;
import com.G14_IW.Gimnasio.repository.WebMasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WebMasterService {
    @Autowired
    private WebMasterRepository webMasterRepository;

    public List<WebMaster> getWebMasters(){
        return webMasterRepository.findAll();
    }

    public WebMaster getWebMaster(Long webMasterId) {
        return webMasterRepository.findById(webMasterId).orElse(null);
    }

    public void saveOrUpdate(WebMaster webMaster){
        webMasterRepository.save(webMaster);
    }

    public void deleteById(Long webMasterId){
        webMasterRepository.deleteById(webMasterId);
    }
}
