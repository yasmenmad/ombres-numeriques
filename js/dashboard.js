// ── INLINE DATA ──────────────────────────────────────────────────────────────
const D = {"regions": [{"id": "TAN", "name": "Tanger-Tétouan-Al Hoceïma", "lat": 35.77, "lng": -5.8, "pop": 3556000, "rural_pct": 0.36, "needs": {"hospital": 42, "school": 38, "bank": 35, "electricity": 22, "water": 30, "internet": 45}, "priority_score": 35.3}, {"id": "ORI", "name": "Oriental", "lat": 34.68, "lng": -2.93, "pop": 2314000, "rural_pct": 0.42, "needs": {"hospital": 61, "school": 58, "bank": 52, "electricity": 38, "water": 48, "internet": 62}, "priority_score": 53.2}, {"id": "FMK", "name": "Fès-Meknès", "lat": 34.02, "lng": -5.0, "pop": 4236000, "rural_pct": 0.45, "needs": {"hospital": 55, "school": 52, "bank": 48, "electricity": 31, "water": 42, "internet": 57}, "priority_score": 47.5}, {"id": "RBS", "name": "Rabat-Salé-Kénitra", "lat": 34.02, "lng": -6.83, "pop": 4580000, "rural_pct": 0.29, "needs": {"hospital": 28, "school": 25, "bank": 18, "electricity": 12, "water": 18, "internet": 30}, "priority_score": 21.8}, {"id": "BKD", "name": "Béni Mellal-Khénifra", "lat": 32.33, "lng": -6.35, "pop": 2520000, "rural_pct": 0.57, "needs": {"hospital": 72, "school": 68, "bank": 65, "electricity": 55, "water": 62, "internet": 74}, "priority_score": 66.0}, {"id": "CAS", "name": "Casablanca-Settat", "lat": 33.5, "lng": -7.6, "pop": 6861000, "rural_pct": 0.19, "needs": {"hospital": 20, "school": 18, "bank": 12, "electricity": 8, "water": 12, "internet": 22}, "priority_score": 15.3}, {"id": "MRK", "name": "Marrakech-Safi", "lat": 31.63, "lng": -8.0, "pop": 4520000, "rural_pct": 0.5, "needs": {"hospital": 65, "school": 62, "bank": 58, "electricity": 48, "water": 58, "internet": 68}, "priority_score": 59.8}, {"id": "DRK", "name": "Drâa-Tafilalet", "lat": 31.93, "lng": -4.43, "pop": 1635000, "rural_pct": 0.63, "needs": {"hospital": 82, "school": 78, "bank": 75, "electricity": 68, "water": 72, "internet": 85}, "priority_score": 76.7}, {"id": "SMA", "name": "Souss-Massa", "lat": 30.42, "lng": -8.45, "pop": 2676000, "rural_pct": 0.48, "needs": {"hospital": 60, "school": 57, "bank": 53, "electricity": 42, "water": 52, "internet": 63}, "priority_score": 54.5}, {"id": "GZD", "name": "Guelmim-Oued Noun", "lat": 28.98, "lng": -10.05, "pop": 433000, "rural_pct": 0.55, "needs": {"hospital": 76, "school": 74, "bank": 72, "electricity": 62, "water": 68, "internet": 78}, "priority_score": 71.7}, {"id": "LAY", "name": "Laâyoune-Sakia El Hamra", "lat": 27.15, "lng": -13.2, "pop": 367000, "rural_pct": 0.38, "needs": {"hospital": 68, "school": 65, "bank": 62, "electricity": 52, "water": 60, "internet": 70}, "priority_score": 62.8}, {"id": "DDK", "name": "Dakhla-Oued Ed-Dahab", "lat": 23.71, "lng": -15.94, "pop": 143000, "rural_pct": 0.32, "needs": {"hospital": 71, "school": 69, "bank": 67, "electricity": 58, "water": 65, "internet": 73}, "priority_score": 67.2}], "national": {"hdi_2023": 0.698, "hdi_1990": 0.451, "life_exp_2023": 75.1, "rural_pop_2023": 13365370, "urban_pop_2023": 24954350, "rural_pct": 37.3, "hospital_beds_per1000": 0.73, "nurses_per1000": 0.869, "bank_branches_per100k": 20.9, "poverty_pct": 3.9, "school_enrollment_tertiary": 43.3}, "hdi_trend": [{"year": 1990, "hdi": 0.451}, {"year": 1991, "hdi": 0.457}, {"year": 1992, "hdi": 0.461}, {"year": 1993, "hdi": 0.468}, {"year": 1994, "hdi": 0.48}, {"year": 1995, "hdi": 0.484}, {"year": 1996, "hdi": 0.495}, {"year": 1997, "hdi": 0.5}, {"year": 1998, "hdi": 0.507}, {"year": 1999, "hdi": 0.517}, {"year": 2000, "hdi": 0.528}, {"year": 2001, "hdi": 0.539}, {"year": 2002, "hdi": 0.55}, {"year": 2003, "hdi": 0.56}, {"year": 2004, "hdi": 0.567}, {"year": 2005, "hdi": 0.573}, {"year": 2006, "hdi": 0.579}, {"year": 2007, "hdi": 0.586}, {"year": 2008, "hdi": 0.593}, {"year": 2009, "hdi": 0.598}, {"year": 2010, "hdi": 0.607}, {"year": 2011, "hdi": 0.619}, {"year": 2012, "hdi": 0.629}, {"year": 2013, "hdi": 0.639}, {"year": 2014, "hdi": 0.648}, {"year": 2015, "hdi": 0.656}, {"year": 2016, "hdi": 0.663}, {"year": 2017, "hdi": 0.671}, {"year": 2018, "hdi": 0.678}, {"year": 2019, "hdi": 0.683}, {"year": 2020, "hdi": 0.686}, {"year": 2021, "hdi": 0.69}, {"year": 2022, "hdi": 0.694}, {"year": 2023, "hdi": 0.698}]}
;

