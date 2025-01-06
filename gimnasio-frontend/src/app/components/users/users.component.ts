import { Component} from '@angular/core';
import { UserService } from '../../services/user.service'; // Importa el servicio
import { User } from '../../models/user'; // Importa el modelo
import { WebmasterService } from '../../services/webmaster.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] = [];
  isLoading = false;
  currentWebMasterId: number | null = null;

  constructor(private userService: UserService, private webMasterService: WebmasterService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  onStatusChange(user: User, event: Event): void {
    this.currentWebMasterId = this.authService.getAuthenticatedUserId(this.users);
    if (this.currentWebMasterId != null) {
      const checkbox = event.target as HTMLInputElement;
      this.isLoading = true;
      
      const operation = checkbox.checked ? 
        this.webMasterService.activarSocio(this.currentWebMasterId, user.id) :
        this.webMasterService.desactivarSocio(this.currentWebMasterId, user.id);

      operation.subscribe({
        next: () => {
          // Update the local user status
          user.activo = checkbox.checked;
        },
        error: (error) => {
          // Revert checkbox state on error
          checkbox.checked = !checkbox.checked;
          console.error('Failed to update user status:', error);
          // Show error message to user
          alert('Failed to update user status. Please try again.');
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }

}
