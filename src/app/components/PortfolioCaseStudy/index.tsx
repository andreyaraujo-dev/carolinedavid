import { motion } from "motion/react";

interface PortfolioCaseStudyProps {
  title: string;
  objective: string;
  solution: string;
  images: string[];
  imageAltPrefix: string;
  hoverRotate: number;
  cornerPosition: "top-left" | "bottom-right";
  footerText: string;
  className?: string;
}

export function PortfolioCaseStudy({
  title,
  objective,
  solution,
  images,
  imageAltPrefix,
  hoverRotate,
  cornerPosition,
  footerText,
  className = "",
}: PortfolioCaseStudyProps) {
  const cornerClasses =
    cornerPosition === "top-left"
      ? "absolute top-0 left-0 w-16 h-16"
      : "absolute bottom-0 right-0 w-16 h-16";

  const cornerLineClasses =
    cornerPosition === "top-left"
      ? {
          horizontal: "absolute top-0 left-0 w-full h-[1px] bg-[#B5918A]",
          vertical: "absolute top-0 left-0 w-[1px] h-full bg-[#B5918A]",
        }
      : {
          horizontal: "absolute bottom-0 right-0 w-full h-[1px] bg-[#B5918A]",
          vertical: "absolute bottom-0 right-0 w-[1px] h-full bg-[#B5918A]",
        };

  return (
    <div
      className={`border border-[#D4BFB0]/30 p-8 lg:p-12 relative rounded-lg ${className}`}
    >
      <div className={cornerClasses}>
        <div className={cornerLineClasses.horizontal}></div>
        <div className={cornerLineClasses.vertical}></div>
      </div>

      <div className="mb-12">
        <h3
          className="text-3xl font-light text-[#6B5A50] mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-sm font-light mb-3 text-[#B5918A] tracking-wider uppercase">
              Objetivo
            </h4>
            <p className="text-[#6B5A50] font-light leading-relaxed">
              {objective}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-light mb-3 text-[#B5918A] tracking-wider uppercase">
              Solução
            </h4>
            <p className="text-[#6B5A50] font-light leading-relaxed">
              {solution}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            alt={`${imageAltPrefix} ${idx + 1}`}
            className="w-full h-64 object-cover rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, rotate: hoverRotate }}
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
          <p className="text-[#6B5A50] font-light">{footerText}</p>
        </motion.div>
      </div>
    </div>
  );
}
