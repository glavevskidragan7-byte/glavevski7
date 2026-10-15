// ===== Crteži vežbi (jednostavne figure) =====
// h=glava, l=linija tela, g=zelena strelica/pomeranje, r=pravougaonik (bučica/džak), f=pod
const PICS = {
  zgib: 'l10 6 90 6|h50 22|l42 6 50 30 58 6|l50 27 50 50|l50 50 46 66|l50 50 54 66|g72 50 72 24|g68 30 72 24 76 30',
  sklek: 'f|h18 37|l30 58 30 41|l23 40 82 54|l82 54 86 60|g12 52 12 30|g9 35 12 30 15 35',
  pike: 'f|h31 47|l28 60 33 52 55 22|l55 22 80 60|g20 40 26 50',
  lateral: 'f|h50 12|l50 17 50 42|l26 22 50 22 74 22|r20 18 8 8|r72 18 8 8|l50 42 44 62|l50 42 56 62|g18 40 18 26|g82 40 82 26',
  biceps: 'f|h50 12|l50 17 50 42|l56 21 58 36 62 24|l44 21 42 36 38 24|r58 18 8 8|r34 18 8 8|l50 42 44 62|l50 42 56 62',
  triceps: 'f|h50 14|l50 19 50 42|l46 21 44 6 54 12|l54 21 56 6|r50 6 8 8|l50 42 44 62|l50 42 56 62|g70 30 70 8',
  plank: 'f|h16 39|l20 41 82 50|l26 43 26 58 36 58|l82 50 86 58|g40 30 70 34',
  sideplank: 'f|h20 26|l24 30 80 56|l26 32 26 58|l30 32 30 8|g50 20 50 30',
  dzak: 'f|l80 2 80 10|r72 10 16 40|h30 18|l30 23 32 44|l30 27 50 26 70 26|l30 28 22 36 30 40|l32 44 24 62|l32 44 42 62|g56 20 64 20',
  cucanj: 'f|h42 22|l42 27 54 42|l54 42 38 46 40 62|l44 30 26 32|g80 26 80 50|g76 44 80 50 84 44',
  skok: 'f|h50 8|l50 13 50 34|l40 2 50 18 60 2|l50 34 44 46|l50 34 56 46|g34 54 34 40|g30 45 34 40 38 45|g66 54 66 40|g62 45 66 40 70 45',
  prsti: 'f|h50 10|l50 15 50 40|l50 18 42 34|l50 18 58 34|l50 40 47 56 49 60|l50 40 53 56 55 60|g72 50 72 24|g68 30 72 24 76 30',
  noge: 'f|h16 54|l21 56 56 58|l56 58 62 18|l28 57 40 58|g78 50 78 24|g74 30 78 24 82 30',
  burpi: 'f|h20 40|l28 60 28 44|l24 42 56 50|l56 50 64 60|h80 12|l80 17 80 38|l72 6 80 22 88 6|g60 34 68 22',
  penjac: 'f|h18 37|l30 58 30 41|l23 40 82 54|l82 54 86 60|l60 49 48 52 46 60|g54 40 42 40',
  setnja: 'f|h50 10|l50 15 50 38|l50 20 42 34|l50 20 58 32|l50 38 42 60|l50 38 58 60|g70 30 86 30|g82 26 86 30 82 34',
  mobilnost: 'f|h50 16|l50 21 50 42|l50 24 32 14|l50 24 68 34|l50 42 44 62|l50 42 56 62|g28 30 24 16 32 4 44 2',
  istezanje: 'f|h68 40|l42 30 66 44|l42 30 44 62|l42 30 52 60|l60 40 50 60|g80 26 72 34',
  odmor: 'f|r14 44 72 10|h24 38|l28 40 80 40|g70 12 80 12 70 24 80 24'
};
function pic(key) {
  const p = (PICS[key] || '').split('|').map(s => {
    const k = s[0], n = s.slice(1).trim();
    if (k === 'f') return '<line x1="4" y1="64" x2="96" y2="64" stroke="#334155" stroke-width="2"/>';
    if (k === 'h') { const [x, y] = n.split(' '); return `<circle cx="${x}" cy="${y}" r="5" fill="#f1f5f9"/>`; }
    if (k === 'r') { const [x, y, w, h] = n.split(' '); return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#64748b"/>`; }
    const pts = n.match(/-?\d+ -?\d+/g).join(' ');
    return `<polyline points="${pts}" fill="none" stroke="${k === 'g' ? '#a3e635' : '#f1f5f9'}" stroke-width="${k === 'g' ? 2 : 3}" stroke-linecap="round" stroke-linejoin="round"${k === 'g' ? ' stroke-dasharray="3 3"' : ''}/>`;
  }).join('');
  return `<svg viewBox="0 0 100 70" aria-hidden="true">${p}</svg>`;
}

// ===== Plan treninga =====
const RIR = ' Izaberi izazovnu varijantu i završi većinu serija sa 1–3 dobra ponavljanja u rezervi.';
const E = {
  zgib: { n: 'Zgibovi', p: 'zgib', t: 'Hvat malo širi od ramena, povuci grudi ka šipki, spuštaj se kontrolisano do pune ekstenzije ruku.' + RIR },
  sklek: { n: 'Sklekovi', p: 'sklek', t: 'Telo u pravoj liniji, laktovi oko 45° od tela, grudi skoro do poda.' + RIR },
  spori: { n: 'Spori sklekovi', p: 'sklek', t: 'Spuštaj se 3 sekunde, kratka pauza dole, pa kontrolisano gore. Telo pravo.' + RIR },
  pike: { n: 'Pike sklekovi', p: 'pike', t: 'Kukovi visoko (obrnuto slovo V), spuštaj glavu ka podu ispred šaka, pa se odgurni nazad. Opterećuje ramena.' },
  lateral: { n: 'Lateralno podizanje bučica', p: 'lateral', t: 'Blago savijeni laktovi, podiži bučice u stranu do visine ramena, bez zamaha. Spuštaj polako.' },
  biceps: { n: 'Pregib za biceps sa bučicama', p: 'biceps', t: 'Laktovi uz telo, podiži bučice bez ljuljanja trupa, spuštaj polako do kraja.' },
  triceps: { n: 'Triceps ekstenzija iznad glave', p: 'triceps', t: 'Bučica iznad glave, laktovi usmereni gore i blizu glave. Spusti bučicu iza glave pa ispruži ruke.' },
  plank: { n: 'Plank', p: 'plank', t: 'Oslonac na podlaktice, telo u pravoj liniji, stegni stomak i zadnjicu, kukovi ne padaju.' },
  cucanj: { n: 'Čučnjevi bez opterećenja', p: 'cucanj', t: 'Stopala u širini ramena, kukovi idu unazad, kolena prate prste, pete ostaju na podu, leđa prava.' },
  skok: { n: 'Skokovi iz čučnja', p: 'skok', t: 'Eksplozivno gore, ali kontrolisano. Doskoči meko na prednji deo stopala sa savijenim kolenima. Ne idi do otkaza – prekini seriju čim skokovi izgube brzinu ili kvalitet.' },
  prsti: { n: 'Podizanje na prste stojeći', p: 'prsti', t: 'Podigni se na prste što više, zadrži 1 sekundu gore, spusti se polako.' },
  noge: { n: 'Podizanje nogu iz ležanja', p: 'noge', t: 'Donji deo leđa pritisnut uz pod, podigni ispružene noge do 90°, spuštaj polako bez dodirivanja poda.' },
  side: { n: 'Bočni plank', p: 'sideplank', t: 'Lakat ispod ramena, telo u pravoj liniji, kukovi gore. Uradi serije na obe strane.', per: 'po strani' },
  burpi: { n: 'Burpiji', p: 'burpi', t: 'Čučni, ruke na pod, izbaci noge u položaj skleka, vrati noge i skoči gore. Doskoči meko.' },
  penjac: { n: 'Penjači (mountain climbers)', p: 'penjac', t: 'Položaj skleka, naizmenično i brzo privlači kolena ka grudima, kukovi nisko, ramena iznad šaka.' },
  dzak: { n: 'Boks džak', p: 'dzak', t: 'Gard gore, brada dole, kreći se oko džaka. Kombinuj direkte, krošee i aperkate, diši pri svakom udarcu.' },
  setnja: { n: 'Lagana šetnja', p: 'setnja', t: 'Opušten tempo, 20–40 minuta po želji.', opt: 1 },
  mob: { n: 'Mobilnost ramena i kukova (5–10 min)', p: 'mobilnost', t: 'Kruženje ramenima i rukama, kruženje kukovima, lagani iskoraci – sve bez bola.' },
  istez: { n: 'Lagano istezanje', p: 'istezanje', t: 'Istezanje nogu, leđa, grudi i ramena, 20–30 sekundi po poziciji, bez forsiranja.' },
  odmor: { n: 'Potpuni odmor', p: 'odmor', t: 'Bez treninga. Spavaj, jedi kvalitetno i pij dovoljno vode – mišići rastu na odmoru.' },
  lmob: { n: 'Lagana mobilnost', p: 'mobilnost', t: 'Ako želiš: nekoliko minuta laganog kretanja i istezanja.', opt: 1 }
};
const x = (id, s, extra) => Object.assign({ id, s }, E[id], extra);
// Ključ = dan u nedelji (0 = nedelja ... 6 = subota)
const PLAN = {
  1: { title: 'Gornji deo A + boks', ex: [x('zgib', 4), x('sklek', 4), x('lateral', 3), x('biceps', 3), x('triceps', 3), x('plank', 3), x('dzak', 1, { min: 10 })] },
  2: { title: 'Noge i eksplozivnost', ex: [x('cucanj', 4), x('skok', 3), x('prsti', 4), x('noge', 3), x('side', 2)] },
  3: { title: 'Kondicija i boks', ex: [x('dzak', 1, { min: 15 }), x('burpi', 3), x('penjac', 3)] },
  4: { title: 'Oporavak', rest: 1, note: 'Dan oporavka – sve aktivnosti su opcione, ovo nije težak trening. Ne računa se kao propušten trening.', ex: [x('setnja', 1), x('mob', 1), x('istez', 1)] },
  5: { title: 'Gornji deo B', ex: [x('zgib', 4), x('spori', 3), x('pike', 3), x('lateral', 3), x('biceps', 3), x('triceps', 2), x('plank', 1)] },
  6: { title: 'Celo telo + boks', ex: [x('sklek', 3), x('zgib', 3), x('cucanj', 3), x('burpi', 3), x('skok', 3), x('noge', 3), x('dzak', 1, { min: 15 })] },
  0: { title: 'Odmor', rest: 1, note: 'Dan odmora 😴 – ovo nije propušten trening. Odmori se.', ex: [x('odmor', 1), x('lmob', 1)] }
};
const DANI = ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota'];
const MESECI = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];

