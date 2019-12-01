import React from 'react';

import Footer from './Footer';
import Modal from './Modal';
import FeatureStock from './FeatureStock';
import StockGet from './StockGet';
import Presets from './Presets';
import Intro from './Intro';
// var Graph = require('./Graph');
import {FaCannabis, FaKeyboard, FaLightbulb , FaBookmark, FaRing, FaPen, FaIndustry, FaSun, FaMoneyBill, FaPrescription, FaToiletPaper,FaPlusSquare} from 'react-icons/fa'

import M from 'materialize-css'

class StockApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      stockInput: "",
      noStock: false,
      stocksDisplayed: true,
      presetsListDisplay: false,
      showModal:false,
      modalText:"",

      //  presetsListMenuDisplay:true,
      presets: {
        CANNABIS: {
          tickers: ["ACB", "APHA", "CGC", "CRON", "TLRY"],
          iconTag: <FaCannabis data-key="CANNABIS"/>
        },
        FAANG: {
          tickers: ["FB", "AMZN", "AAPL", "NFLX", "GOOG"],
          iconTag: <FaKeyboard />
        },
        ENERGY: { tickers: ["ENB", "SU", "CNQ", "DVN"], iconTag: <FaSun /> },
        UTILITIES: {
          tickers: ["EXC", "AES", "SCG", "FE"],
          iconTag: <FaLightbulb />
        },
        METALS: { tickers: ["BAR", "GLD", "LIT"], iconTag: <FaRing /> },
        INDEX: { tickers: ["SPY", "DOW", "NSQ"], iconTag:  <FaBookmark /> },

        BIOTECH: { tickers: ["CELG", "SGEN", "VRTX"], iconTag: <FaPrescription /> },
        HEALTH: { tickers: ["CNC", "ALGN", "CVS","ICLR","ABBV"], iconTag: <FaPlusSquare /> },
        "CONSUMER DISC.": { tickers: ["WMT", "MCD", "XLY","AMZN"], iconTag: <FaMoneyBill /> },
        "CONSUMER STAPLES": { tickers: ["VDC", "XLP", "IEV","SRCS"], iconTag: <FaToiletPaper /> },
        INDUSTRIAL: { tickers: ["XLI", "VIS", "IYT"], iconTag: <FaIndustry /> },
        myStocks: { tickers: [], iconTag: <FaPen /> }
      },
      searchActive: false,
      // graphData:[]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stockSearch = this.stockSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resizeStock = this.resizeStock.bind(this);
    // this.addWeed = this.addWeed.bind(this);
    // this.addFaang= this.addFaang.bind(this);
    this.togglePresetsDisplay = this.togglePresetsDisplay.bind(this);
    //  this.togglePresetsHover = this.togglePresetsHover.bind(this);
    this.presetDisplay = this.presetDisplay.bind(this);
    this.closeAllStocks = this.closeAllStocks.bind(this);
    this.displayModal = this.displayModal.bind(this);
    this.addToCustom = this.addToCustom.bind(this);

    this.removeFromCustom = this.removeFromCustom.bind(this);
    this.toggleCustomDisplay = this.toggleCustomDisplay.bind(this);
    this.convertCap = this.convertCap.bind(this);
  }

  componentDidMount() {
    // M.AutoInit();

  }

  componentDidUpdate() {
    // this.setState({loading:false})
  }

  componentWillUpdate() {
    // this.setState({
    //   loading:true
    // })
  }

  componentWillUnmount() {}

  componentDidUnmount() {
    this.setState({
      stocks: [],
      stockInput: ""
    });
  }

  handleChange(event) {
    const { value } = event.target;
    //if stock doesnt already exist, proceed
 // const inputSelect = document.getElementsByClassname("input")[0];
   //console.log(inputSelect)
  //  inputSelect.select();
    this.setState({
      stockInput: value
    });
    //}
  }

  handleSubmit(event) {
    event.preventDefault();
    event.target.childNodes[1].focus()
  // this.input.focus();
    if (!this.state.searchActive) {
      this.setState({ searchActive: !this.state.searchActive });
    }
    // Check if stock already exists
    const checkInput = this.state.stocks.some(el => {
      return el.symbol === this.state.stockInput.toUpperCase();
    });
    if (checkInput) {
      // setInterval(() => {});
      // return;
    } else {
      this.stockSearch(this.state.stockInput);
    }
  }

  handleClick(event) {
    event.stopPropagation();
     event.preventDefault();
    let targetClass = event.target.className ;
switch(targetClass){
  case "closeBox":
    this.closeStock(event);

  break;
  case "addToCustom":
    this.addToCustom(event);
  break;
  case "removeToCustom":
    this.removeToCustom(event);
  break;
  default:
  // console.log("here")
    this.resizeStock(event);
}





  }
  // displayAddState(addState) {
  //   if (addState) {
  //   }
  // }

  convertCap(cap){

    let length = cap.length;
    console.log(length)
    let num;
    let suffix;
    if (length => 9){
      num = cap / 9;
      num.toFloat(1);
      suffix = "billion";
      console.log( num + suffix);
    }
    else if(length <9 && length>6)
    {
      num = cap / 6;
      num.toFloat(1);
      suffix = "million";
      console.log( num + suffix);
    }
    else if(cap==null){
      suffix= "-"
      console.log( suffix);
    }
    else {console.log( cap)}


  }
  displayModal(text){
    this.setState({
        showModal:true,
        modalText:text
      })
      setTimeout(()=>{
        this.setState({
          showModal:false,
          modalText:""
        })
      },800)
  }
