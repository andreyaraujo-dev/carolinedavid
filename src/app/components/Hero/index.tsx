import { Minus, Sparkles } from "lucide-react";
import { motion, MotionValue } from "motion/react";

interface HeroProps {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  onContactClick: () => void;
}

export function Hero({ opacity, scale, onContactClick }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
                  className="w-12 h-[2px] text-brand-taupe"
                  strokeWidth={1}
                />
              </motion.div>
              <div className="inline-flex items-center gap-2 border border-brand-taupe/40 text-brand-text-muted px-4 py-2 rounded-lg">
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
                <span className="text-sm tracking-wide">Designer Gráfica</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-light text-brand-sage leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Olá, sou Caroline David
            </motion.h1>

            <motion.p
              className="text-lg text-brand-text leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Designer Gráfica focada na criação de conteúdo para redes sociais.
              Desde os meus 18 anos, a criatividade sempre esteve presente na
              minha vida. Foi através do design que encontrei uma forma de
              transformar ideias em comunicação visual, unindo estética,
              estratégia e propósito.
            </motion.p>

            <motion.button
              onClick={onContactClick}
              className="bg-brand-taupe text-brand-cream px-8 py-3 hover:bg-brand-taupe-dark transition-colors tracking-wide text-sm rounded-lg relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Vamos Trabalhar Juntos</span>
              <motion.div
                className="absolute inset-0 bg-brand-taupe-dark"
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
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand-taupe/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand-taupe/30"
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
  );
}
