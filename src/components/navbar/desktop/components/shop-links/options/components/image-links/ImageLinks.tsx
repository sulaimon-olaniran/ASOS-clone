interface iProps {
  links: {
    title: string;
    image: string;
    background: boolean;
  }[];

  flexDirection: string;
}

const ImageLinksComponent = ({links, flexDirection}: iProps) => (
  <div className="image-links-container">
    <div className={`image-links-contents links-content-${flexDirection}`}>
      {links.map((link, index) => (
        <div className="image-link-each-content" key={index}>
          <div className="content-image-container">
            <img src={link.image} alt="" />
            {link.background && <div className="content-image-overlay" />}

            <div className="content-image-title-container">
              <span>{link.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ImageLinksComponent;
