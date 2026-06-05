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
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
          {SERVICES.map((service, index) => (
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
  );
}
