import {TextLinksComponent, BodyFitComponent} from "../components";

import {useAppSelector} from "../../../../../../../assets/hooks";
import {menSalesLink, womenSalesLink} from "./assets/data/data";

interface Product {
  link: string;
  important?: boolean;
}

const SaleOptionType = () => {
  const page = useAppSelector(state => state.app.gender);

  const salesLink = page === "women" ? womenSalesLink : menSalesLink;

  return (
    <div className="sale-option-type-container">
      <div className="shop-by-product-container">
        <TextLinksComponent
          links={salesLink.productLinks}
          column={2}
          title="Shop by product"
        />
      </div>

      <div className="shop-by-edit-container">
        <TextLinksComponent
          links={salesLink.editLinks}
          column={1}
          title="Shop by edit"
        />
      </div>

      <div className="shop-sale-by-body-fit-container">
        <BodyFitComponent
          fits={salesLink.sizeLinks}
          header="Shop sale by body fit"
        />
      </div>
    </div>
  );
};

export default SaleOptionType;
