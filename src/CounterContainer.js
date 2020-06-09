import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const LightComponent = ({ counter, dispatch }) => (
  <div>
    <p>{counter}</p>
    <button onClick={() => dispatch({ type: 'ADD' })}>
      add +1
    </button>
    <button onClick={() => dispatch({ type: 'REMOVE' })}>
      remove -1
    </button>
    <button onClick={() => dispatch({ type: 'RESET' })}>
      reset
    </button>
  </div>
);


export default connect(mapStateToProps)(LightComponent);