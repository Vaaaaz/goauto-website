import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Hero() {


    return (
        <section className="w-full bg-[#00A8FF] py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="flex-1 text-white text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                PRONTO PARA DEIXAR <br />
                <span className="text-white">SEU CARRO BRILHANDO?</span>
              </h1>
    
              <p className="mt-6 text-base md:text-lg text-[#EAECE9] max-w-xs md:max-w-lg mx-auto md:mx-0">
                Venha agendar sua lavagem com a gente! Atendemos na sua casa ou trabalho, com toda a praticidade, conforto e qualidade que seu carro merece sem você precisar sair do lugar.
              </p>
    
              <a
                href="https://wa.me/5535999498035?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20lavagem%20detalhada%20com%20voc%C3%AAs.%20Poderiam%20me%20informar%20os%20pr%C3%B3ximos%20hor%C3%A1rios%20dispon%C3%ADveis%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0048A0] hover:bg-[#1565c0] transition-all duration-200 text-white px-6 py-4 rounded-lg font-medium shadow-md text-base md:text-lg w-fit transform hover:-translate-y-1 hover:shadow-xl mt-4"
              >
                <FaHome /> Agende Agora
              </a>
            </div>
    
            <div className="flex-1 w-full max-w-xs md:max-w-md lg:max-w-xl">
              <Image
                src="/carro.png"
                alt="Carro brilhando"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            
          </div>
        </section>
      );





}
