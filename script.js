// ═══════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════
const MODES = {
  ad: {
    color:'#e879f9', icon:'🌸', name:'Autosomal\nDominant',
    desc:'One copy of the dominant allele is enough to express the trait. It usually appears in every generation, and males and females are equally affected. Each child of an affected heterozygote has a 50% chance of being affected.',
    affected:['p1_2','p2_2','p2_3','p3_1','p3_3'], carriers:[],
    probMating:'Aa (affected daughter II-4) × aa (unaffected spouse) → Gen III',
    probs:[{lbl:'Affected (Aa)',pct:50,type:'affected'},{lbl:'Unaffected (aa)',pct:50,type:'unaffected'}],
    genotypes:{
      p1_1:{gt:'aa',status:'Unaffected',exp:'Grandfather I-1 carries no dominant allele. He is homozygous recessive (aa) and does not express the trait.'},
      p1_2:{gt:'Aa',status:'Affected',exp:'Grandmother I-2 carries one dominant allele (A). In autosomal dominant inheritance, one copy is sufficient to express the trait — she is affected.'},
      p2_1:{gt:'aa',status:'Unaffected',exp:'Son II-1 did not inherit the dominant A allele from his affected mother. He is homozygous recessive (aa) and unaffected.'},
      p2_3:{gt:'Aa',status:'Affected',exp:'Son II-2 inherited the dominant A allele from Grandmother and is therefore affected (Aa).'},
      p2_2:{gt:'Aa',status:'Affected',exp:'Daughter II-4 inherited the dominant A allele from her affected mother Grandmother. One copy is enough to express the trait — she is affected.'},
      p2_4:{gt:'aa',status:'Unaffected',exp:'Daughter II-3 did not inherit the dominant A allele from her affected mother — she is homozygous recessive (aa) and unaffected.'},
      spouse:{gt:'aa',status:'Unaffected',exp:'The Spouse carries no dominant allele (aa) and is phenotypically normal.'},
      p3_1:{gt:'Aa',status:'Affected',exp:'Grandson III-1 inherited the dominant A allele from his affected mother II-4. One copy is sufficient — he expresses the trait.'},
      p3_3:{gt:'Aa',status:'Affected',exp:'Grandson III-2 also inherited the dominant A allele from his mother and is affected (Aa).'},
      p3_2:{gt:'aa',status:'Unaffected',exp:'Granddaughter III-3 did not inherit the dominant allele from her affected mother. She is homozygous recessive (aa) and unaffected.'},
      p3_4:{gt:'aa',status:'Unaffected',exp:'Granddaughter III-4 also did not inherit the dominant allele — she is unaffected (aa).'}
    }
  },
  ar: {
    color:'#fbbf24', icon:'🟡', name:'Autosomal\nRecessive',
    desc:'Two copies of the recessive allele (aa) are needed to express the trait, so it can skip generations. Two unaffected carrier parents (Aa × Aa) have a 25% chance of an affected child with each pregnancy.',
    affected:['p2_1'], carriers:['p1_1','p1_2','p2_2','p2_4','p3_1','p3_3'],
    probMating:'Aa (carrier daughter II-4) × AA (unaffected spouse) → Gen III',
    probs:[{lbl:'Carrier (Aa)',pct:50,type:'carrier'},{lbl:'Unaffected (AA)',pct:50,type:'unaffected'},{lbl:'Affected (aa)',pct:0,type:'affected'}],
    genotypes:{
      p1_1:{gt:'Aa',status:'Carrier',exp:'Grandfather I-1 carries one recessive allele (a) silently. He and Grandmother are both carriers, giving their children a 25% chance of being affected.'},
      p1_2:{gt:'Aa',status:'Carrier',exp:'Grandmother I-2 is also a carrier (Aa). Both Gen I parents are carriers — phenotypically normal but each able to pass the recessive allele to offspring.'},
      p2_1:{gt:'aa',status:'Affected',exp:'Son II-1 inherited one recessive allele from each carrier parent, giving him two copies (aa). He is the only affected individual in Generation II.'},
      p2_3:{gt:'AA',status:'Unaffected',exp:'Son II-2 did not inherit any recessive allele. He is homozygous dominant (AA) and neither affected nor a carrier.'},
      p2_2:{gt:'Aa',status:'Carrier',exp:'Daughter II-4 inherited one recessive allele from her carrier parents. She is a carrier (Aa) — phenotypically normal but able to pass the allele on.'},
      p2_4:{gt:'Aa',status:'Carrier',exp:'Daughter II-3 is also a carrier (Aa), having inherited one recessive allele from the carrier parents.'},
      spouse:{gt:'AA',status:'Unaffected',exp:'The Spouse is homozygous dominant (AA) with no recessive alleles — unaffected and not a carrier.'},
      p3_1:{gt:'Aa',status:'Carrier',exp:'Grandson III-1 received one recessive allele from his carrier mother II-4 and none from the unaffected Spouse. He is a carrier (Aa) but not affected.'},
      p3_3:{gt:'Aa',status:'Carrier',exp:'Grandson III-2 is also a carrier (Aa) — one recessive allele from his mother, none from the Spouse.'},
      p3_2:{gt:'AA',status:'Unaffected',exp:'Granddaughter III-3 received no recessive alleles from either parent. She is homozygous dominant (AA) and fully unaffected.'},
      p3_4:{gt:'AA',status:'Unaffected',exp:'Granddaughter III-4 is also homozygous dominant (AA) — unaffected with no recessive alleles.'}
    }
  },
  xlr: {
    color:'#67e8f9', icon:'🔵', name:'X-Linked\nRecessive',
    desc:'Males need only one copy (X<sup>a</sup>Y) to be affected, so far more males are affected. Heterozygous females are usually unaffected carriers. No male-to-male transmission: an affected father passes X<sup>a</sup> to all his daughters.',
    affected:['p1_1','p2_3','p3_1'], carriers:['p1_2','p2_2','p2_4','p3_2'],
    probMating:'XAXa (carrier daughter II-4) × XAY (unaffected spouse) → Gen III',
    probs:[{lbl:'Sons affected (XaY)',pct:25,type:'affected'},{lbl:'Sons unaffected (XAY)',pct:25,type:'unaffected'},{lbl:'Daughters carrier (XAXa)',pct:25,type:'carrier'},{lbl:'Daughters normal (XAXA)',pct:25,type:'unaffected'}],
    genotypes:{
      p1_1:{gt:'XaY',status:'Affected',exp:'Grandfather I-1 has only one X chromosome, which carries the recessive allele (X<sup>a</sup>). Males need just one copy to be affected — he expresses the trait.'},
      p1_2:{gt:'XAXa',status:'Carrier',exp:'Grandmother I-2 has a normal X (X<sup>A</sup>) and a recessive X (X<sup>a</sup>). The dominant allele masks the condition, so she is a phenotypically normal carrier.'},
      p2_1:{gt:'XAY',status:'Unaffected',exp:'Son II-1 inherited the normal X<sup>A</sup> from his carrier mother and a Y from his affected father. He is unaffected — fathers cannot pass X to sons.'},
      p2_3:{gt:'XaY',status:'Affected',exp:'Son II-2 inherited the recessive X<sup>a</sup> from his carrier mother and a Y from his father. With only one X chromosome he expresses the trait — he is affected.'},
      p2_2:{gt:'XAXa',status:'Carrier',exp:'Daughter II-4 received the recessive X<sup>a</sup> from her affected father (his only X goes to all daughters) and a normal X<sup>A</sup> from her mother. She is a carrier.'},
      p2_4:{gt:'XAXa',status:'Carrier',exp:'Daughter II-3 also received the recessive X<sup>a</sup> from her affected father (X<sup>a</sup>Y — all daughters inherit his only X) and a normal X<sup>A</sup> from her carrier mother. She is a carrier.'},
      spouse:{gt:'XAY',status:'Unaffected',exp:'The Spouse has a normal X chromosome (X<sup>A</sup>Y) and carries no recessive allele — he is unaffected.'},
      p3_1:{gt:'XaY',status:'Affected',exp:'Grandson III-1 inherited the recessive X<sup>a</sup> from his carrier mother II-4, and a Y from the Spouse. With only one X chromosome, he expresses the trait.'},
      p3_3:{gt:'XAY',status:'Unaffected',exp:'Grandson III-2 inherited the normal X<sup>A</sup> from his carrier mother II-4 and a Y from the Spouse — he is unaffected.'},
      p3_2:{gt:'XAXa',status:'Carrier',exp:'Granddaughter III-3 inherited the recessive X<sup>a</sup> from her carrier mother II-4 and a normal X<sup>A</sup> from the Spouse. She is a carrier like her mother.'},
      p3_4:{gt:'XAXA',status:'Unaffected',exp:'Granddaughter III-4 inherited a normal X<sup>A</sup> from the Spouse and a normal X<sup>A</sup> from her carrier mother — she is homozygous normal (X<sup>A</sup>X<sup>A</sup>) and unaffected.'}
    }
  },
  xld: {
    color:'#4ade80', icon:'🟢', name:'X-Linked\nDominant',
    desc:'One copy of the dominant X allele causes the trait in both sexes. An affected heterozygous mother passes it to 50% of sons and daughters; an affected father passes it to all daughters and no sons.',
    affected:['p1_1','p2_2','p2_4','p3_3','p3_4'], carriers:[],
    probMating:'XAXa (affected daughter II-4) × XaY (unaffected spouse) → Gen III',
    probs:[{lbl:'Daughters affected (XAXa)',pct:25,type:'affected'},{lbl:'Daughters unaffected (XaXa)',pct:25,type:'unaffected'},{lbl:'Sons affected (XAY)',pct:25,type:'affected'},{lbl:'Sons unaffected (XaY)',pct:25,type:'unaffected'}],
    genotypes:{
      p1_1:{gt:'XAY',status:'Affected',exp:'Grandfather I-1 carries the dominant allele on his single X chromosome (X<sup>A</sup>Y). In X-linked dominant inheritance, one copy in males is sufficient — he is affected.'},
      p1_2:{gt:'XaXa',status:'Unaffected',exp:'Grandmother I-2 has two normal X chromosomes (X<sup>a</sup>X<sup>a</sup>) and does not carry the dominant allele — she is unaffected.'},
      p2_1:{gt:'XaY',status:'Unaffected',exp:'Son II-1 inherited a Y from his affected father (not the X), and a normal X<sup>a</sup> from his mother. He is unaffected — fathers do not pass X to sons.'},
      p2_3:{gt:'XaY',status:'Unaffected',exp:'Son II-2 also inherited a Y from his affected father (not the X) and a normal X<sup>a</sup> from his mother — he is unaffected. Fathers in XLD cannot pass X to sons.'},
      p2_2:{gt:'XAXa',status:'Affected',exp:'Daughter II-4 received the dominant X<sup>A</sup> from her affected father Grandfather. All daughters of an affected father must inherit his X, so she is affected.'},
      p2_4:{gt:'XAXa',status:'Affected',exp:'Daughter II-3 also received the dominant X<sup>A</sup> from her affected father — all daughters of an affected XLD father are affected.'},
      spouse:{gt:'XaY',status:'Unaffected',exp:'The Spouse is unaffected with a normal X chromosome (X<sup>a</sup>Y) — he carries no dominant allele.'},
      p3_1:{gt:'XaY',status:'Unaffected',exp:'Grandson III-1 inherited a Y from the Spouse and the normal X<sup>a</sup> from his affected mother II-4 (50% chance). He is unaffected.'},
      p3_3:{gt:'XAY',status:'Affected',exp:'Grandson III-2 inherited a Y from the Spouse and the dominant X<sup>A</sup> from his affected mother II-4 (50% chance). He expresses the trait.'},
      p3_2:{gt:'XaXa',status:'Unaffected',exp:'Granddaughter III-3 inherited X<sup>a</sup> from the Spouse and the normal X<sup>a</sup> from her affected mother (50% chance) — she is homozygous normal and unaffected.'},
      p3_4:{gt:'XAXa',status:'Affected',exp:'Granddaughter III-4 inherited X<sup>a</sup> from the Spouse and the dominant X<sup>A</sup> from her affected mother (50% chance) — she expresses the trait.'}
    }
  }
};