// ===== Datumi =====
const pad = n => String(n).padStart(2, '0');
const key = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parse = k => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
const addDays = (k, n) => { const d = parse(k); return key(new Date(d.getFullYear(), d.getMonth(), d.getDate() + n)); };
const todayKey = () => key(new Date());
const nice = k => { const d = parse(k); return `${DANI[d.getDay()]}, ${d.getDate()}. ${MESECI[d.getMonth()]}`; };
const planOf = k => PLAN[parse(k).getDay()];

// ===== Stanje (localStorage) =====
const LS = 'mighty-month1';
let S;
try { S = JSON.parse(localStorage.getItem(LS)); } catch (e) { S = null; }
if (!S || !S.start) S = { start: todayKey(), d: {} };
const save = () => { try { localStorage.setItem(LS, JSON.stringify(S)); } catch (e) {} };
save();

const days = () => Array.from({ length: 30 }, (_, i) => addDays(S.start, i));
const inRange = k => k >= S.start && k <= addDays(S.start, 29);
const setsOf = (k, i) => {
  const ex = planOf(k).ex[i];
  const a = (S.d[k] && S.d[k][i]) || [];
  return Array.from({ length: ex.s }, (_, j) => !!a[j]);
};
const exDone = (k, i) => setsOf(k, i).every(Boolean);
const dayDone = k => planOf(k).ex.every((_, i) => exDone(k, i));
const dayAny = k => planOf(k).ex.some((_, i) => setsOf(k, i).some(Boolean));
function setSets(k, i, arr) { (S.d[k] = S.d[k] || {})[i] = arr; save(); render(); }

