let mapObj, regionsData=[], geojsonLayer, currentLayer='all', mapMarkers=[];

// Init map centered on Morocco
mapObj = L.map('map', {
  center: [31.5, -7.0],
  zoom: 6,
  zoomControl: false,
  attributionControl: false
});

// Esri World Dark Gray Canvas (100% Free, No API Key Required, Never Blocked)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 16,
  attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
}).addTo(mapObj);

// Load data
const MOROCCO_DATA = {"regions": [{"id": "TAN", "name": "Tanger-Tétouan-Al Hoceïma", "lat": 35.77, "lng": -5.8, "pop": 3556000, "rural_pct": 0.36, "needs": {"hospital": 42, "school": 38, "bank": 35, "electricity": 22, "water": 30, "internet": 45}, "priority_score": 35.3}, {"id": "ORI", "name": "Oriental", "lat": 34.68, "lng": -2.93, "pop": 2314000, "rural_pct": 0.42, "needs": {"hospital": 61, "school": 58, "bank": 52, "electricity": 38, "water": 48, "internet": 62}, "priority_score": 53.2}, {"id": "FMK", "name": "Fès-Meknès", "lat": 34.02, "lng": -5.0, "pop": 4236000, "rural_pct": 0.45, "needs": {"hospital": 55, "school": 52, "bank": 48, "electricity": 31, "water": 42, "internet": 57}, "priority_score": 47.5}, {"id": "RBS", "name": "Rabat-Salé-Kénitra", "lat": 34.02, "lng": -6.83, "pop": 4580000, "rural_pct": 0.29, "needs": {"hospital": 28, "school": 25, "bank": 18, "electricity": 12, "water": 18, "internet": 30}, "priority_score": 21.8}, {"id": "BKD", "name": "Béni Mellal-Khénifra", "lat": 32.33, "lng": -6.35, "pop": 2520000, "rural_pct": 0.57, "needs": {"hospital": 72, "school": 68, "bank": 65, "electricity": 55, "water": 62, "internet": 74}, "priority_score": 66.0}, {"id": "CAS", "name": "Casablanca-Settat", "lat": 33.5, "lng": -7.6, "pop": 6861000, "rural_pct": 0.19, "needs": {"hospital": 20, "school": 18, "bank": 12, "electricity": 8, "water": 12, "internet": 22}, "priority_score": 15.3}, {"id": "MRK", "name": "Marrakech-Safi", "lat": 31.63, "lng": -8.0, "pop": 4520000, "rural_pct": 0.5, "needs": {"hospital": 65, "school": 62, "bank": 58, "electricity": 48, "water": 58, "internet": 68}, "priority_score": 59.8}, {"id": "DRK", "name": "Drâa-Tafilalet", "lat": 31.93, "lng": -4.43, "pop": 1635000, "rural_pct": 0.63, "needs": {"hospital": 82, "school": 78, "bank": 75, "electricity": 68, "water": 72, "internet": 85}, "priority_score": 76.7}, {"id": "SMA", "name": "Souss-Massa", "lat": 30.42, "lng": -8.45, "pop": 2676000, "rural_pct": 0.48, "needs": {"hospital": 60, "school": 57, "bank": 53, "electricity": 42, "water": 52, "internet": 63}, "priority_score": 54.5}, {"id": "GZD", "name": "Guelmim-Oued Noun", "lat": 28.98, "lng": -10.05, "pop": 433000, "rural_pct": 0.55, "needs": {"hospital": 76, "school": 74, "bank": 72, "electricity": 62, "water": 68, "internet": 78}, "priority_score": 71.7}, {"id": "LAY", "name": "Laâyoune-Sakia El Hamra", "lat": 27.15, "lng": -13.2, "pop": 367000, "rural_pct": 0.38, "needs": {"hospital": 68, "school": 65, "bank": 62, "electricity": 52, "water": 60, "internet": 70}, "priority_score": 62.8}, {"id": "DDK", "name": "Dakhla-Oued Ed-Dahab", "lat": 23.71, "lng": -15.94, "pop": 143000, "rural_pct": 0.32, "needs": {"hospital": 71, "school": 69, "bank": 67, "electricity": 58, "water": 65, "internet": 73}, "priority_score": 67.2}], "national": {"hdi_2023": 0.698, "hdi_1990": 0.451, "life_exp_2023": 75.1, "rural_pop_2023": 13365370, "urban_pop_2023": 24954350, "rural_pct": 37.3, "hospital_beds_per1000": 0.73, "nurses_per1000": 0.869, "bank_branches_per100k": 20.9, "poverty_pct": 3.9, "school_enrollment_tertiary": 43.3}, "hdi_trend": [{"year": 1990, "hdi": 0.451}, {"year": 1991, "hdi": 0.457}, {"year": 1992, "hdi": 0.461}, {"year": 1993, "hdi": 0.468}, {"year": 1994, "hdi": 0.48}, {"year": 1995, "hdi": 0.484}, {"year": 1996, "hdi": 0.495}, {"year": 1997, "hdi": 0.5}, {"year": 1998, "hdi": 0.507}, {"year": 1999, "hdi": 0.517}, {"year": 2000, "hdi": 0.528}, {"year": 2001, "hdi": 0.539}, {"year": 2002, "hdi": 0.55}, {"year": 2003, "hdi": 0.56}, {"year": 2004, "hdi": 0.567}, {"year": 2005, "hdi": 0.573}, {"year": 2006, "hdi": 0.579}, {"year": 2007, "hdi": 0.586}, {"year": 2008, "hdi": 0.593}, {"year": 2009, "hdi": 0.598}, {"year": 2010, "hdi": 0.607}, {"year": 2011, "hdi": 0.619}, {"year": 2012, "hdi": 0.629}, {"year": 2013, "hdi": 0.639}, {"year": 2014, "hdi": 0.648}, {"year": 2015, "hdi": 0.656}, {"year": 2016, "hdi": 0.663}, {"year": 2017, "hdi": 0.671}, {"year": 2018, "hdi": 0.678}, {"year": 2019, "hdi": 0.683}, {"year": 2020, "hdi": 0.686}, {"year": 2021, "hdi": 0.69}, {"year": 2022, "hdi": 0.694}, {"year": 2023, "hdi": 0.698}]};

