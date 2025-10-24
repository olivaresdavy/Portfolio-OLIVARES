'use client'
import CircuitAnimation from '../../components/CircuitAnimation'
import Image from 'next/image'
import Menu from '@/components/menu'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function About() {
  const [showAvatar, setShowAvatar] = useState(true)

  // ---- Gestion de la visibilité de l’avatar selon l’état du menu ----
  useEffect(() => {
    // Écoute sur `document` (aligné avec Menu.tsx qui fait document.dispatchEvent)
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

      {/* Halo animé (collé à l’avatar, pas centré globalement) */}
      <div
        className="halo fixed top-6 right-6 sm:right-10 sm:top-10
                   w-[180px] h-[180px] sm:w-[180px] sm:h-[180px]
                   rounded-full animate-pulse-glow bg-blue-500/20 blur-3xl z-10"
      />

      {/* Avatar — même logique que la homepage portrait */}
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
      <section className="relative z-30 mt-48 sm:mt-56 w-full max-w-4xl flex flex-col gap-8 sm:gap-10 pb-20">
        {/* ABOUT ME */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative border border-blue-500/50 bg-blue-900/10 backdrop-blur-md 
                     rounded-xl sm:rounded-2xl px-5 py-4 sm:px-8 sm:py-6 
                     shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_40px_#00aaff66] 
                     transition-all duration-500 before:content-[''] 
                     before:absolute before:top-0 before:left-0 before:w-3 before:h-3 before:bg-blue-400 
                     before:rounded-br-lg after:content-[''] after:absolute after:bottom-0 after:right-0 
                     after:w-3 after:h-3 after:bg-blue-400 after:rounded-tl-lg"
        >
          <h2 className="text-blue-400 text-lg sm:text-2xl font-semibold mb-3 tracking-wide flex items-center">
            A PROPOS DE MOI
            <span className="ml-3 w-16 sm:w-24 h-[2px] bg-blue-400 animate-pulse"></span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Ancien technicien R&D issu du secteur pharmaceutique, je me reconvertis dans le développement 
            informatique avec une spécialisation en <span className="text-blue-400">Data & Intelligence Artificielle</span>. 
            Je recherche une alternance à compter de <span className="text-blue-400">janvier 2026</span> pour une durée 
            de 33 mois (rythme 2 semaines Epitech / 6 semaines entreprise).
          </p>
        </motion.div>

        {/* COMPÉTENCES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative border border-blue-500/50 bg-blue-900/10 backdrop-blur-md 
                     rounded-xl sm:rounded-2xl px-5 py-4 sm:px-8 sm:py-6 
                     shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_40px_#00aaff66] 
                     transition-all duration-500 before:content-[''] 
                     before:absolute before:top-0 before:left-0 before:w-3 before:h-3 before:bg-blue-400 
                     before:rounded-br-lg after:content-[''] after:absolute after:bottom-0 after:right-0 
                     after:w-3 after:h-3 after:bg-blue-400 after:rounded-tl-lg"
        >
          <h2 className="text-blue-400 text-lg sm:text-2xl font-semibold mb-3 tracking-wide flex items-center">
            COMPÉTENCES
            <span className="ml-3 w-16 sm:w-24 h-[2px] bg-blue-400 animate-pulse"></span>
          </h2>
          <ul className="text-slate-200 text-sm sm:text-base grid grid-cols-1 sm:grid-cols-2 gap-y-2 list-disc list-inside">
            <li>Python (scripts d’analyse, IA, data pipelines)</li>
            <li>JavaScript / React / Next.js</li>
            <li>SQL / MySQL</li>
            <li>Git / VS Code / Linux</li>
            <li>Méthodes analytiques : HPLC, SEC, validation</li>
            <li>Rigueur scientifique & documentation technique</li>
          </ul>
        </motion.div>

        {/* HOBBIES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative border border-blue-500/50 bg-blue-900/10 backdrop-blur-md 
                     rounded-xl sm:rounded-2xl px-5 py-4 sm:px-8 sm:py-6 
                     shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_40px_#00aaff66] 
                     transition-all durée-500 before:content-[''] 
                     before:absolute before:top-0 before:left-0 before:w-3 before:h-3 before:bg-blue-400 
                     before:rounded-br-lg after:content-[''] after:absolute after:bottom-0 after:right-0 
                     after:w-3 after:h-3 after:bg-blue-400 after:rounded-tl-lg mb-20"
        >
          <h2 className="text-blue-400 text-lg sm:text-2xl font-semibold mb-3 tracking-wide flex items-center">
            HOBBIES
            <span className="ml-3 w-16 sm:w-24 h-[2px] bg-blue-400 animate-pulse"></span>
          </h2>
          <ul className="text-slate-200 text-sm sm:text-base list-disc list-inside space-y-2">
            <li>Randonnée : itinérances & treks longue distance</li>
            <li>Jeux de société : stratégie, logique & collaboration</li>
            <li>Sports : boxe anglaise, running & crossfit</li>
          </ul>
        </motion.div>
      </section>

      {/* Menu principal */}
      <Menu />
    </main>
  )
}
