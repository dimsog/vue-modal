import { defineComponent as w, ref as f, onMounted as B, onUnmounted as C, openBlock as h, createElementBlock as g, withModifiers as H, pushScopeId as L, popScopeId as R, createElementVNode as _, normalizeClass as N, toDisplayString as F, createVNode as O, renderSlot as M, createBlock as P, createCommentVNode as S, nextTick as q, unref as Y } from "vue";
const k = /* @__PURE__ */ new Map(), A = (e, t) => {
  k.set(e, t);
}, I = (e) => {
  const t = k.get(e);
  return t === void 0 ? null : t;
}, T = (e) => {
  k.delete(e);
}, E = () => k, W = (e, t, n) => e - n.left > -10 && e - n.left < 10 && t - n.top > -10 && t - n.top < 10 ? "top-left" : n.right - e > -10 && n.right - e < 10 && t - n.top > -10 && t - n.top < 10 ? "top-right" : n.bottom - t > -10 && n.bottom - t < 10 && e - n.left > -10 && e - n.left < 10 ? "bottom-left" : n.bottom - t > -10 && n.bottom - t < 10 && n.right - e > -10 && n.right - e < 10 ? "bottom-right" : e - n.left > -5 && e - n.left < 5 ? "left" : n.right - e > -5 && n.right - e < 5 ? "right" : t - n.top > -5 && t - n.top < 5 ? "top" : n.bottom - t > -5 && n.bottom - t < 5 ? "bottom" : null, V = (e, t, n) => {
  switch (W(e, t, n)) {
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
}, X = (e) => Math.round(document.documentElement.clientWidth / 2 - e / 2), Z = (e) => {
  let t = Math.round(window.innerHeight / 2 - e / 2);
  return t < 0 && (t = 5), t;
}, b = (e) => Number(e.replace("px", "")), j = (e, t) => ({
  x: X(e),
  y: Z(t),
  width: e,
  height: t
}), z = () => {
  let e = 1e3;
  for (const t of E().values()) {
    const n = t.getZIndex();
    n > e && (e = n);
  }
  return e;
}, D = (e, t) => {
  e.addEventListener("pointermove", (n) => {
    const l = e.getBoundingClientRect();
    e.style.cursor = V(n.clientX, n.clientY, l);
  }), e.addEventListener("pointerdown", (n) => {
    const l = n.clientX, o = n.clientY, r = e.getBoundingClientRect();
    let s = W(l, o, r);
    if (s === null)
      return;
    const d = e.clientWidth, a = e.clientHeight, x = b(e.style.minWidth ?? ""), y = b(e.style.minHeight ?? "");
    let p = d, u = a, v = r.top, c = r.left;
    document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "none"), document.addEventListener("pointermove", (i) => {
      s !== null && (s === "left" && (c = r.left + (i.clientX - l), p = d - (i.clientX - l)), s === "right" && (p = d + (i.clientX - l)), s === "top" && (u = a - (i.clientY - o), u > y && (v = r.top + (i.clientY - o))), s === "bottom" && (u = a + (i.clientY - o)), s == "top-left" && (p = d - (i.clientX - l), p > x && (c = r.left + (i.clientX - l)), u = a - (i.clientY - o), u > y && (v = r.top + (i.clientY - o))), s == "top-right" && (p = d + (i.clientX - l), p > x && (v = r.top + (i.clientY - o), u = a - (i.clientY - o))), s == "bottom-left" && (p = d - (i.clientX - l), u = a + (i.clientY - o), p > x && (c = r.left + (i.clientX - l))), s == "bottom-right" && (p = d + (i.clientX - l), u = a + (i.clientY - o)), e.style.width = p + "px", e.style.left = c + "px", i.clientY >= 0 && (e.style.height = u + "px", e.style.top = v + "px"), t.resize({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      }));
    }), document.addEventListener("pointerup", () => {
      s = null, document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "");
    });
  });
}, U = (e, t) => {
  const n = e.querySelector(".modal-header");
  n == null || n.addEventListener("pointerdown", (l) => {
    const o = l.clientX - e.getBoundingClientRect().left, r = l.clientY - e.getBoundingClientRect().top, s = function(d) {
      let a = d.clientY - r;
      a < 0 && (a = 0), e.style.top = a + "px", e.style.left = d.clientX - o + "px", document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "none"), t.move({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      });
    };
    document.addEventListener("pointermove", s), document.addEventListener("pointerup", () => {
      document.removeEventListener("pointermove", s), document.body.style.userSelect = "", document.body.style.setProperty("-webkit-user-select", "");
    }, {
      once: !0
    });
  });
}, G = (e, t) => {
  e.style.width = t.width + "px", e.style.height = t.height + "px", e.style.top = t.y !== null ? t.y + "px" : document.documentElement.clientHeight / 2 - e.clientHeight / 2 + "px", e.style.left = t.x !== null ? t.x + "px" : document.documentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
}, J = /* @__PURE__ */ w({
  __name: "ModalBackdrop",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = f(null), l = t, o = () => {
      n.value.style.width = document.documentElement.clientWidth + "px", n.value.style.height = document.documentElement.clientHeight + "px";
    }, r = () => {
      l("close"), document.body.style.overflow = "";
    };
    return B(() => {
      o(), window.addEventListener("resize", o), document.body.style.overflow = "hidden";
    }), C(() => {
      document.body.style.overflow = "", window.removeEventListener("resize", o);
    }), (s, d) => (h(), g("div", {
      ref_key: "$backdrop",
      ref: n,
      onClick: r,
      class: "backdrop"
    }, null, 512));
  }
});
const m = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, K = /* @__PURE__ */ m(J, [["__scopeId", "data-v-a9a01d98"]]), Q = (e) => (L("data-v-6fa6eada"), e = e(), R(), e), $ = /* @__PURE__ */ Q(() => /* @__PURE__ */ _("svg", {
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
  /* @__PURE__ */ _("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ _("path", { d: "M18 6l-12 12" }),
  /* @__PURE__ */ _("path", { d: "M6 6l12 12" })
], -1)), ee = [
  $
], te = /* @__PURE__ */ w({
  __name: "ModalCloseButton",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, l = () => {
      n("close");
    };
    return (o, r) => (h(), g("button", {
      type: "button",
      onClick: H(l, ["prevent"])
    }, ee));
  }
});
const ne = /* @__PURE__ */ m(te, [["__scopeId", "data-v-6fa6eada"]]), oe = { class: "modal-header__title" }, le = { class: "modal-header__buttons" }, ie = /* @__PURE__ */ w({
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
    staticBackdrop: {
      type: Boolean,
      default: !1
    },
    resize: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = f(!1), n = f(!1), l = e, o = f(null), r = f(null), s = f(null);
    let d;
    const a = () => {
      d = d || j(
        b(l.width),
        b(l.height)
      ), t.value = !0, q(async () => {
        o.value === null || r.value === null || (y(), o.value.style.zIndex = (z() + 1).toString(), o.value.style.minWidth = l.minWidth, o.value.style.minHeight = l.minHeight, G(o.value, d), l.resize && D(o.value, {
          resize: (c) => {
            d = c;
          }
        }), U(o.value, {
          move: (c) => {
            d = c;
          }
        }));
      });
    }, x = () => {
      var c;
      return Number(((c = o.value) == null ? void 0 : c.style.zIndex) ?? 1e3);
    }, y = () => {
      if (o.value === null || n.value === !0)
        return;
      for (const i of E().values())
        i.deactivate();
      let c = z() + 1;
      n.value = !0, o.value.style.zIndex = c.toString();
    }, p = () => {
      if (n.value = !1, o.value !== null) {
        let c = Number(o.value.style.zIndex) - 1;
        c < 1e3 && (c = 1e3), o.value.style.setProperty("z-index", c.toString());
      }
    }, u = () => {
      t.value = !1;
    }, v = () => {
      l.staticBackdrop || u();
    };
    return B(() => {
      A(l.name, {
        open: a,
        close: u,
        activate: y,
        deactivate: p,
        getZIndex: x
      });
    }), C(() => {
      T(l.name);
    }), (c, i) => (h(), g("div", null, [
      _("div", {
        onPointerdown: y,
        ref_key: "$modal",
        ref: o,
        class: N(["modal", { "modal--hidden": !t.value }])
      }, [
        _("div", {
          ref_key: "$headerWrapper",
          ref: r,
          class: "modal-header-wrapper"
        }, [
          _("div", {
            ref_key: "$header",
            ref: s,
            class: "modal-header"
          }, [
            _("div", oe, F(e.title), 1),
            _("div", le, [
              O(ne, { onClose: u })
            ])
          ], 512)
        ], 512),
        M(c.$slots, "default", {}, void 0, !0)
      ], 34),
      l.backdrop && t.value ? (h(), P(K, {
        key: 0,
        onClose: v
      })) : S("", !0)
    ]));
  }
});
const he = /* @__PURE__ */ m(ie, [["__scopeId", "data-v-56a6b28c"]]), ce = /* @__PURE__ */ w({
  __name: "ModalFooter",
  setup(e) {
    const t = f(null);
    let n = !0;
    return B(() => {
      n = t.value !== null && t.value.querySelectorAll("button").length > 0;
    }), (l, o) => Y(n) ? (h(), g("div", {
      key: 0,
      ref_key: "$footerNode",
      ref: t,
      class: "modal-footer"
    }, [
      M(l.$slots, "default", {}, void 0, !0)
    ], 512)) : S("", !0);
  }
});
const ye = /* @__PURE__ */ m(ce, [["__scopeId", "data-v-0db79781"]]);
const re = {}, se = { class: "modal-body" }, de = { class: "modal-body__content" };
function ae(e, t) {
  return h(), g("div", se, [
    _("div", de, [
      M(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const ve = /* @__PURE__ */ m(re, [["render", ae], ["__scopeId", "data-v-dc47cc62"]]);
const ue = {}, pe = { type: "button" };
function _e(e, t) {
  return h(), g("button", pe, [
    M(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ge = /* @__PURE__ */ m(ue, [["render", _e], ["__scopeId", "data-v-f7bd57cd"]]), me = (e) => {
  var t;
  (t = I(e)) == null || t.open();
}, xe = (e) => {
  var t;
  (t = I(e)) == null || t.close();
};
export {
  he as Modal,
  ge as ModalButton,
  ve as ModalContent,
  ye as ModalFooter,
  xe as close,
  me as open
};
//# sourceMappingURL=modal.js.map
