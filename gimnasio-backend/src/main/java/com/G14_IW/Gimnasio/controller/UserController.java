package com.G14_IW.Gimnasio.controller;

import com.G14_IW.Gimnasio.model.User;
import com.G14_IW.Gimnasio.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/users")
@CrossOrigin("http://localhost:4200/")
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping
    public List<User> getAll(){
        return userService.getUsers();
    }

    @GetMapping("/{userId}")
    public Optional<User> getById(@PathVariable("userId") Long userId){
        return userService.getUser(userId);
    }

    @PostMapping
    public void saveUpdate(@RequestBody User user){
        userService.saveOrUpdate(user);
    }

    @DeleteMapping("{userId}")
    public void saveUpdate(@PathVariable("userId") Long userId){
        userService.deleteById(userId);
    }


}
