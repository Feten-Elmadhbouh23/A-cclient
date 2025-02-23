import { Apartment } from 'src/app/core/models/apartment.model';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/Services/common.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  apartments: Apartment[] = [
    { apartNum: 101, floorNum: 1, surface: 60, terrace: true, surfaceterrace: 10, category: 'T2', ResidenceId: 1 },
    { apartNum: 202, floorNum: 2, surface: 75, terrace: false, surfaceterrace: 0, category: 'T3', ResidenceId: 2 },
  ];

  countSameSurface!: number;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    // Correction ici : remplacer `listApartments` par `apartments`
    this.countSameSurface = this.commonService.getSameValueOf(this.apartments, 'surface', 50);
    console.log('Nombre d\'appartements avec la même surface :', this.countSameSurface);
  }

  deleteApartment(index: number) {
    this.apartments.splice(index, 1);
  }
}
