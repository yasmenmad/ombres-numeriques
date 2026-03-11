#  Ombres Numériques
## Morocco Infrastructure Intelligence Platform

Plateforme de cartographie des besoins infrastructurels dans les régions rurales du Maroc.

---

##  Démarrage rapide

### Prérequis
- Node.js (v16+) — https://nodejs.org
- Un navigateur moderne

### Installation

```bash
# 1. Installe les dépendances
npm install

# 2. Lance le serveur
npm start

# 3. Ouvre dans ton navigateur
# → http://localhost:3000
```

C'est tout ! 

---

##  Structure du projet

```
ombres-numeriques/
├── backend/
│   └── server.js          ← Serveur Express Node.js
├── frontend/
│   ├── index.html         ← Page d'accueil
│   ├── map.html           ← Carte interactive Leaflet
│   ├── dashboard.html     ← Dashboard analytique Chart.js
│   └── public/data/
│       └── morocco_data.json  ← Données des 12 régions
├── package.json
└── README.md
```

---

##  Fonctionnalités

### Page d'accueil (index.html)
- Vue d'ensemble du projet
- Statistiques nationales (IDH, population rurale, hôpitaux...)
- Classement des régions les plus sous-équipées
- Animation canvas de fond

### Carte interactive (map.html)
- Carte OpenStreetMap avec Leaflet.js
- Marqueurs géolocalisés pour les 12 régions
- Taille + couleur selon score de besoin
- Filtrage par type de service (hôpital, école, banque, eau, électricité, internet)
- Panneau de détail au clic sur une région
- Classement latéral en temps réel

### Dashboard analytique (dashboard.html)
- KPIs nationaux (IDH, espérance de vie, population rurale...)
- Graphique HDI 1990–2023 (source UNDP)
- Graphique population rurale/urbaine (source FAO)
- Carte de chaleur régions × services
- Radar chart comparatif (top 4 régions à risque)
- Classement horizontal par score
- Fiches détaillées par région

---

##  API REST

Le serveur expose une API simple :

| Endpoint | Description |
|----------|-------------|
| `GET /api/regions` | Toutes les régions avec scores |
| `GET /api/regions/:id` | Détail d'une région (ex: `/api/regions/DRK`) |
| `GET /api/national` | Indicateurs nationaux |
| `GET /api/hdi-trend` | Évolution IDH 1990-2023 |
| `GET /api/services` | Agrégat par type de service |
| `GET /api/summary` | Résumé statistique |
| `POST /api/regions/:id/report` | Rapport texte pour une région |

### Exemples

```bash
# Toutes les régions triées par urgence
curl http://localhost:3000/api/regions

# Filtrer par service hospitalier
curl http://localhost:3000/api/regions?service=hospital

# Détail de la région Drâa-Tafilalet
curl http://localhost:3000/api/regions/DRK

# Rapport automatique
curl -X POST http://localhost:3000/api/regions/DRK/report
```

---

##  Sources des données

| Source | Contenu |
|--------|---------|
| **FAO STAT** | Population rurale/urbaine, utilisation des terres, production agricole |
| **Banque Mondiale** | IDH, espérance de vie, lits d'hôpitaux, agences bancaires |
| **UNDP HDR** | Indice de développement humain 1990–2023 |
| **UN SDG** | Indicateurs des Objectifs de Développement Durable |

---

##  IDs des régions

| ID | Région |
|----|--------|
| TAN | Tanger-Tétouan-Al Hoceïma |
| ORI | Oriental |
| FMK | Fès-Meknès |
| RBS | Rabat-Salé-Kénitra |
| BKD | Béni Mellal-Khénifra |
| CAS | Casablanca-Settat |
| MRK | Marrakech-Safi |
| DRK | Drâa-Tafilalet |
| SMA | Souss-Massa |
| GZD | Guelmim-Oued Noun |
| LAY | Laâyoune-Sakia El Hamra |
| DDK | Dakhla-Oued Ed-Dahab |

---

##  Technologies utilisées

- **Backend**: Node.js + Express
- **Frontend**: HTML/CSS/JS vanilla
- **Carte**: Leaflet.js (OpenStreetMap)
- **Graphiques**: Chart.js
- **Fonts**: Fraunces, Syne, JetBrains Mono (Google Fonts)

---

*Ombres Numériques — Morocco Infrastructure Intelligence*
