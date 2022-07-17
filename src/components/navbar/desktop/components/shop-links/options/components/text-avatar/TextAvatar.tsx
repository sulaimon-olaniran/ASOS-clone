interface iProps {
  avatarLinks: {
    image: string;
    title: string;
  }[];

  header: string;
  column?: number;
}

const TextAvatarComponent = ({avatarLinks, header, column}: iProps) => (
  <div className="text-avatar-component-container">
    <div className="text-avatar-component-header-container">
      <h4>
        <span>{header}</span>
      </h4>
    </div>

    <div
      className={`text-avatar-component-contents-container columns-${column}`}
    >
      {avatarLinks.map((link, index) => (
        <div className="each-text-avatar-link" key={index}>
          <div className="link-avatar-container">
            <img src={link.image} />
          </div>

          <div className="link-text-container">
            <span>{link.title}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TextAvatarComponent;
