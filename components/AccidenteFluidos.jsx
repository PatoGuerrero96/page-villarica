import React from "react";

const AccidenteFluidos = () => {
  return (
<div className="relative w-full h-[45vh] md:h-[50vh] lg:h-[55vh] overflow-hidden bg-naranjo py-5 md:py-24 z-10">
  {/* Círculo rojo parcialmente visible */}
  <div className="absolute top-8 md:top-12 right-0 w-2/3 sm:w-1/4 h-40 sm:h-48 md:h-56 overflow-hidden">
    <div className="relative w-full h-full">
      <svg
        className="absolute -right-5/9 w-full h-full" 
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill="#ea2747" />
      </svg>
    </div>
  </div>

  {/* Contenido */}
  <div className="relative px-4 md:px-8 lg:px-16 text-white flex flex-col gap-6 w-full h-full">
    <h2 className="text-4xl md:text-5xl font-bold text-center uppercase border-2 border-white rounded-full px-6 py-2 inline-block mx-auto">
      Código Azul
    </h2>

    <div className="w-full flex flex-col gap-4 justify-center h-full">
      <p className="text-2xl md:text-3xl font-medium text-center">
        Pide ayuda de inmediato
      </p>

      <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
        <p className="text-xl md:text-2xl text-left lg:text-justify">
          Actívalo si la persona <strong>no se mueve, no responde o no respira</strong>.
        </p>
        <p className="text-xl md:text-2xl text-left lg:text-justify">
          Llama o avisa en voz alta indicando: <em>“Código Azul – niño o adulto – lugar del hospital”</em>
        </p>
        <p className="text-xl md:text-2xl text-left lg:text-justify">
          Mientras llega el equipo, <strong>acompaña y ayuda al paciente</strong> si sabes cómo hacerlo.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default AccidenteFluidos;