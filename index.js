




// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });

document.addEventListener('DOMContentLoaded', function () {
    const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime';
    let i = parseInt(localStorage.getItem(a)) || 0,
        j = parseInt(localStorage.getItem(b)) || 1,
        k = parseInt(localStorage.getItem(c)) || 1,
        l = parseInt(localStorage.getItem(d)) || 1,
        m = parseInt(localStorage.getItem(e)) || 300,
        n = parseInt(localStorage.getItem(f)) || 300,
        o = parseInt(localStorage.getItem(g)) || 1;

    const p = document.querySelector('.point'),
        q = document.querySelector('.energy'),
        r = document.querySelector('.clickable'),
        s = document.querySelector('.img-leage');

    function t(u) { return u; }
    function v(w) { return w; }
    function x(y) { return 300 + (y - 1) * 100; }
    function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; }
    function A() {
        if (m < n) {
            m += o;
            if (m > n) { m = n; }
            localStorage.setItem(e, m);
            z();
        }
    }
    function B() {
        const C = parseInt(localStorage.getItem(h)) || Date.now(),
            D = Date.now(),
            E = D - C,
            F = Math.floor(E / 5000) * o;
        m = Math.min(m + F, n);
        localStorage.setItem(e, m);
        localStorage.setItem(h, D);
    }

    r.addEventListener('click', function () {
        if (m > 0) {
            const G = t(j);
            i += G;
            m -= G;
            localStorage.setItem(a, i);
            localStorage.setItem(e, m);
            z();
        }
    });

    setInterval(A, 5000);
    n = x(l);
    o = v(k);
    localStorage.setItem(f, n);
    localStorage.setItem(g, o);
    B();
    z();
});

document.addEventListener('DOMContentLoaded', function () {
    const guideText = document.querySelector('.div');
    const body = document.body;

    const overlay = document.createElement('div');
    const guideContainer = document.createElement('div');
    const guideContent = document.createElement('div');
    const guideImage = document.createElement('img');
    const guideTextContent = document.createElement('p');

    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: none;
        z-index: 1000;
    `;

    guideContainer.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 67%;
    background-color: white;
    z-index: 1001;
    display: block;
    border-radius: 10px;
    overflow: hidden;
}
    `;

    guideContent.style.cssText = `
        width: 100%;
        height: 100%;
        border: 3px solid gold;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
    `;

    guideImage.style.cssText = `
        max-width: 100%;
        max-height: 50%;
        object-fit: contain;
    `;

    guideTextContent.style.cssText = `
        text-align: center;
        font-size: 16px;
    `;

    guideImage.src = 'animation.gif'; // مسیر فایل GIF را اینجا قرار دهید
    guideTextContent.textContent = "با سلام خدمت تمام دوستانی که قراره جزوی از مجموعه ما باشن❤️✋ اولا اینکه میدونیم از ایردراپ هایی مثل همستر و تپ سواپ، بخاطر به تاخیر انداختن پرداخت و اتلاف وقت با ارزشتون خسته شدین پس ممنونیم که ما رو انتخاب کردید و امیدواریم به خوبی بتونیم جواب اعتماد شما رو بدیم💰🎁 میخوام نحوه کار با مجموعه ما رو بهتون توضیح بدم: شما جدا از ایردراپ کلیکی ما میتونید به طور مستقیم با دعوت دوستانتون و جمع آوری زیر مجموعه پول دریافت کنید!😳😍(هر زیر مجموعه پنج هزار تومن) هیچ محدودیتی هم برای این مورد ندارید فقط یک شرط مهم داره و اونم اینه که هر فردی که با لینک شما وارد ربات بشه باید در کانال تلگرام و یوتیوب و روبیکا و پیج اینستاگرام ما عضو بشه✅ این شرط مزایای جانبی هم داره و اونم قرعه کشی هاییه که به زودی توی این پلتفرم ها قراره برگزار کنیم🌹"; // متن راهنما را اینجا قرار دهید

    guideContent.appendChild(guideImage);
    guideContent.appendChild(guideTextContent);
    guideContainer.appendChild(guideContent);
    body.appendChild(overlay);
    body.appendChild(guideContainer);

    guideText.addEventListener('click', function () {
        overlay.style.display = 'block';
        guideContainer.style.display = 'block';
    });

    overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
        guideContainer.style.display = 'none';
    });
});







// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });






// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });








// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });

document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });








// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });










// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });










// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });










// document.addEventListener('DOMContentLoaded', function () { const a = 'yU4j2lM9Qb', b = 'pointPerClickLevel', c = 'energyRechargeLevel', d = 'energyCapacityLevel', e = 'pL8k2sN1Wf', f = 'rZ5j4nT8Hl', g = 'mP3f9xL7Zs', h = 'lastVisitTime'; let i = parseInt(localStorage.getItem(a)) || 0, j = parseInt(localStorage.getItem(b)) || 1, k = parseInt(localStorage.getItem(c)) || 1, l = parseInt(localStorage.getItem(d)) || 1, m = parseInt(localStorage.getItem(e)) || 300, n = parseInt(localStorage.getItem(f)) || 300, o = parseInt(localStorage.getItem(g)) || 1; const p = document.querySelector('.point'), q = document.querySelector('.energy'), r = document.querySelector('.clickable'), s = document.querySelector('.img-leage'); function t(u) { return u; } function v(w) { return w; } function x(y) { return 300 + (y - 1) * 100; } function z() { p.textContent = `${i}`; q.textContent = `${m} / ${n}`; } function A() { if (m < n) { m += o; if (m > n) { m = n; } localStorage.setItem(e, m); z(); } } function B() { const C = parseInt(localStorage.getItem(h)) || Date.now(), D = Date.now(), E = D - C, F = Math.floor(E / 5000) * o; m = Math.min(m + F, n); localStorage.setItem(e, m); localStorage.setItem(h, D); } r.addEventListener('click', function () { if (m > 0) { const G = t(j); i += G; m -= G; localStorage.setItem(a, i); localStorage.setItem(e, m); z(); } }); setInterval(A, 5000); n = x(l); o = v(k); localStorage.setItem(f, n); localStorage.setItem(g, o); B(); z(); });
