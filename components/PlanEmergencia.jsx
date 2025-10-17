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
    top-[50%] -right-6
    md:top-[52%] md:-right-15
    lg:top-[55%] lg:-right-12
    xl:top-[56%] xl:-right-10
    w-20 h-20
    md:w-40 md:h-40
    lg:w-30 lg:h-42
    xl:w-35 xl:h-60
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
    w-35 h-45
    md:w-48 md:h-78
    lg:w-50 lg:h-87
    xl:w-70 xl:h-120
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
        <div className="ml-8 md:ml-20 lg:ml-10 xl:ml-20">
            {/* numero 1 */}
          <svg
  className="
    absolute
    top-16 -left-14
    md:top-32 md:-left-27
    lg:top-40 lg:-left-32
    xl:top-66 xl:-left-40
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
    fill="#ffffffff"
    d="M45.67,19.26H9.63C4.31,19.26,0,14.95,0,9.63h0C0,4.31,4.31,0,9.63,0h36.04c5.32,0,9.63,4.31,9.63,9.63h0c0,5.32-4.31,9.63-9.63,9.63Z"
  />
  <text
    fill="#000000"
    fontSize="11"
    fontWeight="800"
    x="34.93"
    y="13.28"
  >
    01
  </text>
</svg>

        <p className=" text-[16px] sm:text-md md:text-3xl lg:text-4xl xl:text-6xl  text-left mb-1 xl:mb-3 font-extrabold  ">
        <span className="font-black">EN CASO DE  INCENDIO</span>     
        </p>
        <p className="text-xxs-320 text-[14px] sm:text-xs md:text-2xl lg:text-2xl xl:text-[43px] text-left ">
         <span className="font-black">Fuego inicial:</span> Usa extintores o una red
        </p>
          <p className="text-xxs-320 text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
            húmeda para apagarlo.
        </p>
          <p className=" mt-2 md:mt-4 lg:mt-6 text-xxs-320  text-[13.5px] sm:text-xs md:text-[22px] lg:text-2xl xl:text-[43px] text-left ">
         <span className="font-black">Incendio propagado:</span> Llama a los bomberos 
        </p>
          <p className="text-xxs-320  text-[13.5px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
        <strong className="font-black">(132)</strong> y avisa a quienes estén cerca.
        </p>

          <p className=" mt-2 md:mt-4 lg:mt-6 text-xxs-320  text-[14px] sm:text-xs md:text-[22px] lg:text-3xl xl:text-[41px] text-left ">
         <span className="font-black">Riesgo inminente:</span> Evacúa hacia el frontis 
        </p>
          <p className="text-xxs-320  text-[14px] sm:text-xs md:text-[22px] lg:text-3xl xl:text-[41px] text-left ">
          del hospital y sigue las instrucciones
        </p>
                  <p className="text-xxs-320  text-[14px] sm:text-xs md:text-[22px] lg:text-3xl xl:text-[41px] text-left ">
        del personal de emergencia.
        </p>


        </div>
         <div className="ml-8 md:ml-20 lg:ml-10 xl:ml-20">
                   {/* numero 2 */}
          <svg
  className="
    absolute
    top-67 -left-14
    md:top-110 md:-left-27
    lg:top-136 lg:-left-32
    xl:top-200 xl:-left-40
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
    fill="#ffffffff"
    d="M45.67,19.26H9.63C4.31,19.26,0,14.95,0,9.63h0C0,4.31,4.31,0,9.63,0h36.04c5.32,0,9.63,4.31,9.63,9.63h0c0,5.32-4.31,9.63-9.63,9.63Z"
  />
  <text
    fill="#000000"
    fontSize="11"
    fontWeight="800"
    x="34.93"
    y="13.28"
  >
    02
  </text>
</svg>


        <p className="text-[16px] sm:text-md md:text-3xl lg:text-4xl xl:text-6xl  text-left mb-1 xl:mb-3 font-extrabold ">
        <span className="font-black"> DURANTE UN SISMO</span>     
        </p>
          <p className=" mt-2 md:mt-4 lg:mt-6 text-xxs-320  text-[14px] sm:text-xs md:text-[22px] lg:text-3xl xl:text-[40px] text-left ">
         <span className="font-black">Sismo leve:</span> Sigue trabajando y avisa solo si 
        </p>
       <p className="  md:mt-4 lg:mt-6 text-xxs-320  text-[14px] sm:text-xs md:text-[22px] lg:text-3xl xl:text-[40px] text-left ">
       hay daños.
        </p>
        
          <p className=" mt-2 md:mt-4 lg:mt-6 text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-[41px] text-left ">
         <span className="font-black">Sismo fuerte:</span> Refúgiate bajo estructuras 
        </p>
          <p className="text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-[41px] text-left ">
         firmes y aléjate de objetos que puedan 
        </p>
          <p className=" text-xxs-320  text-[14px] sm:text-xs md:text-[22px] lg:text-3xl xl:text-[41px] text-left ">
          caer. <span className="font-bold">Mantén la calma y sigue las </span> 
        </p>
       <p className="font-bold text-xxs-320  text-[14px] sm:text-xs md:text-[22px] lg:text-3xl xl:text-[41px] text-left ">
    instrucciones de jefatura.
        </p>

        </div>       
        <div className="ml-8 md:ml-20 lg:ml-10 xl:ml-20  ">
                                     {/* numero 3 */}
          <svg
  className="
    absolute
    top-112 -left-14
    md:top-186 md:-left-27
    lg:top-226 lg:-left-32
   xl:top-322 xl:-left-40
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
    fill="#ffffffff"
    d="M45.67,19.26H9.63C4.31,19.26,0,14.95,0,9.63h0C0,4.31,4.31,0,9.63,0h36.04c5.32,0,9.63,4.31,9.63,9.63h0c0,5.32-4.31,9.63-9.63,9.63Z"
  />
  <text
    fill="#00000"
    fontSize="11"
    fontWeight="800"

    x="34.93"
    y="13.28"
  >
    03
  </text>
