import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const SERVICES = [
  "Aumentar a percepção de valor do seu negócio",
  "Tornar sua comunicação mais profissional",
  "Fortalecer sua identidade visual",
  "Criar conexão com o público certo",
  "Gerar mais confiança e reconhecimento",
];

export function Services() {
  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-blush">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="w-16 h-[1px] bg-brand-taupe"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              className="w-2 h-2 bg-brand-taupe rotate-45"
              animate={{ rotate: [45, 90, 45] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-16 h-[1px] bg-brand-taupe"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <h2 className="text-4xl font-light text-brand-sage mb-4">
            O Que Eu Posso Fazer Pela Sua Marca?
          </h2>
          <p className="text-lg text-brand-text font-light">
            A imagem fala antes do texto, o design é o convite!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              className="border border-brand-taupe/30 p-6 hover:border-brand-taupe transition-colors rounded-lg group bg-brand-cream/60"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(182, 157, 143, 0.15)",
              }}
            >
              <CheckCircle2 className="w-6 h-6 text-brand-taupe mb-4" />
              <p className="text-brand-text font-light">{service}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
