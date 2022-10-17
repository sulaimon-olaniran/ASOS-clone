import {useState} from "react";

import {bagItem} from "../../../assets/types";
import {useAppDispatch} from "../../../assets/hooks";
import {updateProductInBag} from "../../../state/actions-creator/product";

interface componentProps {
  item: bagItem;
}

const EachBagItem = ({item}: componentProps) => {
  const [size, setSize] = useState(item.selected_size);
  const [quantity, setQuantity] = useState(item.quantity);
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const dispatch = useAppDispatch();

  const handleItemSizeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = e.target.value;

    setSize(value);

    const update = {
      sub_id: item.sub_id || "",
      size: value,
    };

    dispatch(updateProductInBag(update));
  };

  const handleItemQuantityChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = e.target.value;

    const value_to_number = parseInt(value);

    setQuantity(value_to_number || 0);

    const update = {
      sub_id: item.sub_id || "",
      quantity: value_to_number,
    };

    dispatch(updateProductInBag(update));
  };

  return (
    <div className="each-bag-item-container">
      <div className="bag-item-image-container">
        <img src={`https://${item.image}`} alt="" />
      </div>

      <div className="bag-item-right-section">
        <div className="bag-item-price-container">
          <span>{item.price?.current.text}</span>
        </div>

        <div className="bag-item-name-container">
          <span>{item.name}</span>
        </div>

        <div className="bag-item-details-container">
          <div className="each-detail">
            <span>{item.colour}</span>
          </div>

          <div className="each-detail">
            <select onChange={handleItemSizeChange} value={size}>
              {item.isNoSize && <option value="">No Size</option>}

              {item.isOneSize && <option value="">One Size</option>}

              {!item.isNoSize &&
                !item.isOneSize &&
                item.variants &&
                item.variants.map(variant => (
                  <option
                    value={variant.brandSize}
                    disabled={!variant.isAvailable}
                  >
                    {variant.brandSize}
                  </option>
                ))}
            </select>
          </div>

          <div className="each-detail">
            <select value={quantity} onChange={handleItemQuantityChange}>
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
  );
};

export default EachBagItem;
