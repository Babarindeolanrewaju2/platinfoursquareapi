import React, { Component } from "react";

//rendering the location
export default class Location extends Component {
    render() {
        if (!this.props.location.length == 0) {
            return this.props.location.map(item => (
                <div id="location" className="card">
                    <div className="card-body">
                        <div className="card-text">
                            <p>Name: {item.venue.name}</p>
                            <p>Address:{item.venue.location.address}</p>
                            <p>City: {item.venue.location.city}</p>
                            <p>Country:{item.venue.location.country}</p>
                        </div>
                    </div>
                </div>
            ));
        } else {
            return (
                <div id="location" className="card">
                    <div className="card-body">
                        <div className="card-text">
                            <p>No Data</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
