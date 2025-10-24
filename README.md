# 🌟 Portfolio – Next.js + Express  
> Projet personnel de **Davy Olivares** (Epitech MSc Pro IA)  
> Objectif : apprendre, expérimenter et créer un **portfolio immersif et intelligent** 💻✨  

---

## 📚 Table des matières
1. [À propos](#-à-propos)  
2. [Structure du projet](#-structure-du-projet)  
3. [Installation](#-installation-du-projet)  
4. [Lancement](#-lancer-le-projet)  
5. [Technologies utilisées](#-technologies-utilisées)  
6. [Nouvelles fonctionnalités](#-nouvelles-fonctionnalités-ajoutées)  
7. [Nettoyage Git](#-nettoyage-du-dépôt-git)  
8. [Ce que j’ai appris](#-ce-que-jai-appris-jusquà-présent)  
9. [Prochaines étapes](#-prochaines-étapes)  
10. [Auteur](#-auteur)  

---

## 📖 À propos

Je débute dans le développement web et j’apprends à utiliser **Next.js** pour le front et **Express.js** pour le back.  
Ce projet est à la fois un **exercice d’apprentissage** et une **vitrine personnelle**, mêlant **IA, design futuriste et animation** (SVG, lumières, avatar IA…).

---

## 🧱 Structure du projet

```bash
Portfolio/
│
├── front/   → site en Next.js (le front-end)
└── back/    → API Express (le back-end)
```

Cette séparation m’aide à comprendre comment le **frontend** et le **backend** communiquent ensemble.

---

## ⚙️ Installation du projet

### 1️⃣ Cloner le dépôt
```bash
git clone git@github.com:<ton-nom-utilisateur>/<nom-du-repo>.git
cd Portfolio
```

### 2️⃣ Installer les dépendances
```bash
cd front && npm install
cd ../back && npm install
```

---

## 🚀 Lancer le projet

```bash
# Lancer le back
cd back && npm run dev
# http://localhost:4000

# Lancer le front
cd ../front && npm run dev
# http://localhost:3000
```

---

## 🧰 Technologies utilisées

| Type | Outil / Librairie |
|------|--------------------|
| 🌐 Front-end | [Next.js](https://nextjs.org/) |
| ⚙️ Back-end | [Express.js](https://expressjs.com/) |
| 🎨 Animation | [Framer Motion](https://www.framer.com/motion/) |
| 💬 Texte animé | Custom Typing Effect |
| 🧩 Environnement | [Node.js](https://nodejs.org/) |
| 🔐 Variables | dotenv |
| 🌍 Communication | CORS |
| ♻️ Auto reload | Nodemon |
| 🧹 Versioning | Git / GitHub |
| 🖼️ Graphisme | SVG, Inkscape, génération d’avatar IA |

---

## ✨ Nouvelles fonctionnalités ajoutées

### 🎨 Design visuel
- ✅ **Vectorisation d’un circuit imprimé** comme fond graphique.  
- ✅ **Animation lumineuse SVG** (halo radial révélant les circuits).  
- ✅ **Effet “pulse-glow”** et **respiration visuelle** sur l’avatar.  

### 🧠 Front-end & UX
- ✅ **Redirection automatique** de la racine vers `/homepage`.  
- ✅ Ajout du **titre de page** dans le `head`.  
- ✅ **Animation de texte “typing”** lors du déploiement du menu.  
- ✅ **Menu interactif** transformé en **liste de liens dynamiques**.  
- ✅ **Nouvelle page `About`** avec animation de déplacement et réduction de l’avatar.  
- ✅ Création de **`ClientLayout.tsx`** (composant client gérant les transitions).  
- ✅ L’**avatar devient cliquable** et ramène à la page principale.  
- 🚧 **Autres pages créées** (contenu à venir).  

---

## 🧹 Nettoyage du dépôt Git

J’ai :
- Corrigé le push accidentel de `node_modules`.  
- Créé un `.gitignore` propre.  
- Nettoyé l’historique (`git filter-repo`).  
- Appris à faire des **commits Karma** bien structurés :  
  - `chore(front): add redirect...`  
  - `feat(front): add animation typing text...`  
  - `feat(front): create About page...`  
  - `feat(front): make avatar clickable...`  

---

## 🧠 Ce que j’ai appris jusqu’à présent

✅ Créer une structure **Next.js / Express.js** claire  
✅ Gérer les **routes** et la **navigation animée**  
✅ Implémenter un **menu responsive** et **animations Framer Motion**  
✅ Comprendre la logique des **Client Components** dans Next.js  
✅ Utiliser Git proprement (branches, commits, nettoyage)  
✅ Créer une **cohérence visuelle IA & futuriste**  

---

## 🔜 Prochaines étapes

| Statut | Tâche |
|:--:|:--|
| 🚧 | Remplir le contenu des pages (About, Projets, Formations...) |
| 🚧 | Ajouter des transitions inter-pages encore plus fluides |
| 🔜 | Intégrer une IA interactive (chat avec l’avatar) |
| 🔜 | Héberger le projet complet (front + back) |
| 🔜 | Ajouter un mode sombre adaptatif |
| 🔜 | Mettre à jour le README après chaque release |

---

## ✨ Auteur

👤 **Davy Olivares**  
🎓 Étudiant en MSc Pro Intelligence Artificielle – Epitech Rennes  

> _“Ce n’est pas en cherchant à être parfait qu’on progresse,  
> mais en avançant un peu plus chaque jour.”_ 🧠