let sel = inRange(todayKey()) ? todayKey() : S.start;

// ===== Tajmer za džak =====
const T = { total: 0, left: 0, end: 0, run: false, k: null, i: null, iv: null };
const fmt = s => `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
function timerFor(k, i, min) {
  if (T.k !== k || T.i !== i) { if (T.run) return; Object.assign(T, { k, i, total: min * 60, left: min * 60 }); }
}
function tick() {
  if (!T.run) return;
  T.left = Math.max(0, Math.round((T.end - Date.now()) / 1000));
  if (T.left === 0) {
    T.run = false; clearInterval(T.iv);
    if (navigator.vibrate) navigator.vibrate([400, 200, 400, 200, 400]);
    beep();
    setSets(T.k, T.i, [true]);
    return;
  }
  const el = document.getElementById('tVal'); if (el) el.textContent = fmt(T.left);
}
function beep() {
  try { const c = new (window.AudioContext || window.webkitAudioContext)(), o = c.createOscillator(); o.connect(c.destination); o.frequency.value = 880; o.start(); o.stop(c.currentTime + 1); } catch (e) {}
}
function tStart() { if (T.run || T.left === 0) return; T.run = true; T.end = Date.now() + T.left * 1000; T.iv = setInterval(tick, 250); render(); }
function tPause() { if (!T.run) return; tick(); T.run = false; clearInterval(T.iv); render(); }
function tReset() { T.run = false; clearInterval(T.iv); T.left = T.total; render(); }

// ===== Statistika =====
function stats() {
  let exTot = 0, exOk = 0, dOk = 0;
  const all = days();
  all.forEach(k => {
    const p = planOf(k); if (p.rest) return;
    p.ex.forEach((_, i) => { exTot++; if (exDone(k, i)) exOk++; });
    if (dayDone(k)) dOk++;
  });
  // Niz: uzastopni završeni trening-dani unazad od danas; dani odmora se preskaču,
  // a današnji nezavršeni trening ne prekida niz.
  let streak = 0, k = todayKey() > all[29] ? all[29] : todayKey();
  if (!planOf(k).rest && !dayDone(k)) k = addDays(k, -1);
  while (k >= S.start) {
    if (!planOf(k).rest) { if (dayDone(k)) streak++; else break; }
    k = addDays(k, -1);
  }
  return { exOk, exTot, dOk, streak, pct: exTot ? Math.round(exOk / exTot * 100) : 0 };
}

// ===== Prikaz =====
const $ = id => document.getElementById(id);
function render() {
  const tk = todayKey(), tp = planOf(tk);
  let h = `<div class="muted">Danas · ${nice(tk)}</div>`;
  if (tk < S.start) h += `<h2>Izazov počinje ${nice(S.start)}</h2><p class="muted">Do tada se pripremi – plan je spreman.</p>`;
  else if (tk > addDays(S.start, 29)) h += `<h2>Izazov je završen 🏆</h2><p class="muted">Bravo! Izaberi novi datum početka u podešavanjima za novi krug.</p>`;
  else {
    h += `<h2>${tp.title}${dayDone(tk) ? ' ✅' : ''}</h2>`;
    h += tp.rest ? `<div class="note">${tp.note}</div>` : `<div class="muted">${tp.ex.length} vežbi · Dan ${days().indexOf(tk) + 1} od 30</div>`;
    h += `<button class="btn big" id="go">${tp.rest ? 'Pogledaj današnji plan' : 'Započni trening'}</button>`;
  }
  $('today').innerHTML = h;
  const go = $('go'); if (go) go.onclick = () => { sel = tk; render(); $('daySec').scrollIntoView({ behavior: 'smooth' }); };

  const st = stats();
  $('pct').textContent = st.pct + '%'; $('barFill').style.width = st.pct + '%';
  $('stEx').textContent = `${st.exOk}/${st.exTot}`; $('stDays').textContent = `${st.dOk}/${days().filter(k => !planOf(k).rest).length}`; $('stStreak').textContent = st.streak;

  // Izabrani dan
  const p = planOf(sel), idx = days().indexOf(sel);
  $('dayDate').textContent = `Dan ${idx + 1} · ${nice(sel)}`;
  $('dayTitle').textContent = p.title + (dayDone(sel) ? ' ✅' : '');
  $('dayNote').innerHTML = p.rest ? `<div class="note">${p.note}</div>` : '';
  $('prevDay').disabled = idx <= 0; $('nextDay').disabled = idx >= 29;
  $('exList').innerHTML = p.ex.map((e, i) => {
    const s = setsOf(sel, i), ok = s.every(Boolean);
    let sub = e.min ? `${e.min} minuta` : (e.s > 1 ? `${e.s} serije${e.per ? ' ' + e.per : ''}` : (e.per ? '1 serija ' + e.per : '1 serija'));
    if (p.rest) sub = 'opciono';
    let body = `<div class="exHead"><div class="nm">${i + 1}. ${e.n}<small>${sub}</small></div><button class="chk ${ok ? 'on' : ''}" data-ex="${i}" aria-label="Označi vežbu">${ok ? '✓' : ''}</button></div>${pic(e.p)}<p class="tip">${e.t}</p>`;
    if (e.s > 1) body += `<div class="sets">${s.map((v, j) => `<button class="set ${v ? 'on' : ''}" data-ex="${i}" data-set="${j}">Serija ${j + 1}</button>`).join('')}</div>`;
    if (e.min) {
      timerFor(sel, i, e.min);
      const mine = T.k === sel && T.i === i;
      body += mine
        ? `<div class="timer"><div class="t" id="tVal">${fmt(T.left)}</div><div class="row"><button class="btn" data-t="start">${T.left < T.total && !T.run ? 'Nastavi' : 'Start'}</button><button class="btn ghost" data-t="pause">Pauza</button><button class="btn ghost" data-t="reset">Reset</button></div></div>`
        : `<div class="timer muted">Tajmer je zauzet drugim danom – resetuj ga tamo.</div>`;
    }
    return `<div class="ex ${ok ? 'ok' : ''}">${body}</div>`;
  }).join('');
  $('markDay').textContent = p.rest ? 'Označi sve kao urađeno' : 'Označi dan završenim';

  // Kalendar
  const all = days();
  let c = '';
  let lastMonth = -1;
  all.forEach((k, i) => {
    const d = parse(k);
    if (d.getMonth() !== lastMonth) {
      lastMonth = d.getMonth();
      c += `<div class="mon">${MESECI[lastMonth]} ${d.getFullYear()}</div>` + ['Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub', 'Ned'].map(w => `<div class="wd">${w}</div>`).join('');
      c += '<div></div>'.repeat((d.getDay() + 6) % 7);
    }
    const pl = planOf(k);
    const cls = ['d', pl.rest ? 'rest' : '', dayDone(k) && !pl.rest ? 'done' : (dayAny(k) ? 'part' : ''), k === tk ? 'today' : '', k === sel ? 'sel' : ''].join(' ');
    c += `<button class="${cls}" data-day="${k}">${d.getDate()}<small>${pl.rest ? 'odmor' : 'D' + (i + 1)}</small></button>`;
  });
  $('cal').innerHTML = c;
  $('startDate').value = S.start;
}

// ===== Događaji =====
document.addEventListener('click', ev => {
  const b = ev.target.closest('button'); if (!b) return;
  if (b.dataset.day) { sel = b.dataset.day; render(); $('daySec').scrollIntoView({ behavior: 'smooth' }); return; }
  if (b.dataset.t) { ({ start: tStart, pause: tPause, reset: tReset })[b.dataset.t](); return; }
  if (b.dataset.ex !== undefined) {
    const i = +b.dataset.ex, s = setsOf(sel, i);
    if (b.dataset.set !== undefined) { s[+b.dataset.set] = !s[+b.dataset.set]; setSets(sel, i, s); }
    else { const all = s.every(Boolean); setSets(sel, i, s.map(() => !all)); }
  }
});
$('prevDay').onclick = () => { const i = days().indexOf(sel); if (i > 0) { sel = days()[i - 1]; render(); } };
$('nextDay').onclick = () => { const i = days().indexOf(sel); if (i < 29) { sel = days()[i + 1]; render(); } };
$('markDay').onclick = () => { S.d[sel] = {}; planOf(sel).ex.forEach((e, i) => S.d[sel][i] = Array(e.s).fill(true)); save(); render(); };
$('resetDay').onclick = () => { delete S.d[sel]; save(); render(); };
$('startDate').onchange = e => {
  if (!e.target.value) return;
  if (Object.keys(S.d).length && !confirm('Promena datuma početka pomera kalendar. Napredak po datumima ostaje sačuvan. Nastaviti?')) { render(); return; }
  S.start = e.target.value; save(); sel = inRange(todayKey()) ? todayKey() : S.start; tReset(); render();
};
$('resetAll').onclick = () => {
  if (!confirm('Da li sigurno želiš da obrišeš SAV napredak? Ovo se ne može vratiti.')) return;
  S.d = {}; save(); tReset(); render();
};
document.addEventListener('visibilitychange', () => { if (!document.hidden) { tick(); render(); } });

render();
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
