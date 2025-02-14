import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Agregar ReactiveFormsModule para formularios reactivos
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  isCreating: boolean = false;
  isEditing: boolean = false;
  selectedCategory: any = null;
  showForm: boolean = false;

  categories = [
    {
      id: 1,
      name: "Cámaras DSLina hernandezR",
      descripcion: "Cámaras profesionales de alta resolución",
      img1: "",
      img2: "",
      state: 1,
      createdAt: new Date("2024-02-13T10:00:00"),
      updatedAt: new Date("2024-02-13T12:00:00")
    },
    {
      id: 2,
      name: "Lentes",
      descripcion: "Lentes de diferentes focales para cámaras",
      img1: "",
      img2: "",
      state: 1,
      createdAt: new Date("2024-02-13T11:00:00"),
      updatedAt: new Date("2024-02-13T13:00:00")
    }
  ];

  categoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      descripcion: ['', Validators.required],
      img1: [''],
      img2: [''],
      state: [1, Validators.required]
    });
  }

  /** Mostrar el formulario para crear una nueva categoría */
  createCategory() {
    this.isCreating = true;
    this.isEditing = false;
    this.selectedCategory = null;
    this.categoryForm.reset({
      name: '',
      descripcion: '',
      img1: '',
      img2: '',
      state: 1
    });
  }

  /** Editar una categoría existente */
  editCategory(category: any) {
    this.isEditing = true;
    this.isCreating = false;
    this.selectedCategory = category;

    this.categoryForm.setValue({
      name: category.name,
      descripcion: category.descripcion,
      img1: category.img1 || '',
      img2: category.img2 || '',
      state: category.state
    });
  }

  /** Guardar la categoría */
  saveCategory() {
    if (this.categoryForm.valid) {
      if (this.isEditing && this.selectedCategory) {
        
        // Actualizar categoría existente
        this.selectedCategory.name = this.categoryForm.value.name;
        this.selectedCategory.descripcion = this.categoryForm.value.descripcion;
        this.selectedCategory.img1 = this.categoryForm.value.img1;
        this.selectedCategory.img2 = this.categoryForm.value.img2;
        this.selectedCategory.state = this.categoryForm.value.state;
        this.selectedCategory.updatedAt = new Date();
      } else {
        // Crear nueva categoría

        const newCategory = {
          id: this.categories.length + 1,
          ...this.categoryForm.value,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        this.categories.push(newCategory);
      }

      this.isCreating = false;
      this.isEditing = false;
    }
  }

  /** Confirmar y eliminar categoría */
  deleteCategory(categoryId: number) {
    const confirmDelete = confirm('¿Está seguro de eliminar la categoría?');
    if (confirmDelete) {
      this.categories = this.categories.filter(category => category.id !== categoryId);
    }
  }

  /** Cancelar y volver a la lista */
  cancel() {
    this.isCreating = false;
    this.isEditing = false;
    this.selectedCategory = null;
  }

  /** carga de imágenes */
  uploadImage(event: any, img: string) {
    const file = event.target.files[0];
    if (file) {
      this.categoryForm.patchValue({ [img]: file });
      this.categoryForm.get(img)?.updateValueAndValidity();
      
    }
  }
  

  
}
