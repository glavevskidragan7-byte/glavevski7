// ===== Crteži vežbi (jednostavne figure) =====
// h=glava, l=linija tela, g=zelena strelica/pomeranje, r=pravougaonik (bučica/stolica/džak), f=pod
const PICS = {
  zgib: 'l10 6 90 6|h50 22|l42 6 50 30 58 6|l50 27 50 50|l50 50 46 66|l50 50 54 66|g72 50 72 24|g68 30 72 24 76 30',
  chin: 'l10 6 90 6|h50 22|l46 6 46 18 50 30|l54 6 54 18 50 30|l50 27 50 50|l50 50 46 66|l50 50 54 66|g72 50 72 24|g68 30 72 24 76 30',
  veslanje: 'f|h22 36|l28 38 60 32|l60 32 56 64|l60 32 66 64|l32 40 34 54|r28 54 12 7|g46 58 46 42|g42 47 46 42 50 47',
  ranac: 'f|h22 36|l28 38 60 32|l60 32 56 64|l60 32 66 64|l32 40 36 50|r30 50 14 10|g50 60 50 44|g46 49 50 44 54 49',
  superman: 'f|h24 46|l32 52 70 54|l32 52 10 42|l70 54 92 44|g50 40 50 28|g46 33 50 28 54 33',
  sklek: 'f|h18 37|l30 58 30 41|l23 40 82 54|l82 54 86 60|g12 52 12 30|g9 35 12 30 15 35',
  decline: 'f|r76 38 18 4|l92 42 92 64|h16 46|l28 64 28 50|l22 49 82 37|g10 58 10 40',
  sirokisk: 'f|h50 30|l50 36 50 50|l30 62 34 40 66 40 70 62|g14 48 26 48|g86 48 74 48',
  fly: 'f|h16 54|l21 58 70 58|l70 58 80 50 88 60|l30 58 20 40|l30 58 44 40|r15 34 9 7|r40 34 9 7|g26 26 38 26',
  visenje: 'l10 6 90 6|h50 22|l42 6 50 30 58 6|l50 27 50 46|l50 46 64 44 64 58|g78 58 78 36|g74 42 78 36 82 42',
  bicikl: 'f|h22 44|l26 48 50 58|l50 58 62 46 74 52|l50 58 64 58 82 54|l28 48 36 40|g42 30 56 30',
  plank: 'f|h16 39|l20 41 82 50|l26 43 26 58 36 58|l82 50 86 58|g40 30 70 34',
  dzak: 'f|l80 2 80 10|r72 10 16 40|h30 18|l30 23 32 44|l30 27 50 26 70 26|l30 28 22 36 30 40|l32 44 24 62|l32 44 42 62|g56 20 64 20',
  cucanj: 'f|h42 22|l42 27 54 42|l54 42 38 46 40 62|l44 30 26 32|r50 26 10 14|g80 26 80 50|g76 44 80 50 84 44',
  bugarski: 'f|r72 42 20 4|l88 46 88 64|l50 44 36 48 34 64|l50 44 62 58 74 42|l50 44 48 21|h48 15|l48 26 44 40|g20 30 20 52|g16 46 20 52 24 46',
  rdl: 'f|h10 33|l40 40 16 36|l40 40 40 64|l40 40 76 32|l18 37 20 52|r15 52 10 6|g60 50 60 36',
  skok: 'f|h50 8|l50 13 50 34|l40 2 50 18 60 2|l50 34 44 46|l50 34 56 46|g34 54 34 40|g30 45 34 40 38 45|g66 54 66 40|g62 45 66 40 70 45',
  zid: 'f|l84 2 84 64|h78 15|l78 21 78 44|l78 44 56 44 56 64|l78 26 64 32',
  prsti: 'f|h50 10|l50 15 50 40|l50 18 42 34|l50 18 58 34|r38 34 8 6|l50 40 47 56 49 60|l50 40 53 56 55 60|g72 50 72 24|g68 30 72 24 76 30',
  pike: 'f|h31 47|l28 60 33 52 55 22|l55 22 80 60|g20 40 26 50',
  potisak: 'f|h50 14|l50 19 50 42|l50 22 38 18 38 6|l50 22 62 18 62 6|r34 0 8 6|r58 0 8 6|l50 42 44 62|l50 42 56 62|g80 30 80 8|g76 14 80 8 84 14',
  lateral: 'f|h50 12|l50 17 50 42|l26 22 50 22 74 22|r20 18 8 8|r72 18 8 8|l50 42 44 62|l50 42 56 62|g18 40 18 26|g82 40 82 26',
  biceps: 'f|h50 12|l50 17 50 42|l56 21 58 36 62 24|l44 21 42 36 38 24|r58 18 8 8|r34 18 8 8|l50 42 44 62|l50 42 56 62',
  cekic: 'f|h50 12|l50 17 50 42|l56 21 58 36 60 22|l44 21 42 36 40 22|r57 14 6 10|r37 14 6 10|l50 42 44 62|l50 42 56 62',
  dijamant: 'f|h18 37|l28 58 30 41|l23 40 82 54|l82 54 86 60|l30 58 36 58 30 54|g12 52 12 30',
  triceps: 'f|h50 14|l50 19 50 42|l46 21 44 6 54 12|l54 21 56 6|r50 6 8 8|l50 42 44 62|l50 42 56 62|g70 30 70 8',
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

// ===== Plan: svaki mesec se otežava =====
// s = broj serija za mesec 1/2/3, r = ponavljanja za mesec 1/2/3
const RIR = ' Završi seriju sa 1–3 dobra ponavljanja u rezervi – ne do otkaza.';
const RANAC = ' Ranac napuni knjigama ili flašama vode; svaki mesec dodaj malo težine.';
const ex = (n, p, s, r, t) => ({ n, p, s, r, t });
const DZAK = {
  n: 'Boks džak', p: 'dzak', min: 15, s: [1, 1, 1], r: ['15 min', '15 min', '15 min'],
  tm: [
    'Mesec 1: 5 rundi po 3 minuta, kratka pauza između. Fokus na tehniku – gard gore, brada dole, kretanje oko džaka, kombinacije 1-2, 1-2-3.',
    'Mesec 2: 5 rundi po 3 minuta. U poslednjih 30 sekundi svake runde maksimalan tempo. Dodaj krošee i aperkate u telo.',
    'Mesec 3: 15 minuta bez stajanja – 30 s eksplozivno, 30 s lakše (kretanje i džeb). Diši pri svakom udarcu.'
  ]
};
const PLAN = {
  1: { title: 'Leđa', ex: [
    ex('Zgibovi', 'zgib', [4, 4, 5], ['5–8', '6–10', '8–12'], 'Hvat malo širi od ramena, povuci grudi ka šipki, spuštaj se polako do pune ekstenzije.' + RIR),
    ex('Zgibovi obrnutim hvatom', 'chin', [3, 3, 4], ['5–8', '6–10', '8–12'], 'Dlanovi okrenuti ka tebi, u širini ramena. Povuci bradu iznad šipke, laktovi ka rebrima.' + RIR),
    ex('Veslanje jednom rukom sa bučicom', 'veslanje', [3, 4, 4], ['12–15 po ruci', '15–20 po ruci', '15–20 po ruci, 3 s spuštanje'], 'Osloni se rukom i kolenom na stolicu, leđa ravna. Povuci bučicu ka kuku i stisni lopaticu.'),
    ex('Veslanje sa rancem u pretklonu', 'ranac', [3, 3, 4], ['10–12', '12–15', '12–15, zadrži 1 s gore'], 'Pretklon oko 45°, leđa ravna, kolena blago savijena. Povuci ranac ka stomaku.' + RANAC),
    ex('Superman', 'superman', [3, 3, 3], ['12', '15', '15, zadrži 2 s gore'], 'Lezi na stomak, istovremeno podigni ruke, grudi i noge od poda. Pogled ka podu.')
  ] },
  2: { title: 'Grudi i stomak', ex: [
    ex('Sklekovi', 'sklek', [4, 4, 5], ['10–15', '15–20', '15–20 sa rancem na leđima'], 'Telo u pravoj liniji, laktovi oko 45° od tela, grudi skoro do poda.' + RIR),
    ex('Sklekovi sa nogama na stolici', 'decline', [3, 3, 4], ['8–12', '10–15', '12–15'], 'Stopala na stolici, šake na podu. Više opterećuje gornji deo grudi i ramena.' + RIR),
    ex('Široki sklekovi', 'sirokisk', [3, 3, 3], ['10–12', '12–15', '12–15, 3 s spuštanje'], 'Šake šire od ramena, spuštaj se polako dok ne osetiš istezanje grudi.'),
    ex('Razvlačenje bučica na podu', 'fly', [3, 3, 4], ['12–15', '15–20', '15–20, 3 s spuštanje'], 'Lezi na leđa, ruke blago savijene. Otvori ruke u stranu do poda pa ih spoji iznad grudi.'),
    ex('Podizanje kolena u visu', 'visenje', [3, 3, 4], ['8–10', '10–12', '10–12 ispruženih nogu'], 'Vis na šipci, bez ljuljanja. Podigni kolena ka grudima i polako spusti.'),
    ex('Trbušnjaci bicikl', 'bicikl', [3, 3, 3], ['20 ukupno', '30 ukupno', '40 ukupno'], 'Lakat ka suprotnom kolenu, naizmenično. Donji deo leđa uz pod, polako i kontrolisano.'),
    ex('Plank', 'plank', [3, 3, 3], ['30 s', '45 s', '60 s'], 'Oslonac na podlaktice, telo pravo, stegni stomak i zadnjicu.')
  ] },
  3: { title: 'Boks džak', ex: [DZAK] },
  4: { title: 'Noge', ex: [
    ex('Čučnjevi sa rancem', 'cucanj', [4, 4, 5], ['12–15', '15–20', '15–20, pauza 2 s dole'], 'Ranac na leđima ili ispred grudi. Stopala u širini ramena, kukovi unazad, kolena prate prste, pete na podu.' + RANAC),
    ex('Bugarski čučanj', 'bugarski', [3, 3, 4], ['8–10 po nozi', '10–12 po nozi', '10–12 po nozi sa bučicama'], 'Zadnja noga na stolici. Spuštaj se pravo dole dok prednja butina ne bude paralelna sa podom.'),
    ex('Rumunsko mrtvo dizanje na jednoj nozi', 'rdl', [3, 3, 3], ['8–10 po nozi', '10–12 po nozi', '12–15 po nozi'], 'Bučice u rukama, pretklon iz kukova, zadnja noga ide unazad, leđa ravna. Oseti zadnju ložu.'),
    ex('Skokovi iz čučnja', 'skok', [3, 4, 4], ['8', '10', '10–12'], 'Eksplozivno gore, meko doskoči na prednji deo stopala sa savijenim kolenima. Ne idi do otkaza – stani kad skok izgubi brzinu.'),
    ex('Zidno sedenje', 'zid', [2, 3, 3], ['30 s', '45 s', '60 s'], 'Leđa uz zid, kolena pod 90°, butine paralelne sa podom. Diši mirno.'),
    ex('Podizanje na prste', 'prsti', [3, 4, 4], ['15–20 obe noge', '12–15 po nozi', '15 po nozi sa bučicom'], 'Podigni se što više, zadrži 1 s gore, polako spusti. Za ravnotežu se drži za zid.')
  ] },
  5: { title: 'Ruke i ramena', ex: [
    ex('Pike sklekovi', 'pike', [3, 4, 4], ['6–8', '8–10', '8–10 sa nogama na stolici'], 'Kukovi visoko (obrnuto V), spuštaj glavu ka podu ispred šaka pa se odgurni.' + RIR),
    ex('Potisak bučica iznad glave', 'potisak', [3, 4, 4], ['12–15', '15–20', '15–20, 3 s spuštanje'], 'Stojeći, stomak stegnut. Gurni bučice pravo gore, ne savijaj leđa unazad.'),
    ex('Lateralno podizanje bučica', 'lateral', [3, 3, 4], ['12–15', '15–20', '15–20 + 10 kratkih na kraju'], 'Blago savijeni laktovi, podiži u stranu do visine ramena, bez zamaha.'),
    ex('Pregib za biceps', 'biceps', [3, 4, 4], ['12–15', '15–20', '15–20, 3 s spuštanje'], 'Laktovi uz telo, bez ljuljanja, spuštaj polako do kraja.'),
    ex('Čekić pregib', 'cekic', [2, 3, 3], ['12–15', '15', '15–20'], 'Dlanovi okrenuti jedan ka drugom (kao da držiš čekić). Jača podlakticu i biceps.'),
    ex('Dijamant sklekovi', 'dijamant', [3, 3, 4], ['6–10', '8–12', '10–15'], 'Šake spojene ispod grudi (palčevi i kažiprsti prave romb). Laktovi uz telo – radi triceps.' + RIR),
    ex('Triceps ekstenzija iznad glave', 'triceps', [3, 3, 3], ['12–15 po ruci', '15 po ruci', '15–20 po ruci'], 'Bučica iznad glave, lakat usmeren gore. Spusti bučicu iza glave pa ispruži ruku.')
  ] },
  6: { title: 'Odmor', rest: 1, note: 'Dan odmora 😴 – ovo nije propušten trening. Spavaj, jedi dovoljno proteina i pij vodu.', ex: [ex('Potpuni odmor', 'odmor', [1, 1, 1], ['', '', ''], 'Bez treninga. Mišići rastu dok se odmaraš.')] },
  0: { title: 'Boks džak', ex: [DZAK] }
};
const DANI = ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Četvrtak', 'Petak', 'Subota'];
const MESECI = ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'];
const NDAYS = 90;

// ===== Datumi =====
const pad = n => String(n).padStart(2, '0');
const key = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parse = k => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
const addDays = (k, n) => { const d = parse(k); return key(new Date(d.getFullYear(), d.getMonth(), d.getDate() + n)); };
const todayKey = () => key(new Date());
const nice = k => { const d = parse(k); return `${DANI[d.getDay()]}, ${d.getDate()}. ${MESECI[d.getMonth()]}`; };
const planOf = k => PLAN[parse(k).getDay()];

// ===== Stanje (localStorage) =====
const LS = 'mighty-3meseca';
let S;
try { S = JSON.parse(localStorage.getItem(LS)); } catch (e) { S = null; }
if (!S || !S.start) S = { start: todayKey(), d: {} };
const save = () => { try { localStorage.setItem(LS, JSON.stringify(S)); } catch (e) {} };
save();

const days = () => Array.from({ length: NDAYS }, (_, i) => addDays(S.start, i));
const last = () => addDays(S.start, NDAYS - 1);
const inRange = k => k >= S.start && k <= last();
const monthOf = k => Math.min(2, Math.floor(Math.max(0, days().indexOf(k)) / 30)); // 0, 1, 2
const exOf = (k, i) => { const e = planOf(k).ex[i], m = monthOf(k); return Object.assign({}, e, { sets: e.s[m], reps: e.r[m], tip: e.tm ? e.tm[m] : e.t }); };
const setsOf = (k, i) => {
  const a = (S.d[k] && S.d[k][i]) || [];
  return Array.from({ length: exOf(k, i).sets }, (_, j) => !!a[j]);
};
const exDone = (k, i) => setsOf(k, i).every(Boolean);
const dayDone = k => planOf(k).ex.every((_, i) => exDone(k, i));
const dayAny = k => planOf(k).ex.some((_, i) => setsOf(k, i).some(Boolean));
function setSets(k, i, arr) { (S.d[k] = S.d[k] || {})[i] = arr; save(); render(); }

let sel = inRange(todayKey()) ? todayKey() : S.start;
let tab = monthOf(sel);

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
  let exTot = 0, exOk = 0, dOk = 0, dTot = 0;
  const all = days();
  all.forEach(k => {
    const p = planOf(k); if (p.rest) return;
    dTot++;
    p.ex.forEach((_, i) => { exTot++; if (exDone(k, i)) exOk++; });
    if (dayDone(k)) dOk++;
  });
  // Niz: uzastopni završeni trening-dani unazad; subota (odmor) se preskače,
  // a današnji nezavršeni trening ne prekida niz.
  let streak = 0, k = todayKey() > last() ? last() : todayKey();
  if (!planOf(k).rest && !dayDone(k)) k = addDays(k, -1);
  while (k >= S.start) {
    if (!planOf(k).rest) { if (dayDone(k)) streak++; else break; }
    k = addDays(k, -1);
  }
  return { exOk, exTot, dOk, dTot, streak, pct: exTot ? Math.round(exOk / exTot * 100) : 0 };
}

