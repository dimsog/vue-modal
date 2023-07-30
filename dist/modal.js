import { defineComponent as x, ref as h, onMounted as k, onUnmounted as M, openBlock as y, createElementBlock as m, createElementVNode as a, toDisplayString as E, withModifiers as C, renderSlot as B, createCommentVNode as S, nextTick as z, pushScopeId as L, popScopeId as R } from "vue";
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
  t.addEventListener("mousemove", (o) => {
    if (e)
      return;
    const l = t.getBoundingClientRect();
    t.style.cursor = I(o.clientX, o.clientY, l);
  }), t.addEventListener("mousedown", (o) => {
    if (e)
      return;
    o.preventDefault(), o.stopPropagation();
    const l = o.clientX, r = o.clientY, s = t.getBoundingClientRect(), c = t.clientWidth, p = t.clientHeight;
    let d = w(o.clientX, o.clientY, s), u = c, f = p, g = s.top, v = s.left;
    document.addEventListener("mousemove", (i) => {
      d !== null && (d === "left" && (v = s.left + (i.clientX - l), u = c - (i.clientX - l)), d === "right" && (u = c + (i.clientX - l)), d === "top" && (g = s.top + (i.clientY - r), f = p - (i.clientY - r)), d === "bottom" && (f = p + (i.clientY - r)), d == "top-left" && (v = s.left + (i.clientX - l), u = c - (i.clientX - l), g = s.top + (i.clientY - r), f = p - (i.clientY - r)), d == "top-right" && (u = c + (i.clientX - l), g = s.top + (i.clientY - r), f = p - (i.clientY - r)), d == "bottom-left" && (v = s.left + (i.clientX - l), u = c - (i.clientX - l), f = p + (i.clientY - r)), d == "bottom-right" && (u = c + (i.clientX - l), f = p + (i.clientY - r)), t.style.width = u + "px", t.style.height = f + "px", t.style.left = v + "px", t.style.top = g + "px");
    }), t.addEventListener("mouseup", () => {
      d = null;
    });
  }), n.addEventListener("mousedown", (o) => {
    let l = o.clientX - t.getBoundingClientRect().left, r = o.clientY - t.getBoundingClientRect().top;
    e = !0;
    const s = function(c) {
      t.style.top = c.pageY - r + "px", t.style.left = c.pageX - l + "px";
    };
    document.addEventListener("mousemove", s), n.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", s), e = !1;
    });
  });
}, X = (n) => (L("data-v-5d073248"), n = n(), R(), n), Y = { class: "modal-header__title" }, q = { class: "modal-header__buttons" }, D = ["onClick"], N = /* @__PURE__ */ X(() => /* @__PURE__ */ a("svg", {
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
], -1)), O = [
  N
], V = { class: "modal-body__content" }, j = /* @__PURE__ */ x({
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
    const t = n, e = h(!1), o = h(null), l = h(null), r = h(null), s = h(null), c = () => {
      e.value = !0, z(() => {
        o.value === null || r.value == null || (o.value.style.width = t.width, o.value.style.height = t.height, o.value.style.top = document.documentElement.clientHeight / 2 - o.value.clientHeight / 2 + "px", o.value.style.left = document.documentElement.clientWidth / 2 - o.value.clientWidth / 2 + "px", s.value.style.height = `calc(100% - ${l.value.clientHeight}px)`, T(r.value, o.value));
      });
    }, p = () => {
      e.value = !1;
    };
    return k(() => {
      H(t.name, {
        open: c,
        close: p
      });
    }), M(() => {
      W(t.name);
    }), (d, u) => (y(), m("div", null, [
      e.value ? (y(), m("div", {
        key: 0,
        ref_key: "$modal",
        ref: o,
        class: "modal"
      }, [
        a("div", {
          ref_key: "$headerWrapper",
          ref: l,
          class: "modal-header-wrapper"
        }, [
          a("div", {
            ref_key: "$header",
            ref: r,
            class: "modal-header"
          }, [
            a("div", Y, E(n.title), 1),
            a("div", q, [
              a("button", {
                type: "button",
                onClick: C(p, ["prevent"])
              }, O, 8, D)
            ])
          ], 512)
        ], 512),
        a("div", {
          ref_key: "$modalBody",
          ref: s,
          class: "modal-body"
        }, [
          a("div", V, [
            B(d.$slots, "default", {}, void 0, !0)
          ])
        ], 512)
      ], 512)) : S("", !0)
    ]));
  }
});
const P = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, l] of t)
    e[o] = l;
  return e;
}, A = /* @__PURE__ */ P(j, [["__scopeId", "data-v-5d073248"]]), F = (n) => {
  var t;
  (t = b(n)) == null || t.open();
}, G = (n) => {
  var t;
  (t = b(n)) == null || t.close();
};
export {
  A as Modal,
  G as close,
  F as open
};
