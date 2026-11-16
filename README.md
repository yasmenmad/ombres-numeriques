# Ombres Numériques - Regional Infrastructure Intelligence & Spatial GIS

[![Node.js](https://img.shields.io/badge/Backend-Node.js%20%2F%20Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Leaflet](https://img.shields.io/badge/GIS-Leaflet.js-199900?logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Chart.js](https://img.shields.io/badge/Analytics-Chart.js-FF6384?logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A spatial demographic analysis and Geographic Information System (GIS) designed to visualize, model, and quantify infrastructure access disparities across Moroccan provinces.

---

## Analytical Methodology

The platform computes a composite Infrastructure Vulnerability Index ($V_i$) for each geographic territory $i$:

$$V_i = \sum_{k=1}^{m} w_k \cdot \left(1 - \frac{x_{i,k} - \min(X_k)}{\max(X_k) - \min(X_k)}\right)$$

where:
- $x_{i,k}$ represents the observed coverage of infrastructure metric $k$ (e.g., educational access, digital connectivity, healthcare coverage, electricity distribution).
- $w_k$ denotes the indicator weight constraint: $\sum_{k=1}^m w_k = 1$.

Territories exhibiting high composite vulnerability scores are dynamically highlighted through categorized choropleth color bands.

---

## Platform Architecture

```mermaid
flowchart LR
    Data[Provincial GeoJSON & Socio-Economic Indicators] --> Server[Node.js / Express Spatial Server]
    Server --> Leaflet[Leaflet.js Vector Tile Layer Engine]
    Server --> Chart[Chart.js Multi-Dimensional Analytics Dashboard]
    Leaflet --> View[Interactive Geospatial Exploration Console]
    Chart --> View
```

---

## Installation & Deployment

```bash
# Clone the repository
git clone https://github.com/yasmenmad/ombres-numeriques.git
cd ombres-numeriques

# Install dependencies
npm install

# Start Express server
node backend/server.js
```

Access the geospatial portal at `http://localhost:3000`.

---

## Author

- **Developer:** Yasmine Daoudi
- **Focus:** Spatial Data Systems, Geo-Demographic Modeling, and Interactive Data Visualization
