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
      <section className="relative z-30 mt-48 sm:mt-56 w-full max-w-5xl flex flex-col gap-12 pb-20">

        {/* TITRE GLOBAL */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-blue-400 text-xl sm:text-3xl font-semibold tracking-wide text-center mb-8"
        >
          EXPÉRIENCES PROFESSIONNELLES & SOFT SKILLS
        </motion.h2>

        {/* === LISTE DES CARTES EXPÉRIENCE === */}
        <div className="flex flex-col gap-10">

          {/* --- HTL R&D --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 items-center border border-blue-500/40 bg-blue-900/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 gap-6 
                      shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_50px_#00aaff77] transition-all duration-500"
          >
            {/* Colonne gauche : expérience */}
            <div className="flex flex-col text-center sm:text-left gap-3">
              <h3 className="text-blue-400 font-semibold text-lg">HTL Biotechnology – Technicien R&D Analytique</h3>
              <p className="italic text-slate-400">02/2023 - 08/2025 | Javené (35)</p>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Conception et optimisation de méthodes analytiques (HPLC, SEC, GC)</li>
                <li>Validation de méthodes d’analyse (VMA) et rédaction de rapports</li>
                <li>Projets transverses R&D / CQ</li>
              </ul>
            </div>

            {/* Colonne droite : soft skills */}
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li><strong className="text-blue-400">Rigueur scientifique</strong> et respect des procédures</li>
              <li><strong className="text-blue-400">Esprit d’analyse</strong> et validation expérimentale</li>
              <li><strong className="text-blue-400">Autonomie</strong> et gestion de priorités</li>
              <li><strong className="text-blue-400">Communication technique</strong> claire et structurée</li>
              <li><strong className="text-blue-400">Collaboration</strong> inter-service R&D / CQ</li>
            </ul>
          </motion.div>

          {/* --- HTL CQ --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 items-center border border-blue-500/40 bg-blue-900/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 gap-6 
                      shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_50px_#00aaff77] transition-all duration-500"
          >
            <div className="flex flex-col text-center sm:text-left gap-3">
              <h3 className="text-blue-400 font-semibold text-lg">HTL Biotechnology – Technicien Contrôle Qualité</h3>
              <p className="italic text-slate-400">10/2018 - 02/2023 | Javené (35)</p>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Analyses de routine en environnement BPF</li>
                <li>Édition et revue des bulletins d’analyse (BA)</li>
                <li>Key user ERP (Microsoft Dynamics)</li>
              </ul>
            </div>

            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li><strong className="text-blue-400">Organisation</strong> et fiabilité dans l’exécution des tâches</li>
              <li><strong className="text-blue-400">Gestion du temps</strong> et des priorités en environnement BPF</li>
              <li><strong className="text-blue-400">Adaptabilité</strong> aux changements de procédés</li>
              <li><strong className="text-blue-400">Esprit d’équipe</strong> et coordination interservices</li>
              <li><strong className="text-blue-400">Documentation rigoureuse</strong> des résultats analytiques</li>
            </ul>
          </motion.div>

          {/* --- STEMCELL TECHNOLOGIES --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 items-center border border-blue-500/40 bg-blue-900/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 gap-6 
                      shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_50px_#00aaff77] transition-all duration-500"
          >
            <div className="flex flex-col text-center sm:text-left gap-3">
              <h3 className="text-blue-400 font-semibold text-lg">Stemcell Technologies – Projet Erasmus+</h3>
              <p className="italic text-slate-400">01/2018 - 07/2018 | Cambridge (Royaume-Uni)</p>
              <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                <li>Recherches sur cellules souches et organoïdes 3D</li>
                <li>Conception expérimentale, formulation et restitution de résultats</li>
                <li>Utilisation du FACS (tri cellulaire par fluorescence)</li>
              </ul>
            </div>

            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li><strong className="text-blue-400">Curiosité scientifique</strong> et veille technologique</li>
              <li><strong className="text-blue-400">Ouverture culturelle</strong> et communication interculturelle</li>
              <li><strong className="text-blue-400">Adaptabilité</strong> à un environnement international</li>
              <li><strong className="text-blue-400">Travail collaboratif</strong> et restitution orale en anglais</li>
              <li><strong className="text-blue-400">Approche expérimentale</strong> et rigueur méthodologique</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Menu principal (même placement que la page About Me) */}
      <Menu />
    </main>
  )
}
