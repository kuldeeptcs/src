import React from 'react';
import { Component } from 'react';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <SearchBar /> */}
        <WeatherList />
      </div>
    );
  }
}