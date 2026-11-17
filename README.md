<div align="center">
  <img src="https://raw.githubusercontent.com/yasmenmad/ombres-numeriques/main/assets/brand-logo.svg" alt="Digital Shadows Logo" width="380" />

  <p><strong>Silence as Data: A Lambda-Architecture Pipeline for Locating Digitally Invisible Communities on a 1 km² Grid of Morocco</strong></p>

  [![Preprint DOI](https://img.shields.io/badge/Preprint_DOI-10.5281%2Fzenodo.23963589-024c74?style=flat-square&logo=zenodo&logoColor=white)](https://doi.org/10.5281/zenodo.23963589)
  [![Apache Spark](https://img.shields.io/badge/Apache_Spark-3.5-E25A1C?style=flat-square&logo=apachespark&logoColor=white)](https://spark.apache.org/)
  [![Apache Kafka](https://img.shields.io/badge/Apache_Kafka-Distributed_Streaming-231F20?style=flat-square&logo=apachekafka&logoColor=white)](https://kafka.apache.org/)
  [![Databricks](https://img.shields.io/badge/Databricks-Lakehouse-FF3621?style=flat-square&logo=databricks&logoColor=white)](https://databricks.com/)
  [![Gemini AI](https://img.shields.io/badge/Google_Gemini-Policy_Synthesis-8E75C2?style=flat-square&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)
  [![Leaflet GIS](https://img.shields.io/badge/GIS-Leaflet_WebGL-199900?style=flat-square&logo=leaflet&logoColor=white)](https://leafletjs.com/)

  <br/>

  <a href="https://yasmenmad.github.io/ombres-numeriques/"><strong>Verified Live Console</strong></a> &middot;
  <a href="https://yasmenmad.github.io/ombres-numeriques/map.html"><strong>Interactive Cartographie SIG</strong></a> &middot;
  <a href="https://yasmenmad.github.io/ombres-numeriques/dashboard.html"><strong>Provincial Analytics Dashboard</strong></a> &middot;
  <a href="https://doi.org/10.5281/zenodo.23963589"><strong>Scientific Preprint</strong></a>
</div>

---

## Executive Summary & Research Context

Across developing economies, institutional datasets reliably capture populations with active commercial, administrative, or telecommunications footprints. However, vulnerable rural enclaves often generate zero digital traces &mdash; rendering them statistically invisible in top-down regional infrastructure allocation.

**Digital Shadows (Ombres Numériques)** operates on the premise of *Silence as Data*: by cross-referencing multi-spectral satellite imagery (Sentinel-2), topological terrain accessibility (SRTM elevation), open geospatial road networks (OpenStreetMap), and official 2024 High Commission for Planning (HCP) demographic censuses, the system partitions the Kingdom of Morocco into **450,000 spatial cells (1 km² resolution)**. It clusters zones where human settlements lack commensurate healthcare, potable water, electrical grid, and digital telecommunications assets.

---

## Distributed Lambda Architecture

<div align="center">
  <img src="https://raw.githubusercontent.com/yasmenmad/ombres-numeriques/main/assets/lambda-architecture.svg" alt="Digital Shadows Lambda Architecture Diagram" width="100%" />
</div>

<br/>

<div align="center">
  <img src="https://raw.githubusercontent.com/yasmenmad/ombres-numeriques/main/assets/territorial-clustering.svg" alt="Spatial Mining Telemetry and Clustering Radar" width="100%" />
</div>

The system is architected across four decoupled tiers:

1. **Ingestion & Speed Layer:**
   - Real-time IoT telecommunication probe telemetry and network quality streams ingested through a partitioned **Apache Kafka** cluster.
   - Low-latency state store powered by **Redis** for under 5 ms territorial telemetry lookups.

2. **Distributed Batch Layer (Databricks & Apache Spark 3.5):**
   - High-throughput PySpark pipeline executing geo-spatial joins across 450,000 polygonal grid cells.
   - Delta Lake ACID tables guaranteeing lineage, versioning, and reproducibility.
   - Experiment tracking and hyperparameter optimization monitored through **MLflow**.

3. **Spatial Machine Learning Core:**
   - **DBSCAN (Density-Based Spatial Clustering):** Employs Haversine distance metrics ($\varepsilon = 2.5\text{ km}$, $\text{min\_samples} = 5$) to detect contiguous pockets of infrastructural deprivation.
   - **K-Means Stratification:** Segments territories into four actionable intervention tiers: Adequate, Moderate, High Vulnerability, and Acute Silence.
   - **Google Gemini AI Policy Engine:** Generates localized policy intervention directives (e.g., solar satellite base stations, mobile clinic routing schedules).

4. **Serving & Exploration Console:**
   - High-performance vector tile rendering on **Leaflet.js** with dynamic choropleths and quantile opacity controls.
   - Multi-axial analytical breakdowns powered by **Chart.js**.

---

## Analytical Methodology

The composite Infrastructure Vulnerability Index ($V_i$) for geographic cell $i$ is formulated as:

$$V_i = \sum_{k=1}^{m} w_k \cdot \left(1 - \frac{x_{i,k} - \min(X_k)}{\max(X_k) - \min(X_k)}\right)$$

Where:
- $x_{i,k}$ is the observed metric score for indicator $k$ (digital bandwidth, healthcare proximity, school transit distance, water distribution).
- $w_k$ denotes the normalized indicator weight constraint ($\sum_{k=1}^m w_k = 1.0$).
- $V_i \in [0.0, 1.0]$, where higher values denote extreme infrastructural isolation.

---

## Core Pipeline Execution

```bash
# Clone the repository
git clone https://github.com/yasmenmad/ombres-numeriques.git
cd ombres-numeriques

# Execute spatial clustering and vulnerability scoring pipeline
python pipeline/spatial_clustering.py

# Launch local Node.js GIS server
npm install
node backend/server.js
```

---

## Citation & Academic Reference

```bibtex
@article{daoudi2026silence,
  author    = {Daoudi, Yasmine},
  title     = {Silence as Data: A Lambda-Architecture Pipeline for Locating Digitally Invisible Communities on a 1 km² Grid of Morocco},
  journal   = {Preprint, Zenodo},
  year      = {2026},
  doi       = {10.5281/zenodo.23963589},
  url       = {https://doi.org/10.5281/zenodo.23963589}
}
```

---

## Author

- **Researcher & Engineer:** Yasmine Daoudi
- **Institution:** École Supérieure de Technologie de Kénitra, Ibn Tofail University, Morocco
- **Contact:** [yasmineedaoudii@gmail.com](mailto:yasmineedaoudii@gmail.com) &middot; [LinkedIn](https://www.linkedin.com/in/yasmine-daoudi-eng)
