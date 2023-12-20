var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-BXMHIH3L.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default, as: "style", type: "text/css" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Nunito&family=Nunito+Sans:opsz@6..12&display=swap"
  },
  {
    rel: "icon",
    type: "image/svg+xml",
    sizes: "16x16",
    href: ""
  },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 33,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.organisation.create.tsx
var auth_organisation_create_exports = {};
__export(auth_organisation_create_exports, {
  default: () => Create
});

// app/components/Form/Input.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Input = ({
  name,
  placeholder,
  id,
  register,
  type,
  style,
  error,
  required
}) => /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-col gap-2 relative", children: [
  /* @__PURE__ */ jsxDEV3("label", { htmlFor: name, className: "text-gray-600 text-lg", children: placeholder }, void 0, !1, {
    fileName: "app/components/Form/Input.tsx",
    lineNumber: 25,
    columnNumber: 4
  }, this),
  /* @__PURE__ */ jsxDEV3(
    "input",
    {
      type: "text",
      name,
      className: `border ${style} text-base p-2 outline-none w-full`
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/Input.tsx",
      lineNumber: 28,
      columnNumber: 4
    },
    this
  ),
  error[name] && /* @__PURE__ */ jsxDEV3(
    "p",
    {
      className: "m-auto ml-0 absolute top-16 text-xs pt-2 text-red-600 text-left justify-start",
      "data-error": "data-error",
      children: error[name]?.message
    },
    void 0,
    !1,
    {
      fileName: "app/components/Form/Input.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Form/Input.tsx",
  lineNumber: 24,
  columnNumber: 3
}, this);

// app/routes/_auth.organisation.create.tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// app/utils/schema.tsx
import * as yup from "yup";
var codeVersionSchema = yup.object().shape({
  hc: yup.string().required("HC is required").min(10, "HC must be 10 character long").max(10, "HC must be 10 character long"),
  versionCode: yup.string().required("Version code is Required").min(2, "Version code must be 2 character long").max(2, "Version code must be 2 character long")
}), createOrganistionSchema = yup.object().shape({
  organisation: yup.string().required("HC is required"),
  phone: yup.string().required("Version code is Required"),
  mobile: yup.string().required("Version code is Required"),
  email: yup.string().required("Version code is Required"),
  street1: yup.string().required("Version code is Required")
  // street2: yup.string().required('Version code is Required'),
  // city: yup.string().required('Version code is Required'),
  // provState: yup.string().required('Version code is Required'),
  // country: yup.string().required('Version code is Required'),
  // numberProvider: yup.string().required('Version code is Required'),
});

