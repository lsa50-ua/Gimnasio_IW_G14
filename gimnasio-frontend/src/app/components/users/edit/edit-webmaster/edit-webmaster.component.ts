import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WebmasterService } from '../../../../services/webmaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-webmaster',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-webmaster.component.html',
  styleUrl: './edit-webmaster.component.css'
})
export class EditWebmasterComponent {
  editWebmasterForm: FormGroup;

  constructor(private fb: FormBuilder, private webmasterService: WebmasterService, private router: Router) {
    const id = Number(this.router.url.split('/').pop());

    this.editWebmasterForm = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$')]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      ciudad: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      codigoPostal: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      
    })

    this.webmasterService.getById(id).subscribe((webmaster) => {
      this.editWebmasterForm.patchValue(webmaster);
    });
  }
  editWebmaster() {
  }
}
