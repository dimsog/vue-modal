import { defineComponent as x, ref as h, onMounted as k, onUnmounted as M, openBlock as y, createElementBlock as m, createElementVNode as d, toDisplayString as E, withModifiers as S, renderSlot as C, createCommentVNode as B, nextTick as z, pushScopeId as L, popScopeId as R } from "vue";
const _ = /* @__PURE__ */ new Map(), H = (n, t) => {
  _.set(n, t);
}, b = (n) => {
  const t = _.get(n);
  return t === void 0 ? null : t;
}, W = (n) => {
  _.delete(n);
}, w = (n, t, e) => n - e.left > -10 && n - e.left < 10 && t - e.top > -10 && t - e.top < 10 ? "top-left" : e.right - n > -10 && e.right - n < 10 && t - e.top > -10 && t - e.top < 10 ? "top-right" : e.bottom - t > -10 && e.bottom - t < 10 && n - e.left > -10 && n - e.left < 10 ? "bottom-left" : e.bottom - t > -10 && e.bottom - t < 10 && e.right - n > -10 && e.right - n < 10 ? "bottom-right" : n - e.left > -5 && n - e.left < 5 ? "left" : e.right - n > -5 && e.right - n < 5 ? "right" : t - e.top > -5 && t - e.top < 5 ? "top" : e.bottom - t > -5 && e.bottom - t < 5 ? "bottom" : null, I = (n, t, e) => {
  switch (w(n, t, e)) {
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
}, T = (n, t) => {
  let e = !1;
  t.addEventListener("mousemove", (l) => {
    if (e)
      return;
    const o = t.getBoundingClientRect();
    t.style.cursor = I(l.clientX, l.clientY, o);
  }), t.addEventListener("mousedown", (l) => {
    if (e)
      return;
    const o = l.clientX, r = l.clientY, c = t.getBoundingClientRect();
    let s = w(o, r, c);
    if (s === null)
      return;
    const a = t.clientWidth, p = t.clientHeight;
    let u = a, f = p, g = c.top, v = c.left;
    t.style.userSelect = "none", document.addEventListener("mousemove", (i) => {
      s !== null && (s === "left" && (v = c.left + (i.clientX - o), u = a - (i.clientX - o)), s === "right" && (u = a + (i.clientX - o)), s === "top" && (g = c.top + (i.clientY - r), f = p - (i.clientY - r)), s === "bottom" && (f = p + (i.clientY - r)), s == "top-left" && (v = c.left + (i.clientX - o), u = a - (i.clientX - o), g = c.top + (i.clientY - r), f = p - (i.clientY - r)), s == "top-right" && (u = a + (i.clientX - o), g = c.top + (i.clientY - r), f = p - (i.clientY - r)), s == "bottom-left" && (v = c.left + (i.clientX - o), u = a - (i.clientX - o), f = p + (i.clientY - r)), s == "bottom-right" && (u = a + (i.clientX - o), f = p + (i.clientY - r)), t.style.width = u + "px", t.style.height = f + "px", t.style.left = v + "px", t.style.top = g + "px");
    }), t.addEventListener("mouseup", () => {
      s = null, t.style.userSelect = "";
    });
  }), n.addEventListener("mousedown", (l) => {
    let o = l.clientX - t.getBoundingClientRect().left, r = l.clientY - t.getBoundingClientRect().top;
    e = !0;
    const c = function(s) {
      t.style.top = s.pageY - r + "px", t.style.left = s.pageX - o + "px";
    };
    document.addEventListener("mousemove", c), n.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", c), e = !1;
    });
  });
}, q = (n) => (L("data-v-5d073248"), n = n(), R(), n), N = { class: "modal-header__title" }, O = { class: "modal-header__buttons" }, V = ["onClick"], X = /* @__PURE__ */ q(() => /* @__PURE__ */ d("svg", {
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
  /* @__PURE__ */ d("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ d("path", { d: "M18 6l-12 12" }),
  /* @__PURE__ */ d("path", { d: "M6 6l12 12" })
], -1)), Y = [
  X
], j = { class: "modal-body__content" }, D = /* @__PURE__ */ x({
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
    }
  },
  setup(n) {
    const t = n, e = h(!1), l = h(null), o = h(null), r = h(null), c = h(null), s = () => {
      e.value = !0, z(() => {
        l.value === null || r.value == null || (l.value.style.width = t.width, l.value.style.height = t.height, l.value.style.top = document.documentElement.clientHeight / 2 - l.value.clientHeight / 2 + "px", l.value.style.left = document.documentElement.clientWidth / 2 - l.value.clientWidth / 2 + "px", c.value.style.height = `calc(100% - ${o.value.clientHeight}px)`, T(r.value, l.value));
      });
    }, a = () => {
      e.value = !1;
    };
    return k(() => {
      H(t.name, {
        open: s,
        close: a
      });
    }), M(() => {
      W(t.name);
    }), (p, u) => (y(), m("div", null, [
      e.value ? (y(), m("div", {
        key: 0,
        ref_key: "$modal",
        ref: l,
        class: "modal"
      }, [
        d("div", {
          ref_key: "$headerWrapper",
          ref: o,
          class: "modal-header-wrapper"
        }, [
          d("div", {
            ref_key: "$header",
            ref: r,
            class: "modal-header"
          }, [
            d("div", N, E(n.title), 1),
            d("div", O, [
              d("button", {
                type: "button",
                onClick: S(a, ["prevent"])
              }, Y, 8, V)
            ])
          ], 512)
        ], 512),
        d("div", {
          ref_key: "$modalBody",
          ref: c,
          class: "modal-body"
        }, [
          d("div", j, [
            C(p.$slots, "default", {}, void 0, !0)
          ])
        ], 512)
      ], 512)) : B("", !0)
    ]));
  }
});
const U = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [l, o] of t)
    e[l] = o;
  return e;
}, F = /* @__PURE__ */ U(D, [["__scopeId", "data-v-5d073248"]]), G = (n) => {
  var t;
  (t = b(n)) == null || t.open();
}, J = (n) => {
  var t;
  (t = b(n)) == null || t.close();
};
export {
  F as Modal,
  J as close,
  G as open
};
