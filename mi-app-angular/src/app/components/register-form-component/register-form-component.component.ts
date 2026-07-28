import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register-form-component',
  templateUrl: './register-form-component.component.html',
  styleUrls: ['./register-form-component.component.css']
})
export class RegisterFormComponentComponent implements OnInit {


  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['']
      }),
      phoneNumbers: this.formBuilder.array([
      ])
    });
  }
  onSubmit(): void {
    console.log("FormSubmit", this.registerForm.value)
  }
  get phones(): FormArray {
    return this.registerForm.get('phoneNumbers') as FormArray;
  }
  createPhone(): FormGroup {
    return this.formBuilder.group({ number: ['', Validators.required] })

  }
  addPhone(): void {
    this.phones.push(this.createPhone());
  }
  deletePhone(index: number) {
    this.phones.removeAt(index);

  }

}
