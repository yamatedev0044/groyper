import {
  s as C,
  d as P,
  u as B,
  g as U,
  e as N,
  r as W,
  a as X,
  o as Y,
} from "../chunks/scheduler.wNbmGW0Y.js";
import {
  S as z,
  i as F,
  e as y,
  s as S,
  y as G,
  c as g,
  f as h,
  g as T,
  b as E,
  o as _,
  j as w,
  h as v,
  z as M,
  t as K,
  m as O,
  a as V,
  d as A,
  p as u,
  A as Q,
} from "../chunks/index.DomoiRLL.js";
import { e as j } from "../chunks/each.Brr88zmJ.js";
const H =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
var J = "@vercel/analytics",
  Z = "1.3.1",
  $ = () => {
    window.va ||
      (window.va = function (...o) {
        (window.vaq = window.vaq || []).push(o);
      });
  };
function L() {
  return typeof window < "u";
}
function R() {
  try {
    const e = "production";
  } catch {}
  return "production";
}
function x(e = "auto") {
  if (e === "auto") {
    window.vam = R();
    return;
  }
  window.vam = e;
}
function ee() {
  return (L() ? window.vam : R()) || "production";
}
function b() {
  return ee() === "development";
}
var te = "https://va.vercel-scripts.com/v1/script.debug.js",
  se = "/_vercel/insights/script.js";
