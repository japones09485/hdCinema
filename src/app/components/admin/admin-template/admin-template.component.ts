import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../categories/categories.component';
import { ProductsComponent } from '../products/products.component';
import { OffertsComponent } from '../offerts/offerts.component';
import { ServicesComponent } from '../services/services.component';
import { GaleryComponent } from '../galery/galery.component';

@Component({
  selector: 'app-admin-template',
  standalone: true,
  imports: [
    CommonModule,
    CategoriesComponent,
    ProductsComponent,
    OffertsComponent,
    ServicesComponent,
    GaleryComponent
  ],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {
  selectedComponent: string = 'dashboard'; // Componente por defecto

  selectComponent(component: string, event: Event) {
    event.preventDefault();
    this.selectedComponent = component;
  }
}
