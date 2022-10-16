import {useState} from "react";

import {getPercentage} from "../../../assets/functions";
import {savedItem} from "../../../assets/types";
import {useAppDispatch} from "../../../assets/hooks";
import {unsaveProduct} from "../../../state/actions-creator/product";
import {updateSavedProductSize} from "../../../state/actions-creator/product";
import {productVariant} from "../../product/types";

interface componentProps {
  item: savedItem;
}

const SavedItem = ({item}: componentProps) => {
  const [size, setSize] = useState(item.selected_size);
  const [variant, setVariant] = useState<productVariant>({});

  const dispatch = useAppDispatch();

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    const selected_variant =
      item.variants && item.variants.find(item => item.brandSize === value);

    setSize(value);
    setVariant(selected_variant || {});

    dispatch(updateSavedProductSize(value, item.id || 0));
  };

  const handleUnsaveProduct = () => {
    dispatch(unsaveProduct(item.id || 0));
  };

  return (
    <div className="saved-item-container">
      <div className="saved-item-image-container">
        <div className="remove-item-button" onClick={handleUnsaveProduct}>
          <span />
        </div>

        <div className="image-container">
          <img src={`https://${item.image}`} alt="" />

          <div
            className={`saved-item-low-in-stock ${
              variant.isLowInStock && "low-in-stock-active"
            }`}
          >
            <span>Low in stock</span>
          </div>
        </div>
      </div>

      <div className="saved-item-name-container">
        <span>{item.name}</span>
      </div>

      <div className="saved-item-price-container">
        <span>{item.price?.current.text}</span>
      </div>

      <div className="saved-item-colour-container">
        <span>{item.colour}</span>
      </div>

      <div className="saved-item-size-selection-container">
        {item.isNoSize || item.isOneSize ? (
          <div className="no-size-container">
            <span>No size</span>
          </div>
        ) : (
          <select aria-label="Size" value={size} onChange={handleSizeChange}>
            {size === "" && <option value="">Select size</option>}

            {item.variants?.map((variant, key) => (
              <option
                key={key}
                value={variant.brandSize}
                disabled={!variant.isAvailable}
              >
                {variant.brandSize}
              </option>
            ))}
          </select>
        )}
      </div>

      <div
        className={`saved-item-add-to-bag-button ${
          !item.isNoSize && size === "" && !item.isOneSize && "disable-button"
        }`}
      >
        <span>Move to bag</span>
      </div>
    </div>
  );
};

export default SavedItem;
