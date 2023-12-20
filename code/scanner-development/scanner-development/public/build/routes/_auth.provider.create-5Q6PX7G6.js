import {
  Select
} from "/build/_shared/chunk-HQ342WXY.js";
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

// app/routes/_auth.provider.create.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_auth.provider.create.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_auth.provider.create.tsx"
  );
  import.meta.hot.lastModified = "1701622276295.2114";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col bg-white mt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-bold text-2xl py-4 mb-8 px-4 underline", children: "Create Provider" }, void 0, false, {
      fileName: "app/routes/_auth.provider.create.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 mb-6 px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "organisation", placeholder: "Organisation", error: errors, required: true, id: "organisation", type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "providerType", placeholder: "Provider Type", id: "providerType", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "specialization", placeholder: "Specialization", id: "specialization", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "firstName", placeholder: "First Name", id: "email", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "lastName", placeholder: "Last Name", id: "lastName", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "FullName", placeholder: "Full Name", id: "lastName", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "NoOfProvide", placeholder: "No Of Provider", id: "NoOfProvide", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "userId", placeholder: "User Id", id: "userId", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "password", placeholder: "Password", id: "password", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "street1", placeholder: "Street1", error: errors, required: true, id: "street1", type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 57,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "street2", placeholder: "Street2", id: "street2", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "city", placeholder: "City", id: "city", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 59,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "provState", placeholder: "Prov State", id: "provState", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 60,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "mobile", placeholder: "Mobile", id: "mobile", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "email", placeholder: "Email", id: "email", error: errors, required: true, type: "text", register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 62,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { name: "country", placeholder: "Country", id: "country", type: "text", options: [], register }, void 0, false, {
          fileName: "app/routes/_auth.provider.create.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_auth.provider.create.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth.provider.create.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-500 py-2 text-base text-white w-[10%] float-right my-4 rounded-lg mx-4", children: "Submit" }, void 0, false, {
        fileName: "app/routes/_auth.provider.create.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.provider.create.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.provider.create.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_auth.provider.create.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(Create, "8JHMINYFK8aje8EjW80NTX+KV5g=", false, function() {
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
//# sourceMappingURL=/build/routes/_auth.provider.create-5Q6PX7G6.js.map
