import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  isCreating: boolean = false;
  isEditing: boolean = false;
  selectedProduct: any = null;
  showForm: boolean = false;
  ProductsForm: FormGroup;
  
  products = [
    {
      id: 1,
      name: 'Cámara Sony',
      descripcion: 'Cámara profesional 4K',
      fk_categoria: 'Camaras',
      img1: '',
      img2: '',
      img3: '',
      state:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 2,
      name: 'Lente Canon',
      descripcion: 'Lente de 50mm f/1.8',
      fk_categoria: 'Camaras',
      img1: '',
      img2: '',
      img3: '',
      state:1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];

  constructor(private fb: FormBuilder) {
    this.ProductsForm = this.fb.group({
      name: ['', Validators.required],
      descripcion: ['', Validators.required],
      fk_categoria: ['', Validators.required],
      img1: [''],
      img2: [''],
      img3: [''],
      state: [1, Validators.required],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
  }

    /** Mostrar el formulario para crear un nuevo producto */
    createProduct() {
      this.isCreating = true;
      this.isEditing = false;
      this.selectedProduct = null;
      this.ProductsForm.reset({
        name: '',
        descripcion: '',
        fk_categoria: '',
        img1: '',
        img2: '',
        state: 1
      });
    }

      /** Editar una producto existente */
    editProduct(product: any) {
      this.isEditing = true;
      this.isCreating = false;
      this.selectedProduct = product;

      this.ProductsForm.setValue({
        name: product.name,
        descripcion: product.descripcion,
        fk_categoria: product.fk_categoria,
        img1: product.img1 || '',
        img2: product.img2 || '',
        img3: product.img3 || '',
        state: product.state
      });
    }


     /** Guardar el producto */
  saveProduct() {
    if (this.ProductsForm.valid) {
      if (this.isEditing && this.selectedProduct) {
        
        // Actualizar categoría existente
        this.selectedProduct.name = this.ProductsForm.value.name;
        this.selectedProduct.descripcion = this.ProductsForm.value.descripcion;
        this.selectedProduct.img1 = this.ProductsForm.value.img1;
        this.selectedProduct.img2 = this.ProductsForm.value.img2;
        this.selectedProduct.state = this.ProductsForm.value.state;
        this.selectedProduct.updatedAt = new Date();
      } else {
        // Crear nueva categoría

        const newProduct = {
          id: this.products.length + 1,
          ...this.ProductsForm.value,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        this.products.push(newProduct);
      }

      this.isCreating = false;
      this.isEditing = false;
    }
  }

    /** Confirmar y eliminar producto */
    deleteProduct(productId: number) {
      const confirmDelete = confirm('¿Está seguro de eliminar este producto?');
      if (confirmDelete) {
        this.products = this.products.filter(product => product.id !== productId);
      }
    }

      /** Cancelar y volver a la lista */
    cancel() {
      this.isCreating = false;
      this.isEditing = false;
      this.selectedProduct = null;
    }

    /** carga de imágenes */
    uploadImage(event: any, img: string) {
      const file = event.target.files[0];
      if (file) {
        this.ProductsForm.patchValue({ [img]: file });
        this.ProductsForm.get(img)?.updateValueAndValidity();
        
      }
    }
  


}
