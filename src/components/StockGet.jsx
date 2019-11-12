
var React = require('react');
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
          className={props.searchActive ? "buttonSearchInputActive" : ""}

          >
          <i class="fas fa-search fa-1x" />
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
module.exports = StockGet
