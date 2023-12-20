import {
  createHotContext
} from "/build/_shared/chunk-HQ7UJGS3.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Form/Select.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Form\\\\Select.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Form\\Select.tsx"
  );
  import.meta.hot.lastModified = "1701614553621.819";
}
var Select = (props) => {
  const {
    name,
    placeholder,
    style
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: name, className: "text-gray-600 text-lg", children: placeholder }, void 0, false, {
      fileName: "app/components/Form/Select.tsx",
      lineNumber: 31,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: `border ${style} text-base p-2 outline-none`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select" }, void 0, false, {
      fileName: "app/components/Form/Select.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/components/Form/Select.tsx",
      lineNumber: 34,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Form/Select.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c = Select;
var _c;
$RefreshReg$(_c, "Select");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Select
};
//# sourceMappingURL=/build/_shared/chunk-HQ342WXY.js.map
