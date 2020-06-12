import React from "react"
import Axios from "axios";
import "./style.css";
// import FetchRandomUser from "./components/FetchRandomUser";

export default class App extends React.Component {
    state = {
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
        const resApi = await Axios.get("https://api.covid19api.com/summary");
        const resCountries = await Axios.get("https://api.covid19api.com/countries");
        // const countries = Object.keys(resCountries.data.countries);
        this.setState({
            NewConfirmed: resApi.data.NewConfirmed,
            TotalConfirmed: resApi.data.TotalConfirmed,
            NewDeaths: resApi.data.NewDeaths,
            TotalDeaths: resApi.data.TotalDeaths,
            NewRecovered: resApi.data.NewRecovered,
            TotalRecovered: resApi.data.TotalRecovered,
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
