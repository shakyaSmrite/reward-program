import React from "react";

function TableRow({data}){
  return (
      <tr>
        <td>{data.transcationDescription}</td>
        <td>{data.month}</td>
        <td>{data.amount}</td>
        <td>{data.rewards}</td>
      </tr>
  );
}


export default TableRow;
