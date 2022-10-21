import {useState} from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Collapse from "@mui/material/Collapse";

import {useAppDispatch, useAppSelector} from "../../assets/hooks";

import EachBagItem from "./item/Item";

interface componentProps {
  used_in?: string;
}

const BagItemsComponent = ({used_in}: componentProps) => {
  const [updateItem, setUpdateItem] = useState<null | string>(null);
  const [animate, setAnimate] = useState(false);
  const dispatch = useAppDispatch();

  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const bag_items = useAppSelector(state => state.product.bag);

  // console.log(bag_items);

  return (
    <TransitionGroup component="div" className="bag-component-container">
      {bag_items.length > 0 &&
        bag_items.map((item, index) => (
          <Collapse key={item.sub_id || index} timeout={500}>
            <CSSTransition timeout={700} classNames="item">
              <EachBagItem
                item={item}
                updateItem={updateItem}
                setUpdateItem={setUpdateItem}
                used_in={used_in}
                index={index}
              />
            </CSSTransition>
          </Collapse>
        ))}
    </TransitionGroup>
  );
};

export default BagItemsComponent;