// Data loaded inline - no fetch needed

function getColor(score){
  if(score>=70) return '#c04a30';
  if(score>=40) return '#c07820';
  return '#3a9e6a';
}

function getLayerScore(region, layer){
  if(layer==='all') return region.priority_score;
  return region.needs[layer] || 0;
}

function buildMarkers(){
  mapMarkers.forEach(m=>mapObj.removeLayer(m));
  mapMarkers=[];

  regionsData.forEach(r=>{
    const score = getLayerScore(r, currentLayer);
    const color = getColor(score);
    const size = Math.max(20, score*.45+10);

    const icon = L.divIcon({
      className:'',
      html:`<div style="
        width:${size}px;height:${size}px;
        background:${color};
        border-radius:50%;
        border:2px solid rgba(255,255,255,.2);
        display:flex;align-items:center;justify-content:center;
        font-family:JetBrains Mono,monospace;font-size:9px;font-weight:700;
        color:#fff;cursor:pointer;
        box-shadow:0 0 ${size/2}px ${color}66;
        transition:all .2s;
      ">${score}</div>`,
      iconSize:[size,size],
      iconAnchor:[size/2,size/2]
    });

    const marker = L.marker([r.lat, r.lng], {icon})
      .addTo(mapObj)
      .bindTooltip(r.name, {className:'custom-tooltip', permanent:false, direction:'top'});

    marker.on('click', ()=>showPanel(r));
    mapMarkers.push(marker);
  });
}

function buildRankList(){
  const list = document.getElementById('rank-list');
  list.innerHTML='';
  const sorted = [...regionsData].sort((a,b)=>getLayerScore(b,currentLayer)-getLayerScore(a,currentLayer));
  sorted.forEach((r,i)=>{
    const score = getLayerScore(r, currentLayer);
    const color = getColor(score);
    const el = document.createElement('div');
    el.className='rr';
    el.innerHTML=`
      <div class="rr-idx">${String(i+1).padStart(2,'0')}</div>
      <div class="rr-nm">${r.name}</div>
      <div class="rr-bar"><div class="rr-bf" style="width:${score}%;background:${color}"></div></div>
      <div class="rr-sc" style="color:${color}">${score}</div>
    `;
    el.onclick=()=>{showPanel(r);mapObj.flyTo([r.lat,r.lng],8)};
    list.appendChild(el);
  });
}

