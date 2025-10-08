
import React from "react";
import Image from "next/image";
const Notificar = () => {
  return (
<div className="relative w-full h-full overflow-hidden bg-azul z-10">
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
  {/* Contenido */}
  <div className="relative px-4 md:px-8 lg:px-16 text-white flex flex-col w-full">
    <h2 className="bg-black text-md sm:text-lg md:text-4xl lg:text-4xl xl:text-5xl mt-5 md:mt-15 lg:mt-20 xl:mt-10 font-bold text-center uppercase  rounded-full px-4 md:px-6 lg:px-6 xl:px-6 py-2 md:py-6 lg:py-6 xl:py-6 inline-block mx-auto">
      NOTIFICAR ES FÁCIL Y RÁPIDO
    </h2>

    <div className="w-full flex flex-col justify-center h-full mt-8 md:mt-15 lg:mt-20 xl:mt-25">


      <div className="flex flex-col max-w-8xl  mx-auto gap-4 md:gap-8 lg:gap-10 xl:gap-15    ">
        <div className="ml-7 md:ml-10 lg:ml-0 xl:ml-0">
            {/* numero 1 */}
          <svg
  className="
    absolute
    top-14 -left-16
    md:top-38 md:-left-27
    lg:top-45 lg:-left-32
    xl:top-40 xl:-left-40
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

        <p className="text-[12px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          Cualquier funcionario puede <strong>informar</strong>  
        </p>
          <p className="text-[11.5px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          <strong>incidentes o eventos</strong> adversos a través del 
        </p>
          <p className="text-[12px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          <strong>link o QR.</strong> 
        </p>


        </div>
         <div className="ml-7 md:ml-10 lg:ml-0 xl:ml-0">
                   {/* numero 2 */}
          <svg
  className="
    absolute
    top-30 -left-16
    md:top-65 md:-left-27
    lg:top-74 lg:-left-32
    xl:top-90 xl:-left-40
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

        <p className="text-[11px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          La notificación<strong> llega a la Oficina de Calidad</strong> y
        </p>
           <p className="   text-[11.5px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
         <strong>puede hacerse de forma anónima.</strong>
        </p>


        </div>       

  
      </div>
    </div>

  </div>
<div className="flex flex-row items-center justify-center ml-4 md:ml-10 lg:ml-6 xl:ml-20 gap-2 p-8 flex-wrap md:flex-nowrap mt-0 md:mt-3 xl:mt-5">
  {/* Imagen QR */}
  <div className="flex justify-center md:justify-end w-auto">
    <Image
      src="/qr.png"
      alt="Código QR"
      width={350}       // Tamaño por defecto (celular)
      height={350}
      className="md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] xl:w-[220px] xl:h-[220px] w-[80px] h-[80px]" // cambia en pantallas grandes
    />
  </div>

  {/* Enlace */}
  <div className="text-left">
    <p className="text-xs md:text-xl lg:text-3xl xl:text-5xl font-medium leading-tight">
      <a
        href="https://redcap.araucaniasur.cl/surveys/?s=WRY44F8D4T"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white break-all"
      >
        https://redcap.
      </a>
    </p>
    <p className="text-xs md:text-xl lg:text-3xl xl:text-5xl font-medium leading-tight">
      <a
        href="https://redcap.araucaniasur.cl/surveys/?s=WRY44F8D4T"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white break-all"
      >
        araucaniasur.cl/
      </a>
    </p>
    <p className="text-xs md:text-xl lg:text-3xl xl:text-5xl font-medium leading-tight">
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
</div>


</div>
  );
};

export default Notificar;