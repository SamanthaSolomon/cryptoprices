import React from "react"
//used to avoid using a tags, because a tags make a new server request
import {Link} from "react-router-dom"

const Nav = (props) => {
    return (
      <div className="nav">
          {/* to prop changes the link in the url to whatever the value is */}
        <Link to="/">
          <div>CRYPTO PRICES</div>
        </Link>
        <Link to="/currencies">
          <div>CURRENCIES</div>
        </Link>
      </div>
    );
  };

  export default Nav