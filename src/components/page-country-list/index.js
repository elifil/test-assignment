import React, { Component } from 'react';
import {CountryItemList} from "../";
import { api } from '../../utils';

export class PageCountryList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }

    this.fetchItems = () => {
      api.getItemsIds()
        .then(data => { this.setState({ data })})
        .catch(err => { console.error(err)});
    }
  }

  componentDidMount() {
    this.fetchItems()
  }

  render() {

    const { data } = this.state;

    return(
      <div>
        List of countrys
        <CountryItemList ids={data} />

      </div>
    )
  }
}