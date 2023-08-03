import { defineComponent as y, ref as h, onMounted as x, openBlock as _, createElementBlock as b, onUnmounted as B, createElementVNode as a, normalizeClass as C, toDisplayString as M, withModifiers as E, renderSlot as z, createBlock as S, createCommentVNode as H, nextTick as R, pushScopeId as W, popScopeId as L } from "vue";
const I = /* @__PURE__ */ y({
  __name: "ModalBackdrop",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = h(null), o = () => {
      n.value.style.width = document.documentElement.clientWidth + "px", n.value.style.height = document.documentElement.clientHeight + "px";
    }, l = () => {
      t("close"), document.body.style.overflow = "";
    };
    return x(() => {
      o(), window.addEventListener("resize", o), document.body.style.overflow = "hidden";
    }), (d, i) => (_(), b("div", {
      ref_key: "$backdrop",
      ref: n,
      onClick: l,
      class: "backdrop"
    }, null, 512));
  }
});
const m = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, N = /* @__PURE__ */ m(I, [["__scopeId", "data-v-44b276f1"]]), v = /* @__PURE__ */ new Map(), q = (e, t) => {
  v.set(e, t);
}, w = (e) => {
  const t = v.get(e);
  return t === void 0 ? null : t;
}, T = (e) => {
  v.delete(e);
}, k = (e, t, n) => e - n.left > -10 && e - n.left < 10 && t - n.top > -10 && t - n.top < 10 ? "top-left" : n.right - e > -10 && n.right - e < 10 && t - n.top > -10 && t - n.top < 10 ? "top-right" : n.bottom - t > -10 && n.bottom - t < 10 && e - n.left > -10 && e - n.left < 10 ? "bottom-left" : n.bottom - t > -10 && n.bottom - t < 10 && n.right - e > -10 && n.right - e < 10 ? "bottom-right" : e - n.left > -5 && e - n.left < 5 ? "left" : n.right - e > -5 && n.right - e < 5 ? "right" : t - n.top > -5 && t - n.top < 5 ? "top" : n.bottom - t > -5 && n.bottom - t < 5 ? "bottom" : null, O = (e, t, n) => {
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
}, V = (e, t) => {
  e.addEventListener("mousemove", (n) => {
    const o = e.getBoundingClientRect();
    e.style.cursor = O(n.clientX, n.clientY, o);
  }), e.addEventListener("mousedown", (n) => {
    const o = n.clientX, l = n.clientY, d = e.getBoundingClientRect();
    let i = k(o, l, d);
    if (i === null)
      return;
    const r = e.clientWidth, u = e.clientHeight;
    let p = r, s = u, f = d.top, g = d.left;
    e.style.userSelect = "none", document.addEventListener("mousemove", (c) => {
      i !== null && (i === "left" && (g = d.left + (c.clientX - o), p = r - (c.clientX - o)), i === "right" && (p = r + (c.clientX - o)), i === "top" && (f = d.top + (c.clientY - l), s = u - (c.clientY - l)), i === "bottom" && (s = u + (c.clientY - l)), i == "top-left" && (g = d.left + (c.clientX - o), p = r - (c.clientX - o), f = d.top + (c.clientY - l), s = u - (c.clientY - l)), i == "top-right" && (p = r + (c.clientX - o), f = d.top + (c.clientY - l), s = u - (c.clientY - l)), i == "bottom-left" && (g = d.left + (c.clientX - o), p = r - (c.clientX - o), s = u + (c.clientY - l)), i == "bottom-right" && (p = r + (c.clientX - o), s = u + (c.clientY - l)), e.style.width = p + "px", e.style.height = s + "px", e.style.left = g + "px", e.style.top = f + "px", t({
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
  e.querySelector(".modal-header").addEventListener("mousedown", (o) => {
    let l = o.clientX - e.getBoundingClientRect().left, d = o.clientY - e.getBoundingClientRect().top;
    const i = function(r) {
      e.style.top = r.pageY - d + "px", e.style.left = r.pageX - l + "px", t({
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
}, j = (e) => (W("data-v-0d57dedd"), e = e(), L(), e), A = { class: "modal-header__title" }, D = { class: "modal-header__buttons" }, U = ["onClick"], F = /* @__PURE__ */ j(() => /* @__PURE__ */ a("svg", {
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
], J = { class: "modal-body__content" }, K = /* @__PURE__ */ y({
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
    }
  },
  setup(e) {
    const t = e, n = h(!1), o = h(null), l = h(null), d = h(null), i = h(null);
    let r = null;
    const u = () => {
      r = r || {
        x: document.documentElement.clientWidth / 2 - Number(t.width.replace("px", "")) / 2,
        y: window.innerHeight / 2 - Number(t.height.replace("px", "")) / 2,
        width: Number(t.width.replace("px", "")),
        height: Number(t.height.replace("px", ""))
      }, n.value = !0, R(async () => {
        o.value === null || i.value == null || l.value === null || (Y(o.value, r), t.resize && V(o.value, (s) => {
          r = s;
        }), X(o.value, (s) => {
          r = s;
        }), i.value.style.height = `calc(100% - ${l.value.clientHeight}px)`);
      });
    }, p = () => {
      n.value = !1;
    };
    return x(() => {
      q(t.name, {
        open: u,
        close: p
      });
    }), B(() => {
      T(t.name);
    }), (s, f) => (_(), b("div", null, [
      a("div", {
        ref_key: "$modal",
        ref: o,
        class: C(["modal", { "modal--hidden": !n.value }])
      }, [
        a("div", {
          ref_key: "$headerWrapper",
          ref: l,
          class: "modal-header-wrapper"
        }, [
          a("div", {
            ref_key: "$header",
            ref: d,
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
          a("div", J, [
            z(s.$slots, "default", {}, void 0, !0)
          ])
        ], 512)
      ], 2),
      t.backdrop && n.value ? (_(), S(N, {
        key: 0,
        onClose: p
      })) : H("", !0)
    ]));
  }
});
const Z = /* @__PURE__ */ m(K, [["__scopeId", "data-v-0d57dedd"]]), P = (e) => {
  var t;
  (t = w(e)) == null || t.open();
}, $ = (e) => {
  var t;
  (t = w(e)) == null || t.close();
};
export {
  Z as Modal,
  $ as close,
  P as open
};
//# sourceMappingURL=modal.js.map
