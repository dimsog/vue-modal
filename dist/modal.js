import { defineComponent as m, ref as g, onMounted as C, onUnmounted as M, openBlock as x, createElementBlock as w, createElementVNode as u, toDisplayString as B, withModifiers as E, renderSlot as S, createCommentVNode as R, nextTick as z, pushScopeId as H, popScopeId as L } from "vue";
const _ = /* @__PURE__ */ new Map(), W = (e, t) => {
  _.set(e, t);
}, b = (e) => {
  const t = _.get(e);
  return t === void 0 ? null : t;
}, I = (e) => {
  _.delete(e);
}, k = (e, t, n) => e - n.left > -10 && e - n.left < 10 && t - n.top > -10 && t - n.top < 10 ? "top-left" : n.right - e > -10 && n.right - e < 10 && t - n.top > -10 && t - n.top < 10 ? "top-right" : n.bottom - t > -10 && n.bottom - t < 10 && e - n.left > -10 && e - n.left < 10 ? "bottom-left" : n.bottom - t > -10 && n.bottom - t < 10 && n.right - e > -10 && n.right - e < 10 ? "bottom-right" : e - n.left > -5 && e - n.left < 5 ? "left" : n.right - e > -5 && n.right - e < 5 ? "right" : t - n.top > -5 && t - n.top < 5 ? "top" : n.bottom - t > -5 && n.bottom - t < 5 ? "bottom" : null, N = (e, t, n) => {
  switch (k(e, t, n)) {
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
  let d = !1;
  t.addEventListener("mousemove", (s) => {
    if (d)
      return;
    const i = t.getBoundingClientRect();
    t.style.cursor = N(s.clientX, s.clientY, i);
  }), t.addEventListener("mousedown", (s) => {
    if (d)
      return;
    const i = s.clientX, r = s.clientY, c = t.getBoundingClientRect();
    let o = k(i, r, c);
    if (o === null)
      return;
    const h = t.clientWidth, p = t.clientHeight;
    let a = h, f = p, v = c.top, y = c.left;
    t.style.userSelect = "none", document.addEventListener("mousemove", (l) => {
      o !== null && (o === "left" && (y = c.left + (l.clientX - i), a = h - (l.clientX - i)), o === "right" && (a = h + (l.clientX - i)), o === "top" && (v = c.top + (l.clientY - r), f = p - (l.clientY - r)), o === "bottom" && (f = p + (l.clientY - r)), o == "top-left" && (y = c.left + (l.clientX - i), a = h - (l.clientX - i), v = c.top + (l.clientY - r), f = p - (l.clientY - r)), o == "top-right" && (a = h + (l.clientX - i), v = c.top + (l.clientY - r), f = p - (l.clientY - r)), o == "bottom-left" && (y = c.left + (l.clientX - i), a = h - (l.clientX - i), f = p + (l.clientY - r)), o == "bottom-right" && (a = h + (l.clientX - i), f = p + (l.clientY - r)), t.style.width = a + "px", t.style.height = f + "px", t.style.left = y + "px", t.style.top = v + "px", n({
        x: t.getBoundingClientRect().x,
        y: t.getBoundingClientRect().y,
        width: t.clientWidth,
        height: t.clientHeight
      }));
    }), t.addEventListener("mouseup", () => {
      o = null, t.style.userSelect = "";
    });
  }), e.addEventListener("mousedown", (s) => {
    let i = s.clientX - t.getBoundingClientRect().left, r = s.clientY - t.getBoundingClientRect().top;
    d = !0;
    const c = function(o) {
      t.style.top = o.pageY - r + "px", t.style.left = o.pageX - i + "px", n({
        x: t.getBoundingClientRect().x,
        y: t.getBoundingClientRect().y,
        width: t.clientWidth,
        height: t.clientHeight
      });
    };
    document.addEventListener("mousemove", c), e.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", c), d = !1;
    });
  });
}, q = (e, t) => {
  e.style.width = t.width + "px", e.style.height = t.height + "px", e.style.top = t.y !== null ? t.y + "px" : document.documentElement.clientHeight / 2 - e.clientHeight / 2 + "px", e.style.left = t.x !== null ? t.x + "px" : document.documentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
}, O = (e) => (H("data-v-4a8c1008"), e = e(), L(), e), V = { class: "modal-header__title" }, X = { class: "modal-header__buttons" }, Y = ["onClick"], j = /* @__PURE__ */ O(() => /* @__PURE__ */ u("svg", {
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
  /* @__PURE__ */ u("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ u("path", { d: "M18 6l-12 12" }),
  /* @__PURE__ */ u("path", { d: "M6 6l12 12" })
], -1)), A = [
  j
], D = { class: "modal-body__content" }, U = /* @__PURE__ */ m({
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
    const t = e, n = g(!1), d = g(null), s = g(null), i = g(null), r = g(null);
    let c = {
      x: null,
      y: null,
      width: Number(t.width.replace("px", "")),
      height: Number(t.height.replace("px", ""))
    };
    const o = () => {
      n.value = !0, z(async () => {
        d.value === null || i.value == null || (q(d.value, c), T(i.value, d.value, (p) => {
          c = p;
        }), r.value.style.height = `calc(100% - ${s.value.clientHeight}px)`);
      });
    }, h = () => {
      n.value = !1;
    };
    return C(() => {
      W(t.name, {
        open: o,
        close: h
      });
    }), M(() => {
      I(t.name);
    }), (p, a) => (x(), w("div", null, [
      n.value ? (x(), w("div", {
        key: 0,
        ref_key: "$modal",
        ref: d,
        class: "modal"
      }, [
        u("div", {
          ref_key: "$headerWrapper",
          ref: s,
          class: "modal-header-wrapper"
        }, [
          u("div", {
            ref_key: "$header",
            ref: i,
            class: "modal-header"
          }, [
            u("div", V, B(e.title), 1),
            u("div", X, [
              u("button", {
                type: "button",
                onClick: E(h, ["prevent"])
              }, A, 8, Y)
            ])
          ], 512)
        ], 512),
        u("div", {
          ref_key: "$modalBody",
          ref: r,
          class: "modal-body"
        }, [
          u("div", D, [
            S(p.$slots, "default", {}, void 0, !0)
          ])
        ], 512)
      ], 512)) : R("", !0)
    ]));
  }
});
const F = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [d, s] of t)
    n[d] = s;
  return n;
}, J = /* @__PURE__ */ F(U, [["__scopeId", "data-v-4a8c1008"]]), K = (e) => {
  var t;
  (t = b(e)) == null || t.open();
}, Q = (e) => {
  var t;
  (t = b(e)) == null || t.close();
};
export {
  J as Modal,
  Q as close,
  K as open
};
