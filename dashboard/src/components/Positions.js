import React , {useState , useEffect}from "react";
import axios from "axios";
// import {positions} from "../data/data";

const Positions = () => {

  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allPositions").then((res) => {
      console.log(res.data);
      setAllPositions(res.data);
    });
  } , []);

  return (
    <>
      <h3 className="title">Positions (allPositions.length)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock,index) => {
            const currVal = stock.qty * stock.price;
            const isProfit = currVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <th>{stock.product}</th>
                <th>{stock.name}</th>
                <th>{stock.qty}</th>
                <th>{stock.avg.toFixed(2)}</th>
                <th>{stock.price.toFixed(2)}</th>
                <th className={profClass}>{(currVal - stock.avg * stock.qty).toFixed(2)}</th>
                <th className={dayClass}>{stock.day}</th>
              </tr>
            );
          })}

        </table>
      </div>
    </>
  );
};

export default Positions;
