import React from "react";

const Identificacion = () => {
  return (
<div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[180vh] xl:h-[170vh]  overflow-hidden bg-verde z-10">
  {/* circulo verde lateral*/}
<svg
  className="
    absolute 
    top-40 -right-10
    md:top-65 md:-right-7
    lg:top-90 lg:-right-20
    xl:top-120 xl:-right-10
    w-30 h-30
    md:w-40 md:h-60
    lg:w-60 lg:h-60
    xl:w-60 xl:h-90
  "
  viewBox="0 0 22.76 45.97"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="#07cc59"
    d="M0,22.98C0,10.28,10.19,0,22.76,0v45.97C10.19,45.97,0,35.68,0,22.98Z"
  />
</svg>
  {/* circulo azul lateral */}
<svg
  className="
    absolute 
    top-73 -right-8
    md:top-130 md:-right-15
    lg:top-155 lg:-right-12
    xl:top-220 xl:-right-10
    w-20 h-15
    md:w-35 md:h-35
    lg:w-30 lg:h-30
    xl:w-30 xl:h-50
  "
  viewBox="0 0 22.76 45.97"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="#105afb"
    d="M0,22.98C0,10.28,10.19,0,22.76,0v45.97C10.19,45.97,0,35.68,0,22.98Z"
  />
</svg>
  {/* circulo naranjo */}
  <svg
  className="
    absolute 
    top-50 right-67
    md:top-85 md:right-155
    lg:top-100 lg:right-180
    xl:top-135 xl:right-310
    w-17 h-17
    md:w-35 md:h-50
    lg:w-40 lg:h-48
    xl:w-60 xl:h-80
  "
  viewBox="0 0 37.22 37.22"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    fill="#ff5d00"
    cx="18.61"
    cy="18.61"
    r="18.61"

  />
</svg>
  {/* circulo azul */}
  <svg
  className="
    absolute 
     top-52 right-53
     md:top-88 md:right-115
    lg:top-105 lg:right-140
    xl:top-142 xl:right-260
    w-12 h-12
    md:w-30 md:h-45
    lg:w-30 lg:h-38
    xl:w-40 xl:h-60
  "
  viewBox="0 0 37.22 37.22"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    fill="#105afb"
    cx="18.61"
    cy="18.61"
    r="18.61"

  />
</svg>

  {/* Contenido */}
  <div className="relative px-4 md:px-8 lg:px-16 text-black flex flex-col w-full">
    <h2 className="text-xl sm:text-xl md:text-5xl lg:text-5xl xl:text-5xl mt-8 md:mt-15 lg:mt-20 xl:mt-30 font-bold text-center uppercase border-4 border-black rounded-full px-4 md:px-6 lg:px-6 xl:px-6 py-2 md:py-6 lg:py-6 xl:py-6 inline-block mx-auto">
      Identificación
    </h2>

    <div className="w-full flex flex-col justify-center h-full mt-8 md:mt-15 lg:mt-20 xl:mt-30">


      <div className="flex flex-col max-w-8xl  mx-auto gap-4 md:gap-8 lg:gap-10 xl:gap-15    ">
        <div className="ml-8 md:ml-10 lg:ml-0 xl:ml-0">
            {/* numero 1 */}
          <svg
  className="
    absolute
    top-20 -left-15
    md:top-40 md:-left-27
    lg:top-40 lg:-left-32
    xl:top-75 xl:-left-40
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
    fill="#010101"
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

        <p className="text-md md:text-4xl lg:text-4xl xl:text-7xl  text-left mb-1 md:mb-3 lg:mb-3 xl:mb-7 ">
        <strong>Identifica siempre</strong> al paciente       
        </p>
        <p className="text-sm md:text-3xl lg:text-4xl xl:text-6xl text-left ">
         Usa <strong>nombre completo y RUN</strong>  en adultos y   
        </p>
         <p className="text-sm md:text-3xl lg:text-4xl xl:text-6xl text-left ">
         pediátricos. Esto evita confusiones.    
        </p>

        </div>
         <div className="ml-8 md:ml-10 lg:ml-0 xl:ml-0  mt-20 md:mt-35 lg:mt-40 xl:mt-70">
                   {/* numero 2 */}
          <svg
  className="
    absolute
    top-60 -left-15
    md:top-113 md:-left-27
    lg:top-125 lg:-left-32
    xl:top-200 xl:-left-40
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
    fill="#010101"
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

        <p className="text-md md:text-4xl lg:text-4xl xl:text-6xl  text-left mb-1 md:mb-3 lg:mb-3 xl:mb-7 ">
          <strong className="font-bold">Recién nacidos,</strong>identifica la madre 
        </p>
           <p className=" text-sm md:text-3xl lg:text-3xl xl:text-5xl  text-left">
          Anota <strong>nombre y apellidos de la madre</strong>, su
        </p>
          <p className=" text-sm md:text-3xl lg:text-3xl xl:text-5xl  text-left">
          RUN, junto con fecha, hora de nacimiento
        </p>
          <p className=" text-sm md:text-3xl lg:text-3xl xl:text-5xl  text-left">
          y sexo del bebé.
        </p>

        </div>       
        <div className="ml-8 md:ml-10 lg:ml-0 xl:ml-0 mt-2 md:mt-3 lg:mt-5 xl:mt-10">
                                     {/* numero 3 */}
          <svg
  className="
    absolute
    top-88 -left-15
    md:top-165 md:-left-27
    lg:top-180 lg:-left-32
   xl:top-290 xl:-left-40
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
    fill="#010101"
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
    03
  </text>
</svg>
        <p className="text-md md:text-4xl lg:text-3xl xl:text-6xl text-left mb-1 md:mb-3 lg:mb-3 xl:mb-7 ">
          Si no conoces la identidad, <strong className="font-bold">usa "NN"</strong>
        </p>
        <p className="text-sm md:text-3xl lg:text-3xl xl:text-5xl text-left">
         Cuando la persona llega sin identificación,
        </p>
        <p className="text-sm md:text-3xl lg:text-3xl xl:text-5xl text-left">
        <strong>asigna nombre "NN" y RUN provisorio.</strong> 
        </p>

        </div>
  
      </div>
    </div>

  </div>
</div>
  );
};

export default Identificacion;