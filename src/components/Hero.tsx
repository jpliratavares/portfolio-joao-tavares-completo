import React from "react";
import joao from '/joao.png';
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Imagem do João com fade embaixo e laterais */}
      <div className="absolute inset-0 z-0">
        <img
          src="{joao}"
          alt="João Pedro de Lira Tavares"
          className="absolute right-0 bottom-[-90px] h-[130%] w-[350px] md:w-[460px] lg:w-[520px] max-w-none select-none pointer-events-none object-cover"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%)",
            maskImage: "linear-gradient(to right, transparent 0%, black 5%)"
          }}
          draggable={false}
        />
        {/* Fade inferior */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0f0f11] to-transparent" />
        {/* Fade lateral direita */}
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#0f0f11] to-transparent" />
        {/* Fade lateral esquerda (mais sutil agora) */}
        <div className="absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-[#0f0f11] to-transparent" />
        {/* Fade superior (limita o scroll para cima) */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0f0f11] to-transparent" />
      </div>

      {/* Conteúdo do texto */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full gap-8 px-8 pt-16 md:pt-24"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="md:max-w-[60%]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            JOÃO PEDRO DE LIRA TAVARES
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 mb-4">
            Desenvolvedor BackEnd
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mb-6">
            Desenvolvendo soluções com propósito, performance e clareza.
          </p>
          <a
            href="#projetos"
            className="inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all duration-200"
          >
            Ver Projetos
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
