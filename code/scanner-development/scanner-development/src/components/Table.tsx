/* eslint-disable @typescript-eslint/no-explicit-any */
/** @format */

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export const Table = ({ column, data }: any) => {
  const table = useReactTable({
    data,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="py-2">
      <table className="w-full">
        <thead className="w-full bg-gray-100 p-4">
          {table.getHeaderGroups()?.map((headerGroup) => (
            <tr
              className="border border-gray-800  capitalize"
              key={headerGroup.id}
            >
              {headerGroup.headers?.map((header) => (
                <th key={header.id} className="border text-base  py-4 capitalize">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="w-full text-center items-center bg-white capitalize">
          {table.getRowModel().rows?.map((row) => (
            <tr key={row.id} className="border">
              {row.getVisibleCells()?.map((cell) => (
                <td key={cell.id} className="border py-3 text-base break-all text-center items-center justify-center">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
