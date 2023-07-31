import { defineComponent as b, ref as g, onMounted as w, openBlock as y, createElementBlock as m, onUnmounted as M, createElementVNode as p, normalizeClass as E, toDisplayString as S, withModifiers as z, renderSlot as H, createBlock as R, createCommentVNode as W, nextTick as L, pushScopeId as I, popScopeId as N } from "vue";
const T = /* @__PURE__ */ b({
  __name: "ModalBackdrop",
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = g(null), d = () => {
      n.value.style.width = document.documentElement.clientWidth + "px", n.value.style.height = document.documentElement.clientHeight + "px";
    }, s = () => {
      t("close"), document.body.style.overflow = "";
    };
    return w(() => {
      d(), window.addEventListener("resize", d), document.body.style.overflow = "hidden";
    }), (o, c) => (y(), m("div", {
      ref_key: "$backdrop",
      ref: n,
      onClick: s,
      class: "backdrop"
    }, null, 512));
  }
});
const k = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [d, s] of t)
    n[d] = s;
  return n;
}, q = /* @__PURE__ */ k(T, [["__scopeId", "data-v-44b276f1"]]), x = /* @__PURE__ */ new Map(), O = (e, t) => {
  x.set(e, t);
}, B = (e) => {
  const t = x.get(e);
  return t === void 0 ? null : t;
}, V = (e) => {
  x.delete(e);
}, C = (e, t, n) => e - n.left > -10 && e - n.left < 10 && t - n.top > -10 && t - n.top < 10 ? "top-left" : n.right - e > -10 && n.right - e < 10 && t - n.top > -10 && t - n.top < 10 ? "top-right" : n.bottom - t > -10 && n.bottom - t < 10 && e - n.left > -10 && e - n.left < 10 ? "bottom-left" : n.bottom - t > -10 && n.bottom - t < 10 && n.right - e > -10 && n.right - e < 10 ? "bottom-right" : e - n.left > -5 && e - n.left < 5 ? "left" : n.right - e > -5 && n.right - e < 5 ? "right" : t - n.top > -5 && t - n.top < 5 ? "top" : n.bottom - t > -5 && n.bottom - t < 5 ? "bottom" : null, X = (e, t, n) => {
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
}, Y = (e, t, n) => {
  let d = !1;
  t.addEventListener("mousemove", (s) => {
    if (d)
      return;
    const o = t.getBoundingClientRect();
    t.style.cursor = X(s.clientX, s.clientY, o);
  }), t.addEventListener("mousedown", (s) => {
    if (d)
      return;
    const o = s.clientX, c = s.clientY, l = t.getBoundingClientRect();
    let r = C(o, c, l);
    if (r === null)
      return;
    const a = t.clientWidth, u = t.clientHeight;
    let h = a, f = u, _ = l.top, v = l.left;
    t.style.userSelect = "none", document.addEventListener("mousemove", (i) => {
      r !== null && (r === "left" && (v = l.left + (i.clientX - o), h = a - (i.clientX - o)), r === "right" && (h = a + (i.clientX - o)), r === "top" && (_ = l.top + (i.clientY - c), f = u - (i.clientY - c)), r === "bottom" && (f = u + (i.clientY - c)), r == "top-left" && (v = l.left + (i.clientX - o), h = a - (i.clientX - o), _ = l.top + (i.clientY - c), f = u - (i.clientY - c)), r == "top-right" && (h = a + (i.clientX - o), _ = l.top + (i.clientY - c), f = u - (i.clientY - c)), r == "bottom-left" && (v = l.left + (i.clientX - o), h = a - (i.clientX - o), f = u + (i.clientY - c)), r == "bottom-right" && (h = a + (i.clientX - o), f = u + (i.clientY - c)), t.style.width = h + "px", t.style.height = f + "px", t.style.left = v + "px", t.style.top = _ + "px", n({
        x: t.getBoundingClientRect().x,
        y: t.getBoundingClientRect().y,
        width: t.clientWidth,
        height: t.clientHeight
      }));
    }), t.addEventListener("mouseup", () => {
      r = null, t.style.userSelect = "";
    });
  }), e.addEventListener("mousedown", (s) => {
    let o = s.clientX - t.getBoundingClientRect().left, c = s.clientY - t.getBoundingClientRect().top;
    d = !0;
    const l = function(r) {
      t.style.top = r.pageY - c + "px", t.style.left = r.pageX - o + "px", n({
        x: t.getBoundingClientRect().x,
        y: t.getBoundingClientRect().y,
        width: t.clientWidth,
        height: t.clientHeight
      });
    };
    document.addEventListener("mousemove", l), e.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", l), d = !1;
    });
  });
}, j = (e, t) => {
  e.style.width = t.width + "px", e.style.height = t.height + "px", e.style.top = t.y !== null ? t.y + "px" : document.documentElement.clientHeight / 2 - e.clientHeight / 2 + "px", e.style.left = t.x !== null ? t.x + "px" : document.documentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
}, A = (e) => (I("data-v-52557c2e"), e = e(), N(), e), D = { class: "modal-header__title" }, U = { class: "modal-header__buttons" }, F = ["onClick"], G = /* @__PURE__ */ A(() => /* @__PURE__ */ p("svg", {
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
], -1)), J = [
  G
], K = { class: "modal-body__content" }, Q = /* @__PURE__ */ b({
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
    }
  },
  setup(e) {
    const t = e, n = g(!1), d = g(null), s = g(null), o = g(null), c = g(null);
    let l = null;
    const r = () => {
      l = l || {
        x: document.documentElement.clientWidth / 2 - Number(t.width.replace("px", "")) / 2,
        y: window.innerHeight / 2 - Number(t.height.replace("px", "")) / 2,
        width: Number(t.width.replace("px", "")),
        height: Number(t.height.replace("px", ""))
      }, n.value = !0, L(async () => {
        j(d.value, l), Y(o.value, d.value, (u) => {
          l = u;
        }), c.value.style.height = `calc(100% - ${s.value.clientHeight}px)`;
      });
    }, a = () => {
      n.value = !1;
    };
    return w(() => {
      O(t.name, {
        open: r,
        close: a
      });
    }), M(() => {
      V(t.name);
    }), (u, h) => (y(), m("div", null, [
      p("div", {
        ref_key: "$modal",
        ref: d,
        class: E(["modal", { "modal--hidden": !n.value }])
      }, [
        p("div", {
          ref_key: "$headerWrapper",
          ref: s,
          class: "modal-header-wrapper"
        }, [
          p("div", {
            ref_key: "$header",
            ref: o,
            class: "modal-header"
          }, [
            p("div", D, S(e.title), 1),
            p("div", U, [
              p("button", {
                type: "button",
                onClick: z(a, ["prevent"])
              }, J, 8, F)
            ])
          ], 512)
        ], 512),
        p("div", {
          ref_key: "$modalBody",
          ref: c,
          class: "modal-body"
        }, [
          p("div", K, [
            H(u.$slots, "default", {}, void 0, !0)
          ])
        ], 512)
      ], 2),
      t.backdrop && n.value ? (y(), R(q, {
        key: 0,
        onClose: a
      })) : W("", !0)
    ]));
  }
});
const P = /* @__PURE__ */ k(Q, [["__scopeId", "data-v-52557c2e"]]), $ = (e) => {
  var t;
  (t = B(e)) == null || t.open();
}, tt = (e) => {
  var t;
  (t = B(e)) == null || t.close();
};
export {
  P as Modal,
  tt as close,
  $ as open
};
