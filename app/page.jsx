import Image from "next/image";
import CodigoAzul from "../components/CodigoAzul"; 
import Identificacion from "../components/Identificacion";
import PlanEmergencia from "@/components/PlanEmergencia";
import FichaClinica from "@/components/FichaClinica";
import GestionReclamos from "@/components/GestionReclamos";
import AccidenteFluidos from "@/components/AccidenteFluidos";
import Responsabilidad from "@/components/Responsabilidad";
import Notificar from "@/components/Notificar";
import Seccion from "@/components/Seccion";
import Etica from "@/components/Etica";
import Esteriliza from "@/components/Esteriliza";
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
{/* Contenedor principal con altura responsiva */}
<div className="relative z-10 w-full h-[30vh] md:h-[60vh] lg:h-screen flex justify-center items-center">


    {/* Texto centrado */}
    <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
      <div className="text-left">
        <div className="w-[45%] h-[2px] md:h-[6px]  xl:h-[10px] rounded-lg bg-verde mb-0 md:mb-5 xl:mb-15  "></div>
        <p className=" text-2xl  sm:text-3xl md:text-6xl lg:text-6xl xl:text-9xl font-bold text-white">
          JUNTOS SOMOS
        </p>
        <p className=" text-2xl  sm:text-3xl md:text-6xl lg:text-6xl xl:text-9xl font-extrabold text-white">
          MÁS CALIDAD
        </p>
      </div>
    </div>
<span className="
  absolute 
  top-5 left-5          /* Celulares */
  md:top-10 md:left-10   /* Tablets */
  lg:top-15 lg:left-10   /* Tablets */
  xl:top-25 xl:left-25   /* Escritorio */
  text-white 
  text-sm md:text-2xl lg:text-4xl xl:text-[47px]
  font-bold 
  [writing-mode:vertical-rl] rotate-180
">
  Hospital Villarrica
</span>


{/* Texto inferior */}
<div className="absolute bottom-6 left-4 md:bottom-15 md:left-8 lg:bottom-15 lg:left-20 xl:bottom-20 xl:left-25 z-20">
  <div className="text-left">
    <div className="w-[45%] h-[2px] md:h-[6px]  xl:h-[10px] bg-azul mb-1 md:mb-3 w-full rounded-lg"></div>

    {/* Texto responsivo */}
    <p className="text-azul text-xs md:text-2xl lg:text-3xl  xl:text-5xl ">
      acreditación <span className="font-bold">2025</span>
    </p>
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
