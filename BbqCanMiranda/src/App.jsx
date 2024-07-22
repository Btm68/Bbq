import React, { useState, useEffect } from 'react';
import './App.css';
import videoBbq from './assets/videobbq1.mp4';
import bbq1time from './assets/bbq1time.png'; 


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
      <div className="py-8 px-4 bg-white text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Juntos es mucho mejor, ¡reunámonos!</h2>
        <div className="flex justify-center">

        </div>
      </div>
    </div>
  );
}

export default App;
