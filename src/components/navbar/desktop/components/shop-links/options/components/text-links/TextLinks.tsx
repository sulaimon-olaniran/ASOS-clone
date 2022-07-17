interface iProps {
  links: {
    link: string;
    isImportant?: boolean;
    redText?: boolean;
  }[];

  title: string;
  column: number;
}
const TextLinksComponent = ({links, title, column}: iProps) => {
  return (
    <div className="text-links-component-container">
      <div className="text-links-component-header-container">
        <h4>
          <span>{title}</span>
        </h4>
      </div>

      <div className={`text-links-component-links-container-${column}`}>
        {links.map((link, index: number) => (
          <p
            //className={link.isImportant ? "link-is-important" : ""}
            className={`${link.isImportant && "link-is-important"} ${
              link.redText && "link-red-text"
            }`}
            key={index}
          >
            <span>{link.link}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default TextLinksComponent;
