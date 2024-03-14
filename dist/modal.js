import { defineComponent as b, ref as _, onMounted as x, onUnmounted as k, openBlock as h, createElementBlock as f, createElementVNode as a, normalizeClass as S, toDisplayString as E, withModifiers as z, renderSlot as m, createBlock as W, createCommentVNode as M, nextTick as H, pushScopeId as L, popScopeId as R, unref as I } from "vue";
const N = /* @__PURE__ */ b({
  __name: "ModalBackdrop",
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = _(null), o = n, l = () => {
      t.value.style.width = document.documentElement.clientWidth + "px", t.value.style.height = document.documentElement.clientHeight + "px";
    }, d = () => {
      o("close"), document.body.style.overflow = "";
    };
    return x(() => {
      l(), window.addEventListener("resize", l), document.body.style.overflow = "hidden";
    }), k(() => {
      document.body.style.overflow = "", window.removeEventListener("resize", l);
    }), (i, r) => (h(), f("div", {
      ref_key: "$backdrop",
      ref: t,
      onClick: d,
      class: "backdrop"
    }, null, 512));
  }
});
const y = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, l] of n)
    t[o] = l;
  return t;
}, q = /* @__PURE__ */ y(N, [["__scopeId", "data-v-a9a01d98"]]), w = /* @__PURE__ */ new Map(), F = (e, n) => {
  w.set(e, n);
}, B = (e) => {
  const n = w.get(e);
  return n === void 0 ? null : n;
}, T = (e) => {
  w.delete(e);
}, C = (e, n, t) => e - t.left > -10 && e - t.left < 10 && n - t.top > -10 && n - t.top < 10 ? "top-left" : t.right - e > -10 && t.right - e < 10 && n - t.top > -10 && n - t.top < 10 ? "top-right" : t.bottom - n > -10 && t.bottom - n < 10 && e - t.left > -10 && e - t.left < 10 ? "bottom-left" : t.bottom - n > -10 && t.bottom - n < 10 && t.right - e > -10 && t.right - e < 10 ? "bottom-right" : e - t.left > -5 && e - t.left < 5 ? "left" : t.right - e > -5 && t.right - e < 5 ? "right" : n - t.top > -5 && n - t.top < 5 ? "top" : t.bottom - n > -5 && t.bottom - n < 5 ? "bottom" : null, A = (e, n, t) => {
  switch (C(e, n, t)) {
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
}, O = (e, n) => {
  e.addEventListener("mousemove", (t) => {
    const o = e.getBoundingClientRect();
    e.style.cursor = A(t.clientX, t.clientY, o);
  }), e.addEventListener("mousedown", (t) => {
    const o = t.clientX, l = t.clientY, d = e.getBoundingClientRect();
    let i = C(o, l, d);
    if (i === null)
      return;
    const r = e.clientWidth, u = e.clientHeight;
    let s = r, p = u, g = d.top, v = d.left;
    document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "none"), document.addEventListener("mousemove", (c) => {
      i !== null && (i === "left" && (v = d.left + (c.clientX - o), s = r - (c.clientX - o)), i === "right" && (s = r + (c.clientX - o)), i === "top" && (g = d.top + (c.clientY - l), p = u - (c.clientY - l)), i === "bottom" && (p = u + (c.clientY - l)), i == "top-left" && (v = d.left + (c.clientX - o), s = r - (c.clientX - o), g = d.top + (c.clientY - l), p = u - (c.clientY - l)), i == "top-right" && (s = r + (c.clientX - o), g = d.top + (c.clientY - l), p = u - (c.clientY - l)), i == "bottom-left" && (v = d.left + (c.clientX - o), s = r - (c.clientX - o), p = u + (c.clientY - l)), i == "bottom-right" && (s = r + (c.clientX - o), p = u + (c.clientY - l)), e.style.width = s + "px", e.style.height = p + "px", e.style.left = v + "px", e.style.top = g + "px", n({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      }));
    }), e.addEventListener("mouseup", () => {
      i = null, document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "");
    });
  });
}, V = (e, n) => {
  e.querySelector(".modal-header").addEventListener("mousedown", (o) => {
    let l = o.clientX - e.getBoundingClientRect().left, d = o.clientY - e.getBoundingClientRect().top;
    const i = function(r) {
      e.style.top = r.clientY - d + "px", e.style.left = r.clientX - l + "px", document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "none"), n({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      });
    };
    document.addEventListener("mousemove", i), document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", i), document.body.style.userSelect = "", document.body.style.setProperty("-webkit-user-select", "");
    }, {
      once: !0
    });
  });
}, X = (e, n) => {
  e.style.width = n.width + "px", e.style.height = n.height + "px", e.style.top = n.y !== null ? n.y + "px" : document.documentElement.clientHeight / 2 - e.clientHeight / 2 + "px", e.style.left = n.x !== null ? n.x + "px" : document.documentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
}, Y = (e) => (L("data-v-d46a237b"), e = e(), R(), e), j = { class: "modal-header__title" }, D = { class: "modal-header__buttons" }, P = /* @__PURE__ */ Y(() => /* @__PURE__ */ a("svg", {
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
], -1)), U = [
  P
], G = /* @__PURE__ */ b({
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
    minWidth: {
      type: String,
      default: "200px"
    },
    width: {
      type: String,
      default: "600px"
    },
    minHeight: {
      type: String,
      default: "200px"
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
    const n = _(!1), t = e, o = _(null), l = _(null), d = _(null);
    let i = null;
    const r = () => {
      i = i || {
        x: document.documentElement.clientWidth / 2 - Number(t.width.replace("px", "")) / 2,
        y: window.innerHeight / 2 - Number(t.height.replace("px", "")) / 2,
        width: Number(t.width.replace("px", "")),
        height: Number(t.height.replace("px", ""))
      }, n.value = !0, H(async () => {
        o.value === null || l.value === null || (o.value.style.minWidth = t.minWidth, o.value.style.minHeight = t.minHeight, X(o.value, i), t.resize && O(o.value, (s) => {
          i = s;
        }), V(o.value, (s) => {
          i = s;
        }));
      });
    }, u = () => {
      n.value = !1;
    };
    return x(() => {
      F(t.name, {
        open: r,
        close: u
      });
    }), k(() => {
      T(t.name);
    }), (s, p) => (h(), f("div", null, [
      a("div", {
        ref_key: "$modal",
        ref: o,
        class: S(["modal", { "modal--hidden": !n.value }])
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
            a("div", j, E(e.title), 1),
            a("div", D, [
              a("button", {
                type: "button",
                onClick: z(u, ["prevent"])
              }, U)
            ])
          ], 512)
        ], 512),
        m(s.$slots, "default", {}, void 0, !0)
      ], 2),
      t.backdrop && n.value ? (h(), W(q, {
        key: 0,
        onClose: u
      })) : M("", !0)
    ]));
  }
});
const le = /* @__PURE__ */ y(G, [["__scopeId", "data-v-d46a237b"]]), J = /* @__PURE__ */ b({
  __name: "ModalFooter",
  setup(e) {
    const n = _(null);
    let t = !0;
    return x(() => {
      t = n.value !== null && n.value.querySelectorAll("button").length > 0;
    }), (o, l) => I(t) ? (h(), f("div", {
      key: 0,
      ref_key: "$footerNode",
      ref: n,
      class: "modal-footer"
    }, [
      m(o.$slots, "default", {}, void 0, !0)
    ], 512)) : M("", !0);
  }
});
const ie = /* @__PURE__ */ y(J, [["__scopeId", "data-v-0db79781"]]);
const K = {}, Q = { class: "modal-body" }, Z = { class: "modal-body__content" };
function $(e, n) {
  return h(), f("div", Q, [
    a("div", Z, [
      m(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const ce = /* @__PURE__ */ y(K, [["render", $], ["__scopeId", "data-v-dc47cc62"]]);
const ee = {}, te = { type: "button" };
function ne(e, n) {
  return h(), f("button", te, [
    m(e.$slots, "default", {}, void 0, !0)
  ]);
}
const de = /* @__PURE__ */ y(ee, [["render", ne], ["__scopeId", "data-v-f7bd57cd"]]), re = (e) => {
  var n;
  (n = B(e)) == null || n.open();
}, se = (e) => {
  var n;
  (n = B(e)) == null || n.close();
};
export {
  le as Modal,
  de as ModalButton,
  ce as ModalContent,
  ie as ModalFooter,
  se as close,
  re as open
};
//# sourceMappingURL=modal.js.map
