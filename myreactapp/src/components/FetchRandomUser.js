// import React from "react"
// import Axios from "axios";
// import "./style.css";
// // import FetchRandomUser from "./components/FetchRandomUser";

// export default class App extends React.Component {
//     state = {
//         NewConfirmed: 0,
//         TotalConfirmed: 0,
//         NewDeaths: 0,
//         TotalDeaths: 0,
//         NewRecovered: 0,
//         TotalRecovered: 0,
//         // countries: []
//     }

//     async componentDidMount() {
//         const url = "https://api.covid19api.com/summary";
//         const response = await fetch(url);
//         const data = await response.json();
    

//     // async getData() {
//     //     const res = await Axios.get("https://api.covid19api.com/summary");
//         // const resCountries = await Axios.get("https://api.covid19api.com/countries");
//         // const countries = Object.keys(resCountries.data.countries);
//         this.setState({import React, { Component } from 'react';
  // import './App.css';
  
  // class App extends Component {
    
  //   // For events and setState on getCountryData function
  //   constructor(props) {
  //     super(props);
  //     this.getCountryData = this.getCountryData.bind(this);
  //   }
  
  //   state = {
  //     listOfCountries: [],
  //     results: 0
  //   }
  
  //   // pulling all countries data and filtering only the name of countries
  //   async componentDidMount() {
  //     const url = "https://api.covid19api.com/summary";
  //     const response = await fetch(url);
  //     const data = await response.json();
  
  //     const listOfCountries = data.Countries.map((value) => {
  //       return value.Country
  //     })
  
  //     this.setState({
  //       listOfCountries
  //     })
  //   }
  
  
  //   // pulling data filtered by the name of the country we select from the menu
  //   // then returning a summary of the latest summary data for that country
  //   async getCountryData(e) {
  //     const url = `https://api.covid19api.com/total/dayone/country/${e.target.value}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  
  //     this.setState({
  //       results: data[data.length - 1]
  //     })
  //   }
  
  
  //   // displays countries in dropdown
  //   renderCountryOptions() {
  //     return this.state.listOfCountries.map((country, i) => {
  //       return <option key={i}>{country}</option>
  //     })
  //   }
  
  
  //   render() {
  //     return ( 
  //       <div className="app">  
  //           <div className="menu">
  //             <select onChange={this.getCountryData}>
  //               <option>Choose country</option>
  //               {this.renderCountryOptions()}
  //             </select>
  //           </div>
  
  //           <header className="header">
  //             <h1>{this.state.results.Country}</h1>
  //             <p>{this.state.results.Date}</p>
  //           </header>
              
  //           <section className="totalConfirmed">
  //             <h3>CONFIRMED CASES</h3>
  //             <div className="bigNumber one">{this.state.results.Confirmed}</div>
  //           </section>
  
  //           <section className="totalRecovered">
  //             <h3>RECOVERED CASES</h3>
  //             <div className="bigNumber two"> {this.state.results.Recovered}</div>
  //           </section>
  
  //           <section className="totalDeaths">
  //             <h3>DEATHS</h3>
  //             <div className="bigNumber three"> {this.state.results.Deaths}</div>
  //           </section>
  //       </div>
  //     );
  //   }
  // }
  
  // export default App;
//     //     const res = await Axios.get("");
//     // }

//     // renderCountryOptions() {
//     //     return this.state.countries.map((country, i) => {
//     //         return <option key={i}>{country}</option>
//     //     })
//     // }

//     render() {
//         return (<div className="container">
//             <h1>Corona update</h1>

//             {/* <select>
//                 {this.renderCountryOptions()}
//             </select> */}

//             <div className="flex">

//             <div className="box NewConfirmed">
//                 <h3>NewConfirmed Cases</h3>
//                 <h4>{this.state.NewConfirmed}</h4>
//             </div>
//             <div className="box TotalConfirmed">
//                 <h3>TotalConfirmed Cases</h3>
//                 <h4>{this.state.TotalConfirmed}</h4>
//             </div>
//             <div className="box NewDeaths">
//                 <h3>NewDeaths Cases</h3>
//                 <h4>{this.state.NewDeaths}</h4>
//             </div>
//             <div className="box TotalDeaths">
//                 <h3>TotalDeaths Cases</h3>
//                 <h4>{this.state.TotalDeaths}</h4>
//             </div>
//             <div className="box NewRecovered">
//                 <h3>NewRecovered Cases</h3>
//                 <h4>{this.state.NewRecovered}</h4>
//             </div>
//             <div className="box TotalRecovered">
//                 <h3>TotalRecovered Cases</h3>
//                 <h4>{this.state.TotalRecovered}</h4>
//             </div>

//             </div>

//         </div>)
//     }
// }


// // import React from "react";

// // export default class FetchRandomUser extends React.Component {
// //      state = {
// //         loading: true,
// //         country: null
// //     };