removeFromCustom(event){
  event.stopPropagation();
  const dataKey = event.target.parentElement.getAttribute("data-key");

    if (
      this.state.presets.myStocks.tickers.some(el => {
        return el === dataKey;
      })
    ){
      let tempPresets = this.state.presets.myStocks.tickers;
      for(let i=0;i<tempPresets.length;i++){
        if(tempPresets[i] === dataKey){
          tempPresets.splice(i,1);
        }
      }
      this.displayModal(dataKey + " removed from myStocks")
      //remove from list
    }
  else{
    this.displayModal(dataKey + " not in myStocks")
    //display that stock not in list
  }
}

  addToCustom(event) {
    event.stopPropagation();

    const dataKey = event.target.parentElement.getAttribute("data-key") || event.target.getAttribute("data-key")
    ;
     ;
    if (
      this.state.presets.myStocks.tickers.some(el => {
        return el === dataKey;
      })
    ) {
      this.displayModal(dataKey + " already in myStocks")
      //alert("already in list");
    } else {
      let tempPresets = this.state.presets;
      tempPresets.myStocks.tickers.push(dataKey);
      this.setState({
        presets: tempPresets
      });
      this.displayModal(dataKey + " added to myStocks!")
     // alert("stock added to custom list");
    }
  }

  presetDisplay(event) {
    event.stopPropagation();
    console.log(event.target.getAttribute("data-key"))

    // if(event.target.tagName =="li"){
    //   console.log(" LI ")
    // }

   const dataKey = (event.target.hasAttribute("data-key") || event.target.parentNode.parentNode.hasAttribute("data-key") ) ? event.target.getAttribute("data-key") : null;


     if(dataKey){
    // const dataKey = event.target.getAttribute("data-key") ;
       console.log(dataKey);
      this.state.presets[dataKey].tickers.forEach(el => {
        this.stockSearch(el);
      });
    }
  }

  togglePresetsDisplay() {
    this.setState({
      presetsListDisplay: !this.state.presetsListDisplay,
      presetsListMenuDisplay: !this.state.presetsMenuListDisplay
    });
  }
  // togglePresetsHover(){
  //   this.setState({
  //     presetsListDisplay: !this.state.presetsListDisplay
  //   });
  // }
toggleCustomDisplay(){
  this.setState({
    customToggle: !this.state.customToggle
  })
}
// toggleAddRemoveDisplay(e){
//   let {target}=e;

