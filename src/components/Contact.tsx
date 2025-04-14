
import React from "react";
import { Mail, Linkedin, Github, Instagram, Phone } from "lucide-react";

function Contact() {
  return (
    <section className="px-8 py-12">
      <h2 className="text-2xl font-bold mb-4">Contato</h2>
      <div className="flex gap-4 mb-6 text-gray-300">
        <a href="https://linkedin.com/in/jpliratavares" target="_blank" rel="noreferrer"><Linkedin /></a>
        <a href="https://github.com/jpliratavares" target="_blank" rel="noreferrer"><Github /></a>
        <a href="https://instagram.com/tavares_.eu" target="_blank" rel="noreferrer"><Instagram /></a>
        <a href="https://wa.me/5591999999999" target="_blank" rel="noreferrer"><Phone /></a>
      </div>
      <form
        action="https://formspree.io/f/mvgkykrw"
        method="POST"
        className="grid grid-cols-1 gap-4 max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="bg-gray-800 text-white p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="bg-gray-800 text-white p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          rows={4}
          className="bg-gray-800 text-white p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-white text-black px-4 py-2 rounded font-semibold"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contact;
