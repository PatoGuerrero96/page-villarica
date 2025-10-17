import React from "react";
import Image from "next/image";
const Seccion = () => {
  return (
<div className="relative w-full">
  <span className="

  absolute 
  top-4 left-5          /* Celulares */
  md:top-10 md:left-10   /* Tablets */
  lg:top-10 lg:left-10   /* Tablets */
  xl:top-15 xl:left-25   /* Escritorio */
  text-white 
  text-[11px] md:text-2xl lg:text-3xl xl:text-[47px]
  font-normal
  [writing-mode:vertical-rl] rotate-180
">
  Hospital Villarrica
</span>
<div className="absolute bottom-2 left-4 md:bottom-10 md:left-8 lg:bottom-10 lg:left-10 xl:bottom-20 xl:left-25 z-20">
  <div className="text-left">
    {/* Flecha / Línea arriba */}
    <div className="w-[110%] h-[2px] md:h-[6px] xl:h-[10px] bg-azul mb-2 md:mb-3 rounded-lg"></div>

    {/* Texto */}
    <p className="text-azul text-xxxs-320 text-[14px] md:text-2xl lg:text-3xl xl:text-4xl leading-tight">
      acreditación
    </p>
    <p className="text-azul text-xxxs-320 text-[14px] md:text-2xl lg:text-3xl xl:text-4xl font-black leading-tight">
      2025–2026
    </p>
  </div>
</div>

  {/* Fondo texturizado */}
<Image
  src="/bottom.png"
  alt="Fondo texturizado"
  width={2560}
  height={1080}
  className="object-cover -z-10 "
  priority
  quality={100}
/>


  </div>

  );
};

export default Seccion;