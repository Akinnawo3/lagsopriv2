import React from "react";

const Quotation = ({items}) => {
  return (
    <div className="mt-3">
      <h2>Quotation</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount (₦)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item?._id}>
              <th scope="row">{index + 1}</th>
              <td>{item?.item}</td>
              <td>{item?.description}</td>
              <td>{item?.quantity}</td>
              <td>{item?.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Quotation;
