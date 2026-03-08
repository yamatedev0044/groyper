import {
  s as ae,
  n as V,
  o as _e,
  y as re,
  r as tt,
  z as Oe,
  h as at,
  f as ue,
} from "../chunks/scheduler.wNbmGW0Y.js";
import {
  S as le,
  i as ce,
  e as S,
  s as A,
  c as k,
  b as $,
  B as J,
  g as R,
  f as y,
  o as g,
  h as G,
  j as u,
  A as oe,
  p as F,
  z as de,
  a as W,
  d as B,
  u as Q,
  v as Z,
  w as ee,
  t as U,
  m as te,
  x as se,
  C as fe,
  k as ve,
  D as me,
} from "../chunks/index.DomoiRLL.js";
import { e as H, u as Ie, d as Te } from "../chunks/each.Brr88zmJ.js";
function Pe(o, e, t) {
  const s = o.slice();
  return (s[1] = e[t]), (s[3] = t), s;
}
function $e(o) {
  let e,
    t,
    s,
    n,
    i,
    r,
    l = '<span class="meme-text svelte-1e4qpmc">Groyper Approved!</span>',
    a,
    c,
    d;
  return {
    c() {
      (e = S("div")),
        (t = S("div")),
        (s = S("img")),
        (i = A()),
        (r = S("div")),
        (r.innerHTML = l),
        (a = A()),
        (c = S("div")),
        (d = A()),
        this.h();
    },
    l(m) {
      e = k(m, "DIV", { class: !0, style: !0 });
      var _ = $(e);
      t = k(_, "DIV", { class: !0 });
      var O = $(t);
      (s = k(O, "IMG", { src: !0, alt: !0, class: !0 })),
        (i = R(O)),
        (r = k(O, "DIV", { class: !0, "data-svelte-h": !0 })),
        J(r) !== "svelte-1d9iqp0" && (r.innerHTML = l),
        O.forEach(y),
        (a = R(_)),
        (c = k(_, "DIV", { class: !0 })),
        $(c).forEach(y),
        (d = R(_)),
        _.forEach(y),
        this.h();
    },
    h() {
      re(s.src, (n = o[1])) || g(s, "src", n),
        g(s, "alt", "Groyper meme"),
        g(s, "class", "w-full h-full object-cover"),
        g(r, "class", "meme-overlay svelte-1e4qpmc"),
        g(t, "class", "meme-frame svelte-1e4qpmc"),
        g(c, "class", "meme-sticker svelte-1e4qpmc"),
        g(e, "class", "meme-item z-10 svelte-1e4qpmc"),
        F(e, "--delay", o[3] * 0.1 + "s");
    },
    m(m, _) {
      G(m, e, _), u(e, t), u(t, s), u(t, i), u(t, r), u(e, a), u(e, c), u(e, d);
    },
    p: V,
    d(m) {
      m && y(e);
    },
  };
}
function lt(o) {
  let e,
    t,
    s = "Groyper's Meme Madness Gallery",
    n,
    i,
    r = H(o[0]),
    l = [];
  for (let a = 0; a < r.length; a += 1) l[a] = $e(Pe(o, r, a));
  return {
    c() {
      (e = S("section")),
        (t = S("h2")),
        (t.textContent = s),
        (n = A()),
        (i = S("div"));
      for (let a = 0; a < l.length; a += 1) l[a].c();
      this.h();
    },
    l(a) {
      e = k(a, "SECTION", { class: !0 });
      var c = $(e);
      (t = k(c, "H2", { class: !0, "data-svelte-h": !0 })),
        J(t) !== "svelte-16w29hi" && (t.textContent = s),
        (n = R(c)),
        (i = k(c, "DIV", { class: !0 }));
      var d = $(i);
      for (let m = 0; m < l.length; m += 1) l[m].l(d);
      d.forEach(y), c.forEach(y), this.h();
    },
    h() {
      g(
        t,
        "class",
        "text-4xl font-bold text-center mb-8 text-purple-700 transform -rotate-2 animate-pulse"
      ),
        g(i, "class", "meme-gallery mx-4 svelte-1e4qpmc"),
        g(
          e,
          "class",
          "py-12 px-4 bg-gradient-to-br from-green-400 via-yellow-300 to-green-200"
        );
    },
    m(a, c) {
      G(a, e, c), u(e, t), u(e, n), u(e, i);
      for (let d = 0; d < l.length; d += 1) l[d] && l[d].m(i, null);
    },
    p(a, [c]) {
      if (c & 1) {
        r = H(a[0]);
        let d;
        for (d = 0; d < r.length; d += 1) {
          const m = Pe(a, r, d);
          l[d] ? l[d].p(m, c) : ((l[d] = $e(m)), l[d].c(), l[d].m(i, null));
        }
        for (; d < l.length; d += 1) l[d].d(1);
        l.length = r.length;
      }
    },
    i: V,
    o: V,
    d(a) {
      a && y(e), oe(l, a);
    },
  };
}
function ct(o) {
  for (let e = o.length - 1; e > 0; e--) {
    const t = Math.floor(Math.random() * (e + 1));
    [o[e], o[t]] = [o[t], o[e]];
  }
}
function ht(o) {
  let e = Array.from({ length: 12 }, (t, s) => `/groypers/${s + 1}.png`);
  return (
    _e(() => {
      ct(e);
    }),
    [e]
  );
}
class ut extends le {
  constructor(e) {
    super(), ce(this, e, ht, lt, ae, {});
  }
}
function Ae(o, e, t) {
  const s = o.slice();
  return (s[6] = e[t]), (s[8] = t), s;
}
function Re(o) {
  let e,
    t = H(Array(10)),
    s = [];
  for (let n = 0; n < t.length; n += 1) s[n] = qe(Ae(o, t, n));
  return {
    c() {
      e = S("div");
      for (let n = 0; n < s.length; n += 1) s[n].c();
      this.h();
    },
    l(n) {
      e = k(n, "DIV", { class: !0 });
      var i = $(e);
      for (let r = 0; r < s.length; r += 1) s[r].l(i);
      i.forEach(y), this.h();
    },
    h() {
      g(e, "class", "pointer-events-none absolute left-0 top-0 h-full w-full");
    },
    m(n, i) {
      G(n, e, i);
      for (let r = 0; r < s.length; r += 1) s[r] && s[r].m(e, null);
    },
    p(n, i) {
      if (i & 0) {
        t = H(Array(10));
        let r;
        for (r = 0; r < t.length; r += 1) {
          const l = Ae(n, t, r);
          s[r] ? s[r].p(l, i) : ((s[r] = qe(l)), s[r].c(), s[r].m(e, null));
        }
        for (; r < s.length; r += 1) s[r].d(1);
        s.length = t.length;
      }
    },
    d(n) {
      n && y(e), oe(s, n);
    },
  };
}
function qe(o) {
  let e,
    t = ["🐸", "👑", "🎭", "🌐", "🎤"][Math.floor(Math.random() * 5)] + "",
    s,
    n;
  return {
    c() {
      (e = S("div")), (s = W(t)), (n = A()), this.h();
    },
    l(i) {
      e = k(i, "DIV", { class: !0, style: !0 });
      var r = $(e);
      (s = B(r, t)), (n = R(r)), r.forEach(y), this.h();
    },
    h() {
      g(e, "class", "animate-float absolute svelte-edwtm8"),
        F(e, "left", Math.random() * 100 + "%"),
        F(e, "top", Math.random() * 100 + "%"),
        F(e, "animation-delay", o[8] * 0.5 + "s"),
        F(e, "font-size", Math.random() * 20 + 10 + "px");
    },
    m(i, r) {
      G(i, e, r), u(e, s), u(e, n);
    },
    p: V,
    d(i) {
      i && y(e);
    },
  };
}
function dt(o) {
  let e,
    t,
    s,
    n,
    i,
    r = "Groyper's Epic Trolling Adventure!",
    l,
    a,
    c = "Join the Groyper army and put on your trolling helmet!",
    d,
    m,
    _,
    O,
    E,
    I,
    q = '<span class="text-4xl">🎩</span>',
    v,
    N,
    P = "$GROYPER: Pepe's smug friend",
    f,
    h,
    p = "0x00000000000000000000000000000000000000",
    x,
    D,
    j = `Buy $GROYPER Now!
			<span class="absolute -right-2 -top-2 animate-ping">💰</span>`,
    T,
    L,
    K,
    M = o[0] && Re(o);
  return {
    c() {
      (e = S("section")),
        (t = S("div")),
        (s = A()),
        (n = S("div")),
        (i = S("h1")),
        (i.textContent = r),
        (l = A()),
        (a = S("p")),
        (a.textContent = c),
        (d = A()),
        (m = S("div")),
        (_ = S("video")),
        (E = A()),
        (I = S("div")),
        (I.innerHTML = q),
        (v = A()),
        (N = S("p")),
        (N.textContent = P),
        (f = A()),
        (h = S("p")),
        (h.textContent = p),
        (x = A()),
        (D = S("a")),
        (D.innerHTML = j),
        (T = A()),
        M && M.c(),
        this.h();
    },
    l(b) {
      e = k(b, "SECTION", { style: !0, class: !0 });
      var C = $(e);
      (t = k(C, "DIV", { class: !0 })),
        $(t).forEach(y),
        (s = R(C)),
        (n = k(C, "DIV", { class: !0 }));
      var w = $(n);
      (i = k(w, "H1", { class: !0, "data-svelte-h": !0 })),
        J(i) !== "svelte-hdrbne" && (i.textContent = r),
        (l = R(w)),
        (a = k(w, "P", { class: !0, "data-svelte-h": !0 })),
        J(a) !== "svelte-dufqoa" && (a.textContent = c),
        (d = R(w)),
        (m = k(w, "DIV", { class: !0 }));
      var z = $(m);
      (_ = k(z, "VIDEO", { src: !0, class: !0, style: !0 })),
        $(_).forEach(y),
        (E = R(z)),
        (I = k(z, "DIV", { class: !0, "data-svelte-h": !0 })),
        J(I) !== "svelte-onl2ww" && (I.innerHTML = q),
        z.forEach(y),
        (v = R(w)),
        (N = k(w, "P", { class: !0, "data-svelte-h": !0 })),
        J(N) !== "svelte-67my39" && (N.textContent = P),
        (f = R(w)),
        (h = k(w, "P", { class: !0, "data-svelte-h": !0 })),
        J(h) !== "svelte-1cy7cv4" && (h.textContent = p),
        (x = R(w)),
        (D = k(w, "A", {
          href: !0,
          target: !0,
          class: !0,
          "data-svelte-h": !0,
        })),
        J(D) !== "svelte-8g6ejo" && (D.innerHTML = j),
        w.forEach(y),
        (T = R(C)),
        M && M.l(C),
        C.forEach(y),
        this.h();
    },
    h() {
      g(
        t,
        "class",
        "absolute inset-0 bg-gradient-to-b from-transparent via-green-300/10 to-purple-300/10"
      ),
        g(
          i,
          "class",
          "animate-wiggle cartoon-3d-text mb-4 text-4xl font-bold md:text-6xl svelte-edwtm8"
        ),
        g(
          a,
          "class",
          "animate-float cartoon-text mb-8 text-xl md:text-2xl svelte-edwtm8"
        ),
        re(_.src, (O = "hello.mp4")) || g(_, "src", O),
        (_.muted = !0),
        (_.autoplay = !0),
        (_.loop = !0),
        (_.playsInline = !0),
        g(
          _,
          "class",
          "animate-spin-slow mx-auto h-48 w-48 rounded-full border-4 border-green-400 bg-black/40 object-cover ring-2 ring-purple-400 backdrop-blur-sm hover:animate-spin xl:h-72 xl:w-72 svelte-edwtm8"
        ),
        F(_, "transform", "translateY(" + o[1] + "px)"),
        g(
          I,
          "class",
          "animate-bounce-slow absolute left-0 right-0 top-0 -translate-x-1/2 translate-y-1/2 svelte-edwtm8"
        ),
        g(m, "class", "animate-slide-in relative mb-8 svelte-edwtm8"),
        g(
          N,
          "class",
          "animate-slide-in2 cartoon-text mb-4 animate-pulse text-4xl svelte-edwtm8"
        ),
        g(
          h,
          "class",
          "animate-slide-in cartoon-text relative z-50 mb-8 text-xs font-bold text-purple-600 xl:text-4xl svelte-edwtm8"
        ),
        g(
          D,
          "href",
          "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xD9D7cF820dcAe342CD7225cAcEC931A70C5d328B"
        ),
        g(D, "target", "_blank"),
        g(
          D,
          "class",
          "cartoon-button relative z-50 animate-pulse rounded-full bg-yellow-400 px-4 py-2 text-2xl font-bold text-green-800 transition-transform duration-300 hover:scale-110 hover:bg-yellow-500 svelte-edwtm8"
        ),
        g(n, "class", "animate-scale-in relative svelte-edwtm8"),
        F(e, "background-image", "url(/lzd.gif)"),
        g(
          e,
          "class",
          "relative overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-12 text-center svelte-edwtm8"
        );
    },
    m(b, C) {
      G(b, e, C),
        u(e, t),
        u(e, s),
        u(e, n),
        u(n, i),
        u(n, l),
        u(n, a),
        u(n, d),
        u(n, m),
        u(m, _),
        u(m, E),
        u(m, I),
        u(n, v),
        u(n, N),
        u(n, f),
        u(n, h),
        u(n, x),
        u(n, D),
        u(e, T),
        M && M.m(e, null),
        L ||
          ((K = [
            de(e, "mousemove", o[2]),
            de(e, "mouseenter", o[3]),
            de(e, "mouseleave", o[4]),
          ]),
          (L = !0));
    },
    p(b, [C]) {
      C & 2 && F(_, "transform", "translateY(" + b[1] + "px)"),
        b[0]
          ? M
            ? M.p(b, C)
            : ((M = Re(b)), M.c(), M.m(e, null))
          : M && (M.d(1), (M = null));
    },
    i: V,
    o: V,
    d(b) {
      b && y(e), M && M.d(), (L = !1), tt(K);
    },
  };
}
function ft(o, e, t) {
  let s = !1,
    n = 0;
  function i(a) {
    (a.clientX / window.innerWidth - 0.5) * 20,
      t(1, (n = (a.clientY / window.innerHeight - 0.5) * 20));
  }
  return [s, n, i, () => t(0, (s = !0)), () => t(0, (s = !1))];
}
class pt extends le {
  constructor(e) {
    super(), ce(this, e, ft, dt, ae, {});
  }
}
function mt(o) {
  let e,
    t =
      '<h2 class="mb-8 text-4xl font-bold text-purple-700 transform -rotate-2 animate-pulse cartoon-3d-text">How to Grab Your $GROYPER</h2> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative z-10"><div class="rounded-lg bg-black/40 backdrop-blur-sm p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-green-500 border-dashed"><h3 class="mb-2 text-2xl font-bold text-green-600 transform -skew-x-6 cartoon-3d-text">1. Summon Your Wallet</h3> <p class="text-lg text-emerald-500">Download Phantom or your favorite Ethereum wallet. For desktop Groypers, snag the browser extension from Phantom.</p></div> <div class="rounded-lg bg-black/40 backdrop-blur-sm p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-yellow-500 border-dashed"><h3 class="mb-2 text-2xl font-bold text-yellow-600 transform skew-x-6 cartoon-3d-text">2. Stack Some ETH</h3> <p class="text-lg text-emerald-500">Make sure your wallet&#39;s loaded with ETH to swap for $GROYPER. Grab it from an exchange or directly through your wallet.</p></div> <div class="rounded-lg bg-black/40 backdrop-blur-sm p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-blue-500 border-dashed"><h3 class="mb-2 text-2xl font-bold text-blue-600 transform -skew-x-6 cartoon-3d-text">3. Uniswap Joyride</h3> <p class="text-lg text-emerald-500">Blast off to Uniswap and connect your wallet. Paste in the $GROYPER token address and select it like a pro memer.</p></div> <div class="rounded-lg bg-black/40 backdrop-blur-sm p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 border-4 border-purple-500 border-dashed"><h3 class="mb-2 text-2xl font-bold text-purple-600 transform skew-x-6 cartoon-3d-text">4. Swap ETH for $GROYPER</h3> <p class="text-lg text-emerald-500">Set your slippage, smash that &quot;swap&quot; button, and ride the meme wave! Adjust if the market&#39;s going bananas.</p></div></div> <div class="absolute top-0 left-0 w-full h-full pointer-events-none"><img src="/groypers/8.png" alt="Dancing Pepe" class="absolute w-20 h-20 graffiti-sticker svelte-lzvctg" style="top: 5%; left: 5%;"/> <img src="/groypers/11.png" alt="Dancing Pepe" class="absolute w-20 h-20 z-50 graffiti-sticker svelte-lzvctg" style="top: 70%; right: 5%;"/></div>';
  return {
    c() {
      (e = S("section")), (e.innerHTML = t), this.h();
    },
    l(s) {
      (e = k(s, "SECTION", { class: !0, style: !0, "data-svelte-h": !0 })),
        J(e) !== "svelte-170o5fp" && (e.innerHTML = t),
        this.h();
    },
    h() {
      g(
        e,
        "class",
        "bg-gradient-to-r from-green-400 via-yellow-300 to-green-200 py-12 px-4 text-center relative overflow-hidden"
      ),
        F(
          e,
          "background-image",
          "url(https://i.pinimg.com/originals/35/88/19/35881949612fe8e00b19e4a4703eac95.jpg)"
        );
    },
    m(s, n) {
      G(s, e, n);
    },
    p: V,
    i: V,
    o: V,
    d(s) {
      s && y(e);
    },
  };
}
class gt extends le {
  constructor(e) {
    super(), ce(this, e, null, mt, ae, {});
  }
}
function je(o, e, t) {
  const s = o.slice();
  return (s[4] = e[t]), s;
}
function Me(o) {
  let e,
    t = o[4] + "",
    s;
  return {
    c() {
      (e = S("span")), (s = W(t)), this.h();
    },
    l(n) {
      e = k(n, "SPAN", { class: !0 });
      var i = $(e);
      (s = B(i, t)), i.forEach(y), this.h();
    },
    h() {
      g(
        e,
        "class",
        "mx-8 text-2xl font-bold text-purple-700 marquee-item svelte-sd3xc0"
      );
    },
    m(n, i) {
      G(n, e, i), u(e, s);
    },
    p: V,
    d(n) {
      n && y(e);
    },
  };
}
function bt(o) {
  let e,
    t,
    s,
    n,
    i,
    r,
    l = H([...o[3], ...o[3]]),
    a = [];
  for (let c = 0; c < l.length; c += 1) a[c] = Me(je(o, l, c));
  return {
    c() {
      (e = S("div")),
        (t = S("div")),
        (s = A()),
        (n = S("div")),
        (i = A()),
        (r = S("div"));
      for (let c = 0; c < a.length; c += 1) a[c].c();
      this.h();
    },
    l(c) {
      e = k(c, "DIV", { class: !0 });
      var d = $(e);
      (t = k(d, "DIV", { class: !0 })),
        $(t).forEach(y),
        (s = R(d)),
        (n = k(d, "DIV", { class: !0 })),
        $(n).forEach(y),
        (i = R(d)),
        (r = k(d, "DIV", { class: !0, style: !0 }));
      var m = $(r);
      for (let _ = 0; _ < a.length; _ += 1) a[_].l(m);
      m.forEach(y), d.forEach(y), this.h();
    },
    h() {
      g(t, "class", "marquee-border-top svelte-sd3xc0"),
        g(n, "class", "marquee-border-bottom svelte-sd3xc0"),
        g(r, "class", "marquee svelte-sd3xc0"),
        F(r, "animation-duration", o[2][o[1]]),
        F(r, "animation-direction", o[0] === "left" ? "normal" : "reverse"),
        g(
          e,
          "class",
          "marquee-container bg-black/80 py-4 overflow-hidden relative svelte-sd3xc0"
        );
    },
    m(c, d) {
      G(c, e, d), u(e, t), u(e, s), u(e, n), u(e, i), u(e, r);
      for (let m = 0; m < a.length; m += 1) a[m] && a[m].m(r, null);
    },
    p(c, [d]) {
      if (d & 8) {
        l = H([...c[3], ...c[3]]);
        let m;
        for (m = 0; m < l.length; m += 1) {
          const _ = je(c, l, m);
          a[m] ? a[m].p(_, d) : ((a[m] = Me(_)), a[m].c(), a[m].m(r, null));
        }
        for (; m < a.length; m += 1) a[m].d(1);
        a.length = l.length;
      }
      d & 2 && F(r, "animation-duration", c[2][c[1]]),
        d & 1 &&
          F(r, "animation-direction", c[0] === "left" ? "normal" : "reverse");
    },
    i: V,
    o: V,
    d(c) {
      c && y(e), oe(a, c);
    },
  };
}
function yt(o, e, t) {
  let { direction: s = "left" } = e,
    { speed: n = "medium" } = e;
  const i = { slow: "40s", medium: "30s", fast: "20s" },
    r = [
      "🐸 Groypers: The internet's most dedicated shitposters!",
      "👑 Frogs were mock symbols of foolish aspiration's",
      "🎭 Egyptian frog goddess of birth Heket",
      "🌐 Making the online world a funnier place, one troll at a time",
      "🎤 Frog appears widely as a fertility an resurrection symbol",
      "🍪 Got milk? We've got cookies... and controversial opinions!",
      "🐸 Pepe's cooler cousin: The Groyper army is here!",
      "🎭 Frog images were used to invoke rain in ancient China",
      "👽 Groypers: Making conspiracy theories great again!",
      "🎯 Target acquired: Your feelings. Prepare for trolling.",
      "💥 Trolling level: Expert. Meme warfare is our specialty.",
      "🔐 In Vedic myth a great frog as the primordial state of undifferentiated matter that  supports the earth.",
      "🎬 Breaking news: Groypers just crashed the mainstream narrative (again).",
      "🚨 Trigger alert! Groypers incoming—hide your daughters.",
      "🗳️ Vote for memes: The internet's real currency.",
      "👾 Groypers: Trolling the simulation since day one.",
    ];
  return (
    (o.$$set = (l) => {
      "direction" in l && t(0, (s = l.direction)),
        "speed" in l && t(1, (n = l.speed));
    }),
    [s, n, i, r]
  );
}
class ye extends le {
  constructor(e) {
    super(), ce(this, e, yt, bt, ae, { direction: 0, speed: 1 });
  }
}
function st(o) {
  const e = o - 1;
  return e * e * e + 1;
}
function vt(o) {
  return Math.sin((-13 * (o + 1) * Math.PI) / 2) * Math.pow(2, -10 * o) + 1;
}
function ke(o, { delay: e = 0, duration: t = 400, easing: s = at } = {}) {
  const n = +getComputedStyle(o).opacity;
  return { delay: e, duration: t, easing: s, css: (i) => `opacity: ${i * n}` };
}
function Ce(
  o,
  {
    delay: e = 0,
    duration: t = 400,
    easing: s = st,
    x: n = 0,
    y: i = 0,
    opacity: r = 0,
  } = {}
) {
  const l = getComputedStyle(o),
    a = +l.opacity,
    c = l.transform === "none" ? "" : l.transform,
    d = a * (1 - r),
    [m, _] = Oe(n),
    [O, E] = Oe(i);
  return {
    delay: e,
    duration: t,
    easing: s,
    css: (I, q) => `
			transform: ${c} translate(${(1 - I) * m}${_}, ${(1 - I) * O}${E});
			opacity: ${a - d * q}`,
  };
}
function wt(
  o,
  {
    delay: e = 0,
    duration: t = 400,
    easing: s = st,
    start: n = 0,
    opacity: i = 0,
  } = {}
) {
  const r = getComputedStyle(o),
    l = +r.opacity,
    a = r.transform === "none" ? "" : r.transform,
    c = 1 - n,
    d = l * (1 - i);
  return {
    delay: e,
    duration: t,
    easing: s,
    css: (m, _) => `
			transform: ${a} scale(${1 - c * _});
			opacity: ${l - d * _}
		`,
  };
}
function De(o, e, t) {
  const s = o.slice();
  return (s[4] = e[t]), (s[6] = t), s;
}
function _t(o, e, t) {
  const s = o.slice();
  return (s[7] = e[t]), (s[6] = t), s;
}
function Le(o, e, t) {
  const s = o.slice();
  return (s[9] = e[t]), (s[6] = t), s;
}
function Ge(o) {
  let e,
    t,
    s,
    n,
    i,
    r,
    l,
    a,
    c,
    d,
    m,
    _,
    O,
    E,
    I,
    q = H(o[1]),
    v = [];
  for (let f = 0; f < q.length; f += 1) v[f] = Fe(Le(o, q, f));
  let N = H(["DexScreener", "Uniswap", "Telegram", "Twitter/X"]),
    P = [];
  for (let f = 0; f < 4; f += 1) P[f] = St(_t(o, N, f));
  return {
    c() {
      e = S("h2");
      for (let f = 0; f < v.length; f += 1) v[f].c();
      (s = A()), (n = S("div"));
      for (let f = 0; f < 4; f += 1) P[f].c();
      (i = A()),
        (r = S("div")),
        (l = S("div")),
        (a = S("img")),
        (m = A()),
        (_ = S("div")),
        (O = S("img")),
        this.h();
    },
    l(f) {
      e = k(f, "H2", { class: !0 });
      var h = $(e);
      for (let T = 0; T < v.length; T += 1) v[T].l(h);
      h.forEach(y), (s = R(f)), (n = k(f, "DIV", { class: !0 }));
      var p = $(n);
      for (let T = 0; T < 4; T += 1) P[T].l(p);
      p.forEach(y), (i = R(f)), (r = k(f, "DIV", { class: !0 }));
      var x = $(r);
      l = k(x, "DIV", { class: !0, style: !0 });
      var D = $(l);
      (a = k(D, "IMG", { src: !0, alt: !0, class: !0 })),
        D.forEach(y),
        (m = R(x)),
        (_ = k(x, "DIV", { class: !0, style: !0 }));
      var j = $(_);
      (O = k(j, "IMG", { src: !0, alt: !0, class: !0 })),
        j.forEach(y),
        x.forEach(y),
        this.h();
    },
    h() {
      g(
        e,
        "class",
        "text-4xl md:text-5xl mb-8 font-extrabold relative z-10 cartoon-3d-text"
      ),
        g(n, "class", "flex flex-wrap justify-center gap-6 relative "),
        re(a.src, (c = "/groypers/7.png")) || g(a, "src", c),
        g(a, "alt", "Dancing Groyper"),
        g(a, "class", "w-full h-full object-contain"),
        g(l, "class", "graffiti-sticker svelte-sob66s"),
        F(l, "top", "10%"),
        F(l, "left", "5%"),
        re(O.src, (E = "/groypers/4.png")) || g(O, "src", E),
        g(O, "alt", "Dancing Groyper"),
        g(O, "class", "w-full h-full object-contain"),
        g(_, "class", "graffiti-sticker svelte-sob66s"),
        F(_, "bottom", "10%"),
        F(_, "right", "5%"),
        g(
          r,
          "class",
          "absolute top-0 left-0 w-full h-full pointer-events-none"
        );
    },
    m(f, h) {
      G(f, e, h);
      for (let p = 0; p < v.length; p += 1) v[p] && v[p].m(e, null);
      G(f, s, h), G(f, n, h);
      for (let p = 0; p < 4; p += 1) P[p] && P[p].m(n, null);
      G(f, i, h), G(f, r, h), u(r, l), u(l, a), u(r, m), u(r, _), u(_, O);
    },
    p(f, h) {
      if (h & 2) {
        q = H(f[1]);
        let p;
        for (p = 0; p < q.length; p += 1) {
          const x = Le(f, q, p);
          v[p] ? v[p].p(x, h) : ((v[p] = Fe(x)), v[p].c(), v[p].m(e, null));
        }
        for (; p < v.length; p += 1) v[p].d(1);
        v.length = q.length;
      }
    },
    i(f) {
      f &&
        (t ||
          ue(() => {
            (t = fe(e, wt, { duration: 1e3, easing: vt })), t.start();
          }));
      for (let h = 0; h < 4; h += 1) U(P[h]);
      f &&
        (d ||
          ue(() => {
            (d = fe(a, ke, { duration: 1e3 })), d.start();
          })),
        f &&
          (I ||
            ue(() => {
              (I = fe(O, ke, { duration: 1e3, delay: 500 })), I.start();
            }));
    },
    o: V,
    d(f) {
      f && (y(e), y(s), y(n), y(i), y(r)), oe(v, f), oe(P, f);
    },
  };
}
function Fe(o) {
  let e,
    t = o[9] + "",
    s;
  return {
    c() {
      (e = S("span")), (s = W(t)), this.h();
    },
    l(n) {
      e = k(n, "SPAN", { style: !0 });
      var i = $(e);
      (s = B(i, t)), i.forEach(y), this.h();
    },
    h() {
      F(e, "color", "hsl(" + (o[6] * 360) / o[1].length + ", 100%, 50%)"),
        F(
          e,
          "animation",
          "wobble " + (1 + o[6] * 0.1) + "s ease-in-out infinite"
        );
    },
    m(n, i) {
      G(n, e, i), u(e, s);
    },
    p(n, i) {
      i & 2 && t !== (t = n[9] + "") && ve(s, t),
        i & 2 &&
          F(e, "color", "hsl(" + (n[6] * 360) / n[1].length + ", 100%, 50%)");
    },
    d(n) {
      n && y(e);
    },
  };
}
function St(o) {
  let e,
    t,
    s =
      o[7] === "DexScreener"
        ? "📊"
        : o[7] === "Uniswap"
        ? "🦄"
        : o[7] === "Telegram"
        ? "📱"
        : "🐦",
    n,
    i,
    r,
    l,
    a;
  return {
    c() {
      (e = S("a")),
        (t = S("span")),
        (n = W(s)),
        (i = A()),
        (r = W(o[7])),
        (l = A()),
        this.h();
    },
    l(c) {
      e = k(c, "A", { href: !0, target: !0, rel: !0, class: !0 });
      var d = $(e);
      t = k(d, "SPAN", { class: !0 });
      var m = $(t);
      (n = B(m, s)),
        m.forEach(y),
        (i = R(d)),
        (r = B(d, o[7])),
        (l = R(d)),
        d.forEach(y),
        this.h();
    },
    h() {
      g(t, "class", "emoji svelte-sob66s"),
        g(
          e,
          "href",
          o[7] === "DexScreener"
            ? "https://dexscreener.com/ethereum/0x00000000000000000000000000000000000000"
            : o[7] === "Uniswap"
            ? "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xD9D7cF820dcAe342CD7225cAcEC931A70C5d328B"
            : o[7] === "Telegram"
            ? "https://t.me/wargroypereth"
            : "https://x.com/wargroypereth"
        ),
        g(e, "target", "_blank"),
        g(e, "rel", "noopener noreferrer"),
        g(e, "class", "social-link bg-black/60 z-10 svelte-sob66s");
    },
    m(c, d) {
      G(c, e, d), u(e, t), u(t, n), u(e, i), u(e, r), u(e, l);
    },
    p: V,
    i(c) {
      c &&
        (a ||
          ue(() => {
            (a = fe(e, Ce, { y: 200, duration: 1e3, delay: o[6] * 200 })),
              a.start();
          }));
    },
    o: V,
    d(c) {
      c && y(e);
    },
  };
}
function Ne(o) {
  let e,
    t,
    s,
    n,
    i,
    r = o[4].name + "",
    l,
    a,
    c,
    d = o[4].description + "",
    m,
    _,
    O;
  return {
    c() {
      (e = S("div")),
        (t = S("img")),
        (n = A()),
        (i = S("h3")),
        (l = W(r)),
        (a = A()),
        (c = S("p")),
        (m = W(d)),
        (_ = A()),
        this.h();
    },
    l(E) {
      e = k(E, "DIV", { class: !0 });
      var I = $(e);
      (t = k(I, "IMG", { src: !0, alt: !0, class: !0 })),
        (n = R(I)),
        (i = k(I, "H3", { class: !0 }));
      var q = $(i);
      (l = B(q, r)), q.forEach(y), (a = R(I)), (c = k(I, "P", { class: !0 }));
      var v = $(c);
      (m = B(v, d)), v.forEach(y), (_ = R(I)), I.forEach(y), this.h();
    },
    h() {
      re(t.src, (s = o[4].image)) || g(t, "src", s),
        g(t, "alt", o[4].name),
        g(
          t,
          "class",
          "w-full h-64 object-cover rounded-lg mb-4 border-4 border-purple-400 shadow-lg"
        ),
        g(i, "class", "text-3xl font-bold mb-2 cartoon-3d-text"),
        g(c, "class", "text-lg "),
        g(
          e,
          "class",
          "bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-xl max-w-sm w-full transform transition-all duration-300 hover:scale-105 hover:rotate-1"
        );
    },
    m(E, I) {
      G(E, e, I),
        u(e, t),
        u(e, n),
        u(e, i),
        u(i, l),
        u(e, a),
        u(e, c),
        u(c, m),
        u(e, _);
    },
    p: V,
    i(E) {
      E &&
        (O ||
          ue(() => {
            (O = fe(e, Ce, { y: 50, duration: 1e3, delay: o[6] * 200 })),
              O.start();
          }));
    },
    o: V,
    d(E) {
      E && y(e);
    },
  };
}
function kt(o) {
  let e,
    t,
    s,
    n,
    i,
    r,
    l,
    a,
    c,
    d,
    m,
    _,
    O = "The 3 Main Meme Amphibians",
    E,
    I,
    q = "NOT ALL GREEN AMPHIBIANS ARE THE SAME!!!",
    v,
    N,
    P,
    f = o[0] && Ge(o);
  l = new ye({ props: { direction: "left", speed: "slow" } });
  let h = H(o[2]),
    p = [];
  for (let x = 0; x < h.length; x += 1) p[x] = Ne(De(o, h, x));
  return {
    c() {
      (e = S("section")),
        (t = S("div")),
        (s = A()),
        (n = S("div")),
        (i = A()),
        f && f.c(),
        (r = A()),
        Q(l.$$.fragment),
        (a = A()),
        (c = S("section")),
        (d = S("div")),
        (m = A()),
        (_ = S("h2")),
        (_.textContent = O),
        (E = A()),
        (I = S("p")),
        (I.textContent = q),
        (v = A()),
        (N = S("div"));
      for (let x = 0; x < p.length; x += 1) p[x].c();
      this.h();
    },
    l(x) {
      e = k(x, "SECTION", { class: !0, style: !0 });
      var D = $(e);
      (t = k(D, "DIV", { class: !0 })),
        $(t).forEach(y),
        (s = R(D)),
        (n = k(D, "DIV", { class: !0 })),
        $(n).forEach(y),
        (i = R(D)),
        f && f.l(D),
        D.forEach(y),
        (r = R(x)),
        Z(l.$$.fragment, x),
        (a = R(x)),
        (c = k(x, "SECTION", { class: !0, style: !0 }));
      var j = $(c);
      (d = k(j, "DIV", { class: !0 })),
        $(d).forEach(y),
        (m = R(j)),
        (_ = k(j, "H2", { class: !0, "data-svelte-h": !0 })),
        J(_) !== "svelte-1ifoab2" && (_.textContent = O),
        (E = R(j)),
        (I = k(j, "P", { class: !0, "data-svelte-h": !0 })),
        J(I) !== "svelte-jcr4yz" && (I.textContent = q),
        (v = R(j)),
        (N = k(j, "DIV", { class: !0 }));
      var T = $(N);
      for (let L = 0; L < p.length; L += 1) p[L].l(T);
      T.forEach(y), j.forEach(y), this.h();
    },
    h() {
      g(
        t,
        "class",
        "absolute inset-0 bg-gradient-to-b from-transparent via-purple-300/20 to-green-300/80"
      ),
        g(
          n,
          "class",
          "absolute inset-0 bg-opacity-20 bg-green-600 animate-pulse"
        ),
        g(
          e,
          "class",
          "bg-gradient-to-br xl:py-24 py-4 from-green-400 via-yellow-300 to-green-200 py-12 px-4 text-center relative overflow-hidden svelte-sob66s"
        ),
        F(e, "background-image", "url(/wall.jpeg)"),
        g(
          d,
          "class",
          "absolute inset-0 bg-gradient-to-t from-green-300/80 via-transparent to-green-300/80"
        ),
        g(
          _,
          "class",
          "text-4xl md:text-5xl mb-4 font-extrabold text-purple-800 cartoon-3d-text relative z-10"
        ),
        g(
          I,
          "class",
          "text-2xl md:text-3xl mb-12 font-bold text-purple-600 cartoon-text relative z-10"
        ),
        g(N, "class", "flex flex-wrap justify-center gap-8 relative z-10"),
        g(
          c,
          "class",
          "bg-gradient-to-t from-blue-400 via-purple-300 to-pink-200 py-16 px-4 text-center relative overflow-hidden xl:bg-cover bg-contain bg-center  svelte-sob66s"
        ),
        F(c, "background-image", "url(/back2.jpg)");
    },
    m(x, D) {
      G(x, e, D),
        u(e, t),
        u(e, s),
        u(e, n),
        u(e, i),
        f && f.m(e, null),
        G(x, r, D),
        ee(l, x, D),
        G(x, a, D),
        G(x, c, D),
        u(c, d),
        u(c, m),
        u(c, _),
        u(c, E),
        u(c, I),
        u(c, v),
        u(c, N);
      for (let j = 0; j < p.length; j += 1) p[j] && p[j].m(N, null);
      P = !0;
    },
    p(x, [D]) {
      if (
        (x[0]
          ? f
            ? (f.p(x, D), D & 1 && U(f, 1))
            : ((f = Ge(x)), f.c(), U(f, 1), f.m(e, null))
          : f && (f.d(1), (f = null)),
        D & 4)
      ) {
        h = H(x[2]);
        let j;
        for (j = 0; j < h.length; j += 1) {
          const T = De(x, h, j);
          p[j]
            ? (p[j].p(T, D), U(p[j], 1))
            : ((p[j] = Ne(T)), p[j].c(), U(p[j], 1), p[j].m(N, null));
        }
        for (; j < p.length; j += 1) p[j].d(1);
        p.length = h.length;
      }
    },
    i(x) {
      if (!P) {
        U(f), U(l.$$.fragment, x);
        for (let D = 0; D < h.length; D += 1) U(p[D]);
        P = !0;
      }
    },
    o(x) {
      te(l.$$.fragment, x), (P = !1);
    },
    d(x) {
      x && (y(e), y(r), y(a), y(c)), f && f.d(), se(l, x), oe(p, x);
    },
  };
}
function Ct(o, e, t) {
  let s = !1,
    n = "";
  _e(() => {
    t(0, (s = !0)), i();
  });
  function i() {
    const l = "Join Groyper's Meme Madness!";
    let a = 0;
    const c = setInterval(() => {
      t(1, (n += l[a])), a++, a === l.length && clearInterval(c);
    }, 100);
  }
  return [
    s,
    n,
    [
      {
        name: "Apu Apustaja",
        image: "/apu.png",
        description:
          "The helper fren, he originated as a redrawing of pepe on the Finnish imageboard Ylilauta. He is general depicted as innocent and child-like",
      },
      {
        name: "Groyper",
        image: "/groyper.png",
        description:
          "Groyper is a toad who is friends with pepe, he originated on 4chans /r9k/ board. Generally depicted as smug, more so than Pepe",
      },
      {
        name: "Pepe the Frog",
        image: "/pepe.jpg",
        description:
          'The OG, based on the character of the same name from the comic "Boys Club" and was popularised by 4chan and Tumblr in 2008',
      },
    ],
  ];
}
class xt extends le {
  constructor(e) {
    super(), ce(this, e, Ct, kt, ae, {});
  }
}
function Ue(o, e, t) {
  const s = o.slice();
  return (s[3] = e[t]), s;
}
function Ve(o, e, t) {
  const s = o.slice();
  return (s[6] = e[t]), s;
}
function He(o) {
  let e,
    t,
    s = "Groyper's Primeval State 🎵",
    n,
    i,
    r,
    l,
    a,
    c,
    d,
    m = "The frog, a foetal symbol 🐸",
    _,
    O,
    E = o[1] ? "🔼" : "🔽",
    I,
    q,
    v,
    N =
      '<iframe class="absolute top-0 left-0 w-full h-full z-10 " src="https://www.youtube.com/embed/sGr0jUMz_Tw" title="Watch this" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>',
    P,
    f,
    h,
    p,
    x,
    D,
    j,
    T = H(["🎵", "🎶", "🎸", "🥁", "🎹"]),
    L = [];
  for (let b = 0; b < 5; b += 1) L[b] = ze(Ve(o, T, b));
  let K = H(Array(20)),
    M = [];
  for (let b = 0; b < K.length; b += 1) M[b] = Ke(Ue(o, K, b));
  return {
    c() {
      (e = S("div")),
        (t = S("h2")),
        (t.textContent = s),
        (n = A()),
        (i = S("div")),
        (r = S("div")),
        (l = A()),
        (a = S("div")),
        (c = S("div")),
        (d = S("span")),
        (d.textContent = m),
        (_ = A()),
        (O = S("button")),
        (I = W(E)),
        (q = A()),
        (v = S("div")),
        (v.innerHTML = N),
        (P = A()),
        (f = S("div"));
      for (let b = 0; b < 5; b += 1) L[b].c();
      (p = A()), (x = S("div"));
      for (let b = 0; b < M.length; b += 1) M[b].c();
      this.h();
    },
    l(b) {
      e = k(b, "DIV", { class: !0 });
      var C = $(e);
      (t = k(C, "H2", { class: !0, "data-svelte-h": !0 })),
        J(t) !== "svelte-154zbu8" && (t.textContent = s),
        (n = R(C)),
        (i = k(C, "DIV", { class: !0 }));
      var w = $(i);
      (r = k(w, "DIV", { class: !0 })),
        $(r).forEach(y),
        (l = R(w)),
        (a = k(w, "DIV", { class: !0 }));
      var z = $(a);
      c = k(z, "DIV", { class: !0 });
      var ie = $(c);
      (d = k(ie, "SPAN", { class: !0, "data-svelte-h": !0 })),
        J(d) !== "svelte-xw21c9" && (d.textContent = m),
        (_ = R(ie)),
        (O = k(ie, "BUTTON", { class: !0 }));
      var be = $(O);
      (I = B(be, E)),
        be.forEach(y),
        ie.forEach(y),
        (q = R(z)),
        (v = k(z, "DIV", { class: !0, "data-svelte-h": !0 })),
        J(v) !== "svelte-1a2u2zo" && (v.innerHTML = N),
        z.forEach(y),
        w.forEach(y),
        (P = R(C)),
        (f = k(C, "DIV", { class: !0 }));
      var ne = $(f);
      for (let he = 0; he < 5; he += 1) L[he].l(ne);
      ne.forEach(y), C.forEach(y), (p = R(b)), (x = k(b, "DIV", { class: !0 }));
      var Ee = $(x);
      for (let he = 0; he < M.length; he += 1) M[he].l(Ee);
      Ee.forEach(y), this.h();
    },
    h() {
      g(
        t,
        "class",
        "text-4xl md:text-6xl font-extrabold text-white text-center mb-8 animate-pulse"
      ),
        g(
          r,
          "class",
          "absolute inset-0 bg-white opacity-20 rounded-3xl animate-ping"
        ),
        g(d, "class", "text-xl font-bold text-white"),
        g(
          O,
          "class",
          "text-2xl focus:outline-none transform hover:scale-110 transition-transform duration-200 z-50"
        ),
        g(
          c,
          "class",
          "bg-gradient-to-r from-green-400 to-blue-500 p-4 flex justify-between items-center z-50"
        ),
        g(v, "class", "relative pb-[56.25%] h-0"),
        g(
          a,
          "class",
          "relative bg-black rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out z-50 svelte-19624nt"
        ),
        me(a, "minimized", o[1]),
        g(i, "class", "relative"),
        g(f, "class", "mt-8 flex justify-center space-x-4"),
        g(e, "class", "max-w-6xl mx-auto"),
        g(
          x,
          "class",
          "absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
        );
    },
    m(b, C) {
      G(b, e, C),
        u(e, t),
        u(e, n),
        u(e, i),
        u(i, r),
        u(i, l),
        u(i, a),
        u(a, c),
        u(c, d),
        u(c, _),
        u(c, O),
        u(O, I),
        u(a, q),
        u(a, v),
        u(e, P),
        u(e, f);
      for (let w = 0; w < 5; w += 1) L[w] && L[w].m(f, null);
      G(b, p, C), G(b, x, C);
      for (let w = 0; w < M.length; w += 1) M[w] && M[w].m(x, null);
      D || ((j = de(O, "click", o[2])), (D = !0));
    },
    p(b, C) {
      if (
        (C & 2 && E !== (E = b[1] ? "🔼" : "🔽") && ve(I, E),
        C & 2 && me(a, "minimized", b[1]),
        C & 0)
      ) {
        T = H(["🎵", "🎶", "🎸", "🥁", "🎹"]);
        let w;
        for (w = 0; w < 5; w += 1) {
          const z = Ve(b, T, w);
          L[w]
            ? (L[w].p(z, C), U(L[w], 1))
            : ((L[w] = ze(z)), L[w].c(), U(L[w], 1), L[w].m(f, null));
        }
        for (; w < 5; w += 1) L[w].d(1);
      }
      if (C & 0) {
        K = H(Array(20));
        let w;
        for (w = 0; w < K.length; w += 1) {
          const z = Ue(b, K, w);
          M[w] ? M[w].p(z, C) : ((M[w] = Ke()), M[w].c(), M[w].m(x, null));
        }
        for (; w < M.length; w += 1) M[w].d(1);
        M.length = K.length;
      }
    },
    i(b) {
      for (let C = 0; C < 5; C += 1) U(L[C]);
      b &&
        (h ||
          ue(() => {
            (h = fe(e, ke, { duration: 1e3 })), h.start();
          }));
    },
    o: V,
    d(b) {
      b && (y(e), y(p), y(x)), oe(L, b), oe(M, b), (D = !1), j();
    },
  };
}
function ze(o) {
  let e, t, s, n;
  return {
    c() {
      (e = S("div")), (t = W(o[6])), (s = A()), this.h();
    },
    l(i) {
      e = k(i, "DIV", { class: !0, style: !0 });
      var r = $(e);
      (t = B(r, o[6])), (s = R(r)), r.forEach(y), this.h();
    },
    h() {
      g(e, "class", "text-4xl animate-bounce"),
        F(e, "animation-delay", Math.random() + "s");
    },
    m(i, r) {
      G(i, e, r), u(e, t), u(e, s);
    },
    p(i, r) {
      o = i;
    },
    i(i) {
      i &&
        (n ||
          ue(() => {
            (n = fe(e, Ce, {
              y: 50,
              duration: 1e3,
              delay: 200 * Math.random(),
            })),
              n.start();
          }));
    },
    o: V,
    d(i) {
      i && y(e);
    },
  };
}
function Ke(o) {
  let e, t;
  return {
    c() {
      (e = S("div")),
        (t = W(`🐸
          `)),
        this.h();
    },
    l(s) {
      e = k(s, "DIV", { class: !0, style: !0 });
      var n = $(e);
      (t = B(
        n,
        `🐸
          `
      )),
        n.forEach(y),
        this.h();
    },
    h() {
      g(e, "class", "absolute text-2xl animate-float svelte-19624nt"),
        F(e, "left", Math.random() * 100 + "vw"),
        F(e, "top", Math.random() * 100 + "vh"),
        F(e, "animation-duration", 5 + Math.random() * 10 + "s"),
        F(e, "animation-delay", "-" + Math.random() * 5 + "s");
    },
    m(s, n) {
      G(s, e, n), u(e, t);
    },
    p: V,
    d(s) {
      s && y(e);
    },
  };
}
function Et(o) {
  let e,
    t = o[0] && He(o);
  return {
    c() {
      (e = S("section")), t && t.c(), this.h();
    },
    l(s) {
      e = k(s, "SECTION", { class: !0, style: !0 });
      var n = $(e);
      t && t.l(n), n.forEach(y), this.h();
    },
    h() {
      g(
        e,
        "class",
        "relative py-16 px-4 overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 bg-cover bg-center"
      ),
        F(
          e,
          "background-image",
          "url('https://wallpaper.forfun.com/fetch/53/532ff1ceadd8a661ca9f7bb97879a9c0.jpeg?w=1600')"
        );
    },
    m(s, n) {
      G(s, e, n), t && t.m(e, null);
    },
    p(s, [n]) {
      s[0]
        ? t
          ? (t.p(s, n), n & 1 && U(t, 1))
          : ((t = He(s)), t.c(), U(t, 1), t.m(e, null))
        : t && (t.d(1), (t = null));
    },
    i(s) {
      U(t);
    },
    o: V,
    d(s) {
      s && y(e), t && t.d();
    },
  };
}
function Ot(o, e, t) {
  let s = !1,
    n = !1;
  function i() {
    t(1, (n = !n));
  }
  return (
    _e(() => {
      t(0, (s = !0));
    }),
    [s, n, i]
  );
}
class It extends le {
  constructor(e) {
    super(), ce(this, e, Ot, Et, ae, {});
  }
}
class X extends Error {
  constructor(e) {
    var t, s, n, i;
    super("ClientResponseError"),
      (this.url = ""),
      (this.status = 0),
      (this.response = {}),
      (this.isAbort = !1),
      (this.originalError = null),
      Object.setPrototypeOf(this, X.prototype),
      e !== null &&
        typeof e == "object" &&
        ((this.url = typeof e.url == "string" ? e.url : ""),
        (this.status = typeof e.status == "number" ? e.status : 0),
        (this.isAbort = !!e.isAbort),
        (this.originalError = e.originalError),
        e.response !== null && typeof e.response == "object"
          ? (this.response = e.response)
          : e.data !== null && typeof e.data == "object"
          ? (this.response = e.data)
          : (this.response = {})),
      this.originalError || e instanceof X || (this.originalError = e),
      typeof DOMException < "u" &&
        e instanceof DOMException &&
        (this.isAbort = !0),
      (this.name = "ClientResponseError " + this.status),
      (this.message = (t = this.response) == null ? void 0 : t.message),
      this.message ||
        (this.isAbort
          ? (this.message =
              "The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation.")
          : (i =
              (n = (s = this.originalError) == null ? void 0 : s.cause) == null
                ? void 0
                : n.message) != null && i.includes("ECONNREFUSED ::1")
          ? (this.message =
              "Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).")
          : (this.message =
              "Something went wrong while processing your request."));
  }
  get data() {
    return this.response;
  }
  toJSON() {
    return { ...this };
  }
}
const we = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function Tt(o, e) {
  const t = {};
  if (typeof o != "string") return t;
  const s = Object.assign({}, {}).decode || Pt;
  let n = 0;
  for (; n < o.length; ) {
    const i = o.indexOf("=", n);
    if (i === -1) break;
    let r = o.indexOf(";", n);
    if (r === -1) r = o.length;
    else if (r < i) {
      n = o.lastIndexOf(";", i - 1) + 1;
      continue;
    }
    const l = o.slice(n, i).trim();
    if (t[l] === void 0) {
      let a = o.slice(i + 1, r).trim();
      a.charCodeAt(0) === 34 && (a = a.slice(1, -1));
      try {
        t[l] = s(a);
      } catch {
        t[l] = a;
      }
    }
    n = r + 1;
  }
  return t;
}
function We(o, e, t) {
  const s = Object.assign({}, t || {}),
    n = s.encode || $t;
  if (!we.test(o)) throw new TypeError("argument name is invalid");
  const i = n(e);
  if (i && !we.test(i)) throw new TypeError("argument val is invalid");
  let r = o + "=" + i;
  if (s.maxAge != null) {
    const l = s.maxAge - 0;
    if (isNaN(l) || !isFinite(l))
      throw new TypeError("option maxAge is invalid");
    r += "; Max-Age=" + Math.floor(l);
  }
  if (s.domain) {
    if (!we.test(s.domain)) throw new TypeError("option domain is invalid");
    r += "; Domain=" + s.domain;
  }
  if (s.path) {
    if (!we.test(s.path)) throw new TypeError("option path is invalid");
    r += "; Path=" + s.path;
  }
  if (s.expires) {
    if (
      !(function (a) {
        return (
          Object.prototype.toString.call(a) === "[object Date]" ||
          a instanceof Date
        );
      })(s.expires) ||
      isNaN(s.expires.valueOf())
    )
      throw new TypeError("option expires is invalid");
    r += "; Expires=" + s.expires.toUTCString();
  }
  if (
    (s.httpOnly && (r += "; HttpOnly"),
    s.secure && (r += "; Secure"),
    s.priority)
  )
    switch (
      typeof s.priority == "string" ? s.priority.toLowerCase() : s.priority
    ) {
      case "low":
        r += "; Priority=Low";
        break;
      case "medium":
        r += "; Priority=Medium";
        break;
      case "high":
        r += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  if (s.sameSite)
    switch (
      typeof s.sameSite == "string" ? s.sameSite.toLowerCase() : s.sameSite
    ) {
      case !0:
        r += "; SameSite=Strict";
        break;
      case "lax":
        r += "; SameSite=Lax";
        break;
      case "strict":
        r += "; SameSite=Strict";
        break;
      case "none":
        r += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return r;
}
function Pt(o) {
  return o.indexOf("%") !== -1 ? decodeURIComponent(o) : o;
}
function $t(o) {
  return encodeURIComponent(o);
}
const At =
  (typeof navigator < "u" && navigator.product === "ReactNative") ||
  (typeof global < "u" && global.HermesInternal);
let nt;
function ge(o) {
  if (o)
    try {
      const e = decodeURIComponent(
        nt(o.split(".")[1])
          .split("")
          .map(function (t) {
            return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(e) || {};
    } catch {}
  return {};
}
function it(o, e = 0) {
  let t = ge(o);
  return !(
    Object.keys(t).length > 0 &&
    (!t.exp || t.exp - e > Date.now() / 1e3)
  );
}
nt =
  typeof atob != "function" || At
    ? (o) => {
        let e = String(o).replace(/=+$/, "");
        if (e.length % 4 == 1)
          throw new Error(
            "'atob' failed: The string to be decoded is not correctly encoded."
          );
        for (
          var t, s, n = 0, i = 0, r = "";
          (s = e.charAt(i++));
          ~s && ((t = n % 4 ? 64 * t + s : s), n++ % 4)
            ? (r += String.fromCharCode(255 & (t >> ((-2 * n) & 6))))
            : 0
        )
          s =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
              s
            );
        return r;
      }
    : atob;
const Be = "pb_auth";
class Rt {
  constructor() {
    (this.baseToken = ""),
      (this.baseModel = null),
      (this._onChangeCallbacks = []);
  }
  get token() {
    return this.baseToken;
  }
  get model() {
    return this.baseModel;
  }
  get isValid() {
    return !it(this.token);
  }
  get isAdmin() {
    return ge(this.token).type === "admin";
  }
  get isAuthRecord() {
    return ge(this.token).type === "authRecord";
  }
  save(e, t) {
    (this.baseToken = e || ""),
      (this.baseModel = t || null),
      this.triggerChange();
  }
  clear() {
    (this.baseToken = ""), (this.baseModel = null), this.triggerChange();
  }
  loadFromCookie(e, t = Be) {
    const s = Tt(e || "")[t] || "";
    let n = {};
    try {
      (n = JSON.parse(s)),
        (typeof n === null || typeof n != "object" || Array.isArray(n)) &&
          (n = {});
    } catch {}
    this.save(n.token || "", n.model || null);
  }
  exportToCookie(e, t = Be) {
    var a, c;
    const s = { secure: !0, sameSite: !0, httpOnly: !0, path: "/" },
      n = ge(this.token);
    (s.expires =
      n != null && n.exp ? new Date(1e3 * n.exp) : new Date("1970-01-01")),
      (e = Object.assign({}, s, e));
    const i = {
      token: this.token,
      model: this.model ? JSON.parse(JSON.stringify(this.model)) : null,
    };
    let r = We(t, JSON.stringify(i), e);
    const l = typeof Blob < "u" ? new Blob([r]).size : r.length;
    if (i.model && l > 4096) {
      i.model = {
        id: (a = i == null ? void 0 : i.model) == null ? void 0 : a.id,
        email: (c = i == null ? void 0 : i.model) == null ? void 0 : c.email,
      };
      const d = ["collectionId", "username", "verified"];
      for (const m in this.model) d.includes(m) && (i.model[m] = this.model[m]);
      r = We(t, JSON.stringify(i), e);
    }
    return r;
  }
  onChange(e, t = !1) {
    return (
      this._onChangeCallbacks.push(e),
      t && e(this.token, this.model),
      () => {
        for (let s = this._onChangeCallbacks.length - 1; s >= 0; s--)
          if (this._onChangeCallbacks[s] == e)
            return (
              delete this._onChangeCallbacks[s],
              void this._onChangeCallbacks.splice(s, 1)
            );
      }
    );
  }
  triggerChange() {
    for (const e of this._onChangeCallbacks) e && e(this.token, this.model);
  }
}
class qt extends Rt {
  constructor(e = "pocketbase_auth") {
    super(),
      (this.storageFallback = {}),
      (this.storageKey = e),
      this._bindStorageEvent();
  }
  get token() {
    return (this._storageGet(this.storageKey) || {}).token || "";
  }
  get model() {
    return (this._storageGet(this.storageKey) || {}).model || null;
  }
  save(e, t) {
    this._storageSet(this.storageKey, { token: e, model: t }), super.save(e, t);
  }
  clear() {
    this._storageRemove(this.storageKey), super.clear();
  }
  _storageGet(e) {
    if (typeof window < "u" && window != null && window.localStorage) {
      const t = window.localStorage.getItem(e) || "";
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    }
    return this.storageFallback[e];
  }
  _storageSet(e, t) {
    if (typeof window < "u" && window != null && window.localStorage) {
      let s = t;
      typeof t != "string" && (s = JSON.stringify(t)),
        window.localStorage.setItem(e, s);
    } else this.storageFallback[e] = t;
  }
  _storageRemove(e) {
    var t;
    typeof window < "u" &&
      window != null &&
      window.localStorage &&
      ((t = window.localStorage) == null || t.removeItem(e)),
      delete this.storageFallback[e];
  }
  _bindStorageEvent() {
    typeof window < "u" &&
      window != null &&
      window.localStorage &&
      window.addEventListener &&
      window.addEventListener("storage", (e) => {
        if (e.key != this.storageKey) return;
        const t = this._storageGet(this.storageKey) || {};
        super.save(t.token || "", t.model || null);
      });
  }
}
class pe {
  constructor(e) {
    this.client = e;
  }
}
class jt extends pe {
  async getAll(e) {
    return (
      (e = Object.assign({ method: "GET" }, e)),
      this.client.send("/api/settings", e)
    );
  }
  async update(e, t) {
    return (
      (t = Object.assign({ method: "PATCH", body: e }, t)),
      this.client.send("/api/settings", t)
    );
  }
  async testS3(e = "storage", t) {
    return (
      (t = Object.assign({ method: "POST", body: { filesystem: e } }, t)),
      this.client.send("/api/settings/test/s3", t).then(() => !0)
    );
  }
  async testEmail(e, t, s) {
    return (
      (s = Object.assign(
        { method: "POST", body: { email: e, template: t } },
        s
      )),
      this.client.send("/api/settings/test/email", s).then(() => !0)
    );
  }
  async generateAppleClientSecret(e, t, s, n, i, r) {
    return (
      (r = Object.assign(
        {
          method: "POST",
          body: {
            clientId: e,
            teamId: t,
            keyId: s,
            privateKey: n,
            duration: i,
          },
        },
        r
      )),
      this.client.send("/api/settings/apple/generate-client-secret", r)
    );
  }
}
class xe extends pe {
  decode(e) {
    return e;
  }
  async getFullList(e, t) {
    if (typeof e == "number") return this._getFullList(e, t);
    let s = 500;
    return (
      (t = Object.assign({}, e, t)).batch && ((s = t.batch), delete t.batch),
      this._getFullList(s, t)
    );
  }
  async getList(e = 1, t = 30, s) {
    return (
      ((s = Object.assign({ method: "GET" }, s)).query = Object.assign(
        { page: e, perPage: t },
        s.query
      )),
      this.client.send(this.baseCrudPath, s).then((n) => {
        var i;
        return (
          (n.items =
            ((i = n.items) == null ? void 0 : i.map((r) => this.decode(r))) ||
            []),
          n
        );
      })
    );
  }
  async getFirstListItem(e, t) {
    return (
      ((t = Object.assign(
        { requestKey: "one_by_filter_" + this.baseCrudPath + "_" + e },
        t
      )).query = Object.assign({ filter: e, skipTotal: 1 }, t.query)),
      this.getList(1, 1, t).then((s) => {
        var n;
        if (!((n = s == null ? void 0 : s.items) != null && n.length))
          throw new X({
            status: 404,
            response: {
              code: 404,
              message: "The requested resource wasn't found.",
              data: {},
            },
          });
        return s.items[0];
      })
    );
  }
  async getOne(e, t) {
    if (!e)
      throw new X({
        url: this.client.buildUrl(this.baseCrudPath + "/"),
        status: 404,
        response: {
          code: 404,
          message: "Missing required record id.",
          data: {},
        },
      });
    return (
      (t = Object.assign({ method: "GET" }, t)),
      this.client
        .send(this.baseCrudPath + "/" + encodeURIComponent(e), t)
        .then((s) => this.decode(s))
    );
  }
  async create(e, t) {
    return (
      (t = Object.assign({ method: "POST", body: e }, t)),
      this.client.send(this.baseCrudPath, t).then((s) => this.decode(s))
    );
  }
  async update(e, t, s) {
    return (
      (s = Object.assign({ method: "PATCH", body: t }, s)),
      this.client
        .send(this.baseCrudPath + "/" + encodeURIComponent(e), s)
        .then((n) => this.decode(n))
    );
  }
  async delete(e, t) {
    return (
      (t = Object.assign({ method: "DELETE" }, t)),
      this.client
        .send(this.baseCrudPath + "/" + encodeURIComponent(e), t)
        .then(() => !0)
    );
  }
  _getFullList(e = 500, t) {
    (t = t || {}).query = Object.assign({ skipTotal: 1 }, t.query);
    let s = [],
      n = async (i) =>
        this.getList(i, e || 500, t).then((r) => {
          const l = r.items;
          return (s = s.concat(l)), l.length == r.perPage ? n(i + 1) : s;
        });
    return n(1);
  }
}
function Y(o, e, t, s) {
  const n = s !== void 0;
  return n || t !== void 0
    ? n
      ? (console.warn(o),
        (e.body = Object.assign({}, e.body, t)),
        (e.query = Object.assign({}, e.query, s)),
        e)
      : Object.assign(e, t)
    : e;
}
function Se(o) {
  var e;
  (e = o._resetAutoRefresh) == null || e.call(o);
}
class Mt extends xe {
  get baseCrudPath() {
    return "/api/admins";
  }
  async update(e, t, s) {
    return super.update(e, t, s).then((n) => {
      var i, r;
      return (
        ((i = this.client.authStore.model) == null ? void 0 : i.id) === n.id &&
          ((r = this.client.authStore.model) == null
            ? void 0
            : r.collectionId) === void 0 &&
          this.client.authStore.save(this.client.authStore.token, n),
        n
      );
    });
  }
  async delete(e, t) {
    return super.delete(e, t).then((s) => {
      var n, i;
      return (
        s &&
          ((n = this.client.authStore.model) == null ? void 0 : n.id) === e &&
          ((i = this.client.authStore.model) == null
            ? void 0
            : i.collectionId) === void 0 &&
          this.client.authStore.clear(),
        s
      );
    });
  }
  authResponse(e) {
    const t = this.decode((e == null ? void 0 : e.admin) || {});
    return (
      e != null &&
        e.token &&
        e != null &&
        e.admin &&
        this.client.authStore.save(e.token, t),
      Object.assign({}, e, {
        token: (e == null ? void 0 : e.token) || "",
        admin: t,
      })
    );
  }
  async authWithPassword(e, t, s, n) {
    let i = { method: "POST", body: { identity: e, password: t } };
    i = Y(
      "This form of authWithPassword(email, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(email, pass, options?).",
      i,
      s,
      n
    );
    const r = i.autoRefreshThreshold;
    delete i.autoRefreshThreshold, i.autoRefresh || Se(this.client);
    let l = await this.client.send(
      this.baseCrudPath + "/auth-with-password",
      i
    );
    return (
      (l = this.authResponse(l)),
      r &&
        (function (c, d, m, _) {
          Se(c);
          const O = c.beforeSend,
            E = c.authStore.model,
            I = c.authStore.onChange((q, v) => {
              (!q ||
                (v == null ? void 0 : v.id) != (E == null ? void 0 : E.id) ||
                (((v != null && v.collectionId) ||
                  (E != null && E.collectionId)) &&
                  (v == null ? void 0 : v.collectionId) !=
                    (E == null ? void 0 : E.collectionId))) &&
                Se(c);
            });
          (c._resetAutoRefresh = function () {
            I(), (c.beforeSend = O), delete c._resetAutoRefresh;
          }),
            (c.beforeSend = async (q, v) => {
              var h;
              const N = c.authStore.token;
              if ((h = v.query) != null && h.autoRefresh)
                return O ? O(q, v) : { url: q, sendOptions: v };
              let P = c.authStore.isValid;
              if (P && it(c.authStore.token, d))
                try {
                  await m();
                } catch {
                  P = !1;
                }
              P || (await _());
              const f = v.headers || {};
              for (let p in f)
                if (
                  p.toLowerCase() == "authorization" &&
                  N == f[p] &&
                  c.authStore.token
                ) {
                  f[p] = c.authStore.token;
                  break;
                }
              return (v.headers = f), O ? O(q, v) : { url: q, sendOptions: v };
            });
        })(
          this.client,
          r,
          () => this.authRefresh({ autoRefresh: !0 }),
          () =>
            this.authWithPassword(e, t, Object.assign({ autoRefresh: !0 }, i))
        ),
      l
    );
  }
  async authRefresh(e, t) {
    let s = { method: "POST" };
    return (
      (s = Y(
        "This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",
        s,
        e,
        t
      )),
      this.client
        .send(this.baseCrudPath + "/auth-refresh", s)
        .then(this.authResponse.bind(this))
    );
  }
  async requestPasswordReset(e, t, s) {
    let n = { method: "POST", body: { email: e } };
    return (
      (n = Y(
        "This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",
        n,
        t,
        s
      )),
      this.client
        .send(this.baseCrudPath + "/request-password-reset", n)
        .then(() => !0)
    );
  }
  async confirmPasswordReset(e, t, s, n, i) {
    let r = {
      method: "POST",
      body: { token: e, password: t, passwordConfirm: s },
    };
    return (
      (r = Y(
        "This form of confirmPasswordReset(resetToken, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(resetToken, password, passwordConfirm, options?).",
        r,
        n,
        i
      )),
      this.client
        .send(this.baseCrudPath + "/confirm-password-reset", r)
        .then(() => !0)
    );
  }
}
const Dt = [
  "requestKey",
  "$cancelKey",
  "$autoCancel",
  "fetch",
  "headers",
  "body",
  "query",
  "params",
  "cache",
  "credentials",
  "headers",
  "integrity",
  "keepalive",
  "method",
  "mode",
  "redirect",
  "referrer",
  "referrerPolicy",
  "signal",
  "window",
];
function rt(o) {
  if (o) {
    o.query = o.query || {};
    for (let e in o) Dt.includes(e) || ((o.query[e] = o[e]), delete o[e]);
  }
}
class ot extends pe {
  constructor() {
    super(...arguments),
      (this.clientId = ""),
      (this.eventSource = null),
      (this.subscriptions = {}),
      (this.lastSentSubscriptions = []),
      (this.maxConnectTimeout = 15e3),
      (this.reconnectAttempts = 0),
      (this.maxReconnectAttempts = 1 / 0),
      (this.predefinedReconnectIntervals = [
        200, 300, 500, 1e3, 1200, 1500, 2e3,
      ]),
      (this.pendingConnects = []);
  }
  get isConnected() {
    return (
      !!this.eventSource && !!this.clientId && !this.pendingConnects.length
    );
  }
  async subscribe(e, t, s) {
    var r;
    if (!e) throw new Error("topic must be set.");
    let n = e;
    if (s) {
      rt(s);
      const l =
        "options=" +
        encodeURIComponent(
          JSON.stringify({ query: s.query, headers: s.headers })
        );
      n += (n.includes("?") ? "&" : "?") + l;
    }
    const i = function (l) {
      const a = l;
      let c;
      try {
        c = JSON.parse(a == null ? void 0 : a.data);
      } catch {}
      t(c || {});
    };
    return (
      this.subscriptions[n] || (this.subscriptions[n] = []),
      this.subscriptions[n].push(i),
      this.isConnected
        ? this.subscriptions[n].length === 1
          ? await this.submitSubscriptions()
          : (r = this.eventSource) == null || r.addEventListener(n, i)
        : await this.connect(),
      async () => this.unsubscribeByTopicAndListener(e, i)
    );
  }
  async unsubscribe(e) {
    var s;
    let t = !1;
    if (e) {
      const n = this.getSubscriptionsByTopic(e);
      for (let i in n)
        if (this.hasSubscriptionListeners(i)) {
          for (let r of this.subscriptions[i])
            (s = this.eventSource) == null || s.removeEventListener(i, r);
          delete this.subscriptions[i], t || (t = !0);
        }
    } else this.subscriptions = {};
    this.hasSubscriptionListeners()
      ? t && (await this.submitSubscriptions())
      : this.disconnect();
  }
  async unsubscribeByPrefix(e) {
    var s;
    let t = !1;
    for (let n in this.subscriptions)
      if ((n + "?").startsWith(e)) {
        t = !0;
        for (let i of this.subscriptions[n])
          (s = this.eventSource) == null || s.removeEventListener(n, i);
        delete this.subscriptions[n];
      }
    t &&
      (this.hasSubscriptionListeners()
        ? await this.submitSubscriptions()
        : this.disconnect());
  }
  async unsubscribeByTopicAndListener(e, t) {
    var i;
    let s = !1;
    const n = this.getSubscriptionsByTopic(e);
    for (let r in n) {
      if (
        !Array.isArray(this.subscriptions[r]) ||
        !this.subscriptions[r].length
      )
        continue;
      let l = !1;
      for (let a = this.subscriptions[r].length - 1; a >= 0; a--)
        this.subscriptions[r][a] === t &&
          ((l = !0),
          delete this.subscriptions[r][a],
          this.subscriptions[r].splice(a, 1),
          (i = this.eventSource) == null || i.removeEventListener(r, t));
      l &&
        (this.subscriptions[r].length || delete this.subscriptions[r],
        s || this.hasSubscriptionListeners(r) || (s = !0));
    }
    this.hasSubscriptionListeners()
      ? s && (await this.submitSubscriptions())
      : this.disconnect();
  }
  hasSubscriptionListeners(e) {
    var t, s;
    if (((this.subscriptions = this.subscriptions || {}), e))
      return !!((t = this.subscriptions[e]) != null && t.length);
    for (let n in this.subscriptions)
      if ((s = this.subscriptions[n]) != null && s.length) return !0;
    return !1;
  }
  async submitSubscriptions() {
    if (this.clientId)
      return (
        this.addAllSubscriptionListeners(),
        (this.lastSentSubscriptions = this.getNonEmptySubscriptionKeys()),
        this.client
          .send("/api/realtime", {
            method: "POST",
            body: {
              clientId: this.clientId,
              subscriptions: this.lastSentSubscriptions,
            },
            requestKey: this.getSubscriptionsCancelKey(),
          })
          .catch((e) => {
            if (!(e != null && e.isAbort)) throw e;
          })
      );
  }
  getSubscriptionsCancelKey() {
    return "realtime_" + this.clientId;
  }
  getSubscriptionsByTopic(e) {
    const t = {};
    e = e.includes("?") ? e : e + "?";
    for (let s in this.subscriptions)
      (s + "?").startsWith(e) && (t[s] = this.subscriptions[s]);
    return t;
  }
  getNonEmptySubscriptionKeys() {
    const e = [];
    for (let t in this.subscriptions) this.subscriptions[t].length && e.push(t);
    return e;
  }
  addAllSubscriptionListeners() {
    if (this.eventSource) {
      this.removeAllSubscriptionListeners();
      for (let e in this.subscriptions)
        for (let t of this.subscriptions[e])
          this.eventSource.addEventListener(e, t);
    }
  }
  removeAllSubscriptionListeners() {
    if (this.eventSource)
      for (let e in this.subscriptions)
        for (let t of this.subscriptions[e])
          this.eventSource.removeEventListener(e, t);
  }
  async connect() {
    if (!(this.reconnectAttempts > 0))
      return new Promise((e, t) => {
        this.pendingConnects.push({ resolve: e, reject: t }),
          this.pendingConnects.length > 1 || this.initConnect();
      });
  }
  initConnect() {
    this.disconnect(!0),
      clearTimeout(this.connectTimeoutId),
      (this.connectTimeoutId = setTimeout(() => {
        this.connectErrorHandler(
          new Error("EventSource connect took too long.")
        );
      }, this.maxConnectTimeout)),
      (this.eventSource = new EventSource(
        this.client.buildUrl("/api/realtime")
      )),
      (this.eventSource.onerror = (e) => {
        this.connectErrorHandler(
          new Error("Failed to establish realtime connection.")
        );
      }),
      this.eventSource.addEventListener("PB_CONNECT", (e) => {
        const t = e;
        (this.clientId = t == null ? void 0 : t.lastEventId),
          this.submitSubscriptions()
            .then(async () => {
              let s = 3;
              for (; this.hasUnsentSubscriptions() && s > 0; )
                s--, await this.submitSubscriptions();
            })
            .then(() => {
              for (let n of this.pendingConnects) n.resolve();
              (this.pendingConnects = []),
                (this.reconnectAttempts = 0),
                clearTimeout(this.reconnectTimeoutId),
                clearTimeout(this.connectTimeoutId);
              const s = this.getSubscriptionsByTopic("PB_CONNECT");
              for (let n in s) for (let i of s[n]) i(e);
            })
            .catch((s) => {
              (this.clientId = ""), this.connectErrorHandler(s);
            });
      });
  }
  hasUnsentSubscriptions() {
    const e = this.getNonEmptySubscriptionKeys();
    if (e.length != this.lastSentSubscriptions.length) return !0;
    for (const t of e) if (!this.lastSentSubscriptions.includes(t)) return !0;
    return !1;
  }
  connectErrorHandler(e) {
    if (
      (clearTimeout(this.connectTimeoutId),
      clearTimeout(this.reconnectTimeoutId),
      (!this.clientId && !this.reconnectAttempts) ||
        this.reconnectAttempts > this.maxReconnectAttempts)
    ) {
      for (let s of this.pendingConnects) s.reject(new X(e));
      return (this.pendingConnects = []), void this.disconnect();
    }
    this.disconnect(!0);
    const t =
      this.predefinedReconnectIntervals[this.reconnectAttempts] ||
      this.predefinedReconnectIntervals[
        this.predefinedReconnectIntervals.length - 1
      ];
    this.reconnectAttempts++,
      (this.reconnectTimeoutId = setTimeout(() => {
        this.initConnect();
      }, t));
  }
  disconnect(e = !1) {
    var t;
    if (
      (clearTimeout(this.connectTimeoutId),
      clearTimeout(this.reconnectTimeoutId),
      this.removeAllSubscriptionListeners(),
      this.client.cancelRequest(this.getSubscriptionsCancelKey()),
      (t = this.eventSource) == null || t.close(),
      (this.eventSource = null),
      (this.clientId = ""),
      !e)
    ) {
      this.reconnectAttempts = 0;
      for (let s of this.pendingConnects) s.resolve();
      this.pendingConnects = [];
    }
  }
}
class Lt extends xe {
  constructor(e, t) {
    super(e), (this.collectionIdOrName = t);
  }
  get baseCrudPath() {
    return this.baseCollectionPath + "/records";
  }
  get baseCollectionPath() {
    return "/api/collections/" + encodeURIComponent(this.collectionIdOrName);
  }
  async subscribe(e, t, s) {
    if (!e) throw new Error("Missing topic.");
    if (!t) throw new Error("Missing subscription callback.");
    return this.client.realtime.subscribe(
      this.collectionIdOrName + "/" + e,
      t,
      s
    );
  }
  async unsubscribe(e) {
    return e
      ? this.client.realtime.unsubscribe(this.collectionIdOrName + "/" + e)
      : this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName);
  }
  async getFullList(e, t) {
    if (typeof e == "number") return super.getFullList(e, t);
    const s = Object.assign({}, e, t);
    return super.getFullList(s);
  }
  async getList(e = 1, t = 30, s) {
    return super.getList(e, t, s);
  }
  async getFirstListItem(e, t) {
    return super.getFirstListItem(e, t);
  }
  async getOne(e, t) {
    return super.getOne(e, t);
  }
  async create(e, t) {
    return super.create(e, t);
  }
  async update(e, t, s) {
    return super.update(e, t, s).then((n) => {
      var i, r, l;
      return (
        ((i = this.client.authStore.model) == null ? void 0 : i.id) !==
          (n == null ? void 0 : n.id) ||
          (((r = this.client.authStore.model) == null
            ? void 0
            : r.collectionId) !== this.collectionIdOrName &&
            ((l = this.client.authStore.model) == null
              ? void 0
              : l.collectionName) !== this.collectionIdOrName) ||
          this.client.authStore.save(this.client.authStore.token, n),
        n
      );
    });
  }
  async delete(e, t) {
    return super.delete(e, t).then((s) => {
      var n, i, r;
      return (
        !s ||
          ((n = this.client.authStore.model) == null ? void 0 : n.id) !== e ||
          (((i = this.client.authStore.model) == null
            ? void 0
            : i.collectionId) !== this.collectionIdOrName &&
            ((r = this.client.authStore.model) == null
              ? void 0
              : r.collectionName) !== this.collectionIdOrName) ||
          this.client.authStore.clear(),
        s
      );
    });
  }
  authResponse(e) {
    const t = this.decode((e == null ? void 0 : e.record) || {});
    return (
      this.client.authStore.save(e == null ? void 0 : e.token, t),
      Object.assign({}, e, {
        token: (e == null ? void 0 : e.token) || "",
        record: t,
      })
    );
  }
  async listAuthMethods(e) {
    return (
      (e = Object.assign({ method: "GET" }, e)),
      this.client.send(this.baseCollectionPath + "/auth-methods", e).then((t) =>
        Object.assign({}, t, {
          usernamePassword: !!(t != null && t.usernamePassword),
          emailPassword: !!(t != null && t.emailPassword),
          authProviders: Array.isArray(t == null ? void 0 : t.authProviders)
            ? t == null
              ? void 0
              : t.authProviders
            : [],
        })
      )
    );
  }
  async authWithPassword(e, t, s, n) {
    let i = { method: "POST", body: { identity: e, password: t } };
    return (
      (i = Y(
        "This form of authWithPassword(usernameOrEmail, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(usernameOrEmail, pass, options?).",
        i,
        s,
        n
      )),
      this.client
        .send(this.baseCollectionPath + "/auth-with-password", i)
        .then((r) => this.authResponse(r))
    );
  }
  async authWithOAuth2Code(e, t, s, n, i, r, l) {
    let a = {
      method: "POST",
      body: {
        provider: e,
        code: t,
        codeVerifier: s,
        redirectUrl: n,
        createData: i,
      },
    };
    return (
      (a = Y(
        "This form of authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, options?).",
        a,
        r,
        l
      )),
      this.client
        .send(this.baseCollectionPath + "/auth-with-oauth2", a)
        .then((c) => this.authResponse(c))
    );
  }
  authWithOAuth2(...e) {
    if (e.length > 1 || typeof (e == null ? void 0 : e[0]) == "string")
      return (
        console.warn(
          "PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."
        ),
        this.authWithOAuth2Code(
          (e == null ? void 0 : e[0]) || "",
          (e == null ? void 0 : e[1]) || "",
          (e == null ? void 0 : e[2]) || "",
          (e == null ? void 0 : e[3]) || "",
          (e == null ? void 0 : e[4]) || {},
          (e == null ? void 0 : e[5]) || {},
          (e == null ? void 0 : e[6]) || {}
        )
      );
    const t = (e == null ? void 0 : e[0]) || {};
    let s = null;
    t.urlCallback || (s = Je(void 0));
    const n = new ot(this.client);
    function i() {
      s == null || s.close(), n.unsubscribe();
    }
    const r = {},
      l = t.requestKey;
    return (
      l && (r.requestKey = l),
      this.listAuthMethods(r)
        .then((a) => {
          var _;
          const c = a.authProviders.find((O) => O.name === t.provider);
          if (!c)
            throw new X(
              new Error(`Missing or invalid provider "${t.provider}".`)
            );
          const d = this.client.buildUrl("/api/oauth2-redirect"),
            m = l
              ? (_ = this.client.cancelControllers) == null
                ? void 0
                : _[l]
              : void 0;
          return (
            m &&
              (m.signal.onabort = () => {
                i();
              }),
            new Promise(async (O, E) => {
              var I;
              try {
                await n.subscribe("@oauth2", async (P) => {
                  var h;
                  const f = n.clientId;
                  try {
                    if (!P.state || f !== P.state)
                      throw new Error("State parameters don't match.");
                    if (P.error || !P.code)
                      throw new Error(
                        "OAuth2 redirect error or missing code: " + P.error
                      );
                    const p = Object.assign({}, t);
                    delete p.provider,
                      delete p.scopes,
                      delete p.createData,
                      delete p.urlCallback,
                      (h = m == null ? void 0 : m.signal) != null &&
                        h.onabort &&
                        (m.signal.onabort = null);
                    const x = await this.authWithOAuth2Code(
                      c.name,
                      P.code,
                      c.codeVerifier,
                      d,
                      t.createData,
                      p
                    );
                    O(x);
                  } catch (p) {
                    E(new X(p));
                  }
                  i();
                });
                const q = { state: n.clientId };
                (I = t.scopes) != null &&
                  I.length &&
                  (q.scope = t.scopes.join(" "));
                const v = this._replaceQueryParams(c.authUrl + d, q);
                await (
                  t.urlCallback ||
                  function (P) {
                    s ? (s.location.href = P) : (s = Je(P));
                  }
                )(v);
              } catch (q) {
                i(), E(new X(q));
              }
            })
          );
        })
        .catch((a) => {
          throw (i(), a);
        })
    );
  }
  async authRefresh(e, t) {
    let s = { method: "POST" };
    return (
      (s = Y(
        "This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).",
        s,
        e,
        t
      )),
      this.client
        .send(this.baseCollectionPath + "/auth-refresh", s)
        .then((n) => this.authResponse(n))
    );
  }
  async requestPasswordReset(e, t, s) {
    let n = { method: "POST", body: { email: e } };
    return (
      (n = Y(
        "This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).",
        n,
        t,
        s
      )),
      this.client
        .send(this.baseCollectionPath + "/request-password-reset", n)
        .then(() => !0)
    );
  }
  async confirmPasswordReset(e, t, s, n, i) {
    let r = {
      method: "POST",
      body: { token: e, password: t, passwordConfirm: s },
    };
    return (
      (r = Y(
        "This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).",
        r,
        n,
        i
      )),
      this.client
        .send(this.baseCollectionPath + "/confirm-password-reset", r)
        .then(() => !0)
    );
  }
  async requestVerification(e, t, s) {
    let n = { method: "POST", body: { email: e } };
    return (
      (n = Y(
        "This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).",
        n,
        t,
        s
      )),
      this.client
        .send(this.baseCollectionPath + "/request-verification", n)
        .then(() => !0)
    );
  }
  async confirmVerification(e, t, s) {
    let n = { method: "POST", body: { token: e } };
    return (
      (n = Y(
        "This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).",
        n,
        t,
        s
      )),
      this.client
        .send(this.baseCollectionPath + "/confirm-verification", n)
        .then(() => {
          const i = ge(e),
            r = this.client.authStore.model;
          return (
            r &&
              !r.verified &&
              r.id === i.id &&
              r.collectionId === i.collectionId &&
              ((r.verified = !0),
              this.client.authStore.save(this.client.authStore.token, r)),
            !0
          );
        })
    );
  }
  async requestEmailChange(e, t, s) {
    let n = { method: "POST", body: { newEmail: e } };
    return (
      (n = Y(
        "This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).",
        n,
        t,
        s
      )),
      this.client
        .send(this.baseCollectionPath + "/request-email-change", n)
        .then(() => !0)
    );
  }
  async confirmEmailChange(e, t, s, n) {
    let i = { method: "POST", body: { token: e, password: t } };
    return (
      (i = Y(
        "This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).",
        i,
        s,
        n
      )),
      this.client
        .send(this.baseCollectionPath + "/confirm-email-change", i)
        .then(() => {
          const r = ge(e),
            l = this.client.authStore.model;
          return (
            l &&
              l.id === r.id &&
              l.collectionId === r.collectionId &&
              this.client.authStore.clear(),
            !0
          );
        })
    );
  }
  async listExternalAuths(e, t) {
    return (
      (t = Object.assign({ method: "GET" }, t)),
      this.client.send(
        this.baseCrudPath + "/" + encodeURIComponent(e) + "/external-auths",
        t
      )
    );
  }
  async unlinkExternalAuth(e, t, s) {
    return (
      (s = Object.assign({ method: "DELETE" }, s)),
      this.client
        .send(
          this.baseCrudPath +
            "/" +
            encodeURIComponent(e) +
            "/external-auths/" +
            encodeURIComponent(t),
          s
        )
        .then(() => !0)
    );
  }
  _replaceQueryParams(e, t = {}) {
    let s = e,
      n = "";
    e.indexOf("?") >= 0 &&
      ((s = e.substring(0, e.indexOf("?"))),
      (n = e.substring(e.indexOf("?") + 1)));
    const i = {},
      r = n.split("&");
    for (const l of r) {
      if (l == "") continue;
      const a = l.split("=");
      i[decodeURIComponent(a[0].replace(/\+/g, " "))] = decodeURIComponent(
        (a[1] || "").replace(/\+/g, " ")
      );
    }
    for (let l in t)
      t.hasOwnProperty(l) && (t[l] == null ? delete i[l] : (i[l] = t[l]));
    n = "";
    for (let l in i)
      i.hasOwnProperty(l) &&
        (n != "" && (n += "&"),
        (n +=
          encodeURIComponent(l.replace(/%20/g, "+")) +
          "=" +
          encodeURIComponent(i[l].replace(/%20/g, "+"))));
    return n != "" ? s + "?" + n : s;
  }
}
function Je(o) {
  if (typeof window > "u" || !(window != null && window.open))
    throw new X(
      new Error(
        "Not in a browser context - please pass a custom urlCallback function."
      )
    );
  let e = 1024,
    t = 768,
    s = window.innerWidth,
    n = window.innerHeight;
  (e = e > s ? s : e), (t = t > n ? n : t);
  let i = s / 2 - e / 2,
    r = n / 2 - t / 2;
  return window.open(
    o,
    "popup_window",
    "width=" +
      e +
      ",height=" +
      t +
      ",top=" +
      r +
      ",left=" +
      i +
      ",resizable,menubar=no"
  );
}
class Gt extends xe {
  get baseCrudPath() {
    return "/api/collections";
  }
  async import(e, t = !1, s) {
    return (
      (s = Object.assign(
        { method: "PUT", body: { collections: e, deleteMissing: t } },
        s
      )),
      this.client.send(this.baseCrudPath + "/import", s).then(() => !0)
    );
  }
}
class Ft extends pe {
  async getList(e = 1, t = 30, s) {
    return (
      ((s = Object.assign({ method: "GET" }, s)).query = Object.assign(
        { page: e, perPage: t },
        s.query
      )),
      this.client.send("/api/logs", s)
    );
  }
  async getOne(e, t) {
    if (!e)
      throw new X({
        url: this.client.buildUrl("/api/logs/"),
        status: 404,
        response: { code: 404, message: "Missing required log id.", data: {} },
      });
    return (
      (t = Object.assign({ method: "GET" }, t)),
      this.client.send("/api/logs/" + encodeURIComponent(e), t)
    );
  }
  async getStats(e) {
    return (
      (e = Object.assign({ method: "GET" }, e)),
      this.client.send("/api/logs/stats", e)
    );
  }
}
class Nt extends pe {
  async check(e) {
    return (
      (e = Object.assign({ method: "GET" }, e)),
      this.client.send("/api/health", e)
    );
  }
}
class Ut extends pe {
  getUrl(e, t, s = {}) {
    if (
      !t ||
      !(e != null && e.id) ||
      (!(e != null && e.collectionId) && !(e != null && e.collectionName))
    )
      return "";
    const n = [];
    n.push("api"),
      n.push("files"),
      n.push(encodeURIComponent(e.collectionId || e.collectionName)),
      n.push(encodeURIComponent(e.id)),
      n.push(encodeURIComponent(t));
    let i = this.client.buildUrl(n.join("/"));
    if (Object.keys(s).length) {
      s.download === !1 && delete s.download;
      const r = new URLSearchParams(s);
      i += (i.includes("?") ? "&" : "?") + r;
    }
    return i;
  }
  async getToken(e) {
    return (
      (e = Object.assign({ method: "POST" }, e)),
      this.client
        .send("/api/files/token", e)
        .then((t) => (t == null ? void 0 : t.token) || "")
    );
  }
}
class Vt extends pe {
  async getFullList(e) {
    return (
      (e = Object.assign({ method: "GET" }, e)),
      this.client.send("/api/backups", e)
    );
  }
  async create(e, t) {
    return (
      (t = Object.assign({ method: "POST", body: { name: e } }, t)),
      this.client.send("/api/backups", t).then(() => !0)
    );
  }
  async upload(e, t) {
    return (
      (t = Object.assign({ method: "POST", body: e }, t)),
      this.client.send("/api/backups/upload", t).then(() => !0)
    );
  }
  async delete(e, t) {
    return (
      (t = Object.assign({ method: "DELETE" }, t)),
      this.client
        .send(`/api/backups/${encodeURIComponent(e)}`, t)
        .then(() => !0)
    );
  }
  async restore(e, t) {
    return (
      (t = Object.assign({ method: "POST" }, t)),
      this.client
        .send(`/api/backups/${encodeURIComponent(e)}/restore`, t)
        .then(() => !0)
    );
  }
  getDownloadUrl(e, t) {
    return this.client.buildUrl(
      `/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`
    );
  }
}
class Ht {
  constructor(e = "/", t, s = "en-US") {
    (this.cancelControllers = {}),
      (this.recordServices = {}),
      (this.enableAutoCancellation = !0),
      (this.baseUrl = e),
      (this.lang = s),
      (this.authStore = t || new qt()),
      (this.admins = new Mt(this)),
      (this.collections = new Gt(this)),
      (this.files = new Ut(this)),
      (this.logs = new Ft(this)),
      (this.settings = new jt(this)),
      (this.realtime = new ot(this)),
      (this.health = new Nt(this)),
      (this.backups = new Vt(this));
  }
  collection(e) {
    return (
      this.recordServices[e] || (this.recordServices[e] = new Lt(this, e)),
      this.recordServices[e]
    );
  }
  autoCancellation(e) {
    return (this.enableAutoCancellation = !!e), this;
  }
  cancelRequest(e) {
    return (
      this.cancelControllers[e] &&
        (this.cancelControllers[e].abort(), delete this.cancelControllers[e]),
      this
    );
  }
  cancelAllRequests() {
    for (let e in this.cancelControllers) this.cancelControllers[e].abort();
    return (this.cancelControllers = {}), this;
  }
  filter(e, t) {
    if (!t) return e;
    for (let s in t) {
      let n = t[s];
      switch (typeof n) {
        case "boolean":
        case "number":
          n = "" + n;
          break;
        case "string":
          n = "'" + n.replace(/'/g, "\\'") + "'";
          break;
        default:
          n =
            n === null
              ? "null"
              : n instanceof Date
              ? "'" + n.toISOString().replace("T", " ") + "'"
              : "'" + JSON.stringify(n).replace(/'/g, "\\'") + "'";
      }
      e = e.replaceAll("{:" + s + "}", n);
    }
    return e;
  }
  getFileUrl(e, t, s = {}) {
    return this.files.getUrl(e, t, s);
  }
  buildUrl(e) {
    var s;
    let t = this.baseUrl;
    return (
      typeof window > "u" ||
        !window.location ||
        t.startsWith("https://") ||
        t.startsWith("http://") ||
        ((t =
          (s = window.location.origin) != null && s.endsWith("/")
            ? window.location.origin.substring(
                0,
                window.location.origin.length - 1
              )
            : window.location.origin || ""),
        this.baseUrl.startsWith("/") ||
          ((t += window.location.pathname || "/"),
          (t += t.endsWith("/") ? "" : "/")),
        (t += this.baseUrl)),
      e &&
        ((t += t.endsWith("/") ? "" : "/"),
        (t += e.startsWith("/") ? e.substring(1) : e)),
      t
    );
  }
  async send(e, t) {
    t = this.initSendOptions(e, t);
    let s = this.buildUrl(e);
    if (this.beforeSend) {
      const n = Object.assign({}, await this.beforeSend(s, t));
      n.url !== void 0 || n.options !== void 0
        ? ((s = n.url || s), (t = n.options || t))
        : Object.keys(n).length &&
          ((t = n),
          console != null &&
            console.warn &&
            console.warn(
              "Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."
            ));
    }
    if (t.query !== void 0) {
      const n = this.serializeQueryParams(t.query);
      n && (s += (s.includes("?") ? "&" : "?") + n), delete t.query;
    }
    return (
      this.getHeader(t.headers, "Content-Type") == "application/json" &&
        t.body &&
        typeof t.body != "string" &&
        (t.body = JSON.stringify(t.body)),
      (t.fetch || fetch)(s, t)
        .then(async (n) => {
          let i = {};
          try {
            i = await n.json();
          } catch {}
          if (
            (this.afterSend && (i = await this.afterSend(n, i)),
            n.status >= 400)
          )
            throw new X({ url: n.url, status: n.status, data: i });
          return i;
        })
        .catch((n) => {
          throw new X(n);
        })
    );
  }
  initSendOptions(e, t) {
    if (
      (((t = Object.assign({ method: "GET" }, t)).body =
        this.convertToFormDataIfNeeded(t.body)),
      rt(t),
      (t.query = Object.assign({}, t.params, t.query)),
      t.requestKey === void 0 &&
        (t.$autoCancel === !1 || t.query.$autoCancel === !1
          ? (t.requestKey = null)
          : (t.$cancelKey || t.query.$cancelKey) &&
            (t.requestKey = t.$cancelKey || t.query.$cancelKey)),
      delete t.$autoCancel,
      delete t.query.$autoCancel,
      delete t.$cancelKey,
      delete t.query.$cancelKey,
      this.getHeader(t.headers, "Content-Type") !== null ||
        this.isFormData(t.body) ||
        (t.headers = Object.assign({}, t.headers, {
          "Content-Type": "application/json",
        })),
      this.getHeader(t.headers, "Accept-Language") === null &&
        (t.headers = Object.assign({}, t.headers, {
          "Accept-Language": this.lang,
        })),
      this.authStore.token &&
        this.getHeader(t.headers, "Authorization") === null &&
        (t.headers = Object.assign({}, t.headers, {
          Authorization: this.authStore.token,
        })),
      this.enableAutoCancellation && t.requestKey !== null)
    ) {
      const s = t.requestKey || (t.method || "GET") + e;
      delete t.requestKey, this.cancelRequest(s);
      const n = new AbortController();
      (this.cancelControllers[s] = n), (t.signal = n.signal);
    }
    return t;
  }
  convertToFormDataIfNeeded(e) {
    if (
      typeof FormData > "u" ||
      e === void 0 ||
      typeof e != "object" ||
      e === null ||
      this.isFormData(e) ||
      !this.hasBlobField(e)
    )
      return e;
    const t = new FormData();
    for (const s in e) {
      const n = e[s];
      if (typeof n != "object" || this.hasBlobField({ data: n })) {
        const i = Array.isArray(n) ? n : [n];
        for (let r of i) t.append(s, r);
      } else {
        let i = {};
        (i[s] = n), t.append("@jsonPayload", JSON.stringify(i));
      }
    }
    return t;
  }
  hasBlobField(e) {
    for (const t in e) {
      const s = Array.isArray(e[t]) ? e[t] : [e[t]];
      for (const n of s)
        if (
          (typeof Blob < "u" && n instanceof Blob) ||
          (typeof File < "u" && n instanceof File)
        )
          return !0;
    }
    return !1;
  }
  getHeader(e, t) {
    (e = e || {}), (t = t.toLowerCase());
    for (let s in e) if (s.toLowerCase() == t) return e[s];
    return null;
  }
  isFormData(e) {
    return (
      e &&
      (e.constructor.name === "FormData" ||
        (typeof FormData < "u" && e instanceof FormData))
    );
  }
  serializeQueryParams(e) {
    const t = [];
    for (const s in e) {
      if (e[s] === null) continue;
      const n = e[s],
        i = encodeURIComponent(s);
      if (Array.isArray(n))
        for (const r of n) t.push(i + "=" + encodeURIComponent(r));
      else
        n instanceof Date
          ? t.push(i + "=" + encodeURIComponent(n.toISOString()))
          : typeof n !== null && typeof n == "object"
          ? t.push(i + "=" + encodeURIComponent(JSON.stringify(n)))
          : t.push(i + "=" + encodeURIComponent(n));
    }
    return t.join("&");
  }
}
function Ye(o, e, t) {
  const s = o.slice();
  return (s[25] = e[t]), s;
}
function Xe(o, e, t) {
  const s = o.slice();
  return (s[28] = e[t]), s;
}
function Qe(o, e) {
  let t, s, n, i, r;
  function l(...a) {
    return e[9](e[28], ...a);
  }
  return {
    key: o,
    first: null,
    c() {
      (t = S("img")), this.h();
    },
    l(a) {
      (t = k(a, "IMG", { src: !0, class: !0, style: !0, alt: !0 })), this.h();
    },
    h() {
      re(t.src, (s = e[28].src)) || g(t, "src", s),
        g(
          t,
          "class",
          "absolute object-contain walking-pepe cursor-crosshair z-50 select-none svelte-7eg34p"
        ),
        g(
          t,
          "style",
          (n =
            "--bottom: " +
            e[28].bottom +
            "px; --speed: " +
            e[28].speed +
            "s; --delay: " +
            e[28].delay +
            "s; bottom: var(--bottom); " +
            (e[28].direction === "left" ? "right" : "left") +
            ": -100px; transform: scaleX(" +
            (e[28].direction === "left" ? -1 : 1) +
            "); z-index: " +
            e[28].zIndex +
            "; filter: " +
            e[28].effect +
            ";")
        ),
        g(t, "alt", "Walking Pepe"),
        me(t, "walk-left", e[28].direction === "left"),
        me(t, "walk-right", e[28].direction === "right"),
        (this.first = t);
    },
    m(a, c) {
      G(a, t, c), i || ((r = de(t, "click", l)), (i = !0));
    },
    p(a, c) {
      (e = a),
        c & 1 && !re(t.src, (s = e[28].src)) && g(t, "src", s),
        c & 1 &&
          n !==
            (n =
              "--bottom: " +
              e[28].bottom +
              "px; --speed: " +
              e[28].speed +
              "s; --delay: " +
              e[28].delay +
              "s; bottom: var(--bottom); " +
              (e[28].direction === "left" ? "right" : "left") +
              ": -100px; transform: scaleX(" +
              (e[28].direction === "left" ? -1 : 1) +
              "); z-index: " +
              e[28].zIndex +
              "; filter: " +
              e[28].effect +
              ";") &&
          g(t, "style", n),
        c & 1 && me(t, "walk-left", e[28].direction === "left"),
        c & 1 && me(t, "walk-right", e[28].direction === "right");
    },
    d(a) {
      a && y(t), (i = !1), r();
    },
  };
}
function Ze(o, e) {
  let t;
  return {
    key: o,
    first: null,
    c() {
      (t = S("div")), this.h();
    },
    l(s) {
      (t = k(s, "DIV", { class: !0, style: !0 })), $(t).forEach(y), this.h();
    },
    h() {
      g(t, "class", "explosion svelte-7eg34p"),
        F(t, "left", e[25].x + "px"),
        F(t, "top", e[25].y + "px"),
        (this.first = t);
    },
    m(s, n) {
      G(s, t, n);
    },
    p(s, n) {
      (e = s),
        n & 8 && F(t, "left", e[25].x + "px"),
        n & 8 && F(t, "top", e[25].y + "px");
    },
    d(s) {
      s && y(t);
    },
  };
}
function zt(o) {
  var M;
  let e,
    t,
    s,
    n,
    i,
    r,
    l,
    a,
    c,
    d = (M = o[5]) != null && M.paused ? "▶️ Play" : "⏸️ Pause",
    m,
    _,
    O,
    E = [],
    I = new Map(),
    q,
    v = [],
    N = new Map(),
    P,
    f,
    h,
    p,
    x,
    D,
    j = H(o[0]);
  const T = (b) => b[28].id;
  for (let b = 0; b < j.length; b += 1) {
    let C = Xe(o, j, b),
      w = T(C);
    I.set(w, (E[b] = Qe(w, C)));
  }
  let L = H(o[3]);
  const K = (b) => b[25].id;
  for (let b = 0; b < L.length; b += 1) {
    let C = Ye(o, L, b),
      w = K(C);
    N.set(w, (v[b] = Ze(w, C)));
  }
  return {
    c() {
      (e = S("div")),
        (t = S("div")),
        (s = W("Local Kills: ")),
        (n = W(o[1])),
        (i = W(" | Global Kills: ")),
        (r = W(o[2])),
        (l = A()),
        (a = S("div")),
        (c = S("button")),
        (m = W(d)),
        (_ = W(" Music")),
        (O = A());
      for (let b = 0; b < E.length; b += 1) E[b].c();
      q = A();
      for (let b = 0; b < v.length; b += 1) v[b].c();
      (P = A()), (f = S("div")), (h = S("img")), this.h();
    },
    l(b) {
      e = k(b, "DIV", { class: !0 });
      var C = $(e);
      t = k(C, "DIV", { class: !0 });
      var w = $(t);
      (s = B(w, "Local Kills: ")),
        (n = B(w, o[1])),
        (i = B(w, " | Global Kills: ")),
        (r = B(w, o[2])),
        w.forEach(y),
        (l = R(C)),
        (a = k(C, "DIV", { class: !0 }));
      var z = $(a);
      c = k(z, "BUTTON", {});
      var ie = $(c);
      (m = B(ie, d)),
        (_ = B(ie, " Music")),
        ie.forEach(y),
        z.forEach(y),
        (O = R(C));
      for (let ne = 0; ne < E.length; ne += 1) E[ne].l(C);
      q = R(C);
      for (let ne = 0; ne < v.length; ne += 1) v[ne].l(C);
      (P = R(C)), (f = k(C, "DIV", { id: !0, class: !0, style: !0 }));
      var be = $(f);
      (h = k(be, "IMG", { src: !0, alt: !0, class: !0 })),
        be.forEach(y),
        C.forEach(y),
        this.h();
    },
    h() {
      g(t, "class", "absolute top-4 left-4 bg-black text-white p-2 rounded"),
        g(a, "class", "fixed top-4 right-4 bg-black text-white p-2 rounded"),
        re(h.src, (p = "/gun.gif")) || g(h, "src", p),
        g(h, "alt", "Gun"),
        g(h, "class", "w-full h-full object-contain"),
        g(f, "id", "gun-container"),
        g(
          f,
          "class",
          "fixed -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-64 z-50 svelte-7eg34p"
        ),
        F(f, "transform", "translate(calc(-50% + " + o[4] * 0.5 + "px), 0)"),
        g(e, "class", "fixed top-0 left-0 w-full h-full overflow-hidden");
    },
    m(b, C) {
      G(b, e, C),
        u(e, t),
        u(t, s),
        u(t, n),
        u(t, i),
        u(t, r),
        u(e, l),
        u(e, a),
        u(a, c),
        u(c, m),
        u(c, _),
        u(e, O);
      for (let w = 0; w < E.length; w += 1) E[w] && E[w].m(e, null);
      u(e, q);
      for (let w = 0; w < v.length; w += 1) v[w] && v[w].m(e, null);
      u(e, P),
        u(e, f),
        u(f, h),
        x || ((D = [de(c, "click", o[8]), de(e, "mousemove", o[6])]), (x = !0));
    },
    p(b, [C]) {
      var w;
      C & 2 && ve(n, b[1]),
        C & 4 && ve(r, b[2]),
        C & 32 &&
          d !== (d = (w = b[5]) != null && w.paused ? "▶️ Play" : "⏸️ Pause") &&
          ve(m, d),
        C & 129 &&
          ((j = H(b[0])), (E = Ie(E, C, T, 1, b, j, I, e, Te, Qe, q, Xe))),
        C & 8 &&
          ((L = H(b[3])), (v = Ie(v, C, K, 1, b, L, N, e, Te, Ze, P, Ye))),
        C & 16 &&
          F(f, "transform", "translate(calc(-50% + " + b[4] * 0.5 + "px), 0)");
    },
    i: V,
    o: V,
    d(b) {
      b && y(e);
      for (let C = 0; C < E.length; C += 1) E[C].d();
      for (let C = 0; C < v.length; C += 1) v[C].d();
      (x = !1), tt(D);
    },
  };
}
function Kt() {
  const o = [
    "sepia(100%)",
    "saturate(200%)",
    "grayscale(100%)",
    "blur(1px)",
    "brightness(150%)",
    "contrast(200%)",
    "hue-rotate(90deg)",
    "invert(75%)",
    "opacity(75%)",
    "drop-shadow(0 0 5px rgba(0,0,0,0.5))",
    "sepia(50%) hue-rotate(180deg)",
    "grayscale(50%) brightness(120%)",
    "contrast(150%) saturate(150%)",
    "none",
  ];
  return o[Math.floor(Math.random() * o.length)];
}
function Wt() {
  const o = ["walk1.gif", "walk2.gif", "walk3.gif"];
  return o[Math.floor(Math.random() * o.length)];
}
function et(o) {
  return {
    id: o,
    src: Wt(),
    speed: Math.random() * 10 + 15,
    bottom: Math.random() * window.innerHeight,
    delay: Math.random() * 10,
    direction: Math.random() < 0.5 ? "right" : "left",
    zIndex: Math.floor(Math.random() * 10) + 1,
    effect: Kt(),
  };
}
function Bt(o, e, t) {
  const s = new Ht("https://through-swimming.pockethost.io");
  let n = [],
    i = 0,
    r = 0,
    l = Math.floor(Math.random() * 4) + 2,
    a = [],
    c = 0,
    d;
  const m = [
    "/AIfx/based.mp3",
    "/AIfx/dddd.mp3",
    "/AIfx/giga.mp3",
    "/AIfx/mega.mp3",
    "/AIfx/penta.mp3",
    "/AIfx/phenomenal.mp3",
    "/AIfx/wauw.mp3",
  ];
  function _() {
    const T = m[Math.floor(Math.random() * m.length)];
    new Audio(T).play();
  }
  function O(T) {
    const L = window.innerWidth,
      K = window.innerHeight;
    t(4, (c = T.clientX - L / 2)), K - T.clientY - 100;
  }
  let E;
  async function I() {
    try {
      const T = await s
        .collection("global_stats")
        .update(d, { "killCount+": 1 });
      t(2, (r = T.killCount));
    } catch (T) {
      console.error("Error updating global kill count:", T);
    }
  }
  async function q() {
    try {
      const T = await s
        .collection("global_stats")
        .getFullList(1, { sort: "-created" });
      if (T.length > 0) (d = T[0].id), t(2, (r = T[0].killCount));
      else {
        const L = await s.collection("global_stats").create({ killCount: 0 });
        (d = L.id), t(2, (r = L.killCount));
      }
    } catch (T) {
      console.error("Error fetching global kill count:", T);
    }
  }
  let v;
  async function N() {
    v = await s.collection("global_stats").subscribe(d, (T) => {
      T.action === "update" && t(2, (r = T.record.killCount));
    });
  }
  let P;
  function f(T, L) {
    if (n.find((M) => M.id === T)) {
      (P.currentTime = 0),
        P.play(),
        t(3, (a = [...a, { id: Date.now(), x: L.clientX, y: L.clientY }])),
        setTimeout(() => {
          t(3, (a = a.filter((b) => b.id !== T)));
        }, 1e3),
        t(0, (n = n.filter((b) => b.id !== T))),
        t(1, i++, i),
        I(),
        l--,
        l === 0 && (_(), (l = Math.floor(Math.random() * 4) + 2)),
        i === 5 && x();
      const M = Math.max(...n.map((b) => b.id)) + 1;
      t(0, (n = [...n, et(M)]));
    }
  }
  let h,
    p = !1;
  function x() {
    !p && h && (h.play(), (p = !0));
  }
  return (
    _e(() => {
      const T = () => {
        (E = window.innerWidth <= 768),
          t(
            0,
            (n = Array(E ? 10 : 50)
              .fill(null)
              .map((K, M) => et(M)))
          );
      };
      return (
        T(),
        window.addEventListener("resize", T),
        window.addEventListener("mousemove", O),
        (async () => (await q(), await N()))(),
        t(5, (h = new Audio("/spongebob.mp3"))),
        t(5, (h.loop = !0), h),
        (P = new Audio("/quack.mp3")),
        (P.volume = 0.2),
        () => {
          window.removeEventListener("resize", T),
            window.removeEventListener("mousemove", O),
            v && v();
        }
      );
    }),
    [
      n,
      i,
      r,
      a,
      c,
      h,
      O,
      f,
      () => (h.paused ? h.play() : h.pause()),
      (T, L) => f(T.id, L),
    ]
  );
}
class Jt extends le {
  constructor(e) {
    super(), ce(this, e, Bt, zt, ae, {});
  }
}
function Yt(o) {
  let e, t, s, n, i, r, l, a, c, d, m, _, O, E, I, q, v, N, P, f;
  return (
    (e = new pt({})),
    (s = new ye({ props: { direction: "right", speed: "slow" } })),
    (i = new xt({})),
    (l = new ye({ props: { direction: "left", speed: "medium" } })),
    (c = new gt({})),
    (m = new ye({ props: { direction: "right", speed: "fast" } })),
    (O = new It({})),
    (I = new ye({ props: { direction: "right", speed: "medium" } })),
    (v = new ut({})),
    (P = new Jt({})),
    {
      c() {
        Q(e.$$.fragment),
          (t = A()),
          Q(s.$$.fragment),
          (n = A()),
          Q(i.$$.fragment),
          (r = A()),
          Q(l.$$.fragment),
          (a = A()),
          Q(c.$$.fragment),
          (d = A()),
          Q(m.$$.fragment),
          (_ = A()),
          Q(O.$$.fragment),
          (E = A()),
          Q(I.$$.fragment),
          (q = A()),
          Q(v.$$.fragment),
          (N = A()),
          Q(P.$$.fragment);
      },
      l(h) {
        Z(e.$$.fragment, h),
          (t = R(h)),
          Z(s.$$.fragment, h),
          (n = R(h)),
          Z(i.$$.fragment, h),
          (r = R(h)),
          Z(l.$$.fragment, h),
          (a = R(h)),
          Z(c.$$.fragment, h),
          (d = R(h)),
          Z(m.$$.fragment, h),
          (_ = R(h)),
          Z(O.$$.fragment, h),
          (E = R(h)),
          Z(I.$$.fragment, h),
          (q = R(h)),
          Z(v.$$.fragment, h),
          (N = R(h)),
          Z(P.$$.fragment, h);
      },
      m(h, p) {
        ee(e, h, p),
          G(h, t, p),
          ee(s, h, p),
          G(h, n, p),
          ee(i, h, p),
          G(h, r, p),
          ee(l, h, p),
          G(h, a, p),
          ee(c, h, p),
          G(h, d, p),
          ee(m, h, p),
          G(h, _, p),
          ee(O, h, p),
          G(h, E, p),
          ee(I, h, p),
          G(h, q, p),
          ee(v, h, p),
          G(h, N, p),
          ee(P, h, p),
          (f = !0);
      },
      p: V,
      i(h) {
        f ||
          (U(e.$$.fragment, h),
          U(s.$$.fragment, h),
          U(i.$$.fragment, h),
          U(l.$$.fragment, h),
          U(c.$$.fragment, h),
          U(m.$$.fragment, h),
          U(O.$$.fragment, h),
          U(I.$$.fragment, h),
          U(v.$$.fragment, h),
          U(P.$$.fragment, h),
          (f = !0));
      },
      o(h) {
        te(e.$$.fragment, h),
          te(s.$$.fragment, h),
          te(i.$$.fragment, h),
          te(l.$$.fragment, h),
          te(c.$$.fragment, h),
          te(m.$$.fragment, h),
          te(O.$$.fragment, h),
          te(I.$$.fragment, h),
          te(v.$$.fragment, h),
          te(P.$$.fragment, h),
          (f = !1);
      },
      d(h) {
        h && (y(t), y(n), y(r), y(a), y(d), y(_), y(E), y(q), y(N)),
          se(e, h),
          se(s, h),
          se(i, h),
          se(l, h),
          se(c, h),
          se(m, h),
          se(O, h),
          se(I, h),
          se(v, h),
          se(P, h);
      },
    }
  );
}
class es extends le {
  constructor(e) {
    super(), ce(this, e, null, Yt, ae, {});
  }
}
export { es as component };
