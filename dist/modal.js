import { defineComponent as x, ref as v, onMounted as k, onUnmounted as M, openBlock as y, createElementBlock as m, createElementVNode as a, toDisplayString as E, withModifiers as C, renderSlot as B, createCommentVNode as S, nextTick as z, pushScopeId as L, popScopeId as R } from "vue";
const _ = /* @__PURE__ */ new Map(), H = (n, t) => {
  _.set(n, t);
}, w = (n) => {
  const t = _.get(n);
  return t === void 0 ? null : t;
}, I = (n) => {
  _.delete(n);
}, b = (n, t, e) => n - e.left > -10 && n - e.left < 10 && t - e.top > -10 && t - e.top < 10 ? "top-left" : e.right - n > -10 && e.right - n < 10 && t - e.top > -10 && t - e.top < 10 ? "top-right" : e.bottom - t > -10 && e.bottom - t < 10 && n - e.left > -10 && n - e.left < 10 ? "bottom-left" : e.bottom - t > -10 && e.bottom - t < 10 && e.right - n > -10 && e.right - n < 10 ? "bottom-right" : n - e.left > -5 && n - e.left < 5 ? "left" : e.right - n > -5 && e.right - n < 5 ? "right" : t - e.top > -5 && t - e.top < 5 ? "top" : e.bottom - t > -5 && e.bottom - t < 5 ? "bottom" : null, W = (n, t, e) => {
  switch (b(n, t, e)) {
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
    t.style.cursor = W(o.clientX, o.clientY, l);
  }), t.addEventListener("mousedown", (o) => {
    if (e)
      return;
    o.preventDefault(), o.stopPropagation();
    const l = o.clientX, s = o.clientY, r = t.getBoundingClientRect(), c = t.clientWidth, p = t.clientHeight;
    let d = b(o.clientX, o.clientY, r), u = c, f = p, h = r.top, g = r.left;
    document.addEventListener("mousemove", (i) => {
      d !== null && (d === "left" && (g = r.left + (i.clientX - l), u = c - (i.clientX - l)), d === "right" && (u = c + (i.clientX - l)), d === "top" && (h = r.top + (i.clientY - s), f = p - (i.clientY - s)), d === "bottom" && (f = p + (i.clientY - s)), d == "top-left" && (g = r.left + (i.clientX - l), u = c - (i.clientX - l), h = r.top + (i.clientY - s), f = p - (i.clientY - s)), d == "top-right" && (u = c + (i.clientX - l), h = r.top + (i.clientY - s), f = p - (i.clientY - s)), d == "bottom-left" && (g = r.left + (i.clientX - l), u = c - (i.clientX - l), f = p + (i.clientY - s)), d == "bottom-right" && (u = c + (i.clientX - l), f = p + (i.clientY - s)), t.style.width = u + "px", t.style.height = f + "px", t.style.left = g + "px", t.style.top = h + "px");
    }), t.addEventListener("mouseup", () => {
      d = null;
    });
  }), n.addEventListener("mousedown", (o) => {
    let l = o.clientX - t.getBoundingClientRect().left, s = o.clientY - t.getBoundingClientRect().top;
    e = !0;
    const r = function(c) {
      t.style.top = c.pageY - s + "px", t.style.left = c.pageX - l + "px";
    };
    document.addEventListener("mousemove", r), n.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", r), e = !1;
    });
  });
}, X = (n) => (L("data-v-ccec40c9"), n = n(), R(), n), Y = { class: "modal-header-wrapper" }, q = { class: "modal-header__title" }, D = { class: "modal-header__buttons" }, N = ["onClick"], O = /* @__PURE__ */ X(() => /* @__PURE__ */ a("svg", {
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
], -1)), V = [
  O
], j = /* @__PURE__ */ x({
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
    const t = n, e = v(!1), o = v(null), l = v(null), s = v(null), r = () => {
      e.value = !0, z(() => {
        o.value === null || l.value == null || (o.value.style.width = t.width, o.value.style.height = t.height, o.value.style.top = document.documentElement.clientHeight / 2 - o.value.clientHeight / 2 + "px", o.value.style.left = document.documentElement.clientWidth / 2 - o.value.clientWidth / 2 + "px", T(l.value, o.value));
      });
    }, c = () => {
      e.value = !1;
    };
    return k(() => {
      H(t.name, {
        open: r,
        close: c
      });
    }), M(() => {
      I(t.name);
    }), (p, d) => (y(), m("div", null, [
      e.value ? (y(), m("div", {
        key: 0,
        ref_key: "$modal",
        ref: o,
        class: "modal"
      }, [
        a("div", Y, [
          a("div", {
            ref_key: "$header",
            ref: l,
            class: "modal-header"
          }, [
            a("div", q, E(n.title), 1),
            a("div", D, [
              a("button", {
                type: "button",
                onClick: C(c, ["prevent"])
              }, V, 8, N)
            ])
          ], 512)
        ]),
        a("div", {
          ref_key: "$modalBody",
          ref: s,
          class: "modal-body"
        }, [
          B(p.$slots, "default", {}, void 0, !0)
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
}, A = /* @__PURE__ */ P(j, [["__scopeId", "data-v-ccec40c9"]]), F = (n) => {
  var t;
  (t = w(n)) == null || t.open();
}, G = (n) => {
  var t;
  (t = w(n)) == null || t.close();
};
export {
  A as Modal,
  G as close,
  F as open
};
