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
        let cls = `${this.state.open ? "open " : ""}dish-items`;
        let { dish } = this.props;
        let count = dish.items.length;
        return (
            <li className="list-group-item">
                <span className="d-block" onClick={this.toggle}>
                    {dish.name} {count ? `(${count})` : ""}
                </span>
                <ul className={cls}>
                    {dish.items.map((item, key) => (
                        <DishItem item={item} key={item.id} />
                    ))}
                </ul>
            </li>
        );
    }
}

export default Dish;
