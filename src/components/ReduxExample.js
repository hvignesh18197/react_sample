import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament } from "../store/CountReducer";

export default function ReduxExample() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <p>clicked {state.counter.count} times</p>
      <button onClick={() => dispatch(increament())}>increament</button>
      <button onClick={() => dispatch(decreament())}>decreament</button>

      <h2>I have {state.chocolate.noOfChoclate} Choclates  </h2>
      <button onClick={() => dispatch({type: 'ChocoIncreament'})}>increament</button>
      <button onClick={() => dispatch({type: 'ChocoDecreament'})}>decreament</button>
    </div>
  );
}
