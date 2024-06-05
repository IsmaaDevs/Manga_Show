# MANGA SHOW

**MANGA SHOW** est une application web permettant de gérer une liste de mangas. Vous pouvez ajouter de nouveaux mangas, voir la liste actuelle et supprimer ceux que vous ne voulez plus voir.

## Fonctionnalités

- **Ajouter un Manga** : Ajoutez un manga avec son titre, l'URL de son poster, une description et une date de sortie.
- **Voir la Liste des Mangas** : Consultez la liste complète des mangas ajoutés avec leurs détails.
- **Supprimer un Manga** : Retirez un manga de la liste en un clic.

## Installation

1. **Cloner le Dépôt** :

   ```bash
   git clone https://github.com/votre-utilisateur/manga-show.git
   cd manga-show
   ```

2. **Installer les Dépendances** :

   ```bash
   npm install
   ```

3. **Lancer l'Application** :

   ```bash
   npm start
   ```

4. **Ouvrir dans le Navigateur** :
   Ouvrez [http://localhost:3000](http://localhost:3000) pour voir l'application en action.

## Utilisation

### Ajouter un Manga

1. Remplissez les champs du formulaire :

   - **Titre du Manga** : Le titre du manga.
   - **URL du Poster** : L'URL de l'image du poster du manga.
   - **Description** : Une brève description du manga.
   - **Date de Sortie** : La date de sortie du manga (format: JJ/MM/AAAA).

2. Cliquez sur **Ajouter** pour insérer le manga dans la liste.

### Voir et Supprimer des Mangas

- La liste des mangas ajoutés s'affiche en dessous du formulaire.
- Pour supprimer un manga, cliquez sur le bouton **Supprimer** sous le manga que vous souhaitez retirer.

## Structure du Projet

```plaintext
manga-show/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── MangaInput.js
│   │   ├── MangaList.js
│   │   └── MangaCard.js
│   │
│   ├── database/
│   │   └── bdd.json
│   │
│   ├── App.js
│   └── index.js
│
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

## Technologies Utilisées

- **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **Local Storage** : Pour persister les données des mangas même après un rafraîchissement de la page.
- **HTML/CSS** : Pour la structure et le style de l'application.

## Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet.
2. Créez une nouvelle branche (`git checkout -b feature/ma-nouvelle-fonctionnalite`).
3. Committez vos changements (`git commit -m 'Ajouter une nouvelle fonctionnalité'`).
4. Poussez la branche (`git push origin feature/ma-nouvelle-fonctionnalite`).
5. Ouvrez une **Pull Request**.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.

---

Merci d'utiliser **MANGA SHOW** ! Si vous avez des questions ou des suggestions, n'hésitez pas à les partager. Bon visionnage de mangas ! 🎉📚✨
