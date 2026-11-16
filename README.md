# ️ Ombres Numériques — Morocco Infrastructure Intelligence Platform

[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%2F%20Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Leaflet](https://img.shields.io/badge/GIS-Leaflet.js-199900?logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Chart.js](https://img.shields.io/badge/Analytics-Chart.js-FF6384?logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Plateforme de cartographie géospatiale et d'analyse multidimensionnelle des besoins infrastructurels dans les 12 régions du Royaume du Maroc. Le système agrège des indicateurs socio-économiques fiables (Banque Mondiale, FAO, PNUD / UNDP) pour quantifier les disparités d'accès aux services essentiels (santé, éducation, électrification, eau potable, connectivité numérique).

---

## ️ Architecture du Projet

```
ombres-numeriques/
├── backend/
│   └── server.js          ← API REST Express & Agrégation analytique
├── frontend/
│   ├── index.html         ← Synthèse nationale & indicateurs clés
│   ├── map.html           ← Cartographie interactive Leaflet.js
│   ├── dashboard.html     ← Tableaux de bord comparatifs Chart.js
│   └── public/data/
│       └── morocco_data.json  ← Référentiel des 12 régions
├── package.json
└── README.md
```

---

## Démarrage Rapide

### Prérequis
- **Node.js** (v16+)
- Navigateur web moderne

### Installation & Exécution
```bash
# 1. Cloner le dépôt
git clone https://github.com/yasmenmad/ombres-numeriques.git
cd ombres-numeriques

# 2. Installer les dépendances
npm install

# 3. Démarrer le serveur Express
npm start

# 4. Accéder à la plateforme
# → http://localhost:3000
```

---

## Fonctionnalités Principales

### 1. Synthèse Nationale (`index.html`)
- Vue d'ensemble des indicateurs de développement humain (IDH).
- Taux de population rurale vs. urbaine et ratios d'infrastructures sanitaires.
- Classement algorithmique des provinces prioritaires pour l'aménagement territorial.

### 2. Cartographie Interactive (`map.html`)
- Moteur cartographique basé sur **Leaflet.js** et couches OpenStreetMap.
- Marqueurs proportionnels avec gradient chromatique selon le niveau de criticité.
- Filtrage multicritère par typologie de service : *Santé, Éducation, Agences bancaires, Eau, Énergie, Réseau Internet*.
- Panneaux rétractables détaillant le profil territorial de chaque région.

### 3. Dashboard Analytique (`dashboard.html`)
- Évolution historique de l'IDH (1990–2023) d'après les rapports mondiaux du PNUD.
- Heatmap de criticité croisant régions administratives et catégories de services.
- Graphiques radars comparatifs identifiant les poches de vulnérabilité territoriale.

---

## Spécification de l'API REST

| Méthode | Route | Description |
| :--- | :--- | :--- |
| `GET` | `/api/regions` | Liste exhaustive des 12 régions et scores de criticité |
| `GET` | `/api/regions/:id` | Fiche détaillée par code région (ex: `DRK`, `ORI`) |
| `GET` | `/api/national` | Indicateurs consolidés à l'échelle du Royaume |
| `GET` | `/api/hdi-trend` | Séries temporelles d'évolution de l'IDH |
| `GET` | `/api/services` | Métriques ventilées par type d'infrastructure |
| `POST` | `/api/regions/:id/report` | Génération de rapport d'audit territorial |

---

## Sources des Données

| Organisation | Données Intégrées |
| :--- | :--- |
| **FAO STAT** | Répartition démographique rurale/urbaine, surfaces agricoles |
| **Banque Mondiale** | Ratios hospitaliers, accès bancaire, espérance de vie |
| **PNUD / UNDP** | Séries historiques de l'Indice de Développement Humain (IDH) |
| **HCP Maroc** | Recensement général et ventilation régionale officielle |

---

## ‍ Auteure

**Yasmine Daoudi**  
*Étudiante en Génie Informatique & Science des Données*  
Université Ibn Tofail — Kénitra, Maroc  
- LinkedIn : [linkedin.com/in/yasmine-daoudi-473260340](https://www.linkedin.com/in/yasmine-daoudi-473260340)  
- GitHub : [github.com/yasmenmad](https://github.com/yasmenmad)
