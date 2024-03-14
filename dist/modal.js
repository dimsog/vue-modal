import { defineComponent as m, ref as h, onMounted as x, onUnmounted as k, openBlock as _, createElementBlock as f, withModifiers as S, pushScopeId as E, popScopeId as z, createElementVNode as a, normalizeClass as W, toDisplayString as H, createVNode as I, renderSlot as b, createBlock as L, createCommentVNode as M, nextTick as R, unref as N } from "vue";
const w = /* @__PURE__ */ new Map(), q = (e, n) => {
  w.set(e, n);
}, B = (e) => {
  const n = w.get(e);
  return n === void 0 ? null : n;
}, F = (e) => {
  w.delete(e);
}, C = (e, n, t) => e - t.left > -10 && e - t.left < 10 && n - t.top > -10 && n - t.top < 10 ? "top-left" : t.right - e > -10 && t.right - e < 10 && n - t.top > -10 && n - t.top < 10 ? "top-right" : t.bottom - n > -10 && t.bottom - n < 10 && e - t.left > -10 && e - t.left < 10 ? "bottom-left" : t.bottom - n > -10 && t.bottom - n < 10 && t.right - e > -10 && t.right - e < 10 ? "bottom-right" : e - t.left > -5 && e - t.left < 5 ? "left" : t.right - e > -5 && t.right - e < 5 ? "right" : n - t.top > -5 && n - t.top < 5 ? "top" : t.bottom - n > -5 && t.bottom - n < 5 ? "bottom" : null, T = (e, n, t) => {
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
}, V = (e, n) => {
  e.addEventListener("mousemove", (t) => {
    const o = e.getBoundingClientRect();
    e.style.cursor = T(t.clientX, t.clientY, o);
  }), e.addEventListener("mousedown", (t) => {
    const o = t.clientX, l = t.clientY, s = e.getBoundingClientRect();
    let i = C(o, l, s);
    if (i === null)
      return;
    const d = e.clientWidth, u = e.clientHeight;
    let r = d, p = u, g = s.top, v = s.left;
    document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "none"), document.addEventListener("mousemove", (c) => {
      i !== null && (i === "left" && (v = s.left + (c.clientX - o), r = d - (c.clientX - o)), i === "right" && (r = d + (c.clientX - o)), i === "top" && (g = s.top + (c.clientY - l), p = u - (c.clientY - l)), i === "bottom" && (p = u + (c.clientY - l)), i == "top-left" && (v = s.left + (c.clientX - o), r = d - (c.clientX - o), g = s.top + (c.clientY - l), p = u - (c.clientY - l)), i == "top-right" && (r = d + (c.clientX - o), g = s.top + (c.clientY - l), p = u - (c.clientY - l)), i == "bottom-left" && (v = s.left + (c.clientX - o), r = d - (c.clientX - o), p = u + (c.clientY - l)), i == "bottom-right" && (r = d + (c.clientX - o), p = u + (c.clientY - l)), e.style.width = r + "px", e.style.height = p + "px", e.style.left = v + "px", e.style.top = g + "px", n({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      }));
    }), e.addEventListener("mouseup", () => {
      i = null, document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "");
    });
  });
}, A = (e, n) => {
  e.querySelector(".modal-header").addEventListener("mousedown", (o) => {
    let l = o.clientX - e.getBoundingClientRect().left, s = o.clientY - e.getBoundingClientRect().top;
    const i = function(d) {
      e.style.top = d.clientY - s + "px", e.style.left = d.clientX - l + "px", document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "none"), n({
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
}, O = (e, n) => {
  e.style.width = n.width + "px", e.style.height = n.height + "px", e.style.top = n.y !== null ? n.y + "px" : document.documentElement.clientHeight / 2 - e.clientHeight / 2 + "px", e.style.left = n.x !== null ? n.x + "px" : document.documentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
}, X = /* @__PURE__ */ m({
  __name: "ModalBackdrop",
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = h(null), o = n, l = () => {
      t.value.style.width = document.documentElement.clientWidth + "px", t.value.style.height = document.documentElement.clientHeight + "px";
    }, s = () => {
      o("close"), document.body.style.overflow = "";
    };
    return x(() => {
      l(), window.addEventListener("resize", l), document.body.style.overflow = "hidden";
    }), k(() => {
      document.body.style.overflow = "", window.removeEventListener("resize", l);
    }), (i, d) => (_(), f("div", {
      ref_key: "$backdrop",
      ref: t,
      onClick: s,
      class: "backdrop"
    }, null, 512));
  }
});
const y = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, l] of n)
    t[o] = l;
  return t;
}, Y = /* @__PURE__ */ y(X, [["__scopeId", "data-v-a9a01d98"]]), j = (e) => (E("data-v-7868bb2d"), e = e(), z(), e), D = /* @__PURE__ */ j(() => /* @__PURE__ */ a("svg", {
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
], -1)), P = [
  D
], U = /* @__PURE__ */ m({
  __name: "ModalCloseButton",
  emits: ["close"],
  setup(e, { emit: n }) {
    const t = n, o = () => {
      t("close");
    };
    return (l, s) => (_(), f("button", {
      type: "button",
      onClick: S(o, ["prevent"])
    }, P));
  }
});
const G = /* @__PURE__ */ y(U, [["__scopeId", "data-v-7868bb2d"]]), J = { class: "modal-header__title" }, K = { class: "modal-header__buttons" }, Q = /* @__PURE__ */ m({
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
    const n = h(!1), t = e, o = h(null), l = h(null), s = h(null);
    let i = null;
    const d = () => {
      i = i || {
        x: document.documentElement.clientWidth / 2 - Number(t.width.replace("px", "")) / 2,
        y: window.innerHeight / 2 - Number(t.height.replace("px", "")) / 2,
        width: Number(t.width.replace("px", "")),
        height: Number(t.height.replace("px", ""))
      }, n.value = !0, R(async () => {
        o.value === null || l.value === null || (o.value.style.minWidth = t.minWidth, o.value.style.minHeight = t.minHeight, O(o.value, i), t.resize && V(o.value, (r) => {
          i = r;
        }), A(o.value, (r) => {
          i = r;
        }));
      });
    }, u = () => {
      n.value = !1;
    };
    return x(() => {
      q(t.name, {
        open: d,
        close: u
      });
    }), k(() => {
      F(t.name);
    }), (r, p) => (_(), f("div", null, [
      a("div", {
        ref_key: "$modal",
        ref: o,
        class: W(["modal", { "modal--hidden": !n.value }])
      }, [
        a("div", {
          ref_key: "$headerWrapper",
          ref: l,
          class: "modal-header-wrapper"
        }, [
          a("div", {
            ref_key: "$header",
            ref: s,
            class: "modal-header"
          }, [
            a("div", J, H(e.title), 1),
            a("div", K, [
              I(G, { onClose: u })
            ])
          ], 512)
        ], 512),
        b(r.$slots, "default", {}, void 0, !0)
      ], 2),
      t.backdrop && n.value ? (_(), L(Y, {
        key: 0,
        onClose: u
      })) : M("", !0)
    ]));
  }
});
const se = /* @__PURE__ */ y(Q, [["__scopeId", "data-v-05050626"]]), Z = /* @__PURE__ */ m({
  __name: "ModalFooter",
  setup(e) {
    const n = h(null);
    let t = !0;
    return x(() => {
      t = n.value !== null && n.value.querySelectorAll("button").length > 0;
    }), (o, l) => N(t) ? (_(), f("div", {
      key: 0,
      ref_key: "$footerNode",
      ref: n,
      class: "modal-footer"
    }, [
      b(o.$slots, "default", {}, void 0, !0)
    ], 512)) : M("", !0);
  }
});
const de = /* @__PURE__ */ y(Z, [["__scopeId", "data-v-0db79781"]]);
const $ = {}, ee = { class: "modal-body" }, te = { class: "modal-body__content" };
function ne(e, n) {
  return _(), f("div", ee, [
    a("div", te, [
      b(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const re = /* @__PURE__ */ y($, [["render", ne], ["__scopeId", "data-v-dc47cc62"]]);
const oe = {}, le = { type: "button" };
function ie(e, n) {
  return _(), f("button", le, [
    b(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ue = /* @__PURE__ */ y(oe, [["render", ie], ["__scopeId", "data-v-f7bd57cd"]]), ae = (e) => {
  var n;
  (n = B(e)) == null || n.open();
}, pe = (e) => {
  var n;
  (n = B(e)) == null || n.close();
};
export {
  se as Modal,
  ue as ModalButton,
  re as ModalContent,
  de as ModalFooter,
  pe as close,
  ae as open
};
//# sourceMappingURL=modal.js.map
