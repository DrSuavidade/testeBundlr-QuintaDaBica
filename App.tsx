import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import WineCarousel from "./components/WineCarousel";
import BookingModal from "./components/BookingModal";
import SommelierAssistant from "./components/SommelierAssistant";
import { WINES, EVENTS } from "./constants";
import { Wine } from "./types";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // --- SUB-COMPONENTS ---

  const Hero = () => (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-winery-green z-0">
        <img
          src="https://cdn0.casamentos.pt/vendor/8003/3_2/960/jpg/pateo-pr_6_108003.jpeg"
          alt="Vineyard"
          className="w-full h-full object-cover opacity-60 scale-105 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-winery-dark via-transparent to-winery-dark/40" />
      </div>

      <div className="relative z-10 text-center px-6 animate-fade-in">
        <span className="text-[10px] uppercase tracking-[0.5em] text-winery-gold mb-6 block">
          Desde o Século XVII • Dão
        </span>
        <h1 className="text-6xl md:text-8xl font-serif italic text-winery-cream leading-tight">
          Quinta da Bica.
          <br />
          Tradição. Prestígio.
        </h1>
        <button
          onClick={() => setCurrentPage("vinhos")}
          className="mt-12 px-10 py-4 border border-winery-gold text-winery-gold text-xs uppercase tracking-[0.3em] hover:bg-winery-gold hover:text-winery-dark transition-all duration-500 rounded-full"
        >
          Explorar a Coleção
        </button>
      </div>
    </section>
  );

  const HistoryPage = () => (
    <div className="pt-48 pb-32 bg-winery-dark min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-48">
              <span className="text-[10px] uppercase tracking-[0.5em] text-winery-gold mb-4 block">
                Herança
              </span>
              <h1 className="text-5xl font-serif italic mb-8">
                Nossa História
              </h1>
              <div className="h-px bg-winery-gold/20 w-32 mb-8" />
              <p className="text-xs uppercase tracking-widest text-winery-cream/40 leading-loose">
                UM SÉCULO DE VITICULTURA ILUMINADA NA REGIÃO DO DÃO.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-12 text-lg font-light leading-relaxed text-winery-cream/70 pb-20">
              <section className="space-y-6">
                <p>
                  João de Sande de Sacadura Botte morreu em Julho de 1888 e era
                  oitavo neto de Miguel de Sacadura Albarado, administrador dos
                  vínculos instituídos em Cidade Rodrigo por Hernan Botte
                  Pacheco, de quem foi sexto neto.
                </p>
                <p>
                  Também administrou o padroado real de Legas, em Espanha,
                  Senhor do Prazo da Silva, terceiro Morgado da Aguieira, foi o
                  vitivinicultor mais esclarecido do seu tempo, tendo os seus
                  vinhos dado renome à região do Dão, vindo citado nos trabalhos
                  dos enólogos da época.
                </p>
              </section>

              <blockquote className="border-l-2 border-winery-gold pl-12 py-4 my-16">
                <h2 className="text-3xl font-serif italic text-winery-gold mb-2">
                  João Sacadura Botte Côrte Real
                </h2>
                <p className="text-sm uppercase tracking-[0.2em] text-winery-cream/40">
                  O legado de um pioneiro
                </p>
              </blockquote>

              <section className="space-y-6">
                <p>
                  A Quinta da Bica está na família desde o Sec. XVII.
                  Actualmente e após a herança por João Sacadura Botte a Quinta
                  é propriedade da “Quinta da Bica – Sociedade Agrícola Lda”
                  dedicando-se à produção e engarrafamento de vinho com a marca
                  Quinta da Bica®, trabalho iniciado por João Sacadura Botte e
                  continuado pela sua família.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                  <div className="space-y-4">
                    <img
                      src="https://static.wixstatic.com/media/11aecb_be065ca02a5f48428e909a54babfdf83.jpg/v1/fill/w_328,h_418,al_c,lg_1,q_80,enc_avif,quality_auto/11aecb_be065ca02a5f48428e909a54babfdf83.jpg"
                      className="w-full aspect-[3/4] object-cover"
                      alt="João Sacadura Botte Côrte Real"
                    />
                    <p className="text-[10px] uppercase tracking-widest text-winery-gold text-center">
                      João Sacadura Botte Côrte Real
                    </p>
                  </div>
                  <div className="space-y-4">
                    <img
                      src="https://static.wixstatic.com/media/11aecb_5a04e7ef962941ddbe5b4600bb7b4110.jpg/v1/fill/w_273,h_315,al_c,lg_1,q_80,enc_avif,quality_auto/11aecb_5a04e7ef962941ddbe5b4600bb7b4110.jpg"
                      className="w-full aspect-[3/4] object-cover"
                      alt="João Sacadura Botte"
                    />
                    <p className="text-[10px] uppercase tracking-widest text-winery-gold text-center">
                      João Sacadura Botte
                    </p>
                  </div>
                </div>
                <p>
                  Reconhecida a nível nacional e internacional pela sua
                  qualidade e prestígio, a produção de vinho começou no ano de
                  1989 pelas mãos de João Sacadura Botte com enologia do Prof.
                  Virgílio Loureiro. Em 1992/1993 foi ano de transição e a
                  enologia muda de mãos para o Mestre Magalhães Coelho.
                </p>
                <p>
                  Actualmente os destinos da Quinta são geridos pela matriarca
                  da família, Filipa Sacadura Botte com a preciosa ajuda das
                  suas filhas Joana, Marta, Matilde e Madalena.
                </p>
                <p>
                  Em 2003 o Engº. Paulo Nunes passa a ser o Enólogo da Quinta da
                  Bica, onde tem aplicado todo o seu know-how até aos dias de
                  hoje.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const EventsPage = () => (
    <div className="pt-48 pb-32 bg-winery-dark min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[10px] uppercase tracking-[0.5em] text-winery-gold mb-6 block">
              Espaços & Experiências
            </span>
            <h1 className="text-6xl font-serif italic mb-8">
              Eventos & Provas
            </h1>
            <p className="text-winery-cream/60 max-w-2xl mx-auto leading-relaxed italic">
              Dispomos de vários espaços exteriores e interiores para a
              realização de variados tipos de eventos tais como casamentos,
              batizados, aniversários e provas vínicas.
            </p>
          </div>

          {/* Exterior Spaces */}
          <section className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-3xl font-serif italic text-winery-gold">
                Aluguer de Espaços Exteriores
              </h2>
              <div className="h-px bg-winery-gold/20 flex-grow" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  name: "A Mata",
                  capacity: "200 a 300 px",
                  img: "https://static.wixstatic.com/media/11aecb_0966117c7d084735ae91495e94a71c8b~mv2.jpg/v1/fill/w_1353,h_761,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11aecb_0966117c7d084735ae91495e94a71c8b~mv2.jpg",
                },
                {
                  name: "Páteo Principal",
                  capacity: "200 a 300 px",
                  img: "https://static.wixstatic.com/media/11aecb_013152951ab24272bcdbda576396c061~mv2_d_2254_1609_s_2.jpg/v1/fill/w_1066,h_761,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11aecb_013152951ab24272bcdbda576396c061~mv2_d_2254_1609_s_2.jpg",
                },
                {
                  name: "Páteo Pequeno",
                  capacity: "60 px",
                  img: "https://static.wixstatic.com/media/11aecb_d83dbac5ae1e46a0aa92a3d38c88dbbb.jpg/v1/fill/w_1019,h_761,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11aecb_d83dbac5ae1e46a0aa92a3d38c88dbbb.jpg",
                },
              ].map((space, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden mb-6">
                    <img
                      src={space.img}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={space.name}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                  </div>
                  <h3 className="text-xl font-serif italic mb-2">
                    {space.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-winery-cream/40">
                    Capacidade: {space.capacity}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Interior Spaces */}
          <section className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-3xl font-serif italic text-winery-gold">
                Aluguer de Espaços Interiores
              </h2>
              <div className="h-px bg-winery-gold/20 flex-grow" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Cozinha Velha",
                  capacity: "20 px",
                  img: "https://static.wixstatic.com/media/11aecb_df9e2e5bc97a4cb5bac70b6c4678dabb.jpg/v1/fill/w_1019,h_761,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11aecb_df9e2e5bc97a4cb5bac70b6c4678dabb.jpg",
                },
                {
                  name: "A Varanda",
                  capacity: "80 px",
                  img: "https://static.wixstatic.com/media/11aecb_f6ead8b3888448d495a857b1f4a6d6e1.jpg/v1/fill/w_507,h_761,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11aecb_f6ead8b3888448d495a857b1f4a6d6e1.jpg",
                },
                {
                  name: "Sala Nobre",
                  capacity: "25 px",
                  img: "https://static.wixstatic.com/media/11aecb_68807489ff2247bebe151802850f3b30.jpg/v1/fill/w_960,h_639,al_c,q_85,enc_auto/11aecb_68807489ff2247bebe151802850f3b30.jpg",
                },
                {
                  name: "Adega",
                  capacity: "Provas",
                  img: "https://www.cvrdao.pt/media/1/fotos/117/3362653926190P.png",
                },
              ].map((space, i) => (
                <div key={i} className="group">
                  <div className="relative aspect-square overflow-hidden mb-6">
                    <img
                      src={space.img}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      alt={space.name}
                    />
                  </div>
                  <h3 className="text-lg font-serif italic mb-1">
                    {space.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-winery-cream/30">
                    {space.capacity}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Wine Tastings */}
          <section className="bg-winery-green p-12 lg:p-20 border border-winery-gold/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-winery-gold mb-6 block">
                  Experiências Vínicas
                </span>
                <h2 className="text-4xl font-serif italic mb-8">
                  Provas de Vinhos
                </h2>
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-serif italic text-winery-cream mb-3">
                      Prova Base
                    </h4>
                    <p className="text-sm font-light text-winery-cream/60 leading-relaxed italic">
                      Prova de 2 vinhos acompanhada por uma visita guiada à
                      nossa Adega histórica.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-serif italic text-winery-cream mb-3">
                      Prova Premium
                    </h4>
                    <p className="text-sm font-light text-winery-cream/60 leading-relaxed italic">
                      Prova de 2 vinhos + seleção de queijos regionais
                      (requeijão e outros), enchidos regionais, pão e bolachas
                      artesanais + visita à Adega.
                    </p>
                  </div>
                </div>
                <div className="mt-12 flex gap-4">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="px-10 py-4 bg-winery-gold text-winery-dark text-xs uppercase tracking-widest font-bold rounded-full"
                  >
                    Reservar Experiência
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://static.wixstatic.com/media/11aecb_1a246b07560d4fdd831809fed80ac8c1.jpg/v1/fill/w_500,h_751,al_c,lg_1,q_85,enc_auto/11aecb_1a246b07560d4fdd831809fed80ac8c1.jpg"
                  className="w-full aspect-[4/5] object-cover"
                  alt="Wine Tasting"
                />
                <div className="absolute inset-0 border border-winery-gold/20 m-6 pointer-events-none" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  const GaleriaPage = () => (
    <div className="pt-48 pb-32 bg-winery-dark min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.5em] text-winery-gold mb-6 block">
            Visual Journey
          </span>
          <h1 className="text-6xl font-serif italic">Galeria</h1>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIYbly9dwVnD0JxnGtZ2pHHXBC06fIW0v1LA&s",
            "https://static.wixstatic.com/media/11aecb_371275138138461fb003e2a3ce420077.jpg/v1/fit/w_2500,h_1330,al_c/11aecb_371275138138461fb003e2a3ce420077.jpg",
            "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80&w=1200",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSseYC1R0vCPLam1YyTQr7V2xqDsw3dUZ6WsA&s",
            "https://cdn0.casamentos.pt/vendor/8003/3_2/960/jpg/pateo-pr_6_108003.jpeg",
            "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=1200",
          ].map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden break-inside-avoid border border-winery-gold/5 bg-winery-green"
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const WhatToDoPage = () => (
    <div className="pt-48 pb-32 bg-winery-dark min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-32">
            <span className="text-[10px] uppercase tracking-[0.5em] text-winery-gold mb-6 block">
              Guia de Visita
            </span>
            <h1 className="text-6xl font-serif italic mb-8">O Que Fazer</h1>
            <p className="text-winery-cream/40 italic">
              Descubra os sabores e segredos da nossa região.
            </p>
          </div>

          <section className="mb-40">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-4xl font-serif italic text-winery-gold">
                Gastronomia
              </h2>
              <div className="h-px bg-winery-gold/20 flex-grow" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  name: "Cova da Loba",
                  loc: "Linhares da Beira",
                  site: "www.covadaloba.com",
                  phone: "+351 271 776 119",
                },
                {
                  name: "O Albertino",
                  loc: "Folgosinho",
                  site: "folgosinho.com",
                  phone: "+351 238 745 266",
                },
                {
                  name: "O Borges",
                  loc: "Seia",
                  site: "www.oborges.com",
                  phone: "+351 238 313 010",
                },
              ].map((rest, i) => (
                <div
                  key={i}
                  className="p-10 border border-winery-gold/10 bg-winery-green hover:border-winery-gold/30 transition-all group"
                >
                  <h3 className="text-2xl font-serif italic mb-4 group-hover:text-winery-gold transition-colors">
                    {rest.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-winery-cream/40 mb-6">
                    {rest.loc}
                  </p>
                  <div className="space-y-2 text-xs text-winery-cream/60">
                    <p>{rest.phone}</p>
                    <p className="text-winery-gold/60">{rest.site}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-4xl font-serif italic text-winery-gold">
                Locais de Interesse
              </h2>
              <div className="h-px bg-winery-gold/20 flex-grow" />
            </div>
            <div className="space-y-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="aspect-video bg-winery-green border border-winery-gold/10">
                  <img
                    src="https://static.wixstatic.com/media/11aecb_0a27f7db8a90425988e58a96d4acf1e4.jpg/v1/fill/w_404,h_192,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11aecb_0a27f7db8a90425988e58a96d4acf1e4.jpg"
                    className="w-full h-full object-cover grayscale opacity-50"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-serif italic mb-6">
                    Museu Natural da Electricidade
                  </h3>
                  <p className="text-sm text-winery-cream/60 leading-relaxed font-light mb-8">
                    Localizado na Senhora do Desterro, um testemunho histórico
                    da engenharia e património industrial da nossa região.
                  </p>
                  <button className="text-[10px] uppercase tracking-widest text-winery-gold border-b border-winery-gold pb-1">
                    Mais Informação
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl font-serif italic mb-6">
                    CISE - Serra da Estrela
                  </h3>
                  <p className="text-sm text-winery-cream/60 leading-relaxed font-light mb-8">
                    O Centro de Interpretação da Serra da Estrela é uma
                    estrutura dedicada à educação ambiental e valorização do
                    património natural único da nossa serra.
                  </p>
                  <button className="text-[10px] uppercase tracking-widest text-winery-gold border-b border-winery-gold pb-1">
                    Visitar Website
                  </button>
                </div>
                <div className="aspect-video bg-winery-green border border-winery-gold/10 order-1 lg:order-2">
                  <img
                    src="https://static.wixstatic.com/media/11aecb_d8064d3d84114a2ead68b65bbea7bc0b.jpg/v1/fill/w_408,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11aecb_d8064d3d84114a2ead68b65bbea7bc0b.jpg"
                    className="w-full h-full object-cover grayscale opacity-50"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="pt-48 pb-32 bg-winery-dark min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-winery-gold mb-6 block">
                Contactos
              </span>
              <h1 className="text-6xl font-serif italic mb-10">
                Fale Connosco.
              </h1>
              <p className="text-winery-cream/60 italic mb-12">
                Se tem alguma dúvida, entre em contacto connosco via e-mail ou
                telefone. Responderemos o mais breve possível.
              </p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-winery-cream/40">
                      Nome *
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-winery-cream/20 py-3 text-sm focus:border-winery-gold outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-winery-cream/40">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-winery-cream/20 py-3 text-sm focus:border-winery-gold outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-winery-cream/40">
                    Assunto
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-winery-cream/20 py-3 text-sm focus:border-winery-gold outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-winery-cream/40">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-winery-cream/20 py-3 text-sm focus:border-winery-gold outline-none transition-all resize-none"
                  />
                </div>
                <button className="px-12 py-4 bg-winery-gold text-winery-dark text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-winery-cream transition-all">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="bg-winery-green p-12 border border-winery-gold/10">
              <div className="space-y-12">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-winery-gold mb-4">
                    Morada
                  </h3>
                  <p className="text-lg font-serif italic text-winery-cream leading-relaxed">
                    Quinta da Bica
                    <br />
                    Santa Comba de Seia
                    <br />
                    6270-184 Seia, Portugal
                  </p>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-winery-gold mb-4">
                    Telefone & Email
                  </h3>
                  <p className="text-sm font-light text-winery-cream/60 mb-2">
                    +351 91 325 57 03
                  </p>
                  <p className="text-sm font-light text-winery-cream/60">
                    quintadabica@netcabo.pt
                  </p>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-winery-gold mb-4">
                    Coordenadas GPS
                  </h3>
                  <div className="w-full h-48 rounded-lg overflow-hidden border border-winery-gold/20 mt-2">
                    <iframe
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                      src="https://maps.google.com/maps?q=40.440361,-7.706522&hl=pt&z=14&output=embed"
                      title="Quinta da Bica Map"
                    />
                  </div>
                </div>
                <div className="pt-8 border-t border-winery-gold/10">
                  <h4 className="text-[10px] uppercase tracking-widest text-winery-gold mb-6">
                    Como Chegar
                  </h4>
                  <div className="space-y-4 text-xs font-light text-winery-cream/60">
                    <p>
                      <strong className="text-winery-gold/60">
                        Do Porto (170 Km):
                      </strong>{" "}
                      A1 / IP3 / Nelas / Seia / Rotunda Santiago esq. / 500m /
                      Vodra
                    </p>
                    <p>
                      <strong className="text-winery-gold/60">
                        De Lisboa (300 Km):
                      </strong>{" "}
                      A1 / IP3 / Nelas / Seia / Rotunda Santiago esq.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LoginPage = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-winery-dark/95 backdrop-blur-2xl">
      <div className="w-full max-w-md p-10 bg-winery-green border border-winery-gold/20 animate-slide-up shadow-2xl rounded-2xl">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-winery-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-winery-gold/20">
            <span className="text-winery-gold font-serif text-2xl italic">
              QB
            </span>
          </div>
          <h2 className="text-3xl font-serif italic text-winery-cream">
            Digital Cellar
          </h2>
          <p className="text-[10px] uppercase tracking-[0.4em] text-winery-gold/60 mt-2">
            Member Login
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-winery-cream/40">
              Email Address
            </label>
            <input
              type="email"
              placeholder="email@domain.com"
              className="w-full bg-winery-dark border border-winery-cream/10 p-4 rounded-xl text-sm outline-none focus:border-winery-gold transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] uppercase tracking-widest text-winery-cream/40">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-winery-dark border border-winery-cream/10 p-4 rounded-xl text-sm outline-none focus:border-winery-gold transition-all"
            />
          </div>
          <button className="w-full py-4 bg-winery-gold text-winery-dark text-[10px] uppercase tracking-[0.3em] font-bold rounded-xl hover:bg-winery-cream transition-all shadow-lg shadow-winery-gold/5">
            Entrar na Quinta
          </button>
          <button
            onClick={() => setCurrentPage("home")}
            className="w-full text-[9px] uppercase tracking-[0.2em] text-winery-cream/40 hover:text-winery-gold transition-colors"
          >
            Voltar ao Website
          </button>
        </div>
      </div>
    </div>
  );

  const Testimonials = () => (
    <section className="py-32 bg-winery-green border-t border-winery-gold/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] text-winery-gold mb-4 block">
            Experiências
          </span>
          <h2 className="text-4xl font-serif italic">
            Relatos de quem nos visita
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              name: "Pedro Pereira",
              text: "O sítio ideal para descansar e passear com a família. Foram dias únicos que não irei esquecer tão cedo!",
            },
            {
              name: "Sara Norton",
              text: "Casa cheia de charme e história! Fomos muito bem recebidos e pudemos experimentar os vários vinhos ali produzidos numa fantástica prova vínica acompanhada de queijos regionais.",
            },
            {
              name: "Gustavo Reis",
              text: "Enquanto alojamento, um dos sítios mais incríveis onde já estive.",
            },
            {
              name: "Sónia Almeida Morais",
              text: "Excellente dégustation de vins, mes amis ont adoré. On a passé une journée após-midi inoubliable dans ce bel endroit. Service et accueil impecável. Absolument à fazer!",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col h-full bg-winery-dark/20 p-8 border border-winery-gold/5 animate-fade-in"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="text-winery-gold mb-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H4.017V21H6.017Z" />
                </svg>
              </div>
              <p className="text-sm font-light italic leading-relaxed text-winery-cream/60 flex-grow mb-8">
                "{item.text}"
              </p>
              <p className="text-[10px] uppercase tracking-widest text-winery-gold font-bold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-winery-green pt-24 pb-12 border-t border-winery-gold/10 relative z-20">
      <div className="container mx-auto px-6 text-center lg:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <h4 className="text-2xl font-serif italic text-winery-gold mb-6 uppercase tracking-widest">
              Quinta da Bica
            </h4>
            <p className="text-xs text-winery-cream/40 leading-relaxed uppercase tracking-widest">
              Lugar da Quinta da Bica
              <br />
              Seia, Portugal
              <br />
              Região Demarcada do Dão
            </p>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-winery-gold mb-6">
              Explore
            </h5>
            <ul className="space-y-4 text-xs tracking-widest uppercase text-winery-cream/60">
              <li
                onClick={() => setCurrentPage("vinhos")}
                className="hover:text-winery-gold cursor-pointer transition-colors"
              >
                Vinhos
              </li>
              <li
                onClick={() => setCurrentPage("tastings")}
                className="hover:text-winery-gold cursor-pointer transition-colors"
              >
                Provas
              </li>
              <li
                onClick={() => setCurrentPage("historia")}
                className="hover:text-winery-gold cursor-pointer transition-colors"
              >
                História
              </li>
              <li
                onClick={() => setCurrentPage("galeria")}
                className="hover:text-winery-gold cursor-pointer transition-colors"
              >
                Galeria
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-winery-gold mb-6">
              A Quinta
            </h5>
            <ul className="space-y-4 text-xs tracking-widest uppercase text-winery-cream/60">
              <li
                onClick={() => setCurrentPage("oque-fazer")}
                className="hover:text-winery-gold cursor-pointer transition-colors"
              >
                O Que Fazer
              </li>
              <li
                onClick={() => setCurrentPage("contact")}
                className="hover:text-winery-gold cursor-pointer transition-colors"
              >
                Localização
              </li>
              <li
                onClick={() => setCurrentPage("historia")}
                className="hover:text-winery-gold cursor-pointer transition-colors"
              >
                Equipa
              </li>
              <li
                onClick={() => setCurrentPage("contact")}
                className="hover:text-winery-gold cursor-pointer transition-colors"
              >
                Contactos
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] text-winery-gold mb-6">
              Newsletter
            </h5>
            <p className="text-xs text-winery-cream/60 mb-6 leading-relaxed">
              Subscreva para receber as notas de colheita e eventos exclusivos.
            </p>
            <div className="flex border-b border-winery-gold/40 pb-2">
              <input
                type="email"
                placeholder="O seu e-mail"
                className="bg-transparent text-xs w-full outline-none placeholder:text-winery-cream/20"
              />
              <button className="text-winery-gold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-winery-cream/5 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-winery-cream/20">
            © 2024 Quinta da Bica Lda. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-winery-cream/40">
            <span className="hover:text-winery-gold cursor-pointer">
              Privacidade
            </span>
            <span className="hover:text-winery-gold cursor-pointer">
              Termos
            </span>
          </div>
        </div>
      </div>
    </footer>
  );

  const WineDetail = ({ wine }: { wine: Wine }) => (
    <div className="pt-48 pb-32 bg-winery-dark min-h-screen">
      <div className="container mx-auto px-6">
        <button
          onClick={() => setCurrentPage("vinhos")}
          className="flex items-center gap-4 text-winery-gold mb-16 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-2 transition-transform"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Voltar à Coleção
          </span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="relative aspect-[3/4] bg-winery-green border border-winery-gold/10 p-12 lg:p-24 overflow-hidden group">
            <img
              src={wine.bottleImageUrl}
              alt={wine.name}
              className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-winery-dark/20 to-transparent pointer-events-none" />
          </div>

          <div className="animate-fade-in">
            <span className="text-[10px] uppercase tracking-[0.5em] text-winery-gold mb-4 block">
              Dão DOC • {wine.vintage}
            </span>
            <h1 className="text-5xl font-serif italic mb-8">{wine.name}</h1>
            <p className="text-winery-cream/70 text-lg font-light leading-relaxed italic mb-12">
              {wine.description}
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-16">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-winery-gold mb-3">
                  Blend
                </h4>
                <p className="text-sm font-light text-winery-cream/80">
                  {wine.blend}
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-winery-gold mb-3">
                  Servir a
                </h4>
                <p className="text-sm font-light text-winery-cream/80">
                  {wine.servingTemp}
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-winery-gold mb-3">
                  Região
                </h4>
                <p className="text-sm font-light text-winery-cream/80">
                  {wine.region}
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-winery-gold mb-3">
                  Potencial de Guarda
                </h4>
                <p className="text-sm font-light text-winery-cream/80">
                  {wine.aging}
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <section>
                <h3 className="text-xl font-serif italic text-winery-gold mb-4">
                  Notas de Prova
                </h3>
                <p className="text-sm font-light text-winery-cream/60 leading-relaxed italic border-l border-winery-gold/30 pl-6">
                  {wine.tastingNotes}
                </p>
              </section>

              {wine.awards.length > 0 && (
                <section>
                  <h3 className="text-xl font-serif italic text-winery-gold mb-4">
                    Prémios & Distinções
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {wine.awards.map((award, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-winery-gold/5 border border-winery-gold/20 text-winery-gold text-[9px] uppercase tracking-widest rounded-full"
                      >
                        {award}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <SommelierAssistant wine={wine} />
          </div>
        </div>
      </div>
    </div>
  );

  // --- MAIN RENDER ---

  if (currentPage === "login") return <LoginPage />;

  return (
    <div className="bg-winery-dark text-winery-cream min-h-screen font-sans flex flex-col">
      <Navbar
        onNavigate={setCurrentPage}
        currentPage={currentPage}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="relative flex-grow">
        {currentPage === "home" && (
          <>
            <Hero />

            {/* Solar Introduction Section */}
            <section className="py-32 bg-winery-dark">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-24">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-winery-gold mb-6 block">
                    Um solar com tradição...
                  </span>
                  <h2 className="text-5xl md:text-6xl font-serif italic mb-10 leading-tight">
                    História esculpida em pedra e fonte.
                  </h2>
                  <p className="text-xl font-light leading-relaxed text-winery-cream/60 italic mb-12">
                    Segundo a tradição familiar, a origem da Casa da Bica estará
                    num convento que já existiria entre 1550 e 1650.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="relative group overflow-hidden">
                    <img
                      src="https://static.wixstatic.com/media/11aecb_c0a151daed224323a0d8ef27dbccb5da~mv2.jpg/v1/fill/w_768,h_576,al_c,lg_1,q_85,enc_auto/11aecb_c0a151daed224323a0d8ef27dbccb5da~mv2.jpg"
                      className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-110"
                      alt="Solar da Quinta da Bica"
                    />
                    <div className="absolute inset-0 bg-winery-dark/20 group-hover:bg-transparent transition-all duration-500" />
                  </div>
                  <div className="space-y-6 text-winery-cream/70 font-light leading-relaxed">
                    <p>
                      Localizada na cidade de Seia, a casa da Quinta da Bica tem
                      entrada por um imponente portal e muro alto que se impõe
                      na paisagem. Passado o portão, entra-se no terreiro que dá
                      acesso à casa, formada por um um solar seiscentista que
                      sofreu grandes obras de recuperação a nível de interior já
                      neste século, embora mantendo a traça primitiva.
                    </p>
                    <p>
                      Na envolvente da casa existe uma bonita fonte de pedra que
                      dá o nome à Casa – todo este conjunto alberga uma grande
                      propriedade agrícola que se perde para lá dos tempos, pelo
                      menos até ao século XVII.
                    </p>
                    <button
                      onClick={() => setCurrentPage("historia")}
                      className="mt-6 px-10 py-4 border border-winery-gold/40 text-winery-gold text-xs uppercase tracking-widest hover:bg-winery-gold hover:text-winery-dark transition-all rounded-full"
                    >
                      Descobrir Mais
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <WineCarousel
              wines={WINES}
              onSelect={(wine) => {
                setSelectedWine(wine);
                setCurrentPage("wine-detail");
              }}
            />

            {/* Story Teaser */}
            <section className="py-32 bg-winery-dark">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="relative group overflow-hidden order-2 lg:order-1">
                    <img
                      src="https://lifecooler.com/files/registos/imagens/385455/188098.jpg"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
                      alt="Adega"
                    />
                    <div className="absolute inset-0 border border-winery-gold/20 pointer-events-none" />
                  </div>
                  <div className="animate-slide-up order-1 lg:order-2">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-winery-gold mb-6 block">
                      Legado Familiar
                    </span>
                    <h2 className="text-5xl font-serif italic mb-8">
                      Trabalho iniciado por João Sacadura Botte e continuado
                      pela sua família.
                    </h2>
                    <p className="text-lg font-light leading-relaxed text-winery-cream/70 mb-10">
                      Reconhecida internacionalmente pela sua qualidade e
                      prestígio, a Quinta da Bica tem mantido o espírito e a
                      alma do Dão através de gerações de viticultores
                      iluminados.
                    </p>
                    <button
                      onClick={() => setCurrentPage("historia")}
                      className="text-[10px] uppercase tracking-widest text-winery-gold border-b border-winery-gold pb-1 hover:text-winery-cream hover:border-winery-cream transition-all"
                    >
                      Ler História Completa
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <Testimonials />
          </>
        )}

        {currentPage === "historia" && <HistoryPage />}
        {currentPage === "tastings" && <EventsPage />}
        {currentPage === "galeria" && <GaleriaPage />}
        {currentPage === "oque-fazer" && <WhatToDoPage />}
        {currentPage === "contact" && <ContactPage />}

        {currentPage === "vinhos" && (
          <div className="pt-48 pb-20 bg-winery-dark min-h-screen">
            <div className="container mx-auto px-6">
              <div className="text-center mb-32 max-w-3xl mx-auto">
                <span className="text-[10px] uppercase tracking-[0.5em] text-winery-gold mb-6 block">
                  Coleção
                </span>
                <h1 className="text-6xl font-serif italic mb-8">
                  Nossos Vinhos
                </h1>
                <p className="text-winery-cream/50 tracking-widest uppercase text-xs leading-relaxed">
                  A aposta na qualidade e a constante preocupação no
                  melhoramento são características intrínsecas aos vinhos Quinta
                  da Bica®.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
                {WINES.map((wine) => (
                  <div
                    key={wine.id}
                    className="group cursor-pointer"
                    onClick={() => {
                      setSelectedWine(wine);
                      setCurrentPage("wine-detail");
                    }}
                  >
                    <div className="relative aspect-[3/4] bg-winery-green mb-10 overflow-hidden">
                      <img
                        src={wine.bottleImageUrl}
                        className="w-full h-full object-contain p-12 transition-transform duration-700 group-hover:scale-110"
                        alt={wine.name}
                      />
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="px-5 py-2 bg-winery-dark/80 text-winery-gold text-[10px] uppercase tracking-widest backdrop-blur-md rounded-full border border-winery-gold/20">
                          Ver Notas
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-winery-gold mb-2 block">
                      {wine.vintage}
                    </span>
                    <h3 className="text-2xl font-serif italic mb-2">
                      {wine.name}
                    </h3>
                    <p className="text-[10px] text-winery-cream/40 uppercase tracking-widest mb-4">
                      {wine.type} • {wine.region}
                    </p>
                    <div className="h-px bg-winery-gold/20 w-full group-hover:bg-winery-gold transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentPage === "wine-detail" && selectedWine && (
          <WineDetail wine={selectedWine} />
        )}
      </main>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Global Search Placeholder */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-winery-dark/98 backdrop-blur-2xl">
          <div className="w-full max-w-4xl px-10 animate-fade-in text-center">
            <input
              autoFocus
              placeholder="O que procura?"
              className="bg-transparent text-5xl md:text-7xl font-serif italic text-winery-cream w-full outline-none text-center placeholder:text-winery-cream/5"
            />
            <p className="mt-12 text-[10px] uppercase tracking-[0.4em] text-winery-gold/60">
              Pressione ESC para fechar
            </p>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-10 right-10 text-winery-gold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
