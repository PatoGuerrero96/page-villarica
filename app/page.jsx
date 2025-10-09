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
            {/* circulo rojo */}
  <svg
  className="
    absolute 
    top-143 right-10
    md:top-257 md:right-30
    lg:top-350 lg:right-30
    xl:top-407 xl:right-70
    w-11 h-11
    md:w-25 md:h-25
    lg:w-30 lg:h-30
    xl:w-40 xl:h-40
    z-50
  "
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
              className="text-2xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-9xl font-bold text-white"
            >
              JUNTOS SOMOS
            </motion.p>

            <motion.p
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="text-2xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-9xl font-extrabold text-white"
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
    font-bold 
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
  className="text-azul text-xs md:text-2xl lg:text-3xl xl:text-5xl"
>
  acreditación <span className="font-bold">2025</span>
</motion.p>
  </div>
</div>


  </div>
</div>

      <div className="">

        <CodigoAzul />
        <Identificacion />
        <PlanEmergencia />
        <FichaClinica />
         <GestionReclamos />
         <AccidenteFluidos />
         <Responsabilidad />
         <Etica />
         <Esteriliza />
         <Notificar />
         <Seccion />

      </div>
</main>



  );
}
