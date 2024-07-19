import React from "react";
import { motion } from "framer-motion";

export const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export default function Animate({children, className}: {children: React.ReactNode, className?: string}) {
    return(
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1,
            }}
            className={`div ${className}`}
        >
            {children}
        </motion.div>
    )
}

export function AnimateStagger({children, className}: {children: React.ReactNode, className: string}) {

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={className}
    >
        {children}
    </motion.div>
  );
}
