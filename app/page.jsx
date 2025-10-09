"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CodigoAzul from "../components/CodigoAzul"; 
import PlanEmergencia from "@/components/PlanEmergencia";
import FichaClinica from "@/components/FichaClinica";
import GestionReclamos from "@/components/GestionReclamos";
import AccidenteFluidos from "@/components/AccidenteFluidos";
import Responsabilidad from "@/components/Responsabilidad";
import Notificar from "@/components/Notificar";
import Seccion from "@/components/Seccion";
import Etica from "@/components/Etica";
import Esteriliza from "@/components/Esteriliza";
import Identificacion from "@/components/Identificacion";
export default function Home() {
  return (
<main>

<div className="relative w-full">
  {/* Fondo texturizado */}
<Image
  src="/fondo.png"
  alt="Fondo texturizado"
  fill
  className="object-cover -z-10 h-[30vh] md:h-[60vh] lg:h-screen"
  priority
  quality={100}
/>



{/* Contenedor principal con altura responsiva */}
<div className="relative z-10 w-full h-[30vh] md:h-[60vh] lg:h-screen flex justify-center items-center">


    {/* Texto centrado */}
       <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
          <div className="text-left">
            <motion.div
  initial={{ width: 0, opacity: 0 }}
  animate={{ width: "45%", opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="h-[2px] md:h-[6px] xl:h-[10px] rounded-lg bg-verde mb-0 md:mb-5 xl:mb-15"
/>


     {/* Texto animado */}
            <motion.p
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-extrabold text-2xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-[120px] text-white"
            >
              JUNTOS SOMOS
            </motion.p>

            <motion.p
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="font-extrabold text-2xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-[120px]  text-white"
            >
              MÁS CALIDAD
            </motion.p>
          </div>
           </div>
<motion.span
  initial={{ y: -100, opacity: 0 }}   
  animate={{ y: 0, opacity: 1 }}      
  transition={{ duration: 1, ease: "easeOut" }} 
  className="
    absolute 
    top-5 left-5
    md:top-10 md:left-10
    lg:top-15 lg:left-10
    xl:top-25 xl:left-25
    text-white 
    text-sm md:text-2xl lg:text-4xl xl:text-[47px]
     font-light
    [writing-mode:vertical-rl] rotate-180
    
  "
>
  Hospital Villarrica
</motion.span>



{/* Texto inferior */}
<div className="absolute bottom-6 left-4 md:bottom-15 md:left-8 lg:bottom-15 lg:left-20 xl:bottom-20 xl:left-25 z-20">
  <div className="text-left">
   
<motion.div
  initial={{ scaleX: 0, opacity: 0 }}          
  animate={{ scaleX: 1, opacity: 1 }}          
  transition={{ duration: 0.8, ease: "easeOut" }} 
  className="w-[45%] h-[2px] md:h-[6px] xl:h-[10px] bg-azul mb-1 md:mb-3 w-full rounded-lg origin-left"
></motion.div>


<motion.p
  initial={{ x: -100, opacity: 0 }}  
  animate={{ x: 0, opacity: 1 }}     
  transition={{ duration: 1, ease: "easeOut" }}  
  className="font-bold text-azul text-xs md:text-2xl lg:text-3xl xl:text-5xl"
>
  acreditación <span className="font-bold">2025</span>
</motion.p>
  </div>
</div>


  </div>
</div>

      <div className="relative ">
    <CodigoAzul />
{/* circulo rojo*/}
<div className="bg-azul">
<svg
  className="w-12 h-12 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-48 xl:h-48 ml-auto  mr-4 md:mr-20 xl:mr-60   -mt-10 -mb-5 md:-mt-10 md:-mb-10 xl:-mt-1 xl:-mb-20 relative z-50"
  viewBox="0 0 37.22 37.22"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    fill="#e72d45"
    cx="18.61"
    cy="18.61"
    r="18.61"
  />
</svg>
</div>
    <Identificacion />
    <div className="bg-verde">
    {/* circulo morado*/}
<svg
  className="w-8 h-8 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-28 xl:h-28 ml-auto  mr-4 md:mr-20 xl:mr-60   -mt-10 -mb-5 md:-mt-10 md:-mb-10 xl:-mt-4 xl:-mb-15 relative z-50"
  viewBox="0 0 37.22 37.22"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    fill="#bc5ffb"
    cx="18.61"
    cy="18.61"
    r="18.61"
  />
</svg>
</div>
    <PlanEmergencia />
    <FichaClinica />
    <GestionReclamos />
    <AccidenteFluidos />
    <Responsabilidad />
    {/* circulo Morado*/}
<div className="bg-verde flex justify-between items-center -mt-10 -mb-5 md:-mt-10 md:-mb-10 xl:-mt-1 xl:-mb-30 relative z-50 py-2 md:py-4 xl:py-8">
  {/* Contenedor de círculos izquierda */}
  <div className="flex gap-2 md:gap-4 lg:gap-6 xl:gap-8 ml-4 md:ml-20 xl:ml-20">
    {/* Primer círculo izquierda */}
    <svg
      className="w-8 h-8 md:w-18 md:h-18 lg:w-18 lg:h-18 xl:w-26 xl:h-26 transform -translate-y-4/5"
      viewBox="0 0 37.22 37.22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
       fill="#e62b49"
        cx="18.61"
        cy="18.61"
        r="18.61"
      />
    </svg>
    
    {/* Segundo círculo izquierda */}
    <svg
      className="w-10 h-10 md:w-18 md:h-18 lg:w-18 lg:h-18 xl:w-30 xl:h-30 transform -translate-y-5/6"
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
  </div>

  {/* Círculo derecha */}
  <svg
    className="w-10 h-10 md:w-18 md:h-18 lg:w-18 lg:h-18 xl:w-36 xl:h-36 mr-4 md:mr-20 xl:mr-60 transform -translate-y-4/5"
    viewBox="0 0 37.22 37.22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      fill="#bc5ffb"
      cx="18.61"
      cy="18.61"
      r="18.61"
    />
  </svg>
</div>

    <Etica />
        <div className="bg-verde">

<svg
  className="w-30 h-30 md:w-50 md:h-50 lg:w-60 lg:h-60 xl:w-80 xl:h-80 ml-auto  mr-0 md:mr-0 xl:mr-0  -mt-10 -mb-14  md:-mt-20 md:-mb-25  lg:-mt-20 lg:-mb-30  xl:-mt-30 xl:-mb-40 relative z-100"
  viewBox="0 0 67.42 19.26"
  xmlns="http://www.w3.org/2000/svg"
>
  <path fill="#fff200" d="M67.42,19.26H9.63C4.31,19.26,0,14.95,0,9.63h0C0,4.31,4.31,0,9.63,0h57.79v19.26Z"/>
</svg>
</div>
    <Esteriliza />
    {/* circulo verde*/}
<div className="bg-verde-oscuro">
<svg
  className="w-12 h-12 md:w-30 md:h-30 lg:w-30 lg:h-30 xl:w-50 xl:h-50 ml-auto  mr-4 md:mr-20 xl:mr-100   -mt-5 -mb-5 md:-mt-10 md:-mb-14 xl:-mt-1 xl:-mb-25 relative z-50"
  viewBox="0 0 37.22 37.22"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    fill="#e72d45"
    cx="18.61"
    cy="18.61"
    r="18.61"
  />
</svg>

</div>
    <Notificar />
    <Seccion />
  </div>
</main>



  );
}