const THEME_COLORS = {
  dark:  { ad:'#e879f9', ar:'#fbbf24', xlr:'#67e8f9', xld:'#4ade80', cc:'#a78bfa' },
  light: { ad:'#c026d3', ar:'#d97706', xlr:'#0891b2', xld:'#16a34a', cc:'#7c3aed' }
};
const MODE_TITLES = { ad:'Autosomal dominant', ar:'Autosomal recessive', xlr:'X-linked recessive', xld:'X-linked dominant', cc:'Custom cross' };
let theme = 'dark';
function modeColor(key) { return THEME_COLORS[theme][key] || THEME_COLORS[theme].cc; }
function applyTheme(t) {
  theme = t === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  Object.keys(MODES).forEach(k => { MODES[k].color = modeColor(k); });
  try { localStorage.setItem('heritrix-theme', theme); } catch (e) {}
}
function toggleTheme() {
  applyTheme(theme === 'dark' ? 'light' : 'dark');
  if (currentMode) { updateInfoPanel(currentMode); renderInstant(currentMode); }
}

const PERSON_META = {
  p1_1:{label:'I-1',   name:'Grandfather',   sex:'Male'},
  p1_2:{label:'I-2',   name:'Grandmother',   sex:'Female'},
  p2_1:{label:'II-1',  name:'Son',           sex:'Male'},
  p2_3:{label:'II-2',  name:'Son',           sex:'Male'},
  p2_4:{label:'II-3',  name:'Daughter',      sex:'Female'},
  p2_2:{label:'II-4',  name:'Daughter',      sex:'Female'},
  spouse:{label:'II-5', name:'Spouse',       sex:'Male'},
  p3_1:{label:'III-1', name:'Grandson',      sex:'Male'},
  p3_3:{label:'III-2', name:'Grandson',      sex:'Male'},
  p3_2:{label:'III-3', name:'Granddaughter', sex:'Female'},
  p3_4:{label:'III-4', name:'Granddaughter', sex:'Female'},
};




// ═══════════════════════════════════════════
// GENOTYPE FORMATTING  — superscript display
// ═══════════════════════════════════════════
// Converts plain gt strings → HTML with <sup> for X-linked alleles.
// Rules:
//   XA  → X<sup>A</sup>    (XLD dominant)
//   XA  → X<sup>a</sup>    (XLD/XLR normal)
//   Xa  → X<sup>a</sup>    (XLR recessive — render as lowercase a in sup)
//   AA, Aa, aa → kept as-is (autosomal, already readable)
//   Y   → Y
function formatGT(gt) {
  if (!gt) return '';
  // Replace X followed by allele letter(s) with superscript version
  // Handles: XA, XA, Xa (U+1D43)
  return gt
    .replace(/X([Aa])/g, (_, allele) => `X<sup>${allele}</sup>`);
}
let currentMode=null, lastRealMode='xlr', timers=[], pulseFrames=new Set(), speedMult=1, isPaused=false;

// ═══════════════════════════════════════════
// TIMERS
// ═══════════════════════════════════════════
let pausedQueue=[];
function later(fn,ms){ const id=setTimeout(()=>{ if(!isPaused){fn();}else{pausedQueue.push(fn);} }, Math.round(ms/speedMult)); timers.push(id); return id; }
function clearAllTimers(){
  timers.forEach(clearTimeout); timers=[]; pausedQueue=[]; isPaused=false;
  pulseFrames.forEach(cancelAnimationFrame); pulseFrames=new Set();
  const svg=document.getElementById('pedigree-lines');
  if(svg) svg.querySelectorAll('circle').forEach(c=>c.remove());
}

