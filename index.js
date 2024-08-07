




// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });









// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });






// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });








// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });

document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });








// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });










// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });










// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });










// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });
