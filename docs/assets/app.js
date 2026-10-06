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
