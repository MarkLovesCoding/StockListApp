
import React from 'react';
import {FaSearch} from 'react-icons/fa'
var StockGet = function(props) {

  return (
    <div>
      <form
        id="stockForm"
        className={"stockForm" + " " + props.animateInput}
        onSubmit={props.handleSubmit}
      >
        <button
          id="stockButton"
          className={"waves-effect"+" "+(props.searchActive ? "buttonSearchInputActive" : "")}
        >
          <FaSearch size={25} />
        </button>
        <input
          type="text"
          className={
            "stockInput" +
            " " +
            (props.searchActive ? "searchVisibile" : "searchHidden")
          }
          placeholder="TSLA, GOOG, etc..."
          value={props.stockInput}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}
export default StockGet
