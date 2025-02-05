module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Escanea todos los archivos HTML y TypeScript en la carpeta src
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'], // Configura Poppins como la fuente principal
    },
    extend: {
      colors: {
        primary: '#FFD700', // Define el color amarillo como color principal
      },
    },
  },
  plugins: [],
}