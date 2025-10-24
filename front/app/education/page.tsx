'use client'
import CircuitAnimation from '../../components/CircuitAnimation'
import Image from 'next/image'
import Menu from '@/components/menu'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Education() {
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

        {/* FORMATIONS ACADÉMIQUES */}
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
            FORMATIONS
            <span className="ml-3 w-16 sm:w-24 h-[2px] bg-blue-400 animate-pulse"></span>
          </h2>

          <ul className="flex flex-col gap-6 text-slate-200 text-sm sm:text-base leading-relaxed">
            <li>
              <p className="font-semibold text-blue-400">MSc Pro Développement & Data/IA</p>
              <p className="italic text-slate-400">Epitech Rennes – 2025 à 2028</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Master of Science Professionnel axé sur l’Intelligence Artificielle et la Data</li>
                <li>Spécialisation en IA et Data </li>
                <li>Rythme alterné : 2 semaines école / 6 semaines entreprise</li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-blue-400">Technicien Supérieur en Pharmacie & Cosmétique Industrielle (TSPCI)</p>
              <p className="italic text-slate-400">IMT Tours – 2015 à 2017</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Formation centrée sur la R&D et la qualité en industrie pharmaceutique</li>
                <li>Apprentissage des méthodologies analytiques (HPLC, validation, etc.)</li>
              </ul>
            </li>

            <li>
              <p className="font-semibold text-blue-400">Cursus universitaire et apprentissage</p>
              <p className="italic text-slate-400">Université Lille 2 / ULB Bruxelles / CFA Le Mans – 2009 à 2015</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Études en médecine, pharmacie et formation en apprentissage</li>
                <li>Solide base scientifique, rigueur expérimentale et esprit analytique</li>
              </ul>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Menu principal */}
      <Menu />
    </main>
  )
}
