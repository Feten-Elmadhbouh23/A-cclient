import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit {
  residenceId!: number;
  apartments: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadApartments();
  }

  loadApartments() {
    // Simuler le chargement des appartements liés à cette résidence
    this.apartments = [
      { apartNum: 101, floorNum: 1, surface: 70, terrace: true, surfaceterrace: 10, category: 'F2' },
      { apartNum: 202, floorNum: 2, surface: 90, terrace: false, surfaceterrace: 0, category: 'F3' }
    ];
  }

  navigateToAddApartment() {
    this.router.navigate(['/add-apartment', this.residenceId]);
  }
}
