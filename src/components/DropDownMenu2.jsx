import React, { useState, useEffect } from "react";
import "../assets/css/dropdown.css";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import axios from "axios";

function DropDownMenu2() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.bitso.com/v3/ticker/?book=btc_usd",
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );
      setList(response.data);
    };
    fetchData();
  }, []);
  return (
    <nav role="navigation">
      <ul>
        <li>
          <a href="#" aria-haspopup="true">
            BTC
          </a>
          <ul className="dropdown" aria-label="submenu">
            {list.map((coin, index) => (
              <li key={index}>
                <Link to={`/btc/${coin.book}`}>
                  <MenuItem
                    iconUrl={coin.logo}
                    nameCoin="btc"
                    priceCoin={coin.last}
                    percent="6.07%"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default DropDownMenu2;
