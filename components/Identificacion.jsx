import React from "react";

const Identificacion = () => {
  return (
<div className="relative w-full h-full  overflow-hidden bg-verde z-10">
  {/* circulo verde lateral*/}
<svg
  className="
    absolute 
    top-[30%] -right-15
    md:top-[32%] md:-right-[6%]
    lg:top-[37%] lg:-right-20
     xl:top-[37%] xl:-right-10
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
    top-[54%] -right-10
    md:top-[58%] md:-right-15
    lg:top-[58%] lg:-right-12
    xl:top-[60%] xl:-right-10
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
    top-[44%] right-60
    md:top-[44%] md:right-135
    lg:top-[50%] lg:right-180
    xl:top-[48%] xl:left-[18%]
    w-17 h-17
    md:w-35 md:h-50
    lg:w-38 lg:h-38
    xl:w-55 xl:h-55
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
     top-[46%] right-45
     md:top-[45%] md:right-100
    lg:top-[51%] lg:right-140
    xl:top-[50%] xl:left-[35%]
    w-12 h-12
    md:w-30 md:h-45
    lg:w-28 lg:h-28
    xl:w-40 xl:h-40
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
    <h2 className="text-xl sm:text-xl md:text-5xl lg:text-5xl xl:text-5xl mt-8 md:mt-15 lg:mt-20 xl:mt-30 font-black text-center uppercase border-3 lg:border-6 md:border-6 xl:border-6 border-black rounded-full px-4 md:px-6 lg:px-6 xl:px-6 py-1 md:py-4 lg:py-5 xl:py-5 inline-block mx-auto">
      Identificación
    </h2>

    <div className="w-full flex flex-col justify-center h-full mt-8 md:mt-15 lg:mt-20 xl:mt-30">


      <div className="flex flex-col max-w-8xl  mx-auto gap-4 md:gap-8 lg:gap-10 xl:gap-15    ">
        <div className="ml-9 md:ml-10 lg:ml-0 xl:ml-0">
            {/* numero 1 */}
          <svg
  className="
    absolute
    top-18 -left-14
    md:top-34 md:-left-27
    lg:top-44 lg:-left-32
    xl:top-64 xl:-left-40
    w-25 h-25
     md:w-48 md:h-48
    lg:w-56 lg:h-56
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
    fontWeight="800"
    x="34.93"
    y="13.28"
  >
    01
  </text>
</svg>

        <p className="text-md sm:text-md md:text-3xl lg:text-4xl xl:text-6xl font-extrabold text-left mb-1 md:mb-3 lg:mb-3 xl:mb-7 ">
        <span className="font-black">Identifica siempre</span> al paciente       
        </p>
        <p className="text-xxxs-320 text-[14px]  sm:text-xs md:text-2xl lg:text-4xl xl:text-5xl text-left  ">
         Usa <span className="font-bold">1 Nombre, 2 Apellidos, Nombre social</span>  
        </p>
         <p className="text-xxs-320 text-[14px]  sm:text-xs md:text-2xl lg:text-4xl xl:text-5xl text-left ">
        <span className="font-bold">entre paréntesis () y RUN;</span> en adultos y     
        </p>
        <p className="text-xxs-320 text-[14px]  sm:text-xs md:text-2xl lg:text-4xl xl:text-5xl text-left ">
         pediátricos. Esto evita confusiones. 
        </p>

        </div>
         <div className="ml-9 md:ml-10 lg:ml-0 xl:ml-0  ">
                   {/* numero 2 */}
          <svg
  className="
    absolute
    top-44 -left-14
    md:top-80 md:-left-27
    lg:top-98 lg:-left-32
    xl:top-138 xl:-left-40
    w-25 h-25
    md:w-48 md:h-48
    lg:w-56 lg:h-56
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
    fontWeight="800"

    x="34.93"
    y="13.28"
  >
    02
  </text>
</svg>

        <p className="text-xxs-320 text-md sm:text-md md:text-3xl lg:text-4xl xl:text-6xl  text-left mb-1 md:mb-3 lg:mb-3 xl:mb-7 ">
          <span className="font-black">Recién nacidos,</span> <span className="font-extrabold">identifica la madre </span>
        </p>
           <p className=" text-xxs-320 text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          <span className="font-bold">nombre y apellidos de la madre,</span> su RUN,
        </p>
          <p className="text-xxs-320 text-[13px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl  text-left">
           hora y fecha de nacimiento y sexo del bebé.
        </p>
          <p className="font-bold text-xxs-320 text-sm sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl  text-left mt-2">
          *Doble brazalete (contralateral)
        </p>

        </div>       
        <div className="ml-9 md:ml-10 lg:ml-0 xl:ml-0 mt-10 md:mt-25 lg:mt-30 xl:mt-60">
                                     {/* numero 3 */}
          <svg
  className="
    absolute
    top-82 -left-14
    md:top-152 md:-left-27
    lg:top-178 lg:-left-32
   xl:top-270 xl:-left-40
   w-25 h-25
     md:w-48 md:h-48
    lg:w-56 lg:h-56
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
    fontWeight="800"

    x="34.93"
    y="13.28"
  >
    03
  </text>
</svg>
        <p className="text-xxxs-320 text-md sm:text-md md:text-3xl lg:text-3xl xl:text-6xl text-left mb-1 md:mb-3 lg:mb-3 xl:mb-7 font-extrabold ">
           <span className="font-black">Si no conoces la identidad, usa "NN"</span>
        </p>
        <p className="text-xxs-320 text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left">
         Cuando la persona llega sin identificación,
        </p>
        <p className="text-xxs-320 text-[14px] text-sm sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
        <span className="font-extrabold">Nombre “NN” y RUN provisorio, Nº de ficha.</span> 
        </p>

        </div>
                <div className="ml-8 md:ml-10 lg:ml-0 xl:ml-0">
            {/* numero 4 */}
          <svg
  className="
    absolute
    top-105 -left-14
    md:top-187 md:-left-27
    lg:top-216 lg:-left-32
    xl:top-330 xl:-left-40
    w-25 h-25
     md:w-48 md:h-48
    lg:w-56 lg:h-56
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
    fontWeight="800"
    x="34.93"
    y="13.28"
  >
    04
  </text>
</svg>

        <p className="text-sm sm:text-md md:text-3xl lg:text-4xl xl:text-6xl font-extrabold text-left mb-1 md:mb-3 lg:mb-3 xl:mb-7 ">
        <span className="font-black">Paciente extranjero</span>     
        </p>
        <p className="text-xxxs-320 text-[14px] sm:text-xs md:text-2xl lg:text-4xl xl:text-5xl text-left  ">
         Usa <span className="font-bold">1 Nombre, 2 Apellidos, Nº de ficha,</span>  
        </p>
         <p className="text-xxs-320 text-[14px]sm:text-xs md:text-2xl lg:text-4xl xl:text-5xl text-left ">
           <span className="font-bold">pasaporte  o RUN provisorio;</span> si no trae    
        </p>
          <p className="text-xxs-320 text-[14px] sm:text-xs md:text-2xl lg:text-4xl xl:text-5xl text-left ">
        pasaporte se  considera el rut provisorio.   
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

export default Identificacion;