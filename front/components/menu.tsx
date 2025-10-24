'use client';
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const [inHeader, setInHeader] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // --- Détection orientation + comportement selon la page ---
  useEffect(() => {
    const checkOrientation = () => {
      const portrait = window.matchMedia("(orientation: portrait)").matches;
      setIsPortrait(portrait);

      if (portrait) {
        // En mode portrait, le menu est toujours dans le header
        setInHeader(true);

        // Homepage : ouvert par défaut
        if (pathname === "/homepage") {
          setOpen(true);
        } 
        // Autres pages : fermé par défaut
        else {
          setOpen(false);
        }
      } else {
        // En mode paysage, comportement libre (centré)
        setInHeader(false);
      }
    };

    checkOrientation();
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, [pathname]);

  // --- Fermer le menu quand on clique en dehors ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // --- Synchroniser la visibilité de l’avatar ---
  useEffect(() => {
    const shouldShowAvatar = !(open && isPortrait);
    const event = new CustomEvent("avatar-visibility", { detail: shouldShowAvatar });
    document.dispatchEvent(event);
  }, [open, pathname, isPortrait]);

  // --- VARIANTS Neural Fade ---
  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -15, filter: "blur(10px) brightness(0.6)", scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px) brightness(1)",
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      filter: "blur(10px) brightness(0.6)",
      scale: 0.98,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  // --- VARIANTS Scan lumineux ---
  const scanVariants: Variants = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: "-100%",
      opacity: [0, 1, 0],
      transition: { duration: 1.2, ease: "easeInOut", repeat: 1 },
    },
  };

  // --- Texte animé (typing) ---
  const TypingText = ({ text }: { text: string }) => {
    const letters = Array.from(text);
    return (
      <span>
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.04 }}
          >
            {letter}
          </motion.span>
        ))}
      </span>
    );
  };

  const sections = [
    { label: "Qui suis-je ?", path: "/about" },
    { label: "Mes projets", path: "/projects" },
    { label: "Mes expériences", path: "/experience" },
    { label: "Mes formations", path: "/education" },
    /*{ label: "Contact", path: "/contact" },*/
  ];

  return (
    <div
      ref={menuRef}
      className={`fixed z-50 transition-all duration-500
                  ${inHeader ? "top-4 left-4" : "left-6 top-[25vh] md:top-[20vh]"}`}
    >
      {/* Bouton du menu */}
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 rounded-full border-4 border-blue-500 p-[2px]
                   bg-transparent hover:scale-105 transition-transform duration-200
                   shadow-[0_0_15px_#00aaff]"
      >
        <Image
          src="/menu_icone.jpg"
          alt="Menu"
          width={50}
          height={50}
          className="rounded-full brightness-0 invert contrast-110"
        />
      </button>

      {/* Menu déroulant */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-0 left-0 z-40 flex items-start justify-start
                       bg-blue-900/70 border-4 border-blue-500
                       shadow-[0_0_25px_#00aaff,0_0_60px_#0077ff_inset]
                       overflow-hidden backdrop-blur-md rounded-2xl relative
                       w-[clamp(250px,55vw,380px)] h-[clamp(280px,65vh,520px)]
                       md:w-[clamp(250px,45vw,360px)] md:h-[clamp(280px,55vh,480px)]"
          >
            {/* Effet de scan lumineux */}
            <motion.div
              variants={scanVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-0
                         bg-gradient-to-b from-transparent via-blue-400/40 to-transparent
                         pointer-events-none mix-blend-screen"
            />

            {/* Contenu du menu */}
            <motion.ul className="flex flex-col justify-evenly items-center h-full w-full text-white text-center text-xl font-light tracking-wide">
              {sections.map((section, i) => (
                <motion.li
                  key={i}
                  className="glow-hover w-full py-3 cursor-pointer hover:bg-blue-500/40 rounded-md transition-all duration-200"
                >
                  <Link href={section.path} className="block w-full h-full">
                    <TypingText text={section.label} />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