// ── CONFIG ───────────────────────────────────────────────────────────────────
Chart.defaults.color = '#5a7078';
Chart.defaults.borderColor = '#1a2428';
Chart.defaults.font.family = "'JetBrains Mono', monospace";
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(7,9,10,.96)';
Chart.defaults.plugins.tooltip.borderColor = '#1a2428';
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.titleColor = '#d4a843';
Chart.defaults.plugins.tooltip.bodyColor = '#e8e2d8';

const C = {gold:'#d4a843',green:'#3a9e6a',red:'#c04a30',orange:'#c07820',blue:'#2a5ab0',purple:'#7a40b8',teal:'#2a8888'};
const SC = {hospital:C.red,school:C.blue,bank:C.green,water:C.teal,electricity:C.gold,internet:C.purple};
const SI = {hospital:'🏥',school:'🏫',bank:'🏦',water:'💧',electricity:'⚡',internet:'📶'};
const SL = {hospital:'Hôpital',school:'École',bank:'Banque',water:'Eau',electricity:'Électricité',internet:'Internet'};
const getColor = s => s>=70?C.red:s>=40?C.orange:C.green;

// ── HDI CHART ────────────────────────────────────────────────────────────────
new Chart(document.getElementById('hdiChart'), {
  type:'line',
  data:{
    labels: D.hdi_trend.map(d=>d.year),
    datasets:[{
      label:'IDH', data: D.hdi_trend.map(d=>d.hdi),
      borderColor:C.gold, backgroundColor:'rgba(212,168,67,.1)',
      borderWidth:2, pointRadius:0, fill:true, tension:.4
    }]
  },
  options:{responsive:true,plugins:{legend:{display:false}},
    scales:{x:{grid:{color:'#1a2428'},ticks:{maxTicksLimit:8,font:{size:8}}},
            y:{grid:{color:'#1a2428'},ticks:{font:{size:8}},min:.4,max:.75}}}
});

