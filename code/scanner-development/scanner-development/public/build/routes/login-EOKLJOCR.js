import {
  useNavigate
} from "/build/_shared/chunk-SRHIKUNW.js";
import "/build/_shared/chunk-GIAAE3CH.js";
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

// app/routes/login.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.tsx"
  );
  import.meta.hot.lastModified = "1701527294278.6555";
}
var Login = () => {
  _s();
  const navigate = useNavigate();
  const hospitalList = [{
    id: 1,
    name: "Max Hospital"
  }, {
    id: 2,
    name: "Appolo Hospital"
  }, {
    id: 3,
    name: "Fortis Hospital"
  }, {
    id: 4,
    name: "Medanta Hospital"
  }];
  const login = () => {
    navigate("/dashboard");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#/", className: "flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 space-y-4 md:space-y-6 sm:p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white", children: "Sign in to your account" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-4 md:space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "hospital", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Provider" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 60,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: " border-gray-400 block w-full h-10 px-2 text-sm text-gray-800  border rounded-md focus:outline-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select" }, void 0, false, {
              fileName: "app/routes/login.tsx",
              lineNumber: 64,
              columnNumber: 10
            }, this),
            hospitalList?.map((option, index) => {
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: `${option.id}`, children: option?.name }, `option-${index}`, false, {
                fileName: "app/routes/login.tsx",
                lineNumber: 66,
                columnNumber: 26
              }, this);
            })
          ] }, void 0, true, {
            fileName: "app/routes/login.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 59,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "user", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Username" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", id: "email", className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", placeholder: "Username" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 72,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white", children: "Password" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", id: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" }, void 0, false, {
            fileName: "app/routes/login.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/login.tsx",
          lineNumber: 78,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", onClick: () => login(), className: "w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800", children: "Sign in" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 85,
          columnNumber: 8
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 54,
      columnNumber: 6
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 53,
      columnNumber: 5
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 45,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
};
_s(Login, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c = Login;
var login_default = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  login_default as default
};
//# sourceMappingURL=/build/routes/login-EOKLJOCR.js.map
