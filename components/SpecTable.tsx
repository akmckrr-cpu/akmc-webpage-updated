"use client";

interface SpecRow {
  parameter: string;
  standard: string;
  premium: string;
}

interface SpecTableProps {
  rows: SpecRow[];
}

export default function SpecTable({ rows }: SpecTableProps) {
  return (
    <table className="spec-table">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Standard</th>
          <th className="text-blue-600">AKMC Pro</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td>{row.parameter}</td>
            <td>{row.standard}</td>
            <td className="font-semibold">{row.premium}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
