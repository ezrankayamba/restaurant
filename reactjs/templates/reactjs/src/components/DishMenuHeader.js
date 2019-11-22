import React from "react";
import CustomerNameRow from "./CustomerNameRow";

const DishMenuHeader = props => {
  return (
    <>
      <div className="row p-1">
        <div className="col text-center  border-bottom">
          <h4>
            {props.group} - {props.restaurant}
          </h4>
        </div>
      </div>
      <div className="row p-1">
        <div className="col text-right  p-0">
          <span className="text-secondary font-italic">
            Submission usususu Cut-off
          </span>
          <span className="text-dark pl-2">KSA 12:00</span>
        </div>
      </div>
      <CustomerNameRow />
      <div className="row p-1 mt-2">
        <div className="col text-center p-0">
          <h3 className="text-success">{props.restaurant}</h3>
        </div>
      </div>
    </>
  );
};

export default DishMenuHeader;
