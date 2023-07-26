import { defineComponent as g, ref as a, onMounted as y, onUnmounted as k, openBlock as v, createElementBlock as m, createElementVNode as n, toDisplayString as w, withModifiers as x, renderSlot as M, createCommentVNode as b, nextTick as S, pushScopeId as E, popScopeId as C } from "vue";
const i = /* @__PURE__ */ new Map(), B = (e, t) => {
  i.set(e, t);
}, h = (e) => {
  const t = i.get(e);
  return t === void 0 ? null : t;
}, I = (e) => {
  i.delete(e);
}, $ = (e) => (E("data-v-d29e728b"), e = e(), C(), e), L = { class: "modal-header__title" }, H = { class: "modal-header__buttons" }, q = ["onClick"], N = /* @__PURE__ */ $(() => /* @__PURE__ */ n("svg", {
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
  /* @__PURE__ */ n("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ n("path", { d: "M18 6l-12 12" }),
  /* @__PURE__ */ n("path", { d: "M6 6l12 12" })
], -1)), O = [
  N
], R = { class: "modal-body" }, V = /* @__PURE__ */ g({
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
  setup(e) {
    const t = e, l = a(!1), o = a(null), d = a(null), _ = () => {
      l.value = !0, S(() => {
        o.value !== null && (o.value.style.width = t.width, o.value.style.height = t.height, o.value.style.top = document.documentElement.clientHeight / 2 - o.value.clientHeight / 2, o.value.style.left = document.documentElement.clientWidth / 2 - o.value.clientWidth / 2, d.value !== null && d.value.addEventListener("mousedown", (s) => {
          let r = s.clientX - o.value.getBoundingClientRect().left, f = s.clientY - o.value.getBoundingClientRect().top;
          const u = function(p) {
            o.value.style.top = p.pageY - f + "px", o.value.style.left = p.pageX - r + "px";
          };
          document.addEventListener("mousemove", u), d.value.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", u);
          });
        }));
      });
    }, c = () => {
      l.value = !1;
    };
    return y(() => {
      B(t.name, {
        open: _,
        close: c
      });
    }), k(() => {
      I(t.name);
    }), (s, r) => (v(), m("div", null, [
      l.value ? (v(), m("div", {
        key: 0,
        ref_key: "$modal",
        ref: o,
        class: "modal"
      }, [
        n("div", {
          ref_key: "$header",
          ref: d,
          class: "modal-header"
        }, [
          n("div", L, w(e.title), 1),
          n("div", H, [
            n("button", {
              type: "button",
              onClick: x(c, ["prevent"])
            }, O, 8, q)
          ])
        ], 512),
        n("div", R, [
          M(s.$slots, "default", {}, void 0, !0)
        ])
      ], 512)) : b("", !0)
    ]));
  }
});
const W = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, d] of t)
    l[o] = d;
  return l;
}, Y = /* @__PURE__ */ W(V, [["__scopeId", "data-v-d29e728b"]]), j = (e) => {
  var t;
  (t = h(e)) == null || t.open();
}, z = (e) => {
  var t;
  (t = h(e)) == null || t.close();
};
export {
  Y as Modal,
  z as close,
  j as open
};
