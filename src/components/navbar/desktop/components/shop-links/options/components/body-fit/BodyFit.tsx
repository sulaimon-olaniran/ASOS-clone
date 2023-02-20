import {Link} from "react-router-dom";
import {returnSubType} from "../../../../../../../../assets/functions";

import {useAppSelector} from "../../../../../../../../assets/hooks";

interface iProps {
  fits: {
    title: string;
    image: string;
    cat_id?: number;
  }[];
  type?: string;
  header: string;
}

const BodyFitComponent = ({fits, header, type}: iProps) => {
  const shop_gender = useAppSelector(state => state.app.gender);

  return (
    <div className="body-fit-component-container">
      <div className="body-fit-component-header-container">
        <h4>
          <span>{header}</span>
        </h4>
      </div>

      <div className="body-fit-component-contents-container">
        {fits.map((fit, index) => {
          const sub_type = returnSubType(fit.title);

          const products_link = `/${shop_gender}/category/${type}/${sub_type}/${fit.cat_id}`;
          return (
            <Link
              to={products_link}
              className="each-body-fit-content-container"
              key={index}
            >
              <div className="content-image-container">
                <img src={fit.image} alt={fit.title} />
              </div>

              <span>{fit.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyFitComponent;
