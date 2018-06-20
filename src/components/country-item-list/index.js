import React from 'react';

export const CountryItemList = ({ ids }) => {
  return (
    <ol>
      {ids.map((country = {}) => (
        <li key={country.name}>
          <div>{country.name}</div>
        </li>
      ))}
    </ol>
  )
};