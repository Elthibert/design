# Guide d'Utilisation du Système Créatif v4

Ce document explique comment utiliser le système au quotidien pour créer des projets.

## Philosophie

Notre système est basé sur trois principes :
1.  **Granularité :** Nous travaillons sur la plus petite unité possible, le "Bloc".
2.  **Silos Autonomes :** Chaque étape du processus est un fichier `.md` avec des instructions et des dépendances claires pour garantir la compréhension et la qualité, même dans une nouvelle session de travail.
3.  **Consistance & Créativité :** Nous utilisons une charte graphique globale pour la cohérence, ce qui nous permet de nous concentrer sur la créativité des concepts et des interactions.

---

## Comment Démarrer un Nouveau Projet (Workflow)

Suivez ces étapes dans l'ordre :

### Étape 1 : Créer le Dossier Projet
- Créez un nouveau dossier pour votre projet dans le répertoire `3-PROJETS-PRODUCTION/`.
  - Ex: `3-PROJETS-PRODUCTION/nouveau-client/`

### Étape 2 : Rédiger le Brief Global
- À la racine de votre nouveau dossier projet, créez le fichier `brief-global.md`.
- Remplissez-le avec la vision stratégique, la psychologie client, la charte graphique et, surtout, le **wireframe détaillé**. Le wireframe doit lister toutes les **sections** et les **blocs** qui les composent.

### Étape 3 : Générer l'Arborescence (Scaffolding)
- Une fois le `brief-global.md` validé, demandez-moi de générer l'arborescence du projet.
- J'exécuterai un script qui va :
    1. Lire la liste des sections et des blocs dans votre `brief-global.md`.
    2. Créer tous les dossiers de section et de bloc correspondants.
    3. Copier les templates vierges depuis le dossier `_TEMPLATES` dans chaque dossier de bloc, prêts à être utilisés.

### Étape 4 : Travailler Bloc par Bloc
- Vous pouvez maintenant commencer le travail créatif en suivant le processus en 5 étapes pour chaque bloc, en commençant par le premier (`01-brief-bloc.md`).

---

## Explication de la Structure des Dossiers

- `_TEMPLATES/` : Contient les "fichiers maîtres" vierges de notre processus en 5 étapes. C'est la source pour le script de scaffolding. **Ne pas modifier directement.**
- `_archive/` : Anciennes versions du système.
- `docs/` : La documentation du système (comme ce guide).
- `1-UI-LAB/` : Notre catalogue d'idées et de concepts réutilisables. Ce dossier est global à tous les projets et s'enrichit au fil du temps.
- `2-STUDIO-RD/` : Le dossier où nous menons nos sessions de R&D pour alimenter le `UI-LAB`.
- `3-PROJETS-PRODUCTION/` : Le dossier où vivent tous nos projets clients.

## Convention de Nommage

Les fichiers comme `01-brief-bloc.md` ont volontairement le même nom dans chaque dossier de bloc. Leur chemin complet (`.../hero/titre/01-brief-bloc.md`) garantit leur unicité et la prévisibilité du processus. Il n'y a aucun risque de conflit. 