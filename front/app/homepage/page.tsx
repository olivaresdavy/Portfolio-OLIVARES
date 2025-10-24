'use client'
import CircuitAnimation from '../../components/CircuitAnimation'
import Image from 'next/image'
import Menu from '@/components/menu'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Home() {
  {/*Ajout de message selon le contexte*/}  
  const message = {
    firstVisit:[
      'Bienvenue cher visiteur',
      "Je m'appelle Davy OLIVARES",
      "Systeme en cours d'initialisation",
      'Prêt à explorer mon univers numérique ?'
    ],
    shortReturn: ["Wow, déjà de retour ? Je n'ai pas eu le temps de me recharger..."],
    longReturn: ["Heureux de te revoir ! Ca faisait un moment que je ne t'avais pas revu !"],
  }

  {/*Etats reacts pour affiché et clean du texte*/}
  const [displayedText, setDisplayedText] = useState<string[]>([])
  const [hasPlayed, setHasPlayed] = useState(false)

  useEffect(() => {
    /*Récupération des données de visite via localStorage*/
    const visited = localStorage.getItem('visited_homepage')
    const lastVisit = localStorage.getItem('last_visit')

    /*Récupération de la date et heure actuelle*/
    const now = new Date().getTime()

    /*Détermination des différents cas de visite ou non*/
    if (visited && lastVisit) {
      const diff = now - parseInt(lastVisit)
      const minutes = diff / 1000 / 60
      /*retour rapide (<15 min)*/
      if (minutes < 15) {
        setDisplayedText([message.shortReturn[0]])
        setHasPlayed(true)
      }
      /*retour plus long (>15 min)*/
      else {
        setDisplayedText([message.longReturn[0]])
        setHasPlayed(true)
      }

      /*Mise à jour de la dernière visite*/
      localStorage.setItem('last_visit', now.toString())
      return
    }

    /*Première visite (animation complète)*/
    const phrases = message.firstVisit
    let phraseIndex = 0
    let charIndex = 0
    let currentLine = ''
    let tempDisplayed: string[] = []

    let typing: NodeJS.Timeout
    let pauseTimeout: NodeJS.Timeout
    let dotsInterval: NodeJS.Timeout

    const type = () => {
      clearInterval(typing) /*permet de s'assurer de stopper tout interval existant*/

      typing = setInterval(() => {

        // Cas spécial : on ne tape pas "System initializing" lettre par lettre
        if (phrases[phraseIndex].toLowerCase().includes("Systeme en cours d'initialisation")) {
          clearInterval(typing) // on stoppe le typing normal
          let dots = ''
          let repeat = 0
          dotsInterval = setInterval(() => {
            dots = dots.length < 3 ? dots + '.' : ''
            setDisplayedText([...tempDisplayed, `${phrases[phraseIndex]}${dots}`])
            if (dots === '' && ++repeat >= 2) {
              clearInterval(dotsInterval)
              tempDisplayed = [...tempDisplayed, `${phrases[phraseIndex]} ...`]
              phraseIndex++
              charIndex = 0
              setTimeout(type, 600)
            }
          }, 400)
          return // ← important : on sort de la fonction ici !
        }

        /*Frappe normale lettre par lettre*/
        currentLine += phrases[phraseIndex][charIndex]
        setDisplayedText([...tempDisplayed, currentLine])
        charIndex++

        /*Fin de la phrase*/
        if (charIndex >= phrases[phraseIndex].length) {
          clearInterval(typing)

          /*Si une phrase suivante existe, on recommence*/
          tempDisplayed = [...tempDisplayed, currentLine]
          currentLine = ''
          phraseIndex++

          if (phraseIndex < phrases.length) {
            pauseTimeout = setTimeout(() => {
              charIndex = 0
              type()
            }, 800)
          } else { 
            /*Fin de la séquence*/
            localStorage.setItem('visited_homepage', 'true')
            localStorage.setItem('last_visit', now.toString())
            setHasPlayed(true)
          }
        }
      }, 40)
    }

    /*Démarre le processus !*/
    type()

    /*Nettoyage pour empêcher les fuites de setInterval*/
    return () => {
      clearInterval(typing)
      clearInterval(pauseTimeout)
      clearInterval(dotsInterval)
    }
  }, [])  

  return (
    <main className="relative flex items-center justify-center h-screen w-screen bg-black overflow-hidden">
      <CircuitAnimation />

      {/* Halo animé (donne une classe) */}
      <div
        className="halo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[280px] h-[280px] rounded-full animate-pulse-glow bg-blue-500/20 blur-3xl z-10"
      />

      {/* Wrapper de l’avatar (déplacé dynamiquement en CSS selon l’orientation) */}
      <motion.div
        layoutId="avatar"
        className="avatar-wrap absolute z-50
              flex flex-col sm:flex-col-reverse md:flex-col items-center justify-center gap-2
              /* AUCUN positionnement par défaut en mobile ! */
              md:flex-row md:gap-4
              md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
      >
        {/*Ajout d'une bulle de dialogue*/}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: -25 }}
          transition={{ delay: 0.3 }}
          className="speech-bubble relative bg-blue-900/40 border border-blue-400/50 rounded-2xl px-3 py-2
             text-blue-300 font-mono text-xs sm:text-sm backdrop-blur-sm 
             shadow-[0_0_10px_rgba(0,174,255,0.3)] text-center 
             w-[85vw] sm:w-fit max-w-[90vw]"
        >
          {displayedText.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="leading-tight"
            >
              {line}
            </motion.p>
          ))}
          {!hasPlayed && <span className="animate-pulse">|</span>}

          {/*Flèche-bulle vers l'avatar*/}
          <div
            className="absolute md:left-[-8px] md:top-1/2 md:-translate-y-1/2
                 sm:left-1/2 sm:-bottom-2 sm:-translate-x-1/2
                 border-l-transparent border-r-transparent border-t-transparent
                 md:border-t-[8px] md:border-t-blue-400/50
                 sm:border-t-[8px] sm:border-t-blue-400/50"
          ></div>
        </motion.div>

        <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px]">
          <Image
            src="/Avatar_4.png"
            alt="avatar Davy"
            fill
            sizes="250px"
            priority
            style={{ objectFit: 'cover', borderRadius: '9999px' }}
            className="avatar-img border-4 border-blue-500 shadow-[0_0_30px_#00aaff] animate-breath animate-avatarFloat"
          />
        </div>
      </motion.div>
      <Menu />
{/* Message d'arrière-plan : recherche d'alternance */}
<div
  className="absolute inset-x-0 flex flex-col items-center text-center pointer-events-none select-none overflow-hidden
             w-full px-4
             top-8 sm:top-10 md:top-12
             [@media(orientation:portrait)]:bottom-30 [@media(orientation:portrait)]:top-auto"
>
  <motion.div
    className="relative font-mono uppercase tracking-[0.25em] leading-tight
               text-[5vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw]
               bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400
               bg-clip-text text-transparent animate-text-scan opacity-10"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
  >
    RECHERCHE D&apos;ALTERNANCE
    <br className="block" />
    DÉVELOPPEMENT IA / DATA

    {/* Effet de scan vertical */}
    <motion.div
      className="absolute top-0 left-0 w-full h-full 
                 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent"
      animate={{ y: ['-100%', '200%'] }}
      transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
    />
  </motion.div>
</div>

    </main>
  )
}
