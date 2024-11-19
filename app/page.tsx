import React from 'react';
import { X, Instagram, Mail, Send } from 'lucide-react';
import compre from '../assets/compre.png'
import Image from 'next/image';
import exodus from '../assets/exodus-removebg-preview.png'

const Page = () => {
  const links = [
    {
      title: "Compre Cripto",
      url: "http://comprecripto.io/",
      bgColor: "bg-gray-900",
      hoverColor: "hover:bg-gray-900",
      image: compre
    },
    {
      title: "Crie sua Carteira Cripto em Menos de 5 minutos! Tutorial Simples",
      url: "https://youtu.be/Endu7d3Ew64?si=jBTSda3DOkNgTGU5",
      bgColor: "bg-gray-900",
      hoverColor: "hover:bg-gray-900",
      image: exodus
    },
    {
      title: "Invista na revolução web3 e cripto com nossa Mentoria Personalzada",
      url: "https://pay.kiwify.com.br/CBBoOTq",
      bgColor: "bg-gray-900",
      hoverColor: "hover:bg-gray-900",
      image: compre
    }
  ];

  const socialLinks = [
    { icon: <X size={24} />, url: "https://x.com/joxltda" },
    { icon: <Instagram size={24} />, url: "https://www.instagram.com/jox.john/" },
    { icon: <Send size={24} />, url: "https://t.me/joxltda" },
  ];

  return (
    <div className="min-h-screen bg-black from-gray-900 to-gray-800 flex flex-col items-center py-10 px-4">
      <div className="max-w-md w-full">
        {/* Perfil */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Jox Ltda - Links importantes</h1>
          <p className="text-gray-300 text-center mb-4">
            Compre USDT e Bitcoin com privacidade DePix® e receba direto na sua carteira.
          </p>
        </div>

        {/* Links Principais */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`${link.bgColor} ${link.hoverColor} transition-colors duration-300 text-white font-semibold rounded-lg block shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex h-32">
                {/* Text Container (70%) */}
                <div className="w-[70%] p-4 flex items-center">
                  <p className="text-left">{link.title}</p>
                </div>
                {/* Image Container (30%) */}
                <div className="w-[30%] relative items-center justify-center flex">
                  <Image src={link.image} alt='compre-cripto' width={240}/>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center space-x-4 mt-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-gray-300 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;