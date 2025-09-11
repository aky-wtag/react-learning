import { useReducer } from "react";
import { countReducer } from "../reducer/countReducer";
import { useParams } from "react-router-dom";

export default function Reducer() {
  const { countVal } = useParams();
  console.log(countVal)
  const [state, dispatch] = useReducer(countReducer, {
    count: countVal ? +countVal : 0,
  });
  return (
    <>
      count: {state.count}
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <button onClick={() => dispatch({ type: "del" })}>del</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
}
