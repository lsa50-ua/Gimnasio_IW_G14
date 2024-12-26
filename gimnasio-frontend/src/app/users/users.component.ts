import { Component} from '@angular/core';
import { UserService } from '../services/user.service'; // Importa el servicio
import { User } from '../models/user'; // Importa el modelo

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.users);
  }

  getAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users;
    });
  }
}
