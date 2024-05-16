import { defineComponent as w, ref as g, onMounted as z, onUnmounted as W, openBlock as m, createElementBlock as v, withModifiers as P, pushScopeId as T, popScopeId as F, createElementVNode as f, normalizeClass as O, toDisplayString as q, createVNode as C, renderSlot as k, Transition as A, withCtx as V, createBlock as Z, createCommentVNode as I, nextTick as j, unref as D } from "vue";
const B = /* @__PURE__ */ new Map(), U = (e, t) => {
  B.set(e, t);
}, H = (e) => {
  const t = B.get(e);
  return t === void 0 ? null : t;
}, Y = (e) => {
  B.delete(e);
}, E = () => B, R = (e, t, n) => e - n.left > -10 && e - n.left < 10 && t - n.top > -10 && t - n.top < 10 ? "top-left" : n.right - e > -10 && n.right - e < 10 && t - n.top > -10 && t - n.top < 10 ? "top-right" : n.bottom - t > -10 && n.bottom - t < 10 && e - n.left > -10 && e - n.left < 10 ? "bottom-left" : n.bottom - t > -10 && n.bottom - t < 10 && n.right - e > -10 && n.right - e < 10 ? "bottom-right" : e - n.left > -5 && e - n.left < 5 ? "left" : n.right - e > -5 && n.right - e < 5 ? "right" : t - n.top > -5 && t - n.top < 5 ? "top" : n.bottom - t > -5 && n.bottom - t < 5 ? "bottom" : null, G = (e, t, n) => {
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
}, J = (e, t) => {
  e.addEventListener("pointermove", (n) => {
    const i = e.getBoundingClientRect();
    e.style.cursor = G(n.clientX, n.clientY, i);
  }), e.addEventListener("pointerdown", (n) => {
    const i = n.clientX, o = n.clientY, l = e.getBoundingClientRect();
    let d = R(i, o, l);
    if (d === null)
      return;
    const s = e.clientWidth, r = e.clientHeight;
    let u = s, p = r, _ = l.top, y = l.left;
    document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "none"), document.addEventListener("pointermove", (c) => {
      d !== null && (c.stopPropagation(), d === "left" && (u = Math.max(s - (c.clientX - i), t.minWidth), y = l.left + (s - u)), d === "right" && (u = Math.max(s + (c.clientX - i), t.minWidth)), d === "top" && (p = Math.max(r - (c.clientY - o), t.minHeight), _ = l.top + (r - p)), d === "bottom" && (p = Math.max(r + (c.clientY - o), t.minHeight)), d == "top-left" && (u = Math.max(s - (c.clientX - i), t.minWidth), y = l.left + (s - u), p = Math.max(r - (c.clientY - o), t.minHeight), _ = l.top + (r - p)), d == "top-right" && (u = Math.max(s + (c.clientX - i), t.minWidth), p = Math.max(r - (c.clientY - o), t.minHeight), _ = l.top + (r - p)), d == "bottom-left" && (u = Math.max(s - (c.clientX - i), t.minWidth), p = Math.max(r + (c.clientY - o), t.minHeight), y = l.left + (s - u)), d == "bottom-right" && (u = Math.max(s + (c.clientX - i), t.minWidth), p = Math.max(r + (c.clientY - o), t.minHeight)), u = Math.round(u), p = Math.round(p), _ = Math.round(_), y = Math.round(y), e.style.width = u + "px", e.style.left = y + "px", c.clientY >= 0 && (e.style.height = p + "px", e.style.top = _ + "px"), t.resize({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      }));
    }), document.addEventListener("pointerup", () => {
      d = null, document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "");
    });
  });
}, K = (e, t) => {
  const n = e.querySelector(".modal-header");
  n == null || n.addEventListener("pointerdown", (i) => {
    const o = i.clientX - e.getBoundingClientRect().left, l = i.clientY - e.getBoundingClientRect().top, d = function(s) {
      let r = s.clientY - l;
      r < 0 && (r = 0), e.style.top = r + "px", e.style.left = s.clientX - o + "px", document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "none"), t.move({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      });
    };
    document.addEventListener("pointermove", d), document.addEventListener("pointerup", () => {
      document.removeEventListener("pointermove", d), document.body.style.userSelect = "", document.body.style.setProperty("-webkit-user-select", "");
    }, {
      once: !0
    });
  });
}, Q = (e, t) => {
  e.style.width = t.width + "px", e.style.height = t.height + "px", e.style.top = t.y !== null ? t.y + "px" : document.documentElement.clientHeight / 2 - e.clientHeight / 2 + "px", e.style.left = t.x !== null ? t.x + "px" : document.documentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
}, X = /* @__PURE__ */ w({
  __name: "ModalBackdrop",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = g(null), i = t, o = () => {
      n.value.style.width = document.documentElement.clientWidth + "px", n.value.style.height = document.documentElement.clientHeight + "px";
    }, l = () => {
      i("close");
    };
    return z(() => {
      o(), window.addEventListener("resize", o);
    }), W(() => {
      window.removeEventListener("resize", o);
    }), (d, s) => (m(), v("div", {
      ref_key: "$backdrop",
      ref: n,
      onClick: l,
      class: "backdrop"
    }, null, 512));
  }
});
const x = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, o] of t)
    n[i] = o;
  return n;
}, $ = /* @__PURE__ */ x(X, [["__scopeId", "data-v-d7a9ea5b"]]), ee = (e) => (T("data-v-6fa6eada"), e = e(), F(), e), te = /* @__PURE__ */ ee(() => /* @__PURE__ */ f("svg", {
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
  /* @__PURE__ */ f("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ f("path", { d: "M18 6l-12 12" }),
  /* @__PURE__ */ f("path", { d: "M6 6l12 12" })
], -1)), ne = [
  te
], oe = /* @__PURE__ */ w({
  __name: "ModalCloseButton",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, i = () => {
      n("close");
    };
    return (o, l) => (m(), v("button", {
      type: "button",
      onClick: P(i, ["prevent"])
    }, ne));
  }
});
const ie = /* @__PURE__ */ x(oe, [["__scopeId", "data-v-6fa6eada"]]), le = (e) => Math.round(document.documentElement.clientWidth / 2 - e / 2), re = (e) => {
  let t = Math.round(window.innerHeight / 2 - e / 2);
  return t < 0 && (t = 5), t;
}, M = (e) => Number(e.replace("px", "")), ce = (e, t) => ({
  x: le(e),
  y: re(t),
  width: e,
  height: t
}), S = () => {
  let e = 1e3;
  for (const t of E().values()) {
    const n = t.getZIndex();
    n > e && (e = n);
  }
  return e;
}, de = () => window.innerWidth - document.documentElement.clientWidth, se = { class: "modal-header__title" }, ae = { class: "modal-header__buttons" }, ue = /* @__PURE__ */ w({
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
    const t = g(!1), n = g(!1), i = g(!1), o = e, l = g(), d = g(), s = g();
    let r = ce(
      M(o.width),
      M(o.height)
    );
    const u = (a) => () => {
      const h = de();
      h > 0 && (document.body.style.paddingRight = h + "px"), document.body.style.overflow = "hidden", t.value = !0, setTimeout(() => n.value = !0, 10), j(async () => {
        _(a)(), a.style.zIndex = (S() + 1).toString(), a.style.minWidth = o.minWidth, a.style.minHeight = o.minHeight, Q(a, r), o.resize && J(a, {
          minWidth: M(o.minWidth),
          minHeight: M(o.minHeight),
          resize: (b) => {
            r = b;
          }
        }), K(a, {
          move: (b) => {
            r = b;
          }
        });
      });
    }, p = (a) => () => {
      var h;
      return Number((h = a.style.zIndex) != null ? h : 1e3);
    }, _ = (a) => () => {
      if (i.value === !0)
        return;
      for (const b of E().values())
        b.deactivate();
      let h = S() + 1;
      i.value = !0, a.style.zIndex = h.toString();
    }, y = (a) => () => {
      i.value = !1;
      let h = Number(a.style.zIndex) - 1;
      h < 1e3 && (h = 1e3), a.style.setProperty("z-index", h.toString());
    }, c = () => {
      n.value = !1, document.body.style.paddingRight = "", document.body.style.overflow = "", setTimeout(() => {
        t.value = !1;
      }, 150);
    }, L = () => {
      o.staticBackdrop || c();
    }, N = () => {
      _(l.value)();
    };
    return z(() => {
      U(o.name, {
        open: u(l.value),
        close: c,
        activate: _(l.value),
        deactivate: y(l.value),
        getZIndex: p(l.value)
      });
    }), W(() => {
      Y(o.name);
    }), (a, h) => (m(), v("div", null, [
      f("div", {
        onPointerdown: N,
        ref_key: "$modal",
        ref: l,
        class: O(["modal", { "modal--hidden": !t.value, "modal-visible": n.value, "modal--theme-black": o.theme === "black" }])
      }, [
        f("div", {
          ref_key: "$headerWrapper",
          ref: d,
          class: "modal-header-wrapper"
        }, [
          f("div", {
            ref_key: "$header",
            ref: s,
            class: "modal-header"
          }, [
            f("div", se, q(e.title), 1),
            f("div", ae, [
              C(ie, { onClose: c })
            ])
          ], 512)
        ], 512),
        k(a.$slots, "default", {}, void 0, !0)
      ], 34),
      C(A, null, {
        default: V(() => [
          o.backdrop && t.value ? (m(), Z($, {
            key: 0,
            onClose: L
          })) : I("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
const be = /* @__PURE__ */ x(ue, [["__scopeId", "data-v-bca8c524"]]), pe = /* @__PURE__ */ w({
  __name: "ModalFooter",
  setup(e) {
    const t = g(null);
    let n = !0;
    return z(() => {
      n = t.value !== null && t.value.querySelectorAll("button").length > 0;
    }), (i, o) => D(n) ? (m(), v("div", {
      key: 0,
      ref_key: "$footerNode",
      ref: t,
      class: "modal-footer"
    }, [
      k(i.$slots, "default", {}, void 0, !0)
    ], 512)) : I("", !0);
  }
});
const Me = /* @__PURE__ */ x(pe, [["__scopeId", "data-v-9f703cbb"]]);
const he = {}, _e = { class: "modal-body" }, fe = { class: "modal-body__content" };
function ye(e, t) {
  return m(), v("div", _e, [
    f("div", fe, [
      k(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const we = /* @__PURE__ */ x(he, [["render", ye], ["__scopeId", "data-v-dc47cc62"]]);
const ge = {}, me = { type: "button" };
function ve(e, t) {
  return m(), v("button", me, [
    k(e.$slots, "default", {}, void 0, !0)
  ]);
}
const ke = /* @__PURE__ */ x(ge, [["render", ve], ["__scopeId", "data-v-eff1971f"]]), Be = (e) => {
  var t;
  (t = H(e)) == null || t.open();
}, ze = (e) => {
  var t;
  (t = H(e)) == null || t.close();
};
export {
  be as Modal,
  ke as ModalButton,
  we as ModalContent,
  Me as ModalFooter,
  ze as close,
  Be as open
};
//# sourceMappingURL=modal.js.map
