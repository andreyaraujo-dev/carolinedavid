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
          horizontal: "absolute top-0 left-0 w-full h-[1px] bg-brand-taupe",
          vertical: "absolute top-0 left-0 w-[1px] h-full bg-brand-taupe",
        }
      : {
          horizontal: "absolute bottom-0 right-0 w-full h-[1px] bg-brand-taupe",
          vertical: "absolute bottom-0 right-0 w-[1px] h-full bg-brand-taupe",
        };

  return (
    <div
      className={`border border-brand-taupe/30 p-8 lg:p-12 relative rounded-lg bg-brand-cream/70 ${className}`}
    >
      <div className={cornerClasses}>
        <div className={cornerLineClasses.horizontal}></div>
        <div className={cornerLineClasses.vertical}></div>
      </div>

      <div className="mb-12">
        <h3 className="text-3xl font-light text-brand-sage mb-8">
          {title}
        </h3>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-sm font-light mb-3 text-brand-taupe tracking-wider uppercase">
              Objetivo
            </h4>
            <p className="text-brand-text font-light leading-relaxed">
              {objective}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-light mb-3 text-brand-taupe tracking-wider uppercase">
              Solução
            </h4>
            <p className="text-brand-text font-light leading-relaxed">
              {solution}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-white/50 shadow-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, rotate: hoverRotate }}
          >
            <img
              src={src}
              alt={`${imageAltPrefix} ${idx + 1}`}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
        <motion.div
          className="aspect-[4/5] bg-brand-blush p-6 flex items-center justify-center text-center rounded-lg shadow-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-brand-text font-light">{footerText}</p>
        </motion.div>
      </div>
    </div>
  );
}
