import {
  Link,
  Outlet,
  useLocation
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

// app/utils/Url.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\Url.ts"
  );
  import.meta.hot.lastModified = "1700219356049.3474";
}
var urlPath = {
  icon: "/"
};

// app/components/Container.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Container.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Container.tsx"
  );
  import.meta.hot.lastModified = "1700214798950.4397";
}
var Container = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[95%] mx-auto", children }, void 0, false, {
    fileName: "app/components/Container.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c = Container;
var _c;
$RefreshReg$(_c, "Container");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Header.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Header.tsx"
  );
  import.meta.hot.lastModified = "1701586089484.9946";
}
var Header = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "mx-auto bg-blue-400 border shadow-lg z-10 fixed w-full py-4 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "px-2 py-2  mx-auto dark:bg-gray-800 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap justify-between items-center mx-auto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "self-center text-lg font-semibold whitespace-nowrap dark:text-white", children: "Max Fortis Hospital" }, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center items-center gap-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: `${urlPath.icon}user.png`, alt: "icon", className: "h-8 w-8" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "font-bold", children: "Rohit" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 35,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { "data-collapse-toggle": "mobile-menu-2", type: "button", className: "inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600", "aria-controls": "mobile-menu-2", "aria-expanded": "false", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { fillRule: "evenodd", d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 43,
          columnNumber: 10
        }, this) }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "hidden w-6 h-6", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 46,
          columnNumber: 10
        }, this) }, void 0, false, {
          fileName: "app/components/Header.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Header.tsx",
        lineNumber: 40,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 29,
    columnNumber: 6
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 27,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c2 = Header;
var _c2;
$RefreshReg$(_c2, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Sidebar.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Sidebar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Sidebar.tsx"
  );
  import.meta.hot.lastModified = "1701622027157.2715";
}
var Asidebar = () => {
  _s();
  const {
    pathname
  } = useLocation();
  console.log(pathname, "pTHNAMMEME");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("aside", { id: "logo-sidebar", className: "fixed top-20 mt-[1px] left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0", "aria-label": "Sidebar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-full py-1 overflow-y-auto shadow-lg bg-white dark:bg-gray-800 border ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "space-y-2 font-medium", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: `${pathname == "/dashboard" ? "bg-blue-300" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/dashboard", className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 22 21", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" }, void 0, false, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" }, void 0, false, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 36,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "ms-3", children: "Dashboard" }, void 0, false, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 40,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 34,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: `${pathname == "/organisation" ? "bg-blue-300" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/organisation", className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" }, void 0, false, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 45,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "flex-1 ms-3 whitespace-nowrap", children: "Organisation" }, void 0, false, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 48,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 43,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: `${pathname == "/provider" ? "bg-blue-300" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/provider", className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" }, void 0, false, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 55,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "flex-1 ms-3 whitespace-nowrap", children: "Provider" }, void 0, false, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 58,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 53,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: `${pathname == "/users" ? "bg-blue-300" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/users", className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 18", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" }, void 0, false, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 63,
        columnNumber: 8
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "flex-1 ms-3 whitespace-nowrap", children: "Users" }, void 0, false, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 66,
        columnNumber: 8
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 61,
      columnNumber: 6
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Sidebar.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/components/Sidebar.tsx",
    lineNumber: 32,
    columnNumber: 4
  }, this) }, void 0, false, {
    fileName: "app/components/Sidebar.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s(Asidebar, "qVMqkCpYCjknUqSjfMln5RFSkbo=", false, function() {
  return [useLocation];
});
_c3 = Asidebar;
var _c3;
$RefreshReg$(_c3, "Asidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_auth.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_auth.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_auth.tsx"
  );
  import.meta.hot.lastModified = "1701622062738.8462";
}
var Layout = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full max-w-screen-2xl mx-auto overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { "data-drawer-target": "logo-sidebar", "data-drawer-toggle": "logo-sidebar", "aria-controls": "logo-sidebar", type: "button", className: "inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Open sidebar" }, void 0, false, {
        fileName: "app/routes/_auth.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { className: "w-6 h-6", "aria-hidden": "true", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { clipRule: "evenodd", fillRule: "evenodd", d: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" }, void 0, false, {
        fileName: "app/routes/_auth.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_auth.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Asidebar, {}, void 0, false, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:ml-60 p-8 mt-10 bg-gray-50 min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c4 = Layout;
var auth_default = Layout;
var _c4;
$RefreshReg$(_c4, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  auth_default as default
};
//# sourceMappingURL=/build/routes/_auth-M2FZQ7YB.js.map
