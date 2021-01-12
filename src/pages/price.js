import React from "react"

const Price = (props) => {
    // Our api key from coinapi.io
    const apiKey = "76D79020-D5CE-4CB9-A06B-C4A761AB201C"

  // Grabbing the Currency symbol from the URL Param
    const symbol = props.match.params.symbol

  // Using the other two variables to create our URL
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    //state to hold the coin data
    const [coin, setCoin] = React.useState(null);

    //function to fetch coin data
    const getCoin = async () => {
        //fetch the data from the source (already stored int he url component)
        const response = await fetch(url);
        //take the response and turn into js
        const data = await response.json();
        //set the data
        setCoin(data);
    };

    // useEffect to run getCoin when component mounts, only once when one component is remove and another is put in its place
        React.useEffect(() => {
        getCoin();
        }, []);
    
    // loaded function for when data is fetched
        const loaded = () => {
            return (
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
                <h2>{coin.rate}</h2>
            </div>
            );
        };

        // Function for when data doesn't exist
            const loading = () => {
                return <h1>Loading...</h1>;
            };

            //router props has a part called history with a function called push which work like the link function
            const backToMain = () => {
                props.history.push("/")
            }    
        
        // if coin has data, run the loaded function, otherwise, run loading
        return (
            <div>
                <h1 onClick={backToMain}>Go Back to Main Page</h1>
                {coin ? loaded() : loading()}
            </div>
        )
    };


export default Price