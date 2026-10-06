'use strict';
// Public navigation copy only. Do not place private canon or unpublished plot data here.
const areas = {
 engineering: {number:'01',title:'Science & engineering',description:'Explore the purpose, interfaces, operating limits, and failure modes of the universe’s technology.',tags:['Energy systems','Materials','Propulsion','Failure analysis']},
 civilization: {number:'02',title:'Civilization systems',description:'Explore infrastructure-first development and the services that sustain a civilization.',tags:['Infrastructure','Transportation','Agriculture','Industrial base']},
 ships: {number:'03',title:'Ships & facilities',description:'Explore the project areas for vehicles, stations, shipyards, and colony infrastructure.',tags:['Fleet architecture','Stations','Shipyards','Colony infrastructure']},
 books: {number:'04',title:'Books & narrative',description:'Explore the development process from series roadmap and outline to chapter plans, drafts, and revision.',tags:['Series roadmap','Outlines','Chapter plans','Revisions']},
 research: {number:'05',title:'Research library',description:'Explore the scientific and engineering evidence used to inform development. Research does not automatically establish fictional canon.',tags:['Physics','Systems engineering','Aerospace','Orbital mechanics']}
};
for (const button of document.querySelectorAll('.node')) {
 button.addEventListener('click', () => {
  const area = areas[button.dataset.id];
  for (const node of document.querySelectorAll('.node')) node.setAttribute('aria-pressed', String(node === button));
  document.getElementById('detail-number').textContent = area.number + ' / PROJECT AREA';
  document.getElementById('detail-title').textContent = area.title;
  document.getElementById('detail-description').textContent = area.description;
  document.getElementById('detail-tags').replaceChildren(...area.tags.map(tag => {const li=document.createElement('li');li.textContent=tag;return li;}));
 });
}
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
const motionButton = document.getElementById('motion');
const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
let paused = preference.matches, frame = 0, previous = 0, time = 0, width = 0, height = 0, stars = [];
// Deterministic decorative starfield; no astronomical coordinates are represented.
let seed = 7401;
function random(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646;}
function resize(){width=innerWidth;height=innerHeight;const ratio=Math.min(devicePixelRatio||1,2);canvas.width=width*ratio;canvas.height=height*ratio;canvas.style.width=width+'px';canvas.style.height=height+'px';if(ctx)ctx.setTransform(ratio,0,0,ratio,0,0);seed=7401;stars=Array.from({length:Math.min(180,Math.floor(width*height/6500))},()=>({x:random()*width,y:random()*height,r:random()*1.2+.25,a:random()*.65+.15,phase:random()*Math.PI*2}));draw();}
function draw(){if(!ctx)return;ctx.clearRect(0,0,width,height);for(const s of stars){ctx.beginPath();ctx.fillStyle=`rgba(185,222,212,${s.a*(.7+.3*Math.sin(time*.4+s.phase))})`;ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();}}
function tick(now){if(paused||document.hidden){frame=0;return;}if(previous)time+=Math.min((now-previous)/1000,.1);previous=now;draw();frame=requestAnimationFrame(tick);}
function sync(){document.body.classList.toggle('paused',paused);motionButton.setAttribute('aria-pressed',String(paused));motionButton.textContent=paused?'Resume motion':'Pause motion';cancelAnimationFrame(frame);frame=0;previous=0;draw();if(!paused&&!document.hidden)frame=requestAnimationFrame(tick);}
motionButton.addEventListener('click',()=>{paused=!paused;sync();});
preference.addEventListener('change',event=>{paused=event.matches;sync();});
document.addEventListener('visibilitychange',()=>{document.body.classList.toggle('paused',paused||document.hidden);cancelAnimationFrame(frame);frame=0;previous=0;if(!paused&&!document.hidden)frame=requestAnimationFrame(tick);});
window.addEventListener('resize',resize);resize();sync();

// v1.2 — render public sections from site-data.js (textContent only; no HTML injection).
(function renderPublicSections(){
 const d = window.FR_SITE; if (!d) return;
 const $ = id => document.getElementById(id);
 const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
 const fill = (id, items) => { const ul = $(id); if (ul) ul.replaceChildren(...items.map(t => el('li', null, t))); };
 // Synopsis
 const s = d.synopsis;
 $('syn-body').replaceChildren(...s.paragraphs.map(p => el('p', null, p)));
 fill('syn-established', s.established); fill('syn-pending', s.inDevelopment);
 $('syn-source').textContent = 'SOURCE: ' + s.source;
 // Status
 const st = d.status, pct = v => Math.max(0, Math.min(100, v)) + '%';
 $('status-metric').textContent = st.metric;
 $('status-value').textContent = st.value.toFixed(1) + '%';
 const asof = $('status-asof'); asof.textContent = 'As of ' + st.asOf + ' · ' + st.phase + '. ';
 const a = el('a', null, 'Read the monthly report ↗'); a.href = st.reportHref; asof.append(el('br'), a);
 $('status-fill').style.width = pct(st.value);
 const bar = $('status-bar');
 bar.setAttribute('aria-label', st.metric + ': ' + st.value + '% as of ' + st.asOf + '. Previous public points: ' + st.markers.map(m => m.label + ' ' + m.value + '%').join(', ') + '. ' + st.gate.label + ' at ' + st.gate.value + '%.');
 for (const m of st.markers) { const t = el('span', 'tick'); t.style.left = pct(m.value); t.title = m.label + ' · ' + m.value + '%'; bar.append(t); }
 const g = el('span', 'gate'); g.style.left = pct(st.gate.value); bar.append(g);
 const scale = $('status-scale');
 scale.append(el('span', 'scale-start', '0%'));
 const gl = el('span', 'scale-gate', st.gate.value + '% · ' + st.gate.label); gl.style.left = pct(st.gate.value); scale.append(gl);
 scale.append(el('span', 'scale-end', '100%'));
 const hist = el('p', 'history', 'Public points: ' + st.markers.map(m => m.label + ' ' + m.value + '%').join(' → '));
 scale.after(hist);
 $('status-caption').textContent = st.caption;
 $('status-stats').replaceChildren(...st.stats.flatMap(x => { const w = el('div', 'stat'); w.append(el('dt', null, x.label), el('dd', null, x.value)); return [w]; }));
 $('status-source').textContent = 'SOURCE: ' + st.source + ' · Static dated snapshot, updated monthly. Not a live tracker.';
 // Milestones
 $('ms-list').replaceChildren(...d.milestones.map(m => { const li = el('li'); const time = el('time', null, m.date); time.dateTime = m.date; li.append(time, el('h3', null, m.title), el('p', null, m.text)); return li; }));
 // Roadmap
 const r = d.roadmap; $('rm-note').textContent = r.note; $('rm-source').textContent = 'SOURCE: ' + r.source;
 $('rm-cols').replaceChildren(...r.columns.map(c => { const col = el('div', 'rm-col'); col.append(el('p', 'rm-stage', c.stage.toUpperCase()));
  for (const grp of c.groups) { const art = el('article'); art.append(el('h3', null, grp.heading)); const ul = el('ul'); ul.replaceChildren(...grp.points.map(p => el('li', null, p))); art.append(ul); col.append(art); }
  return col; }));
})();
