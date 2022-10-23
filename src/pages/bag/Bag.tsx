import {BagItemsComponent} from "../../components";
import {useAppSelector} from "../../assets/hooks";

import NoBagItems from "./no-items/No-items";
import {getBagTotalAmount} from "../../assets/functions";

const BagPage = () => {
  const bag_items = useAppSelector(state => state.product.bag);

  const final_bag_amount = getBagTotalAmount(bag_items);

  return (
    <div className="bag-page-container">
      {bag_items.length === 0 ? (
        <NoBagItems />
      ) : (
        <div className="bag-page-inner-container">
          <div className="bag-page-bag-information-section">
            <div className="bag-information-header">
              <h1>My Bag</h1>
              <p>Items are reserved for 60 minutes</p>
            </div>

            <div className="bag-items-list-container">
              <BagItemsComponent />
            </div>

            <div className="bag-information-sub-total">
              <span>Sub-Total</span>
              <span>${final_bag_amount}</span>
            </div>

            <div className="free-delivery-information">
              <div className="truck-icon" />
              <div className="free-delivery-header">
                <span>FREE* STANDARD DELIVERY</span>
              </div>
              <p>Faster delivery options available to most countries.</p>
              <p>More info</p>
            </div>

            <div className="moved-items-information">
              <h1>Wondering where your items have gone?</h1>

              <p>No worried - you'll find them in your Saved Items.</p>

              <div className="view-all-saved-items-button">
                <span>View all saved items</span>
              </div>
            </div>
          </div>
          <section className="bag-page-checkout-section">
            <div className="bag-checkout-header">
              <h1>Total</h1>
            </div>

            <div className="bag-checkout-body">
              <div className="sub-total-container">
                <h3>Sub-total</h3>
                <span>${final_bag_amount}</span>
              </div>

              <div className="delivery-information-container">
                <h3>Delivery</h3>
                <div className="info-icon" />
              </div>

              <div className="delivery-type-container">
                <select className="delivery-type-select">
                  <option>Standard Delivery (£17.50)</option>
                </select>
              </div>
            </div>

            <div className="bag-checkout-checkout-button">
              <span>Checkout</span>
            </div>

            <div className="checkout-accepted-cards">
              <h3>We ACCEPT :</h3>

              <div className="accepted-cards-image-container">
                <img
                  src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
                  alt=""
                />
              </div>

              <span>Got a discout code? Add it in the next step.</span>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default BagPage;
