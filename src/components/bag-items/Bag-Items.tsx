import {useState} from "react";

import {useAppDispatch, useAppSelector} from "../../assets/hooks";

import EachBagItem from "./item/Item";

const BagItemsComponent = () => {
  // const [quantity, setQuantity] =
  const dispatch = useAppDispatch();

  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const bag_items = useAppSelector(state => state.product.bag);

  // console.log(bag_items);

  return (
    <div className="bag-component-container">
      {bag_items.length > 0 &&
        bag_items.map(item => <EachBagItem key={item.sub_id} item={item} />)}
    </div>
  );
};

export default BagItemsComponent;