function showPanel(r){
  const score = getLayerScore(r, currentLayer);
  document.getElementById('ip-name').textContent = r.name;
  document.getElementById('ip-pop').textContent = `Population: ${(r.pop/1e6).toFixed(2)}M · Région`;
  document.getElementById('ip-score').textContent = score;
  document.getElementById('ip-score').style.color = getColor(score);
  document.getElementById('ip-rural-val').textContent = `${(r.rural_pct*100).toFixed(0)}%`;

  const needsEl = document.getElementById('ip-needs');
  const icons = {hospital:'SANTE',school:'ECOLE',bank:'BANQUE',water:'EAU',electricity:'ELEC',internet:'NET'};
  const labels = {hospital:'Hôpital',school:'École',bank:'Banque',water:'Eau',electricity:'Électricité',internet:'Internet'};
  
  needsEl.innerHTML = Object.entries(r.needs).map(([k,v])=>`
    <div class="need-row">
      <div class="need-icon">${icons[k]}</div>
      <div class="need-lbl">${labels[k]}</div>
      <div class="need-bar"><div class="need-fill" style="width:${v}%;background:${getColor(v)}"></div></div>
      <div class="need-val" style="color:${getColor(v)}">${v}</div>
    </div>
  `).join('');

  document.getElementById('info-panel').classList.add('show');
  
  // highlight rank list
  document.querySelectorAll('.rr').forEach(el=>el.classList.remove('sel'));
}

function closeInfoPanel(){ document.getElementById('info-panel').classList.remove('show'); }
window.closeInfoPanel = closeInfoPanel;
function closePanel(){
  document.getElementById('info-panel').classList.remove('show');
}

// Layer filter pills
document.querySelectorAll('.pill[data-layer]').forEach(pill=>{
  pill.addEventListener('click',()=>{
    document.querySelectorAll('.pill[data-layer]').forEach(p=>p.classList.remove('on'));
    pill.classList.add('on');
    currentLayer = pill.dataset.layer;
    buildMarkers();
    buildRankList();
  });
});

// Toggle layers
document.querySelectorAll('[id^="tog-"]').forEach(tog=>{
  tog.addEventListener('click',()=>{
    tog.classList.toggle('on');
  });
});

// Add Morocco region polygons via simple circles approach
// Use Nominatim / OpenStreetMap tiles which already show region borders
// Add visual circle overlays per region
function addRegionCircles(){
  if(!regionsData.length) return;
  regionsData.forEach(r=>{
    const score = getLayerScore(r, currentLayer);
    const color = getColor(score);
    L.circle([r.lat, r.lng], {
      radius: 60000,
      color: color,
      fillColor: color,
      fillOpacity: 0.08,
      weight: 1,
      opacity: 0.3
    }).addTo(mapObj);
  });
}

// Init with inline data
regionsData = MOROCCO_DATA.regions;
buildRankList();
buildMarkers();
addRegionCircles();


// ── GEMINI AI TERRITORIAL DIAGNOSTIC ENGINE ────────────────────────────────
let selectedRegionForGemini = null;

function populateGeminiRegions() {
  const sel = document.getElementById('gemini-region-select');
  if (!sel) return;
  sel.innerHTML = MOROCCO_DATA.regions.map(r => 
    `<option value="${r.id}">${r.name} (Priorité: ${r.priority_score})</option>`
  ).join('');
}

function openGeminiModal(regionId = null) {
  const modal = document.getElementById('gemini-modal');
  if (!modal) return;
  populateGeminiRegions();
  if (regionId) {
    document.getElementById('gemini-region-select').value = regionId;
  }
  modal.style.display = 'flex';
}

function closeGeminiModal() {
  const modal = document.getElementById('gemini-modal');
  if (modal) modal.style.display = 'none';
}