// ===== Prikaz =====
const $ = id => document.getElementById(id);
function render() {
  const tk = todayKey(), tp = planOf(tk);
  let h = `<div class="muted">Danas · ${nice(tk)}</div>`;
  if (tk < S.start) h += `<h2>Program počinje ${nice(S.start)}</h2><p class="muted">Plan je spreman – vidimo se tada.</p>`;
  else if (tk > last()) h += `<h2>Program je završen 🏆</h2><p class="muted">Bravo! Izaberi novi datum početka u podešavanjima za novi krug.</p>`;
  else {
    h += `<h2>${tp.title}<span class="lvl">Mesec ${monthOf(tk) + 1}</span>${dayDone(tk) ? ' ✅' : ''}</h2>`;
    h += tp.rest ? `<div class="note">${tp.note}</div>` : `<div class="muted">${tp.ex.length > 1 ? tp.ex.length + ' vežbi' : '15 minuta'} · Dan ${days().indexOf(tk) + 1} od ${NDAYS}</div>`;
    h += `<button class="btn big" id="go">${tp.rest ? 'Pogledaj današnji plan' : 'Započni trening'}</button>`;
  }
  $('today').innerHTML = h;
  const go = $('go'); if (go) go.onclick = () => { sel = tk; tab = monthOf(tk); render(); $('daySec').scrollIntoView({ behavior: 'smooth' }); };

  const st = stats();
  $('pct').textContent = st.pct + '%'; $('barFill').style.width = st.pct + '%';
  $('stEx').textContent = `${st.exOk}/${st.exTot}`; $('stDays').textContent = `${st.dOk}/${st.dTot}`; $('stStreak').textContent = st.streak;

  // Izabrani dan
  const p = planOf(sel), idx = days().indexOf(sel), m = monthOf(sel);
  $('dayDate').textContent = `Dan ${idx + 1} · Mesec ${m + 1} · ${nice(sel)}`;
  $('dayTitle').textContent = p.title + (dayDone(sel) ? ' ✅' : '');
  $('dayNote').innerHTML = p.rest ? `<div class="note">${p.note}</div>` : '';
  $('prevDay').disabled = idx <= 0; $('nextDay').disabled = idx >= NDAYS - 1;
  $('exList').innerHTML = p.ex.map((_, i) => {
    const e = exOf(sel, i), s = setsOf(sel, i), ok = s.every(Boolean);
    const sub = p.rest ? '' : e.min ? `${e.min} minuta` : `${e.sets} ${e.sets >= 5 ? "serija" : "serije"} × ${e.reps}`;
    let body = `<div class="exHead"><div class="nm">${i + 1}. ${e.n}<small>${sub}</small></div><button class="chk ${ok ? 'on' : ''}" data-ex="${i}" aria-label="Označi vežbu">${ok ? '✓' : ''}</button></div>${pic(e.p)}<p class="tip">${e.tip}</p>`;
    if (e.sets > 1) body += `<div class="sets">${s.map((v, j) => `<button class="set ${v ? 'on' : ''}" data-ex="${i}" data-set="${j}">Serija ${j + 1}</button>`).join('')}</div>`;
    if (e.min) {
      timerFor(sel, i, e.min);
      body += T.k === sel && T.i === i
        ? `<div class="timer"><div class="t" id="tVal">${fmt(T.left)}</div><div class="row"><button class="btn" data-t="start">${T.left < T.total && !T.run ? 'Nastavi' : 'Start'}</button><button class="btn ghost" data-t="pause">Pauza</button><button class="btn ghost" data-t="reset">Reset</button></div></div>`
        : `<div class="timer muted">Tajmer je zauzet drugim danom – resetuj ga tamo.</div>`;
    }
    return `<div class="ex ${ok ? 'ok' : ''}">${body}</div>`;
  }).join('');
  $('markDay').textContent = p.rest ? 'Označi kao odmoreno' : 'Označi dan završenim';

  // Kartice meseci
  $('tabs').innerHTML = [0, 1, 2].map(t => `<button class="${t === tab ? 'on' : ''}" data-tab="${t}">Mesec ${t + 1}</button>`).join('');

  // Kalendar izabranog meseca (30 dana)
  const block = days().slice(tab * 30, tab * 30 + 30);
  let c = '', lastMonth = -1;
  block.forEach(k => {
    const d = parse(k);
    if (d.getMonth() !== lastMonth) {
      lastMonth = d.getMonth();
      c += `<div class="mon">${MESECI[lastMonth]} ${d.getFullYear()}</div>` + ['Pon', 'Uto', 'Sre', 'Čet', 'Pet', 'Sub', 'Ned'].map(w => `<div class="wd">${w}</div>`).join('');
      c += '<div></div>'.repeat((d.getDay() + 6) % 7);
    }
    const pl = planOf(k);
    const short = { 'Leđa': 'leđa', 'Grudi i stomak': 'grudi', 'Boks džak': 'džak', 'Noge': 'noge', 'Ruke i ramena': 'ruke', 'Odmor': 'odmor' }[pl.title];
    const cls = ['d', pl.rest ? 'rest' : '', dayDone(k) && !pl.rest ? 'done' : (dayAny(k) ? 'part' : ''), k === tk ? 'today' : '', k === sel ? 'sel' : ''].join(' ');
    c += `<button class="${cls}" data-day="${k}">${d.getDate()}<small>${short}</small></button>`;
  });
  $('cal').innerHTML = c;
  $('startDate').value = S.start;
}

