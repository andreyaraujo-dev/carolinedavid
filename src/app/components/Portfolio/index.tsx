import { PortfolioCaseStudy } from "../PortfolioCaseStudy";

const VIVA_IMAGES = [
  "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
];

const DOUTOR_LENTES_IMAGES = [
  "https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1724862936518-ae7fcfc052c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-light text-[#6B5A50] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Portfolio
          </h2>

          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-1 h-1 bg-[#B5918A]"></div>
            <div className="w-1 h-1 bg-[#B5918A]"></div>
            <div className="w-1 h-1 bg-[#B5918A]"></div>
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
        />
      </div>
    </section>
  );
}
