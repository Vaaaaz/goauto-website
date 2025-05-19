import { FaHome, FaUser, FaCar, FaShuttleVan } from "react-icons/fa";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

export default function HowItWorks() {
  const ballRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function animateBall() {
      if (!ballRef.current || !barRef.current || !midRef.current || !endRef.current) return;

      const ball = ballRef.current;
      const mid = midRef.current;
      const end = endRef.current;

      const ballWidth = ball.offsetWidth;

      const startX = 0;
      const midX = mid.offsetLeft - barRef.current.offsetLeft + mid.offsetWidth / 2 - ballWidth / 2;
      const endX = end.offsetLeft - barRef.current.offsetLeft + end.offsetWidth / 2 - ballWidth / 2;

      gsap.killTweensOf(ball);

      const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power1.inOut" } });

      tl.set(ball, { x: startX, y: 0, opacity: 1 });
      tl.to(ball, { x: midX, duration: 2 });
      tl.to(ball, { x: endX, duration: 2 });
      tl.to(ball, { opacity: 0, duration: 0.3 });
      tl.set(ball, { x: startX, y: 0 });
      tl.to(ball, { opacity: 1, duration: 0.3 });
    }

    const timeout = setTimeout(animateBall, 200);
    window.addEventListener("resize", animateBall);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", animateBall);
    };
  }, []);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-black">
          COMO FUNCIONA?
        </h2>
        <div className="flex flex-col items-center">
          <div
            className="relative w-full flex items-center justify-between mb-12"
            style={{ minHeight: 100, overflow: "visible" }}
          >
            <div
              ref={barRef}
              className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full z-0 left-[12%] right-[12%] md:left-[calc(16.66%+24px)] md:right-[calc(16.66%+24px)]"
              style={{
                background:
                  "linear-gradient(90deg, #00A8FF 1%, #356AC8 20%, #6A2C91 100%)",
                overflow: "visible",
              }}
            >
              <span
                ref={ballRef}
                className="absolute top-1/2 left-0 -translate-y-1/2 z-30 flex items-center justify-center"
                style={{ width: 32, height: 32 }}
              >
                <FaShuttleVan className="md:size-[34px] size-[26px]" color="#00A8FF" />
              </span>
            </div>

            <div className="relative z-10 flex flex-col items-center w-1/3 select-none">
              <div className="bg-[#E6F0FF] rounded-full p-3 md:p-6 flex items-center justify-center shadow-md">
                <FaUser className="md:size-[48px] size-[30px]" color="#00A8FF" />
              </div>
            </div>
            <div ref={midRef} className="relative z-10 flex flex-col items-center w-1/3 select-none">
              <div className="bg-[#E6F0FF] rounded-full p-3 md:p-6 flex items-center justify-center shadow-md">
                <FaHome className="md:size-[48px] size-[30px]" color="#00A8FF" />
              </div>
            </div>
            <div ref={endRef} className="relative z-10 flex flex-col items-center w-1/3 select-none">
              <div className="bg-[#E6F0FF] rounded-full p-3 md:p-6 flex items-center justify-center shadow-md">
                <FaCar className="md:size-[48px] size-[30px]" color="#00A8FF" />
              </div>
            </div>
          </div>

          <div className="flex w-full justify-between -mt-10 md:-mt-12 px-2">
            <span className="block w-1/3 text-center text-sm md:text-lg text-black">
              Agendamento online
            </span>
            <span className="block w-1/3 text-center text-sm md:text-lg text-black">
              Vamos até você
            </span>
            <span className="block w-1/3 text-center text-sm md:text-lg text-black">
              Seu carro novo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
