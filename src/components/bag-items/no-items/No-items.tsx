const NoBagItems = () => {
  return (
    <div className="no-bag-items-container">
      <div className="bag-icon" />
      <h1>Your bag is empty</h1>
      <p>
        But the items below were moved to your Saved items - <br />
        so you can shop them again if you like! <span>Why?</span>
      </p>
    </div>
  );
};

export default NoBagItems;
