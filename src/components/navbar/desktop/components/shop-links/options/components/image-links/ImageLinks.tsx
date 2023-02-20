import {Link} from "react-router-dom";
import {returnSubType} from "../../../../../../../../assets/functions";

import {useAppSelector} from "../../../../../../../../assets/hooks";

interface iProps {
  links: {
    title: string;
    image: string;
    background: boolean;
    cat_id?: number;
  }[];
  type?: string;
  flexDirection: "row" | "column";
}

const ImageLinksComponent = ({links, flexDirection, type}: iProps) => {
  const shop_gender = useAppSelector(state => state.app.gender);

  return (
    <div className="image-links-container">
      <div className={`image-links-contents links-content-${flexDirection}`}>
        {links.map((link, index) => {
          const sub_type = returnSubType(link.title);

          const products_link = `/${shop_gender}/category/${type}/${sub_type}/${link.cat_id}`;
          return (
            <Link
              to={products_link}
              className="image-link-each-content"
              key={index}
            >
              <div className="content-image-container">
                <img src={link.image} alt="" />
                {link.background && <div className="content-image-overlay" />}

                <div className="content-image-title-container">
                  <span>{link.title}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ImageLinksComponent;
