import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.css'
})
export class GaleryComponent {

  isCreating: boolean = false;
  isEditing: boolean = false;
  selectedGalery: any = null;
  showForm: boolean = false;
  GaleryForm: FormGroup;

  galerys = [
    {
      id: 1,
      name: "evento 1",
      descripcion: "evento 1 y grabación en 4K.",
      photos: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
        "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
      ],
      state: 1,
      createdAt: new Date("2024-02-13T10:00:00"),
      updatedAt: new Date("2024-02-13T12:00:00")
    },
    {
      id: 2,
      name: "evento 2",
      descripcion: "evento 2 para grabaciones de estudio.",
      photos: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
        "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
      ],
      state: 1,
      createdAt: new Date("2024-02-13T10:00:00"),
      updatedAt: new Date("2024-02-13T12:00:00")
    },
    {
      id: 3,
      name: "evento 3",
      descripcion: "evento 13 fluido.",
      photos: [
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
        "data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
      ],
      state: 0,
      createdAt: new Date("2024-02-13T10:00:00"),
      updatedAt: new Date("2024-02-13T12:00:00")
    }
  ];
  


  constructor(private fb: FormBuilder) {
    this.GaleryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required]],
      photos: this.fb.array([]), // Para almacenar múltiples imágenes
      state: [1, Validators.required]
    });
  }

  /** Mostrar el formulario para crear una galeria */
  createGalery() {
    this.isCreating = true;
    this.isEditing = false;
    this.selectedGalery = null;
    this.GaleryForm.reset({
      name: '',
      descripcion: '',
      state: 1
    });
  }

  /** Editar una galeria  existente */
  editGalery(galery: any) {
    this.isEditing = true;
    this.isCreating = false;
    this.selectedGalery = galery;

    this.GaleryForm.setValue({
      name: galery.name,
      descripcion: galery.descripcion,
      state: galery.state
    });
  }


   /** Guardar el galeria */
   saveGalery() {
    if (this.GaleryForm.valid) {
      if (this.isEditing && this.selectedGalery) {
        
        // Actualizar categoría existente
        this.selectedGalery.name = this.GaleryForm.value.name;
        this.selectedGalery.descripcion = this.GaleryForm.value.descripcion;
        this.selectedGalery.state = this.GaleryForm.value.state;
        this.selectedGalery.updatedAt = new Date();
      } else {
        // Crear nueva oferta

        const newService = {
          id: this.galerys.length + 1,
          ...this.GaleryForm.value,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        this.galerys.push(newService);
      }

      this.isCreating = false;
      this.isEditing = false;
    }
  }

  /** Confirmar y eliminar galeria */
  deleteGalery(GaleryId: number) {
    const confirmDelete = confirm('¿Está seguro de eliminar esta galeria?');
    if (confirmDelete) {
      this.galerys = this.galerys.filter(galery => galery.id !== GaleryId);
    }
  }

  /** Cancelar y volver a la lista */
  cancel() {
    this.isCreating = false;
    this.isEditing = false;
    this.selectedGalery = null;
  }

  /** carga de imágenes */
  uploadImage(event: any, img: string) {
    const file = event.target.files[0];
    if (file) {
      this.GaleryForm.patchValue({ [img]: file });
      this.GaleryForm.get(img)?.updateValueAndValidity();
      
    }
  }

}


