import React from "react";

export default class FetchRandomUser extends React.Component {
     state = {
        loading: true,
        country: null
    };

    async componentDidMount() {
        const url = "https://api.covid19api.com/summary";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ country: data.results[0], loading: false});
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.country) {
            return <div>didn't get a country</div>;
        }

        return (
            <div>
                <div>{this.state.country}</div>
            </div>
        );
    }
}