import React from "react";
import Dish from "./Dish";
import "./styles/Dish.css";
import DishBucket from "./DishBucket";
import DishMenuHeader from "./DishMenuHeader";
const ThemeContext = React.createContext("dark");

class DigitalMenu extends React.Component {
  constructor(props) {
    super(props);
    console.log("Props", props);
    this.state = {
      restId: props.restId,
      restaurant: "Unknown",
      dishes: [],
      bucket: []
    };
    this.updateBucket = this.updateBucket.bind(this);
  }
  componentDidMount() {
    fetch(`http://localhost:8000/restapi/restaurants/${this.state.restId}/`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ restaurant: data.name, dishes: data.dishes });
      })
      .catch(err => {});
  }
  updateBucket(item, cmd, qty) {
    let arr = this.state.bucket;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].item.id === item.id) {
        arr.splice(i, 1);
        break;
      }
    }
    qty && arr.push({ item: item, qty: qty });
    this.setState({ bucket: arr });
  }
  render() {
    return (
      <ThemeContext.Provider value={this.updateBucket}>
        <div className="container">
          <DishMenuHeader
            group={this.props.group}
            restaurant={this.state.restaurant}
          />
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