// ═══════════════════════════════════════════
// SPEED / PAUSE / STEP
// ═══════════════════════════════════════════
const SPEEDS=[0.5,1,1.5,2];
function cycleSpeed(){ speedMult=SPEEDS[(SPEEDS.indexOf(speedMult)+1)%SPEEDS.length]; document.getElementById('speed-val').textContent=speedMult+'×'; }
const ICON_PAUSE='<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>';
const ICON_PLAY='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z"/></svg>';
function setPauseBtn(paused){ const b=document.getElementById('btn-pause'); if(!b)return; b.innerHTML=paused?ICON_PLAY:ICON_PAUSE; b.title=paused?'Resume (P)':'Pause (P)'; }

function togglePause(){
  isPaused=!isPaused;
  setPauseBtn(isPaused);
  if(!isPaused){
    const queue=[...pausedQueue]; pausedQueue=[];
    queue.forEach(fn=>fn());
  }
}





// ═══════════════════════════════════════════
// GEN LABEL GLOW
// ═══════════════════════════════════════════
function glowGenLabel(gen){
  ['i','ii','iii'].forEach(g=>{
    const el=document.getElementById('gen-label-'+g); if(!el)return;
    el.classList.remove('glow'); el.style.removeProperty('--gc');
    el.style.color='';
  });
  const el=document.getElementById('gen-label-'+gen);
  if(el&&currentMode){ el.style.setProperty('--gc',MODES[currentMode].color); el.classList.add('glow'); el.style.color=MODES[currentMode].color; }
}
function resetGenLabels(){
  ['i','ii','iii'].forEach(g=>{ const el=document.getElementById('gen-label-'+g); if(el){el.classList.remove('glow');el.style.removeProperty('--gc');el.style.color='';} });
}

// ═══════════════════════════════════════════
// SVG LINES — coordinate geometry
// ═══════════════════════════════════════════
//
// We measure symbol positions with getBoundingClientRect(), which is the only
// reliable source of truth for a flex layout with justify-content:center,
// padding, and a spouse margin-left.
//
// Timing fix: coordinates are only ever read inside scheduleLayout(), which
// uses setTimeout(0) → rAF. The setTimeout(0) flushes any pending style/layout
// work off the JS task queue; the rAF then fires after the browser's next
// full layout+paint pass. This two-step is reliable on all Android WebViews
// including Samsung Browser and in-app browsers, where a bare rAF or
// document.fonts.ready can still return stale box sizes.

function centerOf(el){
  const ci=document.getElementById('chart-inner');
  const cr=ci.getBoundingClientRect(), r=el.getBoundingClientRect();
  return {x:r.left-cr.left+r.width/2, y:r.top-cr.top+r.height/2};
}

// Single entry-point for all layout reads. Always call this instead of
// calling drawConnections/alignGenLabels directly.
function scheduleLayout(then) {
  // setTimeout(0): yields to the browser so any pending layout is flushed
  setTimeout(() => {
    // rAF: fires after the next full layout+paint pass
    requestAnimationFrame(() => {
      drawConnections();
      alignGenLabels();
      if (then) then();
    });
  }, 0);
}

function createLine(id,x1,y1,x2,y2,color,sw){
  const svg=document.getElementById('pedigree-lines');
  let l=document.getElementById(id);
  if(!l){l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('id',id);svg.appendChild(l);}
  l.setAttribute('x1',x1);l.setAttribute('y1',y1);l.setAttribute('x2',x2);l.setAttribute('y2',y2);
  l.setAttribute('stroke',color||'var(--line-default)');l.setAttribute('stroke-width',sw||2);l.setAttribute('stroke-linecap','round');
  l.style.strokeDasharray='';l.style.strokeDashoffset='';l.style.transition='';
  return l;
}

function lineLen(l){
  const dx=parseFloat(l.getAttribute('x2'))-parseFloat(l.getAttribute('x1'));
  const dy=parseFloat(l.getAttribute('y2'))-parseFloat(l.getAttribute('y1'));
  return Math.sqrt(dx*dx+dy*dy);
}

function animateLine(line,dur){
  const len=lineLen(line), ms=Math.round(dur/speedMult);
  line.style.strokeDasharray=len; line.style.strokeDashoffset=len;
  line.getBoundingClientRect();
  line.style.transition=`stroke-dashoffset ${ms}ms ease`;
  line.style.strokeDashoffset=0;
  spawnPulse(line,ms);
}

function spawnPulse(line,dur){
  const svg=document.getElementById('pedigree-lines');
  const x1=parseFloat(line.getAttribute('x1')),y1=parseFloat(line.getAttribute('y1'));
  const x2=parseFloat(line.getAttribute('x2')),y2=parseFloat(line.getAttribute('y2'));
  const color=line.getAttribute('stroke');
  const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
  c.setAttribute('r',4);c.setAttribute('fill',color);c.setAttribute('cx',x1);c.setAttribute('cy',y1);
  c.style.filter=`drop-shadow(0 0 5px ${color})`;svg.appendChild(c);
  const t0=performance.now();
  let rafId;
  function step(now){
    const t=Math.min((now-t0)/dur,1);
    c.setAttribute('cx',x1+(x2-x1)*t);c.setAttribute('cy',y1+(y2-y1)*t);
    if(t<1){ rafId=requestAnimationFrame(step); pulseFrames.add(rafId); }
    else { c.remove(); pulseFrames.delete(rafId); }
  }
  rafId=requestAnimationFrame(step);
  pulseFrames.add(rafId);
}

function alignGenLabels(){
  const ci = document.getElementById('chart-inner');
  if(!ci) return;
  const cr = ci.getBoundingClientRect();
  const anchors = { i: 'p1_1', ii: 'p2_1', iii: 'p3_1' };
  ['i','ii','iii'].forEach(gen => {
    const lbl = document.getElementById('gen-label-' + gen);
    const sym = document.getElementById(anchors[gen]);
    if(!lbl || !sym) return;
    const sr = sym.getBoundingClientRect();
    lbl.style.top = (sr.top - cr.top + sr.height / 2) + 'px';
  });
}

function drawConnections(){
  const ids=['p1_1','p1_2','p2_1','p2_3','p2_2','p2_4','spouse','p3_1','p3_3','p3_2','p3_4'];
  const E={}, C={};
  ids.forEach(id=>{ E[id]=document.getElementById(id); });
  if(!E.p1_1 || !E.p3_4) return;
  ids.forEach(id=>{ if(E[id]) C[id]=centerOf(E[id]); });
  const d='var(--line-default)', sw=2;

  createLine('line-i-marriage', C.p1_1.x, C.p1_1.y, C.p1_2.x, C.p1_2.y, d, sw);

  const mIx      = (C.p1_1.x + C.p1_2.x) / 2;
  const sibIy    = C.p2_1.y - 28;
  const sibIMidx = (C.p2_1.x + C.p2_2.x) / 2;
  const elbowIy  = C.p1_1.y + (sibIy - C.p1_1.y) / 2;
  createLine('line-i-descent-v',  mIx,      C.p1_1.y, mIx,       elbowIy, d, sw);
  createLine('line-i-descent-h',  mIx,      elbowIy,  sibIMidx,  elbowIy, d, sw);
  createLine('line-i-descent-v2', sibIMidx, elbowIy,  sibIMidx,  sibIy,   d, sw);

  createLine('line-ii-sibship', C.p2_1.x, sibIy, C.p2_2.x, sibIy, d, sw);
  createLine('line-ii-1-drop',  C.p2_1.x, sibIy, C.p2_1.x, C.p2_1.y, d, sw);
  createLine('line-ii-3-drop',  C.p2_3.x, sibIy, C.p2_3.x, C.p2_3.y, d, sw);
  createLine('line-ii-4-drop',  C.p2_4.x, sibIy, C.p2_4.x, C.p2_4.y, d, sw);
  createLine('line-ii-2-drop',  C.p2_2.x, sibIy, C.p2_2.x, C.p2_2.y, d, sw);

  createLine('line-ii-marriage', C.p2_2.x, C.p2_2.y, C.spouse.x, C.spouse.y, d, sw);

  const mIIx      = (C.p2_2.x + C.spouse.x) / 2;
  const sibIIy    = C.p3_1.y - 28;
  const sibIIMidx = mIIx;
  const elbowIIy  = C.p2_2.y + (sibIIy - C.p2_2.y) / 2;
  createLine('line-ii-descent-v',  mIIx,      C.p2_2.y, mIIx,       elbowIIy, d, sw);
  createLine('line-ii-descent-h',  mIIx,      elbowIIy, sibIIMidx,  elbowIIy, d, sw);
  createLine('line-ii-descent-v2', sibIIMidx, elbowIIy, sibIIMidx,  sibIIy,   d, sw);

  createLine('line-iii-sibship', C.p3_1.x, sibIIy, C.p3_4.x, sibIIy, d, sw);
  createLine('line-iii-1-drop', C.p3_1.x, sibIIy, C.p3_1.x, C.p3_1.y, d, sw);
  createLine('line-iii-3-drop', C.p3_3.x, sibIIy, C.p3_3.x, C.p3_3.y, d, sw);
  createLine('line-iii-2-drop', C.p3_2.x, sibIIy, C.p3_2.x, C.p3_2.y, d, sw);
  createLine('line-iii-4-drop', C.p3_4.x, sibIIy, C.p3_4.x, C.p3_4.y, d, sw);

  alignGenLabels();
}

