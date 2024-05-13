import { defineComponent as k, ref as _, onMounted as z, onUnmounted as I, openBlock as h, createElementBlock as g, withModifiers as L, pushScopeId as N, popScopeId as T, createElementVNode as p, normalizeClass as F, toDisplayString as O, createVNode as C, renderSlot as M, Transition as P, withCtx as q, createBlock as V, createCommentVNode as W, nextTick as Y, unref as A } from "vue";
const B = /* @__PURE__ */ new Map(), X = (e, t) => {
  B.set(e, t);
}, E = (e) => {
  const t = B.get(e);
  return t === void 0 ? null : t;
}, Z = (e) => {
  B.delete(e);
}, H = () => B, R = (e, t, n) => e - n.left > -10 && e - n.left < 10 && t - n.top > -10 && t - n.top < 10 ? "top-left" : n.right - e > -10 && n.right - e < 10 && t - n.top > -10 && t - n.top < 10 ? "top-right" : n.bottom - t > -10 && n.bottom - t < 10 && e - n.left > -10 && e - n.left < 10 ? "bottom-left" : n.bottom - t > -10 && n.bottom - t < 10 && n.right - e > -10 && n.right - e < 10 ? "bottom-right" : e - n.left > -5 && e - n.left < 5 ? "left" : n.right - e > -5 && n.right - e < 5 ? "right" : t - n.top > -5 && t - n.top < 5 ? "top" : n.bottom - t > -5 && n.bottom - t < 5 ? "bottom" : null, j = (e, t, n) => {
  switch (R(e, t, n)) {
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
}, D = (e) => Math.round(document.documentElement.clientWidth / 2 - e / 2), U = (e) => {
  let t = Math.round(window.innerHeight / 2 - e / 2);
  return t < 0 && (t = 5), t;
}, w = (e) => Number(e.replace("px", "")), G = (e, t) => ({
  x: D(e),
  y: U(t),
  width: e,
  height: t
}), S = () => {
  let e = 1e3;
  for (const t of H().values()) {
    const n = t.getZIndex();
    n > e && (e = n);
  }
  return e;
}, J = () => window.innerWidth - document.documentElement.clientWidth, K = (e, t) => {
  e.addEventListener("pointermove", (n) => {
    const c = e.getBoundingClientRect();
    e.style.cursor = j(n.clientX, n.clientY, c);
  }), e.addEventListener("pointerdown", (n) => {
    const c = n.clientX, l = n.clientY, i = e.getBoundingClientRect();
    let s = R(c, l, i);
    if (s === null)
      return;
    const a = e.clientWidth, r = e.clientHeight, b = w(e.style.minWidth ?? ""), x = w(e.style.minHeight ?? "");
    let d = a, u = r, f = i.top, y = i.left;
    document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "none"), document.addEventListener("pointermove", (o) => {
      s !== null && (s === "left" && (y = i.left + (o.clientX - c), d = a - (o.clientX - c)), s === "right" && (d = a + (o.clientX - c)), s === "top" && (u = r - (o.clientY - l), u > x && (f = i.top + (o.clientY - l))), s === "bottom" && (u = r + (o.clientY - l)), s == "top-left" && (d = a - (o.clientX - c), d > b && (y = i.left + (o.clientX - c)), u = r - (o.clientY - l), u > x && (f = i.top + (o.clientY - l))), s == "top-right" && (d = a + (o.clientX - c), d > b && (f = i.top + (o.clientY - l), u = r - (o.clientY - l))), s == "bottom-left" && (d = a - (o.clientX - c), u = r + (o.clientY - l), d > b && (y = i.left + (o.clientX - c))), s == "bottom-right" && (d = a + (o.clientX - c), u = r + (o.clientY - l)), e.style.width = d + "px", e.style.left = y + "px", o.clientY >= 0 && (e.style.height = u + "px", e.style.top = f + "px"), t.resize({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      }));
    }), document.addEventListener("pointerup", () => {
      s = null, document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "");
    });
  });
}, Q = (e, t) => {
  const n = e.querySelector(".modal-header");
  n == null || n.addEventListener("pointerdown", (c) => {
    const l = c.clientX - e.getBoundingClientRect().left, i = c.clientY - e.getBoundingClientRect().top, s = function(a) {
      let r = a.clientY - i;
      r < 0 && (r = 0), e.style.top = r + "px", e.style.left = a.clientX - l + "px", document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "none"), t.move({
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
}, $ = (e, t) => {
  e.style.width = t.width + "px", e.style.height = t.height + "px", e.style.top = t.y !== null ? t.y + "px" : document.documentElement.clientHeight / 2 - e.clientHeight / 2 + "px", e.style.left = t.x !== null ? t.x + "px" : document.documentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
}, ee = /* @__PURE__ */ k({
  __name: "ModalBackdrop",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = _(null), c = t, l = () => {
      n.value.style.width = document.documentElement.clientWidth + "px", n.value.style.height = document.documentElement.clientHeight + "px";
    }, i = () => {
      c("close"), document.body.style.overflow = "";
    };
    return z(() => {
      l(), window.addEventListener("resize", l);
    }), I(() => {
      window.removeEventListener("resize", l);
    }), (s, a) => (h(), g("div", {
      ref_key: "$backdrop",
      ref: n,
      onClick: i,
      class: "backdrop"
    }, null, 512));
  }
});
const m = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [c, l] of t)
    n[c] = l;
  return n;
}, te = /* @__PURE__ */ m(ee, [["__scopeId", "data-v-84088cde"]]), ne = (e) => (N("data-v-6fa6eada"), e = e(), T(), e), oe = /* @__PURE__ */ ne(() => /* @__PURE__ */ p("svg", {
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
  /* @__PURE__ */ p("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ p("path", { d: "M18 6l-12 12" }),
  /* @__PURE__ */ p("path", { d: "M6 6l12 12" })
], -1)), le = [
  oe
], ie = /* @__PURE__ */ k({
  __name: "ModalCloseButton",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, c = () => {
      n("close");
    };
    return (l, i) => (h(), g("button", {
      type: "button",
      onClick: L(c, ["prevent"])
    }, le));
  }
});
const ce = /* @__PURE__ */ m(ie, [["__scopeId", "data-v-6fa6eada"]]), se = { class: "modal-header__title" }, re = { class: "modal-header__buttons" }, de = /* @__PURE__ */ k({
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
    },
    theme: {
      type: String,
      default: "white"
    }
  },
  setup(e) {
    const t = _(!1), n = _(!1), c = _(!1), l = e, i = _(null), s = _(null), a = _(null);
    let r;
    const b = () => {
      r = r || G(
        w(l.width),
        w(l.height)
      );
      const o = J();
      o > 0 && (document.body.style.paddingRight = o + "px"), document.body.style.overflow = "hidden", t.value = !0, setTimeout(() => n.value = !0, 10), Y(async () => {
        i.value === null || s.value === null || (d(), i.value.style.zIndex = (S() + 1).toString(), i.value.style.minWidth = l.minWidth, i.value.style.minHeight = l.minHeight, $(i.value, r), l.resize && K(i.value, {
          resize: (v) => {
            r = v;
          }
        }), Q(i.value, {
          move: (v) => {
            r = v;
          }
        }));
      });
    }, x = () => {
      var o;
      return Number(((o = i.value) == null ? void 0 : o.style.zIndex) ?? 1e3);
    }, d = () => {
      if (i.value === null || c.value === !0)
        return;
      for (const v of H().values())
        v.deactivate();
      let o = S() + 1;
      c.value = !0, i.value.style.zIndex = o.toString();
    }, u = () => {
      if (c.value = !1, i.value !== null) {
        let o = Number(i.value.style.zIndex) - 1;
        o < 1e3 && (o = 1e3), i.value.style.setProperty("z-index", o.toString());
      }
    }, f = () => {
      n.value = !1, document.body.style.paddingRight = "", document.body.style.overflow = "", setTimeout(() => {
        t.value = !1;
      }, 150);
    }, y = () => {
      l.staticBackdrop || f();
    };
    return z(() => {
      X(l.name, {
        open: b,
        close: f,
        activate: d,
        deactivate: u,
        getZIndex: x
      });
    }), I(() => {
      Z(l.name);
    }), (o, v) => (h(), g("div", null, [
      p("div", {
        onPointerdown: d,
        ref_key: "$modal",
        ref: i,
        class: F(["modal", { "modal--hidden": !t.value, "modal-visible": n.value, "modal--theme-black": l.theme === "black" }])
      }, [
        p("div", {
          ref_key: "$headerWrapper",
          ref: s,
          class: "modal-header-wrapper"
        }, [
          p("div", {
            ref_key: "$header",
            ref: a,
            class: "modal-header"
          }, [
            p("div", se, O(e.title), 1),
            p("div", re, [
              C(ce, { onClose: f })
            ])
          ], 512)
        ], 512),
        M(o.$slots, "default", {}, void 0, !0)
      ], 34),
      C(P, null, {
        default: q(() => [
          l.backdrop && t.value ? (h(), V(te, {
            key: 0,
            onClose: y
          })) : W("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
const me = /* @__PURE__ */ m(de, [["__scopeId", "data-v-225ac34f"]]), ae = /* @__PURE__ */ k({
  __name: "ModalFooter",
  setup(e) {
    const t = _(null);
    let n = !0;
    return z(() => {
      n = t.value !== null && t.value.querySelectorAll("button").length > 0;
    }), (c, l) => A(n) ? (h(), g("div", {
      key: 0,
      ref_key: "$footerNode",
      ref: t,
      class: "modal-footer"
    }, [
      M(c.$slots, "default", {}, void 0, !0)
    ], 512)) : W("", !0);
  }
});
const be = /* @__PURE__ */ m(ae, [["__scopeId", "data-v-9f703cbb"]]);
const ue = {}, pe = { class: "modal-body" }, fe = { class: "modal-body__content" };
function _e(e, t) {
  return h(), g("div", pe, [
    p("div", fe, [
      M(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const xe = /* @__PURE__ */ m(ue, [["render", _e], ["__scopeId", "data-v-dc47cc62"]]);
const he = {}, ye = { type: "button" };
function ve(e, t) {
  return h(), g("button", ye, [
    M(e.$slots, "default", {}, void 0, !0)
  ]);
}
const we = /* @__PURE__ */ m(he, [["render", ve], ["__scopeId", "data-v-eff1971f"]]), ke = (e) => {
  var t;
  (t = E(e)) == null || t.open();
}, Me = (e) => {
  var t;
  (t = E(e)) == null || t.close();
};
export {
  me as Modal,
  we as ModalButton,
  xe as ModalContent,
  be as ModalFooter,
  Me as close,
  ke as open
};
//# sourceMappingURL=modal.js.map
