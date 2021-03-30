import React, { Component } from 'react';
import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import RandomPlanet from '../RandomPlanet/RandomPlanet';

import './App.css'

export default class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <RandomPlanet />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}