// ═══════════════════════════════════════════
// RESET
// ═══════════════════════════════════════════
function resetAllPersons(){
  ['p1_1','p1_2','p2_1','p2_3','p2_2','p2_4','spouse','p3_1','p3_3','p3_2','p3_4'].forEach(id=>{
    const el=document.getElementById(id); if(!el)return;
    const s=el.querySelector('.sym-shape');
    const g=el.querySelector('.sym-gender-icon');
    if(s){
      s.style.fill   = '';
      s.style.stroke = '';
    }
    if(g){ g.style.stroke = ''; }
    el.classList.remove('affected');el.style.filter='';el.style.color='';
    const cf=document.getElementById(id+'-carrier');if(cf){cf.setAttribute('fill','none');cf.style.fill='none';}
  });
}
function resetLineColors(){
  ['line-i-marriage','line-i-descent-v','line-i-descent-h','line-i-descent-v2',
   'line-ii-sibship','line-ii-1-drop','line-ii-3-drop','line-ii-2-drop','line-ii-4-drop',
   'line-ii-marriage','line-ii-descent-v','line-ii-descent-h','line-ii-descent-v2',
   'line-iii-sibship','line-iii-1-drop','line-iii-3-drop','line-iii-2-drop','line-iii-4-drop']
  .forEach(id=>{const el=document.getElementById(id);if(el){el.setAttribute('stroke','var(--line-default)');el.style.strokeDasharray='';el.style.strokeDashoffset='';el.style.transition='';}});
}
const ALL_IDS=['p1_1','p1_2','p2_1','p2_3','p2_2','p2_4','spouse','p3_1','p3_3','p3_2','p3_4'];
const LINE_IDS=['line-i-marriage','line-i-descent-v','line-i-descent-h','line-i-descent-v2',
  'line-ii-sibship','line-ii-1-drop','line-ii-3-drop','line-ii-2-drop','line-ii-4-drop',
  'line-ii-marriage','line-ii-descent-v','line-ii-descent-h','line-ii-descent-v2',
  'line-iii-sibship','line-iii-1-drop','line-iii-3-drop','line-iii-2-drop','line-iii-4-drop'];
// Draw a mode's final state at once (used by the custom builder and theme changes)
function renderInstant(key){
  const m=MODES[key]; if(!m)return;
  clearAllTimers(); resetAllPersons(); resetLineColors(); resetGenLabels(); setPauseBtn(false);
  const known=ALL_IDS.filter(id=>m.genotypes&&m.genotypes[id]);
  lightUpGen(known,m,m.color);
  const hasGen3=!!(m.genotypes&&m.genotypes.p3_1);
  LINE_IDS.forEach(id=>{
    if(key==='cc' && !m.genotypes.p1_1) return;
    if(!hasGen3 && (id.startsWith('line-ii-marriage')||id.startsWith('line-ii-descent')||id.startsWith('line-iii'))) return;
    const el=document.getElementById(id); if(el) el.setAttribute('stroke',m.color);
  });
}
function replay(){
  if(!currentMode) return setMode(lastRealMode);
  if(currentMode==='cc'){ clearAllTimers(); resetAllPersons(); resetLineColors(); if(MODES.cc&&MODES.cc.genotypes.p1_1) runSimulation('cc'); return; }
  setMode(currentMode);
}

// ═══════════════════════════════════════════
// LIGHT UP
// ═══════════════════════════════════════════
function lightUpPersons(ids,color,type){
  ids.forEach(id=>{
    const el=document.getElementById(id);if(!el)return;
    const s=el.querySelector('.sym-shape');
    const g=el.querySelector('.sym-gender-icon');
    if(type==='affected'){
      if(s){s.style.fill=color;s.style.stroke=color;}
      if(g){g.style.stroke='rgba(255,255,255,0.92)';}
      el.classList.add('affected');el.style.color=color;
    }
    else if(type==='carrier'){
      const cf=document.getElementById(id+'-carrier');
      if(cf){ cf.style.fill=color; cf.style.fillOpacity='0.8'; cf.setAttribute('stroke-width','0'); }
      if(s) s.style.stroke=color;
    }
  });
}
function lightUpGen(personIds,mode,color){
  lightUpPersons(mode.affected.filter(id=>personIds.includes(id)),color,'affected');
  lightUpPersons(mode.carriers.filter(id=>personIds.includes(id)),color,'carrier');
}

// ═══════════════════════════════════════════
// ANIMATE LINE SETS
// ═══════════════════════════════════════════
function animateGenILines(color){
  const li=id=>document.getElementById(id);
  const l=li('line-i-marriage');if(l){l.setAttribute('stroke',color);animateLine(l,480);}
  later(()=>{const l=li('line-i-descent-v');if(l){l.setAttribute('stroke',color);animateLine(l,240);}},480);
  later(()=>{const l=li('line-i-descent-h');if(l){l.setAttribute('stroke',color);animateLine(l,240);}},720);
  later(()=>{const l=li('line-i-descent-v2');if(l){l.setAttribute('stroke',color);animateLine(l,180);}},960);
  later(()=>{const l=li('line-ii-sibship');if(l){l.setAttribute('stroke',color);animateLine(l,360);}},1140);
  later(()=>{ ['line-ii-1-drop','line-ii-3-drop','line-ii-4-drop','line-ii-2-drop'].forEach((lid,i)=>later(()=>{const l=li(lid);if(l){l.setAttribute('stroke',color);animateLine(l,270);}},i*85)); },1500);
}
function animateGenIILines(color){
  const li=id=>document.getElementById(id);
  const l=li('line-ii-marriage');if(l){l.setAttribute('stroke',color);animateLine(l,400);}
  later(()=>{const l=li('line-ii-descent-v');if(l){l.setAttribute('stroke',color);animateLine(l,200);}},400);
  later(()=>{const l=li('line-ii-descent-h');if(l){l.setAttribute('stroke',color);animateLine(l,200);}},600);
  later(()=>{const l=li('line-ii-descent-v2');if(l){l.setAttribute('stroke',color);animateLine(l,160);}},800);
  later(()=>{const l=li('line-iii-sibship');if(l){l.setAttribute('stroke',color);animateLine(l,320);}},960);
  later(()=>{ ['line-iii-1-drop','line-iii-3-drop','line-iii-2-drop','line-iii-4-drop'].forEach((lid,i)=>later(()=>{const l=li(lid);if(l){l.setAttribute('stroke',color);animateLine(l,240);}},i*85)); },1280);
}