function oe(e = { debug: !0 }) {
  var o;
  if (!L()) return;
  x(e.mode),
    $(),
    e.beforeSend &&
      ((o = window.va) == null || o.call(window, "beforeSend", e.beforeSend));
  const n = e.scriptSrc || (b() ? te : se);
  if (document.head.querySelector(`script[src*="${n}"]`)) return;
  const t = document.createElement("script");
  (t.src = n),
    (t.defer = !0),
    (t.dataset.sdkn = J + (e.framework ? `/${e.framework}` : "")),
    (t.dataset.sdkv = Z),
    e.disableAutoTrack && (t.dataset.disableAutoTrack = "1"),
    e.endpoint && (t.dataset.endpoint = e.endpoint),
    e.dsn && (t.dataset.dsn = e.dsn),
    (t.onerror = () => {
      const i = b()
        ? "Please check if any ad blockers are enabled and try again."
        : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${n}. ${i}`
      );
    }),
    b() && e.debug === !1 && (t.dataset.debug = "false"),
    document.head.appendChild(t);
}
const { document: k } = H;
function q(e, o, n) {
  const t = e.slice();
  return (t[9] = o[n]), t;
}
function D(e) {
  let o,
    n,
    t,
    i = j(e[2]),
    l = [];
  for (let a = 0; a < i.length; a += 1) l[a] = I(q(e, i, a));
  return {
    c() {
      for (let a = 0; a < l.length; a += 1) l[a].c();
      (o = S()), (n = y("div")), (t = V("🐸")), this.h();
    },
    l(a) {
      for (let s = 0; s < l.length; s += 1) l[s].l(a);
      (o = T(a)), (n = g(a, "DIV", { class: !0, style: !0 }));
      var r = E(n);
      (t = A(r, "🐸")), r.forEach(h), this.h();
    },
    h() {
      _(n, "class", "custom-cursor svelte-sdvk7u"),
        u(n, "left", e[0] + "px"),
        u(n, "top", e[1] + "px");
    },
    m(a, r) {
      for (let s = 0; s < l.length; s += 1) l[s] && l[s].m(a, r);
      v(a, o, r), v(a, n, r), w(n, t);
    },
    p(a, r) {
      if (r & 4) {
        i = j(a[2]);
        let s;
        for (s = 0; s < i.length; s += 1) {
          const m = q(a, i, s);
          l[s]
            ? l[s].p(m, r)
            : ((l[s] = I(m)), l[s].c(), l[s].m(o.parentNode, o));
        }
        for (; s < l.length; s += 1) l[s].d(1);
        l.length = i.length;
      }
      r & 1 && u(n, "left", a[0] + "px"), r & 2 && u(n, "top", a[1] + "px");
    },
    d(a) {
      a && (h(o), h(n)), Q(l, a);
    },
  };
}
function I(e) {
  let o, n;
  return {
    c() {
      (o = y("div")), (n = V("🐸")), this.h();
    },
    l(t) {
      o = g(t, "DIV", { class: !0, style: !0 });
      var i = E(o);
      (n = A(i, "🐸")), i.forEach(h), this.h();
    },
    h() {
      _(o, "class", "trail-point svelte-sdvk7u"),
        u(o, "left", e[9].x + "px"),
        u(o, "top", e[9].y + "px"),
        u(o, "opacity", e[9].opacity);
    },
    m(t, i) {
      v(t, o, i), w(o, n);
    },
    p(t, i) {
      i & 4 && u(o, "left", t[9].x + "px"),
        i & 4 && u(o, "top", t[9].y + "px"),
        i & 4 && u(o, "opacity", t[9].opacity);
    },
    d(t) {
      t && h(o);
    },
  };
}
function ne(e) {
  let o,
    n,
    t,
    i,
    l,
    a,
    r,
    s = e[3] && D(e);
  const m = e[7].default,
    d = P(m, e, e[6], null);
  return {
    c() {
      (o = y("link")),
        (n = S()),
        (t = y("div")),
        s && s.c(),
        (i = S()),
        d && d.c(),
        this.h();
    },
    l(c) {
      const f = G("svelte-1sqajf5", k.head);
      (o = g(f, "LINK", { href: !0, rel: !0 })),
        f.forEach(h),
        (n = T(c)),
        (t = g(c, "DIV", { class: !0 }));
      var p = E(t);
      s && s.l(p), (i = T(p)), d && d.l(p), p.forEach(h), this.h();
    },
    h() {
      _(
        o,
        "href",
        "https://fonts.googleapis.com/css2?family=Bangers&display=swap"
      ),
        _(o, "rel", "stylesheet"),
        (k.title = "Groyper || Ethereum"),
        _(t, "class", "cursor-container svelte-sdvk7u");
    },
    m(c, f) {
      w(k.head, o),
        v(c, n, f),
        v(c, t, f),
        s && s.m(t, null),
        w(t, i),
        d && d.m(t, null),
        (l = !0),
        a ||
          ((r = [M(t, "mousemove", e[4]), M(t, "mouseleave", e[5])]), (a = !0));
    },
    p(c, [f]) {
      c[3]
        ? s
          ? s.p(c, f)
          : ((s = D(c)), s.c(), s.m(t, i))
        : s && (s.d(1), (s = null)),
        d &&
          d.p &&
          (!l || f & 64) &&
          B(d, m, c, c[6], l ? N(m, c[6], f, null) : U(c[6]), null);
    },
    i(c) {
      l || (K(d, c), (l = !0));
    },
    o(c) {
      O(d, c), (l = !1);
    },
    d(c) {
      c && (h(n), h(t)), h(o), s && s.d(), d && d.d(c), (a = !1), W(r);
    },
  };
}
function ae(e, o, n) {
  let { $$slots: t = {}, $$scope: i } = o;
  oe({ mode: "production" });
  let l = 0,
    a = 0,
    r = [],
    s = !1;
  function m(f) {
    n(0, (l = f.clientX)), n(1, (a = f.clientY)), n(3, (s = !0)), c(l, a);
  }
  function d() {
    n(3, (s = !1));
  }
  function c(f, p) {
    r.push({ x: f, y: p, opacity: 1 }), r.length > 20 && r.shift(), n(2, r);
  }
  return (
    X(() => {
      n(
        2,
        (r = r
          .map((f) => ({ ...f, opacity: f.opacity - 0.05 }))
          .filter((f) => f.opacity > 0))
      );
    }),
    Y(() => {
      document.body.style.cursor = "none";
    }),
    (e.$$set = (f) => {
      "$$scope" in f && n(6, (i = f.$$scope));
    }),
    [l, a, r, s, m, d, i, t]
  );
}
class ce extends z {
  constructor(o) {
    super(), F(this, o, ae, ne, C, {});
  }
}
export { ce as component };
