import { defineComponent as w, ref as g, onMounted as k, onUnmounted as m, openBlock as C, createElementBlock as M, createElementVNode as d, normalizeClass as B, toDisplayString as E, withModifiers as S, renderSlot as R, nextTick as z, pushScopeId as H, popScopeId as L } from "vue";
const _ = /* @__PURE__ */ new Map(), W = (e, t) => {
  _.set(e, t);
}, x = (e) => {
  const t = _.get(e);
  return t === void 0 ? null : t;
}, I = (e) => {
  _.delete(e);
}, b = (e, t, n) => e - n.left > -10 && e - n.left < 10 && t - n.top > -10 && t - n.top < 10 ? "top-left" : n.right - e > -10 && n.right - e < 10 && t - n.top > -10 && t - n.top < 10 ? "top-right" : n.bottom - t > -10 && n.bottom - t < 10 && e - n.left > -10 && e - n.left < 10 ? "bottom-left" : n.bottom - t > -10 && n.bottom - t < 10 && n.right - e > -10 && n.right - e < 10 ? "bottom-right" : e - n.left > -5 && e - n.left < 5 ? "left" : n.right - e > -5 && n.right - e < 5 ? "right" : t - n.top > -5 && t - n.top < 5 ? "top" : n.bottom - t > -5 && n.bottom - t < 5 ? "bottom" : null, N = (e, t, n) => {
  switch (b(e, t, n)) {
    case "left":
    case "right":
      return "col-resize";
    case "top":
    case "bottom":
      return "row-resize";
    case "top-left":
    case "bottom-right":
      return "nwse-resize";
    case "top-right":
    case "bottom-left":
      return "nesw-resize";
    default:
      return "";
  }
}, T = (e, t, n) => {
  let p = !1;
  t.addEventListener("mousemove", (c) => {
    if (p)
      return;
    const i = t.getBoundingClientRect();
    t.style.cursor = N(c.clientX, c.clientY, i);
  }), t.addEventListener("mousedown", (c) => {
    if (p)
      return;
    const i = c.clientX, r = c.clientY, s = t.getBoundingClientRect();
    let o = b(i, r, s);
    if (o === null)
      return;
    const u = t.clientWidth, h = t.clientHeight;
    let a = u, f = h, v = s.top, y = s.left;
    t.style.userSelect = "none", document.addEventListener("mousemove", (l) => {
      o !== null && (o === "left" && (y = s.left + (l.clientX - i), a = u - (l.clientX - i)), o === "right" && (a = u + (l.clientX - i)), o === "top" && (v = s.top + (l.clientY - r), f = h - (l.clientY - r)), o === "bottom" && (f = h + (l.clientY - r)), o == "top-left" && (y = s.left + (l.clientX - i), a = u - (l.clientX - i), v = s.top + (l.clientY - r), f = h - (l.clientY - r)), o == "top-right" && (a = u + (l.clientX - i), v = s.top + (l.clientY - r), f = h - (l.clientY - r)), o == "bottom-left" && (y = s.left + (l.clientX - i), a = u - (l.clientX - i), f = h + (l.clientY - r)), o == "bottom-right" && (a = u + (l.clientX - i), f = h + (l.clientY - r)), t.style.width = a + "px", t.style.height = f + "px", t.style.left = y + "px", t.style.top = v + "px", n({
        x: t.getBoundingClientRect().x,
        y: t.getBoundingClientRect().y,
        width: t.clientWidth,
        height: t.clientHeight
      }));
    }), t.addEventListener("mouseup", () => {
      o = null, t.style.userSelect = "";
    });
  }), e.addEventListener("mousedown", (c) => {
    let i = c.clientX - t.getBoundingClientRect().left, r = c.clientY - t.getBoundingClientRect().top;
    p = !0;
    const s = function(o) {
      t.style.top = o.pageY - r + "px", t.style.left = o.pageX - i + "px", n({
        x: t.getBoundingClientRect().x,
        y: t.getBoundingClientRect().y,
        width: t.clientWidth,
        height: t.clientHeight
      });
    };
    document.addEventListener("mousemove", s), e.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", s), p = !1;
    });
  });
}, q = (e, t) => {
  e.style.width = t.width + "px", e.style.height = t.height + "px", e.style.top = t.y !== null ? t.y + "px" : document.documentElement.clientHeight / 2 - e.clientHeight / 2 + "px", e.style.left = t.x !== null ? t.x + "px" : document.documentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
}, O = (e) => (H("data-v-b242416d"), e = e(), L(), e), X = { class: "modal-header__title" }, Y = { class: "modal-header__buttons" }, j = ["onClick"], A = /* @__PURE__ */ O(() => /* @__PURE__ */ d("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "icon icon-tabler icon-tabler-x",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "currentColor",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  /* @__PURE__ */ d("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ d("path", { d: "M18 6l-12 12" }),
  /* @__PURE__ */ d("path", { d: "M6 6l12 12" })
], -1)), D = [
  A
], U = { class: "modal-body__content" }, V = /* @__PURE__ */ w({
  __name: "Modal",
  props: {
    name: {
      type: String,
      required: !0
    },
    title: {
      type: String,
      required: !1,
      default: null
    },
    width: {
      type: String,
      default: "600px"
    },
    height: {
      type: String,
      default: "400px"
    }
  },
  setup(e) {
    const t = e, n = g(!1), p = g(null), c = g(null), i = g(null), r = g(null);
    let s = {
      x: null,
      y: null,
      width: Number(t.width.replace("px", "")),
      height: Number(t.height.replace("px", ""))
    };
    const o = () => {
      n.value = !0, z(async () => {
        p.value === null || i.value == null || (q(p.value, s), T(i.value, p.value, (h) => {
          s = h;
        }), r.value.style.height = `calc(100% - ${c.value.clientHeight}px)`);
      });
    }, u = () => {
      n.value = !1;
    };
    return k(() => {
      W(t.name, {
        open: o,
        close: u
      });
    }), m(() => {
      I(t.name);
    }), (h, a) => (C(), M("div", null, [
      d("div", {
        ref_key: "$modal",
        ref: p,
        class: B(["modal", { "modal--hidden": !n.value }])
      }, [
        d("div", {
          ref_key: "$headerWrapper",
          ref: c,
          class: "modal-header-wrapper"
        }, [
          d("div", {
            ref_key: "$header",
            ref: i,
            class: "modal-header"
          }, [
            d("div", X, E(e.title), 1),
            d("div", Y, [
              d("button", {
                type: "button",
                onClick: S(u, ["prevent"])
              }, D, 8, j)
            ])
          ], 512)
        ], 512),
        d("div", {
          ref_key: "$modalBody",
          ref: r,
          class: "modal-body"
        }, [
          d("div", U, [
            R(h.$slots, "default", {}, void 0, !0)
          ])
        ], 512)
      ], 2)
    ]));
  }
});
const F = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [p, c] of t)
    n[p] = c;
  return n;
}, J = /* @__PURE__ */ F(V, [["__scopeId", "data-v-b242416d"]]), K = (e) => {
  var t;
  (t = x(e)) == null || t.open();
}, Q = (e) => {
  var t;
  (t = x(e)) == null || t.close();
};
export {
  J as Modal,
  Q as close,
  K as open
};