// ═══════════════════════════════════════════
// RUN SIMULATION
// ═══════════════════════════════════════════
function runSimulation(modeKey){
  const m=MODES[modeKey],color=m.color;
  const seq=[
    {t:0,   fn:()=>{glowGenLabel('i');lightUpGen(['p1_1','p1_2'],m,color);}},
    {t:380, fn:()=>animateGenILines(color)},
    {t:1900,fn:()=>{glowGenLabel('ii');lightUpGen(['p2_1','p2_3','p2_2','p2_4','spouse'],m,color);}},
    {t:2260,fn:()=>animateGenIILines(color)},
    {t:3600,fn:()=>{glowGenLabel('iii');lightUpGen(['p3_1','p3_3','p3_2','p3_4'],m,color);}},
  ];
  seq.forEach(({t,fn})=>later(fn,t));
}

// ═══════════════════════════════════════════
// INFO PANEL
// ═══════════════════════════════════════════
function updateInfoPanel(modeKey){
  const color = modeKey ? MODES[modeKey].color : modeColor('cc');
  document.documentElement.style.setProperty('--mc', color);
  document.getElementById('chart-title').textContent = modeKey ? MODE_TITLES[modeKey] : MODE_TITLES.cc;
  const custom = modeKey==='cc' || (!modeKey && document.getElementById('tab-cc').classList.contains('active'));
  document.getElementById('side-info').hidden = custom;
  document.getElementById('side-custom').hidden = !custom;
  const m = modeKey ? MODES[modeKey] : null;
  document.getElementById('leg-carrier').style.display = (m && m.carriers.length===0 && modeKey!=='cc') ? 'none' : '';
  if(!m || custom) return;
  document.getElementById('side-title').textContent = MODE_TITLES[modeKey];
  document.getElementById('side-desc').innerHTML = formatGT(m.desc);
  document.getElementById('prob-mating').innerHTML = formatGT(m.probMating);
  const barsEl=document.getElementById('prob-bars'); barsEl.innerHTML='';
  m.probs.forEach(p=>{
    const col=p.type==='affected'?m.color:p.type==='carrier'?m.color+'8c':'var(--text-faint)';
    const row=document.createElement('div'); row.className='prob-row';
    row.innerHTML=`<span class="prob-lbl">${formatGT(p.lbl)}</span><div class="prob-bar-wrap"><div class="prob-bar" data-pct="${p.pct}" style="background:${col}"></div></div><span class="prob-pct">${p.pct}%</span>`;
    barsEl.appendChild(row);
  });
  requestAnimationFrame(()=>{ barsEl.querySelectorAll('.prob-bar').forEach(b=>{ b.style.width=b.dataset.pct+'%'; }); });
}
function setActiveTab(key){
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active', t.id==='tab-'+key));
}

// ═══════════════════════════════════════════
// TOOLTIP
// ═══════════════════════════════════════════
function showTooltip(id,x,y){
  if(!currentMode)return;
  const m=MODES[currentMode]; if(!m)return;
  const gt=m.genotypes[id]; if(!gt)return;
  const tip=document.getElementById('gt-tooltip');
  const isAff=m.affected.includes(id),isCar=m.carriers.includes(id);
  document.getElementById('tt-gt').innerHTML=formatGT(gt.gt);
  document.getElementById('tt-gt').style.color=isAff?m.color:isCar?m.color:'var(--text)';
  document.getElementById('tt-lbl').textContent=gt.status;
  tip.style.left=x+'px'; tip.style.top=y+'px'; tip.classList.add('vis');
}
function hideTooltip(){ document.getElementById('gt-tooltip').classList.remove('vis'); }

function attachTooltips(){
  Object.keys(PERSON_META).forEach(id=>{
    const el=document.getElementById(id); if(!el)return;
    el.addEventListener('mouseenter',e=>showTooltip(id,e.clientX,e.clientY-10));
    el.addEventListener('mousemove',e=>{ const t=document.getElementById('gt-tooltip');t.style.left=e.clientX+'px';t.style.top=(e.clientY-10)+'px'; });
    el.addEventListener('mouseleave',hideTooltip);
  });
}