// ── POP CHART ────────────────────────────────────────────────────────────────
const years = D.hdi_trend.map(d=>d.year);
const rural = [12840,12892,12936,12969,12988,12994,13022,13080,13132,13168,13210,13246,13272,13299,13315,13326,13335,13341,13346,13349,13350,13350,13348,13344,13340,13335,13328,13320,13312,13302,13290,13279,13365,13365];
const urban = rural.map((v,i)=>Math.round(v*(1.5+i*.04)));
new Chart(document.getElementById('popChart'), {
  type:'line',
  data:{labels:years,datasets:[
    {label:'Rurale',data:rural,borderColor:C.orange,backgroundColor:'rgba(192,120,32,.1)',borderWidth:2,pointRadius:0,fill:true,tension:.4},
    {label:'Urbaine',data:urban,borderColor:C.blue,backgroundColor:'rgba(42,90,176,.1)',borderWidth:2,pointRadius:0,fill:true,tension:.4}
  ]},
  options:{responsive:true,plugins:{legend:{labels:{font:{size:9},color:'#5a7078',boxWidth:10}}},
    scales:{x:{grid:{color:'#1a2428'},ticks:{maxTicksLimit:8,font:{size:8}}},
            y:{grid:{color:'#1a2428'},ticks:{font:{size:8}}}}}
});

// ── BAR CHART ────────────────────────────────────────────────────────────────
const sorted = [...D.regions].sort((a,b)=>b.priority_score-a.priority_score);
new Chart(document.getElementById('barChart'), {
  type:'bar',
  data:{
    labels: sorted.map(r=>r.name.length>20?r.name.substring(0,18)+'…':r.name),
    datasets:[{
      data: sorted.map(r=>r.priority_score),
      backgroundColor: sorted.map(r=>getColor(r.priority_score)+'bb'),
      borderColor: sorted.map(r=>getColor(r.priority_score)),
      borderWidth:1, borderRadius:2
    }]
  },
  options:{indexAxis:'y',responsive:true,plugins:{legend:{display:false}},
    scales:{x:{grid:{color:'#1a2428'},ticks:{font:{size:8}},max:100},
            y:{grid:{display:false},ticks:{font:{size:8}}}}}
});

// ── RADAR CHART ──────────────────────────────────────────────────────────────
const top4 = [...D.regions].sort((a,b)=>b.priority_score-a.priority_score).slice(0,4);
const services = ['hospital','school','bank','water','electricity','internet'];
const rcolors = [C.red,C.orange,C.gold,C.blue];
new Chart(document.getElementById('radarChart'), {
  type:'radar',
  data:{
    labels: services.map(s=>SL[s]),
    datasets: top4.map((r,i)=>({
      label: r.name.split('-')[0].trim(),
      data: services.map(s=>r.needs[s]),
      borderColor:rcolors[i], backgroundColor:rcolors[i]+'22',
      borderWidth:1.5, pointRadius:2
    }))
  },
  options:{responsive:true,
    plugins:{legend:{labels:{font:{size:8},color:'#5a7078',boxWidth:8}}},
    scales:{r:{grid:{color:'#1a2428'},angleLines:{color:'#1a2428'},
      pointLabels:{font:{size:8},color:'#5a7078'},
      ticks:{stepSize:20,color:'#5a7078',font:{size:7},backdropColor:'transparent'},
      min:0,max:100}}}
});

// ── DONUT CHART ──────────────────────────────────────────────────────────────
const avgs = services.map(s=>Math.round(D.regions.reduce((sum,r)=>sum+r.needs[s],0)/D.regions.length));
new Chart(document.getElementById('donutChart'), {
  type:'doughnut',
  data:{
    labels: services.map(s=>SI[s]+' '+SL[s]),
    datasets:[{data:avgs, backgroundColor:services.map(s=>SC[s]), borderColor:'#07090a', borderWidth:2}]
  },
  options:{responsive:true,cutout:'65%',
    plugins:{legend:{labels:{font:{size:8},color:'#5a7078',boxWidth:8,padding:6}}}}
});

