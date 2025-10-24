'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full border-t border-blue-500/40 bg-blue-900/10 backdrop-blur-md
                 text-center text-slate-300 py-2 sm:py-3 z-[9999]
                 shadow-[0_-2px_15px_#00aaff44] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 
                   text-[11px] sm:text-[13px] font-light"
      >
        {/* Email */}
        <Link
          href="mailto:davy.olivares@epitech.eu"
          className="hover:text-blue-400 transition-colors flex items-center gap-1 sm:gap-2"
        >
          ✉️ <span>davy.olivares@epitech.eu</span>
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/olivaresdavy"
          target="_blank"
          className="hover:text-blue-400 transition-colors flex items-center gap-1 sm:gap-2"
        >
          💻 <span>GitHub</span>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/davy-olivares-928a79140/?originalSubdomain=fr"
          target="_blank"
          className="hover:text-blue-400 transition-colors flex items-center gap-1 sm:gap-2"
        >
          🔗 <span>LinkedIn</span>
        </Link>
      </motion.div>

      {/* Ligne finale */}
      <p className="mt-1 text-[10px] text-slate-500 tracking-wide select-none">
        © {new Date().getFullYear()} Davy Olivares — Tous droits réservés
      </p>
    </footer>
  )
}
