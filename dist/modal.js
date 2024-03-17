import { defineComponent as w, ref as f, onMounted as B, onUnmounted as I, openBlock as h, createElementBlock as v, withModifiers as R, pushScopeId as N, popScopeId as T, createElementVNode as p, normalizeClass as F, toDisplayString as O, createVNode as C, renderSlot as M, Transition as P, withCtx as q, createBlock as V, createCommentVNode as E, nextTick as Y, unref as A } from "vue";
const k = /* @__PURE__ */ new Map(), X = (e, t) => {
  k.set(e, t);
}, W = (e) => {
  const t = k.get(e);
  return t === void 0 ? null : t;
}, Z = (e) => {
  k.delete(e);
}, H = () => k, L = (e, t, n) => e - n.left > -10 && e - n.left < 10 && t - n.top > -10 && t - n.top < 10 ? "top-left" : n.right - e > -10 && n.right - e < 10 && t - n.top > -10 && t - n.top < 10 ? "top-right" : n.bottom - t > -10 && n.bottom - t < 10 && e - n.left > -10 && e - n.left < 10 ? "bottom-left" : n.bottom - t > -10 && n.bottom - t < 10 && n.right - e > -10 && n.right - e < 10 ? "bottom-right" : e - n.left > -5 && e - n.left < 5 ? "left" : n.right - e > -5 && n.right - e < 5 ? "right" : t - n.top > -5 && t - n.top < 5 ? "top" : n.bottom - t > -5 && n.bottom - t < 5 ? "bottom" : null, j = (e, t, n) => {
  switch (L(e, t, n)) {
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
}, x = (e) => Number(e.replace("px", "")), G = (e, t) => ({
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
}, J = (e, t) => {
  e.addEventListener("pointermove", (n) => {
    const s = e.getBoundingClientRect();
    e.style.cursor = j(n.clientX, n.clientY, s);
  }), e.addEventListener("pointerdown", (n) => {
    const s = n.clientX, l = n.clientY, i = e.getBoundingClientRect();
    let r = L(s, l, i);
    if (r === null)
      return;
    const a = e.clientWidth, c = e.clientHeight, m = x(e.style.minWidth ?? ""), b = x(e.style.minHeight ?? "");
    let d = a, u = c, _ = i.top, y = i.left;
    document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "none"), document.addEventListener("pointermove", (o) => {
      r !== null && (r === "left" && (y = i.left + (o.clientX - s), d = a - (o.clientX - s)), r === "right" && (d = a + (o.clientX - s)), r === "top" && (u = c - (o.clientY - l), u > b && (_ = i.top + (o.clientY - l))), r === "bottom" && (u = c + (o.clientY - l)), r == "top-left" && (d = a - (o.clientX - s), d > m && (y = i.left + (o.clientX - s)), u = c - (o.clientY - l), u > b && (_ = i.top + (o.clientY - l))), r == "top-right" && (d = a + (o.clientX - s), d > m && (_ = i.top + (o.clientY - l), u = c - (o.clientY - l))), r == "bottom-left" && (d = a - (o.clientX - s), u = c + (o.clientY - l), d > m && (y = i.left + (o.clientX - s))), r == "bottom-right" && (d = a + (o.clientX - s), u = c + (o.clientY - l)), e.style.width = d + "px", e.style.left = y + "px", o.clientY >= 0 && (e.style.height = u + "px", e.style.top = _ + "px"), t.resize({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      }));
    }), document.addEventListener("pointerup", () => {
      r = null, document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "");
    });
  });
}, K = (e, t) => {
  const n = e.querySelector(".modal-header");
  n == null || n.addEventListener("pointerdown", (s) => {
    const l = s.clientX - e.getBoundingClientRect().left, i = s.clientY - e.getBoundingClientRect().top, r = function(a) {
      let c = a.clientY - i;
      c < 0 && (c = 0), e.style.top = c + "px", e.style.left = a.clientX - l + "px", document.body.style.userSelect = "none", document.body.style.setProperty("-webkit-user-select", "none"), t.move({
        x: e.getBoundingClientRect().x,
        y: e.getBoundingClientRect().y,
        width: e.clientWidth,
        height: e.clientHeight
      });
    };
    document.addEventListener("pointermove", r), document.addEventListener("pointerup", () => {
      document.removeEventListener("pointermove", r), document.body.style.userSelect = "", document.body.style.setProperty("-webkit-user-select", "");
    }, {
      once: !0
    });
  });
}, Q = (e, t) => {
  e.style.width = t.width + "px", e.style.height = t.height + "px", e.style.top = t.y !== null ? t.y + "px" : document.documentElement.clientHeight / 2 - e.clientHeight / 2 + "px", e.style.left = t.x !== null ? t.x + "px" : document.documentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
}, $ = /* @__PURE__ */ w({
  __name: "ModalBackdrop",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = f(null), s = t, l = () => {
      n.value.style.width = document.documentElement.clientWidth + "px", n.value.style.height = document.documentElement.clientHeight + "px";
    }, i = () => {
      s("close"), document.body.style.overflow = "";
    };
    return B(() => {
      l(), window.addEventListener("resize", l), document.body.style.overflow = "hidden";
    }), I(() => {
      document.body.style.overflow = "", window.removeEventListener("resize", l);
    }), (r, a) => (h(), v("div", {
      ref_key: "$backdrop",
      ref: n,
      onClick: i,
      class: "backdrop"
    }, null, 512));
  }
});
const g = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
}, ee = /* @__PURE__ */ g($, [["__scopeId", "data-v-a1b35314"]]), te = (e) => (N("data-v-6fa6eada"), e = e(), T(), e), ne = /* @__PURE__ */ te(() => /* @__PURE__ */ p("svg", {
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
], -1)), oe = [
  ne
], le = /* @__PURE__ */ w({
  __name: "ModalCloseButton",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, s = () => {
      n("close");
    };
    return (l, i) => (h(), v("button", {
      type: "button",
      onClick: R(s, ["prevent"])
    }, oe));
  }
});
const ie = /* @__PURE__ */ g(le, [["__scopeId", "data-v-6fa6eada"]]), se = { class: "modal-header__title" }, re = { class: "modal-header__buttons" }, ce = /* @__PURE__ */ w({
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
    const t = f(!1), n = f(!1), s = f(!1), l = e, i = f(null), r = f(null), a = f(null);
    let c;
    const m = () => {
      c = c || G(
        x(l.width),
        x(l.height)
      ), t.value = !0, setTimeout(() => n.value = !0, 10), Y(async () => {
        i.value === null || r.value === null || (d(), i.value.style.zIndex = (S() + 1).toString(), i.value.style.minWidth = l.minWidth, i.value.style.minHeight = l.minHeight, Q(i.value, c), l.resize && J(i.value, {
          resize: (o) => {
            c = o;
          }
        }), K(i.value, {
          move: (o) => {
            c = o;
          }
        }));
      });
    }, b = () => {
      var o;
      return Number(((o = i.value) == null ? void 0 : o.style.zIndex) ?? 1e3);
    }, d = () => {
      if (i.value === null || s.value === !0)
        return;
      for (const z of H().values())
        z.deactivate();
      let o = S() + 1;
      s.value = !0, i.value.style.zIndex = o.toString();
    }, u = () => {
      if (s.value = !1, i.value !== null) {
        let o = Number(i.value.style.zIndex) - 1;
        o < 1e3 && (o = 1e3), i.value.style.setProperty("z-index", o.toString());
      }
    }, _ = () => {
      n.value = !1, setTimeout(() => {
        t.value = !1;
      }, 150);
    }, y = () => {
      l.staticBackdrop || _();
    };
    return B(() => {
      X(l.name, {
        open: m,
        close: _,
        activate: d,
        deactivate: u,
        getZIndex: b
      });
    }), I(() => {
      Z(l.name);
    }), (o, z) => (h(), v("div", null, [
      p("div", {
        onPointerdown: d,
        ref_key: "$modal",
        ref: i,
        class: F(["modal", { "modal--hidden": !t.value, "modal-visible": n.value }])
      }, [
        p("div", {
          ref_key: "$headerWrapper",
          ref: r,
          class: "modal-header-wrapper"
        }, [
          p("div", {
            ref_key: "$header",
            ref: a,
            class: "modal-header"
          }, [
            p("div", se, O(e.title), 1),
            p("div", re, [
              C(ie, { onClose: _ })
            ])
          ], 512)
        ], 512),
        M(o.$slots, "default", {}, void 0, !0)
      ], 34),
      C(P, null, {
        default: q(() => [
          l.backdrop && t.value ? (h(), V(ee, {
            key: 0,
            onClose: y
          })) : E("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
const ge = /* @__PURE__ */ g(ce, [["__scopeId", "data-v-0a466129"]]), de = /* @__PURE__ */ w({
  __name: "ModalFooter",
  setup(e) {
    const t = f(null);
    let n = !0;
    return B(() => {
      n = t.value !== null && t.value.querySelectorAll("button").length > 0;
    }), (s, l) => A(n) ? (h(), v("div", {
      key: 0,
      ref_key: "$footerNode",
      ref: t,
      class: "modal-footer"
    }, [
      M(s.$slots, "default", {}, void 0, !0)
    ], 512)) : E("", !0);
  }
});
const me = /* @__PURE__ */ g(de, [["__scopeId", "data-v-0db79781"]]);
const ae = {}, ue = { class: "modal-body" }, pe = { class: "modal-body__content" };
function _e(e, t) {
  return h(), v("div", ue, [
    p("div", pe, [
      M(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const be = /* @__PURE__ */ g(ae, [["render", _e], ["__scopeId", "data-v-dc47cc62"]]);
const fe = {}, he = { type: "button" };
function ye(e, t) {
  return h(), v("button", he, [
    M(e.$slots, "default", {}, void 0, !0)
  ]);
}
const xe = /* @__PURE__ */ g(fe, [["render", ye], ["__scopeId", "data-v-f7bd57cd"]]), we = (e) => {
  var t;
  (t = W(e)) == null || t.open();
}, Me = (e) => {
  var t;
  (t = W(e)) == null || t.close();
};
export {
  ge as Modal,
  xe as ModalButton,
  be as ModalContent,
  me as ModalFooter,
  Me as close,
  we as open
};
//# sourceMappingURL=modal.js.map
