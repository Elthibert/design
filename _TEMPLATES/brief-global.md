# BRIEF GLOBAL : [Nom du Projet]

**Date :** [Date de création]
**Version :** 1.0

---

## 1. Vision Stratégique & Contexte

*Ce document est le cerveau du projet. Il est notre source unique de vérité pour toutes les décisions stratégiques. Il doit être lu et approuvé avant le début de toute production de bloc.*

### 1.1. Objectif Principal du Projet
*Quelle est la finalité de ce projet ? Quel est le "job-to-be-done" pour l'utilisateur et pour le business ?*
> [Réponse ici. Ex: "Créer une landing page pour le produit X qui maximise les demandes de démo en communiquant un sentiment d'innovation et de confiance."]

### 1.2. Psychologie de la Cible
*Décrivez précisément l'utilisateur que nous ciblons. Qui sont-ils ? Quelles sont leurs attentes, leurs peurs, leurs motivations ?*
- **Archétype :** [Ex: "Le Directeur Marketing d'une PME tech en croissance"]
- **Niveau de connaissance technique :** [Ex: "Moyen"]
- **Émotion Clé à Viser :** [Ex: "La confiance, le sentiment d'être entre de bonnes mains, la curiosité"]
- **Principal "Pain Point" résolu :** [Ex: "La peur de choisir un partenaire qui ne comprend pas leurs enjeux business."]

---

## 2. Architecture de l'Information & Contenu

### 2.1. Wireframe / Structure de la Page
*Listez toutes les sections de la page dans l'ordre, avec une brève description de l'intention de chacune.*
- **Section 01 : Hero**
  - **Intention :** Capter l'attention immédiatement avec la proposition de valeur principale.
- **Section 02 : Problème**
  - **Intention :** Démontrer une compréhension profonde du problème de la cible.
- **Section 03 : Solution**
  - **Intention :** Présenter notre solution de manière claire et bénéfique.
- ... (etc.)

*Un lien vers un wireframe Figma ou un croquis peut être ajouté ici si disponible.*
> **Lien Figma/Croquis :** [URL ou référence]

---

## 3. Système de Design & Stack Technique (Les Garde-fous)

*Cette section définit notre terrain de jeu technique et créatif. Toutes les décisions doivent respecter ces contraintes pour garantir la cohérence et la qualité.*

### 3.1. Charte Graphique
- **Palette de Couleurs :**
  - Primaire : `[#CodeHex]`
  - Secondaire : `[#CodeHex]`
  - Accentuation : `[#CodeHex]`
  - Texte : `[#CodeHex]`
  - Fond : `[#CodeHex]`
- **Typographie :**
  - Police des titres : `[Nom de la police, Poids]`
  - Police du corps de texte : `[Nom de la police, Poids]`
- **Espacements & Grille :**
  - Système de spacing (ex: 8pt grid) : `[Description]`
  - Largeur max du conteneur : `[ex: 1280px]`
- **Style d'Iconographie :**
  - [Ex: "Léger, line-art, avec des coins arrondis"]

### 3.2. Stack Technique Autorisée
- **Framework :** React (via Next.js)
- **Styling :** Tailwind CSS
- **Gestion de state (si nécessaire) :** Zustand

### 3.3. Bibliothèques Autorisées
- **Composants UI :** Aucun. Tous les composants seront construits sur mesure avec React & Tailwind CSS.
- **Note sur le Code Externe (Librairies, Snippets, Blogs) :**
  - **Dépendances NPM :** Seules les librairies listées ci-dessous (Animation, Icônes) sont autorisées comme dépendances NPM.
  - **Inspiration & Snippets (Shadcn, Aceternity, reactbits.dev, etc.) :** Il est permis de s'inspirer de ces ressources. Il est également permis de copier des snippets de code (ex: un custom hook, un pattern de layout) à condition que le code soit entièrement intégré dans le fichier unique du bloc, sans créer de dépendances locales. **La règle d'or est : le bloc final doit être 100% autonome.**
- **Animation :** Framer Motion, GSAP
- **Icônes :** react-icons

*Toute utilisation d'une bibliothèque non listée ici doit faire l'objet d'une discussion et d'une approbation explicite.*
