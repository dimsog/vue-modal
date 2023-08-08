import { defineComponent as x, ref as h, onMounted as b, onUnmounted as w, openBlock as y, createElementBlock as m, createElementVNode as a, normalizeClass as v, toDisplayString as M, withModifiers as E, renderSlot as z, createBlock as S, createCommentVNode as R, nextTick as W, pushScopeId as H, popScopeId as L } from "vue";
const I = /* @__PURE__ */ x({
  __name: "ModalBackdrop",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = h(null), l = () => {
      n.value.style.width = document.documentElement.clientWidth + "px", n.value.style.height = document.body.getBoundingClientRect().height + "px";
    }, o = () => {
      t("close"), document.body.style.overflow = "";
    };
    return b(() => {
      l(), window.addEventListener("resize", l), document.body.style.overflow = "hidden";
    }), w(() => {
      document.body.style.overflow = "";
    }), (s, i) => (y(), m("div", {
      ref_key: "$backdrop",
      ref: n,
      onClick: o,
      class: "backdrop"
    }, null, 512));
  }
});
const k = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, N = /* @__PURE__ */ k(I, [["__scopeId", "data-v-ffcf226b"]]), _ = /* @__PURE__ */ new Map(), q = (e, t) => {
  _.set(e, t);
}, B = (e) => {
  const t = _.get(e);
  return t === void 0 ? null : t;
}, T = (e) => {
  _.delete(e);
}, C = (e, t, n) => e - n.left > -10 && e - n.left < 10 && t - n.top > -10 && t - n.top < 10 ? "top-left" : n.right - e > -10 && n.right - e < 10 && t - n.top > -10 && t - n.top < 10 ? "top-right" : n.bottom - t > -10 && n.bottom - t < 10 && e - n.left > -10 && e - n.left < 10 ? "bottom-left" : n.bottom - t > -10 && n.bottom - t < 10 && n.right - e > -10 && n.right - e < 10 ? "bottom-right" : e - n.left > -5 && e - n.left < 5 ? "left" : n.right - e > -5 && n.right - e < 5 ? "right" : t - n.top > -5 && t - n.top < 5 ? "top" : n.bottom - t > -5 && n.bottom - t < 5 ? "bottom" : null, O = (e, t, n) => {
  switch (C(e, t, n)) {
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
}, V = (e, t) => {
  e.addEventListener("mousemove", (n) => {
    const l = e.getBoundingClientRect();
    e.style.cursor = O(n.clientX, n.clientY, l);
  }), e.addEventListener("mousedown", (n) => {
    const l = n.clientX, o = n.clientY, s = e.getBoundingClientRect();
    let i = C(l, o, s);
    if (i === null)
      return;
    const r = e.clientWidth, u = e.clientHeight;
    let p = r, d = u, f = s.top, g = s.left;
    e.style.userSelect = "none", document.addEventListener("mousemove", (c) => {
      i !== null && (i === "left" && (g = s.left + (c.clientX - l), p = r - (c.clientX - l)), i === "right" && (p = r + (c.clientX - l)), i === "top" && (f = s.top + (c.clientY - o), d = u - (c.clientY - o)), i === "bottom" && (d = u + (c.clientY - o)), i == "top-left" && (g = s.left + (c.clientX - l), p = r - (c.clientX - l), f = s.top + (c.clientY - o), d = u - (c.clientY - o)), i == "top-right" && (p = r + (c.clientX - l), f = s.top + (c.clientY - o), d = u - (c.clientY - o)), i == "bottom-left" && (g = s.left + (c.clientX - l), p = r - (c.clientX - l), d = u + (c.clientY - o)), i == "bottom-right" && (p = r + (c.clientX - l), d = u + (c.clientY - o)), e.style.width = p + "px", e.style.height = d + "px", e.style.left = g + "px", e.style.top = f + "px", t({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      }));
    }), e.addEventListener("mouseup", () => {
      i = null, e.style.userSelect = "";
    });
  });
}, X = (e, t) => {
  e.querySelector(".modal-header").addEventListener("mousedown", (l) => {
    let o = l.clientX - e.getBoundingClientRect().left, s = l.clientY - e.getBoundingClientRect().top;
    const i = function(r) {
      e.style.top = r.clientY - s + "px", e.style.left = r.clientX - o + "px", t({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      });
    };
    document.addEventListener("mousemove", i), document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", i);
    }, {
      once: !0
    });
  });
}, Y = (e, t) => {
  e.style.width = t.width + "px", e.style.height = t.height + "px", e.style.top = t.y !== null ? t.y + "px" : document.documentElement.clientHeight / 2 - e.clientHeight / 2 + "px", e.style.left = t.x !== null ? t.x + "px" : document.documentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
}, j = (e) => (H("data-v-7c0740c7"), e = e(), L(), e), A = { class: "modal-header__title" }, D = { class: "modal-header__buttons" }, U = ["onClick"], F = /* @__PURE__ */ j(() => /* @__PURE__ */ a("svg", {
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
  /* @__PURE__ */ a("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ a("path", { d: "M18 6l-12 12" }),
  /* @__PURE__ */ a("path", { d: "M6 6l12 12" })
], -1)), G = [
  F
], J = /* @__PURE__ */ x({
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
    },
    backdrop: {
      type: Boolean,
      default: !1
    },
    resize: {
      type: Boolean,
      default: !0
    },
    scroll: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, n = h(!1), l = h(null), o = h(null), s = h(null), i = h(null);
    let r = null;
    const u = () => {
      r = r || {
        x: document.documentElement.clientWidth / 2 - Number(t.width.replace("px", "")) / 2,
        y: window.innerHeight / 2 - Number(t.height.replace("px", "")) / 2,
        width: Number(t.width.replace("px", "")),
        height: Number(t.height.replace("px", ""))
      }, n.value = !0, W(async () => {
        l.value === null || i.value == null || o.value === null || (Y(l.value, r), t.resize && V(l.value, (d) => {
          r = d;
        }), X(l.value, (d) => {
          r = d;
        }), i.value.style.height = `calc(100% - ${o.value.clientHeight}px)`);
      });
    }, p = () => {
      n.value = !1;
    };
    return b(() => {
      q(t.name, {
        open: u,
        close: p
      });
    }), w(() => {
      T(t.name);
    }), (d, f) => (y(), m("div", null, [
      a("div", {
        ref_key: "$modal",
        ref: l,
        class: v(["modal", { "modal--hidden": !n.value }])
      }, [
        a("div", {
          ref_key: "$headerWrapper",
          ref: o,
          class: "modal-header-wrapper"
        }, [
          a("div", {
            ref_key: "$header",
            ref: s,
            class: "modal-header"
          }, [
            a("div", A, M(e.title), 1),
            a("div", D, [
              a("button", {
                type: "button",
                onClick: E(p, ["prevent"])
              }, G, 8, U)
            ])
          ], 512)
        ], 512),
        a("div", {
          ref_key: "$modalBody",
          ref: i,
          class: "modal-body"
        }, [
          a("div", {
            class: v(["modal-body__content", { "modal-body__content--scroll": t.scroll }])
          }, [
            z(d.$slots, "default", {}, void 0, !0)
          ], 2)
        ], 512)
      ], 2),
      t.backdrop && n.value ? (y(), S(N, {
        key: 0,
        onClose: p
      })) : R("", !0)
    ]));
  }
});
const Q = /* @__PURE__ */ k(J, [["__scopeId", "data-v-7c0740c7"]]), Z = (e) => {
  var t;
  (t = B(e)) == null || t.open();
}, P = (e) => {
  var t;
  (t = B(e)) == null || t.close();
};
export {
  Q as Modal,
  P as close,
  Z as open
};
//# sourceMappingURL=modal.js.map
