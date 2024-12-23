package PowerHouse.iw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import PowerHouse.iw.model.Usuario;
import PowerHouse.iw.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpSession;

@Controller
public class LoginController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @PostMapping("/login")
    public String login(@RequestParam String email, @RequestParam String password, Model model, HttpSession session) {
        // Lógica de autenticación
        boolean isAuthenticated = usuarioService.authenticate(email, password);;
        if (isAuthenticated) {
            session.setAttribute("email", email);
            return "redirect:/home";
        } else {
            model.addAttribute("error", "Invalid email or password");
            return "login";
        }
    }

    @GetMapping("/register")
    public String showRegistrationForm() {
        return "register";
    }

    @PostMapping("/register")
    public String register(@RequestParam String email, @RequestParam String password, Model model) {
        if (usuarioService.findByEmail(email) != null) {
            model.addAttribute("error", "Email already exists");
            return "register";
        }

        Usuario newUser = new Usuario();
        newUser.setEmail(email);
        newUser.setPassword(password); // Consider hashing the password before saving
        usuarioService.save(newUser);

        return "redirect:/login";
    }
}