"use client"
import { motion } from "framer-motion"

interface ContainerProps {
  children: React.ReactNode
}

export default function ContainerFramer({ children }: ContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 1,
        delay: 0.7,
        ease: [0, 0.7, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
