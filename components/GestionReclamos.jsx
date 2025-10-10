import React from "react";

const GestionReclamos = () => {
  return (
<div className="relative w-full h-full overflow-hidden bg-rojo z-10">
  {/* Círculo verde parcialmente visible */}
<svg
  className="
    absolute 
    top-45 -right-10
    md:top-75 md:-right-15
    lg:top-80 lg:-right-15
    xl:top-125 xl:-right-8
    w-20 h-20
    md:w-40 md:h-40
    lg:w-40 lg:h-48
    xl:w-25 xl:h-60
  "
  viewBox="0 0 22.76 45.97"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
     fill="#b5ff63"
    d="M0,22.98C0,10.28,10.19,0,22.76,0v45.97C10.19,45.97,0,35.68,0,22.98Z"
  />
</svg>
  {/* Círculo naranjo parcialmente visible */}
<svg
  className="
    absolute 
    -top-5 -right-15
    md:-top-5 md:-right-25
    lg:-top-5 lg:-right-15
    xl:-top-5 xl:-right-15
    w-40 h-40
    md:w-70 md:h-70
    lg:w-60 lg:h-68
    xl:w-60 xl:h-100
  "
  viewBox="0 0 22.76 45.97"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
     fill="#ff5d00"
    d="M0,22.98C0,10.28,10.19,0,22.76,0v45.97C10.19,45.97,0,35.68,0,22.98Z"
  />
</svg>
  {/* Círculo azul parcialmente visible */}
<svg
  className="
    absolute 
    top-0 -left-2
    md:top-0 md:-left-7
    lg:top-0 lg:-left-5
    xl:top-0 xl:-left-12
    w-10 h-20
    md:w-24 md:h-50
    lg:w-22 lg:h-44
    xl:w-28 xl:h-56
    z-30
  "
  viewBox="0 0 21.25 42.5"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="#105afb"
    d="M21.25,21.25c0,11.74-9.52,21.25-21.25,21.25V0c11.73,0,21.25,9.52,21.25,21.25Z"
  />
</svg>

  {/* Contenido */}
  <div className="relative px-4 md:px-8 lg:px-16 text-white flex flex-col w-full">
    <h2 className="text-md sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl mt-8 md:mt-15 lg:mt-20 xl:mt-30 font-black text-center uppercase border-3 lg:border-6 md:border-6 xl:border-6 border-white rounded-full px-4 md:px-6 lg:px-6 xl:px-6 py-1 md:py-4 lg:py-5 xl:py-5 inline-block mx-auto">
      GESTIÓN DE RECLAMOS
    </h2>

    <div className="w-full flex flex-col justify-center h-full">
      <p className="text-md md:text-4xl lg:text-[40px] xl:text-7xl mt-5 md:mt-7 lg:mt-10 xl:mt-15 text-center mb-5 md:mb-10 lg:mb-10 xl:mb-10 font-extrabold">
      Tu opinión importa
      </p>

      <div className="flex flex-col max-w-8xl  mx-auto gap-4 md:gap-8 lg:gap-10 xl:gap-15    ">
        <div className="ml-7 md:ml-10 lg:ml-0 xl:ml-0">
            {/* numero 1 */}
          <svg
  className="
    absolute
    top-24 -left-16
    md:top-53 md:-left-27
    lg:top-58 lg:-left-32
    xl:top-87 xl:-left-40
    w-28 h-28
    md:w-50 md:h-50
    lg:w-60 lg:h-60
    xl:w-75 xl:h-60
    z-40
  "
  viewBox="0 0 55.3 19.26"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="#FFF200"
    d="M45.67,19.26H9.63C4.31,19.26,0,14.95,0,9.63h0C0,4.31,4.31,0,9.63,0h36.04c5.32,0,9.63,4.31,9.63,9.63h0c0,5.32-4.31,9.63-9.63,9.63Z"
  />
  <text
    fill="#0000000"
    fontSize="11"
    fontWeight="700"
    fontFamily="Arial, sans-serif"
    x="34.93"
    y="13.28"
  >
    01
  </text>
</svg>

        <p className=" text-xxs-320 text-sm  sm:text-sm md:text-3xl lg:text-4xl xl:text-5xl  text-left">
          Encuentra <span className="font-extrabold">buzones y formularios</span> en    
        </p>
          <p className="text-xxs-320 text-sm  sm:text-sm md:text-3xl lg:text-4xl xl:text-5xl  text-left">
          distintos servicios del hospital.   
        </p>
          <p className="text-xxs-320 text-sm  sm:text-sm md:text-3xl lg:text-4xl xl:text-5xl  text-left">
         <span className="font-extrabold">Usa el más cercano</span>  para dejar 
        </p>
          <p className="text-xxs-320 text-sm  sm:text-sm md:text-3xl lg:text-4xl xl:text-5xl  text-left">
         sugerencias, felicitaciones o reclamos.
        </p>


        </div>
     

  
      </div>
    </div>

  </div>
      <div className="mt-15 md:mt-20 lg:mt-20 xl:mt-35">

  </div>
</div>

  );
};

export default GestionReclamos;