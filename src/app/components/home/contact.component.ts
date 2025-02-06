import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <!-- Contact Section con detalles amarillos -->
  <section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">CONTACT</h2>
      <h3 class="text-2xl font-semibold text-center text-gray-700 mb-8">NECESSITATIBUS EIUS CONSEQUATUR</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 class="text-xl font-bold text-gray-800 mb-4">Address</h4>
          <p class="text-gray-600">A108 Adam Street, New York, NY 853022</p>
          <h4 class="text-xl font-bold text-gray-800 mt-6 mb-4">Call Us</h4>
          <p class="text-gray-600">+1 5599 55488 55</p>
          <h4 class="text-xl font-bold text-gray-800 mt-6 mb-4">Email Us</h4>
          <p class="text-gray-600">infoexample.com</p>
        </div>
        <div>
          <form class="bg-gray-100 p-6 rounded-lg shadow-lg">
            <input type="text" placeholder="Your Name" class="w-full p-2 mb-4 rounded border border-gray-300">
            <input type="email" placeholder="Your Email" class="w-full p-2 mb-4 rounded border border-gray-300">
            <textarea placeholder="Your Message" class="w-full p-2 mb-4 rounded border border-gray-300"></textarea>
            <button type="submit" class="bg-primary text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300 shadow-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  `,
  styles: ``
})
export class ContactComponent {

}
