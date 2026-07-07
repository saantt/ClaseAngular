import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  singUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm() {
    this.singUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: [
        null,
        [Validators.required, Validators.min(18), Validators.max(99)],
      ],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['Bogotá', Validators.required],
      }),
    });
  }

  saveData() {
    if (this.singUpForm.valid) {
      console.log('Datos listos para enviar:', this.singUpForm.value);
    } else {
      // Truco: Marcar todos los campos como "tocados" para disparar los errores visuales
      this.singUpForm.markAllAsTouched();
    }
  }

  get f() {
    return this.singUpForm.controls;
  }
}
