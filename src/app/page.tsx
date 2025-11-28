import Scene from "@/components/Scene";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* 1. The 3D Background Layer */}
      <Scene />

      {/* 2. The Content Layer (Z-Index is higher) */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-8 md:px-20 pointer-events-none">
        {/* Header Section */}
        <header
          className="absolute left-8 md:left-20 mix-blend-multiply
                   top-24 
                   lg:top-8"
        >
          <h3 className="font-mono text-lg md:text-xl tracking-widest border-b-2 border-industrial-black pb-2 inline-block text-industrial-black">
            SEUNGHYEOK LEE // ECE PORTFOLIO
          </h3>
        </header>

        {/* Big Hero Text */}
        <div className="flex flex-col gap-0 select-none mix-blend-darken">
          <h1 className="font-oswald font-bold text-[15vw] leading-[0.8] tracking-tighter text-industrial-black">
            HARDWARE
          </h1>
          <h1 className="font-oswald font-bold text-[15vw] leading-[0.8] tracking-tighter text-transparent stroke-text hover:text-industrial-black transition-colors duration-300">
            ENGINEER
          </h1>
        </div>

        {/* Introduction / Hook */}
        <div className="mt-12 max-w-xl">
          <p className="font-mono text-lg md:text-xl font-bold bg-black text-safety-yellow inline-block p-2">
            :: FROM BARE METAL AND SILICON TO COMPUTER SYSTEMS
          </p>
        </div>
      </div>
    </main>
  );
}
