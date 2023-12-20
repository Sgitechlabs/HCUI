import {
  Input,
  createOrganistionSchema,
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
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_auth.organisation.create.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_auth.organisation.create.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_auth.organisation.create.tsx"
  );
  import.meta.hot.lastModified = "1701622151084.577";
}
function Create() {
  _s();
  const {
    register,
    formState: {
      errors
    }
  } = useForm({
    mode: "onChange",
    resolver: o(createOrganistionSchema)
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-bold text-2xl py-4 underline", children: "Create Organisation" }, void 0, false, {
      fileName: "app/routes/_auth.organisation.create.tsx",
      lineNumber: 40,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col bg-white py-8 px-4 mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "organisation", placeholder: "Organisation", error: errors, required: true, id: "organisation", type: "text", register }, void 0, false, {
            fileName: "app/routes/_auth.organisation.create.tsx",
            lineNumber: 48,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "phone", placeholder: "Phone", id: "phone", error: errors, required: true, type: "text", register }, void 0, false, {
            fileName: "app/routes/_auth.organisation.create.tsx",
            lineNumber: 49,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "mobile", placeholder: "Mobile", id: "mobile", error: errors, required: true, type: "text", register }, void 0, false, {
            fileName: "app/routes/_auth.organisation.create.tsx",
            lineNumber: 50,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Input,
            {
              name: "email",
              placeholder: "E-mail",
              id: "email",
              error: errors,
              required: true,
              type: "text"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_auth.organisation.create.tsx",
              lineNumber: 51,
              columnNumber: 8
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/_auth.organisation.create.tsx",
          lineNumber: 46,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-4 mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "street1", placeholder: "Street1", error: errors, required: true, id: "street1", type: "text", register }, void 0, false, {
            fileName: "app/routes/_auth.organisation.create.tsx",
            lineNumber: 74,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "street2", placeholder: "Street2", id: "street2", error: errors, required: true, type: "text", register }, void 0, false, {
            fileName: "app/routes/_auth.organisation.create.tsx",
            lineNumber: 75,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "city", placeholder: "City", id: "city", error: errors, required: true, type: "text", register }, void 0, false, {
            fileName: "app/routes/_auth.organisation.create.tsx",
            lineNumber: 76,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Input,
            {
              name: "provState",
              placeholder: "Prov State",
              id: "provState",
              error: errors,
              required: true,
              type: "text"
            },
            void 0,
            false,
            {
              fileName: "app/routes/_auth.organisation.create.tsx",
              lineNumber: 77,
              columnNumber: 8
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/_auth.organisation.create.tsx",
          lineNumber: 64,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth.organisation.create.tsx",
        lineNumber: 45,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-500 py-2 text-base text-white w-[10%] float-right my-4 rounded-lg", children: "Submit" }, void 0, false, {
        fileName: "app/routes/_auth.organisation.create.tsx",
        lineNumber: 84,
        columnNumber: 6
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.organisation.create.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth.organisation.create.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.organisation.create.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(Create, "h+wugaAnoWXgMQ26wPhfgpgmSzQ=", false, function() {
  return [useForm];
});
_c = Create;
var _c;
$RefreshReg$(_c, "Create");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Create as default
};
//# sourceMappingURL=/build/routes/_auth.organisation.create-TU5WQSLL.js.map
