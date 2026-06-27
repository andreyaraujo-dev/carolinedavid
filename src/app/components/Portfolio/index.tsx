import { PortfolioCaseStudy } from "../PortfolioCaseStudy";

const VIVA_IMAGES = [
  "/clinica-viva/1.png",
  "/clinica-viva/6.png",
  "/clinica-viva/3.png",
  "/clinica-viva/4.png",
  "/clinica-viva/5.png",
];

const DOUTOR_LENTES_IMAGES = [
  "/doutor-lentes/1.png",
  "/doutor-lentes/2.png",
  "/doutor-lentes/3.png",
  "/doutor-lentes/4.png",
  "/doutor-lentes/5.png",
];

const LIVIA_MENESES_IMAGES = [
  "/livia-meneses/1.png",
  "/livia-meneses/2.png",
  "/livia-meneses/3.png",
  "/livia-meneses/4.png",
  "/livia-meneses/5.png",
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-blush"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-brand-sage mb-4">
            Portfolio
          </h2>

          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-1 h-1 bg-brand-taupe rounded-full"></div>
            <div className="w-1 h-1 bg-brand-taupe rounded-full"></div>
            <div className="w-1 h-1 bg-brand-taupe rounded-full"></div>
          </div>
        </div>

        <PortfolioCaseStudy
          title="Viva Centro Optométrico"
          objective="Fortalecer a presença digital da clínica através de conteúdos informativos e visualmente atrativos."
          solution="Criação de posts, carrosséis e stories alinhados à identidade da marca, transmitindo confiança e profissionalismo."
          images={VIVA_IMAGES}
          imageAltPrefix="Social media design"
          hoverRotate={2}
          cornerPosition="top-left"
          footerText="E muito mais projetos..."
          className="mb-12"
        />

        <PortfolioCaseStudy
          title="Doutor Lentes"
          objective="Comunicar os benefícios das lentes de contato de forma clara, moderna e acessível."
          solution="Desenvolvimento de campanhas promocionais, conteúdos educativos e materiais voltados para o engajamento nas redes sociais."
          images={DOUTOR_LENTES_IMAGES}
          imageAltPrefix="Doutor Lentes design"
          hoverRotate={-2}
          cornerPosition="bottom-right"
          footerText="Campanhas e materiais promocionais"
          className="mb-12"
        />

        <PortfolioCaseStudy
          title="Livia Meneses — Nutricionista"
          objective="Construir uma presença digital acolhedora e profissional, transmitindo credibilidade e proximidade com o público."
          solution="Criação de conteúdos informativos sobre nutrição, posts educativos e materiais visuais alinhados à identidade pessoal da profissional."
          images={LIVIA_MENESES_IMAGES}
          imageAltPrefix="Livia Meneses design"
          hoverRotate={2}
          cornerPosition="top-left"
          footerText="Conteúdos educativos e informativos"
        />
      </div>
    </section>
  );
}
