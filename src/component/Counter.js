import React from "react";
import { connect } from "react-redux";
import { INCREAMENT, DECREAMENT } from "../Reducer";

const Counter = (props) => {
  const { count } = props;
  const handleIncreament = () => {
    props.dispatch({ type: INCREAMENT });
  };
  const handleDecreament = () => {
    props.dispatch({ type: DECREAMENT });
  };
  return (
    <div>
      <button onClick={handleDecreament}>-</button>
      {count}
      <button onClick={handleIncreament}>+</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps)(Counter);