// app/routes/_auth.organisation.create.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Create() {
  let {
    register,
    formState: { errors }
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(createOrganistionSchema)
  });
  return /* @__PURE__ */ jsxDEV4("div", { className: "mt-10", children: [
    /* @__PURE__ */ jsxDEV4("h2", { className: "font-bold text-2xl py-4 underline", children: "Create Organisation" }, void 0, !1, {
      fileName: "app/routes/_auth.organisation.create.tsx",
      lineNumber: 19,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col bg-white py-8 px-4 mb-8", children: /* @__PURE__ */ jsxDEV4("form", { children: [
      /* @__PURE__ */ jsxDEV4("div", { children: [
        /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 mb-6", children: [
          /* @__PURE__ */ jsxDEV4(
            Input,
            {
              name: "organisation",
              placeholder: "Organisation",
              error: errors,
              required: !0,
              id: "organisation",
              type: "text",
              register
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.organisation.create.tsx",
              lineNumber: 27,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            Input,
            {
              name: "phone",
              placeholder: "Phone",
              id: "phone",
              error: errors,
              required: !0,
              type: "text",
              register
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.organisation.create.tsx",
              lineNumber: 36,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            Input,
            {
              name: "mobile",
              placeholder: "Mobile",
              id: "mobile",
              error: errors,
              required: !0,
              type: "text",
              register
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.organisation.create.tsx",
              lineNumber: 45,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            Input,
            {
              name: "email",
              placeholder: "E-mail",
              id: "email",
              error: errors,
              required: !0,
              type: "text"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.organisation.create.tsx",
              lineNumber: 54,
              columnNumber: 8
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.organisation.create.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-4 mb-6", children: [
          /* @__PURE__ */ jsxDEV4(
            Input,
            {
              name: "street1",
              placeholder: "Street1",
              error: errors,
              required: !0,
              id: "street1",
              type: "text",
              register
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.organisation.create.tsx",
              lineNumber: 83,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            Input,
            {
              name: "street2",
              placeholder: "Street2",
              id: "street2",
              error: errors,
              required: !0,
              type: "text",
              register
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.organisation.create.tsx",
              lineNumber: 92,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            Input,
            {
              name: "city",
              placeholder: "City",
              id: "city",
              error: errors,
              required: !0,
              type: "text",
              register
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.organisation.create.tsx",
              lineNumber: 101,
              columnNumber: 8
            },
            this
          ),
          /* @__PURE__ */ jsxDEV4(
            Input,
            {
              name: "provState",
              placeholder: "Prov State",
              id: "provState",
              error: errors,
              required: !0,
              type: "text"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_auth.organisation.create.tsx",
              lineNumber: 110,
              columnNumber: 8
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.organisation.create.tsx",
          lineNumber: 73,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.organisation.create.tsx",
        lineNumber: 24,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ jsxDEV4("button", { className: "bg-blue-500 py-2 text-base text-white w-[10%] float-right my-4 rounded-lg", children: "Submit" }, void 0, !1, {
        fileName: "app/routes/_auth.organisation.create.tsx",
        lineNumber: 123,
        columnNumber: 6
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.organisation.create.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.organisation.create.tsx",
      lineNumber: 20,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.organisation.create.tsx",
    lineNumber: 18,
    columnNumber: 3
  }, this);
}

// app/routes/_auth.organisation._index.tsx
var auth_organisation_index_exports = {};
__export(auth_organisation_index_exports, {
  default: () => Index
});
import { useNavigate } from "@remix-run/react";

// app/components/Table.tsx
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var Table = ({ column, data }) => {
  let table = useReactTable({
    data,
    columns: column,
    getCoreRowModel: getCoreRowModel()
  });
  return /* @__PURE__ */ jsxDEV5("div", { className: "p-2", children: /* @__PURE__ */ jsxDEV5("table", { className: "w-full", children: [
    /* @__PURE__ */ jsxDEV5("thead", { className: "w-full bg-gray-200 p-4", children: table.getHeaderGroups()?.map((headerGroup) => /* @__PURE__ */ jsxDEV5(
      "tr",
      {
        className: "border-gray-400 uppercase border",
        children: headerGroup.headers?.map((header) => /* @__PURE__ */ jsxDEV5("th", { className: "border py-4", children: header.isPlaceholder ? null : flexRender(
          header.column.columnDef.header,
          header.getContext()
        ) }, header.id, !1, {
          fileName: "app/components/Table.tsx",
          lineNumber: 30,
          columnNumber: 17
        }, this))
      },
      headerGroup.id,
      !1,
      {
        fileName: "app/components/Table.tsx",
        lineNumber: 25,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/Table.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("tbody", { className: "w-full text-center items-center bg-white  uppercase", children: table.getRowModel().rows?.map((row) => /* @__PURE__ */ jsxDEV5("tr", { className: "border", children: row.getVisibleCells()?.map((cell) => /* @__PURE__ */ jsxDEV5("td", { className: "border py-2 text-sm", children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id, !1, {
      fileName: "app/components/Table.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this)) }, row.id, !1, {
      fileName: "app/components/Table.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/Table.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Table.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Table.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
};

// app/utils/columns/columns.tsx
import { createColumnHelper } from "@tanstack/react-table";
var columnHelper = createColumnHelper(), OrganisationColumn = [
  columnHelper.accessor("ORGANIZATION", {
    header: "ORGANIZATION"
  }),
  columnHelper.accessor("PHONE", {
    header: "PHONE"
  }),
  columnHelper.accessor("EMAIL", {
    header: "Age"
  }),
  columnHelper.accessor("CITY", {
    header: "CITY"
  }),
  columnHelper.accessor("COUNTRY", {
    header: "COUNTRY"
  }),
  columnHelper.accessor("NOOFPROVIDER", {
    header: "NOOFPROVIDER"
  }),
  columnHelper.accessor("ACTION", {
    header: "ACTION"
  })
], OrganisationData = [
  {
    Id: 1,
    ORGANIZATION: "Akash",
    PHONE: "883835675",
    EMAIL: "abc@gmail.com",
    CITY: "DELHI",
    COUNTRY: "INDIA",
    NOOFPROVIDER: 34
  },
  {
    Id: 2,
    ORGANIZATION: "Rohit",
    PHONE: "8838999999",
    EMAIL: "abc@gmail.com",
    CITY: "DELHI",
    COUNTRY: "INDIA",
    NOOFPROVIDER: 34
  },
  {
    Id: 3,
    ORGANIZATION: "Deepak",
    PHONE: "88383875757",
    EMAIL: "abc@gmail.com",
    CITY: "DELHI",
    COUNTRY: "INDIA",
    NOOFPROVIDER: 34
  },
  {
    Id: 4,
    ORGANIZATION: "rahul",
    PHONE: "57676739383",
    EMAIL: "abc@gmail.com",
    CITY: "DELHI",
    COUNTRY: "INDIA",
    NOOFPROVIDER: 34
  }
], providerHelper = createColumnHelper(), ProviderColumn = [
  providerHelper.accessor("ORGANIZATION", {
    header: "ORGANIZATION"
  }),
  providerHelper.accessor("PROVISIONTYPE", {
    header: "PROVISIONTYPE"
  }),
  providerHelper.accessor("SPECIALIAZATION", {
    header: "Specialization"
  }),
  providerHelper.accessor("PROVIDER", {
    header: "PROVIDER"
  }),
  providerHelper.accessor("FULLNAME", {
    header: "FULLNAME"
  }),
  providerHelper.accessor("MOBILE", {
    header: "MOBILE"
  }),
  providerHelper.accessor("ACTION", {
    header: "ACTION"
  })
], ProviderData = [
  {
    ORGANIZATION: "HSHSH",
    PROVISIONTYPE: "UITY",
    SPECIALIAZATION: "HELPER",
    PROVIDER: "ETEY",
    FULLNAME: "ERTY",
    MOBILE: "2333333"
  },
  {
    ORGANIZATION: "HSHSH",
    PROVISIONTYPE: "UITY",
    SPECIALIAZATION: "HELPER",
    PROVIDER: "ETEY",
    FULLNAME: "ERTY",
    MOBILE: "2333333"
  },
  {
    ORGANIZATION: "HSHSH",
    PROVISIONTYPE: "UITY",
    SPECIALIAZATION: "HELPER",
    PROVIDER: "ETEY",
    FULLNAME: "ERTY",
    MOBILE: "2333333"
  },
  {
    ORGANIZATION: "HSHSH",
    PROVISIONTYPE: "UITY",
    SPECIALIAZATION: "HELPER",
    PROVIDER: "ETEY",
    FULLNAME: "ERTY",
    MOBILE: "2333333"
  },
  {
    ORGANIZATION: "HSHSH",
    PROVISIONTYPE: "UITY",
    SPECIALIAZATION: "HELPER",
    PROVIDER: "ETEY",
    FULLNAME: "ERTY",
    MOBILE: "2333333"
  }
], usersHelper = createColumnHelper(), UsersColumn = [
  usersHelper.accessor("ORGANIZATION", {
    header: "ORGANIZATION"
  }),
  usersHelper.accessor("PROVIDER", {
    header: "PROVISIONTYPE"
  }),
  usersHelper.accessor("SPECIALIAZATION", {
    header: "Specialization"
  }),
  usersHelper.accessor("PROVIDER", {
    header: "PROVIDER"
  }),
  usersHelper.accessor("FULLNAME", {
    header: "FULLNAME"
  }),
  usersHelper.accessor("MOBILE", {
    header: "MOBILE"
  }),
  usersHelper.accessor("COUNTRY", {
    header: "COUNTRY"
  }),
  usersHelper.accessor("ACTION", {
    header: "ACTION"
  })
], usersData = [
  {
    ORGANIZATION: "HSHSH",
    PROVIDER: "UITY",
    SPECIALIAZATION: "HELPER",
    FULLNAME: "ERTY",
    MOBILE: "2333333",
    COUNTRY: "INDIA"
  },
  {
    ORGANIZATION: "HSHSH",
    PROVIDER: "UITY",
    SPECIALIAZATION: "HELPER",
    FULLNAME: "ERTY",
    MOBILE: "2333333",
    COUNTRY: "INDIA"
  },
  {
    ORGANIZATION: "HSHSH",
    PROVIDER: "UITY",
    SPECIALIAZATION: "HELPER",
    FULLNAME: "ERTY",
    MOBILE: "2333333",
    COUNTRY: "INDIA"
  },
  {
    ORGANIZATION: "HSHSH",
    PROVIDER: "UITY",
    SPECIALIAZATION: "HELPER",
    FULLNAME: "ERTY",
    MOBILE: "2333333",
    COUNTRY: "INDIA"
  },
  {
    ORGANIZATION: "HSHSH",
    PROVIDER: "UITY",
    SPECIALIAZATION: "HELPER",
    FULLNAME: "ERTY",
    MOBILE: "2333333",
    COUNTRY: "INDIA"
  },
  {
    ORGANIZATION: "HSHSH",
    PROVIDER: "UITY",
    SPECIALIAZATION: "HELPER",
    FULLNAME: "ERTY",
    MOBILE: "2333333",
    COUNTRY: "INDIA"
  }
];

// app/routes/_auth.organisation._index.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Index() {
  let navigate = useNavigate();
  return /* @__PURE__ */ jsxDEV6("div", { className: "mt-10", children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV6("h2", { className: "font-bold text-2xl py-4", children: "Create Organisation" }, void 0, !1, {
        fileName: "app/routes/_auth.organisation._index.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("button", { className: "bg-blue-500 text-white px-4 py-2 rounded-full", onClick: () => navigate("/organisation/create"), children: "Add Organization" }, void 0, !1, {
        fileName: "app/routes/_auth.organisation._index.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.organisation._index.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6(Table, { column: OrganisationColumn, data: OrganisationData }, void 0, !1, {
      fileName: "app/routes/_auth.organisation._index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.organisation._index.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.provider.create.tsx
var auth_provider_create_exports = {};
__export(auth_provider_create_exports, {
  default: () => Create2
});

// app/components/Form/Select.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var Select = (props) => {
  let { name, placeholder, style } = props;
  return /* @__PURE__ */ jsxDEV7("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxDEV7("label", { htmlFor: name, className: "text-gray-600 text-lg", children: placeholder }, void 0, !1, {
      fileName: "app/components/Form/Select.tsx",
      lineNumber: 18,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV7("select", { className: `border ${style} text-base p-2 outline-none`, children: /* @__PURE__ */ jsxDEV7("option", { value: "", children: "Select" }, void 0, !1, {
      fileName: "app/components/Form/Select.tsx",
      lineNumber: 22,
      columnNumber: 5
    }, this) }, void 0, !1, {
      fileName: "app/components/Form/Select.tsx",
      lineNumber: 21,
      columnNumber: 4
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Form/Select.tsx",
    lineNumber: 17,
    columnNumber: 3
  }, this);
};

// app/routes/_auth.provider.create.tsx
import { useForm as useForm2 } from "react-hook-form";
import { yupResolver as yupResolver2 } from "@hookform/resolvers/yup";
import { Fragment, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Create2() {
  let {
    register,
    formState: { errors }
  } = useForm2({
    mode: "onChange",
    resolver: yupResolver2(createOrganistionSchema)
  });
  return /* @__PURE__ */ jsxDEV8(Fragment, { children: /* @__PURE__ */ jsxDEV8("div", { className: "flex flex-col bg-white mt-8", children: [
    /* @__PURE__ */ jsxDEV8("h2", { className: "font-bold text-2xl py-4 mb-8 px-4 underline", children: "Create Provider" }, void 0, !1, {
      fileName: "app/routes/_auth.provider.create.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV8("form", { children: [
      /* @__PURE__ */ jsxDEV8("div", { children: /* @__PURE__ */ jsxDEV8("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 mb-6 px-8", children: [
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "organisation",
            placeholder: "Organisation",
            error: errors,
            required: !0,
            id: "organisation",
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 26,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "providerType",
            placeholder: "Provider Type",
            id: "providerType",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 35,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "specialization",
            placeholder: "Specialization",
            id: "specialization",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 44,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "firstName",
            placeholder: "First Name",
            id: "email",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 53,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "lastName",
            placeholder: "Last Name",
            id: "lastName",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 62,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "FullName",
            placeholder: "Full Name",
            id: "lastName",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 71,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "NoOfProvide",
            placeholder: "No Of Provider",
            id: "NoOfProvide",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 81,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "userId",
            placeholder: "User Id",
            id: "userId",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 90,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "password",
            placeholder: "Password",
            id: "password",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 99,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "street1",
            placeholder: "Street1",
            error: errors,
            required: !0,
            id: "street1",
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 109,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "street2",
            placeholder: "Street2",
            id: "street2",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 118,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "city",
            placeholder: "City",
            id: "city",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 127,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "provState",
            placeholder: "Prov State",
            id: "provState",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 136,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "mobile",
            placeholder: "Mobile",
            id: "mobile",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 145,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Input,
          {
            name: "email",
            placeholder: "Email",
            id: "email",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 154,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV8(
          Select,
          {
            name: "country",
            placeholder: "Country",
            id: "country",
            type: "text",
            options: [],
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.provider.create.tsx",
            lineNumber: 165,
            columnNumber: 1
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.provider.create.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_auth.provider.create.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV8("button", { className: "bg-blue-500 py-2 text-base text-white w-[10%] float-right my-4 rounded-lg mx-4", children: "Submit" }, void 0, !1, {
        fileName: "app/routes/_auth.provider.create.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.provider.create.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.provider.create.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.provider.create.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.provider._index.tsx
var auth_provider_index_exports = {};
__export(auth_provider_index_exports, {
  default: () => Index2
});
import { useNavigate as useNavigate2 } from "@remix-run/react";
import { Fragment as Fragment2, jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Index2() {
  let navigate = useNavigate2();
  return /* @__PURE__ */ jsxDEV9(Fragment2, { children: /* @__PURE__ */ jsxDEV9("div", { className: "mt-10", children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsxDEV9("h1", { className: "font-bold text-2xl", children: "Provider" }, void 0, !1, {
        fileName: "app/routes/_auth.provider._index.tsx",
        lineNumber: 12,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ jsxDEV9("button", { className: "bg-blue-500 text-white px-4 py-2 rounded-full", onClick: () => navigate("/provider/create"), children: "Add Provider" }, void 0, !1, {
        fileName: "app/routes/_auth.provider._index.tsx",
        lineNumber: 13,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.provider._index.tsx",
      lineNumber: 11,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ jsxDEV9(Table, { column: ProviderColumn, data: ProviderData }, void 0, !1, {
      fileName: "app/routes/_auth.provider._index.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.provider._index.tsx",
    lineNumber: 10,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.provider._index.tsx",
    lineNumber: 9,
    columnNumber: 3
  }, this);
}

// app/routes/_auth.organisation.tsx
var auth_organisation_exports = {};
__export(auth_organisation_exports, {
  default: () => Organisation
});
import { Outlet as Outlet2 } from "@remix-run/react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function Organisation() {
  return /* @__PURE__ */ jsxDEV10(Outlet2, {}, void 0, !1, {
    fileName: "app/routes/_auth.organisation.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/_auth.users.create.tsx
var auth_users_create_exports = {};
__export(auth_users_create_exports, {
  default: () => Create3
});
import { useForm as useForm3 } from "react-hook-form";
import { yupResolver as yupResolver3 } from "@hookform/resolvers/yup";
import { Fragment as Fragment3, jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Create3() {
  let {
    register,
    formState: { errors }
  } = useForm3({
    mode: "onChange",
    resolver: yupResolver3(createOrganistionSchema)
  });
  return /* @__PURE__ */ jsxDEV11(Fragment3, { children: /* @__PURE__ */ jsxDEV11("div", { className: "flex flex-col bg-white px-4 border  mt-8", children: [
    /* @__PURE__ */ jsxDEV11("h2", { className: "font-bold text-xl py-4", children: "Create Users" }, void 0, !1, {
      fileName: "app/routes/_auth.users.create.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11("form", { children: [
      /* @__PURE__ */ jsxDEV11("div", { children: /* @__PURE__ */ jsxDEV11("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 mb-6", children: [
        /* @__PURE__ */ jsxDEV11(
          Select,
          {
            name: "Organization",
            placeholder: "Organization",
            id: "Organization",
            type: "text",
            options: [],
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 27,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Select,
          {
            name: "Provider",
            placeholder: "Provider",
            id: "provider",
            type: "text",
            options: [],
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 35,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Select,
          {
            name: "department",
            placeholder: "Department",
            id: "department",
            type: "text",
            options: [],
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 43,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Select,
          {
            name: "role",
            placeholder: "Role",
            id: "role",
            type: "text",
            options: [],
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 51,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Input,
          {
            name: "firstName",
            placeholder: "First Name",
            error: errors,
            required: !0,
            id: "firstName",
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 59,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Input,
          {
            name: "middleName",
            placeholder: "Middle Name",
            id: "middleName",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 68,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Input,
          {
            name: "lastName",
            placeholder: "Last Name",
            id: "lastName",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 77,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Input,
          {
            name: "userName",
            placeholder: "User Name",
            id: "userName",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 86,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Input,
          {
            name: "password",
            placeholder: "Password",
            id: "password",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 95,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Input,
          {
            name: "street1",
            placeholder: "Street1",
            error: errors,
            required: !0,
            id: "street1",
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 104,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Input,
          {
            name: "street2",
            placeholder: "Street2",
            id: "street2",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 113,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Input,
          {
            name: "city",
            placeholder: "City",
            id: "city",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 122,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Input,
          {
            name: "provState",
            placeholder: "Prov State",
            id: "provState",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 131,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Input,
          {
            name: "mobile",
            placeholder: "Mobile",
            id: "mobile",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 140,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Input,
          {
            name: "email",
            placeholder: "Email",
            id: "email",
            error: errors,
            required: !0,
            type: "text",
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 149,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV11(
          Select,
          {
            name: "country",
            placeholder: "Country",
            id: "country",
            type: "text",
            options: [],
            register
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.users.create.tsx",
            lineNumber: 158,
            columnNumber: 8
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.users.create.tsx",
        lineNumber: 26,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_auth.users.create.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV11("button", { className: "bg-blue-400 py-2 text-base text-white w-[10%] float-right my-4 rounded-lg", children: "Submit" }, void 0, !1, {
        fileName: "app/routes/_auth.users.create.tsx",
        lineNumber: 170,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.users.create.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.users.create.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.users.create.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.users._index.tsx
var auth_users_index_exports = {};
__export(auth_users_index_exports, {
  default: () => Index3
});
import { useNavigate as useNavigate3 } from "@remix-run/react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function Index3() {
  let navigate = useNavigate3();
  return /* @__PURE__ */ jsxDEV12("div", { className: "mt-10", children: [
    /* @__PURE__ */ jsxDEV12("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ jsxDEV12("h1", { className: "font-bold text-2xl", children: "Users" }, void 0, !1, {
        fileName: "app/routes/_auth.users._index.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12(
        "button",
        {
          className: "bg-blue-500 text-white px-4 py-2 rounded-full",
          onClick: () => navigate("/users/create"),
          children: "Add Users"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_auth.users._index.tsx",
          lineNumber: 13,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.users._index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12(Table, { column: UsersColumn, data: usersData }, void 0, !1, {
      fileName: "app/routes/_auth.users._index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.users._index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.dashboard.tsx
var auth_dashboard_exports = {};
__export(auth_dashboard_exports, {
  default: () => Dashboard
});
import { useState, useEffect } from "react";
import { useForm as useForm4 } from "react-hook-form";
import { Tab } from "@headlessui/react";
import { yupResolver as yupResolver4 } from "@hookform/resolvers/yup";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Dashboard() {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm4({
    mode: "onChange",
    resolver: yupResolver4(codeVersionSchema)
  }), [versionCodeCd, setVersionCodeCd] = useState(""), [cdrError, setCDRError] = useState(""), [categories] = useState({
    "CD RDR SCAN": "",
    MANUAL: ""
  }), healthReport = [
    {
      responseCode: "WSCEFB356LOQWC",
      serviceDate: "23/09/2003",
      firstName: "Manoj",
      lastName: "Pant",
      dob: "25/02/1994",
      age: 34,
      gender: "Male",
      versionCode: "SCFRT5656578NHQSAW",
      expiry: "18/09/2024"
    },
    {
      responseCode: "QWERTYGH568HTG",
      serviceDate: "12/02/2013",
      firstName: "Rahul",
      lastName: "Singh",
      dob: "25/02/1991",
      gender: "Male",
      age: 56,
      versionCode: "SCFRT56578NKJK87612",
      expiry: "18/09/2027"
    }
  ], [healthCard, setHealtCard] = useState({}), cdRDRInputChange = (e) => {
    setVersionCodeCd(e.target.value), console.log(e.target.value, "event"), e?.target?.value?.length == 12 ? (setCDRError(""), setTimeout(() => {
      alert(versionCodeCd);
    }, 2e3), setHealtCard(healthReport[0])) : e.target.length != 12 && (setCDRError("Invalid HC Version Code"), setHealtCard({}));
  }, handleEnter = (e) => {
    versionCodeCd?.length == 12 && e?.key === "Enter" && alert("Enter Pressed"), versionCodeCd?.length == 12 && e?.key === "Escape" && alert("Escape Pressed");
  }, tabChanged = () => {
    reset(), setCDRError(""), setHealtCard({});
  };
  useEffect(() => {
    console.log("version code value");
  }, [versionCodeCd]);
  let onSubmit = () => {
    console.log("assssssssssssssssss"), setHealtCard(healthReport[1]);
  };
  return /* @__PURE__ */ jsxDEV13("div", { className: "mt-10", children: [
    /* @__PURE__ */ jsxDEV13("h1", { className: "font-bold text-2xl", children: "Dashboard" }, void 0, !1, {
      fileName: "app/routes/_auth.dashboard.tsx",
      lineNumber: 98,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV13("div", { className: "w-full px-2 py-6 sm:px-0", children: /* @__PURE__ */ jsxDEV13(Tab.Group, { children: [
      /* @__PURE__ */ jsxDEV13(Tab.List, { className: "flex space-x-1 bg-blue-400 p-1", children: Object.keys(categories).map((category) => /* @__PURE__ */ jsxDEV13(
        Tab,
        {
          onClick: tabChanged,
          className: ({ selected }) => classNames(
            "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
            // 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            selected ? "bg-white text-black shadow" : "text-blue-100  hover:text-white"
          ),
          children: category
        },
        category,
        !1,
        {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 103,
          columnNumber: 9
        },
        this
      )) }, void 0, !1, {
        fileName: "app/routes/_auth.dashboard.tsx",
        lineNumber: 101,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV13(Tab.Panels, { className: "", children: [
        /* @__PURE__ */ jsxDEV13(
          Tab.Panel,
          {
            className: classNames(
              "rounded-xl bg-white outline-none"
              // 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none outline-none focus:ring-2'
            ),
            children: /* @__PURE__ */ jsxDEV13("div", { className: "border border-gray-400 p-4 outline-none", children: /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col mb-8 w-60 relative", children: [
              /* @__PURE__ */ jsxDEV13("label", { className: "text-gray-600 text-sm text-left mb-2", children: "HC Version Code" }, void 0, !1, {
                fileName: "app/routes/_auth.dashboard.tsx",
                lineNumber: 127,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV13(
                "input",
                {
                  type: "text",
                  name: "code",
                  id: "code",
                  maxLength: 12,
                  onKeyDown: handleEnter,
                  onChange: cdRDRInputChange,
                  className: "bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_auth.dashboard.tsx",
                  lineNumber: 131,
                  columnNumber: 11
                },
                this
              ),
              cdrError && /* @__PURE__ */ jsxDEV13("label", { className: "ml-0 pt-2 absolute top-16 text-red-600 text-left justify-start  text-xs", children: cdrError }, void 0, !1, {
                fileName: "app/routes/_auth.dashboard.tsx",
                lineNumber: 141,
                columnNumber: 12
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 126,
              columnNumber: 10
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 125,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 120,
            columnNumber: 8
          },
          this
        ),
        /* @__PURE__ */ jsxDEV13(
          Tab.Panel,
          {
            className: classNames(
              "rounded-xl bg-white"
              // 'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
            ),
            children: /* @__PURE__ */ jsxDEV13("form", { onSubmit: handleSubmit(onSubmit), children: /* @__PURE__ */ jsxDEV13("div", { className: "border border-gray-400 p-4", children: /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col gap-y-6", children: [
              /* @__PURE__ */ jsxDEV13("div", { className: "flex gap-x-4", children: [
                /* @__PURE__ */ jsxDEV13(
                  Input,
                  {
                    type: "text",
                    register,
                    error: errors,
                    id: "hc",
                    required: !0,
                    name: "hc",
                    placeholder: "HC"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_auth.dashboard.tsx",
                    lineNumber: 157,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV13(
                  Input,
                  {
                    type: "text",
                    register,
                    error: errors,
                    id: "hc",
                    required: !0,
                    name: "versionCode",
                    placeholder: "Version Code"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_auth.dashboard.tsx",
                    lineNumber: 166,
                    columnNumber: 13
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/_auth.dashboard.tsx",
                lineNumber: 156,
                columnNumber: 12
              }, this),
              /* @__PURE__ */ jsxDEV13(
                "button",
                {
                  type: "submit",
                  className: "text-center text-white bg-blue-500 w-[20%] items-center py-2",
                  children: "Validate"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_auth.dashboard.tsx",
                  lineNumber: 176,
                  columnNumber: 12
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 155,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 154,
              columnNumber: 10
            }, this) }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 153,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 148,
            columnNumber: 8
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.dashboard.tsx",
        lineNumber: 119,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.dashboard.tsx",
      lineNumber: 100,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.dashboard.tsx",
      lineNumber: 99,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ jsxDEV13("section", { className: "flex flex-col", children: /* @__PURE__ */ jsxDEV13("div", { className: "border border-gray-400 rounded-md overflow-hidden ", children: [
      /* @__PURE__ */ jsxDEV13("h1", { className: "text-center font-medium text-base text-white bg-blue-500 py-2", children: "Health Report" }, void 0, !1, {
        fileName: "app/routes/_auth.dashboard.tsx",
        lineNumber: 192,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col gap-y-2 p-4", children: [
        /* @__PURE__ */ jsxDEV13("div", { className: "grid grid-cols-4", children: [
          /* @__PURE__ */ jsxDEV13("div", { children: [
            /* @__PURE__ */ jsxDEV13("h2", { className: "text-sm", children: "MOH Response Code" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 198,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-sm", children: healthCard?.responseCode || "-" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 199,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 197,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { children: [
            /* @__PURE__ */ jsxDEV13("h2", { className: "text-sm", children: "Last Service Date" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 202,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-sm", children: healthCard?.serviceDate || "-" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 203,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 201,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { children: [
            /* @__PURE__ */ jsxDEV13("h2", { className: "text-sm", children: "First Name" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 206,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-sm", children: healthCard?.firstName || "-" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 207,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 205,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { children: [
            /* @__PURE__ */ jsxDEV13("h2", { className: "text-sm", children: "Last Name" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 211,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-sm", children: healthCard?.lastName || "-" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 212,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 210,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 196,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "grid grid-cols-4 pt-2 border-0 border-t-2 ", children: [
          /* @__PURE__ */ jsxDEV13("div", { children: [
            /* @__PURE__ */ jsxDEV13("h2", { className: "text-sm", children: "DOB" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 218,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-sm", children: healthCard?.dob || "-" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 219,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 217,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { children: [
            /* @__PURE__ */ jsxDEV13("h2", { className: "text-sm", children: "Age" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 222,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-sm", children: healthCard?.age || "-" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 223,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 221,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { children: [
            /* @__PURE__ */ jsxDEV13("h2", { className: "text-sm", children: "Gender" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 226,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-sm", children: healthCard?.gender || "-" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 227,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 225,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { children: [
            /* @__PURE__ */ jsxDEV13("h2", { className: "text-sm", children: "Health Card" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 230,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-sm", children: healthCard?.versionCode || "-" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 231,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 229,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 216,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "grid grid-cols-4 pt-2 border-0 border-t-2 ", children: [
          /* @__PURE__ */ jsxDEV13("div", { children: [
            /* @__PURE__ */ jsxDEV13("h2", { className: "text-sm", children: "Version Code" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 236,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-sm", children: healthCard?.versionCode || "-" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 237,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 235,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV13("div", { children: [
            /* @__PURE__ */ jsxDEV13("h2", { className: "text-sm", children: "Expiry Date" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 240,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-sm", children: healthCard?.expiry || "-" }, void 0, !1, {
              fileName: "app/routes/_auth.dashboard.tsx",
              lineNumber: 241,
              columnNumber: 10
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_auth.dashboard.tsx",
            lineNumber: 239,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_auth.dashboard.tsx",
          lineNumber: 234,
          columnNumber: 8
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_auth.dashboard.tsx",
        lineNumber: 195,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_auth.dashboard.tsx",
      lineNumber: 191,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/_auth.dashboard.tsx",
      lineNumber: 190,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_auth.dashboard.tsx",
    lineNumber: 96,
    columnNumber: 3
  }, this);
}

// app/routes/_auth.provider.tsx
var auth_provider_exports = {};
__export(auth_provider_exports, {
  default: () => Provider
});
import { Outlet as Outlet3 } from "@remix-run/react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function Provider() {
  return /* @__PURE__ */ jsxDEV14(Outlet3, {}, void 0, !1, {
    fileName: "app/routes/_auth.provider.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/_auth.users.tsx
var auth_users_exports = {};
__export(auth_users_exports, {
  default: () => Organisation2
});
import { Outlet as Outlet4 } from "@remix-run/react";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function Organisation2() {
  return /* @__PURE__ */ jsxDEV15(Outlet4, {}, void 0, !1, {
    fileName: "app/routes/_auth.users.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index4,
  loader: () => loader,
  meta: () => meta
});
import { redirect } from "@remix-run/node";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var loader = () => redirect("/dashboard"), meta = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome User!" }
];
function Index4() {
  return /* @__PURE__ */ jsxDEV16("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ jsxDEV16("h1", { className: "text-red-400", children: "Welcome to Remix" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 19,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 18,
    columnNumber: 3
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => login_default
});
import { useNavigate as useNavigate4 } from "@remix-run/react";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var Login = () => {
  let navigate = useNavigate4(), hospitalList = [
    {
      id: 1,
      name: "Max Hospital"
    },
    {
      id: 2,
      name: "Appolo Hospital"
    },
    {
      id: 3,
      name: "Fortis Hospital"
    },
    {
      id: 4,
      name: "Medanta Hospital"
    }
  ], login = () => {
    navigate("/dashboard");
  };
  return /* @__PURE__ */ jsxDEV17("section", { className: "bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsxDEV17("div", { className: "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0", children: [
    /* @__PURE__ */ jsxDEV17(
      "a",
      {
        href: "#/",
        className: "flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 33,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ jsxDEV17("div", { className: "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700", children: /* @__PURE__ */ jsxDEV17("div", { className: "p-6 space-y-4 md:space-y-6 sm:p-8", children: [
      /* @__PURE__ */ jsxDEV17("h1", { className: "text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white", children: "Sign in to your account" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV17("form", { className: "space-y-4 md:space-y-6", children: [
        /* @__PURE__ */ jsxDEV17("div", { children: [
          /* @__PURE__ */ jsxDEV17(
            "label",
            {
              htmlFor: "hospital",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Provider"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 49,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV17("select", { className: " border-gray-400 block w-full h-10 px-2 text-sm text-gray-800  border rounded-md focus:outline-none", children: [
            /* @__PURE__ */ jsxDEV17("option", { value: "", children: "Select" }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 55,
              columnNumber: 10
            }, this),
            hospitalList?.map((option, index) => /* @__PURE__ */ jsxDEV17("option", { value: `${option.id}`, children: option?.name }, `option-${index}`, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 58,
              columnNumber: 12
            }, this))
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 48,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { children: [
          /* @__PURE__ */ jsxDEV17(
            "label",
            {
              htmlFor: "user",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Username"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 66,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV17(
            "input",
            {
              type: "email",
              name: "email",
              id: "email",
              className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              placeholder: "Username"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 71,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 65,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { children: [
          /* @__PURE__ */ jsxDEV17(
            "label",
            {
              htmlFor: "password",
              className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
              children: "Password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 80,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV17(
            "input",
            {
              type: "password",
              name: "password",
              id: "password",
              placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
              className: "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 85,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 79,
          columnNumber: 8
        }, this),
        /* @__PURE__ */ jsxDEV17(
          "button",
          {
            type: "submit",
            onClick: () => login(),
            className: "w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
            children: "Sign in"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 94,
            columnNumber: 8
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 43,
      columnNumber: 6
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 32,
    columnNumber: 4
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 31,
    columnNumber: 3
  }, this);
}, login_default = Login;

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default
});
import { Outlet as Outlet5 } from "@remix-run/react";

// app/utils/Url.ts
var urlPath = {
  icon: "/"
};

// app/components/Container.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var Container = ({ children }) => /* @__PURE__ */ jsxDEV18("div", { className: "w-[95%] mx-auto", children }, void 0, !1, {
  fileName: "app/components/Container.tsx",
  lineNumber: 2,
  columnNumber: 10
}, this);

// app/components/Header.tsx
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var Header = () => /* @__PURE__ */ jsxDEV19("header", { className: "mx-auto bg-blue-400 border shadow-lg z-10 fixed w-full py-4 ", children: /* @__PURE__ */ jsxDEV19(Container, { children: /* @__PURE__ */ jsxDEV19("nav", { className: "px-2 py-2  mx-auto dark:bg-gray-800 ", children: /* @__PURE__ */ jsxDEV19("div", { className: "flex flex-wrap justify-between items-center mx-auto ", children: [
  /* @__PURE__ */ jsxDEV19("span", { className: "self-center text-lg font-semibold whitespace-nowrap dark:text-white", children: "Max Fortis Hospital" }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV19("div", { className: "flex items-center", children: [
    /* @__PURE__ */ jsxDEV19("div", { className: "flex justify-center items-center gap-x-2", children: [
      /* @__PURE__ */ jsxDEV19(
        "img",
        {
          src: `${urlPath.icon}user.png`,
          alt: "icon",
          className: "h-8 w-8"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 18,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV19("p", { className: "font-bold", children: "Rohit" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 17,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ jsxDEV19(
      "button",
      {
        "data-collapse-toggle": "mobile-menu-2",
        type: "button",
        className: "inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
        "aria-controls": "mobile-menu-2",
        "aria-expanded": "false",
        children: [
          /* @__PURE__ */ jsxDEV19("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV19(
            "svg",
            {
              className: "w-6 h-6",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsxDEV19(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                  clipRule: "evenodd"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 38,
                  columnNumber: 10
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 33,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV19(
            "svg",
            {
              className: "hidden w-6 h-6",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsxDEV19(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                  clipRule: "evenodd"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 48,
                  columnNumber: 10
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 43,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/Header.tsx",
        lineNumber: 26,
        columnNumber: 8
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Header.tsx",
  lineNumber: 11,
  columnNumber: 6
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 9,
  columnNumber: 4
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this);

// app/components/Sidebar.tsx
import { Link, useLocation } from "@remix-run/react";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var Asidebar = () => {
  let { pathname } = useLocation();
  return console.log(pathname, "pTHNAMMEME"), /* @__PURE__ */ jsxDEV20(
    "aside",
    {
      id: "logo-sidebar",
      className: "fixed top-20 mt-[1px] left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0",
      "aria-label": "Sidebar",
      children: /* @__PURE__ */ jsxDEV20("div", { className: "h-full py-1 overflow-y-auto shadow-lg bg-white dark:bg-gray-800 border ", children: /* @__PURE__ */ jsxDEV20("ul", { className: "space-y-2 font-medium", children: [
        /* @__PURE__ */ jsxDEV20("li", { className: `${pathname == "/dashboard" ? "bg-blue-300" : ""}`, children: /* @__PURE__ */ jsxDEV20(
          Link,
          {
            to: "/dashboard",
            className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white group",
            children: [
              /* @__PURE__ */ jsxDEV20(
                "svg",
                {
                  className: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                  viewBox: "0 0 22 21",
                  children: [
                    /* @__PURE__ */ jsxDEV20("path", { d: "M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" }, void 0, !1, {
                      fileName: "app/components/Sidebar.tsx",
                      lineNumber: 25,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ jsxDEV20("path", { d: "M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" }, void 0, !1, {
                      fileName: "app/components/Sidebar.tsx",
                      lineNumber: 26,
                      columnNumber: 9
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 19,
                  columnNumber: 8
                },
                this
              ),
              /* @__PURE__ */ jsxDEV20("span", { className: "ms-3", children: "Dashboard" }, void 0, !1, {
                fileName: "app/components/Sidebar.tsx",
                lineNumber: 28,
                columnNumber: 8
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 16,
            columnNumber: 7
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 15,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV20("li", { className: `${pathname == "/organisation" ? "bg-blue-300" : ""}`, children: /* @__PURE__ */ jsxDEV20(
          Link,
          {
            to: "/organisation",
            className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white group",
            children: [
              /* @__PURE__ */ jsxDEV20(
                "svg",
                {
                  className: "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                  viewBox: "0 0 20 18",
                  children: /* @__PURE__ */ jsxDEV20("path", { d: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" }, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 35,
                  columnNumber: 8
                },
                this
              ),
              /* @__PURE__ */ jsxDEV20("span", { className: "flex-1 ms-3 whitespace-nowrap", children: "Organisation" }, void 0, !1, {
                fileName: "app/components/Sidebar.tsx",
                lineNumber: 43,
                columnNumber: 8
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 32,
            columnNumber: 7
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 31,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV20("li", { className: `${pathname == "/provider" ? "bg-blue-300" : ""}`, children: /* @__PURE__ */ jsxDEV20(
          Link,
          {
            to: "/provider",
            className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white group",
            children: [
              /* @__PURE__ */ jsxDEV20(
                "svg",
                {
                  className: "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                  viewBox: "0 0 20 18",
                  children: /* @__PURE__ */ jsxDEV20("path", { d: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" }, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 52,
                  columnNumber: 8
                },
                this
              ),
              /* @__PURE__ */ jsxDEV20("span", { className: "flex-1 ms-3 whitespace-nowrap", children: "Provider" }, void 0, !1, {
                fileName: "app/components/Sidebar.tsx",
                lineNumber: 60,
                columnNumber: 8
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 49,
            columnNumber: 7
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 48,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ jsxDEV20("li", { className: `${pathname == "/users" ? "bg-blue-300" : ""}`, children: /* @__PURE__ */ jsxDEV20(
          Link,
          {
            to: "/users",
            className: "flex items-center p-2 text-gray-900 rounded-lg dark:text-white group",
            children: [
              /* @__PURE__ */ jsxDEV20(
                "svg",
                {
                  className: "flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                  "aria-hidden": "true",
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "currentColor",
                  viewBox: "0 0 20 18",
                  children: /* @__PURE__ */ jsxDEV20("path", { d: "M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" }, void 0, !1, {
                    fileName: "app/components/Sidebar.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Sidebar.tsx",
                  lineNumber: 67,
                  columnNumber: 8
                },
                this
              ),
              /* @__PURE__ */ jsxDEV20("span", { className: "flex-1 ms-3 whitespace-nowrap", children: "Users" }, void 0, !1, {
                fileName: "app/components/Sidebar.tsx",
                lineNumber: 75,
                columnNumber: 8
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Sidebar.tsx",
            lineNumber: 64,
            columnNumber: 7
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Sidebar.tsx",
          lineNumber: 63,
          columnNumber: 6
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 14,
        columnNumber: 5
      }, this) }, void 0, !1, {
        fileName: "app/components/Sidebar.tsx",
        lineNumber: 13,
        columnNumber: 4
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Sidebar.tsx",
      lineNumber: 9,
      columnNumber: 3
    },
    this
  );
};

// app/routes/_auth.tsx
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var Layout = () => /* @__PURE__ */ jsxDEV21("div", { className: "w-full max-w-screen-2xl mx-auto overflow-hidden", children: [
  /* @__PURE__ */ jsxDEV21(Header, {}, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV21(
    "button",
    {
      "data-drawer-target": "logo-sidebar",
      "data-drawer-toggle": "logo-sidebar",
      "aria-controls": "logo-sidebar",
      type: "button",
      className: "inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
      children: [
        /* @__PURE__ */ jsxDEV21("span", { className: "sr-only", children: "Open sidebar" }, void 0, !1, {
          fileName: "app/routes/_auth.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV21(
          "svg",
          {
            className: "w-6 h-6",
            "aria-hidden": "true",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsxDEV21(
              "path",
              {
                clipRule: "evenodd",
                fillRule: "evenodd",
                d: "M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_auth.tsx",
                lineNumber: 26,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_auth.tsx",
            lineNumber: 19,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_auth.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ jsxDEV21(Asidebar, {}, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV21("div", { className: "sm:ml-60 p-8 mt-10 bg-gray-50 min-h-screen", children: /* @__PURE__ */ jsxDEV21(Outlet5, {}, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/_auth.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this), auth_default = Layout;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-W3OLIXJ2.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-SRHIKUNW.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-HQ7UJGS3.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KY7CBB3X.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-M2FZQ7YB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.dashboard": { id: "routes/_auth.dashboard", parentId: "routes/_auth", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.dashboard-KYE3EV66.js", imports: ["/build/_shared/chunk-HBGW422B.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.organisation": { id: "routes/_auth.organisation", parentId: "routes/_auth", path: "organisation", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.organisation-QRNGKV4R.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.organisation._index": { id: "routes/_auth.organisation._index", parentId: "routes/_auth.organisation", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_auth.organisation._index-Y6EB3YQC.js", imports: ["/build/_shared/chunk-QYKJAGRL.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.organisation.create": { id: "routes/_auth.organisation.create", parentId: "routes/_auth.organisation", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.organisation.create-TU5WQSLL.js", imports: ["/build/_shared/chunk-HBGW422B.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.provider": { id: "routes/_auth.provider", parentId: "routes/_auth", path: "provider", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.provider-MT47LDZF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.provider._index": { id: "routes/_auth.provider._index", parentId: "routes/_auth.provider", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_auth.provider._index-Z4PKA7MQ.js", imports: ["/build/_shared/chunk-QYKJAGRL.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.provider.create": { id: "routes/_auth.provider.create", parentId: "routes/_auth.provider", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.provider.create-5Q6PX7G6.js", imports: ["/build/_shared/chunk-HQ342WXY.js", "/build/_shared/chunk-HBGW422B.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.users": { id: "routes/_auth.users", parentId: "routes/_auth", path: "users", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.users-MLVD55RZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.users._index": { id: "routes/_auth.users._index", parentId: "routes/_auth.users", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_auth.users._index-TKP5YPZN.js", imports: ["/build/_shared/chunk-QYKJAGRL.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_auth.users.create": { id: "routes/_auth.users.create", parentId: "routes/_auth.users", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.users.create-I7YEX57V.js", imports: ["/build/_shared/chunk-HQ342WXY.js", "/build/_shared/chunk-HBGW422B.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-CJRFWWS2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-EOKLJOCR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "0afb62fb", hmr: { runtime: "/build/_shared\\chunk-HQ7UJGS3.js", timestamp: 1701622277230 }, url: "/build/manifest-0AFB62FB.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_auth.organisation.create": {
    id: "routes/_auth.organisation.create",
    parentId: "routes/_auth.organisation",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: auth_organisation_create_exports
  },
  "routes/_auth.organisation._index": {
    id: "routes/_auth.organisation._index",
    parentId: "routes/_auth.organisation",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: auth_organisation_index_exports
  },
  "routes/_auth.provider.create": {
    id: "routes/_auth.provider.create",
    parentId: "routes/_auth.provider",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: auth_provider_create_exports
  },
  "routes/_auth.provider._index": {
    id: "routes/_auth.provider._index",
    parentId: "routes/_auth.provider",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: auth_provider_index_exports
  },
  "routes/_auth.organisation": {
    id: "routes/_auth.organisation",
    parentId: "routes/_auth",
    path: "organisation",
    index: void 0,
    caseSensitive: void 0,
    module: auth_organisation_exports
  },
  "routes/_auth.users.create": {
    id: "routes/_auth.users.create",
    parentId: "routes/_auth.users",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: auth_users_create_exports
  },
  "routes/_auth.users._index": {
    id: "routes/_auth.users._index",
    parentId: "routes/_auth.users",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: auth_users_index_exports
  },
  "routes/_auth.dashboard": {
    id: "routes/_auth.dashboard",
    parentId: "routes/_auth",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: auth_dashboard_exports
  },
  "routes/_auth.provider": {
    id: "routes/_auth.provider",
    parentId: "routes/_auth",
    path: "provider",
    index: void 0,
    caseSensitive: void 0,
    module: auth_provider_exports
  },
  "routes/_auth.users": {
    id: "routes/_auth.users",
    parentId: "routes/_auth",
    path: "users",
    index: void 0,
    caseSensitive: void 0,
    module: auth_users_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/_auth": {
    id: "routes/_auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
