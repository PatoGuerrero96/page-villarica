import React from "react";

const FichaClinica = () => {
  return (
<div className="relative w-full h-full overflow-hidden bg-morado z-10">
  {/* circulo rojo */}
  <svg
  className="
    absolute 
     top-5 left-4
     md:top-10 md:left-15
    lg:top-10 lg:left-30
    xl:top-15 xl:left-90
    w-14 h-14
    md:w-25 md:h-25
    lg:w-30 lg:h-30
    xl:w-50 xl:h-50
  "
  viewBox="0 0 37.22 37.22"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
     fill="#e62b49"
    cx="18.61"
    cy="18.61"
    r="18.61"

  />
</svg>
  {/* circulo verde */}
  <svg
  className="
    absolute 
     top-65 right-5
     md:top-105 md:right-15
    lg:top-110 lg:right-15
    xl:top-140 xl:right-30
    w-15 h-15
     md:w-30 md:h-30
      lg:w-30 lg:h-30
       xl:w-55 xl:h-55
  "
  viewBox="0 0 37.22 37.22"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
     fill="#b5ff6e"
    cx="18.61"
    cy="18.61"
    r="18.61"

  />
</svg>
  {/* Contenido */}
  <div className="relative px-4 md:px-8 lg:px-16 text-white flex flex-col w-full">
    <h2 className="text-xl sm:text-xl md:text-5xl lg:text-5xl xl:text-6xl mt-8 md:mt-15 lg:mt-20 xl:mt-30 font-bold text-center uppercase border-3 border-white rounded-full px-4 md:px-6 lg:px-6 xl:px-6 py-2 md:py-6 lg:py-6 xl:py-6 inline-block mx-auto">
      FICHA CLÍNICA
    </h2>

    <div className="w-full flex flex-col justify-center h-full">
      <p className=" text-[15px] sm:text-md md:text-4xl lg:text-[40px] xl:text-6xl mt-5 md:mt-7 lg:mt-10 xl:mt-15 text-center mb-5 md:mb-10 lg:mb-10 xl:mb-10">
        La ficha clínica es <strong>única y confidencia</strong>
      </p>

      <div className="flex flex-col max-w-8xl  mx-auto gap-4 md:gap-8 lg:gap-10 xl:gap-15    ">
        <div className="ml-9 md:ml-10 lg:ml-0 xl:ml-0">
            {/* numero 1 */}
          <svg
  className="
    absolute
    top-27 -left-16
    md:top-53 md:-left-27
    lg:top-58 lg:-left-32
    xl:top-80 xl:-left-40
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
    fill="#fe5c20"
    d="M45.67,19.26H9.63C4.31,19.26,0,14.95,0,9.63h0C0,4.31,4.31,0,9.63,0h36.04c5.32,0,9.63,4.31,9.63,9.63h0c0,5.32-4.31,9.63-9.63,9.63Z"
  />
  <text
    fill="#fff"
    fontSize="11"
    fontWeight="700"
    fontFamily="Arial, sans-serif"
    x="34.93"
    y="13.28"
  >
    01
  </text>
</svg>

        <p className="text-[13px] sm:text-sm md:text-3xl lg:text-4xl xl:text-5xl  text-left">
          Está disponible en papel o en formato        
        </p>
   <p className="text-[13px] sm:text-sm md:text-3xl lg:text-4xl xl:text-5xl text-left font-bold">
  electrónico.{" "}
  <a
    href="https://login.ssasur.cl"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:underline"
  >
    <strong>(login.ssasur.cl)</strong>
  </a>
</p>

        </div>
         <div className="ml-9 md:ml-10 lg:ml-0 xl:ml-0">
                   {/* numero 2 */}
          <svg
  className="
    absolute
    top-41 -left-16
    md:top-80 md:-left-27
    lg:top-87 lg:-left-32
    xl:top-120 xl:-left-40
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
    fill="#fe5c20"
    d="M45.67,19.26H9.63C4.31,19.26,0,14.95,0,9.63h0C0,4.31,4.31,0,9.63,0h36.04c5.32,0,9.63,4.31,9.63,9.63h0c0,5.32-4.31,9.63-9.63,9.63Z"
  />
  <text
    fill="#fff"
    fontSize="11"
    fontWeight="700"
    fontFamily="Arial, sans-serif"
    x="34.93"
    y="13.28"
  >
    02
  </text>
</svg>

        <p className="text-[13px] sm:text-sm md:text-3xl lg:text-4xl xl:text-5xl  text-left">
          Solo accedes con tu <strong >clave personal</strong> 
        </p>
           <p className="  font-bold  text-[13px] sm:text-sm md:text-3xl lg:text-4xl xl:text-5xl  text-left">
         <strong>vinculada al RUN del paciente.</strong>
        </p>

        </div>       

  
      </div>
    </div>

  </div>
      <div className="mt-30">

  </div>
</div>

  );
};

export default FichaClinica;