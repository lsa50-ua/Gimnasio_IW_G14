
package PowerHouse.iw.service;

import PowerHouse.iw.model.Usuario;
import PowerHouse.iw.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario findByEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    public void save(Usuario usuario) {
        usuarioRepository.save(usuario);
    }

    public boolean authenticate(String email, String password) {
        Usuario usuario = findByEmail(email);
        return usuario != null && usuario.getPassword().equals(password);
    }
}