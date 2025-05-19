import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full md:min-h-screen bg-[#00A8FF] flex flex-col">
      <div className="relative w-full flex flex-col md:min-h-screen">
        <div className="absolute top-0 left-0 w-full flex justify-center md:justify-start pt-8 pl-0 md:pl-8 z-20">
          <Image src="/logo.png" alt="GoAuto Logo" width={180} height={50} className="w-full h-auto max-w-[180px]" style={{ height: 'auto' }} priority />
        </div>
        <div className="flex flex-1 items-center justify-between z-10 px-4 md:px-16 flex-col md:flex-row pt-28 pb-10 md:pt-0 md:pb-0">
          <div className="max-w-3xl w-full text-center md:text-left">
            <h1
              className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg"
              style={{ lineHeight: 1.1 }}
            >
              SEU CARRO LIMPO<br />ONDE VOCÊ ESTIVER
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 ml-0 md:ml-8 text-white/80">
              Serviço automotivo premium<br />a domicílio.
            </p>
            <div className="mt-4 md:mt-8 flex justify-center md:justify-start">
              <a
                href="https://wa.me/5535999498035?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20lavagem%20detalhada%20com%20voc%C3%AAs.%20Poderiam%20me%20informar%20os%20pr%C3%B3ximos%20hor%C3%A1rios%20dispon%C3%ADveis%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0048A0] hover:bg-[#1565c0] transition-all duration-200 text-white px-6 py-4 rounded-lg font-medium shadow-md text-base md:text-lg w-fit transform hover:-translate-y-1 hover:shadow-xl ml-0 md:ml-16"
              >
                <FaHome /> Agendar Atendimento
              </a>
            </div>
          </div>
          <div className="hidden md:block w-full max-w-[400px] md:max-w-[700px] lg:max-w-[900px] relative">
            <Image
              src="/bmw3.png"
              alt="BMW Série 3 em destaque, limpo e brilhando"
              width={900}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
