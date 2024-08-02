import React from 'react';
import data from './dummyData.json';

const Table = () => {
  return (
    <div>
      <h2>Medals Table</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Medals</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.Id}>
              <td>{item.Id}</td>
              <td>{item.Year}</td>
              <td>{item.Medals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
