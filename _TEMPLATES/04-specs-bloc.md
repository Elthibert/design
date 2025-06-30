# SPÉCIFICATIONS TECHNIQUES : [Nom du Bloc]

## RÔLES POUR CETTE ÉTAPE
- **Mon Rôle (IA) :** Rédiger une proposition complète et détaillée pour ce plan technique, en me basant sur toutes les décisions précédentes.
- **Votre Rôle (Architecte) :** Challenger, corriger et valider ce plan avant de lancer la production du code. Ce document est notre contrat.

## ▶️ Contexte & Inputs Requis
*Ce document est la synthèse technique des décisions prises. Il se base sur :*
- **Fichier à lire obligatoirement :** `../../../brief-global.md` (pour la charte graphique)
- **Fichier à lire obligatoirement :** `02-brainstorm-bloc.md` (pour le concept de base)
- **Fichier à lire obligatoirement :** `03-roast_session-bloc.md` (pour les améliorations et décisions finales)

---

## 1. Description Fonctionnelle
*Ma proposition pour la description fonctionnelle du composant :*
> [Ex: "Affiche le titre principal avec une animation de vague au chargement, et réagit au survol de la souris en douceur."]

---

## 2. Structure HTML/JSX
*Ma proposition pour la structure sémantique des éléments :*
> ```
> div (conteneur principal avec un masque de débordement)
>  └── h1 (le titre qui sera animé)
>      └── span (chaque mot ou lettre, si l'animation est granulaire)
> ```

---

## 3. Props & State (React)
*Ma proposition pour les props et les états internes nécessaires :*
- **Props:**
  - `text: string` (Le texte du titre à afficher)
  - `className?: string` (Pour permettre une surcharge de style externe)
- **State:**
  - `isHovered: boolean` (Géré en interne pour l'animation au survol)

---

## 4. Styling (Tailwind CSS)
*Ma proposition pour les classes Tailwind essentielles, en accord avec la charte graphique :*
**- Règle :** Les styles (couleurs, typographie, espacements, arrondis, etc.) doivent être conformes à la Charte Graphique définie dans `brief-global.md`.
- **Conteneur Principal :** `relative overflow-hidden`
- **Titre (h1) :** `text-6xl font-bold text-white`
- **Span (si applicable) :** `inline-block` pour permettre les transformations individuelles

---

## 5. Animation & Interaction (Framer Motion / GSAP)
*Ma proposition pour la séquence d'animation détaillée :*

### 5.1 Animation au Chargement (Entrée)
1.  **Conteneur :** Utiliser `staggerChildren` avec une valeur de `0.05s` pour animer les `span` en cascade.
2.  **Chaque `span` :**
    - **État initial :** `y: "100%"` (caché en bas), `opacity: 0`.
    - **État animé :** `y: "0%"`, `opacity: 1`.
    - **Transition :** `ease: [0.22, 1, 0.36, 1]` (courbe d'ease personnalisée), `duration: 0.8s`.

### 5.2 Interaction au Survol
1.  **Déclencheur :** `onHoverStart` et `onHoverEnd` sur le conteneur principal.
2.  **Cible de l'animation :** Le conteneur principal.
3.  **Animation :**
    - **Au survol :** `scale: 1.05`.
    - **Fin du survol :** `scale: 1`.
    - **Transition :** `type: "spring"`, `stiffness: 300`, `damping: 20`.

---
*Validation : Ce document doit être validé par vous avant que la moindre ligne de code ne soit écrite.*
