import React from "react";
import DishItem from "./DishItem";

class Dish extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ open: !this.state.open });
    console.log("Toggle");
  }
  render() {
    let { dish } = this.props;
    return (
      <li className="list-group-item">
        <span className="d-block" onClick={this.toggle}>
          {dish.name} {dish.items.length ? `(${dish.items.length})` : ""}
        </span>
        <ul className={`${this.state.open ? "open " : ""}dish-items`}>
          {dish.items.map((item, key) => (
            <DishItem item={item} key={item.id} />
          ))}
        </ul>
      </li>
    );
  }
}

export default Dish;
