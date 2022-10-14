import {savedItem} from "../../assets/types";
import {useAppSelector} from "../../assets/hooks";

import SavedItem from "./saved-item/Saved-Item";

const SavedList = () => {
  const saved_items = useAppSelector(state => state.product.saved);

  return (
    <div className="saved-list-container">
      <div className="saved-list-header-container">
        <h1>Saved Items</h1>
      </div>

      <div className="saved-items-overview">
        <div className="items-select-sort-by">
          <select className="sort-by-select" aria-label="Sort by">
            <option value="datedesc">Recently added</option>
            <option value="dateasc">Expiring soonest</option>
            <option value="recentlydiscounted">Recently discounted</option>
            <option value="discount">% discount</option>
            <option value="pricedesc">Price: high to low</option>
            <option value="priceasc">Price: low to high</option>
            <option value="brandasc">Brand A-Z</option>
            <option value="branddesc">Brand Z-A</option>
            <option value="stock">Stock level</option>
          </select>
        </div>

        <div className="items-count">
          <span>
            {saved_items.length} item{saved_items.length > 1 && "s"}
          </span>
        </div>
      </div>
      <div className="saved-list-item-listed-container">
        {saved_items.map(item => {
          return <SavedItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default SavedList;
