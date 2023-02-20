import {Link} from "react-router-dom";
import {returnSubType} from "../../../../../../../../assets/functions";

import {useAppSelector} from "../../../../../../../../assets/hooks";

interface iProps {
  avatarLinks: {
    image: string;
    title: string;
    cat_id?: number;
  }[];
  type?: string;
  header: string;
  column?: number;
}

const TextAvatarComponent = ({avatarLinks, header, column, type}: iProps) => {
  const shop_gender = useAppSelector(state => state.app.gender);

  return (
    <div className="text-avatar-component-container">
      <div className="text-avatar-component-header-container">
        <h4>
          <span>{header}</span>
        </h4>
      </div>

      <div
        className={`text-avatar-component-contents-container columns-${column}`}
      >
        {avatarLinks.map((link, index) => {
          const sub_type = returnSubType(link.title);

          const products_link = `/${shop_gender}/category/${type}/${sub_type}/${link.cat_id}`;
          return (
            <Link
              to={products_link}
              className="each-text-avatar-link"
              key={index}
            >
              <div className="link-avatar-container">
                <img src={link.image} alt="" />
              </div>

              <div className="link-text-container">
                <span>{link.title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TextAvatarComponent;
