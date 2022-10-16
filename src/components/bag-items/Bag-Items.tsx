import {useAppDispatch, useAppSelector} from "../../assets/hooks";

const BagItemsComponent = () => {
  const dispatch = useAppDispatch();

  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="bag-component-container">
      <div className="each-bag-item-container">
        <div className="bag-item-image-container">
          <img
            src="https://images.asos-media.com/products/asos-design-ribbon-choker-with-puff-heart-pendant-in-silver-tone/203221962-1-silver"
            alt=""
          />
        </div>

        <div className="bag-item-right-section">
          <div className="bag-item-price-container">
            <span>£5.50</span>
          </div>

          <div className="bag-item-name-container">
            <span>
              ASOS DESIGN ribbon choker with puff heart pendant in silver tone
            </span>
          </div>

          <div className="bag-item-details-container">
            <div className="each-detail">
              <span>Silver</span>
            </div>

            <div className="each-detail">
              <select>
                <option>No Size</option>
              </select>
            </div>

            <div className="each-detail">
              <select>
                {quantities.map(quantity => (
                  <option key={quantity} value={quantity}>
                    {quantity}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="save-for-later-button">
            <div className="heart-icon" />
            Save for later
          </div>
        </div>

        <div className="remove-bag-item-button"></div>
      </div>

      <div className="each-bag-item-container">
        <div className="bag-item-image-container">
          <img
            src="https://images.asos-media.com/products/asos-design-ribbon-choker-with-puff-heart-pendant-in-silver-tone/203221962-1-silver"
            alt=""
          />
        </div>

        <div className="bag-item-right-section">
          <div className="bag-item-price-container">
            <span>£5.50</span>
          </div>

          <div className="bag-item-name-container">
            <span>
              ASOS DESIGN ribbon choker with puff heart pendant in silver tone
            </span>
          </div>

          <div className="bag-item-details-container">
            <div className="each-detail">
              <span>Silver</span>
            </div>

            <div className="each-detail">
              <select>
                <option>No Size</option>
              </select>
            </div>

            <div className="each-detail">
              <select>
                {quantities.map(quantity => (
                  <option key={quantity} value={quantity}>
                    {quantity}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="save-for-later-button">
            <div className="heart-icon" />
            Save for later
          </div>
        </div>

        <div className="remove-bag-item-button"></div>
      </div>

      <div className="each-bag-item-container">
        <div className="bag-item-image-container">
          <img
            src="https://images.asos-media.com/products/asos-design-ribbon-choker-with-puff-heart-pendant-in-silver-tone/203221962-1-silver"
            alt=""
          />
        </div>

        <div className="bag-item-right-section">
          <div className="bag-item-price-container">
            <span>£5.50</span>
          </div>

          <div className="bag-item-name-container">
            <span>
              ASOS DESIGN ribbon choker with puff heart pendant in silver tone
            </span>
          </div>

          <div className="bag-item-details-container">
            <div className="each-detail">
              <span>Silver</span>
            </div>

            <div className="each-detail">
              <select>
                <option>No Size</option>
              </select>
            </div>

            <div className="each-detail">
              <select>
                {quantities.map(quantity => (
                  <option key={quantity} value={quantity}>
                    {quantity}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="save-for-later-button">
            <div className="heart-icon" />
            Save for later
          </div>
        </div>

        <div className="remove-bag-item-button"></div>
      </div>
    </div>
  );
};

export default BagItemsComponent;
