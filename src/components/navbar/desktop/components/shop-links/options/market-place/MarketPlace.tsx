import {menMarketPlaceData, wommenMarketPlaceData} from "./data";

const MarketPlaceOptionType = () => {
  const marketPlaceData: {title: string; description: string; image: string}[] =
    menMarketPlaceData;

  return (
    <div className="market-place-option-type-container">
      {marketPlaceData.map((data, index) => (
        <div className="each-market-place-link-container" key={index}>
          <section className="market-place-top-section">
            <img src={data.image} />
            <h4>{data.title}</h4>
          </section>
          <section className="market-place-bottom-section">
            <span>{data.description}</span>
          </section>
        </div>
      ))}
    </div>
  );
};

export default MarketPlaceOptionType;
