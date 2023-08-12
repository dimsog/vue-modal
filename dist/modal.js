import { defineComponent as x, ref as _, onMounted as m, onUnmounted as k, openBlock as f, createElementBlock as h, createElementVNode as u, normalizeClass as E, toDisplayString as S, withModifiers as z, renderSlot as b, createBlock as R, createCommentVNode as M, nextTick as W, pushScopeId as H, popScopeId as I, unref as L } from "vue";
const N = /* @__PURE__ */ x({
  __name: "ModalBackdrop",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = _(null), o = () => {
      n.value.style.width = document.documentElement.clientWidth + "px", n.value.style.height = document.documentElement.clientHeight + "px";
    }, i = () => {
      t("close"), document.body.style.overflow = "";
    };
    return m(() => {
      o(), window.addEventListener("resize", o), document.body.style.overflow = "hidden";
    }), k(() => {
      document.body.style.overflow = "";
    }), (r, l) => (f(), h("div", {
      ref_key: "$backdrop",
      ref: n,
      onClick: i,
      class: "backdrop"
    }, null, 512));
  }
});
const g = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, q = /* @__PURE__ */ g(N, [["__scopeId", "data-v-f33e6f80"]]), w = /* @__PURE__ */ new Map(), F = (e, t) => {
  w.set(e, t);
}, B = (e) => {
  const t = w.get(e);
  return t === void 0 ? null : t;
}, T = (e) => {
  w.delete(e);
}, C = (e, t, n) => e - n.left > -10 && e - n.left < 10 && t - n.top > -10 && t - n.top < 10 ? "top-left" : n.right - e > -10 && n.right - e < 10 && t - n.top > -10 && t - n.top < 10 ? "top-right" : n.bottom - t > -10 && n.bottom - t < 10 && e - n.left > -10 && e - n.left < 10 ? "bottom-left" : n.bottom - t > -10 && n.bottom - t < 10 && n.right - e > -10 && n.right - e < 10 ? "bottom-right" : e - n.left > -5 && e - n.left < 5 ? "left" : n.right - e > -5 && n.right - e < 5 ? "right" : t - n.top > -5 && t - n.top < 5 ? "top" : n.bottom - t > -5 && n.bottom - t < 5 ? "bottom" : null, A = (e, t, n) => {
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
}, O = (e, t) => {
  e.addEventListener("mousemove", (n) => {
    const o = e.getBoundingClientRect();
    e.style.cursor = A(n.clientX, n.clientY, o);
  }), e.addEventListener("mousedown", (n) => {
    const o = n.clientX, i = n.clientY, r = e.getBoundingClientRect();
    let l = C(o, i, r);
    if (l === null)
      return;
    const d = e.clientWidth, a = e.clientHeight;
    let s = d, p = a, v = r.top, y = r.left;
    e.style.userSelect = "none", document.addEventListener("mousemove", (c) => {
      l !== null && (l === "left" && (y = r.left + (c.clientX - o), s = d - (c.clientX - o)), l === "right" && (s = d + (c.clientX - o)), l === "top" && (v = r.top + (c.clientY - i), p = a - (c.clientY - i)), l === "bottom" && (p = a + (c.clientY - i)), l == "top-left" && (y = r.left + (c.clientX - o), s = d - (c.clientX - o), v = r.top + (c.clientY - i), p = a - (c.clientY - i)), l == "top-right" && (s = d + (c.clientX - o), v = r.top + (c.clientY - i), p = a - (c.clientY - i)), l == "bottom-left" && (y = r.left + (c.clientX - o), s = d - (c.clientX - o), p = a + (c.clientY - i)), l == "bottom-right" && (s = d + (c.clientX - o), p = a + (c.clientY - i)), e.style.width = s + "px", e.style.height = p + "px", e.style.left = y + "px", e.style.top = v + "px", t({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      }));
    }), e.addEventListener("mouseup", () => {
      l = null, e.style.userSelect = "";
    });
  });
}, V = (e, t) => {
  e.querySelector(".modal-header").addEventListener("mousedown", (o) => {
    let i = o.clientX - e.getBoundingClientRect().left, r = o.clientY - e.getBoundingClientRect().top;
    const l = function(d) {
      e.style.top = d.clientY - r + "px", e.style.left = d.clientX - i + "px", t({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      });
    };
    document.addEventListener("mousemove", l), document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", l);
    }, {
      once: !0
    });
  });
}, X = (e, t) => {
  e.style.width = t.width + "px", e.style.height = t.height + "px", e.style.top = t.y !== null ? t.y + "px" : document.documentElement.clientHeight / 2 - e.clientHeight / 2 + "px", e.style.left = t.x !== null ? t.x + "px" : document.documentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
}, Y = (e) => (H("data-v-82cdca4a"), e = e(), I(), e), j = { class: "modal-header__title" }, D = { class: "modal-header__buttons" }, U = ["onClick"], G = /* @__PURE__ */ Y(() => /* @__PURE__ */ u("svg", {
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
], -1)), J = [
  G
], K = /* @__PURE__ */ x({
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
    const t = e, n = _(!1), o = _(null), i = _(null), r = _(null);
    let l = null;
    const d = () => {
      l = l || {
        x: document.documentElement.clientWidth / 2 - Number(t.width.replace("px", "")) / 2,
        y: window.innerHeight / 2 - Number(t.height.replace("px", "")) / 2,
        width: Number(t.width.replace("px", "")),
        height: Number(t.height.replace("px", ""))
      }, n.value = !0, W(async () => {
        o.value === null || i.value === null || (X(o.value, l), t.resize && O(o.value, (s) => {
          l = s;
        }), V(o.value, (s) => {
          l = s;
        }));
      });
    }, a = () => {
      n.value = !1;
    };
    return m(() => {
      F(t.name, {
        open: d,
        close: a
      });
    }), k(() => {
      T(t.name);
    }), (s, p) => (f(), h("div", null, [
      u("div", {
        ref_key: "$modal",
        ref: o,
        class: E(["modal", { "modal--hidden": !n.value }])
      }, [
        u("div", {
          ref_key: "$headerWrapper",
          ref: i,
          class: "modal-header-wrapper"
        }, [
          u("div", {
            ref_key: "$header",
            ref: r,
            class: "modal-header"
          }, [
            u("div", j, S(e.title), 1),
            u("div", D, [
              u("button", {
                type: "button",
                onClick: z(a, ["prevent"])
              }, J, 8, U)
            ])
          ], 512)
        ], 512),
        b(s.$slots, "default", {}, void 0, !0)
      ], 2),
      t.backdrop && n.value ? (f(), R(q, {
        key: 0,
        onClose: a
      })) : M("", !0)
    ]));
  }
});
const ie = /* @__PURE__ */ g(K, [["__scopeId", "data-v-82cdca4a"]]), Q = /* @__PURE__ */ x({
  __name: "ModalFooter",
  setup(e) {
    const t = _(null);
    let n = !0;
    return m(() => {
      n = t.value !== null && t.value.querySelectorAll("button").length > 0;
    }), (o, i) => L(n) ? (f(), h("div", {
      key: 0,
      ref_key: "$footerNode",
      ref: t,
      class: "modal-footer"
    }, [
      b(o.$slots, "default", {}, void 0, !0)
    ], 512)) : M("", !0);
  }
});
const ce = /* @__PURE__ */ g(Q, [["__scopeId", "data-v-73a708fb"]]);
const Z = {}, P = { class: "modal-body" }, $ = { class: "modal-body__content" };
function ee(e, t) {
  return f(), h("div", P, [
    u("div", $, [
      b(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const re = /* @__PURE__ */ g(Z, [["render", ee], ["__scopeId", "data-v-59882b06"]]);
const te = {}, ne = { type: "button" };
function oe(e, t) {
  return f(), h("button", ne, [
    b(e.$slots, "default", {}, void 0, !0)
  ]);
}
const se = /* @__PURE__ */ g(te, [["render", oe], ["__scopeId", "data-v-a6df91fc"]]), de = (e) => {
  var t;
  (t = B(e)) == null || t.open();
}, ae = (e) => {
  var t;
  (t = B(e)) == null || t.close();
};
export {
  ie as Modal,
  se as ModalButton,
  re as ModalContent,
  ce as ModalFooter,
  ae as close,
  de as open
};
//# sourceMappingURL=modal.js.map
