import React from "react";
import Dish from "./Dish";
import "./styles/Dish.css";
import DishBucket from "./DishBucket";
const ThemeContext = React.createContext("dark");

class DigitalMenu extends React.Component {
    constructor(props) {
        super(props);
        console.log("Props", props);
        this.state = {
            restId: props.restId,
            restaurant: "Unknown",
            group: props.group,
            dishes: [],
            bucket: []
        };
        this.updateBucket = this.updateBucket.bind(this);
    }
    componentDidMount() {
        let url = `http://localhost:8000/restapi/restaurants/${this.state.restId}/`;
        fetch(url, {})
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                this.setState({ restaurant: data.name, dishes: data.dishes });
            })
            .catch(err => {
                console.log(err);
            });
    }
    updateBucket(item, cmd, qty) {
        console.log(item, cmd, qty);
        let arr = this.state.bucket;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].item.id === item.id) {
                arr.splice(i, 1);
            }
        }
        if (qty) {
            arr.push({ item: item, qty: qty });
        }
        this.setState({
            bucket: arr
        });
    }
    render() {
        return (
            <ThemeContext.Provider value={this.updateBucket}>
                <div className="container">
                    <div className="row p-1">
                        <div className="col text-center  border-bottom">
                            <h4>
                                {this.state.group} - {this.state.restaurant}
                            </h4>
                        </div>
                    </div>
                    <div className="row p-1">
                        <div className="col text-right  p-0">
                            <span className="text-secondary font-italic">
                                Submission Cut-off
                            </span>
                            <span className="text-dark pl-2">KSA 12:00</span>
                        </div>
                    </div>
                    <div className="row p-1">
                        <div className="col  p-0">
                            <div className="row">
                                <div className="col-sm-2">Name</div>
                                <div className="col-sm-10">
                                    <input
                                        className="w-100 pl-2"
                                        type="text"
                                        name="name"
                                        placeholder="Name (for accounting purposes)"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-1 mt-2">
                        <div className="col text-center p-0">
                            <h3 className="text-success">
                                {this.state.restaurant}
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul className="list-group">
                                {this.state.dishes.map(dish => {
                                    return <Dish key={dish.id} dish={dish} />;
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col p-1">
                            <DishBucket bucket={this.state.bucket} />
                        </div>
                    </div>
                </div>
            </ThemeContext.Provider>
        );
    }
}

export { DigitalMenu, ThemeContext };
