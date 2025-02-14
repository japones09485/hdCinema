import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-offerts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './offerts.component.html',
  styleUrl: './offerts.component.css'
})
export class OffertsComponent {
  isCreating: boolean = false;
  isEditing: boolean = false;
  selectedOffert: any = null;
  showForm: boolean = false;
  OffertsForm: FormGroup;

  offerts = [
    {
      id: 1,
      name: "Alquiler camaras ws2",
      descripcion: "Cámaras profesionales de alta resolución oferta enero",
      img1: "",
      img2: "",
      state: 1,
      createdAt: new Date("2024-02-13T10:00:00"),
      updatedAt: new Date("2024-02-13T12:00:00")
    },
    {
      id: 2,
      name: "Alquiler camaras ws21",
      descripcion: "Cámaras profesionales de alta resolución oferta Febrero",
      img1: "",
      img2: "",
      state: 1,
      createdAt: new Date("2024-02-13T11:00:00"),
      updatedAt: new Date("2024-02-13T13:00:00")
    }
  ];

  constructor(private fb: FormBuilder) {
    this.OffertsForm = this.fb.group({
      name: ['', Validators.required],
      descripcion: ['', Validators.required],
      img1: [''],
      img2: [''],
      state: [1, Validators.required]
    });
  }

  /** Mostrar el formulario para crear una nueva ofertas */
  createOfferts() {
    this.isCreating = true;
    this.isEditing = false;
    this.selectedOffert = null;
    this.OffertsForm.reset({
      name: '',
      descripcion: '',
      img1: '',
      img2: '',
      state: 1
    });
  }


  /** Editar una categoferta  existente */
  editOffert(category: any) {
    this.isEditing = true;
    this.isCreating = false;
    this.selectedOffert = category;

    this.OffertsForm.setValue({
      name: category.name,
      descripcion: category.descripcion,
      img1: category.img1 || '',
      img2: category.img2 || '',
      state: category.state
    });
  }

  /** Guardar la oferta */
  saveOffert() {
    if (this.OffertsForm.valid) {
      if (this.isEditing && this.selectedOffert) {
        
        // Actualizar categoría existente
        this.selectedOffert.name = this.OffertsForm.value.name;
        this.selectedOffert.descripcion = this.OffertsForm.value.descripcion;
        this.selectedOffert.img1 = this.OffertsForm.value.img1;
        this.selectedOffert.img2 = this.OffertsForm.value.img2;
        this.selectedOffert.state = this.OffertsForm.value.state;
        this.selectedOffert.updatedAt = new Date();
      } else {
        // Crear nueva oferta

        const newOffert = {
          id: this.offerts.length + 1,
          ...this.OffertsForm.value,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        this.offerts.push(newOffert);
      }

      this.isCreating = false;
      this.isEditing = false;
    }
  }

    /** Confirmar y eliminar oferta */
  deleteOffert(offertId: number) {
    const confirmDelete = confirm('¿Está seguro de eliminar la categoría?');
    if (confirmDelete) {
      this.offerts = this.offerts.filter(offert => offert.id !== offertId);
    }
  }

      /** Cancelar y volver a la lista */
  cancel() {
    this.isCreating = false;
    this.isEditing = false;
    this.selectedOffert = null;
  }

    /** carga de imágenes */
  uploadImage(event: any, img: string) {
    const file = event.target.files[0];
    if (file) {
      this.OffertsForm.patchValue({ [img]: file });
      this.OffertsForm.get(img)?.updateValueAndValidity();
      
    }
  }


}
