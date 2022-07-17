interface iProps {
  fits: {
    title: string;
    image: string;
  }[];

  header: string;
}

const BodyFitComponent = ({fits, header}: iProps) => (
  <div className="body-fit-component-container">
    <div className="body-fit-component-header-container">
      <h4>
        <span>{header}</span>
      </h4>
    </div>

    <div className="body-fit-component-contents-container">
      {fits.map((fit, index) => (
        <div className="each-body-fit-content-container" key={index}>
          <div className="content-image-container">
            <img src={fit.image} alt="" />
          </div>

          <span>{fit.title}</span>
        </div>
      ))}
    </div>
  </div>
);

export default BodyFitComponent;
