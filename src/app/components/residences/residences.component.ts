import { Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/Services/common.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  searchText: string = '';
  listResidences: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "./assets/bj1.jfif", status: "Disponible" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "./assets/ez.jfif", status: "Disponible" },
    { id: 3, name: "El Arij", address: "Rades", image: "./assets/r.jfif", status: "Vendu" },
    { id: 4, name: "El Anber", address: "inconnu", image: "./assets/bj1.jfif", status: "En Construction" }
  ];

  favoriteResidences: Residence[] = [];

  constructor(private router: Router , private commonService: CommonService) {}

  showLocation(residence: Residence): void {
    alert(residence.address === "inconnu" ? "L'adresse de cette résidence est inconnue" : `Adresse : ${residence.address}`);
  }

  addToFavorites(residence: Residence): void {
    if (!this.favoriteResidences.includes(residence)) {
      this.favoriteResidences.push(residence);
    }
  }

  viewDetails(id: number): void {
    this.router.navigate(['/residence-details', id]);
  }
  countSameAddress!: number;



  ngOnInit(): void {
    this.countSameAddress = this.commonService.getSameValueOf(this.listResidences, 'address', 'Adresse 1');
    console.log('Nombre de résidences avec la même adresse :', this.countSameAddress);
  }
}
