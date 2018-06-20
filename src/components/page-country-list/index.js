import React, { Component } from 'react';
import {CountryItemList} from "../";

export class PageCountryList extends Component {
  render() {
    return(
      <div>
        List of countrys
        <CountryItemList ids={[]} />

      </div>
    )
  }
}