// }

  closeStock(e) {
    let target = e.target;
    let tempStocks = this.state.stocks.slice();
    let symbolOfBox = target.parentNode.getAttribute("data-key");
    tempStocks = tempStocks.filter(el => {
      return el.symbol !== symbolOfBox;
    });
    //  let tempGraphData = tempGraphData.filter( el =>{
    //   return el.x !== symbolOfBox ;
    // })
    this.setState({
      stocks: tempStocks,
      // graphData: tempGraphData
    });
  }

  resizeStock(e) {
    let eTarget;
    let tempStocks = this.state.stocks.slice();
    let symbolOfBox;
    console.log( e.target.className.split(" "))
    if ( e.target.className.split(" ").includes( "featureStock" ) ) {
      eTarget = e.target;
    }
    // else if (Array(e.target.parentNode.className).includes("price")) {
    //   target = e.target.parentNode.parentNode;
    // }
    else {
      eTarget = e.target.parentNode;
    }
  //  console.log(target)
    symbolOfBox = eTarget.getAttribute("data-key");
    tempStocks = tempStocks.map(el => {
      if (el.symbol == symbolOfBox) {
        el.isExpanded = !el.isExpanded;
        console.log(el.isExpanded);
        //console.log(el);
        this.setState({
          stocks: tempStocks
        });
      }
    });
  //  console.log(target);
  }

  closeAllStocks() {
    this.setState({
      stocks: [],
      stockInput: "",
      graphData:[]
    });
  }

  stockSearch(symbol) {
    const token = "pk_8dc96364d1d94c0db9425f98efde9b4d";
    const address =
      "https://cloud.iexapis.com/stable/stock/" +
      symbol +
      "/quote?token=" +
      token;
    console.log(address);
    fetch(address)
      .then(resp => {
        if (resp.status == 404) {
          //run function that shakes stockform
        }
        return resp.json();
      })
      .then(resp => {
        // this.setState({
        //         animateInput: ""
        //       });
        let checkIfStock = this.state.stocks.some(el => {
          return el.symbol == resp.symbol;
        });
        if (!checkIfStock) {
          let newStock = {
            stock: resp.companyName,
            price: resp.latestPrice,
            symbol: resp.symbol,
            change: resp.change,
            changePercent: resp.changePercent * 100,
            avgTotalVolume: resp.avgTotalVolume,
            week52High: resp.week52High,
            week52Low: resp.week52Low,
            lastTradeTime: resp.lastTradeTime,
            latestTime: resp.latestTime,
            primaryExchange: resp.primaryExchange,
            peRatio: resp.peRatio,
            ytdChange:resp.ytdChange,
            marketCap: resp.marketCap,
            isExpanded: false,
            isInCustom:false
          };
          //  var graphableData = {
          //   x:this.state.graphData.length + 1,
          //   y:resp.changePercent,
          //    y0:0,
          //    label:resp.symbol
          // };
          this.setState({
            stocks: [newStock,...this.state.stocks],
            noStock: false,
            stockInput: "",
           // graphData:[graphableData, ...this.state.graphData]
          });
        console.log(this.state.stocks)
        }
      });
  }

  render() {
    let stockCount = this.state.stocks.length;
    let noStock = this.state.noStock;
    const listOfStocks = this.state.stocks.map((item, index) => {
      if (item.isClosed) {
        return null;
      }

      return (
        <FeatureStock
          key={index}
          stock={item.stock}
          symbol={item.symbol}
          price={item.price}
          change={item.change}
          yearHigh={item.week52High}
          yearLow={item.week52Low}
          avgTotalVol={item.avgTotalVolume}
          latestTime={item.latestTime}
          changePercent={item.changePercent}
          peRatio={item.peRatio}
          marketCap={item.marketCap}
          ytdChange={item.ytdChange}
          exchange={item.primaryExchange}
          isExpanded={item.isExpanded}
          handleClick={this.handleClick}
          addToCustom={this.addToCustom}
          removeFromCustom={this.removeFromCustom}
          convertCap = {this.convertCap}

        />
      );
    });
    return (
      <div>
        <div className="container">
          <Intro />

          <div
            className="searchAndLists"
            style={
              this.state.presetsListDisplay
                ? { "flex-direction": "column" }
                : { "flex-direction": "row" }
            }
          >
            <StockGet
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              stockInput={this.state.stockInput}
              searchActive={this.state.searchActive}
            />
            <Presets
              togglePresetsDisplay={this.togglePresetsDisplay}
              presetsListDisplay={this.state.presetsListDisplay}
              presetDisplay={this.presetDisplay}
              //togglePresetsHover={this.togglePresetsHover}
              presets={this.state.presets}
            />
          </div>

          <div className="list">{listOfStocks}</div>
          <div
            className={"waves-effect waves-light "+
              "closeAllStocks" +
              " " +
              (this.state.stocks.length > 0 ? "" : "hideCloseAll")
            }
            onClick={this.closeAllStocks}
          >
            Close All
          </div>
        </div>
        <Modal modalText={this.state.modalText} showModal={this.state.showModal}/>


        <Footer />
      </div>
    );
  }
}
export default StockApp
