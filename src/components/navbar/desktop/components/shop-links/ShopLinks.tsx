import {useState} from "react";

interface linksObject {
  title: string;
  link: string;
}

type linksType = linksObject[];

const ShopLinksNavbarComponent = () => {
  const [showNavOptions, setShowNavOptions] = useState(false);
  const [optionType, setOptionType] = useState("");

  const handleShowNavOptions = (option: string): void => {
    setOptionType(option);
    setTimeout(() => {
      setShowNavOptions(true);
    }, 500);
  };

  const handleHideNavOptions = (): void => {
    setShowNavOptions(false);
  };

  const links: linksType = [
    {
      title: "Sale",
      link: "/men/sale",
    },

    {
      title: "Clothing",
      link: "/men/clothing",
    },
    {
      title: "Shoes",
      link: "/men/clothing",
    },
    {
      title: "Sportswear",
      link: "/men/clothing",
    },
    {
      title: "Accessories",
      link: "/men/clothing",
    },
    {
      title: "Summer",
      link: "/men/clothing",
    },
    {
      title: "Trending now",
      link: "/men/clothing",
    },
    {
      title: "Top man",
      link: "/men/clothing",
    },
    {
      title: "Face + Body",
      link: "/men/clothing",
    },
    {
      title: "Brands",
      link: "/men/clothing",
    },
    {
      title: "Outlet",
      link: "/men/clothing",
    },
    {
      title: "Marketplace",
      link: "/men/clothing",
    },
  ];

  return (
    <nav className="shopping-links-navbar-component">
      <div className="shooping-links-navbar-component-inner-container">
        {links.map(link => (
          <div
            key={link.title}
            className={`shopping-link-button ${
              link.title === "Sale" ? "add-red-background" : ""
            }
            ${link.title === "Outlet" ? "add-red-background" : ""}
             `}
            // onMouseEnter={() => handleShowNavOptions(link.title)}
            // onMouseLeave={handleHideNavOptions}
          >
            <p>{link.title}</p>
          </div>
        ))}
        <div
          className={`shopping-links-navbar-options-container ${
            showNavOptions && "show-nav-options"
          }`}
        ></div>
      </div>
    </nav>
  );
};

export default ShopLinksNavbarComponent;