// ── SERVICE BAR ──────────────────────────────────────────────────────────────
new Chart(document.getElementById('serviceChart'), {
  type:'bar',
  data:{
    labels: services.map(s=>SI[s]+' '+SL[s]),
    datasets:[{
      label:'Besoin moyen',
      data: avgs,
      backgroundColor: services.map(s=>SC[s]+'bb'),
      borderColor: services.map(s=>SC[s]),
      borderWidth:1, borderRadius:3
    }]
  },
  options:{responsive:true,plugins:{legend:{display:false}},
    scales:{x:{grid:{display:false},ticks:{font:{size:9}}},
            y:{grid:{color:'#1a2428'},ticks:{font:{size:8}},max:100}}}
});

// ── HEATMAP ──────────────────────────────────────────────────────────────────
const hm = document.getElementById('heatmap');
const hmSorted = [...D.regions].sort((a,b)=>b.priority_score-a.priority_score);

// header
const hdr = document.createElement('div');
hdr.style.cssText='display:flex;align-items:center;gap:6px;margin-bottom:6px';
hdr.innerHTML='<div style="width:150px;flex-shrink:0"></div><div style="display:flex;gap:2px;flex:1">'
  +services.map(s=>`<div style="flex:1;text-align:center;font-family:JetBrains Mono,monospace;font-size:8px;color:#5a7078">${SI[s]}</div>`).join('')+'</div>';
hm.appendChild(hdr);

hmSorted.forEach(r=>{
  const row=document.createElement('div');
  row.style.cssText='display:flex;align-items:center;gap:6px;margin-bottom:3px';
  const lbl=document.createElement('div');
  lbl.style.cssText='width:150px;flex-shrink:0;font-size:9px;color:#5a7078;white-space:nowrap;overflow:hidden;text-overflow:ellipsis';
  lbl.textContent=r.name;
  const cells=document.createElement('div');
  cells.style.cssText='display:flex;gap:2px;flex:1';
  services.forEach(s=>{
    const v=r.needs[s];
    const g=Math.round(58+v*1.9), rb=Math.round(158-v*1.25);
    const cell=document.createElement('div');
    cell.className='hm-cell';
    cell.title=`${r.name} — ${SL[s]}: ${v}/100`;
    cell.style.background=`rgb(${g},${rb},80)`;
    cells.appendChild(cell);
  });
  row.appendChild(lbl);row.appendChild(cells);
  hm.appendChild(row);
});

// gradient legend
const leg=document.createElement('div');
leg.style.cssText='display:flex;align-items:center;gap:8px;margin-top:10px';
leg.innerHTML='<span style="font-family:JetBrains Mono,monospace;font-size:7px;color:#5a7078">0 — Équipé</span><div style="flex:1;height:5px;border-radius:2px;background:linear-gradient(90deg,#3a9e6a,#c07820,#c04a30)"></div><span style="font-family:JetBrains Mono,monospace;font-size:7px;color:#5a7078">100 — Urgent</span>';
hm.appendChild(leg);

// ── REGION CARDS ─────────────────────────────────────────────────────────────
const grid=document.getElementById('rc-grid');
const allSorted=[...D.regions].sort((a,b)=>b.priority_score-a.priority_score);
allSorted.forEach(r=>{
  const div=document.createElement('div');
  div.className='rc';
  const color=getColor(r.priority_score);
  const bars=services.map(s=>`
    <div class="rc-bar-row">
      <div class="rc-icon">${SI[s]}</div>
      <div class="rc-track"><div class="rc-fill" style="width:${r.needs[s]}%;background:${getColor(r.needs[s])}"></div></div>
      <div class="rc-num" style="color:${getColor(r.needs[s])}">${r.needs[s]}</div>
    </div>`).join('');
  div.innerHTML=`
    <div class="rc-name">${r.name}</div>
    <div class="rc-pop">${(r.pop/1e6).toFixed(1)}M · ${Math.round(r.rural_pct*100)}% rural</div>
    <div class="rc-score" style="color:${color}">${r.priority_score}</div>
    <div class="rc-slbl">Score global</div>
    ${bars}`;
  div.onclick=()=>location.href='map.html';
  grid.appendChild(div);
});
