import React from "react";
import axios from "axios";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = { category: [] };
    }

    //getting the categories from the api
    async componentDidMount() {
        const response = await axios.get(
            "http://127.0.0.1:8000/api/getCategories"
        );
        this.setState({ category: response.data.categories });
    }

    //rendering the categories
    render() {
        return (
            <div>
                <div id="category">
                    <h2>Categories</h2>
                    {this.state.category.map(loc => (
                        <div>
                            <h3>{loc.name}</h3>
                            <ul>
                                {loc.categories.map(sub => (
                                    <li
                                        onClick={e => {
                                            this.props.showInfoContentCatgory(
                                                e,
                                                sub.name
                                            );
                                        }}
                                    >
                                        <a href="#">{sub.name}</a>

                                        <ul>
                                            {sub.categories.map(subcagory => (
                                                <li
                                                    onClick={e => {
                                                        this.props.showInfoContentSubCatgory(
                                                            e,
                                                            subcagory.name
                                                        );
                                                    }}
                                                >
                                                    <a href="#">
                                                        {subcagory.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Category;
