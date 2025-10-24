'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      className="fixed bottom-0 left-0 w-full border-t border-blue-500/50 bg-blue-900/20 backdrop-blur-md
                 text-center text-slate-300 py-4 sm:py-6 z-[9999]
                 shadow-[0_-5px_25px_#00aaff55] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm sm:text-base font-light"
      >
        {/* Email */}
        <Link
          href="mailto:davy.olivares@epitech.eu"
          className="hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          ✉️ <span>davy.olivares@epitech.eu</span>
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/olivaresdavy"
          target="_blank"
          className="hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          💻 <span>GitHub</span>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/davy-olivares-928a79140/?originalSubdomain=fr"
          target="_blank"
          className="hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          🔗 <span>LinkedIn</span>
        </Link>
      </motion.div>

      {/* Ligne finale */}
      <p className="mt-3 text-xs text-slate-500 tracking-wide select-none">
        © {new Date().getFullYear()} Davy Olivares — Tous droits réservés
      </p>
    </footer>
  )
}
