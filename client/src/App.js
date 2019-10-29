import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
            dbResponse: ""
        };
    }

    // Go to API and check testAPI route for a response
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    // Go to API and check testDB route for a response
    callDB() {
        fetch("http://localhost:9000/testDB")
            .then(res => res.text())
            .then(res => this.setState({ dbResponse: res }))
            .catch(err => err);
    }

    // Execute the calls when componnent mounts
    componentDidMount() {
        const API = this.callAPI();
        const DB = this.callDB();
    }

    render() {
        return (
            <div className="App">
                asd
                {console.log(this.API, this.DB )}
            </div>
        );
    }
}

export default App;
