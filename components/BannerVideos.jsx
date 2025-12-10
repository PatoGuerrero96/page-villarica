import { useEffect, useState } from "react";
import { Play, ChevronLeft, ChevronRight, X,RectangleHorizontal } from "lucide-react";

export default function BannerVideos() {
  const videos = [
    { id: 1, src: "https://player.vimeo.com/video/1145356976", thumbnail: "/thumbnails/thumb1.jpg", title: "Código Azul" },
    { id: 2, src: "https://player.vimeo.com/video/1145356976", thumbnail: "/thumbnails/thumb2.jpg", title: "Identificación" },
    { id: 3, src: "/videos/video1.mp4", thumbnail: "/thumbnails/thumb3.jpg", title: "Plan de Emergencia" },
    { id: 4, src: "/videos/video1.mp4", thumbnail: "/thumbnails/thumb4.jpg", title: "Esterilización" },
    { id: 5, src: "/videos/video1.mp4", thumbnail: "/thumbnails/thumb5.jpg", title: "Ante un accidente con fluidos" },
    { id: 6, src: "/videos/video1.mp4", thumbnail: "/thumbnails/thumb6.jpg", title: "Accidente con medicamentos antineoplásicos" },
    { id: 7, src: "/videos/video1.mp4", thumbnail: "/thumbnails/thumb7.jpg", title: "CEC" },
    { id: 8, src: "/videos/video1.mp4", thumbnail: "/thumbnails/thumb8.jpg", title: "CEA" },
    { id: 9, src: "/videos/video1.mp4", thumbnail: "/thumbnails/thumb9.jpg", title: "Gestión de reclamos" },

  ];

  const [videosPerPage, setVideosPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const update = () => {
      const next = typeof window !== "undefined" && window.innerWidth < 768 ? 2 : 3;
      setVideosPerPage(next);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // recompute totalPages and clamp page when videosPerPage changes
  const totalPages = Math.max(1, Math.ceil(videos.length / videosPerPage));
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [videosPerPage, totalPages]);

  const handleNext = () => setPage((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  const start = page * videosPerPage;
  const currentVideos = videos.slice(start, start + videosPerPage);

  // responsive sizes
  const playSize = videosPerPage === 2 ? 25 : 60;
  const navIconSize = videosPerPage === 2 ? 12 : 32;
  const navPadding = videosPerPage === 2 ? "p-2" : "p-3";

  // grid classes based on videosPerPage (visual)
  // mobile: grid-cols-2, md: grid-cols-3
  const gridClasses =
    videosPerPage === 2 ? "grid grid-cols-2 md:grid-cols-3 gap-4 w-full" : "grid grid-cols-3 gap-10 w-full";

  return (
    <div className=" p-3 xl:p-10 mt-1 sm:mt-5 mb-1 sm:mb-5  relative flex items-center w-full">
      {/* Botón izquierda */}
      <button
        onClick={handlePrev}
        className={`${navPadding} absolute left-1 md:left-2 z-20 bg-white/90 backdrop-blur-md shadow-lg text-gray-900 rounded-full hover:bg-white transition`}
        aria-label="Anterior"
      >
        <ChevronLeft size={navIconSize} />
      </button>

      {/* Contenedor videos (grid responsive) */}
      <div key={page} className={`transition-all duration-500 animate-slide-fade ${gridClasses}`}>
        {currentVideos.map((video) => (
          <div
            key={video.id}
            className="relative aspect-video rounded-xl overflow-hidden shadow-md"
          >
            {/* Miniatura */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />

            {/* Botón PLAY (responsive) */}
            <button
              onClick={() => setActiveVideo(video)}
              className="group absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/30 transition rounded-xl"
              aria-label={`Reproducir ${video.title}`}
            >
              <Play
                size={playSize}
                strokeWidth={2.5}
                className="text-white drop-shadow-xl transition-transform duration-200 group-hover:scale-110"
              />
            </button>
          </div>
        ))}
      </div>

      {/* Botón derecha */}
      <button
        onClick={handleNext}
        className={`${navPadding} absolute right-1 md:right-2 z-20 bg-white/90 backdrop-blur-md shadow-lg text-gray-900 rounded-full hover:bg-white transition`}
        aria-label="Siguiente"
      >
        <ChevronRight size={navIconSize} />
      </button>

      {/* Modal video */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-100 p-2">
          <div className="relative bg-transparent rounded-xl p-3 w-[95%] max-w-6xl shadow-2xl md:p-10 md:w-11/12">
            {/* Botón cerrar (fuera del video) */}
<button
  onClick={() => setActiveVideo(null)}
  className="
      absolute 
      top-3 right-3 mt-1 mr-1               
      sm:top-5 sm:right-5          
      md:top-10 md:right-10        
      bg-white text-gray-900 rounded-full shadow-xl 
      p-1.5 sm:p-2 md:p-3         
      z-[101] hover:bg-gray-200 transition
  "
  aria-label="Cerrar"
>
  <X 
    size={14}          
    className="sm:w-6 sm:h-6 md:w-7 md:h-7"  
    strokeWidth={2.5} 
  />
</button>


            {/* Video */}
{activeVideo.src.includes("vimeo.com") ? (
<iframe
  src={`${activeVideo.src}?autoplay=1&title=0&byline=0&portrait=0&controls=1`}
  className="w-full aspect-video rounded-xl shadow-lg"
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
></iframe>
) : (
  <video
    id="video-player"
    controls
    autoPlay
    className="w-full rounded-xl shadow-lg"
  >
    <source src={activeVideo.src} type="video/mp4" />
  </video>
)}

          </div>
        </div>
      )}
    </div>
  );
}
