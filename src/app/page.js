// pages/index.js
import Calculator from "./componentes/calculadora";

const Home = () => {
  return (
    <div className="container ">
      <div class="flex justify-center">
        <div class="inline-block bg-gray-800 m-10 px-20 py-10 rounded-xl">
          <h1 class="text-center">Brayan Gallardo</h1>
        </div>
      </div>

      <Calculator />
    </div>
  );
};

export default Home;
