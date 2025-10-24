'use client'
import CircuitAnimation from '../../components/CircuitAnimation'
import Image from 'next/image'
import Menu from '@/components/menu'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Projects() {
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
      <section className="relative z-30 mt-48 sm:mt-56 w-full max-w-5xl flex flex-col gap-10 pb-20">

        {/* SECTION : PROJETS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative border border-blue-500/50 bg-blue-900/10 backdrop-blur-md 
                     rounded-2xl px-5 py-6 sm:px-8 sm:py-8 
                     shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_40px_#00aaff66]
                     transition-all duration-500 before:content-[''] 
                     before:absolute before:top-0 before:left-0 before:w-3 before:h-3 before:bg-blue-400 
                     before:rounded-br-lg after:content-[''] after:absolute after:bottom-0 after:right-0 
                     after:w-3 after:h-3 after:bg-blue-400 after:rounded-tl-lg"
        >
          <h2 className="text-blue-400 text-lg sm:text-2xl font-semibold mb-6 tracking-wide flex items-center">
            MES PROJETS
            <span className="ml-3 w-16 sm:w-24 h-[2px] bg-blue-400 animate-pulse"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

            {/* JOB BOARD */}
            <div className="flex flex-col items-center text-center gap-3">
              <Image
                src="/34932a3b-dbac-4a54-8429-a49d36d3552f.png"
                alt="JobBoard Project"
                width={300}
                height={160}
                className="rounded-lg shadow-[0_0_20px_#00aaff88]"
              />
              <h3 className="text-blue-400 font-semibold text-lg">Job Board</h3>
              <p className="text-sm text-slate-300">
                Projet de 2 semaines visant à reproduire les fonctionnalités d’un site de recherche d’emploi.<br/>
                <span className="text-blue-400">Techno :</span> React, Next.js (Front) · Node.js / Express (Back) · MySQL (BDD)
              </p>
            </div>

            {/* PORTFOLIO IA */}
            <div className="flex flex-col items-center text-center gap-3">
              <Image
                src="/9266301e-8288-4d8c-9131-39fb594a16f6.png"
                alt="Portfolio IA"
                width={300}
                height={160}
                className="rounded-lg shadow-[0_0_20px_#00aaff88]"
              />
              <h3 className="text-blue-400 font-semibold text-lg">Portfolio IA Interactif</h3>
              <p className="text-sm text-slate-300">
                Création d’un portfolio en Next.js à univers cyber/IA. <br/>
                <span className="text-blue-400">Techno :</span> Front Next.js · Back Express (prévu) · MySQL + IA (PyTorch / TensorFlow / Scikit-learn pour la V2/V3)
              </p>
            </div>

            {/* CV INTERACTIF */}
            <div className="flex flex-col items-center text-center gap-3">
              <Image
                src="/316b3059-5132-4219-8809-d4525ab12ddc.png"
                alt="CV Interactif"
                width={300}
                height={160}
                className="rounded-lg shadow-[0_0_20px_#00aaff88]"
              />
              <h3 className="text-blue-400 font-semibold text-lg">CV Interactif</h3>
              <p className="text-sm text-slate-300">
                <Link
                  href = "https://olivaresdavy.github.io/Resume-online/">
                  <span>CV immersif réalisé en 3 jours en HTML/CSS.</span><br/>
                    <span className="text-blue-400">Framework :</span> Materialize
                </Link>
              </p>
            </div>

            {/* HANGMAN */}
            <div className="flex flex-col items-center text-center gap-3">
              <Image
                src="/daa4027b-888e-41ff-8810-daab38bb2867.png"
                alt="Hangman Python"
                width={300}
                height={160}
                className="rounded-lg shadow-[0_0_20px_#00aaff88]"
              />
              <h3 className="text-blue-400 font-semibold text-lg">Hangman (Jeu du pendu)</h3>
              <p className="text-sm text-slate-300">
                Jeu Python sans interface graphique, avec sauvegarde des pseudos et scores.<br/>
                <span className="text-blue-400">Techno :</span> Python + JSON
              </p>
            </div>

            {/* CEASAR CIPHER */}
            <div className="flex flex-col items-center text-center gap-3 sm:col-span-2">
              <Image
                src="/ca49d9d8-867e-412c-be98-87b2e7b701f3.png"
                alt="Ceasar Cipher"
                width={300}
                height={160}
                className="rounded-lg shadow-[0_0_20px_#00aaff88]"
              />
              <h3 className="text-blue-400 font-semibold text-lg">Ceasar Cipher</h3>
              <p className="text-sm text-slate-300">
                Petit code Python permettant d’encoder et décoder un message via chiffrement de César.<br/>
                <span className="text-blue-400">Techno :</span> Python
              </p>
            </div>

          </div>
        </motion.div>
      </section>

      {/* Menu principal */}
      <Menu />
    </main>
  )
}
