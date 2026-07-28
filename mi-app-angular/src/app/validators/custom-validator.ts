import { AbstractControl, ValidationErrors } from "@angular/forms";

export function withoutSpaces(control: AbstractControl): ValidationErrors | null {
    const val = (control.value || '') as string;
    const spaces = val.length > 0 && val.trim().length === 0;


    return spaces ? { onlySpaces: true } : null;

}
