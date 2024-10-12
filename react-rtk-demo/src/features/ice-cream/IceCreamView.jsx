import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

export default function IceCreamView() {
  const [toStock, setToStock] = useState(1);
  const numOfIceCream = useSelector( state => state.iceCream.numOfIceCream );
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of Ice Creams - {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered()) }>Order ice cream</button>
      <input type="number" value={toStock} onChange={ e => setToStock(parseInt(e.target.value)) }/>
      <button onClick={() => dispatch(restocked(toStock)) }>Restock ice cream</button>
    </div>
  );
};