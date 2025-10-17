import React from "react";

const Responsabilidad = () => {
  return (
<div className="relative w-full h-full overflow-hidden bg-amarillo z-10">
  {/* Círculo azul parcialmente visible */}
<svg
  className="
    absolute 
    top-[65%] -left-[2%]
    md:top-[65%] md:-left-[2%]
    lg:top-[70%] lg:-left-[0%]
    xl:top-[70%] xl:-left-[4%]
    w-10 h-15
    md:w-20 md:h-36
    lg:w-18 lg:h-36
    xl:w-50 xl:h-50
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
  {/* Contenido */}
  <div className="relative px-4 md:px-8 lg:px-16 text-black flex flex-col w-full">
<h2 className="text-xxs-320 text-sm sm:text-lg md:text-4xl lg:text-4xl xl:text-5xl mt-8 md:mt-15 lg:mt-20 xl:mt-30 font-black text-center uppercase border-3 lg:border-6 md:border-6 xl:border-6 border-black rounded-full px-6 md:px-8 lg:px-10 xl:px-12 py-2 md:py-4 lg:py-5 xl:py-6 inline-block mx-auto leading-tight">
  ACCIDENTE CON MEDICAMENTOS<br />
  ANTINEOPLÁSICOS
</h2>


    <div className="w-full flex flex-col justify-center h-full mt-8 md:mt-15 lg:mt-20 xl:mt-25">


      <div className="flex flex-col max-w-8xl  mx-auto gap-2 md:gap-5 lg:gap-6 xl:gap-8    ">
        <div className="ml-8 md:ml-14 lg:ml-0 xl:ml-0">


        <p className="text-xxs-320 text-[12.3px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          <span className="font-black">Mantén la calma</span> e identifica si la   contaminación
        </p>
          <p className="text-xxs-320 text-[13px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
 es  en superficie o en  persona.
        </p>




        </div>
         <div className="ml-8 md:ml-14 lg:ml-0 xl:ml-0">


     <p className="text-xxs-320 text-[13.5px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          <span className="font-black">Superficie: </span> Delimita el área y usa el kit de 

        </p>
            <p className="text-xxs-320 text-[14px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
derrames con los EPP.
        </p>
        

        </div>  
                 <div className="ml-8 md:ml-14 lg:ml-0 xl:ml-0">


     <p className="text-xxs-320 text-[14px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          <span className="font-black">Personas: </span>Lava con abundante agua (10-15 

        </p>
             <p className="text-xxs-320 text-[14px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
                min), enjuaga ojos con suero (15 min) y 
        </p>
                     <p className="text-xxs-320 text-[14px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
               retira ropa de ser necesario
        </p>

        </div>  
                                 <div className="ml-8 md:ml-14 lg:ml-0 xl:ml-0">


     <p className="text-xxs-320 text-[14px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          <span className="font-black">Pacientes: </span>
Avísale al médico tratante.
        </p>

        </div>      
                         <div className="ml-8 md:ml-14 lg:ml-0 xl:ml-0">


     <p className="text-xxs-320 text-[14px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
          <span className="font-black">Funcionarios: </span>Informa a jefatura, acude a
        </p>
             <p className="text-xxs-320 text-[14px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
              Urgencias, completa la DIAT y espera 
        </p>
          <p className="text-xxs-320 text-[14px] sm:text-sm md:text-2xl lg:text-3xl xl:text-5xl  text-left">
              atención.
        </p>

        </div>       

  
      </div>
    </div>

  </div>
      <div className="mt-25 xl:mt-30">

  </div>
</div>

  );
};

export default Responsabilidad;