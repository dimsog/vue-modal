import { openBlock as n, createElementBlock as _ } from "vue";
const l = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [c, r] of e)
    o[c] = r;
  return o;
}, s = {};
function a(t, e) {
  return n(), _("div", null, "future modal");
}
const u = /* @__PURE__ */ l(s, [["render", a]]);
export {
  u as Modal
};
