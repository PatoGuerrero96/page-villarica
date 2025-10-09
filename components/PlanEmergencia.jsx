import React from "react";

const PlanEmergencia = () => {
  return (
<div className="relative w-full h-full overflow-hidden bg-verde-oscuro z-10">

  {/* Círculo rojo parcialmente visible */}
<svg
  className="
    absolute 
    top-38 -right-10
    md:top-60 md:-right-15
    lg:top-75 lg:-right-15
    xl:top-100 xl:-right-10
    w-20 h-20
    md:w-40 md:h-50
    lg:w-36 lg:h-46
    xl:w-40 xl:h-80
  "
  viewBox="0 0 22.76 45.97"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="#e72d45"
    d="M0,22.98C0,10.28,10.19,0,22.76,0v45.97C10.19,45.97,0,35.68,0,22.98Z"
  />
</svg>
  {/* Círculo azul parcialmente visible */}
<svg
  className="
    absolute 
    top-125 -right-6
    md:top-230 md:-right-15
    lg:top-255 lg:-right-12
    xl:top-360 xl:-right-10
    w-20 h-20
    md:w-40 md:h-40
    lg:w-30 lg:h-38
    xl:w-25 xl:h-60
  "
  viewBox="0 0 22.76 45.97"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
     fill="#105afb"
    d="M0,22.98C0,10.28,10.19,0,22.76,0v45.97C10.19,45.97,0,35.68,0,22.98Z"
  />
</svg>

  {/* circulo amarillo */}
  <svg
  className="
    absolute 
     top-22 right-5
     md:top-40 md:right-20
    lg:top-60 lg:right-20
    xl:top-50 xl:right-30
    w-10 h-10
    md:w-15 md:h-35
    lg:w-18 lg:h-22
    xl:w-30 xl:h-50
  "
  viewBox="0 0 37.22 37.22"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
     fill="#FFF200"
    cx="18.61"
    cy="18.61"
    r="18.61"

  />
</svg>
  {/* forma naranja */}
<svg
  className="
    absolute 
    top-85 -right-18
    md:top-150 md:-right-23
    lg:top-170 lg:-right-25
    xl:top-240 xl:-right-35
    w-35 h-35
    md:w-48 md:h-68
    lg:w-50 lg:h-68
    xl:w-70 xl:h-110
  "
  viewBox="0 0 19.26 67.42"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="#ff5d00"
    d="M9.63,0h0c5.32,0,9.63,4.31,9.63,9.63v48.16c0,5.32-4.31,9.63-9.63,9.63h0c-5.32,0-9.63-4.31-9.63-9.63V9.63C0,4.31,4.31,0,9.63,0Z"
  />
</svg>

  {/* Contenido */}
  <div className="relative px-4 md:px-8 lg:px-25 text-black flex flex-col w-full">
    <h2 className=" text-[13px] sm:text-sm  md:text-3xl lg:text-4xl xl:text-5xl mt-8 md:mt-15 lg:mt-20 xl:mt-30 font-black text-center uppercase border-3 lg:border-6 md:border-6 xl:border-6 border-black rounded-full px-4 md:px-6 lg:px-6 xl:px-6 py-1 md:py-4 lg:py-5 xl:py-5 inline-block mx-auto">
      PLAN DE EMERGENCIA Y EVACUACIÓN
    </h2>

    <div className="w-full  flex flex-col justify-center  mt-8 md:mt-15 lg:mt-20 xl:mt-30">


      <div className="flex flex-col max-w-8xl  mx-auto gap-4 md:gap-8 lg:gap-10 xl:gap-15    ">
        <div className="ml-9 md:ml-20 lg:ml-10 xl:ml-25">
            {/* numero 1 */}
          <svg
  className="
    absolute
    top-15 -left-16
    md:top-37 md:-left-27
    lg:top-43 lg:-left-32
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
    fill="#ffffffff"
    d="M45.67,19.26H9.63C4.31,19.26,0,14.95,0,9.63h0C0,4.31,4.31,0,9.63,0h36.04c5.32,0,9.63,4.31,9.63,9.63h0c0,5.32-4.31,9.63-9.63,9.63Z"
  />
  <text
    fill="#000000"
    fontSize="11"
    fontWeight="700"
    fontFamily="Arial, sans-serif"
    x="34.93"
    y="13.28"
  >
    01
  </text>
</svg>

        <p className=" text-sm sm:text-md md:text-3xl lg:text-4xl xl:text-6xl  text-left mb-1 xl:mb-3 font-extrabold  ">
        EN CASO DE <span className="font-black">INCENDIO</span>     
        </p>
        <p className="text-[11px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
          Usa extintores si el fuego es pequeño, si se 
        </p>
         <p className="text-[10px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
           propaga, avisa de inmediato y evacúa a zona 
        </p>
          <p className="text-[11px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
           segura.
        </p>

        </div>
         <div className="ml-9 md:ml-20 lg:ml-10 xl:ml-25">
                   {/* numero 2 */}
          <svg
  className="
    absolute
    top-36 -left-16
    md:top-82 md:-left-27
    lg:top-90 lg:-left-32
    xl:top-145 xl:-left-40
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
    fill="#ffffffff"
    d="M45.67,19.26H9.63C4.31,19.26,0,14.95,0,9.63h0C0,4.31,4.31,0,9.63,0h36.04c5.32,0,9.63,4.31,9.63,9.63h0c0,5.32-4.31,9.63-9.63,9.63Z"
  />
  <text
    fill="#000000"
    fontSize="11"
    fontWeight="700"
    fontFamily="Arial, sans-serif"
    x="34.93"
    y="13.28"
  >
    02
  </text>
</svg>


        <p className="text-sm sm:text-md md:text-3xl lg:text-4xl xl:text-6xl  text-left mb-1 xl:mb-3 font-extrabold ">
        DURANTE UN<span className="font-black"> SISMO</span>     
        </p>
        <p className="text-[10px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
        Si es <span className="font-extrabold">leve</span>, mantén la <span className="font-extrabold">calma y reporta daños</span>. Si es
        </p>
         <p className="text-[11px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
           <span className="font-extrabold">fuerte</span >, protégete bajo <span className="font-extrabold">estructuras firmes</span> y
        </p>
          <p className="text-[11px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
          sigue las<span className="font-extrabold"> instrucciones de emergencia</span>.
        </p>

        </div>       
        <div className="ml-9 md:ml-20 lg:ml-10 xl:ml-25  mt-10 md:mt-15 lg:mt-20 xl:mt-40">
                                     {/* numero 3 */}
          <svg
  className="
    absolute
    top-68 -left-16
    md:top-140 md:-left-27
    lg:top-158 lg:-left-32
   xl:top-252 xl:-left-40
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
    fill="#ffffffff"
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
    03
  </text>
</svg>
        <p className="text-sm sm:text-md md:text-3xl lg:text-4xl xl:text-6xl  text-left mb-1 xl:mb-3 font-extrabold ">
        ANTE <span className="font-black">INUNDACIÓN</span> O <span className="font-black">FUGA DE GAS</span>   
        </p>
        <p className="text-[11px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
          <span className="font-extrabold">Da aviso a bomberos</span>y operaciones. Si es
        </p>
         <p className="text-[11px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
           posible, <span className="font-extrabold">corta el suministro y alerta a los</span>
        </p>
          <p className="text-[11px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
          <span className="font-extrabold">demás</span>.
        </p>

        </div>
         <div className="ml-9 md:ml-20 lg:ml-10 xl:ml-25">
                                     {/* numero 4 */}
          <svg
  className="
    absolute
    top-90 -left-16
    md:top-180 md:-left-27
    lg:top-208 lg:-left-32
   xl:top-320 xl:-left-40
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
    fill="#ffffff"
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
    04
  </text>
</svg>
        <p className="text-sm sm:text-md md:text-3xl lg:text-4xl xl:text-6xl  text-left mb-1 xl:mb-3 font-extrabold ">
        SI HAY <span className="font-black">ERUPCIÓN VOLCÁNICA</span>     
        </p>
        <p className="text-[11px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
        Sigue simpre las <span className="font-extrabold">indicaciones de jefaturas y </span>
        </p>
         <p className="text-[11px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
          <span className="font-extrabold">coordinadores</span>. Mantén la <span className="font-extrabold">calma y coopera</span>
        </p>
          <p className="text-[11px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
           con tu equipo.
        </p>

        </div>
  
      </div>
    </div>

  </div>
  <div className="md:mt-50 mt-30">

  </div>
</div>

  );
};

export default PlanEmergencia;