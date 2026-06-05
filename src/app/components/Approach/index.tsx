import { motion } from "motion/react";

export function Approach() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative inline-block mb-6">
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
  );
}