// ═══════════════════════════════════════════
// INSPECT MODAL
// ═══════════════════════════════════════════
function inspectPerson(id){
  if(!currentMode){
    // CC panel open but no cross applied yet — silently ignore
    return;
  }
  const m=MODES[currentMode];
  if(!m)return;
  const meta=PERSON_META[id], gt=m.genotypes?.[id];
  if(!gt||!meta)return;
  const isAff=m.affected.includes(id),isCar=m.carriers.includes(id),color=m.color;
  const srcEl=document.getElementById(id);
  if(srcEl) document.getElementById('modal-sym').innerHTML=srcEl.innerHTML;
  document.getElementById('modal-bar').style.background=`linear-gradient(90deg,${color},transparent)`;
  document.getElementById('modal-title').textContent=`${meta.label} · ${meta.name}`;
  document.getElementById('modal-title').style.color=isAff?color:'var(--text)';
  const genNum = id.startsWith('p1') ? 'I' : id.startsWith('p3') ? 'III' : 'II'; // p1_x → I, p3_x → III, p2_x + spouse → II
  document.getElementById('modal-sub').textContent=`${meta.sex} · Generation ${genNum}`;
  document.getElementById('modal-gt-box').style.borderColor=color;
  document.getElementById('modal-gt-val').innerHTML=formatGT(gt.gt);
  document.getElementById('modal-gt-val').style.color=color;
  document.getElementById('modal-gt-status').textContent=gt.status;
  document.getElementById('modal-gt-status').style.color=isAff?color:isCar?color:'var(--text-dim)';
  document.getElementById('modal-exp-box').style.borderLeftColor=color;
  document.getElementById('modal-exp-text').innerHTML=formatGT(gt.exp);
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal(){ document.getElementById('modal-overlay').classList.remove('open'); }
function maybeCloseModal(e){ if(e.target===document.getElementById('modal-overlay'))closeModal(); }



// ═══════════════════════════════════════════
// SET MODE
// ═══════════════════════════════════════════
function setMode(modeKey){
  if(!MODES[modeKey])return;
  clearAllTimers();resetAllPersons();resetLineColors();resetGenLabels();
  currentMode=modeKey; if(modeKey!=='cc') lastRealMode=modeKey; isPaused=false;
  setActiveTab(modeKey); setPauseBtn(false);
  updateInfoPanel(modeKey);
  runSimulation(modeKey);
}

// ═══════════════════════════════════════════
// CUSTOM CROSS ENGINE
// ═══════════════════════════════════════════

// Genotype definitions per mode and sex
const CC_GENOTYPES = {
  ad: {
    male:   [{gt:'AA',status:'Affected',alleles:['A','A']}, {gt:'Aa',status:'Affected',alleles:['A','a']}, {gt:'aa',status:'Unaffected',alleles:['a','a']}],
    female: [{gt:'AA',status:'Affected',alleles:['A','A']}, {gt:'Aa',status:'Affected',alleles:['A','a']}, {gt:'aa',status:'Unaffected',alleles:['a','a']}]
  },
  ar: {
    male:   [{gt:'AA',status:'Unaffected',alleles:['A','A']}, {gt:'Aa',status:'Carrier',alleles:['A','a']}, {gt:'aa',status:'Affected',alleles:['a','a']}],
    female: [{gt:'AA',status:'Unaffected',alleles:['A','A']}, {gt:'Aa',status:'Carrier',alleles:['A','a']}, {gt:'aa',status:'Affected',alleles:['a','a']}]
  },
  xlr: {
    male:   [{gt:'XAY',status:'Unaffected',alleles:['XA','Y']}, {gt:'XaY',status:'Affected',alleles:['Xa','Y']}],
    female: [{gt:'XAXA',status:'Unaffected',alleles:['XA','XA']}, {gt:'XAXa',status:'Carrier',alleles:['XA','Xa']}, {gt:'XaXa',status:'Affected',alleles:['Xa','Xa']}]
  },
  xld: {
    male:   [{gt:'XAY',status:'Affected',alleles:['XA','Y']}, {gt:'XaY',status:'Unaffected',alleles:['Xa','Y']}],
    female: [{gt:'XAXA',status:'Affected',alleles:['XA','XA']}, {gt:'XAXa',status:'Affected',alleles:['XA','Xa']}, {gt:'XaXa',status:'Unaffected',alleles:['Xa','Xa']}]
  }
};

// ── CC-2 fix: largest-remainder rounding so percentages always sum to 100 ──
function roundPercentages(results, total) {
  if (!results.length || !total) return results.map(r => ({ ...r, pct: 0 }));
  const floats = results.map(r => ({ ...r, floatPct: r.count / total * 100 }));
  let remaining = 100;
  floats.forEach(r => { r.pct = Math.floor(r.floatPct); remaining -= r.pct; });
  floats
    .map((r, i) => ({ i, frac: r.floatPct - Math.floor(r.floatPct) }))
    .sort((a, b) => b.frac - a.frac)
    .slice(0, Math.max(0, Math.round(remaining)))
    .forEach(({ i }) => floats[i].pct++);
  return floats;
}

// Determine phenotype from a pair of alleles + mode
// CC-4 fix: always call with sorted alleles
function ccPhenotype(a1, a2, mode) {
  if (mode === 'ad') {
    if (a1==='A'||a2==='A') return 'affected';
    return 'unaffected';
  }
  if (mode === 'ar') {
    if (a1==='a'&&a2==='a') return 'affected';
    if (a1==='a'||a2==='a') return 'carrier';
    return 'unaffected';
  }
  // X-linked: determine sex from Y
  const hasMaleY = a1==='Y'||a2==='Y';
  const xAlleles = [a1,a2].filter(a=>a!=='Y');
  if (hasMaleY) {
    if (mode === 'xlr') return xAlleles.includes('Xa') ? 'affected' : 'unaffected';
    if (mode === 'xld') return xAlleles.includes('XA') ? 'affected' : 'unaffected';
  } else {
    if (mode === 'xlr') return (xAlleles[0]==='Xa'&&xAlleles[1]==='Xa') ? 'affected' : xAlleles.includes('Xa') ? 'carrier' : 'unaffected';
    if (mode === 'xld') return xAlleles.includes('XA') ? 'affected' : 'unaffected';
  }
  return 'unaffected';
}

function sortAlleles(a1, a2, mode) {
  if (a2 === 'Y') return [a1, 'Y'];
  if (a1 === 'Y') return [a2, 'Y'];
  if (mode === 'ad' || mode === 'ar') {
    if (a1 === 'a' && a2 === 'A') return ['A', 'a'];
    return [a1, a2];
  }
  if (mode === 'xld') {
    const isDom = a => a === 'XA';
    if (isDom(a2) && !isDom(a1)) return [a2, a1];
    return [a1, a2];
  }
  if (mode === 'xlr') {
    const isNormal = a => a === 'XA';
    if (isNormal(a2) && !isNormal(a1)) return [a2, a1];
    return [a1, a2];
  }
  return [a1, a2];
}

const SLOT_ORDER = { 2: ['p2_1','p2_3','p2_4','p2_2'], 3: ['p3_1','p3_3','p3_2','p3_4'] };
const SLOT_SEX = { p2_1:'male', p2_3:'male', p2_4:'female', p2_2:'female', p3_1:'male', p3_3:'male', p3_2:'female', p3_4:'female' };
const SLOT_ROLE = { p2_1:'Son', p2_3:'Son', p2_4:'Daughter', p2_2:'Daughter', p3_1:'Grandson', p3_3:'Grandson', p3_2:'Granddaughter', p3_4:'Granddaughter' };

let ccState = {
  built: false,
  mode: 'ad',
  fatherGT: null, motherGT: null, spouseGT: null,
  gen1: null, gen3: null,   // cross results { combos, results, total }
  family: {},               // slot id -> chosen result { gt, pheno, count, pct }
  _probsRafId: null
};

const isXL = m => m === 'xlr' || m === 'xld';
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

// Outcomes possible for one child of a given sex, most likely first
function ccPool(results, sex) {
  let pool = results;
  if (isXL(ccState.mode)) pool = results.filter(r => (sex === 'male') === r.gt.includes('Y'));
  return [...pool].sort((a, b) => b.count - a.count);
}
function ccPick(pool, u) {
  const tot = pool.reduce((s, r) => s + r.count, 0);
  const roll = u * tot; let cum = 0;
  for (const r of pool) { cum += r.count; if (roll < cum) return r; }
  return pool[pool.length - 1];
}
function ccChance(id, res) {
  const src = id.startsWith('p2') ? ccState.gen1 : ccState.gen3;
  const pool = ccPool(src.results, SLOT_SEX[id]);
  const tot = pool.reduce((s, r) => s + r.count, 0);
  return tot ? Math.round(res.count / tot * 100) : 0;
}
// Default spread: siblings take quantile positions, so the family shows typical segregation
function ccQuantiles() {
  return isXL(ccState.mode)
    ? { p2_1:.25, p2_3:.75, p2_4:.25, p2_2:.75, p3_1:.25, p3_3:.75, p3_2:.25, p3_4:.75 }
    : { p2_1:.125, p2_3:.375, p2_4:.625, p2_2:.875, p3_1:.125, p3_3:.375, p3_2:.625, p3_4:.875 };
}
function ccAssign(gen, rng) {
  const src = gen === 2 ? ccState.gen1 : ccState.gen3, Q = ccQuantiles();
  SLOT_ORDER[gen].forEach(id => { ccState.family[id] = ccPick(ccPool(src.results, SLOT_SEX[id]), rng ? rng() : Q[id]); });
}
function ccClear(gen) { SLOT_ORDER[gen].forEach(id => delete ccState.family[id]); }

function ccBuildGen3(rng) {
  ccState.gen3 = null; ccClear(3);
  const ii4 = ccState.family.p2_2;
  if (!ccState.gen1 || !ccState.spouseGT || !ii4) return;
  const ii4Entry = findGenotypeEntry(CC_GENOTYPES[ccState.mode].female, ii4.gt);
  if (!ii4Entry) return;
  ccState.gen3 = buildCrossResults([...ccState.spouseGT.alleles], [...ii4Entry.alleles], ccState.mode);
  ccAssign(3, rng);
}
function ccRecompute(rng) {
  const { fatherGT: f, motherGT: m, mode } = ccState;
  ccState.gen1 = null; ccClear(2);
  if (f && m) { ccState.gen1 = buildCrossResults([...f.alleles], [...m.alleles], mode); ccAssign(2, rng); }
  ccBuildGen3(rng);
  renderCCAll();
}

function openCustom() {
  clearAllTimers(); resetAllPersons(); resetLineColors(); resetGenLabels();
  isPaused=false; setPauseBtn(false);
  setActiveTab('cc');
  if (!ccState.built) { ccState.built = true; onCCModeChange(); }
  if (ccState.gen1) { applyCCToChart(); }
  else { currentMode = null; updateInfoPanel(null); }
}

function onCCModeChange() {
  ccState.mode = document.getElementById('cc-mode').value;
  ccState.fatherGT = ccState.motherGT = ccState.spouseGT = null;
  ccState.gen1 = ccState.gen3 = null; ccState.family = {};
  const G = CC_GENOTYPES[ccState.mode];
  renderCCGenotypeButtons('cc-gt-father', G.male, 'father');
  renderCCGenotypeButtons('cc-gt-mother', G.female, 'mother');
  renderCCGenotypeButtons('cc-gt-spouse', G.male, 'spouse');
  renderCCAll();
  currentMode = null; clearAllTimers(); resetAllPersons(); resetLineColors(); updateInfoPanel(null);
}

function renderCCGenotypeButtons(containerId, genotypes, parent) {
  const el = document.getElementById(containerId);
  el.innerHTML = '';
  genotypes.forEach((g, i) => {
    const btn = document.createElement('button');
    btn.className = 'cc-gt-btn';
    btn.innerHTML = `${formatGT(g.gt)}<span>${g.status}</span>`;
    btn.title = g.status;
    btn.onclick = () => selectCCGenotype(parent, i, g, btn);
    el.appendChild(btn);
  });
}

function selectCCGenotype(parent, idx, g, btnEl) {
  document.querySelectorAll(`#cc-gt-${parent} .cc-gt-btn`).forEach(b => b.classList.remove('sel'));
  btnEl.classList.add('sel');
  ccState[parent + 'GT'] = g;
  if (parent === 'spouse') { ccBuildGen3(null); renderCCAll(); }
  else ccRecompute(null);
}

// Tap a child: step to the next genotype this cross allows for that child
function cycleSlot(id) {
  const src = id.startsWith('p2') ? ccState.gen1 : ccState.gen3;
  if (!src || !ccState.family[id]) return;
  const pool = ccPool(src.results, SLOT_SEX[id]);
  if (pool.length < 2) return;
  const i = pool.findIndex(r => r.gt === ccState.family[id].gt);
  ccState.family[id] = pool[(i + 1) % pool.length];
  if (id === 'p2_2') ccBuildGen3(null);
  renderCCAll();
}

function slotSymbol(sex, pheno) {
  const c = 'var(--cc)';
  const fill = pheno === 'affected' ? c : 'var(--sym-fill)';
  const stroke = (pheno === 'affected' || pheno === 'carrier') ? c : 'var(--sym-stroke)';
  if (sex === 'male') {
    return `<svg viewBox="0 0 46 46" class="cc-slot-sym"><rect x="3" y="3" width="40" height="40" rx="4" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>`
      + (pheno === 'carrier' ? `<rect x="23" y="4.25" width="18.75" height="37.5" fill="${c}" opacity=".8"/>` : '') + `</svg>`;
  }
  return `<svg viewBox="0 0 46 46" class="cc-slot-sym"><circle cx="23" cy="23" r="19" fill="${fill}" stroke="${stroke}" stroke-width="2.5"/>`
    + (pheno === 'carrier' ? `<path d="M23,5.25 A17.75,17.75 0 0,1 23,40.75 Z" fill="${c}" opacity=".8"/>` : '') + `</svg>`;
}

function renderCCSlots(gen) {
  const el = document.getElementById('cc-slots-' + gen);
  const src = gen === 2 ? ccState.gen1 : ccState.gen3;
  el.innerHTML = '';
  SLOT_ORDER[gen].forEach(id => {
    const r = ccState.family[id], sex = SLOT_SEX[id];
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'cc-slot' + (r ? ' ' + phenoClass(r.pheno) : ' empty') + (id === 'p2_2' ? ' married' : '');
    const multi = r && src && ccPool(src.results, sex).length > 1;
    b.innerHTML = slotSymbol(sex, r && r.pheno)
      + `<span class="cc-slot-id">${PERSON_META[id].label}</span>`
      + (r ? `<span class="cc-slot-gt">${formatGT(r.gt)}</span><span class="cc-slot-st">${ccChance(id, r)}% chance</span>`
           : `<span class="cc-slot-gt">?</span><span class="cc-slot-st">${SLOT_ROLE[id]}</span>`);
    if (r) {
      b.title = `${cap(r.pheno)}. ` + (multi ? 'Tap for another possible genotype' : 'Only one genotype is possible');
      b.setAttribute('aria-label', `${PERSON_META[id].label} ${r.gt.replace(/X([Aa])/g,'X$1 ')}, ${r.pheno}`);
      b.onclick = () => cycleSlot(id);
      if (!multi) b.classList.add('fixed');
    } else b.disabled = true;
    el.appendChild(b);
  });
}

function renderCCAll() {
  renderCCSlots(2); renderCCSlots(3);
  const g1 = ccState.gen1, g3 = ccState.gen3;
  const msg = t => `<div class="cc-empty">${t}</div>`;
  if (g1) { renderPunnett([...ccState.fatherGT.alleles], [...ccState.motherGT.alleles], g1.combos, 'cc-punnett'); renderCCProbs(g1.results, 'cc-probs'); }
  else { document.getElementById('cc-punnett').innerHTML = msg('Pick a genotype for the father and the mother.'); document.getElementById('cc-probs').innerHTML = ''; }
  if (g3) {
    const ii4 = findGenotypeEntry(CC_GENOTYPES[ccState.mode].female, ccState.family.p2_2.gt);
    renderPunnett([...ccState.spouseGT.alleles], [...ii4.alleles], g3.combos, 'cc-punnett3');
    renderCCProbs(g3.results, 'cc-probs-gen3');
  } else {
    document.getElementById('cc-punnett3').innerHTML = msg(g1 ? 'Pick a genotype for the spouse of II-4.' : 'Appears after Gen II is filled.');
    document.getElementById('cc-probs-gen3').innerHTML = '';
  }
  document.getElementById('cc-reroll-btn').disabled = !g1;
  document.getElementById('cc-hint').textContent = !g1 ? 'Pick both parents to fill Gen II.'
    : !g3 ? 'Pick the spouse of II-4 to fill Gen III.'
    : 'Typical spread shown. Tap a child to change it.';
  if (g1 && document.getElementById('tab-cc').classList.contains('active')) applyCCToChart();
}

function phenoClass(pheno) {
  if (pheno === 'affected') return 'affected';
  if (pheno === 'carrier')  return 'carrier';
  return 'unaffected';
}


function buildCrossResults(faAlleles, maAlleles, mode) {
  const combos = [];
  faAlleles.forEach(f => {
    maAlleles.forEach(m => {
      // CC-4 fix: sort first, then phenotype on sorted alleles
      const sorted = sortAlleles(f, m, mode);
      const pheno  = ccPhenotype(sorted[0], sorted[1], mode);
      combos.push({ gt: sorted.join(''), a1: f, a2: m, pheno });
    });
  });
  const tally = {};
  combos.forEach(c => {
    tally[c.gt] = tally[c.gt] || { gt: c.gt, pheno: c.pheno, count: 0 };
    tally[c.gt].count++;
  });
  const total = combos.length;
  // CC-2 fix: use largest-remainder rounding
  const rawResults = Object.values(tally);
  return { combos, results: roundPercentages(rawResults, total), total };
}

function findGenotypeEntry(pool, gt) {
  if (!gt) return null;
  // 1. Exact gt string match
  const exact = pool.find(g => g.gt === gt);
  if (exact) return exact;
  // 2. Alleles joined in given order
  const byJoin = pool.find(g => g.alleles.join('') === gt);
  if (byJoin) return byJoin;
  // 3. Sort by allele array (not by character) to handle reversed order
  //    e.g. "XaXA" should match entry with alleles ["XA","Xa"]
  const bySortedAlleles = pool.find(g => {
    const sortedEntry = [...g.alleles].sort().join('');
    // Reconstruct candidate alleles from gt using entry's allele length as unit size
    const unitLen = g.alleles[0] ? g.alleles[0].length : 1;
    const gtParts = [];
    for (let i = 0; i + unitLen <= gt.length; i += unitLen) gtParts.push(gt.slice(i, i + unitLen));
    return sortedEntry === [...gtParts].sort().join('');
  });
  return bySortedAlleles || null;
}

function renderPunnett(fa, ma, combos, elId) {
  const el = document.getElementById(elId || 'cc-punnett');
  el.innerHTML = '';
  const table = document.createElement('table');
  table.className = 'cc-punnett';

  const thead = table.createTHead();
  const headerRow = thead.insertRow();
  const corner = document.createElement('th');
  corner.className = 'cc-punnett-cell header';
  corner.textContent = '♂↓ / ♀→';
  corner.setAttribute('scope', 'col'); // CC-9 fix
  headerRow.appendChild(corner);
  ma.forEach(m => {
    const th = document.createElement('th');
    th.className = 'cc-punnett-cell header';
    th.innerHTML = `♀ ${formatGT(m)}`;
    th.setAttribute('scope', 'col');
    headerRow.appendChild(th);
  });

  const tbody = table.createTBody();
  fa.forEach((f, fi) => {
    const row = tbody.insertRow();
    const rowHeader = document.createElement('th');
    rowHeader.className = 'cc-punnett-cell header';
    rowHeader.innerHTML = `♂ ${formatGT(f)}`;
    rowHeader.setAttribute('scope', 'row');
    row.appendChild(rowHeader);
    for (let mi = 0; mi < ma.length; mi++) {
      const idx = fi * ma.length + mi;
      const c = combos[idx];
      const td = row.insertCell();
      td.className = 'cc-punnett-cell ' + phenoClass(c.pheno);
      td.innerHTML = formatGT(c.gt);
      td.title = c.pheno;
    }
  });
  el.appendChild(table);
}

function renderCCProbs(results, containerId) {
  const el = document.getElementById(containerId);
  el.innerHTML = '';
  results.forEach(r => {
    const row = document.createElement('div');
    row.className = 'cc-prob-row';
    const barClass = r.pheno === 'affected' ? 'cc-prob-bar' : r.pheno === 'carrier' ? 'cc-prob-bar carrier-bar' : 'cc-prob-bar unaffected-bar';
    row.innerHTML = `<span class="cc-prob-lbl">${formatGT(r.gt)} <span class="cc-pheno">(${r.pheno})</span></span><div class="cc-prob-bar-wrap"><div class="${barClass}" data-pct="${r.pct}" style="width:0%"></div></div><span class="cc-prob-pct">${r.pct}%</span>`;
    el.appendChild(row);
  });
  // CC-8 fix: store rAF id so it can be cancelled on re-render
  ccState._probsRafId = requestAnimationFrame(() => {
    ccState._probsRafId = null;
    el.querySelectorAll('[data-pct]').forEach(b => {
      b.style.transition = 'width .6s ease';
      b.style.width = b.dataset.pct + '%';
    });
  });
}

function mulberry32(seed) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function applyCCToChart() {
  const { gen1, gen3, family, fatherGT: fGT, motherGT: mGT, spouseGT: sGT, mode } = ccState;
  if (!gen1) return;
  const color = modeColor('cc');
  const affected = [], carriers = [], genotypes = {};
  const mark = (id, pheno) => { if (pheno === 'affected') affected.push(id); if (pheno === 'carrier') carriers.push(id); };

  genotypes.p1_1 = { gt: fGT.gt, status: fGT.status, exp: `Father I-1, genotype ${fGT.gt}, chosen in the Custom cross panel.` };
  genotypes.p1_2 = { gt: mGT.gt, status: mGT.status, exp: `Mother I-2, genotype ${mGT.gt}, chosen in the Custom cross panel.` };
  mark('p1_1', fGT.status.toLowerCase()); mark('p1_2', mGT.status.toLowerCase());
  if (sGT) { genotypes.spouse = { gt: sGT.gt, status: sGT.status, exp: `Spouse II-5 married into the family; genotype ${sGT.gt}, chosen in the Custom cross panel.` }; mark('spouse', sGT.status.toLowerCase()); }

  const ii4 = family.p2_2.gt;
  [...SLOT_ORDER[2], ...(gen3 ? SLOT_ORDER[3] : [])].forEach(id => {
    const r = family[id], g2 = id.startsWith('p2');
    const who = `${SLOT_ROLE[id]} ${PERSON_META[id].label}`;
    const cross = g2 ? `father I-1 (${fGT.gt}) × mother I-2 (${mGT.gt})` : `mother II-4 (${ii4}) × father II-5 (${sGT.gt})`;
    const scope = isXL(mode) ? (SLOT_SEX[id] === 'male' ? 'sons' : 'daughters') : 'children';
    genotypes[id] = { gt: r.gt, status: cap(r.pheno),
      exp: `${who} received one allele from each parent: ${cross} gives ${r.gt} (${r.pheno}). This outcome is expected in ${ccChance(id, r)}% of ${scope} from this cross.` };
    mark(id, r.pheno);
  });

  MODES['cc'] = {
    color, icon: '✦', name: 'Custom\nCross', desc: '', affected, carriers, genotypes,
    probMating: gen3 ? `II-4 ${ii4} × Spouse ${sGT.gt} → Gen III` : '',
    probs: gen3 ? gen3.results.map(r => ({ lbl: `${r.gt} (${r.pheno})`, pct: r.pct, type: r.pheno })) : []
  };
  currentMode = 'cc';
  updateInfoPanel('cc');
  renderInstant('cc');
}

// Random family: keep the parents and spouse, re-draw every child, then apply
function rerollCCChart() {
  if (!ccState.gen1) return;
  ccRecompute(mulberry32((Date.now() ^ (Math.random() * 1e9)) & 0x7FFFFFFF));
}


// ═══════════════════════════════════════════
// INITIALIZE
// ═══════════════════════════════════════════
function initialize(){
  let saved=null; try { saved=localStorage.getItem('heritrix-theme'); } catch(e) {}
  applyTheme(saved || (window.matchMedia && matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  // scheduleLayout (setTimeout → rAF) guarantees coordinates are read after a
  // full browser layout+paint pass — reliable on all Android WebViews.
  scheduleLayout();

  const chartInner = document.getElementById('chart-inner');
  if (chartInner && typeof ResizeObserver !== 'undefined') {
    let roDebounce, roLastW = null;
    const ro = new ResizeObserver(entries => {
      // Ignore the initial notification and height-only changes, which would
      // otherwise cancel the opening demo before it starts.
      const w = Math.round(entries[0].contentRect.width);
      if (roLastW === null || w === roLastW) { roLastW = w; return; }
      roLastW = w;
      clearTimeout(roDebounce);
      roDebounce = setTimeout(() => {
        clearAllTimers();
        resetAllPersons(); resetLineColors();
        setPauseBtn(false);
        scheduleLayout(() => {
          if (currentMode) {
            const tid = setTimeout(() => { if (currentMode === 'cc') renderInstant('cc'); else runSimulation(currentMode); }, 100);
            timers.push(tid);
          }
        });
      }, 120);
    });
    ro.observe(chartInner);
  } else {
    let rt;
    window.addEventListener('resize', () => {
      clearTimeout(rt); rt = setTimeout(() => {
        clearAllTimers();
        resetAllPersons(); resetLineColors();
        setPauseBtn(false);
        scheduleLayout(() => {
          if (currentMode) {
            const tid = setTimeout(() => { if (currentMode === 'cc') renderInstant('cc'); else runSimulation(currentMode); }, 100);
            timers.push(tid);
          }
        });
      }, 150);
    });
  }

  Object.keys(PERSON_META).forEach(id=>{
    const sym=document.getElementById(id); if(!sym)return;
    const nm=sym.parentElement.querySelector('.person-name'); if(!nm||nm.querySelector('.pid'))return;
    nm.innerHTML=`<span class="pid">${PERSON_META[id].label}</span><span class="pname">${nm.textContent}</span>`;
  });
  attachTooltips();
  onCCModeChange();
  document.addEventListener('keydown',e=>{
    if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA'||e.target.tagName==='SELECT')return;
    switch(e.key){
      case '1':setMode('ad');break;case '2':setMode('ar');break;
      case '3':setMode('xlr');break;case '4':setMode('xld');break;
      case 'c':case 'C':openCustom();break;
      case 'r':case 'R':replay();break;
      case 't':case 'T':toggleTheme();break;
      case 'p':case 'P':togglePause();break;
      case 'Escape':closeModal();break;
    }
  });
  setPauseBtn(false);
  later(()=>setMode('xlr'),400);
}
window.addEventListener('DOMContentLoaded',initialize);
