'use client'

import React, { useState, useEffect } from 'react';
import { ListChecks, AlertTriangle, Users, Video, Bell, Lock, MessageCircle } from 'lucide-react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Page = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [inView, setInView] = useState(false);

  const units: (keyof typeof timeLeft)[] = ["days", "hours", "minutes", "seconds"];

  const controls = useAnimation();
  const { ref, inView: inViewObserver } = useInView({
    triggerOnce: true, // Acionar a animação apenas uma vez
    threshold: 0.2, // Acionar quando 20% da seção estiver visível
  });

  useEffect(() => {
    setInView(inViewObserver);
  }, [inViewObserver]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  useEffect(() => {
    // Define a data final (próxima sexta-feira às 23:59)
    const getNextFriday = () => {
      const now = new Date();
      const nextFriday = new Date(now);
      nextFriday.setDate(now.getDate() + (5 - now.getDay() + 7) % 7);
      nextFriday.setHours(23, 59, 59, 999);
      return nextFriday;
    };

    const calculateTimeLeft = () => {
      const difference = getNextFriday().getTime() - new Date().getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Configura o intervalo para atualizar o countdown
    const timer = setInterval(calculateTimeLeft, 1000);

    // Calcula imediatamente na primeira renderização
    calculateTimeLeft();

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      icon: <ListChecks className="w-12 h-12 mb-4 text-blue-400" />,
      title: "1. Lista de Recomendações de Ativos",
      description: "Você terá uma lista exclusiva de recomendações de ativos atualizada, onde você saberá o que e quando comprar - e a hora de vender para maximizar seu lucro"
    },
    {
      icon: <AlertTriangle className="w-12 h-12 mb-4 text-blue-400" />,
      title: "2. Sinal de Virada de Mão",
      description: `O que é "Virada de Mão"? Vez ou outra a gente toma mais risco, vez ou outra a gente toma menos risco. Isso é o que eu chamo de virada de mão. A mentoria começou assim, com uma só cripto na carteira e aos poucos, a medida que a gente foi sentindo e que o mercado foi possibilitando ótimas oportunidades, nós fomos tomando mais riscos. Hoje a gente está com uma carteira que está na largada da AltSeason. Você receberá o meu "Alerta de Lucro" no momento ideal de vender cada ativo e também da hora de sair do mercado.`
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-blue-400" />,
      title: "3. Plantão de Dúvidas Ao Vivo com Especialistas",
      description: `Uma vez por semana acontece um plantão de dúvidas ao vivo no Zoom com um especialista treinado por mim, onde ele disponibiliza um formulário para você mandar suas dúvidas, sejam elas operacionais ou não. Com esse formulário em mãos, o especialista responde uma por uma, além de mostrar na tela do computador clique por clique como fazer determinada movimentação. Isso tudo dá uma segurança maior para aqueles que querem aprender a comprar e vender um cripto ativo. PS: Não existe nada igual a isso no mercado. A Mentoria Crypto Boost será o seu GPS e o seu GUIA para multiplicar seu patrimônio cripto neste ciclo.`
    },
    {
      icon: <Video className="w-12 h-12 mb-4 text-blue-400" />,
      title: "4. 12 Mentorias Ao Vivo",
      description: "12 encontros em grupo comigo ao longo dos 12 meses, sendo 1x por mês."
    },
    {
      icon: <Bell className="w-12 h-12 mb-4 text-blue-400" />,
      title: "5. Canal de Áudios e Avisos Importantes",
      description: "Onde você vai receber todos os alertas importantes - As viradas de mão que eu sugerir e todas informações que precisar.",
      features: ["Não aparece o seu contato", "Unidirecional", "Silencioso"]
    },
    {
      icon: <Lock className="w-12 h-12 mb-4 text-blue-400" />,
      title: "6. Área VIP",
      description: "Dentro da Área VIP da Mentoria Crypto Boost, você terá acesso a uma série de recursos exclusivos, desenhados para maximizar seu potencial no mercado cripto.",
      vipFeatures: [
        {
          title: "Gravação dos Encontros",
          description: "Todos os encontros ao vivo são gravados, permitindo que você assista e revise as estratégias discutidas a qualquer momento, garantindo que você possa seguir a mentoria no seu ritmo."
        },
        {
          title: "Carteira Cripto Recomendada",
          description: "Toda atualização da carteira recomendada será detalhada e ficará disponível na área de membros. Essas sugestões são atualizadas regularmente para refletir as mudanças dinâmicas do mercado, oferecendo a você as melhores oportunidades de investimento."
        },
        {
          title: "Tutoriais de Compra e Venda",
          description: "Desenvolvemos tutoriais com passo a passo que cobrem tudo, desde as operações básicas até as mais avançadas, assegurando que você possa seguir todas a recomendações de investimento."
        },
        {
          title: "Tutoriais de Transações Avançadas",
          description: "Para aqueles que já possuem mais experiência no mercado, desenvolvemos tutoriais que exploram técnicas de transação mais avançadas, permitindo que você aproveite novas estratégias."
        },
        {
          title: "Contrato da Mentoria",
          description: "Tenha clareza e segurança com um contrato detalhado que define todos os aspectos da sua participação na mentoria, garantindo transparência e confiança em seu investimento."
        }
      ]
    }
  ];

  return (
   
    <div>
         <div className="flex flex-col items-center justify-center text-center p-8 max-w-6xl mx-auto bg-black text-white">
      {/* Logo */}
      <div className="mb-6">
        <img 
          src="/api/placeholder/200/80" 
          alt="Logo" 
          className="mx-auto h-16 w-auto"
        />
      </div>

      {/* Texto Principal */}   
      <h1 className="text-4xl font-bold mb-4 text-white max-w-2xl">
        Transformando Ideias em Soluções Digitais Incríveis
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-xl">
        Desenvolvimento de software personalizado que acelera seu negócio e transforma suas visões em realidade.
      </p>

      

      {/* Vídeo */}
      <div className="w-full max-w-4xl mb-8">
        <div className="aspect-video bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Vídeo Demonstrativo</span>
        </div>
      </div>

      {/* Botão CTA */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold">
        Iniciar Projeto Agora
      </button> 
    </div>
        <div className='flex flex-col items-center justify-center text-center p-8 w-full bg-red-600 mx-auto'>
        <div className="text-center bg-red-600 p-4 rounded-lg w-full max-w-4xl">
            <p className="text-xl font-bold mb-4 text-white ">
            ATENÇÃO: A CONDIÇÃO ESPECIAL APRESENTADA COM TODOS OS SEUS ITENS ESTÁ VÁLIDA SOMENTE ATÉ 23H59 DESSA SEXTA-FEIRA
            </p>
        
            {/* Countdown Timer */}
            <div className="flex justify-center space-x-4 text-white">
                <div className="flex flex-col items-center bg-black px-4 py-2">
                    <span className="text-4xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
                    <span className="text-sm">Dias</span>
                </div>
                <div className="flex flex-col items-center bg-black px-4 py-2">
                    <span className="text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <span className="text-sm">Horas</span>
                </div>
                <div className="flex flex-col items-center bg-black px-4 py-2">
                    <span className="text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <span className="text-sm">Minutos</span>
                </div>
                <div className="flex flex-col items-center bg-black px-4 py-2">
                    <span className="text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <span className="text-sm">Segundos</span>
                </div>
                </div>
            </div>
        </div>

        {/* Nova seção Crypto Boost */}
        <div
      ref={ref}
      className="flex flex-col items-center justify-center text-left p-8 w-full mx-auto bg-white text-black"
    >
      <div className="max-w-2xl">
        <motion.h2
          className="text-4xl font-extrabold mb-6 mt-6 font-sans"
          initial="hidden"
          whileInView="visible"
          variants={variants}
        >
          O que é a Mentoria Crypto Boost?
        </motion.h2>
        <motion.div
          className="space-y-4 font-sans text-xl"
          initial="hidden"
          whileInView="visible"
          variants={variants}
        >
          <p>
            A Mentoria Crypto Boost é o lugar onde você terá a carteira recomendada
            pelo André Franco e acesso ao seu direcionamento para saber{" "}
            <span className="font-bold">o que comprar</span>, em qual{" "}
            <span className="font-bold">percentual</span>,{" "}
            <span className="font-bold">quando</span> comprar e, o principal:{" "}
            <span className="font-bold">a hora certa de vender cada ativo.</span>
          </p>
          <p>
            Você saberá exatamente a hora de realizar os lucros para nunca mais ver
            seu patrimônio derreter abraçado com um ativo que você não soube a
            hora certa de vender.
          </p>
          <p>
            Eu não sei se você sabe,{" "}
            <span className="font-bold">
              mas a carteira da mentoria já mais que dobrou nos últimos 4 meses
              (seu tempo de criação).
            </span>
          </p>
          <p className="italic">"Mas já não valorizou demais?"</p>
          <p>A verdade é que isso é APENAS o começo.</p>
          <p>
            <span className="font-bold">
              Nós estamos MUITO próximos de um GRANDE salto de valorização pós-halving.
            </span>
          </p>
          <p>
            E esse salto promete ser muito mais agressivo que o anterior. Sem dúvidas,
            agora é a MELHOR hora para você entrar.
          </p>
          <motion.button
            className="bg-[#0BEC16] hover:bg-green-700 text-black px-8 py-4 rounded-lg text-xl font-bold mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            ENTENDI! QUERO RESERVAR MINHA VAGA NA MENTORIA CRYPTO BOOST AGORA!
          </motion.button>
        </motion.div>
      </div>
    </div>
    
        <div
      ref={ref}
      className="flex flex-col items-center justify-center text-left p-8 w-full mx-auto bg-green-500 text-black"
    >
      <div className="max-w-2xl">
        <motion.h2
          className="text-4xl font-extrabold mb-6 font-sans"
          initial="hidden"
          whileInView="visible"
          variants={variants}
        >
          Para quem é a Mentoria?
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial="hidden"
          whileInView="visible"
          variants={variants}
        >
          Em poucas palavras: a mentoria é para quem tem mais dinheiro do que
          tempo para acompanhar o mercado.
        </motion.p>
        <motion.p
          className="text-lg mb-8"
          initial="hidden"
          whileInView="visible"
          variants={variants}
        >
          É para quem sabe que está próximo de um momento de grande potencial
          de valorizações e quer aproveitar esse ciclo para multiplicar o seu
          patrimônio cripto.
        </motion.p>

        <div className="space-y-6 text-left">
            {[
              {
                title: "1. PARA INICIANTES",
                description:
                  "Para quem é iniciante, nunca investiu em nada e quer ter o direcionamento de especialistas para começar agora em cripto;",
              },
              {
                title: "2. PARA O INVESTIDOR TRADICIONAL",
                description:
                  "Para quem já é investidor no mercado de investimentos tradicional, nunca comprou um bitcoin e quer começar agora em cripto;",
              },
              {
                title: "3. PARA QUEM SÓ COMPROU BITCOIN",
                description:
                  "Para quem já tem experiência, já investe em bitcoin e agora quer montar uma carteira para buscar multiplicar seu patrimônio de verdade;",
              },
              {
                title: "4. PARA QUEM JÁ PASSOU POR OUTROS CICLOS",
                description:
                  "Para quem já tem experiência de ciclos anteriores, investe em vários ativos e agora quer ter o direcionamento do André para sair na hora certa e botar grana no bolso de verdade.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg"
                initial="hidden"
                whileInView="visible"
                variants={variants}
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold mt-8 mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            FAZ SENTIDO… RESERVA MINHA VAGA NA MENTORIA AGORA!
          </motion.button>
        </div>
      </div>

      {/* Nova seção O que você irá receber */}
      <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
    >
      {/* Header Section with Animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center text-center w-full mx-auto bg-black text-white"
      >
  
        {/* Benefits Section with Staggered Animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={variants}
          className="flex flex-col items-center justify-center p-8 w-full mx-auto bg-white text-white"
        >
          <div className="w-full max-w-2xl">
            <motion.h2 
              variants={variants}
              className="text-4xl font-extrabold mb-8 text-center font-sans text-black"
            >
              O que você irá receber:
            </motion.h2>
            
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={variants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-black rounded-lg p-10 shadow-lg"
                >
                  {/* Benefit content remains the same */}
                  <div className="flex flex-col items-center md:items-start md:flex-row">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="md:ml-6 space-y-4">
                      <h3 className="text-xl font-bold text-white text-left">{benefit.title}</h3>
                      <p className="text-lg text-left">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>

    <div className="flex flex-col items-center justify-center p-8 w-full mx-auto bg-green-300 text-black">
      <div className="w-full max-w-4xl text-left" ref={ref}>
        <div className="rounded-lg p-8">
          <div className="flex flex-col items-center space-y-6">
            <MessageCircle className="w-16 h-16 text-black" />

            {/* Título com animação */}
            <motion.h2
              className="text-3xl font-bold"
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              AINDA ESTOU COM DÚVIDAS…
            </motion.h2>

            {/* Parágrafo com animação */}
            <motion.p
              className="text-lg max-w-2xl"
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              A minha equipe está pronta para esclarecer qualquer questão que você tenha,
              seja sobre os detalhes da mentoria, como funciona o acesso, ou mesmo sobre o
              potencial de retorno que a sua carteira cripto possa ter. <br /> <br />Nós vamos esclarecer
              todas as suas questões para que você se sinta seguro e preparado para fazer
              parte deste grupo exclusivo de investidores.
            </motion.p>

            {/* Botão com animação */}
            <motion.button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-xl font-bold mt-4 flex items-center space-x-2"
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <MessageCircle className="w-6 h-6" />
              <span>TOQUE AQUI PARA FALAR COM MINHA EQUIPE!</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page;