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
      <section className="relative z-30 mt-48 sm:mt-56 w-full max-w-6xl flex flex-col gap-12 pb-20">

        {/* Titre global */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-blue-400 text-xl sm:text-3xl font-semibold tracking-wide text-center mb-8"
        >
          MES PROJETS & COMPÉTENCES ASSOCIÉES
        </motion.h2>

        {/* === LISTE DES CARTES PROJET === */}
        <div className="flex flex-col gap-10">

          {/* --- JOB BOARD --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 items-center border border-blue-500/40 bg-blue-900/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 gap-6 shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_50px_#00aaff77] transition-all duration-500"
          >
            <div className="flex flex-col items-center text-center gap-3">
              <Image src="/34932a3b-dbac-4a54-8429-a49d36d3552f.png" alt="JobBoard Project" width={300} height={160} className="rounded-lg shadow-[0_0_20px_#00aaff88]" />
              <h3 className="text-blue-400 font-semibold text-lg">Job Board</h3>
              <p className="text-sm text-slate-300">
                Reproduction d’un site de recherche d’emploi avec API et gestion MySQL.<br/>
                <span className="text-blue-400">Durée :</span> 2 semaines
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
              <li><strong className="text-blue-400">Front-end :</strong> React, Next.js</li>
              <li><strong className="text-blue-400">Back-end :</strong> Node.js, Express</li>
              <li><strong className="text-blue-400">Base de données :</strong> MySQL</li>
              <li><strong className="text-blue-400">Gestion :</strong> Git, GitHub, routes REST</li>
              <li><strong className="text-blue-400">Compétences clés :</strong> structure full-stack, gestion d’API, CORS</li>
            </ul>
          </motion.div>

          {/* --- PORTFOLIO IA --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 items-center border border-blue-500/40 bg-blue-900/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 gap-6 shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_50px_#00aaff77] transition-all duration-500"
          >
            <div className="flex flex-col items-center text-center gap-3">
              <Image src="/9266301e-8288-4d8c-9131-39fb594a16f6.png" alt="Portfolio IA" width={300} height={160} className="rounded-lg shadow-[0_0_20px_#00aaff88]" />
              <h3 className="text-blue-400 font-semibold text-lg">Portfolio IA Interactif</h3>
              <p className="text-sm text-slate-300">
                Portfolio personnel immersif en Next.js avec animations IA et halo lumineux.<br/>
                <span className="text-blue-400">Durée :</span> projet continu
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
              <li><strong className="text-blue-400">Front-end :</strong> Next.js, Tailwind, Framer Motion</li>
              <li><strong className="text-blue-400">Design :</strong> SVG, Inkscape, animations lumineuses</li>
              <li><strong className="text-blue-400">IA (à venir) :</strong> PyTorch, Scikit-learn, TensorFlow</li>
              <li><strong className="text-blue-400">Outils :</strong> Git, Vercel</li>
              <li><strong className="text-blue-400">Compétences clés :</strong> UX futuriste, animation, responsive</li>
            </ul>
          </motion.div>

          {/* --- CV INTERACTIF --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 items-center border border-blue-500/40 bg-blue-900/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 gap-6 shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_50px_#00aaff77] transition-all duration-500"
          >
            <div className="flex flex-col items-center text-center gap-3">
              {/* Image cliquable */}
              <Link
                href="https://olivaresdavy.github.io/Resume-online/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-[1.03] duration-300"
              >
                <Image
                  src="/316b3059-5132-4219-8809-d4525ab12ddc.png"
                  alt="CV Interactif"
                  width={300}
                  height={160}
                  className="rounded-lg shadow-[0_0_25px_#00aaffaa]"
                />
              </Link>

              <h3 className="text-blue-400 font-semibold text-lg">CV Interactif</h3>
              <p className="text-sm text-slate-300">
                CV immersif réalisé en HTML/CSS avec le framework Materialize.<br/>
                <span className="text-blue-400">Durée :</span> 3 jours
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
              <li><strong className="text-blue-400">Langages :</strong> HTML5, CSS3</li>
              <li><strong className="text-blue-400">Framework :</strong> Materialize</li>
              <li><strong className="text-blue-400">Compétences clés :</strong> UI/UX design, animation CSS</li>
            </ul>
          </motion.div>

          {/* --- HANGMAN --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 items-center border border-blue-500/40 bg-blue-900/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 gap-6 shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_50px_#00aaff77] transition-all duration-500"
          >
            <div className="flex flex-col items-center text-center gap-3">
              <Image src="/daa4027b-888e-41ff-8810-daab38bb2867.png" alt="Hangman" width={300} height={160} className="rounded-lg shadow-[0_0_20px_#00aaff88]" />
              <h3 className="text-blue-400 font-semibold text-lg">Hangman (Jeu du Pendu)</h3>
              <p className="text-sm text-slate-300">
                Jeu Python avec gestion des scores en JSON et logique d’erreur.<br/>
                <span className="text-blue-400">Durée :</span> 2 jours
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
              <li><strong className="text-blue-400">Langage :</strong> Python</li>
              <li><strong className="text-blue-400">Outils :</strong> JSON, Terminal</li>
              <li><strong className="text-blue-400">Compétences clés :</strong> algorithmie, boucles, conditions, sauvegarde</li>
            </ul>
          </motion.div>

          {/* --- CEASAR CIPHER --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 items-center border border-blue-500/40 bg-blue-900/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 gap-6 shadow-[0_0_30px_#00aaff33] hover:shadow-[0_0_50px_#00aaff77] transition-all duration-500"
          >
            <div className="flex flex-col items-center text-center gap-3">
              <Image src="/ca49d9d8-867e-412c-be98-87b2e7b701f3.png" alt="Ceasar Cipher" width={300} height={160} className="rounded-lg shadow-[0_0_20px_#00aaff88]" />
              <h3 className="text-blue-400 font-semibold text-lg">Ceasar Cipher</h3>
              <p className="text-sm text-slate-300">
                Script Python permettant de chiffrer/déchiffrer un message par décalage de caractères.<br/>
                <span className="text-blue-400">Durée :</span> 1 jour
              </p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
              <li><strong className="text-blue-400">Langage :</strong> Python</li>
              <li><strong className="text-blue-400">Concepts :</strong> manipulation de chaînes, boucles, logique</li>
              <li><strong className="text-blue-400">Compétences clés :</strong> chiffrement, algorithmie simple</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Menu principal */}
      <Menu />
    </main>
  )
}
