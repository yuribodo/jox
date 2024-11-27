'use client'

import React, { useState } from 'react';
import { X, Instagram, Mail, Send, Copy, CheckCircle } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import compre from '../assets/compre.png';
import exodus from '../assets/exodus-removebg-preview.png';

// Define interfaces for link types
interface LinkItem {
  title: string;
  description: string;
  url: string;
  bgGradient: string;
  image: StaticImageData;
}

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  name: string;
}

const Page: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const links: LinkItem[] = [
    {
      title: "Compre Cripto",
      description: "Plataforma segura para compra de criptomoedas",
      url: "http://comprecripto.io/",
      bgGradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
      image: compre
    },
    {
      title: "Crie sua Carteira Cripto",
      description: "Tutorial simples em menos de 5 minutos",
      url: "https://youtu.be/Endu7d3Ew64?si=jBTSda3DOkNgTGU5",
      bgGradient: "from-[#2c3e50] via-[#3498db] to-[#2980b9]",
      image: exodus
    },
    {
      title: "Mentoria Web3",
      description: "Investimento personalizado na revolução cripto",
      url: "https://pay.kiwify.com.br/CBBoOTq",
      bgGradient: "from-[#4a4a4a] via-[#1e1e1e] to-[#2c2c2c]",
      image: compre
    }
  ];

  const socialLinks: SocialLink[] = [
    { 
      icon: <X size={24} />, 
      url: "https://x.com/joxltda",
      name: "X (Twitter)"
    },
    { 
      icon: <Instagram size={24} />, 
      url: "https://www.instagram.com/jox.john/",
      name: "Instagram"
    },
    { 
      icon: <Send size={24} />, 
      url: "https://t.me/joxltda",
      name: "Telegram"
    }
  ];

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(url);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#121212] to-[#1e1e1e] flex flex-col items-center justify-center py-10 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2">
            Jox Ltda
          </h1>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">
            Transformando oportunidades cripto em estratégias de sucesso
          </p>
        </div>

        {/* Links Principais */}
        <div className="space-y-6">
          {links.map((link, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-r ${link.bgGradient} rounded-xl shadow-2xl hover:scale-[1.02] transition-all duration-300 group`}
            >
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-5 relative"
              >
                <div className="flex-grow pr-4">
                  <h2 className="text-xl font-bold text-white mb-1">{link.title}</h2>
                  <p className="text-gray-300 text-sm">{link.description}</p>
                </div>
                <div className="w-24 h-24 relative">
                  <Image 
                    src={link.image} 
                    alt={link.title} 
                    layout="fill" 
                    objectFit="contain" 
                    className="group-hover:scale-110 transition-transform"
                  />
                </div>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopyLink(link.url);
                  }}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                >
                  {copiedLink === link.url ? <CheckCircle size={20} color="green" /> : <Copy size={20} />}
                </button>
              </a>
            </div>
          ))}
        </div>

        {/* Redes Sociais */}
        <div className="bg-[#1e1e1e] rounded-xl p-6">
          <div className="flex justify-between items-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-[#2c2c2c] p-3 rounded-full mb-2 group-hover:bg-[#3c3c3c] transition-colors">
                  {social.icon}
                </div>
                <span className="text-xs">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;