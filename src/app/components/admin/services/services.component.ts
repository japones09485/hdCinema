import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  isCreating: boolean = false;
  isEditing: boolean = false;
  selectedService: any = null;
  showForm: boolean = false;
  ServicesForm: FormGroup;

  services = [
    {
      id: 1,
      name: "Servicio Grabacion",
      descripcion: " servicio Grabacion de alta resolución",
      img1: "",
      img2: "",
      state: 1,
      createdAt: new Date("2024-02-13T10:00:00"),
      updatedAt: new Date("2024-02-13T12:00:00")
    },
    {
      id: 2,
      name: "Servicio Sonido",
      descripcion: "Cámaras profesionales de alta resolución oferta Febrero",
      img1: "",
      img2: "",
      state: 1,
      createdAt: new Date("2024-02-13T11:00:00"),
      updatedAt: new Date("2024-02-13T13:00:00")
    }
  ];

  constructor(private fb: FormBuilder) {
    this.ServicesForm = this.fb.group({
      name: ['', Validators.required],
      descripcion: ['', Validators.required],
      img1: [''],
      img2: [''],
      state: [1, Validators.required]
    });
  }

  /** Mostrar el formulario para crear una nuevo servicio */
  createServices() {
    this.isCreating = true;
    this.isEditing = false;
    this.selectedService = null;
    this.ServicesForm.reset({
      name: '',
      descripcion: '',
      img1: '',
      img2: '',
      state: 1
    });
  }

  /** Editar una servicio  existente */
  editService(service: any) {
    this.isEditing = true;
    this.isCreating = false;
    this.selectedService = service;

    this.ServicesForm.setValue({
      name: service.name,
      descripcion: service.descripcion,
      img1: service.img1 || '',
      img2: service.img2 || '',
      state: service.state
    });
  }


   /** Guardar el service */
   saveService() {
    if (this.ServicesForm.valid) {
      if (this.isEditing && this.selectedService) {
        
        // Actualizar categoría existente
        this.selectedService.name = this.ServicesForm.value.name;
        this.selectedService.descripcion = this.ServicesForm.value.descripcion;
        this.selectedService.img1 = this.ServicesForm.value.img1;
        this.selectedService.img2 = this.ServicesForm.value.img2;
        this.selectedService.state = this.ServicesForm.value.state;
        this.selectedService.updatedAt = new Date();
      } else {
        // Crear nueva oferta

        const newService = {
          id: this.services.length + 1,
          ...this.ServicesForm.value,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        this.services.push(newService);
      }

      this.isCreating = false;
      this.isEditing = false;
    }
  }

  /** Confirmar y eliminar servicio */
  deleteService(serviceId: number) {
    const confirmDelete = confirm('¿Está seguro de eliminar este servicio?');
    if (confirmDelete) {
      this.services = this.services.filter(offert => offert.id !== serviceId);
    }
  }

  /** Cancelar y volver a la lista */
  cancel() {
    this.isCreating = false;
    this.isEditing = false;
    this.selectedService = null;
  }

  /** carga de imágenes */
  uploadImage(event: any, img: string) {
    const file = event.target.files[0];
    if (file) {
      this.ServicesForm.patchValue({ [img]: file });
      this.ServicesForm.get(img)?.updateValueAndValidity();
      
    }
  }
    






}
