import React from "react";
import Axios from "axios";
import "./style.css";

export default class App extends React.Component {
  state = {
      NewConfirmed: 100282,
      TotalConfirmed: 1162857,
      NewDeaths: 5658,
      TotalDeaths: 63263,
      NewRecovered: 15405,
      TotalRecovered: 230845,
      countries: []
  }

  componentDidMount() {
      this.getData();
  }

  async getData() {
    const url = "https://api.covid19api.com/total/dayone/country/";
        const response = await fetch(url);
        const data = await response.json();
      this.setState({
          NewConfirmed: data.NewConfirmed,
          TotalConfirmed: data.TotalConfirmed,
          NewDeaths: data.NewDeaths,
          TotalDeaths: data.TotalDeaths,
          NewRecovered: data.NewRecovered,
          TotalRecovered: data.TotalRecovered,
          // countries
      })
  }

  async getCountryData() {
      const res = await Axios.get("");
  }

  renderCountryOptions() {
      return this.state.countries.map((country, i) => {
          return <option key={i}>{country}</option>
      })
  }

  render() {
      return (<div className="container">
          <h1>Corona update</h1>

          <select>
              {this.renderCountryOptions()}
          </select>

          <div className="flex">

          <div className="box NewConfirmed">
              <h3>NewConfirmed Cases</h3>
              <h4>{this.state.NewConfirmed}</h4>
          </div>
          <div className="box TotalConfirmed">
              <h3>TotalConfirmed Cases</h3>
              <h4>{this.state.TotalConfirmed}</h4>
          </div>
          <div className="box NewDeaths">
              <h3>NewDeaths Cases</h3>
              <h4>{this.state.NewDeaths}</h4>
          </div>
          <div className="box TotalDeaths">
              <h3>TotalDeaths Cases</h3>
              <h4>{this.state.TotalDeaths}</h4>
          </div>
          <div className="box NewRecovered">
              <h3>NewRecovered Cases</h3>
              <h4>{this.state.NewRecovered}</h4>
          </div>
          <div className="box TotalRecovered">
              <h3>TotalRecovered Cases</h3>
              <h4>{this.state.TotalRecovered}</h4>
          </div>

          </div>

      </div>)
  }
}
