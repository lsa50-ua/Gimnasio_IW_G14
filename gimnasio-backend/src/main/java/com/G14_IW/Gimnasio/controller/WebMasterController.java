package com.G14_IW.Gimnasio.controller;

import com.G14_IW.Gimnasio.model.WebMaster;
import com.G14_IW.Gimnasio.service.WebMasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/webmasters")
@CrossOrigin("http://localhost:4200/")
public class WebMasterController {
    @Autowired
    private WebMasterService webMasterService;

    @GetMapping
    public List<WebMaster> getAll(){
        return webMasterService.getWebMasters();
    }

    @GetMapping("/{webMasterId}")
    public WebMaster getById(@PathVariable("webMasterId") Long webMasterId){
        return webMasterService.getWebMaster(webMasterId);
    }

    @PostMapping
    public void saveUpdate(@RequestBody WebMaster webMaster){
        webMasterService.saveOrUpdate(webMaster);
    }

    @DeleteMapping("{webMasterId}")
    public void saveUpdate(@PathVariable("webMasterId") Long webMasterId) {
        webMasterService.deleteById(webMasterId);
    }

    @PutMapping("{webMasterId}/activarSocio/{usuarioId}")
    public void activarSocio(@PathVariable("webMasterId") Long webMasterId, @PathVariable("usuarioId") Long usuarioId) {
        webMasterService.activarSocio(webMasterId, usuarioId);
    }

    @PutMapping("{webMasterId}/desactivarSocio/{usuarioId}")
    public void desactivarSocio(@PathVariable("webMasterId") Long webMasterId, @PathVariable("usuarioId") Long usuarioId) {
        webMasterService.desactivarSocio(webMasterId, usuarioId);
    }
}
