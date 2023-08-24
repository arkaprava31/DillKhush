import React from "react";
import "./Testimonial.css";
import { name1, star } from "../../assets";
const Testimonial = () => {
  return (
    <div className="testimonialContainer">
      <div className="testimonialheading">
        <span className="testimonialheading1">What Clients Say</span>
        <span className="testimonialheading2">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </span>
      </div>
      <div className="testimonialbody">
        <div className="testcards">
          <div className="testcard">
            <div className="rating">
              <img src={star} alt="img" className="ratingimg" />
              <img src={star} alt="img" className="ratingimg" />
              <img src={star} alt="img" className="ratingimg" />
              <img src={star} alt="img" className="ratingimg" />
              <img src={star} alt="img" className="ratingimg" />
            </div>
            <div className="desct">
              <span className="testdesc">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </span>
            </div>
            <div className="name">
              <div className="nameimg">
                <img src={name1} alt="img" className="nameimgg" />
              </div>
              <div className="nametext">
                <span className="nametexts">Regina Miles</span>
                <span className="nametextss">Designer</span>
              </div>
            </div>
          </div>
          <div className="testcard">
            <div className="rating">
              <img src={star} alt="img" className="ratingimg" />
              <img src={star} alt="img" className="ratingimg" />
              <img src={star} alt="img" className="ratingimg" />
              <img src={star} alt="img" className="ratingimg" />
              <img src={star} alt="img" className="ratingimg" />
            </div>
            <div className="desct">
              <span className="testdesc">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </span>
            </div>
            <div className="name">
              <div className="nameimg">
                <img src={name1} alt="img" className="nameimgg" />
              </div>
              <div className="nametext">
                <span className="nametexts">Regina Miles</span>
                <span className="nametextss">Designer</span>
              </div>
            </div>
          </div>
          <div className="testcard">
            <div className="rating">
              <img src={star} alt="img" className="ratingimg" />
              <img src={star} alt="img" className="ratingimg" />
              <img src={star} alt="img" className="ratingimg" />
              <img src={star} alt="img" className="ratingimg" />
              <img src={star} alt="img" className="ratingimg" />
            </div>
            <div className="desct">
              <span className="testdesc">
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </span>
            </div>
            <div className="name">
              <div className="nameimg">
                <img src={name1} alt="img" className="nameimgg" />
              </div>
              <div className="nametext">
                <span className="nametexts">Regina Miles</span>
                <span className="nametextss">Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
