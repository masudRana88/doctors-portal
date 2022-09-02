import React from 'react'
import { motion } from "framer-motion"
export default function Message({children}:props) {
  return (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} className="px-6 py-5 mb-3 text-base text-blue-700 bg-blue-100 rounded-lg" role="alert">{children}
    </motion.div>
  )
}
type props ={
    children: string
}