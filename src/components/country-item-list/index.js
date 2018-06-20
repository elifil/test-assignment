import React from 'react';

export const CountryItemList = ({ ids }) => {
  return (
    <ol>
      {ids.map(id => (
        <li key={id}>
          <div>country item</div>
        </li>
      ))}
    </ol>
  )
};