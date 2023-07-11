import React from 'react';

import {FaTrash,FaArrowUp,FaArrowDown,FaPen} from 'react-icons/fa';

function crop_name_length(props_symbol){
  if (props_symbol.length > 20){
    return props_symbol.substring(0,20) + "..."
  }
  else{
    return props_symbol
  }
}
function convertDate(date){
  let newDate = new Date(date*1000)
  return newDate.toUTCString()
}

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

           <FaPen data-key={props.symbol}/>
        </div>
        <div
          className="removeFromCustom"
          onClick={props.removeFromCustom}
          data-key={props.symbol}
        >
           <FaTrash data-key={props.symbol}/>
        </div>
        <p className="stockName">{props.isExpanded ? props.stock : crop_name_length(props.stock)}</p>
        <p className="exchange">{props.exchange}</p>
        <p className="symbol">{props.symbol}</p>
        <p className="price">{props.price ? Number(props.price).toFixed(2) : null}</p>
        <div
          className={props.change >= 0 ? "positiveArrow" : "negativeArrow"}
          >
          {props.change >= 0 ? <FaArrowUp /> : <FaArrowDown />}

        </div>
        <p
          className={
            "change" + " " + (props.change >= 0 ? "positive" : "negative")
          }
        >
          ${props.change ? Number(props.change).toFixed(2) : null}
        </p>
        <p
          className={
            "changePercent" +
            " " +
            (props.changePercent >= 0 ? "positive" : "negative")
          }
        >
          ({Number(props.changePercent).toFixed(2)}%)
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
          ${Number(props.yearHigh).toFixed(2)}
        </p>
        <p
          className={
            "week52Low"

               +" " +
            (props.isExpanded ? "featureExpanded" : "featureHidden")
          }
        >
          ${Number(props.yearLow).toFixed(2)}
        </p>
        <p
          className={
            "dayVolume"

               +" " +
            (props.isExpanded ? "featureExpanded" : "featureHidden")
          }
        >
          {props.dayVolume ? props.dayVolume : "-"}
        </p>
        <p
          className={"lastTradeTime"}
        >
          {convertDate(props.latestTime)}
        </p>
        <p
          className={"prevClose"
                      +" " +
            (props.isExpanded ? "featureExpanded" : "featureHidden") }
        >
          ${(Number(props.prevClose).toFixed(2))}
        </p>
         <p
          className={"open"
                      +" " +
            (props.isExpanded ? "featureExpanded" : "featureHidden") }
        >
          ${Number(props.open).toFixed(2) }
        </p>
        <p
          className={"low"
                      +" " +
            (props.isExpanded ? "featureExpanded" : "featureHidden") }
        >
          ${Number(props.low).toFixed(2) }
        </p>
        <p
          className={"high"
                      +" " +
            (props.isExpanded ? "featureExpanded" : "featureHidden") }
        >
          ${Number(props.high).toFixed(2) }
        </p>
      </div>

    );
  }
}

export default FeatureStock
