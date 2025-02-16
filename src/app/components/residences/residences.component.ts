import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';


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

  showLocation(residence: Residence) {
    if (residence.address === "inconnu") {
      alert("L'adresse de cette résidence est inconnue");
    } else {
      alert(`Adresse : ${residence.address}`);
    }
  }

  favoriteResidences: Residence[] = [];

  addToFavorites(residence: Residence) {
    if (!this.favoriteResidences.includes(residence)) {
      this.favoriteResidences.push(residence);
    }
  }
  constructor(private router: Router) {}

  viewDetails(id: string): void {
    this.router.navigate(['/residence-details', id]);
  }


}

