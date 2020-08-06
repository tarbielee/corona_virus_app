import React from "react";
import "./style.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.getData = this.getData.bind(this);
      }

  state = {
      TotalConfirmed: 1162857,
      TotalDeaths: 63263,
      TotalRecovered: 2308450,
      countries: []
  }

  async componentDidMount() {
      const url = "https://api.covid19api.com/summary";
      const response = await fetch(url);
      const data  = await response.json;

      const countries = data.countries.map((value) => {
        return value.country
      })

      this.setState({
        countries
      })
  }

  async getData() {
    const url = "https://api.covid19api.com/total/dayone/country/";
        const response = await fetch(url);
        const data = await response.json();
      this.setState({
          TotalConfirmed: data.TotalConfirmed,
          TotalDeaths: data.TotalDeaths,
          TotalRecovered: data.TotalRecovered,
      })
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
              <option>select country</option>
              {this.renderCountryOptions()}
          </select>

          <div className="flex">

          <div className="box TotalConfirmed">
              <h3>TotalConfirmed Cases</h3>
              <h4>{this.state.TotalConfirmed}</h4>
          </div>
          <div className="box TotalDeaths">
              <h3>TotalDeaths Cases</h3>
              <h4>{this.state.TotalDeaths}</h4>
          </div>
          <div className="box TotalRecovered">
              <h3>TotalRecovered Cases</h3>
              <h4>{this.state.TotalRecovered}</h4>
          </div>

          </div>

      </div>)
  }
}
