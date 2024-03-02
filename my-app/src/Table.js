import React from 'react';

const Table = ({ records }) => {
  return (
    <table>
    <thead>
      <tr>
        <th rowSpan={2}>Customer Name</th>
        <th rowSpan={2}>Age</th>
        <th rowSpan={2}>Phone</th>
        <th rowSpan={2}>Location</th>
        <th colSpan="2">Created At</th> {/* Merge two columns */}
      </tr>
      <tr>
        <th>Date</th> {/* Subcolumn for Date */}
        <th>Time</th> {/* Subcolumn for Time */}
      </tr>
    </thead>
    <tbody>
      {records.map(customer => (
        <tr key={customer.sno}>
          <td>{customer.customer_name}</td>
          <td>{customer.age}</td>
          <td>{customer.phone}</td>
          <td>{customer.location}</td>
          <td>{new Date(customer.created_at).toLocaleDateString()}</td> {/* Display Date */}
          <td>{new Date(customer.created_at).toLocaleTimeString()}</td> {/* Display Time */}
        </tr>
      ))}
    </tbody>
  </table>
  );
}

export default Table;
