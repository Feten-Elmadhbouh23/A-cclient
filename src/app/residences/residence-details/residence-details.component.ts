import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';  // Assurez-vous que le modèle 'Residence' existe

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residence!: Residence; // Déclarer la résidence
  currentId: number | undefined;
  residences: Residence[] = [
    { id: 1, name: 'Résidence A', address: '123 Rue ABC', image: './assets/bj1.jfif', status: 'Available' },
    { id: 2, name: 'Résidence B', address: '456 Rue DEF', image: './assets/bj1.jfif', status: 'Sold' },
    { id: 3, name: 'Résidence C', address: '789 Rue GHI', image: './assets/bj1.jfif', status: 'Available' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Récupérer l'ID de la résidence depuis l'URL
    this.route.paramMap.subscribe(params => {
      this.currentId = +params.get('id')!;
      this.getResidenceDetails(this.currentId);
    });
  }

  // Méthode pour afficher les détails de la résidence
  getResidenceDetails(id: number): void {
    // Simuler la récupération de données à partir d'un tableau local
    this.residence = this.residences.find(r => r.id === id)!;
    if (!this.residence) {
      // Si la résidence n'est pas trouvée, rediriger vers la page NotFound
      this.router.navigate(['/not-found']);
    }
  }

  // Méthode pour naviguer vers la résidence suivante
  nextResidence(): void {
    if (this.currentId !== undefined) {
      const nextId = this.currentId + 1;
      this.router.navigate(['/residence-details', nextId]);
    }
  }

  // Méthode pour rediriger vers la page d'ajout d'une nouvelle résidence
  addResidence(): void {
    this.router.navigate(['/add-residence']);
  }

  // Méthode pour rediriger vers la page de mise à jour d'une résidence
  updateResidence(): void {
    if (this.currentId !== undefined) {
      this.router.navigate(['/update-residence', this.currentId]);
    }
  }
}
