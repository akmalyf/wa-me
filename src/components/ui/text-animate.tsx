import {motion} from "framer-motion";

export default function TextAnimate({children, className}: {children: React.ReactNode, className?: string}) {
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
