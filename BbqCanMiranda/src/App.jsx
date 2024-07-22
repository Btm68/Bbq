import React, { useState, useEffect } from 'react';
import './App.css';
import videoBbq from './assets/videobbq1.mp4';
import comida from './assets/bbq4.jpg';
import pinxo from './assets/pinxos.jpg';
import DropdownMenu from './components/DropdownMenu';

function App() {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-08-10T00:00:00');
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  // Estado para controlar la visibilidad del menú desplegable
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="relative bg-cover bg-center h-screen">
        <video
          src={videoBbq}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>

        {/* Botones en la parte superior derecha */}
        <div className="absolute top-0 right-0 p-4 flex justify-end space-x-4 md:space-x-8 lg:space-x-12 z-10">
          <button className="text-white text-xl hover:bg-gray-700 px-4 py-2 rounded transition duration-300">Bbq</button>
          <button className="text-white text-xl hover:bg-gray-700 px-4 py-2 rounded transition duration-300">Invitación</button>
          <button className="text-white text-xl hover:bg-gray-700 px-4 py-2 rounded transition duration-300">Asistir</button>
        </div>

        {/* Sección central */}
        <div className="absolute left-1/4 top-1/3 transform -translate-x-1/2 -translate-y-1/4 p-4 text-white text-center z-10">
          <h1 className="text-6xl font-bold mb-2">¿Barbacoa</h1>
          <h2 className="text-6xl font-bold">developers?</h2>
          <button className="mt-4 bg-amber-600 bg-opacity-80 px-6 py-3 rounded hover:bg-lightgray-300 hover:bg-opacity-80 transition duration-300">
            Invitación
          </button>
        </div>

        {/* Sección inferior */}
        <div className="absolute bottom-1/4 right-0 transform translate-x-[-20%] p-4 text-white text-left max-w-md">
          <h3 className="text-3xl font-semibold mb-4">¡Ven a la Barbacoa a Can Miranda!</h3>
          <p className="leading-relaxed text-lg">
            Ven a la barbacoa de Can Miranda. Te damos la bienvenida a una acogedora reunión llena de deliciosos platillos y gratos momentos.
          </p>
        </div>
      </div>

      {/* Container */}
      <div className="h-screen bg-gradient-custom flex flex-col">
        {/* Section invitación */}
        <div className="flex-grow flex items-center justify-center">
          <div className="py-8 px-4 text-custom-white bg-customBlue rounded-lg max-w-3xl mx-auto">
            <h3 className="text-4xl text-center font-semibold mb-4 text-custom-white">Can Miranda te invita</h3>
            <p className="text-custom-white text-2xl">
              Están todos invitados a la gran barbacoa de verano a Can Miranda. Hace tiempo les dije que teníamos que hacer una barbacoa en mi casa
              para reunirnos y no perder ese contacto tan especial que tenemos. Pues, ¡ha llegado el momento! Será una comida fantástica donde nos lo pasaremos genial juntos, disfrutando de una barbacoa deliciosa,
              risas y buenos momentos. Vengan preparados para comer, reír y crear recuerdos inolvidables. ¡Nos vemos en la parrilla!
            </p>
          </div>
        </div>

        {/* Sección contador */}
        <div className="flex justify-center space-x-4 md:space-x-8 py-20 bg-custom-image">
          <div className="text-center">
            <div className="bg-gray-300 p-6 rounded-lg">
              <div className="text-6xl font-bold">{timeLeft.days || 0}</div>
            </div>
            <div className="mt-3 text-2xl font-semibold text-custom-white">Días</div>
          </div>
          <div className="text-center">
            <div className="bg-gray-300 p-6 rounded-lg">
              <div className="text-6xl font-bold">{timeLeft.hours || 0}</div>
            </div>
            <div className="mt-3 text-2xl font-semibold text-custom-white">Horas</div>
          </div>
          <div className="text-center">
            <div className="bg-gray-300 p-6 rounded-lg">
              <div className="text-6xl font-bold">{timeLeft.minutes || 0}</div>
            </div>
            <div className="mt-3 text-2xl font-semibold text-custom-white">Minutos</div>
          </div>
          <div className="text-center">
            <div className="bg-gray-300 p-6 rounded-lg">
              <div className="text-6xl font-bold">{timeLeft.seconds || 0}</div>
            </div>
            <div className="mt-3 text-2xl font-semibold text-custom-white">Segundos</div>
          </div>
        </div>
      </div>

{/* Menu Section */}
<div className="py-8 px-4 bg-black text-custom-white">
  <h2 className="text-4xl font-semibold mb-4 text-center p-6">Juntos es mucho mejor, ¡reunámonos!</h2>
  <div className="flex flex-col md:flex-row items-start justify-center p-5 mt-10 space-x-10 md:space-x-20 max-w-6xl mx-auto">
    <img
      src={comida}
      alt="comida"
      className="w-60 h-60 md:w-70 md:h-70 lg:w-86 lg:h-96 rounded-sm mb-4 md:mb-0"
    />
    <div className="text-lg md:flex-grow max-w-3xl md:max-w-2xl lg:max-w-3xl flex flex-col items-start">
      <p className="text-2xl mb-4">
        ¡Prepárate para un festín de sabores y colores! En nuestro evento, encontrarás una amplia variedad de delicias culinarias y refrescantes bebidas que satisfarán todos los gustos y antojos.
        Desde exquisitas entradas hasta postres irresistibles, acompañados de una selección de bebidas.
      </p>
      <button
        className="self-center px-6 py-3 bg-[#BC8315] rounded hover:bg-[#FFCF99] transition duration-300 text-custom-text"
        onClick={toggleMenu}
      >
        Ver menú
      </button>
      {/* Menú desplegable */}
      <DropdownMenu isMenuOpen={isMenuOpen} />
    </div>
  </div>

  {/* Sección derecha */}
  <div className="flex flex-col md:flex-row items-start md:items-center mt-4 md:mt-2 relative z-10">
    <div className="text-lg md:flex-grow max-w-3xl md:max-w-2xl lg:max-w-3xl flex flex-col items-start">
      <p className="text-2xl mb-4">
        Y eso no es todo. En nuestra barbacoa no solo disfrutarás de una deliciosa selección de comidas, desde jugosas costillas, pinchos y sabrosas hamburguesas a la parrilla, hasta frescas ensaladas y exquisitos acompañamientos. También compartirás momentos inolvidables con la mejor compañía.
        La magia de una buena comida se eleva cuando se comparte con amigos. Además, tendremos una excelente variedad de bebidas: cervezas, vinos, refrescos, mojitos y más, para brindar por los buenos momentos.
        ¡Ven a disfrutar de esta barbacoa y experiencia social única, donde cada bocado y cada risa harán de esta celebración algo inolvidable!
      </p>
    </div>
    <img
      src={pinxo}
      alt="otra imagen"
      className="w-60 h-60 md:w-70 md:h-70 lg:w-86 lg:h-96 rounded-sm mb-4 md:mb-0"
    />
  </div>
</div>

      {/* Footer */}
      <div className="bg-white h-40 flex items-center justify-center">
        <p className="text-xl">HOLA MUNDO</p>
      </div>

      
    </div>
  );
}

export default App;