import {useState} from "react";

import {bagItem} from "../../../assets/types";
import {useAppDispatch} from "../../../assets/hooks";
import {
  updateProductInBag,
  removeProductFromBag,
} from "../../../state/actions-creator/product";

interface componentProps {
  item: bagItem;
  updateItem: null | string;
  setUpdateItem: (value: null | string) => void;
}

const EachBagItem = ({item, updateItem, setUpdateItem}: componentProps) => {
  const [size, setSize] = useState(item.selected_size);
  const [quantity, setQuantity] = useState(item.quantity);
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const dispatch = useAppDispatch();

  const handleItemSizeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = e.target.value;

    setSize(value);

    setUpdateItem(item.sub_id || "");
  };

  const handleItemQuantityChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = e.target.value;

    const value_to_number = parseInt(value);

    setUpdateItem(item.sub_id || "");

    setQuantity(value_to_number || 0);
  };

  const handleUpdateItem = () => {
    const update = {
      sub_id: item.sub_id || "",
      size: size,
      quantity: quantity,
    };

    dispatch(updateProductInBag(update));
    setUpdateItem(null);
  };

  const handleCancelUpdate = () => {
    setSize(item.selected_size);
    setQuantity(item.quantity);
    setUpdateItem(null);
  };

  const handleRemoveItemFromBag = () => {
    dispatch(removeProductFromBag(item.sub_id || ""));
  };

  const updatingCurrent = updateItem !== null && updateItem === item.sub_id;
  const updateIsHappening = updateItem !== null && updateItem !== item.sub_id;

  return (
    <div
      className={`each-bag-item-container ${
        updatingCurrent && "updating-current-item"
      } ${updateIsHappening && "update-is-active"}`}
    >
      {updateIsHappening && <div className="update-is-happening" />}
      <div className="each-bag-item-contents-container">
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
      </div>

      <div className="bag-item-update-actions">
        <button className="cancel-button" onClick={handleCancelUpdate}>
          Cancel
        </button>

        <button className="update-button" onClick={handleUpdateItem}>
          Update
        </button>
      </div>

      <div
        className="remove-bag-item-button"
        onClick={handleRemoveItemFromBag}
      />
    </div>
  );
};

export default EachBagItem;
