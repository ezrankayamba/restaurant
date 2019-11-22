import React from "react";

class DishBucket extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: props.bucket };
  }

  numFmt(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  render() {
    let show = this.state.items.length > 0;
    let total = this.state.items
      .map(itm => itm.item.price * itm.qty)
      .reduce((a, b) => a + b, 0);
    let count = this.state.items.map(itm => itm.qty).reduce((a, b) => a + b, 0);
    return (
      <div className={`dish-bucket pl-3 pr-3 ${show ? "show" : ""}`}>
        <div className="d-flex justify-content-between w-100">
          <div className="flex-fill align-self-center">{count} item(s)</div>
          <div className="flex-fill align-self-center">
            Sub-Total: TZS {this.numFmt(total)}
          </div>
          <div className="flex-fill align-self-center">
            <button className="btn float-right">Check Out</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DishBucket;
