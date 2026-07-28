import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { withoutSpaces } from 'src/app/validators/custom-validator';

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
      password: ['', [Validators.required, Validators.minLength(6), withoutSpaces]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postCode: ['']
      }),
      phoneNumbers: this.formBuilder.array([
      ]),
      kindUser: ['natural', Validators.required],
      lastName: [''],
      socialReason: ['']
    });

    this.registerForm.get('kindUser')!.valueChanges.subscribe(tipo => {
      this.updateValidatorsKindUser(tipo);
    });
    this.updateValidatorsKindUser(this.registerForm.get('kindUser')!.value);


  }




  onSubmit(): void {
    console.log("FormSubmit", this.registerForm.value)
  }
  get phones(): FormArray {
    return this.registerForm.get('phoneNumbers') as FormArray;
  }
  get password(): AbstractControl | null {
    return this.registerForm.get('password');
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
  private updateValidatorsKindUser(kind: string): void {
    const lastName = this.registerForm.get('lastName');
    const socialReason = this.registerForm.get('socialReason');

    if (kind === 'company') {
      socialReason!.setValidators([Validators.required]);
      lastName!.clearValidators();
    } else {
      lastName!.setValidators([Validators.required]);
      socialReason!.clearValidators();
    }

    // Sin esto, Angular no vuelve a evaluar la validez del control.
    lastName!.updateValueAndValidity();
    socialReason!.updateValueAndValidity();

  }

}
