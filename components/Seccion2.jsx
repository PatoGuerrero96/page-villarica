import React from "react";
import Image from "next/image";
const Seccion2 = () => {
  return (
  <div className="relative w-full">
    {/* Fondo texturizado */}
    <Image
      src="/fondo.png"
      alt="Fondo texturizado"
      fill
      className="object-cover -z-10 h-[40vh] md:h-[50vh] lg:h-[50vh]"
      priority
    />

    {/* Contenedor grid */}
    <div className="z-10 grid grid-cols-[60%_40%] w-full h-[35vh] md:h-[50vh] lg:h-[50vh]">
      
      {/* Parte izquierda */}
      <div className="flex items-center justify-center p-8 bg-red-200 h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Hospital Villarrica
          </h1>
          <p className="text-2xl text-white">JUNTOS SOMOS</p>
          <p className="text-2xl font-bold text-white">MÁS CALIDAD</p>
          <p className="text-xl text-white mt-4">acreditación 2025</p>
        </div>
      </div>

      {/* Parte derecha */}
      <div className="flex items-center justify-center bg-green-200 relative overflow-hidden h-full p-8">
        {/* Div azul detrás del círculo */}
        <div className="absolute left-0 right-0 bottom-0 h-[35%] md:h-[40%] lg:h-[35%] bg-blue-200 z-4"></div>

        {/* Círculo blanco con imagen */}
        <div className="absolute w-110 h-110 mr-95 md:w-80 md:h-80 md:mr-40 lg:w-250 lg:h-250 lg:mr-130 z-6">
          <div className="absolute inset-0 bg-transparent rounded-full overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/fondo.png"
                alt="Volcán"
                fill
                className="object-cover translate-x-5 md:translate-x-10 lg:translate-x-30"
                quality={100} 
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  );
};

export default Seccion2;