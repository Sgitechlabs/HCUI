import {
  Input,
  codeVersionSchema,
  o,
  useForm
} from "/build/_shared/chunk-HBGW422B.js";
import {
  createHotContext
} from "/build/_shared/chunk-HQ7UJGS3.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_auth.dashboard.tsx
var import_react11 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t7, e2, n) => e2 in t7 ? i(t7, e2, { enumerable: true, configurable: true, writable: true, value: n }) : t7[e2] = n;
var r = (t7, e2, n) => (d(t7, typeof e2 != "symbol" ? e2 + "" : e2, n), n);
var o2 = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o2();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e2, f4) => {
  s.isServer ? (0, import_react.useEffect)(e2, f4) : (0, import_react.useLayoutEffect)(e2, f4);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e2) {
  let r4 = (0, import_react2.useRef)(e2);
  return l(() => {
    r4.current = e2;
  }, [e2]), r4;
}

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o7) => setTimeout(() => {
    throw o7;
  }));
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react3 = __toESM(require_react(), 1);
var o3 = function(t7) {
  let e2 = s2(t7);
  return import_react3.default.useCallback((...r4) => e2.current(...r4), [e2]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t4 = __toESM(require_react(), 1);
function s3() {
  let r4 = typeof document == "undefined";
  return "useSyncExternalStore" in t4 ? ((o7) => o7.useSyncExternalStore)(t4)(() => () => {
  }, () => false, () => !r4) : false;
}
function l2() {
  let r4 = s3(), [e2, n] = t4.useState(s.isHandoffComplete);
  return e2 && s.isHandoffComplete === false && n(false), t4.useEffect(() => {
    e2 !== true && n(true);
  }, [e2]), t4.useEffect(() => s.handoff(), []), r4 ? false : e2;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o4;
var I = (o4 = import_react4.default.useId) != null ? o4 : function() {
  let n = l2(), [e2, u3] = import_react4.default.useState(n ? () => s.nextId() : null);
  return l(() => {
    e2 === null && u3(s.nextId());
  }, [e2]), e2 != null ? "" + e2 : void 0;
};

// node_modules/@headlessui/react/dist/utils/match.js
function u(r4, n, ...a4) {
  if (r4 in n) {
    let e2 = n[r4];
    return typeof e2 == "function" ? e2(...a4) : e2;
  }
  let t7 = new Error(`Tried to handle "${r4}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t7, u), t7;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r4) {
  return s.isServer ? null : r4 instanceof Node ? r4.ownerDocument : r4 != null && r4.hasOwnProperty("current") && r4.current instanceof Node ? r4.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var M = ((n) => (n[n.First = 1] = "First", n[n.Previous = 2] = "Previous", n[n.Next = 4] = "Next", n[n.Last = 8] = "Last", n[n.WrapAround = 16] = "WrapAround", n[n.NoScroll = 32] = "NoScroll", n))(M || {});
var N = ((o7) => (o7[o7.Error = 0] = "Error", o7[o7.Overflow = 1] = "Overflow", o7[o7.Success = 2] = "Success", o7[o7.Underflow = 3] = "Underflow", o7))(N || {});
var F = ((t7) => (t7[t7.Previous = -1] = "Previous", t7[t7.Next = 1] = "Next", t7))(F || {});
function f(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c2)).sort((r4, t7) => Math.sign((r4.tabIndex || Number.MAX_SAFE_INTEGER) - (t7.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T = ((t7) => (t7[t7.Strict = 0] = "Strict", t7[t7.Loose = 1] = "Loose", t7))(T || {});
var w = ((t7) => (t7[t7.Keyboard = 0] = "Keyboard", t7[t7.Mouse = 1] = "Mouse", t7))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
  e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e2) => {
  e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
var S = ["textarea", "input"].join(",");
function H(e2) {
  var r4, t7;
  return (t7 = (r4 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r4.call(e2, S)) != null ? t7 : false;
}
function I2(e2, r4 = (t7) => t7) {
  return e2.slice().sort((t7, l4) => {
    let o7 = r4(t7), i4 = r4(l4);
    if (o7 === null || i4 === null)
      return 0;
    let n = o7.compareDocumentPosition(i4);
    return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function O(e2, r4, { sorted: t7 = true, relativeTo: l4 = null, skipElements: o7 = [] } = {}) {
  let i4 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, n = Array.isArray(e2) ? t7 ? I2(e2) : e2 : f(e2);
  o7.length > 0 && n.length > 1 && (n = n.filter((s8) => !o7.includes(s8))), l4 = l4 != null ? l4 : i4.activeElement;
  let E2 = (() => {
    if (r4 & 5)
      return 1;
    if (r4 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (r4 & 1)
      return 0;
    if (r4 & 2)
      return Math.max(0, n.indexOf(l4)) - 1;
    if (r4 & 4)
      return Math.max(0, n.indexOf(l4)) + 1;
    if (r4 & 8)
      return n.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = r4 & 32 ? { preventScroll: true } : {}, d3 = 0, a4 = n.length, u3;
  do {
    if (d3 >= a4 || d3 + a4 <= 0)
      return 0;
    let s8 = x2 + d3;
    if (r4 & 16)
      s8 = (s8 + a4) % a4;
    else {
      if (s8 < 0)
        return 3;
      if (s8 >= a4)
        return 1;
    }
    u3 = n[s8], u3 == null || u3.focus(p2), d3 += E2;
  } while (u3 !== i4.activeElement);
  return r4 & 6 && H(u3) && u3.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react5 = __toESM(require_react(), 1);
function i2(t7) {
  var n;
  if (t7.type)
    return t7.type;
  let e2 = (n = t7.as) != null ? n : "button";
  if (typeof e2 == "string" && e2.toLowerCase() === "button")
    return "button";
}
function s4(t7, e2) {
  let [n, u3] = (0, import_react5.useState)(() => i2(t7));
  return l(() => {
    u3(i2(t7));
  }, [t7.type, t7.as]), l(() => {
    n || e2.current && e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u3("button");
  }, [n, e2]), n;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react6 = __toESM(require_react(), 1);
var u2 = Symbol();
function y(...t7) {
  let n = (0, import_react6.useRef)(t7);
  (0, import_react6.useEffect)(() => {
    n.current = t7;
  }, [t7]);
  let c6 = o3((e2) => {
    for (let o7 of n.current)
      o7 != null && (typeof o7 == "function" ? o7(e2) : o7.current = e2);
  });
  return t7.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u2])) ? void 0 : c6;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t6(...r4) {
  return Array.from(new Set(r4.flatMap((n) => typeof n == "string" ? n.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var S2 = ((a4) => (a4[a4.None = 0] = "None", a4[a4.RenderStrategy = 1] = "RenderStrategy", a4[a4.Static = 2] = "Static", a4))(S2 || {});
var j = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(j || {});
function X({ ourProps: r4, theirProps: t7, slot: e2, defaultTag: a4, features: s8, visible: n = true, name: f4 }) {
  let o7 = N2(t7, r4);
  if (n)
    return c3(o7, e2, a4, f4);
  let u3 = s8 != null ? s8 : 0;
  if (u3 & 2) {
    let { static: l4 = false, ...p2 } = o7;
    if (l4)
      return c3(p2, e2, a4, f4);
  }
  if (u3 & 1) {
    let { unmount: l4 = true, ...p2 } = o7;
    return u(l4 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c3({ ...p2, hidden: true, style: { display: "none" } }, e2, a4, f4);
    } });
  }
  return c3(o7, e2, a4, f4);
}
function c3(r4, t7 = {}, e2, a4) {
  let { as: s8 = e2, children: n, refName: f4 = "ref", ...o7 } = g(r4, ["unmount", "static"]), u3 = r4.ref !== void 0 ? { [f4]: r4.ref } : {}, l4 = typeof n == "function" ? n(t7) : n;
  "className" in o7 && o7.className && typeof o7.className == "function" && (o7.className = o7.className(t7));
  let p2 = {};
  if (t7) {
    let i4 = false, m = [];
    for (let [y2, d3] of Object.entries(t7))
      typeof d3 == "boolean" && (i4 = true), d3 === true && m.push(y2);
    i4 && (p2["data-headlessui-state"] = m.join(" "));
  }
  if (s8 === import_react7.Fragment && Object.keys(R(o7)).length > 0) {
    if (!(0, import_react7.isValidElement)(l4) || Array.isArray(l4) && l4.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a4} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o7).map((d3) => `  - ${d3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d3) => `  - ${d3}`).join(`
`)].join(`
`));
    let i4 = l4.props, m = typeof (i4 == null ? void 0 : i4.className) == "function" ? (...d3) => t6(i4 == null ? void 0 : i4.className(...d3), o7.className) : t6(i4 == null ? void 0 : i4.className, o7.className), y2 = m ? { className: m } : {};
    return (0, import_react7.cloneElement)(l4, Object.assign({}, N2(l4.props, R(g(o7, ["ref"]))), p2, u3, w2(l4.ref, u3.ref), y2));
  }
  return (0, import_react7.createElement)(s8, Object.assign({}, g(o7, ["ref"]), s8 !== import_react7.Fragment && u3, s8 !== import_react7.Fragment && p2), l4);
}
function w2(...r4) {
  return { ref: r4.every((t7) => t7 == null) ? void 0 : (t7) => {
    for (let e2 of r4)
      e2 != null && (typeof e2 == "function" ? e2(t7) : e2.current = t7);
  } };
}
function N2(...r4) {
  var a4;
  if (r4.length === 0)
    return {};
  if (r4.length === 1)
    return r4[0];
  let t7 = {}, e2 = {};
  for (let s8 of r4)
    for (let n in s8)
      n.startsWith("on") && typeof s8[n] == "function" ? ((a4 = e2[n]) != null || (e2[n] = []), e2[n].push(s8[n])) : t7[n] = s8[n];
  if (t7.disabled || t7["aria-disabled"])
    return Object.assign(t7, Object.fromEntries(Object.keys(e2).map((s8) => [s8, void 0])));
  for (let s8 in e2)
    Object.assign(t7, { [s8](n, ...f4) {
      let o7 = e2[s8];
      for (let u3 of o7) {
        if ((n instanceof Event || (n == null ? void 0 : n.nativeEvent) instanceof Event) && n.defaultPrevented)
          return;
        u3(n, ...f4);
      }
    } });
  return t7;
}
function D(r4) {
  var t7;
  return Object.assign((0, import_react7.forwardRef)(r4), { displayName: (t7 = r4.displayName) != null ? t7 : r4.name });
}
function R(r4) {
  let t7 = Object.assign({}, r4);
  for (let e2 in t7)
    t7[e2] === void 0 && delete t7[e2];
  return t7;
}
function g(r4, t7 = []) {
  let e2 = Object.assign({}, r4);
  for (let a4 of t7)
    a4 in e2 && delete e2[a4];
  return e2;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a2 = "div";
var p = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(p || {});
function s5(t7, o7) {
  let { features: n = 1, ...e2 } = t7, d3 = { ref: o7, "aria-hidden": (n & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return X({ ourProps: d3, theirProps: e2, slot: {}, defaultTag: a2, name: "Hidden" });
}
var c4 = D(s5);

// node_modules/@headlessui/react/dist/components/keyboard.js
var o6 = ((r4) => (r4.Space = " ", r4.Enter = "Enter", r4.Escape = "Escape", r4.Backspace = "Backspace", r4.Delete = "Delete", r4.ArrowLeft = "ArrowLeft", r4.ArrowUp = "ArrowUp", r4.ArrowRight = "ArrowRight", r4.ArrowDown = "ArrowDown", r4.Home = "Home", r4.End = "End", r4.PageUp = "PageUp", r4.PageDown = "PageDown", r4.Tab = "Tab", r4))(o6 || {});

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react8 = __toESM(require_react(), 1);
function f2() {
  let e2 = (0, import_react8.useRef)(false);
  return l(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react10 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react9 = __toESM(require_react(), 1);
function A({ onFocus: n }) {
  let [r4, o7] = (0, import_react9.useState)(true), u3 = f2();
  return r4 ? import_react9.default.createElement(c4, { as: "button", type: "button", features: p.Focusable, onFocus: (a4) => {
    a4.preventDefault();
    let e2, i4 = 50;
    function t7() {
      if (i4-- <= 0) {
        e2 && cancelAnimationFrame(e2);
        return;
      }
      if (n()) {
        if (cancelAnimationFrame(e2), !u3.current)
          return;
        o7(false);
        return;
      }
      e2 = requestAnimationFrame(t7);
    }
    e2 = requestAnimationFrame(t7);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
var r3 = __toESM(require_react(), 1);
var s7 = r3.createContext(null);
function a3() {
  return { groups: /* @__PURE__ */ new Map(), get(n, t7) {
    var c6;
    let e2 = this.groups.get(n);
    e2 || (e2 = /* @__PURE__ */ new Map(), this.groups.set(n, e2));
    let l4 = (c6 = e2.get(t7)) != null ? c6 : 0;
    e2.set(t7, l4 + 1);
    let o7 = Array.from(e2.keys()).indexOf(t7);
    function i4() {
      let u3 = e2.get(t7);
      u3 > 1 ? e2.set(t7, u3 - 1) : e2.delete(t7);
    }
    return [o7, i4];
  } };
}
function C({ children: n }) {
  let t7 = r3.useRef(a3());
  return r3.createElement(s7.Provider, { value: t7 }, n);
}
function d2(n) {
  let t7 = r3.useContext(s7);
  if (!t7)
    throw new Error("You must wrap your component in a <StableCollection>");
  let e2 = f3(), [l4, o7] = t7.current.get(n, e2);
  return r3.useEffect(() => o7, []), l4;
}
function f3() {
  var l4, o7, i4;
  let n = (i4 = (o7 = (l4 = r3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : l4.ReactCurrentOwner) == null ? void 0 : o7.current) != null ? i4 : null;
  if (!n)
    return Symbol();
  let t7 = [], e2 = n;
  for (; e2; )
    t7.push(e2.index), e2 = e2.return;
  return "$." + t7.join(".");
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var ue = ((t7) => (t7[t7.Forwards = 0] = "Forwards", t7[t7.Backwards = 1] = "Backwards", t7))(ue || {});
var Te = ((o7) => (o7[o7.Less = -1] = "Less", o7[o7.Equal = 0] = "Equal", o7[o7.Greater = 1] = "Greater", o7))(Te || {});
var de = ((r4) => (r4[r4.SetSelectedIndex = 0] = "SetSelectedIndex", r4[r4.RegisterTab = 1] = "RegisterTab", r4[r4.UnregisterTab = 2] = "UnregisterTab", r4[r4.RegisterPanel = 3] = "RegisterPanel", r4[r4.UnregisterPanel = 4] = "UnregisterPanel", r4))(de || {});
var ce = { [0](e2, n) {
  var u3;
  let t7 = I2(e2.tabs, (T3) => T3.current), o7 = I2(e2.panels, (T3) => T3.current), s8 = t7.filter((T3) => {
    var l4;
    return !((l4 = T3.current) != null && l4.hasAttribute("disabled"));
  }), r4 = { ...e2, tabs: t7, panels: o7 };
  if (n.index < 0 || n.index > t7.length - 1) {
    let T3 = u(Math.sign(n.index - e2.selectedIndex), { [-1]: () => 1, [0]: () => u(Math.sign(n.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    if (s8.length === 0)
      return r4;
    let l4 = u(T3, { [0]: () => t7.indexOf(s8[0]), [1]: () => t7.indexOf(s8[s8.length - 1]) });
    return { ...r4, selectedIndex: l4 === -1 ? e2.selectedIndex : l4 };
  }
  let i4 = t7.slice(0, n.index), b2 = [...t7.slice(n.index), ...i4].find((T3) => s8.includes(T3));
  if (!b2)
    return r4;
  let c6 = (u3 = t7.indexOf(b2)) != null ? u3 : e2.selectedIndex;
  return c6 === -1 && (c6 = e2.selectedIndex), { ...r4, selectedIndex: c6 };
}, [1](e2, n) {
  var r4;
  if (e2.tabs.includes(n.tab))
    return e2;
  let t7 = e2.tabs[e2.selectedIndex], o7 = I2([...e2.tabs, n.tab], (i4) => i4.current), s8 = (r4 = o7.indexOf(t7)) != null ? r4 : e2.selectedIndex;
  return s8 === -1 && (s8 = e2.selectedIndex), { ...e2, tabs: o7, selectedIndex: s8 };
}, [2](e2, n) {
  return { ...e2, tabs: e2.tabs.filter((t7) => t7 !== n.tab) };
}, [3](e2, n) {
  return e2.panels.includes(n.panel) ? e2 : { ...e2, panels: I2([...e2.panels, n.panel], (t7) => t7.current) };
}, [4](e2, n) {
  return { ...e2, panels: e2.panels.filter((t7) => t7 !== n.panel) };
} };
var X2 = (0, import_react10.createContext)(null);
X2.displayName = "TabsDataContext";
function M2(e2) {
  let n = (0, import_react10.useContext)(X2);
  if (n === null) {
    let t7 = new Error(`<${e2} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t7, M2), t7;
  }
  return n;
}
var $ = (0, import_react10.createContext)(null);
$.displayName = "TabsActionsContext";
function q(e2) {
  let n = (0, import_react10.useContext)($);
  if (n === null) {
    let t7 = new Error(`<${e2} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t7, q), t7;
  }
  return n;
}
function fe(e2, n) {
  return u(n.type, ce, e2, n);
}
var be = import_react10.Fragment;
function me(e2, n) {
  let { defaultIndex: t7 = 0, vertical: o7 = false, manual: s8 = false, onChange: r4, selectedIndex: i4 = null, ...R2 } = e2;
  const b2 = o7 ? "vertical" : "horizontal", c6 = s8 ? "manual" : "auto";
  let u3 = i4 !== null, T3 = y(n), [l4, d3] = (0, import_react10.useReducer)(fe, { selectedIndex: i4 != null ? i4 : t7, tabs: [], panels: [] }), g2 = (0, import_react10.useMemo)(() => ({ selectedIndex: l4.selectedIndex }), [l4.selectedIndex]), m = s2(r4 || (() => {
  })), y2 = s2(l4.tabs), E2 = (0, import_react10.useMemo)(() => ({ orientation: b2, activation: c6, ...l4 }), [b2, c6, l4]), I3 = o3((p2) => (d3({ type: 1, tab: p2 }), () => d3({ type: 2, tab: p2 }))), A2 = o3((p2) => (d3({ type: 3, panel: p2 }), () => d3({ type: 4, panel: p2 }))), L = o3((p2) => {
    C2.current !== p2 && m.current(p2), u3 || d3({ type: 0, index: p2 });
  }), C2 = s2(u3 ? e2.selectedIndex : l4.selectedIndex), N3 = (0, import_react10.useMemo)(() => ({ registerTab: I3, registerPanel: A2, change: L }), []);
  l(() => {
    d3({ type: 0, index: i4 != null ? i4 : t7 });
  }, [i4]), l(() => {
    if (C2.current === void 0 || l4.tabs.length <= 0)
      return;
    let p2 = I2(l4.tabs, (a4) => a4.current);
    p2.some((a4, f4) => l4.tabs[f4] !== a4) && L(p2.indexOf(l4.tabs[C2.current]));
  });
  let B = { ref: T3 };
  return import_react10.default.createElement(C, null, import_react10.default.createElement($.Provider, { value: N3 }, import_react10.default.createElement(X2.Provider, { value: E2 }, E2.tabs.length <= 0 && import_react10.default.createElement(A, { onFocus: () => {
    var p2, D2;
    for (let a4 of y2.current)
      if (((p2 = a4.current) == null ? void 0 : p2.tabIndex) === 0)
        return (D2 = a4.current) == null || D2.focus(), true;
    return false;
  } }), X({ ourProps: B, theirProps: R2, slot: g2, defaultTag: be, name: "Tabs" }))));
}
var Pe = "div";
function xe(e2, n) {
  let { orientation: t7, selectedIndex: o7 } = M2("Tab.List"), s8 = y(n);
  return X({ ourProps: { ref: s8, role: "tablist", "aria-orientation": t7 }, theirProps: e2, slot: { selectedIndex: o7 }, defaultTag: Pe, name: "Tabs.List" });
}
var ge = "button";
function ye(e2, n) {
  var p2, D2;
  let t7 = I(), { id: o7 = `headlessui-tabs-tab-${t7}`, ...s8 } = e2, { orientation: r4, activation: i4, selectedIndex: R2, tabs: b2, panels: c6 } = M2("Tab"), u3 = q("Tab"), T3 = M2("Tab"), l4 = (0, import_react10.useRef)(null), d3 = y(l4, n);
  l(() => u3.registerTab(l4), [u3, l4]);
  let g2 = d2("tabs"), m = b2.indexOf(l4);
  m === -1 && (m = g2);
  let y2 = m === R2, E2 = o3((a4) => {
    var j2;
    let f4 = a4();
    if (f4 === N.Success && i4 === "auto") {
      let W = (j2 = e(l4)) == null ? void 0 : j2.activeElement, z = T3.tabs.findIndex((te) => te.current === W);
      z !== -1 && u3.change(z);
    }
    return f4;
  }), I3 = o3((a4) => {
    let f4 = b2.map((W) => W.current).filter(Boolean);
    if (a4.key === o6.Space || a4.key === o6.Enter) {
      a4.preventDefault(), a4.stopPropagation(), u3.change(m);
      return;
    }
    switch (a4.key) {
      case o6.Home:
      case o6.PageUp:
        return a4.preventDefault(), a4.stopPropagation(), E2(() => O(f4, M.First));
      case o6.End:
      case o6.PageDown:
        return a4.preventDefault(), a4.stopPropagation(), E2(() => O(f4, M.Last));
    }
    if (E2(() => u(r4, { vertical() {
      return a4.key === o6.ArrowUp ? O(f4, M.Previous | M.WrapAround) : a4.key === o6.ArrowDown ? O(f4, M.Next | M.WrapAround) : N.Error;
    }, horizontal() {
      return a4.key === o6.ArrowLeft ? O(f4, M.Previous | M.WrapAround) : a4.key === o6.ArrowRight ? O(f4, M.Next | M.WrapAround) : N.Error;
    } })) === N.Success)
      return a4.preventDefault();
  }), A2 = (0, import_react10.useRef)(false), L = o3(() => {
    var a4;
    A2.current || (A2.current = true, (a4 = l4.current) == null || a4.focus({ preventScroll: true }), u3.change(m), t3(() => {
      A2.current = false;
    }));
  }), C2 = o3((a4) => {
    a4.preventDefault();
  }), N3 = (0, import_react10.useMemo)(() => ({ selected: y2 }), [y2]), B = { ref: d3, onKeyDown: I3, onMouseDown: C2, onClick: L, id: o7, role: "tab", type: s4(e2, l4), "aria-controls": (D2 = (p2 = c6[m]) == null ? void 0 : p2.current) == null ? void 0 : D2.id, "aria-selected": y2, tabIndex: y2 ? 0 : -1 };
  return X({ ourProps: B, theirProps: s8, slot: N3, defaultTag: ge, name: "Tabs.Tab" });
}
var Ee = "div";
function Ae(e2, n) {
  let { selectedIndex: t7 } = M2("Tab.Panels"), o7 = y(n), s8 = (0, import_react10.useMemo)(() => ({ selectedIndex: t7 }), [t7]);
  return X({ ourProps: { ref: o7 }, theirProps: e2, slot: s8, defaultTag: Ee, name: "Tabs.Panels" });
}
var Re = "div";
var Le = S2.RenderStrategy | S2.Static;
function Se(e2, n) {
  var E2, I3, A2, L;
  let t7 = I(), { id: o7 = `headlessui-tabs-panel-${t7}`, tabIndex: s8 = 0, ...r4 } = e2, { selectedIndex: i4, tabs: R2, panels: b2 } = M2("Tab.Panel"), c6 = q("Tab.Panel"), u3 = (0, import_react10.useRef)(null), T3 = y(u3, n);
  l(() => c6.registerPanel(u3), [c6, u3]);
  let l4 = d2("panels"), d3 = b2.indexOf(u3);
  d3 === -1 && (d3 = l4);
  let g2 = d3 === i4, m = (0, import_react10.useMemo)(() => ({ selected: g2 }), [g2]), y2 = { ref: T3, id: o7, role: "tabpanel", "aria-labelledby": (I3 = (E2 = R2[d3]) == null ? void 0 : E2.current) == null ? void 0 : I3.id, tabIndex: g2 ? s8 : -1 };
  return !g2 && ((A2 = r4.unmount) == null || A2) && !((L = r4.static) != null && L) ? import_react10.default.createElement(c4, { as: "span", ...y2 }) : X({ ourProps: y2, theirProps: r4, slot: m, defaultTag: Re, features: Le, visible: g2, name: "Tabs.Panel" });
}
var Ie = D(ye);
var De = D(me);
var Fe = D(xe);
var he = D(Ae);
var Me = D(Se);
var rt = Object.assign(Ie, { Group: De, List: Fe, Panels: he, Panel: Me });

// app/routes/_auth.dashboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_auth.dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_auth.dashboard.tsx"
  );
  import.meta.hot.lastModified = "1701586045783.103";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Dashboard() {
  _s();
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm({
    mode: "onChange",
    resolver: o(codeVersionSchema)
  });
  const [versionCodeCd, setVersionCodeCd] = (0, import_react11.useState)("");
  const [cdrError, setCDRError] = (0, import_react11.useState)("");
  let [categories] = (0, import_react11.useState)({
    "CD RDR SCAN": "",
    MANUAL: ""
  });
  const healthReport = [{
    responseCode: "WSCEFB356LOQWC",
    serviceDate: "23/09/2003",
    firstName: "Manoj",
    lastName: "Pant",
    dob: "25/02/1994",
    age: 34,
    gender: "Male",
    versionCode: "SCFRT5656578NHQSAW",
    expiry: "18/09/2024"
  }, {
    responseCode: "QWERTYGH568HTG",
    serviceDate: "12/02/2013",
    firstName: "Rahul",
    lastName: "Singh",
    dob: "25/02/1991",
    gender: "Male",
    age: 56,
    versionCode: "SCFRT56578NKJK87612",
    expiry: "18/09/2027"
  }];
  const [healthCard, setHealtCard] = (0, import_react11.useState)({});
  const cdRDRInputChange = (e2) => {
    setVersionCodeCd(e2.target.value);
    console.log(e2.target.value, "event");
    if (e2?.target?.value?.length == 12) {
      setCDRError("");
      setTimeout(() => {
        alert(versionCodeCd);
      }, 2e3);
      setHealtCard(healthReport[0]);
    } else if (e2.target.length != 12) {
      setCDRError("Invalid HC Version Code");
      setHealtCard({});
    }
  };
  const handleEnter = (e2) => {
    if (versionCodeCd?.length == 12 && e2?.key === "Enter") {
      alert("Enter Pressed");
    }
    if (versionCodeCd?.length == 12 && e2?.key === "Escape") {
      alert("Escape Pressed");
    }
  };
  const tabChanged = () => {
    reset();
    setCDRError("");
    setHealtCard({});
  };
  (0, import_react11.useEffect)(() => {
    console.log("version code value");
  }, [versionCodeCd]);
  const onSubmit = () => {
    console.log("assssssssssssssssss");
    setHealtCard(healthReport[1]);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "font-bold text-2xl", children: "Dashboard" }, void 0, false, {
      fileName: "app/routes/_auth.dashboard.tsx",
      lineNumber: 110,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full px-2 py-6 sm:px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(rt.Group, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(rt.List, { className: "flex space-x-1 bg-blue-400 p-1", children: Object.keys(categories).map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(rt, { onClick: tabChanged, className: ({
        selected
      }) => classNames(
        "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
        // 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
        selected ? "bg-white text-black shadow" : "text-blue-100  hover:text-white"
      ), children: category }, category, false, {
        fileName: "app/routes/_auth.dashboard.tsx",
        lineNumber: 114,
        columnNumber: 49
      }, this)) }, void 0, false, {
        fileName: "app/routes/_auth.dashboard.tsx",
        lineNumber: 113,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(rt.Panels, { className: "", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(rt.Panel, { className: classNames(
          "rounded-xl bg-white outline-none"
          // 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none outline-none focus:ring-2'
        ), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-400 p-4 outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col mb-8 w-60 relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-gray-600 text-sm text-left mb-2", children: "HC Version Code" }, void 0, false, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 128,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "code", id: "code", maxLength: 12, onKeyDown: handleEnter, onChange: cdRDRInputChange, className: "bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" }, void 0, false, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 132,
            columnNumber: 11
          }, this),
          cdrError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "ml-0 pt-2 absolute top-16 text-red-600 text-left justify-start  text-xs", children: cdrError }, void 0, false, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 133,
            columnNumber: 24
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 127,
          columnNumber: 10
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 126,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 123,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(rt.Panel, { className: classNames(
          "rounded-xl bg-white"
          // 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
        ), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-400 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "text", register, error: errors, id: "hc", required: true, name: "hc", placeholder: "HC" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 146,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { type: "text", register, error: errors, id: "hc", required: true, name: "versionCode", placeholder: "Version Code" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 147,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 145,
            columnNumber: 12
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "submit",
              className: "text-center text-white bg-blue-500 w-[20%] items-center py-2",
              children: "Validate"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 149,
              columnNumber: 12
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 143,
          columnNumber: 10
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 142,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 139,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth.dashboard.tsx",
        lineNumber: 122,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.dashboard.tsx",
      lineNumber: 112,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth.dashboard.tsx",
      lineNumber: 111,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-400 rounded-md overflow-hidden ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-center font-medium text-base text-white bg-blue-500 py-2", children: "Health Report" }, void 0, false, {
        fileName: "app/routes/_auth.dashboard.tsx",
        lineNumber: 164,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-2 p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm", children: "MOH Response Code" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 170,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: healthCard?.responseCode || "-" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 171,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 169,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm", children: "Last Service Date" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 174,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: healthCard?.serviceDate || "-" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 175,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 173,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm", children: "First Name" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 178,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: healthCard?.firstName || "-" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 179,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 177,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm", children: "Last Name" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 183,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: healthCard?.lastName || "-" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 184,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 182,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 168,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-4 pt-2 border-0 border-t-2 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm", children: "DOB" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 190,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: healthCard?.dob || "-" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 191,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 189,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm", children: "Age" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 194,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: healthCard?.age || "-" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 195,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 193,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm", children: "Gender" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 198,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: healthCard?.gender || "-" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 199,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 197,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm", children: "Health Card" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 202,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: healthCard?.versionCode || "-" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 203,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 201,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 188,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-4 pt-2 border-0 border-t-2 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm", children: "Version Code" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 208,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: healthCard?.versionCode || "-" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 209,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 207,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm", children: "Expiry Date" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 212,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: healthCard?.expiry || "-" }, void 0, false, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 213,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 211,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 206,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth.dashboard.tsx",
        lineNumber: 167,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.dashboard.tsx",
      lineNumber: 163,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth.dashboard.tsx",
      lineNumber: 162,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.dashboard.tsx",
    lineNumber: 108,
    columnNumber: 10
  }, this);
}
_s(Dashboard, "WlZ1Q2ENz3KbmnrZr4SaWWQDHJw=", false, function() {
  return [useForm];
});
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/_auth.dashboard-KYE3EV66.js.map
