import React from "react";
import {
  Menu,
  X,
  Instagram,
  Mail,
  Phone,
  CheckCircle2,
  Sparkles,
  Minus,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import "../styles/fonts.css";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-[#FAF8F5] relative overflow-hidden"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-[#FAF8F5]/95 backdrop-blur-sm z-50 border-b border-[#D4BFB0]/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="font-light text-xl text-[#8B7265] tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Caroline David
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-[#8B7265] hover:text-[#B5918A] transition-colors text-sm tracking-wide"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-[#8B7265] hover:text-[#B5918A] transition-colors text-sm tracking-wide"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-[#8B7265] hover:text-[#B5918A] transition-colors text-sm tracking-wide"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-[#8B7265] hover:text-[#B5918A] transition-colors text-sm tracking-wide"
              >
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#8B7265]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <motion.div
                initial={false}
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              className="md:hidden bg-[#FAF8F5] border-t border-[#D4BFB0]/20 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="px-4 py-3 space-y-3">
                {[
                  { id: "sobre", label: "Sobre" },
                  { id: "servicos", label: "Serviços" },
                  { id: "portfolio", label: "Portfolio" },
                  { id: "contato", label: "Contato" },
                ].map((item, idx) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 text-[#8B7265] hover:text-[#B5918A]"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25, delay: 0.08 + idx * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Decorative element */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  animate={{ width: [0, 48] }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Minus
                    className="w-12 h-[2px] text-[#B5918A]"
                    strokeWidth={1}
                  />
                </motion.div>
                <div className="inline-flex items-center gap-2 border border-[#D4BFB0]/40 text-[#8B7265] px-4 py-2 rounded-lg">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                  <span className="text-sm tracking-wide">
                    Designer Gráfica
                  </span>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-6xl font-light text-[#6B5A50] leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Olá, sou Caroline David
              </motion.h1>

              <motion.p
                className="text-lg text-[#8B7265] leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Designer Gráfica focada na criação de conteúdo para redes
                sociais. Desde os meus 18 anos, a criatividade sempre esteve
                presente na minha vida. Foi através do design que encontrei uma
                forma de transformar ideias em comunicação visual, unindo
                estética, estratégia e propósito.
              </motion.p>

              <motion.button
                onClick={() => scrollToSection("contato")}
                className="bg-[#B5918A] text-white px-8 py-3 hover:bg-[#A07B74] transition-colors tracking-wide text-sm rounded-lg relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Vamos Trabalhar Juntos</span>
                <motion.div
                  className="absolute inset-0 bg-[#A07B74]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ opacity, scale }}
            >
              {/* Decorative corner element */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#D4BFB0]/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#D4BFB0]/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              />

              <motion.img
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Workspace de design"
                className="w-full h-[500px] object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative line */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <motion.div
                className="w-16 h-[1px] bg-[#D4BFB0]"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <motion.div
                className="w-2 h-2 bg-[#B5918A] rotate-45"
                animate={{ rotate: [45, 90, 45] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-16 h-[1px] bg-[#D4BFB0]"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            <h2
              className="text-4xl font-light text-[#6B5A50] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              O Que Eu Posso Fazer Pela Sua Marca?
            </h2>
            <p className="text-lg text-[#8B7265] font-light">
              A imagem fala antes do texto, o design é o convite!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Aumentar a percepção de valor do seu negócio",
              "Tornar sua comunicação mais profissional",
              "Fortalecer sua identidade visual",
              "Criar conexão com o público certo",
              "Gerar mais confiança e reconhecimento",
            ].map((service, index) => (
              <motion.div
                key={index}
                className="border border-[#D4BFB0]/30 p-6 hover:border-[#B5918A] transition-colors rounded-lg group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(181, 145, 138, 0.1)",
                }}
              >
                <CheckCircle2 className="w-6 h-6 text-[#B5918A] mb-4" />
                <p className="text-[#6B5A50] font-light">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block mb-6">
            {/* Decorative circle */}
            <motion.div
              className="absolute -top-6 -left-6 w-12 h-12 border border-[#D4BFB0]/30 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <h2
              className="text-4xl font-light text-[#6B5A50]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Minha Abordagem
            </h2>
          </div>

          <p className="text-lg text-[#8B7265] leading-relaxed font-light">
            Cada projeto é único. Antes de iniciar qualquer criação, busco
            compreender a essência da marca, seus objetivos e a mensagem que
            deseja transmitir.
          </p>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-light text-[#6B5A50] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Portfolio
            </h2>

            {/* Decorative separator */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-1 h-1 bg-[#B5918A]"></div>
              <div className="w-1 h-1 bg-[#B5918A]"></div>
              <div className="w-1 h-1 bg-[#B5918A]"></div>
            </div>
          </div>

          {/* Case Study: Viva Centro Optométrico */}
          <div className="border border-[#D4BFB0]/30 p-8 lg:p-12 relative rounded-lg mb-12">
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#B5918A]"></div>
              <div className="absolute top-0 left-0 w-[1px] h-full bg-[#B5918A]"></div>
            </div>

            <div className="mb-12">
              <h3
                className="text-3xl font-light text-[#6B5A50] mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Viva Centro Optométrico
              </h3>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-sm font-light mb-3 text-[#B5918A] tracking-wider uppercase">
                    Objetivo
                  </h4>
                  <p className="text-[#6B5A50] font-light leading-relaxed">
                    Fortalecer a presença digital da clínica através de
                    conteúdos informativos e visualmente atrativos.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-light mb-3 text-[#B5918A] tracking-wider uppercase">
                    Solução
                  </h4>
                  <p className="text-[#6B5A50] font-light leading-relaxed">
                    Criação de posts, carrosséis e stories alinhados à
                    identidade da marca, transmitindo confiança e
                    profissionalismo.
                  </p>
                </div>
              </div>
            </div>

            {/* Portfolio Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              ].map((src, idx) => (
                <motion.img
                  key={idx}
                  src={src}
                  alt={`Social media design ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                />
              ))}
              <motion.div
                className="bg-[#E8DDD5] p-6 flex items-center justify-center text-center rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-[#6B5A50] font-light">
                  E muito mais projetos...
                </p>
              </motion.div>
            </div>
          </div>

          {/* Case Study: Doutor Lentes */}
          <div className="border border-[#D4BFB0]/30 p-8 lg:p-12 relative rounded-lg">
            {/* Corner accent */}
            <div className="absolute bottom-0 right-0 w-16 h-16">
              <div className="absolute bottom-0 right-0 w-full h-[1px] bg-[#B5918A]"></div>
              <div className="absolute bottom-0 right-0 w-[1px] h-full bg-[#B5918A]"></div>
            </div>

            <div className="mb-12">
              <h3
                className="text-3xl font-light text-[#6B5A50] mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Doutor Lentes
              </h3>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-sm font-light mb-3 text-[#B5918A] tracking-wider uppercase">
                    Objetivo
                  </h4>
                  <p className="text-[#6B5A50] font-light leading-relaxed">
                    Comunicar os benefícios das lentes de contato de forma
                    clara, moderna e acessível.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-light mb-3 text-[#B5918A] tracking-wider uppercase">
                    Solução
                  </h4>
                  <p className="text-[#6B5A50] font-light leading-relaxed">
                    Desenvolvimento de campanhas promocionais, conteúdos
                    educativos e materiais voltados para o engajamento nas redes
                    sociais.
                  </p>
                </div>
              </div>
            </div>

            {/* Portfolio Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              ].map((src, idx) => (
                <motion.img
                  key={idx}
                  src={src}
                  alt={`Doutor Lentes design ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                />
              ))}
              <motion.div
                className="bg-[#E8DDD5] p-6 flex items-center justify-center text-center rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-[#6B5A50] font-light">
                  Campanhas e materiais promocionais
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl font-light text-[#6B5A50] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Vamos Trabalhar Juntos?
          </h2>

          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <motion.div
              className="w-8 h-[1px] bg-[#D4BFB0]"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-4 h-4 text-[#B5918A]" />
            </motion.div>
            <motion.div
              className="w-8 h-[1px] bg-[#D4BFB0]"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <p className="text-lg text-[#8B7265] mb-12 font-light leading-relaxed">
            Se você procura uma comunicação visual profissional, criativa e
            alinhada à essência da sua marca, será um prazer transformar suas
            ideias em projetos visuais únicos.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: Instagram,
                text: "@anacaroline.d",
                href: "https://instagram.com/anacaroline.d",
              },
              {
                icon: Mail,
                text: "E-mail",
                href: "mailto:anacarolinedavid@gmail.com",
              },
            ].map((contact, idx) => (
              <motion.a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center justify-center gap-3 border border-[#D4BFB0]/40 text-[#6B5A50] p-6 hover:border-[#B5918A] transition-colors rounded-lg group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px rgba(181, 145, 138, 0.15)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <contact.icon className="w-5 h-5" />
                </motion.div>
                <span className="text-sm tracking-wide">{contact.text}</span>
              </motion.a>
            ))}
          </div>

          <p className="text-[#8B7265] font-light">Obrigado pela visita.</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6B5A50] text-[#E8DDD5] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm tracking-wide font-light">
            © 2026 Caroline David - Designer Gráfica
          </p>
        </div>
      </footer>
    </div>
  );
}
