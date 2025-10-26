'use client'
import CircuitAnimation from '../../components/CircuitAnimation'
import Image from 'next/image'
import Menu from '@/components/menu'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Formation() {
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
          FORMATIONS & COMPÉTENCES TRANSVERSES
        </motion.h2>

        {/* === LISTE DES CARTES FORMATION === */}
        <div className="flex flex-col gap-10">

          {/* --- MSc Pro IA – EPITECH --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 items-center border border-blue-500/40 bg-blue-900/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 gap-6 
                      shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_50px_#00aaff77] transition-all duration-500"
          >
            {/* Colonne gauche : formation */}
            <div className="flex flex-col text-center sm:text-left gap-3">
              <h3 className="text-blue-400 font-semibold text-lg">MSc Pro – Epitech Rennes</h3>
              <p className="italic text-slate-400">2025 - 2028 | En cours</p>
              <p className="text-sm text-slate-300">
                Formation orientée développement logiciel, data et intelligence artificielle.  
                Rythme alterné (2 semaines école / 6 semaines entreprise).
              </p>
            </div>

            {/* Colonne droite : compétences */}
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li><strong className="text-blue-400">Résolution de problèmes</strong> complexes et autonomie technique</li>
              <li><strong className="text-blue-400">Travail en équipe</strong> sur des projets collaboratifs</li>
              <li><strong className="text-blue-400">Veille technologique</strong> et curiosité intellectuelle</li>
              <li><strong className="text-blue-400">Apprentissage continu</strong> et montée en compétence rapide</li>
              <li><strong className="text-blue-400">Adaptabilité</strong> aux environnements techniques</li>
            </ul>
          </motion.div>

          {/* --- Pré-MSc – Epitech Rennes --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 items-center border border-blue-500/40 bg-blue-900/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 gap-6 
                      shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_50px_#00aaff77] transition-all duration-500"
          >
            <div className="flex flex-col text-center sm:text-left gap-3">
              <h3 className="text-blue-400 font-semibold text-lg">Pré-MSc – Epitech Rennes</h3>
              <p className="italic text-slate-400">2025 | Préparation intensive</p>
              <p className="text-sm text-slate-300">
                Formation de mise à niveau en algorithmie, POO, administration système et développement web.
              </p>
            </div>

            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li><strong className="text-blue-400">Esprit logique</strong> et structuration du raisonnement</li>
              <li><strong className="text-blue-400">Rigueur</strong> et persévérance dans la résolution de bugs</li>
              <li><strong className="text-blue-400">Autonomie</strong> dans la recherche et l&apos;apprentissage</li>
              <li><strong className="text-blue-400">Collaboration</strong> et partage de connaissances</li>
              <li><strong className="text-blue-400">Organisation</strong> et gestion du temps</li>
            </ul>
          </motion.div>

          {/* --- TSPCI – IMT TOURS --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 items-center border border-blue-500/40 bg-blue-900/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 gap-6 
                      shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_50px_#00aaff77] transition-all duration-500"
          >
            <div className="flex flex-col text-center sm:text-left gap-3">
              <h3 className="text-blue-400 font-semibold text-lg">Technicien Supérieur en Pharmacie & Cosmétique Industrielle – IMT Tours</h3>
              <p className="italic text-slate-400">2015 - 2017</p>
              <p className="text-sm text-slate-300">
                Formation technique axée sur la validation de procédés industriels.
              </p>
            </div>

            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li><strong className="text-blue-400">Rigueur expérimentale</strong> et précision des analyses</li>
              <li><strong className="text-blue-400">Documentation</strong> et traçabilité des données</li>
              <li><strong className="text-blue-400">Responsabilité</strong> en environnement industriel</li>
              <li><strong className="text-blue-400">Respect</strong> des procédures et normes qualité</li>
              <li><strong className="text-blue-400">Communication technique</strong> écrite et orale</li>
            </ul>
          </motion.div>

          {/* --- UNIVERSITÉ / ERASMUS / PARCOURS SCIENTIFIQUE --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 items-center border border-blue-500/40 bg-blue-900/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 gap-6 
                      shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_50px_#00aaff77] transition-all duration-500"
          >
            <div className="flex flex-col text-center sm:text-left gap-3">
              <h3 className="text-blue-400 font-semibold text-lg">Parcours scientifique et académique</h3>
              <p className="italic text-slate-400">2009 - 2015 | Lille / Bruxelles / Le Mans</p>
              <p className="text-sm text-slate-300">
                Études en pharmacie, biologie et formation en apprentissage.  
                Expériences académiques internationales et interdisciplinaires.
              </p>
            </div>

            <ul className="list-disc list-inside text-sm text-slate-300 space-y-2">
              <li><strong className="text-blue-400">Ouverture d’esprit</strong> et culture scientifique large</li>
              <li><strong className="text-blue-400">Curiosité intellectuelle</strong> et adaptabilité</li>
              <li><strong className="text-blue-400">Apprentissage interculturel</strong> (France / Belgique)</li>
              <li><strong className="text-blue-400">Capacité d’analyse</strong> et esprit critique</li>
              <li><strong className="text-blue-400">Persévérance</strong> dans les parcours longs</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Menu principal (même placement que la page About Me) */}
      <Menu />
    </main>
  )
}
