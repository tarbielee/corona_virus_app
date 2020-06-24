import React, {Component} from "react"
import "./style.css";



export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  state = {
    listOfCountries: [],
    results: 0
  }

  async componentDidMount() {
    const url = "https://api.covid19api.com/summary";
    const response = await fetch(url);
    const data = await response.json();

    const listOfCountries = data.Countries.map((value) => {
      return value.Country
    })

    this.setState({
      listOfCountries
    })
  }


  async getCountryData() {
    const url = `https://api.covid19api.com/total/dayone/country/`;
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      results: data[data.length - 1]
    })
  }



  renderCountryOptions() {
    return this.state.listOfCountries.map((country, i) => {
      return <option key={i}>{country}</option>
    })
  }


  render() {
    return ( 
      <div className="container">
        <h1> Corona Virus Update</h1>
         
          <div className="menu">
            <select onChange={this.getData}>
              <option>Choose country</option>
              {this.renderCountryOptions()}
            </select>
          </div>

          <div className="flex">

          <header className="header">
            <h1>{this.state.results.Country}</h1>
            <p>{this.state.results.Date}</p>
          </header>
            
          <section className="box TotalConfirmed">
            <h3>TotalConfirmed Cases</h3>
            <ConfirmedDisplay value={this.state.results.Confirmed} />
          </section>

          <section className="box TotalRecovered">
            <h3>TotalRecovered Cases</h3>
            <RecoveredDisplay value={this.state.results.Recovered} />
          </section>

          <section className="box TotalDeaths">
            <h3>TotalDeaths Cases</h3>
            <DeathDisplay value={this.state.deaths} />
          </section>
          </div>
      </div>
    );
  }
}