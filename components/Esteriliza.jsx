import React from "react";

const Esteriliza = () => {
  return (
<div className="relative w-full h-full overflow-hidden bg-verde-oscuro z-10">
  {/* Círculo azul parcialmente visible */}
<svg
  className="
    absolute 
    top-0 -left-5
    md:top-0 md:-left-10
    lg:top-0 lg:-left-8
    xl:top-0 xl:-left-12
    w-10 h-15
    md:w-20 md:h-36
    lg:w-18 lg:h-36
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
  {/* circulo amarillo */}
  <svg
  className="
    absolute 
     top-5 right-8
     md:top-2 md:right-25
    lg:top-10 lg:right-30
    xl:top-12 xl:right-30
    w-10 h-10
    md:w-25 md:h-35
    lg:w-24 lg:h-30
    xl:w-40 xl:h-50
  "
  viewBox="0 0 37.22 37.22"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
        fill="#b5ff63"
    cx="18.61"
    cy="18.61"
    r="18.61"

  />
</svg>
  {/* Contenido */}
  <div className="relative px-4 md:px-8 lg:px-16 text-black flex flex-col w-full">
    <h2 className="text-md sm:text-xl md:text-4xl lg:text-4xl xl:text-6xl mt-8 md:mt-15 lg:mt-20 xl:mt-30 font-bold text-center uppercase border-3 border-black rounded-full px-4 md:px-6 lg:px-6 xl:px-6 py-2 md:py-6 lg:py-6 xl:py-6 inline-block mx-auto">
      ESTERILIZA
    </h2>

    <div className="w-full flex flex-col justify-center h-full mt-8 md:mt-15 lg:mt-20 xl:mt-25">


      <div className="flex flex-col max-w-8xl  mx-auto gap-4 md:gap-8 lg:gap-10 xl:gap-15    ">
        <div className="ml-8 md:ml-10 lg:ml-0 xl:ml-0 ">
            {/* numero 1 */}
          <svg
  className="
    absolute
    top-17 -left-16
    md:top-36 md:-left-27
    lg:top-42 lg:-left-32
    xl:top-65 xl:-left-40
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
    fill="#00000"
    fontSize="11"
    fontWeight="700"
    fontFamily="Arial, sans-serif"
    x="34.93"
    y="13.28"
  >
    01
  </text>
</svg>

        <p className=" leading-tight text-[15px] sm:text-sm md:text-[40px] lg:text-5xl xl:text-7xl text-left mb-2 md:mb-4 xl:mb-8">
          <strong>Esteriliza siempre</strong> el material
        </p>
          <p className="leading-tight text-[12.5px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
         Los instrumentos <strong>se lavan y desinfectan</strong>
        </p>
          <p className="leading-tight text-[12.5px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
         en la central de esterilización para 
        </p>
          <p className="leading-tight text-[12.5px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
         <strong>garantizar seguridad</strong> en cada
        </p>
          <p className="leading-tight text-[12.5px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
         procedimiento.
        </p>


        </div>
     

  
      </div>
    </div>

  </div>
      <div className="mt-15 md:mt-20 lg:mt-20 xl:mt-30">

  </div>
</div>

  );
};

export default Esteriliza;