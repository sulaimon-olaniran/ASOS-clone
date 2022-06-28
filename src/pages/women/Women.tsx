import {useEffect} from "react";

import {ShopPageComponent} from "../../components";

const WomenShoppingPage = () => {
  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  return (
    <div className="Women-shopping-page-container">
      {/* <ShopPageComponent /> */}
    </div>
  );
};

export default WomenShoppingPage;
