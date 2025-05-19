import Image from "next/image";

export default function Services() {
  return (
    <section className="w-full bg-[white] py-16 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-black">NOSSOS SERVIÇOS</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8">
          <div className="flex flex-col items-center flex-1 min-w-[220px] max-w-xs">
            <Image src="/caricon.svg" alt="Lavagem Premium" width={120} height={120} className="mb-4 select-none pointer-events-none w-[120px] h-auto" draggable={false} />
            <h3 className="text-2xl font-extrabold text-black mb-2 text-center">LAVAGEM PREMIUM</h3>
            <p className="text-base text-black text-center max-w-xs">Cuidado completo com seu carro, com acabamento impecável e brilho garantido.</p>
          </div>
          <div className="flex flex-col items-center flex-1 min-w-[220px] max-w-xs">
            <Image src="/polishicon.svg" alt="Polimento" width={120} height={120} className="mb-4 select-none pointer-events-none w-[120px] h-auto" draggable={false} />
            <h3 className="text-2xl font-extrabold text-black mb-2 text-center">POLIMENTO</h3>
            <p className="text-base text-black text-center max-w-xs">Restauração do brilho e remoção de riscos leves para uma aparência renovada.</p>
          </div>
          <div className="flex flex-col items-center flex-1 min-w-[220px] max-w-xs">
            <Image src="/vacuumicon.svg" alt="Higienização" width={120} height={120} className="mb-4 select-none pointer-events-none w-[120px] h-auto" draggable={false} />
            <h3 className="text-2xl font-extrabold text-black mb-2 text-center">HIGIENIZAÇÃO</h3>
            <p className="text-base text-black text-center max-w-xs">Limpeza profunda interna com eliminação de ácaros, bactérias e odores.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 