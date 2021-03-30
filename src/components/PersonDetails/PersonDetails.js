import React, { Component } from 'react';
import SwapiService from '../../services/swapiService';

import './PersonDetails.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }

  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService.getPerson(personId)
      .then((person) => {
        this.setState({
          person
        });
      });

  }

  render() {


    if (!this.state.person) {
      return `Select a person from a list ` + this.props.personId;
    }

    const { person: { id, name, gender, birthYear, eyeColor } } = this.state;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name} {this.props.personId}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}