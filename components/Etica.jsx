import React from "react";

const Etica = () => {
  return (
<div className="relative w-full h-full overflow-hidden bg-verde z-10">

  {/* Contenido */}
  <div className="relative px-4 md:px-8 lg:px-16 text-black flex flex-col w-full">
    <h2 className="text-md sm:text-xl md:text-4xl lg:text-4xl xl:text-6xl mt-8 md:mt-15 lg:mt-20 xl:mt-30 font-bold text-center uppercase border-3 border-black rounded-full px-4 md:px-6 lg:px-6 xl:px-6 py-2 md:py-6 lg:py-6 xl:py-6 inline-block mx-auto">
      ÉTICA EN CADA DECISIÓN
    </h2>

    <div className="w-full flex flex-col justify-center h-full mt-8 md:mt-15 lg:mt-20 xl:mt-25">


      <div className="flex flex-col max-w-8xl  mx-auto gap-4 md:gap-8 lg:gap-10 xl:gap-15    ">
        <div className="ml-8 md:ml-10 lg:ml-0 xl:ml-0 ">
            {/* numero 1 */}
          <svg
  className="
    absolute
    top-19 -left-16
    md:top-38 md:-left-27
    lg:top-46 lg:-left-32
    xl:top-68 xl:-left-40
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
    fill="#00000"
    d="M45.67,19.26H9.63C4.31,19.26,0,14.95,0,9.63h0C0,4.31,4.31,0,9.63,0h36.04c5.32,0,9.63,4.31,9.63,9.63h0c0,5.32-4.31,9.63-9.63,9.63Z"
  />
  <text
    fill="#ffffff"
    fontSize="11"
    fontWeight="700"
    fontFamily="Arial, sans-serif"
    x="34.93"
    y="13.28"
  >
    01
  </text>
</svg>

        <p className=" leading-tight text-[11px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
          <strong>Toda solicitud</strong> debe pasar por el <strong>Comité de</strong>
        </p>
          <p className="leading-tight text-[11px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
          <strong>Ética Asistencial. Accede con el formulario o </strong>
        </p>
          <p className="leading-tight text-[11px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
         <strong>QR,</strong> y registra tu investigación en la <strong>Oficina de</strong>
        </p>
          <p className="leading-tight text-[11px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
         <strong>Calidad para asegurar transparencia y</strong>
        </p>
          <p className="leading-tight text-[11px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
         <strong>respeto a los pacientes.</strong>
        </p>


        </div>
     

  
      </div>
    </div>

  </div>
      <div className="mt-15 md:mt-20 lg:mt-20 xl:mt-25">

  </div>
</div>

  );
};

export default Etica;