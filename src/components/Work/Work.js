import React from "react";
import "./Work.css";
import { card1, card2, card3, card4, card5, card6 } from "../../assets";
const Work = () => {
  return (
    <div className="workContainer">
      <div className="workHeading" style={{marginLeft:"8vw"}}>
        <div >
          <span className="workHeadingspan">
            How Does The <span className="tbswork">TBS Work</span>
          </span>
        </div>
        <div className="workPara">
          <p>
            Adipiscing at in tellus integer. Pellentesque massa placerat duis
            ultricies. Venenatis cras
          </p>
        </div>
      </div>
      <div className="workCardContainer" style={{marginLeft:"5vw"}}>
        <div className="workCard">
          <div className="workCard1">
            <div className="workCardImg">
              <img src={card1} alt="" className="workCardImgg" />
            </div>
            <div className="cardHeading">
              <span>Discuss with Colleagues</span>
            </div>
            <div className="cardPara">
              <p>
                Working online is the same experience as work ing in an office.
                This will be. achieved with..
              </p>
            </div>
            <div className="cardButton">
              <button className="button1">Try Now</button>
              <button className="button2">Explore Now</button>
            </div>
          </div>
        </div>
        <div className="workCard">
          <div className="workCard1">
            <div className="workCardImg">
              <img src={card2} alt="" className="workCardImgg" />
            </div>
            <div className="cardHeading">
              <span>Virtual Reality Concerts</span>
            </div>
            <div className="cardPara">
              <p>
                Working online is the same experience as work ing in an office.
                This will be. achieved with..
              </p>
            </div>
            <div className="cardButton">
              <button className="button1">Try Now</button>
              <button className="button2">Explore Now</button>
            </div>
          </div>
        </div>
        <div className="workCard">
          <div className="workCard1">
            <div className="workCardImg">
              <img src={card3} alt="" className="workCardImgg" />
            </div>
            <div className="cardHeading">
              <span>Playing Games</span>
            </div>
            <div className="cardPara">
              <p>
                Working online is the same experience as work ing in an office.
                This will be. achieved with..
              </p>
            </div>
            <div className="cardButton">
              <button className="button1">Try Now</button>
              <button className="button2">Explore Now</button>
            </div>
          </div>
        </div>
        <div className="workCard">
          <div className="workCard1">
            <div className="workCardImg">
              <img src={card4} alt="" className="workCardImgg" />
            </div>
            <div className="cardHeading">
              <span>Online Travel</span>
            </div>
            <div className="cardPara">
              <p>
                Working online is the same experience as work ing in an office.
                This will be. achieved with..
              </p>
            </div>
            <div className="cardButton">
              <button className="button1">Try Now</button>
              <button className="button2">Explore Now</button>
            </div>
          </div>
        </div>
        <div className="workCard">
          <div className="workCard1">
            <div className="workCardImg">
              <img src={card5} alt="" className="workCardImgg" />
            </div>
            <div className="cardHeading">
              <span>Artworks</span>
            </div>
            <div className="cardPara">
              <p>
                Working online is the same experience as work ing in an office.
                This will be. achieved with..
              </p>
            </div>
            <div className="cardButton">
              <button className="button1">Try Now</button>
              <button className="button2">Explore Now</button>
            </div>
          </div>
        </div>
        <div className="workCard">
          <div className="workCard1">
            <div className="workCardImg">
              <img src={card6} alt="" className="workCardImgg" />
            </div>
            <div className="cardHeading">
              <span>Digital Clothing</span>
            </div>
            <div className="cardPara">
              <p>
                Working online is the same experience as work ing in an office.
                This will be. achieved with..
              </p>
            </div>
            <div className="cardButton">
              <button className="button1">Try Now</button>
              <button className="button2">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
