import React from "react";
import "./MainPage.scss";

function MainPage() {
    return (
      <div className="container">
        <ul className="mainPage">
          <li className="drinks">
            <button className="button">
                <img src="./pictures/colddrink.png" alt="cold drink"></img>
            </button>
           Cold drinks
          </li>
          <li className="drinks">
            <button className="button">
                <img src="./pictures/hotdrink.png" alt="hot drink"></img>
            </button>
            Hot drinks
          </li>
        </ul>
      </div>
    );
  }
  
  export default MainPage;
  