import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./App.css";
import Category from "./Category";
import Location from "./Location";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { location: [] };
        this.handleCategory = this.handleCategory.bind(this);
        this.handleSubCategory = this.handleSubCategory.bind(this);
    }

    //fetching the location data for the category
    handleCategory(e, name) {
        let url = `http://127.0.0.1:8000/api/getLocations/${name}`;
        axios
            .get(url)
            .then(response => {
                this.setState({
                    location: response.data.response.groups[0].items
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    //fetching the location data for the subcategory
    handleSubCategory(e, name) {
        e.stopPropagation();
        let url = ` http://127.0.0.1:8000/api/getLocations/${name}`;
        axios
            .get(url)
            .then(response => {
                this.setState({
                    location: response.data.response.groups[0].items
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    //rendering the components
    render() {
        return (
            <div className="App">
                <Category
                    showInfoContentCatgory={this.handleCategory}
                    showInfoContentSubCatgory={this.handleSubCategory}
                />
                <Location className="location" location={this.state.location} />
            </div>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