// ===== Događaji =====
document.addEventListener('click', ev => {
  const b = ev.target.closest('button'); if (!b) return;
  if (b.dataset.tab) { tab = +b.dataset.tab; render(); return; }
  if (b.dataset.day) { sel = b.dataset.day; render(); $('daySec').scrollIntoView({ behavior: 'smooth' }); return; }
  if (b.dataset.t) { ({ start: tStart, pause: tPause, reset: tReset })[b.dataset.t](); return; }
  if (b.dataset.ex !== undefined) {
    const i = +b.dataset.ex, s = setsOf(sel, i);
    if (b.dataset.set !== undefined) { s[+b.dataset.set] = !s[+b.dataset.set]; setSets(sel, i, s); }
    else { const all = s.every(Boolean); setSets(sel, i, s.map(() => !all)); }
  }
});
const go = n => { const i = days().indexOf(sel) + n; if (i >= 0 && i < NDAYS) { sel = days()[i]; tab = monthOf(sel); render(); } };
$('prevDay').onclick = () => go(-1);
$('nextDay').onclick = () => go(1);
$('markDay').onclick = () => { S.d[sel] = {}; planOf(sel).ex.forEach((_, i) => S.d[sel][i] = Array(exOf(sel, i).sets).fill(true)); save(); render(); };
$('resetDay').onclick = () => { delete S.d[sel]; save(); render(); };
$('startDate').onchange = e => {
  if (!e.target.value) return;
  if (Object.keys(S.d).length && !confirm('Promena datuma početka pomera kalendar. Napredak po datumima ostaje sačuvan. Nastaviti?')) { render(); return; }
  S.start = e.target.value; save(); sel = inRange(todayKey()) ? todayKey() : S.start; tab = monthOf(sel); tReset(); render();
};
$('resetAll').onclick = () => {
  if (!confirm('Da li sigurno želiš da obrišeš SAV napredak? Ovo se ne može vratiti.')) return;
  S.d = {}; save(); tReset(); render();
};
document.addEventListener('visibilitychange', () => { if (!document.hidden) { tick(); render(); } });

render();
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
