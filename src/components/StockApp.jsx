import React from 'react';

import Footer from './Footer';
import Modal from './Modal';
import FeatureStock from './FeatureStock';
import StockGet from './StockGet';
import Presets from './Presets';
import Intro from './Intro';

import { FaCannabis, FaKeyboard, FaLightbulb, FaBookmark, FaRing, FaPen, FaIndustry, FaSun, FaMoneyBill, FaPrescription, FaToiletPaper, FaPlusSquare } from 'react-icons/fa'


class StockApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      stockInput: "",
      noStock: false,
      stocksDisplayed: true,
      presetsListDisplay: false,
      showModal: false,
      modalText: "",

      presets: {
        INDEX: { tickers: ["SPY", "DOW", "NSQ"], iconTag: <FaBookmark /> },
        BIOTECH: { tickers: ["MRK", "PFE", "MRNA"], iconTag: <FaPrescription /> },
        HEALTH: { tickers: ["CNC", "ALGN", "CVS", "ICLR", "ABBV"], iconTag: <FaPlusSquare /> },
        "CONSUMER DISC.": { tickers: ["WMT", "MCD", "XLY", "AMZN"], iconTag: <FaMoneyBill /> },
        "CONSUMER STAPLES": { tickers: ["VDC", "XLP", "IEV", "SRCS"], iconTag: <FaToiletPaper /> },
        INDUSTRIAL: { tickers: ["XLI", "VIS", "IYT"], iconTag: <FaIndustry /> },
        CANNABIS: {
          tickers: ["ACB", "CGC", "CRON", "TLRY"],
          iconTag: <FaCannabis data-key="CANNABIS" />
        },
        FAANG: {
          tickers: ["META", "AMZN", "AAPL", "NFLX", "GOOG"],
          iconTag: <FaKeyboard />
        },
        ENERGY: { tickers: ["ENB", "SU", "CNQ", "DVN"], iconTag: <FaSun /> },
        UTILITIES: {
          tickers: ["EXC", "AES", "SCG", "FE"],
          iconTag: <FaLightbulb />
        },
        METALS: { tickers: ["BAR", "GLD", "LIT"], iconTag: <FaRing /> },

        myStocks: { tickers: [], iconTag: <FaPen /> }
      },
      searchActive: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.stockSearch = this.stockSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resizeStock = this.resizeStock.bind(this);
    this.togglePresetsDisplay = this.togglePresetsDisplay.bind(this);
    this.presetDisplay = this.presetDisplay.bind(this);
    this.closeAllStocks = this.closeAllStocks.bind(this);
    this.displayModal = this.displayModal.bind(this);
    this.addToCustom = this.addToCustom.bind(this);
    this.removeFromCustom = this.removeFromCustom.bind(this);
    this.toggleCustomDisplay = this.toggleCustomDisplay.bind(this);
    this.convertCap = this.convertCap.bind(this);
  }
  componentWillUnmount() {
    // Clears the stocks list and stock input when the component is unmounted
    this.setState({
      stocks: [],
      stockInput: ""
    });
  }
  
  handleChange(event) {
    // Updates the stock input value in the component's state
    const { value } = event.target;
    this.setState({
      stockInput: value
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
  
    // Focuses on the input field after submitting the form
    event.target.childNodes[1].focus();
  
    // Activates the search if it's not already active
    if (!this.state.searchActive) {
      this.setState({ searchActive: !this.state.searchActive });
    }
  
    // Checks if the stock already exists in the stocks list
    const checkInput = this.state.stocks.some(el => el.symbol === this.state.stockInput.toUpperCase());
    if (!checkInput) {
      // Performs a stock search if the stock doesn't already exist in the list
      this.stockSearch(this.state.stockInput);
    }
  }
  
  handleClick(event) {
    event.stopPropagation();
    event.preventDefault();
    
    let targetClass = event.target.className;
    switch (targetClass) {
      case "closeBox":
        // Closes the stock when the close button is clicked
        this.closeStock(event);
        break;
      case "addToCustom":
        // Adds the stock to the custom list when the "Add to Custom" button is clicked
        this.addToCustom(event);
        break;
      case "removeToCustom":
        // Removes the stock from the custom list when the "Remove from Custom" button is clicked
        this.removeToCustom(event);
        break;
      default:
        // Resizes the stock when any other part of the stock box is clicked
        this.resizeStock(event);
    }
  }
  
  convertCap(cap) {
    let length = cap.length;
    let num;
    let suffix;
  
    if (length >= 9) {
      // Converts the market capitalization to billion scale
      num = cap / 1e9;
      num.toFixed(1);
      suffix = "billion";
      console.log(num + suffix);
    } else if (length < 9 && length > 6) {
      // Converts the market capitalization to million scale
      num = cap / 1e6;
      num.toFixed(1);
      suffix = "million";
      console.log(num + suffix);
    } else if (cap == null) {
      suffix = "-";
      console.log(suffix);
    } else {
      console.log(cap);
    }
  }
  

  displayModal(text) {
    // Displays a modal with the given text
    this.setState({
      showModal: true,
      modalText: text
    });
    
    // After 1000 milliseconds, hides the modal
    setTimeout(() => {
      this.setState({
        showModal: false,
        modalText: ""
      });
    }, 1000);
  }
  
  removeFromCustom(event) {
    event.stopPropagation();
  
    // Retrieves the data key from the parent element
    const dataKey = event.target.parentElement.getAttribute("data-key");
  
    if (this.state.presets.myStocks.tickers.some(el => el === dataKey)) {
      // If the data key exists in the "myStocks" presets, remove it from the list
      let tempPresets = this.state.presets.myStocks.tickers;
      for (let i = 0; i < tempPresets.length; i++) {
        if (tempPresets[i] === dataKey) {
          tempPresets.splice(i, 1);
        }
      }
      // Displays a modal indicating the stock was removed from "myStocks"
      this.displayModal(dataKey + " removed from myStocks");
    } else {
      // Displays a modal indicating the stock is not in "myStocks"
      this.displayModal(dataKey + " not in myStocks");
    }
  }
  
  addToCustom(event) {
    event.stopPropagation();
  
    // Retrieves the data key from the parent element or the target element
    const dataKey = event.target.parentElement.getAttribute("data-key") || event.target.getAttribute("data-key");
  
    if (this.state.presets.myStocks.tickers.some(el => el === dataKey)) {
      // Displays a modal indicating the stock is already in "myStocks"
      this.displayModal(dataKey + " already in myStocks");
    } else {
      // Adds the data key to the "myStocks" presets and displays a modal indicating the stock was added
      let tempPresets = this.state.presets;
      tempPresets.myStocks.tickers.push(dataKey);
      this.setState({
        presets: tempPresets
      });
      this.displayModal(dataKey + " added to myStocks!");
    }
  }
  
  presetDisplay(event) {
    event.stopPropagation();
  
    // Retrieves the data key from the target or the parent's parent element
    const dataKey = (event.target.hasAttribute("data-key") || event.target.parentNode.parentNode.hasAttribute("data-key")) ? event.target.getAttribute("data-key") : null;
  
    if (dataKey) {
      // Logs the data key and performs a stock search for each ticker in the preset
      console.log(dataKey);
      this.state.presets[dataKey].tickers.forEach(async el => {
        await this.stockSearch(el);
      });
    }
  }
  
  togglePresetsDisplay() {
    // Toggles the display of the presets list
    this.setState({
      presetsListDisplay: !this.state.presetsListDisplay,
      presetsListMenuDisplay: !this.state.presetsMenuListDisplay
    });
  }
  
  toggleCustomDisplay() {
    // Toggles the display of the custom view
    this.setState({
      customToggle: !this.state.customToggle
    });
  }
  
  closeStock(e) {
    // Closes a stock by removing it from the stocks list
    let target = e.target;
    let tempStocks = this.state.stocks.slice();
    let symbolOfBox = target.parentNode.getAttribute("data-key");
    tempStocks = tempStocks.filter(el => {
      return el.symbol !== symbolOfBox;
    });
  
    this.setState({
      stocks: tempStocks
    });
  }
  
  resizeStock(e) {
    let eTarget;
    let tempStocks = this.state.stocks.slice();
    let symbolOfBox;
  
    // Determines the target element based on its class name
    if (e.target.className.split(" ").includes("featureStock")) {
      eTarget = e.target;
    } else {
      eTarget = e.target.parentNode;
    }
  
    symbolOfBox = eTarget.getAttribute("data-key");
  
    // Toggles the expanded state of the stock and updates the stocks list
    tempStocks = tempStocks.map(el => {
      if (el.symbol === symbolOfBox) {
        el.isExpanded = !el.isExpanded;
        this.setState({
          stocks: tempStocks
        });
      }
    });
  }
  
  closeAllStocks() {
    // Closes all stocks by clearing the stocks list, stock input, and graph data
    this.setState({
      stocks: [],
      stockInput: "",
      graphData: []
    });
  }
  





  async stockSearch(symbol) {
    if (!symbol) {
      return
    }
    const tdKey = "e1432819e1b743cc8fb8dea7255e1141"

    const addressQuote =
      "https://api.twelvedata.com/quote?symbol=" +
      symbol +
      "&apikey=" +
      tdKey;

    const addressPrice =
      "https://api.twelvedata.com/price?symbol=" +
      symbol +
      "&apikey=" +
      tdKey;




    var currPrice
    try {


      // await fetch(addressPrice)
      //   .then(resp => {
      //     if (resp.status === 404) {
      //       //run function that shakes stockform
      //     }
      //     return resp.json();
      //   })
      //   .then(resp => {
      //     currPrice = resp.price
      //   });





      await fetch(addressQuote)
        .then(resp => {
          if (resp.status === 404) {
            //run function that shakes stockform
          }
          return resp.json();
        })
        .then(resp => {
          let checkIfStock = this.state.stocks.some(el => {
            return el.symbol === resp.symbol;
          });
          if (!checkIfStock) {
            let newStock = {
              stock: resp.name ? resp.name : "-",
              // Temp use closing price instead of two API calls
              price: resp.close,
              symbol: resp.symbol,
              change: resp.change,
              changePercent: resp.percent_change,
              avgTotalVolume: resp.average_volume,
              week52High: resp.fifty_two_week.high,
              week52Low: resp.fifty_two_week.low,
              lastTradeTime: resp.timestamp,
              latestTime: resp.timestamp,
              primaryExchange: resp.exchange,
              dayVolume: resp.volume,
              prevClose: resp.previous_close,
              open: resp.open,
              low: resp.low,
              high: resp.high,
              isExpanded: false,
              isInCustom: false
            };

            this.setState(prevState => ({
              stocks: [newStock, ...prevState.stocks],
              noStock: false,
              stockInput: "",
            }));
            // console.log(this.state.stocks)
          }
        });

    }
    catch (err) {
      console.log("Error handling API. Please wait one minute and try again.")
      this.displayModal("Maximum API calls reached. Please try again in one minute")
      return
    }


  }


  render() {

    const listOfStocks = this.state.stocks.map((item, index) => {
      // console.log("item:"+Number(item.price).toFixed(2))
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
          dayVolume={item.dayVolume}
          prevClose={item.prevClose}
          open={item.open}
          low={item.low}
          high={item.high}
          exchange={item.primaryExchange}
          isExpanded={item.isExpanded}
          handleClick={this.handleClick}
          addToCustom={this.addToCustom}
          removeFromCustom={this.removeFromCustom}
          convertCap={this.convertCap}

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
                ? { "flexDirection": "column" }
                : { "flexDirection": "row" }
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
            className={"waves-effect waves-light " +
              "closeAllStocks" +
              " " +
              (this.state.stocks.length > 0 ? "" : "hideCloseAll")
            }
            onClick={this.closeAllStocks}
          >
            Close All
          </div>
        </div>
        <Modal modalText={this.state.modalText} showModal={this.state.showModal} />


        <Footer />
      </div>
    );
  }
}
export default StockApp
