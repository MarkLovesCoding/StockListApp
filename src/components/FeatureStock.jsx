var React = require('react');

var FeatureStock = function(props) {
  if(props.isClosed) {
    return null;
  } else {
    return (
      <div
        className={
          "featureStock" +
          " " +
          (props.change > 0 ? "positiveBox" : "negativeBox") +
          " " +
          (props.isExpanded ? "expanded" : "small")
        }
        onClick={props.handleClick}
        data-key={props.symbol}
      >
        <div
          className="closeBox"
          onClick={props.handleClick}
          data-key={props.symbol}
        >
          <span />
        </div>
        <div
          className="addToCustom"
          onClick={props.addToCustom}
          data-key={props.symbol}
        >
          <i class="fas fa-pen" data-key={props.symbol} />
        </div>
        <div
          className="removeFromCustom"
          onClick={props.removeFromCustom}
          data-key={props.symbol}
        >
          <i class="fas fa-trash" data-key={props.symbol} />
        </div>
        <p className="stockName">{props.stock}</p>
        <p className="exchange">{props.exchange}</p>
        <p className="symbol">{props.symbol}</p>
        <p className="price">{props.price ? props.price.toFixed(2) : null}</p>
        {/*  <p className="changeText" style={props.isExpanded ? {"display":"flex"}:{"display":"none"}}>CHANGE</p> */}
        <div
          className={props.change >= 0 ? "positiveArrow" : "negativeArrow"}
          >
          <i class={"fas"+" " +(props.change >= 0 ? "fa-arrow-up":"fa-arrow-down")}/>
        </div>
        <p
          className={
            "change" + " " + (props.change >= 0 ? "positive" : "negative")
          }
        >
          ${props.change ? props.change.toFixed(2) : null}
        </p>
        <p
          className={
            "changePercent" +
            " " +
            (props.changePercent >= 0 ? "positive" : "negative")
          }
        >
          ({props.changePercent.toFixed(2)}%)
        </p>
        <p
          className={
            "avgVolume" +
            " " +
            (props.isExpanded ? "featureExpanded" : "featureHidden")
          }
        >
          {props.avgTotalVol}
        </p>
        <p
          className={
            "week52High" +
            " " +
            (props.isExpanded ? "featureExpanded" : "featureHidden")
          }
        >
          ${props.yearHigh}
        </p>
        <p
          className={
            "week52Low"

               +" " +
            (props.isExpanded ? "featureExpanded" : "featureHidden")
          }
        >
          ${props.yearLow}
        </p>
        <p
          className={
            "peRatio"

               +" " +
            (props.isExpanded ? "featureExpanded" : "featureHidden")
          }
        >
          {props.peRatio ? props.peRatio : "-"}
        </p>
        <p
          className={"lastTradeTime"}
        >
          {props.latestTime}
        </p>
        <p
          className={"marketCap"
                      +" " +
            (props.isExpanded ? "featureExpanded" : "featureHidden") }
        >
          ${(props.marketCap > 1000000000)?(props.marketCap/1000000000).toFixed(2) +" Billion":
           ((props.marketCap > 1000000)?(props.marketCap/1000000).toFixed(2) +" Million":props.marketCap)}
        </p>
         <p
          className={"ytdChange"
                      +" " +
            (props.isExpanded ? "featureExpanded" : "featureHidden") }
        >
          {(props.ytdChange * 100).toFixed(2) +"%"}
        </p>
      </div>
    );
  }
}

module.exports = FeatureStock
