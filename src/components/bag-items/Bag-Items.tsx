import {useState} from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import {useAppDispatch, useAppSelector} from "../../assets/hooks";

import EachBagItem from "./item/Item";

const BagItemsComponent = () => {
  const [updateItem, setUpdateItem] = useState<null | string>(null);
  const dispatch = useAppDispatch();

  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const bag_items = useAppSelector(state => state.product.bag);

  // console.log(bag_items);

  return (
    <TransitionGroup component="div" className="bag-component-container">
      {bag_items.length > 0 &&
        bag_items.map(item => (
          <CSSTransition key={item.sub_id} timeout={2000} classNames="item">
            <EachBagItem
              item={item}
              updateItem={updateItem}
              setUpdateItem={setUpdateItem}
            />
          </CSSTransition>
        ))}
    </TransitionGroup>
  );
};

export default BagItemsComponent;
