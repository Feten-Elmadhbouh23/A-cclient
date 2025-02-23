import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.apartForm = this.fb.group({
      apartNum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      floorNum: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      surface: ['', [Validators.required, Validators.min(10)]],
      terrace: [false],
      surfaceterrace: [{ value: '', disabled: true }, [Validators.min(5)]],
      category: ['', Validators.required],
      ResidenceId: ['', Validators.required]
    });

    // Activer/Désactiver SurfaceTerrace selon Terrace
    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      const surfaceTerraceControl = this.apartForm.get('surfaceterrace');
      if (value) {
        surfaceTerraceControl?.enable();
        surfaceTerraceControl?.setValidators([Validators.required, Validators.min(5)]);
      } else {
        surfaceTerraceControl?.disable();
        surfaceTerraceControl?.clearValidators();
        surfaceTerraceControl?.setValue(null);
      }
      surfaceTerraceControl?.updateValueAndValidity();
    });
  }

  saveApartment(): void {
    if (this.apartForm.valid) {
      console.log('Nouvel appartement ajouté :', this.apartForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
