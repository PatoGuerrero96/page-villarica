import React from "react";

const Esteriliza = () => {
  return (
<div className="relative w-full h-full overflow-hidden bg-rojo z-10">
  {/* Círculo azul parcialmente visible */}
<svg
  className="
    absolute 
    top-[3%] -left-[13%]
    md:top-[5%] md:-left-[11%]
    lg:top-[5%] lg:-left-[8%]
    xl:top-[5%] xl:-left-[8%]
    w-28 h-28
    md:w-48 md:h-48
    lg:w-58 lg:h-58
    xl:w-68 xl:h-68
    z-0
  "
  viewBox="0 0 21.25 42.5"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="#105afb"
    d="M21.25,21.25c0,11.74-9.52,21.25-21.25,21.25V0c11.73,0,21.25,9.52,21.25,21.25Z"
  />
</svg>
  {/* Círculo naranja*/}
<svg
  className="
    absolute 
    -top-[2%] -right-[22%]
    md:-top-[2%] md:-right-[12%]
    lg:-top-[2%] lg:-right-[13%]
    xl:-top-[2%]  xl:-right-[11%]
    w-55 h-55
    md:w-70 md:h-100
    lg:w-100 lg:h-130
    xl:w-120 xl:h-160
  "
  viewBox="0 0 22.76 45.97"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
     fill="#ff5d00"
    d="M0,22.98C0,10.28,10.19,0,22.76,0v45.97C10.19,45.97,0,35.68,0,22.98Z"
  />
</svg>

  {/* Círculo verde*/}
<svg
  className="
    absolute 
    bottom-[1%] -right-[9%]
    md: bottom-[1%] md:-right-[5%]
    lg: bottom-[1%] lg:-right-[6%]
    xl: bottom-[1%]  xl:-right-[8%]
    w-20 h-30
    md:w-30 md:h-50
    lg:w-50 lg:h-65
    xl:w-75 xl:h-86
  "
  viewBox="0 0 22.76 45.97"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
     fill="#b5ff63"
    d="M0,22.98C0,10.28,10.19,0,22.76,0v45.97C10.19,45.97,0,35.68,0,22.98Z"
  />
</svg>
  {/* Contenido */}
  <div className="relative px-4 md:px-8 lg:px-16 text-white flex flex-col w-full">
    <h2 className="text-xxs-320 text-sm sm:text-xl md:text-3xl lg:text-4xl xl:text-6xl mt-8 md:mt-15 lg:mt-20 xl:mt-30 font-black text-center uppercase border-3 lg:border-6 md:border-6 xl:border-6 border-white rounded-full px-4 md:px-6 lg:px-6 xl:px-6 py-1 md:py-4 lg:py-5 xl:py-5 inline-block mx-auto">
     COMITÉ DE ÉTICA ASISTENCIAL (CEA)
    </h2>

  <div className="w-full flex flex-col justify-center h-full mt-8 md:mt-15 lg:mt-20 xl:mt-25">


      <div className="flex flex-col max-w-8xl  mx-auto gap-2 md:gap-4 lg:gap-6 xl:gap-10    ">
        <div className="ml-9 md:ml-10 lg:ml-0 xl:ml-0 ">
            {/* numero 1 */}
          <svg
  className="
    absolute
    top-16 -left-14
    md:top-36 md:-left-24
    lg:top-42 lg:-left-32
    xl:top-60 xl:-left-40
     w-25 h-25
    md:w-44 md:h-40
    lg:w-55 lg:h-55
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
    fill="#ffffff"
    fontSize="11"
    fontWeight="800"
    x="34.93"
    y="13.28"
  >
    01
  </text>
</svg>

        <p className="  text-xxxs-320 text-[14px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
          <span className="font-black">Cualquier persona</span> {" ("}profesionales, familias
        </p>
          <p className="  text-xxs-320 text-[13px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
          o usuarios{")"} puede solicitar apoyo al comité.
        </p>



        </div>
                <div className="ml-9 md:ml-10 lg:ml-0 xl:ml-0 ">
            {/* numero 2 */}
          <svg
  className="
    absolute
    top-29 -left-14
    md:top-58 md:-left-24
    lg:top-67 lg:-left-32
    xl:top-94 xl:-left-40
     w-25 h-25
    md:w-44 md:h-40
    lg:w-55 lg:h-55
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
    fill="#ffffff"
    fontSize="11"
    fontWeight="800"
    x="34.93"
    y="13.28"
  >
    02
  </text>
</svg>

        <p className="  text-xxs-320 text-[13.5px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
          <span className="font-black">Quien presenta el caso</span> puede participar en 
        </p>
                <p className="  text-xxs-320 text-[14px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
         la sesión 5 días hábiles del comité.
        </p>
        </div>

                        <div className="ml-9 md:ml-10 lg:ml-0 xl:ml-0 ">
            {/* numero 3 */}
          <svg
  className="
    absolute
    top-41 -left-14
    md:top-80 md:-left-24
    lg:top-90 lg:-left-32
    xl:top-127 xl:-left-40
     w-25 h-25
    md:w-44 md:h-40
    lg:w-55 lg:h-55
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
    fill="#ffffff"
    fontSize="11"
    fontWeight="800"
    x="34.93"
    y="13.28"
  >
    03
  </text>
</svg>

        <p className="  text-xxxs-320 text-[14px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
          <span className="font-black">Completar el formulario QR</span> y enviarlo al 
        </p>
          <p className="  text-xxs-320 text-[14px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
             presidente o miembro del comité.
        </p>

        </div>

                                <div className="ml-9 md:ml-10 lg:ml-0 xl:ml-0 ">
            {/* numero 4 */}
          <svg
  className="
    absolute
    top-53 -left-14
    md:top-102 md:-left-24
    lg:top-114 lg:-left-32
    xl:top-160 xl:-left-40
     w-25 h-25
    md:w-44 md:h-40
    lg:w-55 lg:h-55
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
    fill="#ffffff"
    fontSize="11"
    fontWeight="800"
    x="34.93"
    y="13.28"
  >
    04
  </text>
</svg>

        <p className="  text-xxs-320 text-[13px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
          <span className="font-black">El CEA evalúa el caso</span> y entrega un informe al
        </p>
          <p className="  text-xxs-320 text-[14px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
             solicitante y a la ficha clínica.
        </p>

        </div>

                                        <div className="ml-9 md:ml-10 lg:ml-0 xl:ml-0 ">
            {/* numero 5 */}
          <svg
  className="
    absolute
    top-66 -left-14
    md:top-123 md:-left-24
    lg:top-138 lg:-left-32
    xl:top-194 xl:-left-40
     w-25 h-25
    md:w-44 md:h-40
    lg:w-55 lg:h-55
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
    fill="#ffffff"
    fontSize="11"
    fontWeight="800"

    x="34.93"
    y="13.28"
  >
    05
  </text>
</svg>

        <p className="  text-xxs-320 text-[14px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
          <span className="font-black">El CEA orienta y recomienda</span> para apoyar 
        </p>
          <p className="  text-xxs-320 text-[14px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
             decisiones centradas en el paciente y su 
        </p>
        <p className="  text-xxs-320 text-[14px] sm:text-sm md:text-[25px] lg:text-3xl xl:text-5xl  text-left">
             familia.
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