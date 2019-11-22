import React from "react";
import { ThemeContext } from "./DigitalMenu";

class DishItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      input_id: `item-${this.props.item.id}-input`,
      textarea_id: `item-${this.props.item.id}-textarea`
    };
    this.itemSelect = this.itemSelect.bind(this);
  }
  itemSelect(e) {
    e.stopPropagation();
    this.setState({
      show: !this.state.show
    });
  }
  updateQty(cmd, cb) {
    let _qty = document.querySelector(`#${this.state.input_id}`);
    if (cmd === "+") {
      _qty.stepUp();
    } else {
      _qty.stepDown();
    }
    cb(this.props.item, "+", parseInt(_qty.value));
  }
  numFmt(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  dataChanged(e) {
    console.log(e);
  }
  render() {
    let { item } = this.props;
    let cls =
      "container item-details bg-light pt-2 " + (this.state.show && "show");
    return (
      <ThemeContext.Consumer>
        {updateBucket => (
          <li className="p-1 mt-1">
            <span
              className="d-block p-2  text-primary item-span"
              key={item.id}
              onClick={e => {
                this.itemSelect(e);
              }}
            >
              {item.name}
            </span>
            <div className={cls}>
              <div className="row align-text-bottom p-2">
                <div className="col-md-auto border pt-3 pb-3">
                  <img
                    width="64px"
                    src={require("../images/sample-icon.png")}
                    alt=""
                  />
                </div>
                <div className="col-md-auto d-flex flex-column justify-content-end">
                  <div> Quantity </div>{" "}
                  <div>
                    <div className="d-flex">
                      <input
                        id={this.state.input_id}
                        name="qty"
                        type="number"
                        min="0"
                        className="align-self-center"
                        onChange={e => {
                          updateBucket(item, "+", parseInt(e.target.value));
                        }}
                      />
                      <div className="d-flex flex-column">
                        <span
                          className="text-success pl-2"
                          onClick={() => {
                            this.updateQty("+", updateBucket);
                          }}
                        >
                          <i className="fas fa-plus-circle"> </i>
                        </span>
                        <span
                          className="text-danger pl-2"
                          onClick={() => {
                            this.updateQty("-", updateBucket);
                          }}
                        >
                          <i className="fas fa-minus-circle"> </i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex">
                    <span className="text-right p-2"> Additional details </span>
                    <textarea
                      className="w-100"
                      name="Details"
                      rows={2}
                      placeholder="Enter more details"
                    ></textarea>
                  </div>
                  <div className="p-2 float-right">
                    <span className="pr-5"> Price </span>
                    <span className=" border pl-2 pr-2">
                      TZS {this.numFmt(item.price)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default DishItem;
