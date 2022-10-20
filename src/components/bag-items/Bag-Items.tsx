import {useState} from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Collapse from "@mui/material/Collapse";

import {useAppDispatch, useAppSelector} from "../../assets/hooks";

import EachBagItem from "./item/Item";

const BagItemsComponent = () => {
  const [updateItem, setUpdateItem] = useState<null | string>(null);
  const [animate, setAnimate] = useState(false);
  const dispatch = useAppDispatch();

  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const bag_items = useAppSelector(state => state.product.bag);

  // console.log(bag_items);

  return (
    <TransitionGroup component="div" className="bag-component-container">
      {bag_items.length > 0 &&
        bag_items.map((item, key) => (
          <Collapse key={item.sub_id || key} timeout={500}>
            <CSSTransition timeout={700} classNames="item">
              <EachBagItem
                item={item}
                updateItem={updateItem}
                setUpdateItem={setUpdateItem}
              />
            </CSSTransition>
          </Collapse>
        ))}
    </TransitionGroup>
  );
};

export default BagItemsComponent;