</svg>
        <p className="text-[16px] sm:text-md md:text-3xl lg:text-4xl xl:text-6xl  text-left mb-1 xl:mb-3 font-extrabold ">
       <span className="font-black">ACTIVIDAD VOLCÁNICA</span>
        </p>
        <p className="text-xxs-320  text-[13.5px] sm:text-xs md:text-2xl lg:text-3xl xl:text-[44px] text-left ">
          Sigue siempre las indicaciones de jefaturas 
        </p>
         <p className="text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-[44px] text-left ">
           de acuerdo con el nivel de alerta {"("}verde,</p>
          <p className="text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-[44px] text-left ">
          amarillo, naranja o rojo{")"} <span className="font-bold italic">Mantén la calma.</span> 
        </p>

        </div>
         <div className="ml-8 md:ml-20 lg:ml-10 xl:ml-20">
                                     {/* numero 4 */}
          <svg
  className="
    absolute
    top-139 -left-14
    md:top-228 md:-left-27
    lg:top-275 lg:-left-32
   xl:top-394 xl:-left-40
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
    fill="#ffffff"
    d="M45.67,19.26H9.63C4.31,19.26,0,14.95,0,9.63h0C0,4.31,4.31,0,9.63,0h36.04c5.32,0,9.63,4.31,9.63,9.63h0c0,5.32-4.31,9.63-9.63,9.63Z"
  />
  <text
    fill="#00000"
    fontSize="11"
    fontWeight="800"
    x="34.93"
    y="13.28"
  >
    04
  </text>
</svg>
        <p className="text-[16px] sm:text-md md:text-3xl lg:text-4xl xl:text-6xl  text-left mb-1 xl:mb-3 font-extrabold ">
        <span className="font-black">INUNDACIÓN</span>     
        </p>
        <p className=" mt-2 md:mt-4 lg:mt-6 text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
         <span className="font-black">Avisar de inmediato:</span> Al departamento de
        </p>
          <p className="text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
          operaciones.
        </p>
          <p className=" mt-2 md:mt-4 lg:mt-6  text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-[46px] text-left ">
         <span className="font-black">Departamento de operaciones:</span> Corta el 
        </p>
          <p className="text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
          agua y coordina la reparación.
        </p>
          <p className=" mt-2 md:mt-4 lg:mt-6  text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-[44px] text-left ">
         <span className="font-black">Evacuar:</span>El área afectada y esperar 
        </p>
          <p className="text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-[45px] text-left ">
        autorización para volver.
        </p>


        </div>
                 <div className="ml-8 md:ml-20 lg:ml-10 xl:ml-20">
                                     {/* numero 5 */}
          <svg
  className="
    absolute
    top-186 -left-14
    md:top-305 md:-left-27
    lg:top-367 lg:-left-32
   xl:top-518 xl:-left-40
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
    fill="#ffffff"
    d="M45.67,19.26H9.63C4.31,19.26,0,14.95,0,9.63h0C0,4.31,4.31,0,9.63,0h36.04c5.32,0,9.63,4.31,9.63,9.63h0c0,5.32-4.31,9.63-9.63,9.63Z"
  />
  <text
    fill="#00000"
    fontSize="11"
    fontWeight="800"
 
    x="34.93"
    y="13.28"
  >
    05
  </text>
</svg>
        <p className="text-[16px] sm:text-md md:text-3xl lg:text-4xl xl:text-6xl  text-left mb-1 xl:mb-3 font-extrabold ">
        <span className="font-black">FUGA DE GAS</span>     
        </p>
          <p className=" mt-2 md:mt-4 lg:mt-6  text-xxs-320  text-[14px] sm:text-xs md:text-[22px] lg:text-3xl xl:text-[41px] text-left ">
         <span className="font-black">Avisar de inmediato:</span> Departamento de 
        </p>
          <p className="text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-[45px] text-left ">
         Operaciones y llamar a bomberos <span className="font-bold">(132).</span>
        </p>

          <p className=" mt-2 md:mt-4 lg:mt-6  text-xxs-320  text-[13.5px] sm:text-xs md:text-2xl lg:text-3xl xl:text-5xl text-left ">
         <span className="font-black">Evacuar:</span> Hacia una zona segura y ventilada
        </p>
          <p className=" mt-2 md:mt-4 lg:mt-6  text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-[45px] text-left ">
         <span className="font-black">Operaciones debe cortar el gas:</span> si no hay
        </p>
         <p className=" md:mt-4 lg:mt-6  text-xxs-320  text-[14px] sm:text-xs md:text-2xl lg:text-3xl xl:text-[45px] text-left ">
          riesgo.
        </p>
                  <p className=" mt-2 md:mt-4 lg:mt-6 text-xxs-320  text-[13.5px] sm:text-xs md:text-[22px] lg:text-3xl xl:text-[42px] text-left ">
         <span className="font-black">Mantener distancia:</span> No volver hasta que se 
        </p>
          <p className="text-xxs-320  text-[13.5px] sm:text-xs md:text-2xl lg:text-3xl xl:text-[45px] text-left ">
        controle la situación.
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