import React from "react"
import { Link } from "react-router-dom";

const Currencies = (props) => {

    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
      ];

    return(
        <div className="currencies">
            {currencies.map((coin) => {
                // destructure name and symbol for each before returning jsx
                const { name, symbol } = coin;

        return (
            // make sure you put the right symbol into the url through interpolation
          <Link key={symbol} to={`/price/${symbol}`}>
              {/* name of the currency */}
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
    )
}

export default Currencies