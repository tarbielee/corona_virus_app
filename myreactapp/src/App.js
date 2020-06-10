import React from "react";
import Axios from "axios";

export default class App extends React.Component {
     Global = {
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        countries: []
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const resApi = await Axios.get("https://api.covid19api.com/");
        const resCountries = await Axios.get("https://api.covid19api.com/countries");
        let countries = Object.keys(resCountries.data.countries);
        this.setGlobal({
            NewConfirmed: resApi.data.NewConfirmed,
            TotalConfirmed: resApi.data.TotalConfirmed,
            NewDeaths: resApi.data.NewDeaths,
            TotalDeaths:resApi.data.TotalDeaths,
            NewRecovered: resApi.data.NewRecovered,
            TotalRecovered: resApi.data.TotalRecovered,
            countries
        });
    }

    renderCountryOptions() {
        return this.Global.countries.map((country, i) => {
            return <option key={i}>{country}</option>
        });
    } 

    render() {
        return (
        <div className="container">
            <h1>Corona Virus Updates</h1>

            <select>
                {this.renderCountryOptions()}
            </select>

            <div className="flex">
            <div className="box NewConfirmed">
                <h3>NewConfirmed Cases</h3>
                <h4>{this.Global.NewConfirmed}</h4>
            </div>
            <div className="box TotalConfirmed">
                <h3>TotalConfirmed Cases</h3>
                <h4>{this.Global.TotalConfirmed}</h4>
            </div>
            <div className="box NewDeaths">
                <h3>NewDeaths</h3>
                <h4>{this.Global.NewDeaths}</h4>
            </div>
            <div className="box TotalDeaths">
                <h3>TotalDeaths</h3>
                <h4>{this.Global.TotalDeaths}</h4>
            </div>
            <div className="box NewRecovered">
                <h3>NewRecovered</h3>
                <h4>{this.Global.NewRecovered}</h4>
            </div>
            <div className="box TotalRecovered">
                <h3>TotalRecovered</h3>
                <h4>{this.Global.TotalRecovered}</h4>
            </div>
            </div>

        </div>);
    }
}


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
