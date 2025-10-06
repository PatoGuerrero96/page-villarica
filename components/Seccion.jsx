import React from "react";
import Image from "next/image";
const Seccion = () => {
  return (
<div className="relative w-full">
  {/* Fondo texturizado */}
<Image
  src="/fondoseccion.png"
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