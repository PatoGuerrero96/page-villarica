
import React from "react";
import Image from "next/image";
const Notificar = () => {
  return (
<div className="relative w-full h-full overflow-hidden bg-azul  ">
  {/* Círculo verde parcialmente visible */}
<svg
  className="
    absolute 
    top-2 -right-7
    md:top-15 md:-right-15
    lg:top-14 lg:-right-8
    xl:top-10 xl:-right-14
    w-15 h-15
    md:w-35 md:h-35
    lg:w-22 lg:h-34
    xl:w-30 xl:h-50
  "
  viewBox="0 0 22.76 45.97"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
      fill="#FFF200"
    d="M0,22.98C0,10.28,10.19,0,22.76,0v45.97C10.19,45.97,0,35.68,0,22.98Z"
  />
</svg>
    {/* svg rojo*/}
  <svg
className="
  absolute 
  -top-[6%] right-[15%]
  md:-top-[10%] md:right-[12%]
  lg:-top-[12%] lg:right-[13%]
  xl:-top-[10%]  xl:right-[15%]
  w-22 h-22
  md:w-50 md:h-50
  lg:w-70 lg:h-70
  xl:w-90 xl:h-90
"
    viewBox="0 0 29.44 14.72"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
         fill="#e72d45"
        d="M14.72,14.72C6.59,14.72,0,8.13,0,0h29.44c0,8.13-6.59,14.72-14.72,14.72Z"
      />
    </g>
  </svg>
  {/* Contenido */}
  <div className="relative px-4 md:px-8 lg:px-16 text-white flex flex-col w-full">
    
    <h2 className="mb-2 md:mb-4 lg:mb-7 xl:mb-6 text-[15px] sm:text-sm  md:text-3xl lg:text-4xl xl:text-5xl mt-8 md:mt-15 lg:mt-20 xl:mt-30 font-black text-center uppercase border-3 lg:border-6 md:border-6 xl:border-6 border-white rounded-full px-4 md:px-6 lg:px-6 xl:px-6 py-1 md:py-4 lg:py-5 xl:py-5 inline-block mx-auto">
      GESTIÓN DE RECLAMOS
    </h2>
<div className="flex flex-col text-left items-start mx-auto">
  <p className="text-xxs-320 text-[16px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl">
    Se dispone de <span className="font-black">formularios y buzones</span> en
  </p>
  <p className="text-xxs-320 text-[16px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl">
    distintas salas de espera del hospital.
  </p>
</div>

    <h2 className="relative bg-black text-md sm:text-lg md:text-4xl lg:text-4xl xl:text-6xl mt-2 md:mt-3 lg:mt-4 xl:mt-4 font-black text-center uppercase  rounded-full px-4 md:px-6 lg:px-6 xl:px-6 py-2 md:py-6 lg:py-6 xl:py-6 inline-block mx-auto z-60 ">
      NOTIFICAR ES FÁCIL Y RÁPIDO
    </h2>

    <div className="w-full flex flex-col justify-center h-full mt-8 md:mt-15 lg:mt-20 xl:mt-25">


      <div className="flex flex-col max-w-8xl  mx-auto gap-4 md:gap-8 lg:gap-10 xl:gap-15    ">
        <div className="ml-7 md:ml-10 lg:ml-0 xl:ml-0">
            {/* numero 1 */}
          <svg
  className="
    absolute
    top-44 -left-14
    md:top-84 md:-left-24
    lg:top-96 lg:-left-32
    xl:top-120 xl:-left-40
    w-25 h-25
    md:w-44 md:h-40
    lg:w-56 lg:h-56
     xl:w-70 xl:h-70
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
    fill="#fff"
    fontSize="11"
    fontWeight="800"
    x="34.93"
    y="13.28"
  >
    01
  </text>
</svg>

        <p className="text-xxs-320 text-[14px]  sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          Cualquier funcionario puede <span className="font-black">informar</span>  
        </p>
          <p className="text-xxs-320 text-[14px]  sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          <span className="font-black">incidentes o eventos</span> adversos a través 
        </p>
          <p className="text-xxs-320 text-[13px]  sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          <span className="font-black"> del link o QR.</span> 
        </p>


        </div>
         <div className="ml-7 md:ml-10 lg:ml-0 xl:ml-0">
                   {/* numero 2 */}
          <svg
  className="
    absolute
    top-62 -left-14
    md:top-115 md:-left-24
    lg:top-130 lg:-left-32
    xl:top-170 xl:-left-40
    w-25 h-25
    md:w-44 md:h-40
    lg:w-56 lg:h-56
     xl:w-70 xl:h-70
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
    fill="#fff"
    fontSize="11"
    fontWeight="800"
    x="34.93"
    y="13.28"
  >
    02
  </text>
</svg>

        <p className="text-xxxs-320 text-[13.5px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          La notificación<span className="font-black"> llega a la Oficina de Calidad</span> 
        </p>
           <p className=" text-xxs-320 text-[14px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
         y <span className="font-black">puede hacerse de forma anónima.</span>
        </p>


        </div>       

  
      </div>
    </div>

  </div>
<div className="flex justify-center mt-0 md:mt-3 xl:mt-5 p-6 md:p-8">
  <div className="flex items-center gap-6 md:gap-10 lg:gap-12 flex-wrap md:flex-nowrap">
    
    {/* URL */}
    <div className="text-left">
      <p className="text-xxs-320 text-[14px] md:text-xl lg:text-3xl xl:text-5xl font-medium leading-tight">
        <a
          href="https://redcap.araucaniasur.cl/surveys/?s=WRY44F8D4T"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white break-all"
        >
          https://redcap.araucaniasur.cl/
        </a>
      </p>

      <p className="text-xxs-320 text-[14px] md:text-xl lg:text-3xl xl:text-5xl font-medium leading-tight">
        <a
          href="https://redcap.araucaniasur.cl/surveys/?s=WRY44F8D4T"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white break-all"
        >
          surveys/?s=WRY44F8D4T
        </a>
      </p>
    </div>

    {/* QR */}
    <div className="flex justify-center">
      <Image
        src="/qr.png"
        alt="Código QR"
        width={350}
        height={350}
        className="w-[75px] h-[75px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[200px]"
      />
    </div>

  </div>
</div>



</div>
  );
};

export default Notificar;