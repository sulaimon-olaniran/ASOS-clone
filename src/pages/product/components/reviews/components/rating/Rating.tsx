const CustomerRating = () => {
  return (
    <div className="customer-rating-container">
      <h3>Customer Rating</h3>

      <div className="each-customer-rating size">
        <div className="rating-type">
          <div className="rating-icon size" /> <span>Size:</span>
        </div>

        <div className="rating-content-container">
          <div className="rating-value">
            <div style={{left: "21%"}} />
          </div>

          <div className="rating-ranges">
            <div className="left-range-title">
              <span>Runs Small</span>
            </div>
            <div className="right-range-title">
              <span>Runs Large</span>
            </div>
          </div>
        </div>
      </div>

      <div className="each-customer-rating comfort">
        <div className="rating-type">
          <div className="rating-icon comfort" /> <span>Comfort:</span>
        </div>

        <div className="rating-content-container">
          <div className="rating-value">
            <div style={{left: "45%"}} />
          </div>

          <div className="rating-ranges">
            <div className="left-range-title">
              <span>Uncomfortable</span>
            </div>
            <div className="right-range-title">
              <span>Comfortable</span>
            </div>
          </div>
        </div>
      </div>

      <div className="each-customer-rating comfort">
        <div className="rating-type">
          <div className="rating-icon quality" /> <span>Quality:</span>
        </div>

        <div className="rating-content-container">
          <div className="rating-value">
            <div style={{left: "65%"}} />
          </div>

          <div className="rating-ranges">
            <div className="left-range-title">
              <span>Poor</span>
            </div>
            <div className="right-range-title">
              <span>Great</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRating;
