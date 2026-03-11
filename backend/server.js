const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Load data
const dataPath = path.join(__dirname, '../frontend/public/data/morocco_data.json');
let moroccoData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// ─── API ROUTES ───────────────────────────────────────────────────────────────

// GET /api/regions — all regions with need scores
app.get('/api/regions', (req, res) => {
  const { service, sort } = req.query;
  let regions = [...moroccoData.regions];

  // Filter/sort by service type
  if (service && service !== 'all') {
    regions = regions.map(r => ({
      ...r,
      display_score: r.needs[service] || 0
    }));
  } else {
    regions = regions.map(r => ({ ...r, display_score: r.priority_score }));
  }

  if (sort === 'asc') {
    regions.sort((a, b) => a.display_score - b.display_score);
  } else {
    regions.sort((a, b) => b.display_score - a.display_score);
  }

  res.json({ success: true, data: regions, total: regions.length });
});

// GET /api/regions/:id — single region detail
app.get('/api/regions/:id', (req, res) => {
  const region = moroccoData.regions.find(r => r.id === req.params.id.toUpperCase());
  if (!region) return res.status(404).json({ success: false, error: 'Region not found' });

  // Add urgency classification
  const getUrgency = score => score >= 70 ? 'CRITIQUE' : score >= 40 ? 'MOYEN' : 'ÉQUIPÉ';
  const enriched = {
    ...region,
    urgency: getUrgency(region.priority_score),
    needs_ranked: Object.entries(region.needs)
      .sort((a, b) => b[1] - a[1])
      .map(([service, score]) => ({ service, score, urgency: getUrgency(score) }))
  };

  res.json({ success: true, data: enriched });
});

// GET /api/national — national indicators
app.get('/api/national', (req, res) => {
  res.json({ success: true, data: moroccoData.national });
});

// GET /api/hdi-trend — HDI trend data
app.get('/api/hdi-trend', (req, res) => {
  res.json({ success: true, data: moroccoData.hdi_trend });
});

// GET /api/services — aggregate needs by service type
app.get('/api/services', (req, res) => {
  const services = ['hospital', 'school', 'bank', 'water', 'electricity', 'internet'];
  const result = services.map(service => {
    const scores = moroccoData.regions.map(r => r.needs[service]);
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    const max = Math.max(...scores);
    const min = Math.min(...scores);
    const critical = moroccoData.regions.filter(r => r.needs[service] >= 70);

    return {
      service,
      avg: Math.round(avg * 10) / 10,
      max,
      min,
      critical_regions: critical.length,
      critical_region_names: critical.map(r => r.name)
    };
  });

  res.json({ success: true, data: result });
});

// GET /api/summary — quick summary stats
app.get('/api/summary', (req, res) => {
  const regions = moroccoData.regions;
  const critical = regions.filter(r => r.priority_score >= 70);
  const medium = regions.filter(r => r.priority_score >= 40 && r.priority_score < 70);
  const equipped = regions.filter(r => r.priority_score < 40);

  res.json({
    success: true,
    data: {
      total_regions: regions.length,
      critical: critical.length,
      medium: medium.length,
      equipped: equipped.length,
      most_urgent: regions.sort((a,b) => b.priority_score - a.priority_score)[0],
      national: moroccoData.national
    }
  });
});

// POST /api/regions/:id/report — generate a text report for a region
app.post('/api/regions/:id/report', (req, res) => {
  const region = moroccoData.regions.find(r => r.id === req.params.id.toUpperCase());
  if (!region) return res.status(404).json({ success: false, error: 'Region not found' });

  const services = ['hospital','school','bank','water','electricity','internet'];
  const labels = {hospital:'Hôpitaux',school:'Écoles',bank:'Banques',water:'Eau potable',electricity:'Électricité',internet:'Internet'};
  const sorted = Object.entries(region.needs).sort((a,b)=>b[1]-a[1]);
  const topNeed = sorted[0];
  
  const report = {
    region: region.name,
    generated_at: new Date().toISOString(),
    priority_score: region.priority_score,
    population: region.pop,
    rural_percentage: Math.round(region.rural_pct * 100),
    urgency: region.priority_score >= 70 ? 'CRITIQUE' : region.priority_score >= 40 ? 'MOYEN' : 'ÉQUIPÉ',
    top_need: { service: topNeed[0], score: topNeed[1], label: labels[topNeed[0]] },
    all_needs: sorted.map(([s,v]) => ({ service: s, label: labels[s], score: v })),
    recommendation: region.priority_score >= 70
      ? `Investissement urgent requis en ${labels[topNeed[0]].toLowerCase()} dans la région ${region.name}. Score critique: ${topNeed[1]}/100.`
      : region.priority_score >= 40
      ? `Amélioration recommandée des services ${labels[topNeed[0]].toLowerCase()} dans ${region.name}.`
      : `La région ${region.name} est relativement bien équipée. Monitoring continu recommandé.`
  };

  res.json({ success: true, data: report });
});

// Catch-all: serve frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🟡 Ombres Numériques — Backend running`);
  console.log(`   → http://localhost:${PORT}`);
  console.log(`   → API: http://localhost:${PORT}/api/regions`);
  console.log(`   → Map: http://localhost:${PORT}/map.html`);
  console.log(`   → Dashboard: http://localhost:${PORT}/dashboard.html\n`);
});
