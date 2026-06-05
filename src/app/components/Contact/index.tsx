import { Instagram, Mail, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const CONTACTS = [
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
];

export function Contact() {
  return (
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
          {CONTACTS.map((contact, idx) => (
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
  );
}
