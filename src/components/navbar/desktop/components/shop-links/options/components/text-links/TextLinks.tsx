import {Link} from "react-router-dom";

import {useAppSelector} from "../../../../../../../../assets/hooks";

interface iProps {
  links: {
    link: string;
    isImportant?: boolean;
    redText?: boolean;
    cat_id?: number;
  }[];

  title: string;
  column: number;
  type?: string;
}
const TextLinksComponent = ({links, title, column, type}: iProps) => {
  const shop_gender = useAppSelector(state => state.app.gender);

  return (
    <div className="text-links-component-container">
      <div className="text-links-component-header-container">
        <h4>
          <span>{title}</span>
        </h4>
      </div>

      <div className={`text-links-component-links-container-${column}`}>
        {links.map((link, index: number) => {
          const sub_type = link.link.includes("+")
            ? link.link.replace(" + ", "-")
            : link.link.replace(" ", "-");

          const products_link = `/${shop_gender}/category/${type}/${sub_type}/${link.cat_id}`;
          return (
            <Link
              to={products_link}
              //className={link.isImportant ? "link-is-important" : ""}
              className={`${link.isImportant && "link-is-important"} ${
                link.redText && "link-red-text"
              }`}
              key={index}
            >
              <span>{link.link}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TextLinksComponent;
