import React from "react";

const CustomerNameRow = props => {
  return (
    <>
      <div className="row p-1">
        <div className="col  p-0">
          <div className="row">
            <div className="col-sm-2"> Name </div>{" "}
            <div className="col-sm-10">
              <input
                className="w-100 pl-2"
                type="text"
                placeholder="Name (for accounting purposes)"
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default CustomerNameRow;
