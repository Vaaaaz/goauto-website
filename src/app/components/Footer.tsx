import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#dedede] py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12 gap-4 text-center md:text-left">
        
        {/* Coluna: Créditos */}
        <div className="text-black text-sm w-full md:w-auto flex justify-center md:justify-start">
          <a
            href="https://ascoreagency.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Desenvolvido por Ascore
          </a>
        </div>

        {/* Coluna: Direitos autorais */}
        <div className="text-black text-sm w-full md:w-auto flex justify-center md:justify-center">
          <p>© 2025 Go Auto. Todos os direitos reservados.</p>
        </div>

        {/* Coluna: Redes sociais */}
        <div className="w-full md:w-auto flex justify-center md:justify-end items-center gap-4">
          <a
            href="https://instagram.com/goauto_estetica"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={32} className="text-black hover:text-[#833AB4] transition-colors" />
          </a>
          <a
            href="https://wa.me/5535999498035?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20lavagem%20detalhada%20com%20voc%C3%AAs.%20Poderiam%20me%20informar%20os%20pr%C3%B3ximos%20hor%C3%A1rios%20dispon%C3%ADveis%3F"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={32} className="text-black hover:text-[#25D366] transition-colors" />
          </a>
        </div>

      </div>
    </footer>
  );
}
