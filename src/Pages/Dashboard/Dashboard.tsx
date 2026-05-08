import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

type Row = {
  id: number;
  name: string;
  status: string;
};

export default function Dashboard() {
  const [rowData] = useState<Row[]>([
    { id: 1, name: "Task A", status: "Success" },
    { id: 2, name: "Task B", status: "Warning" },
    { id: 3, name: "Task C", status: "Fail" },
  ]);

  const [colDefs] = useState<ColDef<Row>[]>([
    { field: "id" },
    { field: "name" },
    { field: "status" },
  ]);

  return (
    <div className="flex flex-col gap-6">

      <h1 className="text-2xl font-bold text-purple-600">
        Dashboard
      </h1>

      {/* BUTTONS */}
      <div className="flex gap-3">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Success
        </button>

        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Warning
        </button>

        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Fail
        </button>
      </div>

      {/* AG GRID */}
      <div className="ag-theme-alpine w-full h-80">
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
        />
      </div>

    </div>
  );
}