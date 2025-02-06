import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  template: `
     <!-- Services Section con detalles amarillos -->
  <section id="services" class="py-20 bg-gray-100">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">SERVICES</h2>
      <h3 class="text-2xl font-semibold text-center text-gray-700 mb-8">FEATURED SERVICES</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
          <h4 class="text-xl font-bold text-gray-800 mb-4">Nesciunt Mete</h4>
          <p class="text-gray-600">Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary">
          <h4 class="text-xl font-bold text-gray-800 mb-4">Eosle Commodi</h4>
          <p class="text-gray-600">Ut autem aut autem non a. Sint sint sit facilis. Uit exceptur voluptatem nisi sed. Quidem fuga nem uscio sint. Libero corrupti neque eum hic consequatur. Minus es aut. Vel qui id voluptas non ut nesciunt dolorem.</p>
        </div>
      </div>
    </div>
  </section>
  `,
  styles: ``
})
export class ServicesComponent {

}
