# 🏰 Angers Actu — Blog Événementiel Responsive

Site web vitrine et blog d'actualités dédié aux temps forts et événements culturels de la ville d'Angers (*Festival des Accroche-Cœurs*, *Journées Européennes du Patrimoine*).

Projet d'intégration web responsive réalisé en HTML5 sémantique et CSS3 moderne.

---

## 🎯 Fonctionnalités & Contenu

- **Page d'accueil (`index.html`)** : Présentation du blog et liste des derniers articles sous forme de cartes cliquables.
- **Pages d'articles complets (`pages/article/`)** :
  - *Festival des Accroche-Cœurs 2026* : Reportage, galerie photos et tableau complet de la programmation.
  - *Journées Européennes du Patrimoine* : Guide de visite du Château d'Angers et tableau des horaires / tarifs.
- **Formulaire de contact (`pages/contact.html`)** : Interface de contact moderne avec champs structurés.
- **Pages légales & RGPD (`pages/`)** : Mentions légales et politique de confidentialité des données.
- **Bouton retour en haut interactif (`js/btnTop.js`)** : Détection du scroll utilisateur pour un défilement fluide.

---

## 🎨 Design & Intégration CSS3

- **Intégration HTML5 sémantique** : Balises structurantes (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<figure>`).
- **CSS moderne & Personnalisation** :
  - Variables CSS (`:root`) pour la gestion des thèmes de couleurs par événement.
  - Mise en page par **Flexbox** pour la navigation, les formulaires et les éléments multimédias.
- **Responsive Design Multi-Écrans (Media Queries)** :
  - **Écran Bureau (`≥ 1200px`)** : Mise en page spacieuse et typographie adaptée.
  - **Tablette (`768px à 1199px`)** : Adaptation fluide des conteneurs et des images flottantes.
  - **Smartphone (`< 768px`)** : Menu empilé en colonne, retrait du flottement des images pour éviter les débordements, tableaux avec défilement horizontal tactile.
- **Feuille de style pour l'impression (`@media print`)** :
  - Masquage des éléments d'interface non imprimables (en-tête, navigation, pied de page, boutons).
  - Optimisation noir et blanc et encadrement des articles par une bordure pointillée.

---

## 🚀 Consultation en local

Aucun serveur n'est nécessaire. Il suffit de cloner le dépôt et d'ouvrir `index.html` dans n'importe quel navigateur :

```bash
git clone https://github.com/TomVernierFetu/angers-actu-blog.git
cd angers-actu-blog
```
Double-cliquez sur `index.html` ou ouvrez-le avec l'extension *Live Server* dans VS Code.

---

## 👤 Auteur

* **Tom Vernier-Fétu** — Développeur junior en recherche d'alternance.
