import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from 'src/app/core/Services/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  residenceForm: FormGroup;
  id: number | null = null;
  residence: any = {};

  constructor(
    private fb: FormBuilder,
    private residenceService: ResidenceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.residenceForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('(https?://.*\.(?:png|jpg|jpeg))')]],
      status: ['Disponible', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.residenceService.getResidenceById(this.id).subscribe((data) => {
        this.residence = data;
        this.residenceForm.patchValue(this.residence);
      });
    }
  }

  addResidence() {
    if (this.residenceForm.valid) {
      if (this.id) {
        this.residenceService.updateResidence(this.id, this.residenceForm.value).subscribe(() => {
          this.router.navigate(['/residences']);
        });
      } else {
        this.residenceService.addResidence(this.residenceForm.value).subscribe(() => {
          this.router.navigate(['/residences']);
        });
      }
    }
  }
}
