'use client'
import CircuitAnimation from '../../components/CircuitAnimation'
import Image from 'next/image'
import Menu from '@/components/menu'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Contact() {
  const [showAvatar, setShowAvatar] = useState(true)

  // ---- Gestion de la visibilité de l’avatar selon le menu ----
  useEffect(() => {
    const handleAvatarVisibility = (e: Event) => {
      const ev = e as CustomEvent<boolean>
      setShowAvatar(Boolean(ev.detail))
    }

    document.addEventListener('avatar-visibility', handleAvatarVisibility as EventListener)
    return () => {
      document.removeEventListener('avatar-visibility', handleAvatarVisibility as EventListener)
    }
  }, [])

  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen w-screen bg-black overflow-y-auto overflow-x-hidden font-mono text-slate-200 px-4 sm:px-6">
      <CircuitAnimation />

      {/* Halo animé */}
      <div
        className="halo fixed top-6 right-6 sm:right-10 sm:top-10
                   w-[180px] h-[180px] sm:w-[180px] sm:h-[180px]
                   rounded-full animate-pulse-glow bg-blue-500/20 blur-3xl z-10"
      />

      {/* Avatar */}
      <motion.div
        layoutId="avatar"
        id="avatar-wrapper"
        animate={{ opacity: showAvatar ? 1 : 0, scale: showAvatar ? 1 : 0.9 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="avatar-wrap fixed top-6 right-6 sm:top-10 sm:right-10 z-50 flex items-center justify-center"
      >
        <Link href="/homepage">
          <div className="relative w-[90px] h-[90px] sm:w-[180px] sm:h-[180px] transition-all duration-300">
            <Image
              src="/Avatar_4.png"
              alt="avatar Davy"
              fill
              sizes="180px"
              priority
              style={{ objectFit: 'cover', borderRadius: '9999px' }}
              className="avatar-img border-4 border-blue-500 shadow-[0_0_30px_#00aaff] animate-breath animate-avatarFloat"
            />
          </div>
        </Link>
      </motion.div>

      {/* Contenu principal */}
      <section className="relative z-30 mt-48 sm:mt-56 w-full max-w-3xl flex flex-col gap-10 pb-20">

        {/* SECTION CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative border border-blue-500/50 bg-blue-900/10 backdrop-blur-md 
                     rounded-2xl px-5 py-6 sm:px-8 sm:py-8 
                     shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_40px_#00aaff66]
                     transition-all duration-500"
        >
          <h2 className="text-blue-400 text-lg sm:text-2xl font-semibold mb-6 tracking-wide flex items-center">
            CONTACTEZ-MOI
            <span className="ml-3 w-16 sm:w-24 h-[2px] bg-blue-400 animate-pulse"></span>
          </h2>

          {/* FORMULAIRE */}
          <form
            action="https://formspree.io/f/your_form_id" // Remplace par ton endpoint Formspree ou back perso
            method="POST"
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-blue-300 text-sm font-light">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="bg-transparent border border-blue-500 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-blue-300 text-sm font-light">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="bg-transparent border border-blue-500 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-blue-300 text-sm font-light">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="bg-transparent border border-blue-500 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 border border-blue-500 text-blue-300 rounded-lg px-5 py-2 font-semibold
                         hover:bg-blue-500 hover:text-black transition-all duration-300 shadow-[0_0_20px_#00aaff55]"
            >
              Envoyer le message
            </button>
          </form>
        </motion.div>

        {/* SECTION LIENS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative border border-blue-500/50 bg-blue-900/10 backdrop-blur-md 
                     rounded-2xl px-5 py-6 sm:px-8 sm:py-8 
                     shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_40px_#00aaff66]
                     transition-all duration-500 text-center"
        >
          <h2 className="text-blue-400 text-lg sm:text-2xl font-semibold mb-6 tracking-wide flex items-center justify-center">
            RESTEZ CONNECTÉ
            <span className="ml-3 w-16 sm:w-24 h-[2px] bg-blue-400 animate-pulse"></span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm sm:text-base">
            <Link
              href="mailto:davy.olivares@epitech.eu"
              className="hover:text-blue-400 transition-colors"
            >
              ✉️ davy.olivares@epitech.eu
            </Link>
            <Link
              href="https://github.com/olivaresdavy"
              target="_blank"
              className="hover:text-blue-400 transition-colors"
            >
              💻 GitHub
            </Link>
            <Link
            href="https://www.linkedin.com/in/davy-olivares-928a79140/?originalSubdomain=fr"
            target="_blank"
            className="hover:text-blue-400 transition-colors"
            >
            🔗 LinkedIn
            </Link>

          </div>
        </motion.div>
      </section>

      {/* Menu principal */}
      <Menu />
    </main>
  )
}
