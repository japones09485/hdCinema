import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ContactComponent } from "./contact.component";
import { ServicesComponent } from "./services.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  api = inject(ApiService);

  ngOnInit(): void {
    console.log(this.api.urlApi);
  }

}
