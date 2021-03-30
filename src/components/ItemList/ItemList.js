import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner/Spinner';

import './ItemList.css';

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null,
    error: true,
    loading: false
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  componentDidMount(){
    this.swapiService.getAllPeople()
      .then(peopleList => {
        this.setState({
          peopleList
        })
      })
      .catch(this.onError)

  }

  renderItems(arr) {
    return arr.map(({ id, name }) => {
     return (
      <li className="list-group-item"
      key={id}
      onClick={() => this.props.onItemSelected(id)}
    >
      {name}
    </li>
     )
    })
  }

  render() {

    const { peopleList } = this.state

    if (!peopleList) {
      return <Spinner />
    }

    const items = this.renderItems(peopleList)

    return (
      <ul className="item-list list-group">
        { items}
      </ul>
    );
  }
}