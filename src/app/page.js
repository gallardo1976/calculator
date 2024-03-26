// pages/index.js
import Calculator from "./componentes/calculadora";

const Home = () => {
  return (
    <div className="container">
      <div class="flex justify-center h-screen">
        <div class="bg-gray-800 rounded-lg shadow-lg p-8 mx-4 sm:mx-auto max-w-md w-full">
          <h2 class="text-2xl font-semibold text-white mb-4">
            Mi Div Centrado Horizontalmente
          </h2>
          <p class="text-gray-300 mb-6">
            Este es un ejemplo de un div centrado horizontalmente y moderno
            creado con Tailwind CSS.
          </p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
            Botón de Ejemplo
          </button>
        </div>
      </div>

      <Calculator />
    </div>
  );
};

export default Home;
