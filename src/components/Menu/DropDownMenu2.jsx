import React, { useState, useEffect } from "react";
import "../../assets/css/dropdown.css";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import listCoin from "../../api/listCoinAPI";

function DropDownMenu2() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await listCoin.get();
        setList(response.data.data);
      } catch (error) {
        console.log(error);
      }
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
                <Link to={`/btc/${coin.coin_id} `}>
                  <MenuItem
                    iconUrl={coin.logo}
                    nameCoin={coin.name}
                    priceCoin="451616"
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
