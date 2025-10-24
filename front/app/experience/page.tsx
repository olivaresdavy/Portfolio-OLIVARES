'use client'
import CircuitAnimation from '../../components/CircuitAnimation'
import Image from 'next/image'
import Menu from '@/components/menu'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Experience() {
  const [showAvatar, setShowAvatar] = useState(true)

  // ---- Gestion de la visibilité de l’avatar selon l’état du menu ----
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

      {/* Halo animé collé à l’avatar */}
      <div
        className="halo fixed top-6 right-6 sm:right-10 sm:top-10
                   w-[180px] h-[180px] sm:w-[180px] sm:h-[180px]
                   rounded-full animate-pulse-glow bg-blue-500/20 blur-3xl z-10"
      />

      {/* Avatar — disparaît quand le menu s’ouvre */}
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
        {/* EXPÉRIENCES */}
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
            EXPÉRIENCES PROFESSIONNELLES
            <span className="ml-3 w-16 sm:w-24 h-[2px] bg-blue-400 animate-pulse"></span>
          </h2>

          <ul className="flex flex-col gap-6 text-slate-200 text-sm sm:text-base leading-relaxed">
            <li>
              <p className="font-semibold text-blue-400">HTL Biotechnology - Technicien R&D Analytique</p>
              <p className="italic text-slate-400">02/2023 - 08/2025 | Javené (35)</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Conception et optimisation de méthodes analytiques (HPLC, SEC, GC)</li>
                <li>Validation de méthodes d’analyse (VMA) et rédaction de rapports</li>
                <li>Projets transverses R&D / CQ</li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-blue-400">HTL Biotechnology - Technicien Contrôle Qualité</p>
              <p className="italic text-slate-400">10/2018 - 02/2023 | Javené (35)</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Analyses de routine en environnement BPF</li>
                <li>Édition et revue des bulletins d’analyse (BA)</li>
                <li>Key user ERP (Microsoft Dynamics)</li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-blue-400">Stemcell Technologies - Projet international Erasmus+</p>
              <p className="italic text-slate-400">01/2018 - 07/2018 | Cambridge (Royaume-Uni)</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Travaux de recherche en culture de cellules souches (3D / organoïdes)</li>
                <li>Conception expérimentale, formulation et restitution de résultats</li>
                <li>Utilisation du FACS (Fluorescence Activated Cell Sorting)</li>
              </ul>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Menu principal (même placement que la page About Me) */}
      <Menu />
    </main>
  )
}