// //     async componentDidMount() {
// //         const url = "https://api.covid19api.com/summary";
// //         const response = await fetch(url);
// //         const data = await response.json();
// //         this.setState({
// //                         NewConfirmed: data.NewConfirmed,
// //                         TotalConfirmed: data.TotalConfirmed,
// //                         NewDeaths: data.NewDeaths,
// //                         TotalDeaths: data.TotalDeaths,
// //                         NewRecovered: data.NewRecovered,
// //                         TotalRecovered: data
// //         });
        
// //     }

// //     // render() {
// //     //     if (this.state.loading) {
// //     //         return <div>loading...</div>;
// //     //     }

// //     //     if (!this.state.country) {
// //     //         return <div>didn't get a country</div>;
// //     //     }

// //     //     return (
// //     //         <div>
// //     //             <div>{this.state.country}</div>
// //     //         </div>
// //     //     );
// //     // }

// //     render() {
// //                 return (<div className="container">
// //                     <h1>Corona update</h1>
        
// //                     {/* <select>
// //                         {this.renderCountryOptions()}
// //                     </select> */}
        
// //                     <div className="flex">
        
// //                     <div className="box NewConfirmed">
// //                         <h3>NewConfirmed Cases</h3>
// //                         <h4>{this.state.NewConfirmed}</h4>
// //                     </div>
// //                     <div className="box TotalConfirmed">
// //                         <h3>TotalConfirmed Cases</h3>
// //                         <h4>{this.state.TotalConfirmed}</h4>
// //                     </div>
// //                     <div className="box NewDeaths">
// //                         <h3>NewDeaths Cases</h3>
// //                         <h4>{this.state.NewDeaths}</h4>
// //                     </div>
// //                     <div className="box TotalDeaths">
// //                         <h3>TotalDeaths Cases</h3>
// //                         <h4>{this.state.TotalDeaths}</h4>
// //                     </div>
// //                     <div className="box NewRecovered">
// //                         <h3>NewRecovered Cases</h3>
// //                         <h4>{this.state.NewRecovered}</h4>
// //                     </div>
// //                     <div className="box TotalRecovered">
// //                         <h3>TotalRecovered Cases</h3>
// //                         <h4>{this.state.TotalRecovered}</h4>// import React from "react"
// import Axios from "axios";
// import "./style.css";
// // import FetchRandomUser from "./components/FetchRandomUser";

// export default class App extends React.Component {
//     state = {


  // import React, { Component } from 'react';
  // import './App.css';
  
  // class App extends Component {
    
  //   // For events and setState on getCountryData function
  //   constructor(props) {
  //     super(props);
  //     this.getCountryData = this.getCountryData.bind(this);
  //   }
  
  //   state = {
  //     listOfCountries: [],
  //     results: 0
  //   }
  
  //   // pulling all countries data and filtering only the name of countries
  //   async componentDidMount() {
  //     const url = "https://api.covid19api.com/summary";
  //     const response = await fetch(url);
  //     const data = await response.json();
  
  //     const listOfCountries = data.Countries.map((value) => {
  //       return value.Country
  //     })
  
  //     this.setState({
  //       listOfCountries
  //     })
  //   }
  
  
  //   // pulling data filtered by the name of the country we select from the menu
  //   // then returning a summary of the latest summary data for that country
  //   async getCountryData(e) {
  //     const url = `https://api.covid19api.com/total/dayone/country/${e.target.value}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  
  //     this.setState({
  //       results: data[data.length - 1]
  //     })
  //   }
  
  
  //   // displays countries in dropdown
  //   renderCountryOptions() {
  //     return this.state.listOfCountries.map((country, i) => {
  //       return <option key={i}>{country}</option>
  //     })
  //   }
  
  
  //   render() {
  //     return ( 
  //       <div className="app">  
  //           <div className="menu">
  //             <select onChange={this.getCountryData}>
  //               <option>Choose country</option>
  //               {this.renderCountryOptions()}
  //             </select>
  //           </div>
  
  //           <header className="header">
  //             <h1>{this.state.results.Country}</h1>
  //             <p>{this.state.results.Date}</p>
  //           </header>
              
  //           <section className="totalConfirmed">
  //             <h3>CONFIRMED CASES</h3>
  //             <div className="bigNumber one">{this.state.results.Confirmed}</div>
  //           </section>
  
  //           <section className="totalRecovered">
  //             <h3>RECOVERED CASES</h3>
  //             <div className="bigNumber two"> {this.state.results.Recovered}</div>
  //           </section>
  
  //           <section className="totalDeaths">
  //             <h3>DEATHS</h3>
  //             <div className="bigNumber three"> {this.state.results.Deaths}</div>
  //           </section>
  //       </div>
  //     );
  //   }
  // }
  
  // export default App;