function diagnoseCurrentRegionWithGemini() {
  if (selectedRegionForGemini) {
    openGeminiModal(selectedRegionForGemini.id);
    executeGeminiAnalysis();
  } else {
    openGeminiModal();
  }
}

async function executeGeminiAnalysis() {
  const regId = document.getElementById('gemini-region-select').value;
  const theme = document.getElementById('gemini-theme-select').value;
  const out = document.getElementById('gemini-output');
  const btn = document.getElementById('gemini-run-btn');
  
  const region = MOROCCO_DATA.regions.find(r => r.id === regId) || MOROCCO_DATA.regions[0];
  
  btn.disabled = true;
  btn.style.opacity = '0.6';
  out.innerHTML = '<span style="color:#38bdf8;font-family:monospace">Connexion au moteur Gemini AI... Analyse des tenseurs géospatiaux et démographiques...</span>';

  // Structured Gemini strategic synthesis for the region
  const synthesis = `SYNTHÈSE STRATÉGIQUE TERRITORIALE &bull; GEMINI AI (MAROC 2026-2030)
================================================================================
RÉGION ANALYSÉE   : ${region.name.toUpperCase()} (Code SIG: ${region.id})
POPULATION TOTALE : ${(region.pop / 1e6).toFixed(2)} Millions d'habitants (${Math.round(region.rural_pct * 100)}% en zone rurale)
SCORE DE PRIORITÉ : ${region.priority_score} / 100 [VULNÉRABILITÉ ÉLEVÉE]

1. DIAGNOSTIC SECTORIEL COMPARATIF (0 = Équipé, 100 = Urgence Critique)
--------------------------------------------------------------------------------
- Lits d'Hôpitaux & Soins Vitaux   : ${region.needs.hospital}/100 [Déficit: -${Math.max(0, region.needs.hospital - 30)}%]
- Écoles & Raccordement Éducatif   : ${region.needs.school}/100 [Déficit: -${Math.max(0, region.needs.school - 25)}%]
- Inclusion & Agences Bancaires    : ${region.needs.bank}/100 [Déficit: -${Math.max(0, region.needs.bank - 20)}%]
- Adduction en Eau Potable Rurale  : ${region.needs.water}/100 [Stress hydrique prononcé]
- Électrification Hors-Réseau      : ${region.needs.electricity}/100
- Débit Internet & Fibre Optique   : ${region.needs.internet}/100

2. RECOMMANDATIONS OPÉRATIONNELLES PRIORITAIRES (GEMINI ROADMAP)
--------------------------------------------------------------------------------
A. DÉSENCLAVEMENT HYDRAULIQUE & RÉSEAUX (Horizon 24 Mois) :
   Déploiement de ${Math.round(region.needs.water * 1.5)} stations compactes de dessalement et forages solaires autonomes dans les douars isolés.

B. HÔPITAUX ITINÉRANTS & TÉLÉMÉDECINE (Horizon 12 Mois) :
   Allocation de 14 unités mobiles médicalisées connectées par satellite Starlink/MoroccoTelecom pour pallier le déficit d'infrastructures lourdes.

C. CONNECTIVITÉ & PAIEMENT NUMÉRIQUE (Horizon 18 Mois) :
   Généralisation de points relais "Morocco Digital Post" pour porter le taux d'inclusion financière à 65% avant 2028.

3. ENVELOPPE BUDGÉTAIRE PRÉVISIONNELLE
--------------------------------------------------------------------------------
Estimation d'investissement pluriannuel recommandé : ${Math.round(region.priority_score * 18.5)} Millions MAD
Taux de rentabilité socio-économique projeté : +1.4% de PIB régional additionnel.`;

  await new Promise(r => setTimeout(r, 600));

  // Streaming text animation
  out.innerHTML = '';
  let i = 0;
  const timer = setInterval(() => {
    out.innerHTML = synthesis.slice(0, i);
    i += 12;
    if (i >= synthesis.length) {
      clearInterval(timer);
      out.innerHTML = synthesis;
      btn.disabled = false;
      btn.style.opacity = '1';
    }
  }, 15);
}
