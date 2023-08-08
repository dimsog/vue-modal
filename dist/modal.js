import { defineComponent as x, ref as h, onMounted as w, onUnmounted as k, openBlock as f, createElementBlock as _, createElementVNode as u, normalizeClass as E, toDisplayString as S, withModifiers as z, renderSlot as y, createBlock as R, createCommentVNode as M, nextTick as W, pushScopeId as L, popScopeId as H, unref as N } from "vue";
const I = /* @__PURE__ */ x({
  __name: "ModalBackdrop",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = h(null), o = () => {
      n.value.style.width = document.documentElement.clientWidth + "px", n.value.style.height = document.body.getBoundingClientRect().height + "px";
    }, i = () => {
      t("close"), document.body.style.overflow = "";
    };
    return w(() => {
      o(), window.addEventListener("resize", o), document.body.style.overflow = "hidden";
    }), k(() => {
      document.body.style.overflow = "";
    }), (r, l) => (f(), _("div", {
      ref_key: "$backdrop",
      ref: n,
      onClick: i,
      class: "backdrop"
    }, null, 512));
  }
});
const b = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, q = /* @__PURE__ */ b(I, [["__scopeId", "data-v-ffcf226b"]]), m = /* @__PURE__ */ new Map(), F = (e, t) => {
  m.set(e, t);
}, B = (e) => {
  const t = m.get(e);
  return t === void 0 ? null : t;
}, T = (e) => {
  m.delete(e);
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
    let s = d, p = a, g = r.top, v = r.left;
    e.style.userSelect = "none", document.addEventListener("mousemove", (c) => {
      l !== null && (l === "left" && (v = r.left + (c.clientX - o), s = d - (c.clientX - o)), l === "right" && (s = d + (c.clientX - o)), l === "top" && (g = r.top + (c.clientY - i), p = a - (c.clientY - i)), l === "bottom" && (p = a + (c.clientY - i)), l == "top-left" && (v = r.left + (c.clientX - o), s = d - (c.clientX - o), g = r.top + (c.clientY - i), p = a - (c.clientY - i)), l == "top-right" && (s = d + (c.clientX - o), g = r.top + (c.clientY - i), p = a - (c.clientY - i)), l == "bottom-left" && (v = r.left + (c.clientX - o), s = d - (c.clientX - o), p = a + (c.clientY - i)), l == "bottom-right" && (s = d + (c.clientX - o), p = a + (c.clientY - i)), e.style.width = s + "px", e.style.height = p + "px", e.style.left = v + "px", e.style.top = g + "px", t({
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
}, Y = (e) => (L("data-v-82cdca4a"), e = e(), H(), e), j = { class: "modal-header__title" }, D = { class: "modal-header__buttons" }, U = ["onClick"], G = /* @__PURE__ */ Y(() => /* @__PURE__ */ u("svg", {
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
    const t = e, n = h(!1), o = h(null), i = h(null), r = h(null);
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
    return w(() => {
      F(t.name, {
        open: d,
        close: a
      });
    }), k(() => {
      T(t.name);
    }), (s, p) => (f(), _("div", null, [
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
        y(s.$slots, "default", {}, void 0, !0)
      ], 2),
      t.backdrop && n.value ? (f(), R(q, {
        key: 0,
        onClose: a
      })) : M("", !0)
    ]));
  }
});
const oe = /* @__PURE__ */ b(K, [["__scopeId", "data-v-82cdca4a"]]), le = /* @__PURE__ */ x({
  __name: "ModalFooter",
  setup(e) {
    const t = h(null);
    let n = !0;
    return w(() => {
      n = t.value !== null && t.value.querySelectorAll("button").length > 0;
    }), (o, i) => N(n) ? (f(), _("div", {
      key: 0,
      ref_key: "$footerNode",
      ref: t
    }, [
      y(o.$slots, "default")
    ], 512)) : M("", !0);
  }
});
const Q = {}, Z = { class: "modal-body" }, P = { class: "modal-body__content" };
function $(e, t) {
  return f(), _("div", Z, [
    u("div", P, [
      y(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const ie = /* @__PURE__ */ b(Q, [["render", $], ["__scopeId", "data-v-59882b06"]]), ee = {};
function te(e, t) {
  return f(), _("button", null, [
    y(e.$slots, "default")
  ]);
}
const ce = /* @__PURE__ */ b(ee, [["render", te]]), re = (e) => {
  var t;
  (t = B(e)) == null || t.open();
}, se = (e) => {
  var t;
  (t = B(e)) == null || t.close();
};
export {
  oe as Modal,
  ce as ModalButton,
  ie as ModalContent,
  le as ModalFooter,
  se as close,
  re as open
};
//# sourceMappingURL=modal.js.map
